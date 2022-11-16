import { c as _sfc_main$q, b as __nuxt_component_1$2, k as __nuxt_component_3 } from '../server.mjs';
import { withCtx, createTextVNode, createVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
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

const _sfc_main = {
  __name: "vue-quill",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_LayoutsBreadcrumb = _sfc_main$q;
      const _component_rs_card = __nuxt_component_1$2;
      const _component_ClientOnly = __nuxt_component_3;
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_component_LayoutsBreadcrumb, null, null, _parent));
      _push(ssrRenderComponent(_component_rs_card, null, {
        header: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Info `);
          } else {
            return [
              createTextVNode(" Info ")
            ];
          }
        }),
        body: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<p class="text-justify mb-4"${_scopeId}><a href="https://vueup.github.io/vue-quill/" target="_blank" class="hover:underline text-primary-400"${_scopeId}>VueQuill</a> is a WYSIWYG editor that can be used to create content in a visual manner. It is a fully-featured editor that can be used to create content in a visual manner. VueQuill is a Component for building rich text editors, powered by Vue 3 and Quill. </p>`);
          } else {
            return [
              createVNode("p", { class: "text-justify mb-4" }, [
                createVNode("a", {
                  href: "https://vueup.github.io/vue-quill/",
                  target: "_blank",
                  class: "hover:underline text-primary-400"
                }, "VueQuill"),
                createTextVNode(" is a WYSIWYG editor that can be used to create content in a visual manner. It is a fully-featured editor that can be used to create content in a visual manner. VueQuill is a Component for building rich text editors, powered by Vue 3 and Quill. ")
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_rs_card, null, {
        header: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` How to use? `);
          } else {
            return [
              createTextVNode(" How to use? ")
            ];
          }
        }),
        body: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<p class="mb-4"${_scopeId}> There are editor configuration options that can be used to customize the editor. For example, you can set the editor language, the editor theme, the editor toolbar, the editor plugins, etc. The editor configuration options are available in the editor configuration object. see this link for more information: <a href="https://vueup.github.io/vue-quill/guide/" target="_blank" class="hover:underline text-primary-400"${_scopeId}>https://vueup.github.io/vue-quill/guide/</a></p><div class="mb-4"${_scopeId}><label for="country" class="text-gray-700 dark:text-gray-200 block mb-2 font-semibold text-sm"${_scopeId}>Advanced List</label>`);
            _push2(ssrRenderComponent(_component_ClientOnly, null, null, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("p", { class: "mb-4" }, [
                createTextVNode(" There are editor configuration options that can be used to customize the editor. For example, you can set the editor language, the editor theme, the editor toolbar, the editor plugins, etc. The editor configuration options are available in the editor configuration object. see this link for more information: "),
                createVNode("a", {
                  href: "https://vueup.github.io/vue-quill/guide/",
                  target: "_blank",
                  class: "hover:underline text-primary-400"
                }, "https://vueup.github.io/vue-quill/guide/")
              ]),
              createVNode("div", { class: "mb-4" }, [
                createVNode("label", {
                  for: "country",
                  class: "text-gray-700 dark:text-gray-200 block mb-2 font-semibold text-sm"
                }, "Advanced List"),
                createVNode(_component_ClientOnly)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/Kitchensink/form/element/vue-quill.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=vue-quill.e7017b0b.mjs.map
