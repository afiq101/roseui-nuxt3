globalThis._importMeta_=globalThis._importMeta_||{url:"file:///_entry.js",env:process.env};import 'node-fetch-native/polyfill';
import { Server as Server$1 } from 'http';
import { Server } from 'https';
import destr from 'destr';
import { eventHandler, setHeaders, sendRedirect, defineEventHandler, handleCacheHeaders, createEvent, getRequestHeader, createError, createApp, createRouter as createRouter$1, lazyEventHandler, toNodeListener } from 'h3';
import { createFetch as createFetch$1, Headers } from 'ohmyfetch';
import { createCall, createFetch } from 'unenv/runtime/fetch/index';
import { createHooks } from 'hookable';
import { snakeCase } from 'scule';
import { hash } from 'ohash';
import { parseURL, withQuery, withLeadingSlash, withoutTrailingSlash, joinURL } from 'ufo';
import { createStorage } from 'unstorage';
import defu from 'defu';
import { toRouteMatcher, createRouter } from 'radix3';
import { promises } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'pathe';

const _runtimeConfig = {"app":{"baseURL":"/","buildAssetsDir":"/_nuxt/","cdnURL":""},"nitro":{"routeRules":{"/__nuxt_error":{"cache":false}},"envPrefix":"NUXT_"},"public":{}};
const ENV_PREFIX = "NITRO_";
const ENV_PREFIX_ALT = _runtimeConfig.nitro.envPrefix ?? process.env.NITRO_ENV_PREFIX ?? "_";
const getEnv = (key) => {
  const envKey = snakeCase(key).toUpperCase();
  return destr(process.env[ENV_PREFIX + envKey] ?? process.env[ENV_PREFIX_ALT + envKey]);
};
function isObject(input) {
  return typeof input === "object" && !Array.isArray(input);
}
function overrideConfig(obj, parentKey = "") {
  for (const key in obj) {
    const subKey = parentKey ? `${parentKey}_${key}` : key;
    const envValue = getEnv(subKey);
    if (isObject(obj[key])) {
      if (isObject(envValue)) {
        obj[key] = { ...obj[key], ...envValue };
      }
      overrideConfig(obj[key], subKey);
    } else {
      obj[key] = envValue ?? obj[key];
    }
  }
}
overrideConfig(_runtimeConfig);
const config$1 = deepFreeze(_runtimeConfig);
const useRuntimeConfig = () => config$1;
function deepFreeze(object) {
  const propNames = Object.getOwnPropertyNames(object);
  for (const name of propNames) {
    const value = object[name];
    if (value && typeof value === "object") {
      deepFreeze(value);
    }
  }
  return Object.freeze(object);
}

const globalTiming = globalThis.__timing__ || {
  start: () => 0,
  end: () => 0,
  metrics: []
};
const timingMiddleware = eventHandler((event) => {
  const start = globalTiming.start();
  const _end = event.res.end;
  event.res.end = function(chunk, encoding, cb) {
    const metrics = [["Generate", globalTiming.end(start)], ...globalTiming.metrics];
    const serverTiming = metrics.map((m) => `-;dur=${m[1]};desc="${encodeURIComponent(m[0])}"`).join(", ");
    if (!event.res.headersSent) {
      event.res.setHeader("Server-Timing", serverTiming);
    }
    _end.call(event.res, chunk, encoding, cb);
    return this;
  }.bind(event.res);
});

const _assets = {

};

function normalizeKey(key) {
  if (!key) {
    return "";
  }
  return key.replace(/[/\\]/g, ":").replace(/:+/g, ":").replace(/^:|:$/g, "");
}

const assets$1 = {
  getKeys() {
    return Promise.resolve(Object.keys(_assets))
  },
  hasItem (id) {
    id = normalizeKey(id);
    return Promise.resolve(id in _assets)
  },
  getItem (id) {
    id = normalizeKey(id);
    return Promise.resolve(_assets[id] ? _assets[id].import() : null)
  },
  getMeta (id) {
    id = normalizeKey(id);
    return Promise.resolve(_assets[id] ? _assets[id].meta : {})
  }
};

const storage = createStorage({});

const useStorage = () => storage;

storage.mount('/assets', assets$1);

const config = useRuntimeConfig();
const _routeRulesMatcher = toRouteMatcher(createRouter({ routes: config.nitro.routeRules }));
function createRouteRulesHandler() {
  return eventHandler((event) => {
    const routeRules = getRouteRules(event);
    if (routeRules.headers) {
      setHeaders(event, routeRules.headers);
    }
    if (routeRules.redirect) {
      return sendRedirect(event, routeRules.redirect.to, routeRules.redirect.statusCode);
    }
  });
}
function getRouteRules(event) {
  event.context._nitro = event.context._nitro || {};
  if (!event.context._nitro.routeRules) {
    const path = new URL(event.req.url, "http://localhost").pathname;
    event.context._nitro.routeRules = getRouteRulesForPath(path);
  }
  return event.context._nitro.routeRules;
}
function getRouteRulesForPath(path) {
  return defu({}, ..._routeRulesMatcher.matchAll(path).reverse());
}

