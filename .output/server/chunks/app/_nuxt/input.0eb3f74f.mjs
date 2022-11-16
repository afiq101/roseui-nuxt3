import { c as _sfc_main$q, b as __nuxt_component_1$2, e as __nuxt_component_1$1, j as useNuxtApp } from '../server.mjs';
import { ref, computed, watch, resolveComponent, withCtx, createVNode, createTextVNode, toDisplayString, useSSRContext, onServerPrefetch, unref } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate } from 'vue/server-renderer';
import 'ohmyfetch';
import 'hookable';
import 'unctx';
import 'ufo';
import 'h3';
import 'defu';
import '@vueuse/shared';
import 'vue-router';
import '@iconify/vue/dist/offline';
import '@iconify/vue';
import 'swiper/vue';
import 'simplebar-vue3';
import 'vue-window-size';
import '@formkit/core';
import 'vue3-click-away';
import '@formkit/utils';
import '@formkit/inputs';
import '@formkit/rules';
import '@formkit/validation';
import '@formkit/i18n';
import '@formkit/themes';
import '@formkit/observer';
import 'vue3-dropzone';
import '@formkit/auto-animate/vue';
import 'maska';
import '@shimyshack/uid';
import 'vue-code-highlight';
import 'vue-country-flag-next';
import '../../nitro/node-server.mjs';
import 'node-fetch-native/polyfill';
import 'http';
import 'https';
import 'destr';
import 'unenv/runtime/fetch/index';
import 'scule';
import 'ohash';
import 'unstorage';
import 'radix3';
import 'node:fs';
import 'node:url';
import 'pathe';

