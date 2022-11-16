import { a as __nuxt_component_0$2 } from '../server.mjs';
import { mergeProps, withCtx, createVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderComponent } from 'vue/server-renderer';
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

const _imports_0 = "" + globalThis.__buildAssetsURL("404-2.acc3994c.svg");
const _sfc_main = {
  __name: "404",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$2;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex h-screen p-6 md:p-10" }, _attrs))}><div class="m-auto"><div class="flex items-center flex-col md:flex-row gap-10"><img class="w-80 flex-shrink"${ssrRenderAttr("src", _imports_0)} alt=""><div class="flex-1 text-center md:text-left items-center"><span class="block mb-2 font-bold text-2xl md:text-3xl">Oops!</span><p class="text-lg md:text-xl font-base"> The page you are looking for does not exist. </p>`);
      _push(ssrRenderComponent(_component_NuxtLink, { to: "/" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<button class="inline-block align-middle md:align-baseline w-full md:w-fit mt-7 md:mt-4 px-4 py-3 rounded-lg shadow-lg shadow-primary-500/30 text-white bg-primary-400 hover:bg-primary-500"${_scopeId}> Back to Home </button>`);
          } else {
            return [
              createVNode("button", { class: "inline-block align-middle md:align-baseline w-full md:w-fit mt-7 md:mt-4 px-4 py-3 rounded-lg shadow-lg shadow-primary-500/30 text-white bg-primary-400 hover:bg-primary-500" }, " Back to Home ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/Kitchensink/error/404.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=404.eb23635e.mjs.map