const defaultCacheOptions = {
  name: "_",
  base: "/cache",
  swr: true,
  maxAge: 1
};
function defineCachedFunction(fn, opts) {
  opts = { ...defaultCacheOptions, ...opts };
  const pending = {};
  const group = opts.group || "nitro";
  const name = opts.name || fn.name || "_";
  const integrity = hash([opts.integrity, fn, opts]);
  const validate = opts.validate || (() => true);
  async function get(key, resolver) {
    const cacheKey = [opts.base, group, name, key + ".json"].filter(Boolean).join(":").replace(/:\/$/, ":index");
    const entry = await useStorage().getItem(cacheKey) || {};
    const ttl = (opts.maxAge ?? opts.maxAge ?? 0) * 1e3;
    if (ttl) {
      entry.expires = Date.now() + ttl;
    }
    const expired = entry.integrity !== integrity || ttl && Date.now() - (entry.mtime || 0) > ttl || !validate(entry);
    const _resolve = async () => {
      if (!pending[key]) {
        entry.value = void 0;
        entry.integrity = void 0;
        entry.mtime = void 0;
        entry.expires = void 0;
        pending[key] = Promise.resolve(resolver());
      }
      entry.value = await pending[key];
      entry.mtime = Date.now();
      entry.integrity = integrity;
      delete pending[key];
      if (validate(entry)) {
        useStorage().setItem(cacheKey, entry).catch((error) => console.error("[nitro] [cache]", error));
      }
    };
    const _resolvePromise = expired ? _resolve() : Promise.resolve();
    if (opts.swr && entry.value) {
      _resolvePromise.catch(console.error);
      return Promise.resolve(entry);
    }
    return _resolvePromise.then(() => entry);
  }
  return async (...args) => {
    const key = (opts.getKey || getKey)(...args);
    const entry = await get(key, () => fn(...args));
    let value = entry.value;
    if (opts.transform) {
      value = await opts.transform(entry, ...args) || value;
    }
    return value;
  };
}
const cachedFunction = defineCachedFunction;
function getKey(...args) {
  return args.length ? hash(args, {}) : "";
}
function defineCachedEventHandler(handler, opts = defaultCacheOptions) {
  const _opts = {
    ...opts,
    getKey: (event) => {
      const url = event.req.originalUrl || event.req.url;
      const friendlyName = decodeURI(parseURL(url).pathname).replace(/[^a-zA-Z0-9]/g, "").substring(0, 16);
      const urlHash = hash(url);
      return `${friendlyName}.${urlHash}`;
    },
    validate: (entry) => {
      if (entry.value.code >= 400) {
        return false;
      }
      if (entry.value.body === void 0) {
        return false;
      }
      return true;
    },
    group: opts.group || "nitro/handlers",
    integrity: [
      opts.integrity,
      handler
    ]
  };
  const _cachedHandler = cachedFunction(async (incomingEvent) => {
    const reqProxy = cloneWithProxy(incomingEvent.req, { headers: {} });
    const resHeaders = {};
    let _resSendBody;
    const resProxy = cloneWithProxy(incomingEvent.res, {
      statusCode: 200,
      getHeader(name) {
        return resHeaders[name];
      },
      setHeader(name, value) {
        resHeaders[name] = value;
        return this;
      },
      getHeaderNames() {
        return Object.keys(resHeaders);
      },
      hasHeader(name) {
        return name in resHeaders;
      },
      removeHeader(name) {
        delete resHeaders[name];
      },
      getHeaders() {
        return resHeaders;
      },
      end(chunk, arg2, arg3) {
        if (typeof chunk === "string") {
          _resSendBody = chunk;
        }
        if (typeof arg2 === "function") {
          arg2();
        }
        if (typeof arg3 === "function") {
          arg3();
        }
        return this;
      },
      write(chunk, arg2, arg3) {
        if (typeof chunk === "string") {
          _resSendBody = chunk;
        }
        if (typeof arg2 === "function") {
          arg2();
        }
        if (typeof arg3 === "function") {
          arg3();
        }
        return this;
      },
      writeHead(statusCode, headers2) {
        this.statusCode = statusCode;
        if (headers2) {
          for (const header in headers2) {
            this.setHeader(header, headers2[header]);
          }
        }
        return this;
      }
    });
    const event = createEvent(reqProxy, resProxy);
    event.context = incomingEvent.context;
    const body = await handler(event) || _resSendBody;
    const headers = event.res.getHeaders();
    headers.etag = headers.Etag || headers.etag || `W/"${hash(body)}"`;
    headers["last-modified"] = headers["Last-Modified"] || headers["last-modified"] || new Date().toUTCString();
    const cacheControl = [];
    if (opts.swr) {
      if (opts.maxAge) {
        cacheControl.push(`s-maxage=${opts.maxAge}`);
      }
      if (opts.staleMaxAge) {
        cacheControl.push(`stale-while-revalidate=${opts.staleMaxAge}`);
      } else {
        cacheControl.push("stale-while-revalidate");
      }
    } else if (opts.maxAge) {
      cacheControl.push(`max-age=${opts.maxAge}`);
    }
    if (cacheControl.length) {
      headers["cache-control"] = cacheControl.join(", ");
    }
    const cacheEntry = {
      code: event.res.statusCode,
      headers,
      body
    };
    return cacheEntry;
  }, _opts);
  return defineEventHandler(async (event) => {
    if (opts.headersOnly) {
      if (handleCacheHeaders(event, { maxAge: opts.maxAge })) {
        return;
      }
      return handler(event);
    }
    const response = await _cachedHandler(event);
    if (event.res.headersSent || event.res.writableEnded) {
      return response.body;
    }
    if (handleCacheHeaders(event, {
      modifiedTime: new Date(response.headers["last-modified"]),
      etag: response.headers.etag,
      maxAge: opts.maxAge
    })) {
      return;
    }
    event.res.statusCode = response.code;
    for (const name in response.headers) {
      event.res.setHeader(name, response.headers[name]);
    }
    return response.body;
  });
}
function cloneWithProxy(obj, overrides) {
  return new Proxy(obj, {
    get(target, property, receiver) {
      if (property in overrides) {
        return overrides[property];
      }
      return Reflect.get(target, property, receiver);
    },
    set(target, property, value, receiver) {
      if (property in overrides) {
        overrides[property] = value;
        return true;
      }
      return Reflect.set(target, property, value, receiver);
    }
  });
}
const cachedEventHandler = defineCachedEventHandler;

const script = "const w=window,de=document.documentElement,knownColorSchemes=[\"dark\",\"light\"],preference=window.localStorage.getItem(\"nuxt-color-mode\")||\"system\";let value=preference===\"system\"?getColorScheme():preference;const forcedColorMode=de.getAttribute(\"data-color-mode-forced\");forcedColorMode&&(value=forcedColorMode),addColorScheme(value),w[\"__NUXT_COLOR_MODE__\"]={preference,value,getColorScheme,addColorScheme,removeColorScheme};function addColorScheme(e){const o=\"\"+e+\"\",t=\"\";de.classList?de.classList.add(o):de.className+=\" \"+o,t&&de.setAttribute(\"data-\"+t,e)}function removeColorScheme(e){const o=\"\"+e+\"\",t=\"\";de.classList?de.classList.remove(o):de.className=de.className.replace(new RegExp(o,\"g\"),\"\"),t&&de.removeAttribute(\"data-\"+t)}function prefersColorScheme(e){return w.matchMedia(\"(prefers-color-scheme\"+e+\")\")}function getColorScheme(){if(w.matchMedia&&prefersColorScheme(\"\").media!==\"not all\"){for(const e of knownColorSchemes)if(prefersColorScheme(\":\"+e).matches)return e}return\"light\"}\n";

const _7wsVYn1F7D = (function(nitro) {
  nitro.hooks.hook("render:html", (htmlContext) => {
    htmlContext.head.push(`<script>${script}<\/script>`);
  });
});

const plugins = [
  _7wsVYn1F7D
];

function hasReqHeader(event, name, includes) {
  const value = getRequestHeader(event, name);
  return value && typeof value === "string" && value.toLowerCase().includes(includes);
}
function isJsonRequest(event) {
  return hasReqHeader(event, "accept", "application/json") || hasReqHeader(event, "user-agent", "curl/") || hasReqHeader(event, "user-agent", "httpie/") || event.req.url?.endsWith(".json") || event.req.url?.includes("/api/");
}
function normalizeError(error) {
  const cwd = process.cwd();
  const stack = (error.stack || "").split("\n").splice(1).filter((line) => line.includes("at ")).map((line) => {
    const text = line.replace(cwd + "/", "./").replace("webpack:/", "").replace("file://", "").trim();
    return {
      text,
      internal: line.includes("node_modules") && !line.includes(".cache") || line.includes("internal") || line.includes("new Promise")
    };
  });
  const statusCode = error.statusCode || 500;
  const statusMessage = error.statusMessage ?? (statusCode === 404 ? "Not Found" : "");
  const message = error.message || error.toString();
  return {
    stack,
    statusCode,
    statusMessage,
    message
  };
}