const getDefault = () => null;
function useAsyncData(...args) {
  var _a, _b, _c, _d, _e, _f, _g, _h, _i;
  const autoKey = typeof args[args.length - 1] === "string" ? args.pop() : void 0;
  if (typeof args[0] !== "string") {
    args.unshift(autoKey);
  }
  let [key, handler, options = {}] = args;
  if (typeof key !== "string") {
    throw new TypeError("[nuxt] [asyncData] key must be a string.");
  }
  if (typeof handler !== "function") {
    throw new TypeError("[nuxt] [asyncData] handler must be a function.");
  }
  options.server = (_a = options.server) != null ? _a : true;
  options.default = (_b = options.default) != null ? _b : getDefault;
  if (options.defer) {
    console.warn("[useAsyncData] `defer` has been renamed to `lazy`. Support for `defer` will be removed in RC.");
  }
  options.lazy = (_d = (_c = options.lazy) != null ? _c : options.defer) != null ? _d : false;
  options.initialCache = (_e = options.initialCache) != null ? _e : true;
  options.immediate = (_f = options.immediate) != null ? _f : true;
  const nuxt = useNuxtApp();
  const useInitialCache = () => (nuxt.isHydrating || options.initialCache) && nuxt.payload.data[key] !== void 0;
  if (!nuxt._asyncData[key]) {
    nuxt._asyncData[key] = {
      data: ref(useInitialCache() ? nuxt.payload.data[key] : (_h = (_g = options.default) == null ? void 0 : _g.call(options)) != null ? _h : null),
      pending: ref(!useInitialCache()),
      error: ref((_i = nuxt.payload._errors[key]) != null ? _i : null)
    };
  }
  const asyncData = { ...nuxt._asyncData[key] };
  asyncData.refresh = asyncData.execute = (opts = {}) => {
    if (nuxt._asyncDataPromises[key]) {
      if (opts.dedupe === false) {
        return nuxt._asyncDataPromises[key];
      }
      nuxt._asyncDataPromises[key].cancelled = true;
    }
    if (opts._initial && useInitialCache()) {
      return nuxt.payload.data[key];
    }
    asyncData.pending.value = true;
    const promise = new Promise(
      (resolve, reject) => {
        try {
          resolve(handler(nuxt));
        } catch (err) {
          reject(err);
        }
      }
    ).then((result) => {
      if (promise.cancelled) {
        return nuxt._asyncDataPromises[key];
      }
      if (options.transform) {
        result = options.transform(result);
      }
      if (options.pick) {
        result = pick(result, options.pick);
      }
      asyncData.data.value = result;
      asyncData.error.value = null;
    }).catch((error) => {
      var _a2, _b2;
      if (promise.cancelled) {
        return nuxt._asyncDataPromises[key];
      }
      asyncData.error.value = error;
      asyncData.data.value = unref((_b2 = (_a2 = options.default) == null ? void 0 : _a2.call(options)) != null ? _b2 : null);
    }).finally(() => {
      if (promise.cancelled) {
        return;
      }
      asyncData.pending.value = false;
      nuxt.payload.data[key] = asyncData.data.value;
      if (asyncData.error.value) {
        nuxt.payload._errors[key] = true;
      }
      delete nuxt._asyncDataPromises[key];
    });
    nuxt._asyncDataPromises[key] = promise;
    return nuxt._asyncDataPromises[key];
  };
  const initialFetch = () => asyncData.refresh({ _initial: true });
  const fetchOnServer = options.server !== false && nuxt.payload.serverRendered;
  if (fetchOnServer && options.immediate) {
    const promise = initialFetch();
    onServerPrefetch(() => promise);
  }
  const asyncDataPromise = Promise.resolve(nuxt._asyncDataPromises[key]).then(() => asyncData);
  Object.assign(asyncDataPromise, asyncData);
  return asyncDataPromise;
}
function useLazyAsyncData(...args) {
  const autoKey = typeof args[args.length - 1] === "string" ? args.pop() : void 0;
  if (typeof args[0] !== "string") {
    args.unshift(autoKey);
  }
  const [key, handler, options] = args;
  return useAsyncData(key, handler, { ...options, lazy: true }, null);
}
function pick(obj, keys) {
  const newObj = {};
  for (const key of keys) {
    newObj[key] = obj[key];
  }
  return newObj;
}
const _sfc_main = {
  __name: "input",
  __ssrInlineRender: true,
  setup(__props) {
    const key = ref("jg9dsk23rnfsd");
    computed(() => {
      return key.value;
    });
    const { pending, data: count } = useLazyAsyncData("count", () => $fetch("/api/hello"));
    watch(count, (newCount) => {
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_LayoutsBreadcrumb = _sfc_main$q;
      const _component_rs_card = __nuxt_component_1$2;
      const _component_Icon = __nuxt_component_1$1;
      const _component_FormKit = resolveComponent("FormKit");
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_component_LayoutsBreadcrumb, null, null, _parent));
      _push(ssrRenderComponent(_component_rs_card, null, {
        header: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_Icon, {
              class: "mr-2 flex justify-center",
              name: "ic:outline-info"
            }, null, _parent2, _scopeId));
            _push2(`Info </div>`);
          } else {
            return [
              createVNode("div", { class: "flex" }, [
                createVNode(_component_Icon, {
                  class: "mr-2 flex justify-center",
                  name: "ic:outline-info"
                }),
                createTextVNode("Info ")
              ])
            ];
          }
        }),
        body: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<p class="mb-4"${_scopeId}> This template uses <a href="https://formkit.com" target="_blank" class="hover:underline text-primary-400"${_scopeId}>Formkit</a> which is a powerfull form builder for Vue. It is a Vue component that allows you to create forms with a lot of different elements. ${ssrInterpolate(_ctx.data)}</p>`);
          } else {
            return [
              createVNode("p", { class: "mb-4" }, [
                createTextVNode(" This template uses "),
                createVNode("a", {
                  href: "https://formkit.com",
                  target: "_blank",
                  class: "hover:underline text-primary-400"
                }, "Formkit"),
                createTextVNode(" which is a powerfull form builder for Vue. It is a Vue component that allows you to create forms with a lot of different elements. " + toDisplayString(_ctx.data), 1)
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_rs_card, null, {
        header: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Basic Input`);
          } else {
            return [
              createTextVNode("Basic Input")
            ];
          }
        }),
        body: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="grid grid-cols-1 md:grid-cols-2 gap-x-5"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_FormKit, {
              type: "text",
              label: "Basic"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_FormKit, {
              type: "text",
              label: "Placeholder",
              placeholder: "This is a placeholder"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_FormKit, {
              type: "text",
              label: "Helper Text",
              help: "This is a help text"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_FormKit, {
              type: "text",
              label: "Disabled Input",
              disabled: ""
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_FormKit, {
              type: "text",
              label: "Readonly Input",
              value: "Readonly",
              readonly: ""
            }, null, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "grid grid-cols-1 md:grid-cols-2 gap-x-5" }, [
                createVNode(_component_FormKit, {
                  type: "text",
                  label: "Basic"
                }),
                createVNode(_component_FormKit, {
                  type: "text",
                  label: "Placeholder",
                  placeholder: "This is a placeholder"
                }),
                createVNode(_component_FormKit, {
                  type: "text",
                  label: "Helper Text",
                  help: "This is a help text"
                }),
                createVNode(_component_FormKit, {
                  type: "text",
                  label: "Disabled Input",
                  disabled: ""
                }),
                createVNode(_component_FormKit, {
                  type: "text",
                  label: "Readonly Input",
                  value: "Readonly",
                  readonly: ""
                })
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_rs_card, null, {
        header: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Type`);
          } else {
            return [
              createTextVNode("Type")
            ];
          }
        }),
        body: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="grid grid-cols-1 md:grid-cols-2 gap-x-5"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_FormKit, {
              type: "text",
              label: "Basic"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_FormKit, {
              type: "text",
              label: "Without Border",
              classes: {
                input: "!border-solid border-b",
                inner: "border-none"
              }
            }, null, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "grid grid-cols-1 md:grid-cols-2 gap-x-5" }, [
                createVNode(_component_FormKit, {
                  type: "text",
                  label: "Basic"
                }),
                createVNode(_component_FormKit, {
                  type: "text",
                  label: "Without Border",
                  classes: {
                    input: "!border-solid border-b",
                    inner: "border-none"
                  }
                })
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_rs_card, null, {
        header: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Validation`);
          } else {
            return [
              createTextVNode("Validation")
            ];
          }
        }),
        body: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<p class="mb-4 text-justify"${_scopeId}> Formkit uses easy validation prop <code${_scopeId}>validation</code> to validate its form element. You can use the following validation types: <code${_scopeId}>required</code>, <code${_scopeId}>email</code>, <code${_scopeId}> url</code>, <code${_scopeId}>number</code>, <code${_scopeId}>minLength</code>, <code${_scopeId}>maxLength</code>, <code${_scopeId}>pattern</code> and others. This validation type can also be combine using <code${_scopeId}>|</code>. Visit the <a href="
            https://formkit.com/essentials/validation" target="_blank" class="hover:underline text-primary-400"${_scopeId}>Formkit documentation</a> for more information. </p><div class="grid grid-cols-1 md:grid-cols-2 gap-x-4"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_FormKit, {
              type: "text",
              label: "Required",
              validation: "?required"
            }, {
              label: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<label class="formkit-label text-gray-700 dark:text-gray-200 block mb-2 font-semibold text-sm formkit-invalid:text-red-500"${_scopeId2}>Required <span class="text-danger"${_scopeId2}>*</span></label>`);
                } else {
                  return [
                    createVNode("label", { class: "formkit-label text-gray-700 dark:text-gray-200 block mb-2 font-semibold text-sm formkit-invalid:text-red-500" }, [
                      createTextVNode("Required "),
                      createVNode("span", { class: "text-danger" }, "*")
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_FormKit, {
              type: "text",
              label: "Email",
              validation: "email"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_FormKit, {
              type: "text",
              label: "Url",
              validation: "url"
            }, null, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("p", { class: "mb-4 text-justify" }, [
                createTextVNode(" Formkit uses easy validation prop "),
                createVNode("code", null, "validation"),
                createTextVNode(" to validate its form element. You can use the following validation types: "),
                createVNode("code", null, "required"),
                createTextVNode(", "),
                createVNode("code", null, "email"),
                createTextVNode(", "),
                createVNode("code", null, " url"),
                createTextVNode(", "),
                createVNode("code", null, "number"),
                createTextVNode(", "),
                createVNode("code", null, "minLength"),
                createTextVNode(", "),
                createVNode("code", null, "maxLength"),
                createTextVNode(", "),
                createVNode("code", null, "pattern"),
                createTextVNode(" and others. This validation type can also be combine using "),
                createVNode("code", null, "|"),
                createTextVNode(". Visit the "),
                createVNode("a", {
                  href: "\n            https://formkit.com/essentials/validation",
                  target: "_blank",
                  class: "hover:underline text-primary-400"
                }, "Formkit documentation"),
                createTextVNode(" for more information. ")
              ]),
              createVNode("div", { class: "grid grid-cols-1 md:grid-cols-2 gap-x-4" }, [
                createVNode(_component_FormKit, {
                  type: "text",
                  label: "Required",
                  validation: "?required"
                }, {
                  label: withCtx(() => [
                    createVNode("label", { class: "formkit-label text-gray-700 dark:text-gray-200 block mb-2 font-semibold text-sm formkit-invalid:text-red-500" }, [
                      createTextVNode("Required "),
                      createVNode("span", { class: "text-danger" }, "*")
                    ])
                  ]),
                  _: 1
                }),
                createVNode(_component_FormKit, {
                  type: "text",
                  label: "Email",
                  validation: "email"
                }),
                createVNode(_component_FormKit, {
                  type: "text",
                  label: "Url",
                  validation: "url"
                })
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/Kitchensink/form/element/input.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=input.0eb3f74f.mjs.map