const errorHandler = (async function errorhandler(error, event) {
  const { stack, statusCode, statusMessage, message } = normalizeError(error);
  const errorObject = {
    url: event.req.url,
    statusCode,
    statusMessage,
    message,
    stack: "",
    data: error.data
  };
  event.res.statusCode = errorObject.statusCode !== 200 && errorObject.statusCode || 500;
  if (errorObject.statusMessage) {
    event.res.statusMessage = errorObject.statusMessage;
  }
  if (error.unhandled || error.fatal) {
    const tags = [
      "[nuxt]",
      "[request error]",
      error.unhandled && "[unhandled]",
      error.fatal && "[fatal]",
      Number(errorObject.statusCode) !== 200 && `[${errorObject.statusCode}]`
    ].filter(Boolean).join(" ");
    console.error(tags, errorObject.message + "\n" + stack.map((l) => "  " + l.text).join("  \n"));
  }
  if (isJsonRequest(event)) {
    event.res.setHeader("Content-Type", "application/json");
    event.res.end(JSON.stringify(errorObject));
    return;
  }
  const isErrorPage = event.req.url?.startsWith("/__nuxt_error");
  let html = !isErrorPage ? await $fetch(withQuery("/__nuxt_error", errorObject)).catch(() => null) : null;
  if (!html) {
    const { template } = await import('../error-500.mjs');
    html = template(errorObject);
  }
  event.res.setHeader("Content-Type", "text/html;charset=UTF-8");
  event.res.end(html);
});

const assets = {
  "/favicon.ico": {
    "type": "image/vnd.microsoft.icon",
    "etag": "\"38e7-pBXXjfoSpmN1a7d+VUVmXfbXp40\"",
    "mtime": "2022-11-16T04:28:28.521Z",
    "size": 14567,
    "path": "../public/favicon.ico"
  },
  "/_nuxt/404-2.acc3994c.svg": {
    "type": "image/svg+xml",
    "etag": "\"5c41-Wynl2uQeLg0VpLVa5fQQG3yDAkI\"",
    "mtime": "2022-11-16T04:28:28.521Z",
    "size": 23617,
    "path": "../public/_nuxt/404-2.acc3994c.svg"
  },
  "/_nuxt/404.1da9f3f7.js": {
    "type": "application/javascript",
    "etag": "\"3ae-uswd8q5zGdC8S7yAjQFXIsu/KsI\"",
    "mtime": "2022-11-16T04:28:28.521Z",
    "size": 942,
    "path": "../public/_nuxt/404.1da9f3f7.js"
  },
  "/_nuxt/500.f21aaff3.svg": {
    "type": "image/svg+xml",
    "etag": "\"80d5-rJLyMNSPdDb4DWKV/wrks02k/8U\"",
    "mtime": "2022-11-16T04:28:28.520Z",
    "size": 32981,
    "path": "../public/_nuxt/500.f21aaff3.svg"
  },
  "/_nuxt/500.f7d9cbd7.js": {
    "type": "application/javascript",
    "etag": "\"28b-DChJaFlRxOqzoeCc9Al1Enx5TzQ\"",
    "mtime": "2022-11-16T04:28:28.520Z",
    "size": 651,
    "path": "../public/_nuxt/500.f7d9cbd7.js"
  },
  "/_nuxt/Breadcrumb.5e106003.js": {
    "type": "application/javascript",
    "etag": "\"3cd-QHJR1DT1BEN7f98YSyNpwSH2OvA\"",
    "mtime": "2022-11-16T04:28:28.520Z",
    "size": 973,
    "path": "../public/_nuxt/Breadcrumb.5e106003.js"
  },
  "/_nuxt/Receipt.b6836ad7.js": {
    "type": "application/javascript",
    "etag": "\"650-VznfwrMFV7H8YGW52jlPUBory0I\"",
    "mtime": "2022-11-16T04:28:28.520Z",
    "size": 1616,
    "path": "../public/_nuxt/Receipt.b6836ad7.js"
  },
  "/_nuxt/RsButton.8c0cab6e.js": {
    "type": "application/javascript",
    "etag": "\"1253-y2tYuaswYdpqlgUsSZEWn2QgE2M\"",
    "mtime": "2022-11-16T04:28:28.520Z",
    "size": 4691,
    "path": "../public/_nuxt/RsButton.8c0cab6e.js"
  },
  "/_nuxt/RsCard.a461e6bf.js": {
    "type": "application/javascript",
    "etag": "\"26d-5PBaa3j1uGaiB2llNteLfGJpJjA\"",
    "mtime": "2022-11-16T04:28:28.519Z",
    "size": 621,
    "path": "../public/_nuxt/RsCard.a461e6bf.js"
  },
  "/_nuxt/RsCollapse.27e7666d.js": {
    "type": "application/javascript",
    "etag": "\"76b-NAnF6Eq6z2iPfwFY5G1YB8qsU5g\"",
    "mtime": "2022-11-16T04:28:28.519Z",
    "size": 1899,
    "path": "../public/_nuxt/RsCollapse.27e7666d.js"
  },
  "/_nuxt/RsDropdown.85c8f69a.js": {
    "type": "application/javascript",
    "etag": "\"100b-zQnfoFlwRGoc2kf6oezgLR8dB6U\"",
    "mtime": "2022-11-16T04:28:28.519Z",
    "size": 4107,
    "path": "../public/_nuxt/RsDropdown.85c8f69a.js"
  },
  "/_nuxt/RsProgressBar.eeb48530.js": {
    "type": "application/javascript",
    "etag": "\"4e6-MRFaBULTuk4cxD500zW/f/54SbY\"",
    "mtime": "2022-11-16T04:28:28.519Z",
    "size": 1254,
    "path": "../public/_nuxt/RsProgressBar.eeb48530.js"
  },
  "/_nuxt/RsTable.f8390df1.js": {
    "type": "application/javascript",
    "etag": "\"2dd6-z+7VlBM8vNYkW3bXUCYq6Ew3Isg\"",
    "mtime": "2022-11-16T04:28:28.519Z",
    "size": 11734,
    "path": "../public/_nuxt/RsTable.f8390df1.js"
  },
  "/_nuxt/Skeleton.8b744be4.js": {
    "type": "application/javascript",
    "etag": "\"75d-8FCSDKan8F4nfoGw/PN1t0MaWOM\"",
    "mtime": "2022-11-16T04:28:28.518Z",
    "size": 1885,
    "path": "../public/_nuxt/Skeleton.8b744be4.js"
  },
  "/_nuxt/a11y.5801a756.js": {
    "type": "application/javascript",
    "etag": "\"5078-goUbK5bIL7np9RQ8Orb8Rg5b9uM\"",
    "mtime": "2022-11-16T04:28:28.518Z",
    "size": 20600,
    "path": "../public/_nuxt/a11y.5801a756.js"
  },
  "/_nuxt/advanced.ec53b484.js": {
    "type": "application/javascript",
    "etag": "\"22b-GiQwk/GTi5WI9M5NMuwbVLduT4M\"",
    "mtime": "2022-11-16T04:28:28.518Z",
    "size": 555,
    "path": "../public/_nuxt/advanced.ec53b484.js"
  },
  "/_nuxt/akaun-kredit-institusi.4c97837f.js": {
    "type": "application/javascript",
    "etag": "\"639-yZcAz2G/kn4VDGqhp2vyVZ1qcEA\"",
    "mtime": "2022-11-16T04:28:28.518Z",
    "size": 1593,
    "path": "../public/_nuxt/akaun-kredit-institusi.4c97837f.js"
  },
  "/_nuxt/akaun-kredit-pengguna.6858720e.js": {
    "type": "application/javascript",
    "etag": "\"631-PFJ3WmGETPYyY8YtImDZthzWHLc\"",
    "mtime": "2022-11-16T04:28:28.518Z",
    "size": 1585,
    "path": "../public/_nuxt/akaun-kredit-pengguna.6858720e.js"
  },
  "/_nuxt/alert.3669bfed.js": {
    "type": "application/javascript",
    "etag": "\"1446-NxacFCUrcgjQsHuPH35PCdPjhPs\"",
    "mtime": "2022-11-16T04:28:28.518Z",
    "size": 5190,
    "path": "../public/_nuxt/alert.3669bfed.js"
  },
  "/_nuxt/apex-chart.125e8789.js": {
    "type": "application/javascript",
    "etag": "\"d49-lOiNE4EZOSOP1Py1NeEPtmERNMM\"",
    "mtime": "2022-11-16T04:28:28.517Z",
    "size": 3401,
    "path": "../public/_nuxt/apex-chart.125e8789.js"
  },
  "/_nuxt/auth.bb2ebf32.js": {
    "type": "application/javascript",
    "etag": "\"132-WkHCg7VEZhL3H5hkadsRP+Bk1ag\"",
    "mtime": "2022-11-16T04:28:28.517Z",
    "size": 306,
    "path": "../public/_nuxt/auth.bb2ebf32.js"
  },
  "/_nuxt/badges.66e855c6.js": {
    "type": "application/javascript",
    "etag": "\"128c-gDphFEtBKrBpD4W3zMn31rvA3kQ\"",
    "mtime": "2022-11-16T04:28:28.517Z",
    "size": 4748,
    "path": "../public/_nuxt/badges.66e855c6.js"
  },
  "/_nuxt/basic.b48042e1.js": {
    "type": "application/javascript",
    "etag": "\"501-AFagjwCiSvcSkde61p+ZW3jURS0\"",
    "mtime": "2022-11-16T04:28:28.517Z",
    "size": 1281,
    "path": "../public/_nuxt/basic.b48042e1.js"
  },
  "/_nuxt/buttons.a8b953f4.js": {
    "type": "application/javascript",
    "etag": "\"23fa-jhn+aXXLng66d2/QZT+Ill6hhYQ\"",
    "mtime": "2022-11-16T04:28:28.517Z",
    "size": 9210,
    "path": "../public/_nuxt/buttons.a8b953f4.js"
  },
  "/_nuxt/calendar.a3ea8b43.js": {
    "type": "application/javascript",
    "etag": "\"6f6-Z+7gpZLLiqY1pKF+JfPF8OEh+xc\"",
    "mtime": "2022-11-16T04:28:28.516Z",
    "size": 1782,
    "path": "../public/_nuxt/calendar.a3ea8b43.js"
  },
  "/_nuxt/carousel.82670ba1.js": {
    "type": "application/javascript",
    "etag": "\"511-/pb5OWRSJDfKoIxNsmAiyMDC8fI\"",
    "mtime": "2022-11-16T04:28:28.516Z",
    "size": 1297,
    "path": "../public/_nuxt/carousel.82670ba1.js"
  },
  "/_nuxt/category.34740ef9.js": {
    "type": "application/javascript",
    "etag": "\"2f1-I6WJC457GCxWJs5IhhCHBWL0hJU\"",
    "mtime": "2022-11-16T04:28:28.516Z",
    "size": 753,
    "path": "../public/_nuxt/category.34740ef9.js"
  },
  "/_nuxt/chartjs.ee7c4d4a.js": {
    "type": "application/javascript",
    "etag": "\"c70-srSREzY9dG8js54UP+5NFyNyXkg\"",
    "mtime": "2022-11-16T04:28:28.516Z",
    "size": 3184,
    "path": "../public/_nuxt/chartjs.ee7c4d4a.js"
  },
  "/_nuxt/checkbox.e7009547.js": {
    "type": "application/javascript",
    "etag": "\"572-SZUWLiYkpL3PpYEcTURvrAcWhIo\"",
    "mtime": "2022-11-16T04:28:28.516Z",
    "size": 1394,
    "path": "../public/_nuxt/checkbox.e7009547.js"
  },
  "/_nuxt/checkout.ba831bdc.js": {
    "type": "application/javascript",
    "etag": "\"eca-UAIQeS0WbVhaEIPIoyJPvlMdVm4\"",
    "mtime": "2022-11-16T04:28:28.516Z",
    "size": 3786,
    "path": "../public/_nuxt/checkout.ba831bdc.js"
  },
  "/_nuxt/chevron-right-dark.d2c684ff.svg": {
    "type": "image/svg+xml",
    "etag": "\"218-nn4Yj+Pg/XLAT7sZKXlDx9jqruQ\"",
    "mtime": "2022-11-16T04:28:28.515Z",
    "size": 536,
    "path": "../public/_nuxt/chevron-right-dark.d2c684ff.svg"
  },
  "/_nuxt/chevron-right.50707ae7.svg": {
    "type": "image/svg+xml",
    "etag": "\"fd-h8rPQRVv1cQxTL6l5LYfuqD2U+g\"",
    "mtime": "2022-11-16T04:28:28.515Z",
    "size": 253,
    "path": "../public/_nuxt/chevron-right.50707ae7.svg"
  },
  "/_nuxt/collapse.c5e13f3a.js": {
    "type": "application/javascript",
    "etag": "\"20d3-yC4gQpLMfNIMc9fKzAtvdKqXZGI\"",
    "mtime": "2022-11-16T04:28:28.515Z",
    "size": 8403,
    "path": "../public/_nuxt/collapse.c5e13f3a.js"
  },
  "/_nuxt/colors.deb1a435.js": {
    "type": "application/javascript",
    "etag": "\"1510-f+R4SBmVzTamhlGb4iKPGrMhro8\"",
    "mtime": "2022-11-16T04:28:28.515Z",
    "size": 5392,
    "path": "../public/_nuxt/colors.deb1a435.js"
  },
  "/_nuxt/custom.0edad622.js": {
    "type": "application/javascript",
    "etag": "\"3a1-qwfFFoMe19Na15DnEaJp9h7jado\"",
    "mtime": "2022-11-16T04:28:28.515Z",
    "size": 929,
    "path": "../public/_nuxt/custom.0edad622.js"
  },
  "/_nuxt/dashboard.139ea9e4.js": {
    "type": "application/javascript",
    "etag": "\"68-RL2TKzu7EnhnIx490/KfaOxPP6o\"",
    "mtime": "2022-11-16T04:28:28.514Z",
    "size": 104,
    "path": "../public/_nuxt/dashboard.139ea9e4.js"
  },
  "/_nuxt/dashboard.ceb1489b.js": {
    "type": "application/javascript",
    "etag": "\"1c63-Kvw9PmQn1MYydy1eaiBAMr19zKU\"",
    "mtime": "2022-11-16T04:28:28.514Z",
    "size": 7267,
    "path": "../public/_nuxt/dashboard.ceb1489b.js"
  },
  "/_nuxt/data.b5ed65c2.js": {
    "type": "application/javascript",
    "etag": "\"2431-hP8SZstB2+sXN4muAYl2KjC01Ok\"",
    "mtime": "2022-11-16T04:28:28.514Z",
    "size": 9265,
    "path": "../public/_nuxt/data.b5ed65c2.js"
  },
  "/_nuxt/data.e8b59f98.js": {
    "type": "application/javascript",
    "etag": "\"1c492-rLBlDD7p1W2gcDaP96ZiMpqdusI\"",
    "mtime": "2022-11-16T04:28:28.514Z",
    "size": 115858,
    "path": "../public/_nuxt/data.e8b59f98.js"
  },
  "/_nuxt/date-time.ed02bcef.js": {
    "type": "application/javascript",
    "etag": "\"5cd-cXttxFTTetK6LcNMxCxK+06469s\"",
    "mtime": "2022-11-16T04:28:28.514Z",
    "size": 1485,
    "path": "../public/_nuxt/date-time.ed02bcef.js"
  },
  "/_nuxt/default.19f865da.js": {
    "type": "application/javascript",
    "etag": "\"308f-ec2dMVaeiZLCQhERXh9wp9E6f80\"",
    "mtime": "2022-11-16T04:28:28.511Z",
    "size": 12431,
    "path": "../public/_nuxt/default.19f865da.js"
  },
  "/_nuxt/dropdown.96350547.js": {
    "type": "application/javascript",
    "etag": "\"5911-Q00g26Kb8qbXOVo6E/sIVjr9XLo\"",
    "mtime": "2022-11-16T04:28:28.510Z",
    "size": 22801,
    "path": "../public/_nuxt/dropdown.96350547.js"
  },
  "/_nuxt/empty.c7c35d92.js": {
    "type": "application/javascript",
    "etag": "\"b6-Vk1p0GrhUl4UNT9TgoitaBinc4I\"",
    "mtime": "2022-11-16T04:28:28.510Z",
    "size": 182,
    "path": "../public/_nuxt/empty.c7c35d92.js"
  },
  "/_nuxt/entry.5f4d3365.js": {
    "type": "application/javascript",
    "etag": "\"2f2aec-fIlxvR7TNn72IOy2GWD84toOGVA\"",
    "mtime": "2022-11-16T04:28:28.510Z",
    "size": 3091180,
    "path": "../public/_nuxt/entry.5f4d3365.js"
  },
  "/_nuxt/entry.85434db4.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"291e8-JtOHZQZPWV/fw+rwaYYiqm8xPXE\"",
    "mtime": "2022-11-16T04:28:28.507Z",
    "size": 168424,
    "path": "../public/_nuxt/entry.85434db4.css"
  },
  "/_nuxt/error-404.18ced855.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"e2e-F8gJ3uSz6Dg2HRyb374Ax3RegKE\"",
    "mtime": "2022-11-16T04:28:28.507Z",
    "size": 3630,
    "path": "../public/_nuxt/error-404.18ced855.css"
  },
  "/_nuxt/error-404.722804a6.js": {
    "type": "application/javascript",
    "etag": "\"8a6-HvSvsfWoJ3wZYG8ontv+6K5vt7M\"",
    "mtime": "2022-11-16T04:28:28.507Z",
    "size": 2214,
    "path": "../public/_nuxt/error-404.722804a6.js"
  },
  "/_nuxt/error-500.0ffe7240.js": {
    "type": "application/javascript",
    "etag": "\"754-2pg7St8CGz+EOxTVPuhVvZCrDAI\"",
    "mtime": "2022-11-16T04:28:28.506Z",
    "size": 1876,
    "path": "../public/_nuxt/error-500.0ffe7240.js"
  },
  "/_nuxt/error-500.e60962de.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"79e-VhleGjkSRH7z4cQDJV3dxcboMhU\"",
    "mtime": "2022-11-16T04:28:28.506Z",
    "size": 1950,
    "path": "../public/_nuxt/error-500.e60962de.css"
  },
  "/_nuxt/error-component.fcdfa4fa.js": {
    "type": "application/javascript",
    "etag": "\"465-GVI5NtKZqJgXi2x931rAnqZxrzA\"",
    "mtime": "2022-11-16T04:28:28.506Z",
    "size": 1125,
    "path": "../public/_nuxt/error-component.fcdfa4fa.js"
  },
  "/_nuxt/file.409142d2.js": {
    "type": "application/javascript",
    "etag": "\"1e1-L7ejBpr3RaznDbMkbQfWiGb6jfY\"",
    "mtime": "2022-11-16T04:28:28.506Z",
    "size": 481,
    "path": "../public/_nuxt/file.409142d2.js"
  },
  "/_nuxt/forbidden.85a31ddb.js": {
    "type": "application/javascript",
    "etag": "\"88-qA1tT8ZOOjdGn0HETkRe7x68Vsk\"",
    "mtime": "2022-11-16T04:28:28.506Z",
    "size": 136,
    "path": "../public/_nuxt/forbidden.85a31ddb.js"
  },
  "/_nuxt/forgot-password-v1.153db54e.js": {
    "type": "application/javascript",
    "etag": "\"5a9-AcWiJR8RLmFiaKGpou8hks63C4U\"",
    "mtime": "2022-11-16T04:28:28.505Z",
    "size": 1449,
    "path": "../public/_nuxt/forgot-password-v1.153db54e.js"
  },
  "/_nuxt/forgot-password-v2.4aaf4f38.js": {
    "type": "application/javascript",
    "etag": "\"441-KvCCMYA5ad6qWDqtifna2CPZZKA\"",
    "mtime": "2022-11-16T04:28:28.505Z",
    "size": 1089,
    "path": "../public/_nuxt/forgot-password-v2.4aaf4f38.js"
  },
  "/_nuxt/google-logo.0cf576a5.svg": {
    "type": "image/svg+xml",
    "etag": "\"2b0-RSRYmw3O77auY4nzZjREHfaRUtU\"",
    "mtime": "2022-11-16T04:28:28.505Z",
    "size": 688,
    "path": "../public/_nuxt/google-logo.0cf576a5.svg"
  },
  "/_nuxt/google-logo.b8c1cc4b.js": {
    "type": "application/javascript",
    "etag": "\"54-z8UviMu1b0s8AsRKF+f8+ptz4Mg\"",
    "mtime": "2022-11-16T04:28:28.505Z",
    "size": 84,
    "path": "../public/_nuxt/google-logo.b8c1cc4b.js"
  },
  "/_nuxt/index.067d8b7d.js": {
    "type": "application/javascript",
    "etag": "\"ae-b5qvqMDkDnI9QFNiF30rG4wjGwc\"",
    "mtime": "2022-11-16T04:28:28.505Z",
    "size": 174,
    "path": "../public/_nuxt/index.067d8b7d.js"
  },
  "/_nuxt/index.0b876f3d.js": {
    "type": "application/javascript",
    "etag": "\"ca-U2bzHWJLXh9s9d+sgUQqbNC5K4g\"",
    "mtime": "2022-11-16T04:28:28.505Z",
    "size": 202,
    "path": "../public/_nuxt/index.0b876f3d.js"
  },
  "/_nuxt/index.1d6d5f88.js": {
    "type": "application/javascript",
    "etag": "\"c1-IuTCMwTunhv4f+TJZcz5Kqqw9wU\"",
    "mtime": "2022-11-16T04:28:28.504Z",
    "size": 193,
    "path": "../public/_nuxt/index.1d6d5f88.js"
  },
  "/_nuxt/index.2c891e78.js": {
    "type": "application/javascript",
    "etag": "\"c0-fAja6H4jSnZBXQqJhmBjoG+g5ys\"",
    "mtime": "2022-11-16T04:28:28.504Z",
    "size": 192,
    "path": "../public/_nuxt/index.2c891e78.js"
  },
  "/_nuxt/index.36798010.js": {
    "type": "application/javascript",
    "etag": "\"3f9a-Y2jH1x2EfN+0fWysbwMBXVbDb/I\"",
    "mtime": "2022-11-16T04:28:28.503Z",
    "size": 16282,
    "path": "../public/_nuxt/index.36798010.js"
  },
  "/_nuxt/index.3c56c16a.js": {
    "type": "application/javascript",
    "etag": "\"14a1-rYUnznEmHoG9ZOfSTIAyiMp6V1c\"",
    "mtime": "2022-11-16T04:28:28.503Z",
    "size": 5281,
    "path": "../public/_nuxt/index.3c56c16a.js"
  },
  "/_nuxt/index.5062e8fa.js": {
    "type": "application/javascript",
    "etag": "\"f85-9edaudY24qawYWRE7CLYkE1lFXU\"",
    "mtime": "2022-11-16T04:28:28.503Z",
    "size": 3973,
    "path": "../public/_nuxt/index.5062e8fa.js"
  },
  "/_nuxt/index.65fc86b9.js": {
    "type": "application/javascript",
    "etag": "\"4f7-7orW+joicKKjhINgN4/8Ua2LKfA\"",
    "mtime": "2022-11-16T04:28:28.502Z",
    "size": 1271,
    "path": "../public/_nuxt/index.65fc86b9.js"
  },
  "/_nuxt/index.71b8f7ca.js": {
    "type": "application/javascript",
    "etag": "\"97b-c8pn7OyY3fIx4N7qWhgthWAVmm8\"",
    "mtime": "2022-11-16T04:28:28.502Z",
    "size": 2427,
    "path": "../public/_nuxt/index.71b8f7ca.js"
  },
  "/_nuxt/index.87355423.js": {
    "type": "application/javascript",
    "etag": "\"c2-JY5EtLfrrS3zXlj5NQ70we6jJxE\"",
    "mtime": "2022-11-16T04:28:28.502Z",
    "size": 194,
    "path": "../public/_nuxt/index.87355423.js"
  },
  "/_nuxt/index.8b868353.js": {
    "type": "application/javascript",
    "etag": "\"c0-ughG6xJHL81Qc+dwL6Xi0vjVAj8\"",
    "mtime": "2022-11-16T04:28:28.502Z",
    "size": 192,
    "path": "../public/_nuxt/index.8b868353.js"
  },
  "/_nuxt/index.9938448f.js": {
    "type": "application/javascript",
    "etag": "\"e4f-6Kq6Q6w+p9bsWmZFW5IMh1QacRI\"",
    "mtime": "2022-11-16T04:28:28.502Z",
    "size": 3663,
    "path": "../public/_nuxt/index.9938448f.js"
  },
  "/_nuxt/input-group.51203ef0.js": {
    "type": "application/javascript",
    "etag": "\"80a-emDW8Ksci+C4rJuiY2+Lg4OWvEA\"",
    "mtime": "2022-11-16T04:28:28.501Z",
    "size": 2058,
    "path": "../public/_nuxt/input-group.51203ef0.js"
  },
  "/_nuxt/input-mask.e188db4e.js": {
    "type": "application/javascript",
    "etag": "\"2c4-YYLef58naVbqFyBme/0oBzmk/KU\"",
    "mtime": "2022-11-16T04:28:28.501Z",
    "size": 708,
    "path": "../public/_nuxt/input-mask.e188db4e.js"
  },
  "/_nuxt/input.f7820be3.js": {
    "type": "application/javascript",
    "etag": "\"1534-Dj1GrOG+Wsi9fZSPhFiL96WGBhg\"",
    "mtime": "2022-11-16T04:28:28.501Z",
    "size": 5428,
    "path": "../public/_nuxt/input.f7820be3.js"
  },
  "/_nuxt/login-v1.4354fd9e.js": {
    "type": "application/javascript",
    "etag": "\"813-C6cmgEQnPuBg1IRSVWZQ3HuEqBE\"",
    "mtime": "2022-11-16T04:28:28.501Z",
    "size": 2067,
    "path": "../public/_nuxt/login-v1.4354fd9e.js"
  },
  "/_nuxt/login-v2.9761e3a3.js": {
    "type": "application/javascript",
    "etag": "\"674-6nkYB+iAJa1oMZPLwKQFwbwAAcc\"",
    "mtime": "2022-11-16T04:28:28.501Z",
    "size": 1652,
    "path": "../public/_nuxt/login-v2.9761e3a3.js"
  },
  "/_nuxt/login.48974946.svg": {
    "type": "image/svg+xml",
    "etag": "\"19c4-C61dsKKkqG549ux89o9y2l5EUrw\"",
    "mtime": "2022-11-16T04:28:28.501Z",
    "size": 6596,
    "path": "../public/_nuxt/login.48974946.svg"
  },
  "/_nuxt/login.c5a26381.js": {
    "type": "application/javascript",
    "etag": "\"4e-YZ5qC7b9gRgX4x/OIh5ApHdDk8c\"",
    "mtime": "2022-11-16T04:28:28.500Z",
    "size": 78,
    "path": "../public/_nuxt/login.c5a26381.js"
  },
  "/_nuxt/logo-white.44bb277a.png": {
    "type": "image/png",
    "etag": "\"1b232-EHuulubI2D6ZLWk9/ZYMFqY2vT4\"",
    "mtime": "2022-11-16T04:28:28.500Z",
    "size": 111154,
    "path": "../public/_nuxt/logo-white.44bb277a.png"
  },
  "/_nuxt/logo.af80a588.png": {
    "type": "image/png",
    "etag": "\"12216-GQW3K/O4ATjcPiTGgT4IOAE+0CI\"",
    "mtime": "2022-11-16T04:28:28.500Z",
    "size": 74262,
    "path": "../public/_nuxt/logo.af80a588.png"
  },
  "/_nuxt/modal.919bd84b.js": {
    "type": "application/javascript",
    "etag": "\"4ab5-XEuMa6gMcwtHr94wz1jSjLlPX74\"",
    "mtime": "2022-11-16T04:28:28.500Z",
    "size": 19125,
    "path": "../public/_nuxt/modal.919bd84b.js"
  },
  "/_nuxt/number.7480e0a7.js": {
    "type": "application/javascript",
    "etag": "\"405-TVQrohkdeek7CpDCjQofKynZhMU\"",
    "mtime": "2022-11-16T04:28:28.499Z",
    "size": 1029,
    "path": "../public/_nuxt/number.7480e0a7.js"
  },
  "/_nuxt/nuxt-icon.00d5c641.js": {
    "type": "application/javascript",
    "etag": "\"4aa-vpWr0QDFnvdUY0p9gnlvfr0JBPo\"",
    "mtime": "2022-11-16T04:28:28.499Z",
    "size": 1194,
    "path": "../public/_nuxt/nuxt-icon.00d5c641.js"
  },
  "/_nuxt/password.745acce0.js": {
    "type": "application/javascript",
    "etag": "\"89f-hacMmOH6ihyD99okumLXWn3bVts\"",
    "mtime": "2022-11-16T04:28:28.499Z",
    "size": 2207,
    "path": "../public/_nuxt/password.745acce0.js"
  },
  "/_nuxt/product-detail.0f02133f.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"1f0-o1UIpzKkfG/0rMFcu1a4rwzX0eg\"",
    "mtime": "2022-11-16T04:28:28.499Z",
    "size": 496,
    "path": "../public/_nuxt/product-detail.0f02133f.css"
  },
  "/_nuxt/product-detail.92399a8b.js": {
    "type": "application/javascript",
    "etag": "\"1da0-Vz174pGUuHRWqTfvd+Pm4k8x298\"",
    "mtime": "2022-11-16T04:28:28.499Z",
    "size": 7584,
    "path": "../public/_nuxt/product-detail.92399a8b.js"
  },
  "/_nuxt/products.414ed935.js": {
    "type": "application/javascript",
    "etag": "\"1eca-zJFJxVZVTCF9pzZSkTlhJHZahgI\"",
    "mtime": "2022-11-16T04:28:28.499Z",
    "size": 7882,
    "path": "../public/_nuxt/products.414ed935.js"
  },
  "/_nuxt/progress.614a9240.js": {
    "type": "application/javascript",
    "etag": "\"476-eWlTkgttkMX4BjaoMi597KepKdI\"",
    "mtime": "2022-11-16T04:28:28.498Z",
    "size": 1142,
    "path": "../public/_nuxt/progress.614a9240.js"
  },
  "/_nuxt/radio.c4981c73.js": {
    "type": "application/javascript",
    "etag": "\"38d-/bzAXjHvjtl6M/RV24Ytz+udl1Y\"",
    "mtime": "2022-11-16T04:28:28.498Z",
    "size": 909,
    "path": "../public/_nuxt/radio.c4981c73.js"
  },
  "/_nuxt/register-v1.45e267fa.js": {
    "type": "application/javascript",
    "etag": "\"692-lMQ1SsMY0OT7T7YZdQ2OSxz/lYs\"",
    "mtime": "2022-11-16T04:28:28.498Z",
    "size": 1682,
    "path": "../public/_nuxt/register-v1.45e267fa.js"
  },
  "/_nuxt/register-v2.0608e573.js": {
    "type": "application/javascript",
    "etag": "\"5a0-9tTUMEMI8K9H08QY1VCb3rRZJMk\"",
    "mtime": "2022-11-16T04:28:28.498Z",
    "size": 1440,
    "path": "../public/_nuxt/register-v2.0608e573.js"
  },
  "/_nuxt/reset-password-v1.730494c7.js": {
    "type": "application/javascript",
    "etag": "\"534-7NKAbN8PlR0KLNdmWzOCLP58mFw\"",
    "mtime": "2022-11-16T04:28:28.498Z",
    "size": 1332,
    "path": "../public/_nuxt/reset-password-v1.730494c7.js"
  },
  "/_nuxt/reset-password-v2.1cd2f51b.js": {
    "type": "application/javascript",
    "etag": "\"3fc-WWm1Pw31k9EESCcSQDoZqjKLxK0\"",
    "mtime": "2022-11-16T04:28:28.497Z",
    "size": 1020,
    "path": "../public/_nuxt/reset-password-v2.1cd2f51b.js"
  },
  "/_nuxt/select.c8feac83.js": {
    "type": "application/javascript",
    "etag": "\"6c2-e8mT4rNEA5/Yd9tmMpVFR5aTS3o\"",
    "mtime": "2022-11-16T04:28:28.497Z",
    "size": 1730,
    "path": "../public/_nuxt/select.c8feac83.js"
  },
  "/_nuxt/tab.32df9517.js": {
    "type": "application/javascript",
    "etag": "\"35d8-TBew2NX5SqZ5CBLb9vmi/4xiCF8\"",
    "mtime": "2022-11-16T04:28:28.497Z",
    "size": 13784,
    "path": "../public/_nuxt/tab.32df9517.js"
  },
  "/_nuxt/tambah-nilai.3e9b2a5f.js": {
    "type": "application/javascript",
    "etag": "\"1f8c-tWRSVySp1uyZQRXmSPuw30SW3wo\"",
    "mtime": "2022-11-16T04:28:28.497Z",
    "size": 8076,
    "path": "../public/_nuxt/tambah-nilai.3e9b2a5f.js"
  },
  "/_nuxt/textarea.e017af42.js": {
    "type": "application/javascript",
    "etag": "\"3b5-/OjfUOyWuElu1lEzSR5db/CJOFw\"",
    "mtime": "2022-11-16T04:28:28.497Z",
    "size": 949,
    "path": "../public/_nuxt/textarea.e017af42.js"
  },
  "/_nuxt/typography.692e8ef9.js": {
    "type": "application/javascript",
    "etag": "\"c07-WCrVsKxRXRzNrKzuYec2gqhqMKg\"",
    "mtime": "2022-11-16T04:28:28.496Z",
    "size": 3079,
    "path": "../public/_nuxt/typography.692e8ef9.js"
  },
  "/_nuxt/vcalendar.c9596022.js": {
    "type": "application/javascript",
    "etag": "\"903-U3bKLCVNZ/JBx26cDiL5x9pd1hM\"",
    "mtime": "2022-11-16T04:28:28.496Z",
    "size": 2307,
    "path": "../public/_nuxt/vcalendar.c9596022.js"
  },
  "/_nuxt/vue-quill.6efaf85a.js": {
    "type": "application/javascript",
    "etag": "\"61b-u8CGRhhPQVbXYuoUww4ZMwsTMVQ\"",
    "mtime": "2022-11-16T04:28:28.496Z",
    "size": 1563,
    "path": "../public/_nuxt/vue-quill.6efaf85a.js"
  },
  "/_nuxt/vue-select.7990e19c.js": {
    "type": "application/javascript",
    "etag": "\"16ea-EQgKEOfPz58bej+lR3lUS+cc3Vw\"",
    "mtime": "2022-11-16T04:28:28.496Z",
    "size": 5866,
    "path": "../public/_nuxt/vue-select.7990e19c.js"
  },
  "/_nuxt/wizard.fd74c943.js": {
    "type": "application/javascript",
    "etag": "\"1285-JLyXr4tRehk+B5j7XKxg69K8Xu0\"",
    "mtime": "2022-11-16T04:28:28.496Z",
    "size": 4741,
    "path": "../public/_nuxt/wizard.fd74c943.js"
  }
};

function readAsset (id) {
  const serverDir = dirname(fileURLToPath(globalThis._importMeta_.url));
  return promises.readFile(resolve(serverDir, assets[id].path))
}

const publicAssetBases = [];

function isPublicAssetURL(id = '') {
  if (assets[id]) {
    return true
  }
  for (const base of publicAssetBases) {
    if (id.startsWith(base)) { return true }
  }
  return false
}

function getAsset (id) {
  return assets[id]
}

const METHODS = ["HEAD", "GET"];
const EncodingMap = { gzip: ".gz", br: ".br" };
const _f4b49z = eventHandler((event) => {
  if (event.req.method && !METHODS.includes(event.req.method)) {
    return;
  }
  let id = decodeURIComponent(withLeadingSlash(withoutTrailingSlash(parseURL(event.req.url).pathname)));
  let asset;
  const encodingHeader = String(event.req.headers["accept-encoding"] || "");
  const encodings = encodingHeader.split(",").map((e) => EncodingMap[e.trim()]).filter(Boolean).sort().concat([""]);
  if (encodings.length > 1) {
    event.res.setHeader("Vary", "Accept-Encoding");
  }
  for (const encoding of encodings) {
    for (const _id of [id + encoding, joinURL(id, "index.html" + encoding)]) {
      const _asset = getAsset(_id);
      if (_asset) {
        asset = _asset;
        id = _id;
        break;
      }
    }
  }
  if (!asset) {
    if (isPublicAssetURL(id)) {
      throw createError({
        statusMessage: "Cannot find static asset " + id,
        statusCode: 404
      });
    }
    return;
  }
  const ifNotMatch = event.req.headers["if-none-match"] === asset.etag;
  if (ifNotMatch) {
    event.res.statusCode = 304;
    event.res.end();
    return;
  }
  const ifModifiedSinceH = event.req.headers["if-modified-since"];
  if (ifModifiedSinceH && asset.mtime) {
    if (new Date(ifModifiedSinceH) >= new Date(asset.mtime)) {
      event.res.statusCode = 304;
      event.res.end();
      return;
    }
  }
  if (asset.type && !event.res.getHeader("Content-Type")) {
    event.res.setHeader("Content-Type", asset.type);
  }
  if (asset.etag && !event.res.getHeader("ETag")) {
    event.res.setHeader("ETag", asset.etag);
  }
  if (asset.mtime && !event.res.getHeader("Last-Modified")) {
    event.res.setHeader("Last-Modified", asset.mtime);
  }
  if (asset.encoding && !event.res.getHeader("Content-Encoding")) {
    event.res.setHeader("Content-Encoding", asset.encoding);
  }
  if (asset.size && !event.res.getHeader("Content-Length")) {
    event.res.setHeader("Content-Length", asset.size);
  }
  return readAsset(id);
});

const _lazy_xNctKg = () => import('../list.mjs');
const _lazy_Sf4ZmQ = () => import('../get.mjs');
const _lazy_rZU7D4 = () => import('../list2.mjs');
const _lazy_DJxKqF = () => import('../createPayment.mjs');
const _lazy_xKbBpI = () => import('../list3.mjs');
const _lazy_CUeNi8 = () => import('../list4.mjs');
const _lazy_QwUqLi = () => import('../update.mjs');
const _lazy_bYbKNm = () => import('../list5.mjs');
const _lazy_1XFIkX = () => import('../handlers/renderer.mjs');

const handlers = [
  { route: '', handler: _f4b49z, lazy: false, middleware: true, method: undefined },
  { route: '/api/user/wallet/list', handler: _lazy_xNctKg, lazy: true, middleware: false, method: undefined },
  { route: '/api/user/get', handler: _lazy_Sf4ZmQ, lazy: true, middleware: false, method: undefined },
  { route: '/api/transaction/list', handler: _lazy_rZU7D4, lazy: true, middleware: false, method: undefined },
  { route: '/api/payment/createPayment', handler: _lazy_DJxKqF, lazy: true, middleware: false, method: undefined },
  { route: '/api/organization/wallet/list', handler: _lazy_xKbBpI, lazy: true, middleware: false, method: undefined },
  { route: '/api/organization/list', handler: _lazy_CUeNi8, lazy: true, middleware: false, method: undefined },
  { route: '/api/configuration/update', handler: _lazy_QwUqLi, lazy: true, middleware: false, method: undefined },
  { route: '/api/configuration/list', handler: _lazy_bYbKNm, lazy: true, middleware: false, method: undefined },
  { route: '/__nuxt_error', handler: _lazy_1XFIkX, lazy: true, middleware: false, method: undefined },
  { route: '/**', handler: _lazy_1XFIkX, lazy: true, middleware: false, method: undefined }
];

function createNitroApp() {
  const config = useRuntimeConfig();
  const hooks = createHooks();
  const h3App = createApp({
    debug: destr(false),
    onError: errorHandler
  });
  h3App.use(config.app.baseURL, timingMiddleware);
  const router = createRouter$1();
  h3App.use(createRouteRulesHandler());
  for (const h of handlers) {
    let handler = h.lazy ? lazyEventHandler(h.handler) : h.handler;
    if (h.middleware || !h.route) {
      const middlewareBase = (config.app.baseURL + (h.route || "/")).replace(/\/+/g, "/");
      h3App.use(middlewareBase, handler);
    } else {
      const routeRules = getRouteRulesForPath(h.route.replace(/:\w+|\*\*/g, "_"));
      if (routeRules.cache) {
        handler = cachedEventHandler(handler, {
          group: "nitro/routes",
          ...routeRules.cache
        });
      }
      router.use(h.route, handler, h.method);
    }
  }
  h3App.use(config.app.baseURL, router);
  const localCall = createCall(toNodeListener(h3App));
  const localFetch = createFetch(localCall, globalThis.fetch);
  const $fetch = createFetch$1({ fetch: localFetch, Headers, defaults: { baseURL: config.app.baseURL } });
  globalThis.$fetch = $fetch;
  const app = {
    hooks,
    h3App,
    router,
    localCall,
    localFetch
  };
  for (const plugin of plugins) {
    plugin(app);
  }
  return app;
}
const nitroApp = createNitroApp();
const useNitroApp = () => nitroApp;

const cert = process.env.NITRO_SSL_CERT;
const key = process.env.NITRO_SSL_KEY;
const server = cert && key ? new Server({ key, cert }, toNodeListener(nitroApp.h3App)) : new Server$1(toNodeListener(nitroApp.h3App));
const port = destr(process.env.NITRO_PORT || process.env.PORT) || 3e3;
const host = process.env.NITRO_HOST || process.env.HOST;
const s = server.listen(port, host, (err) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  const protocol = cert && key ? "https" : "http";
  const i = s.address();
  const baseURL = (useRuntimeConfig().app.baseURL || "").replace(/\/$/, "");
  const url = `${protocol}://${i.family === "IPv6" ? `[${i.address}]` : i.address}:${i.port}${baseURL}`;
  console.log(`Listening ${url}`);
});
{
  process.on("unhandledRejection", (err) => console.error("[nitro] [dev] [unhandledRejection] " + err));
  process.on("uncaughtException", (err) => console.error("[nitro] [dev] [uncaughtException] " + err));
}
const nodeServer = {};

export { useRuntimeConfig as a, getRouteRules as g, nodeServer as n, useNitroApp as u };
//# sourceMappingURL=node-server.mjs.map
