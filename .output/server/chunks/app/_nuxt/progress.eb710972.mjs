import { c as _sfc_main$q, b as __nuxt_component_1$2, h as _sfc_main$m } from '../server.mjs';
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
  __name: "progress",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_LayoutsBreadcrumb = _sfc_main$q;
      const _component_rs_card = __nuxt_component_1$2;
      const _component_rs_progress_bar = _sfc_main$m;
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_component_LayoutsBreadcrumb, null, null, _parent));
      _push(ssrRenderComponent(_component_rs_card, null, {
        header: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Default `);
          } else {
            return [
              createTextVNode(" Default ")
            ];
          }
        }),
        body: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<p class="mb-4"${_scopeId}> Use the <code${_scopeId}>rs-progress-bar</code> component to create a progress bar. There are props to change the color, size, max, show value, and value. </p>`);
            _push2(ssrRenderComponent(_component_rs_progress_bar, {
              label: "Primary Progress",
              value: 11,
              max: 100,
              variant: "primary",
              size: "md",
              "show-value": true
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_rs_progress_bar, {
              label: "Secondary Progress",
              value: 43,
              max: 100,
              variant: "secondary",
              size: "md",
              "show-value": true
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_rs_progress_bar, {
              label: "Success Progress",
              value: 45,
              max: 100,
              variant: "success",
              size: "md",
              "show-value": true
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_rs_progress_bar, {
              label: "Danger Progress",
              value: 90,
              max: 100,
              variant: "danger",
              size: "md",
              "show-value": true
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_rs_progress_bar, {
              label: "Warning Progress",
              value: 36,
              max: 100,
              variant: "warning",
              size: "md",
              "show-value": true
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_rs_progress_bar, {
              label: "Info Progress",
              value: 25,
              max: 100,
              variant: "info",
              size: "md",
              "show-value": true
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode("p", { class: "mb-4" }, [
                createTextVNode(" Use the "),
                createVNode("code", null, "rs-progress-bar"),
                createTextVNode(" component to create a progress bar. There are props to change the color, size, max, show value, and value. ")
              ]),
              createVNode(_component_rs_progress_bar, {
                label: "Primary Progress",
                value: 11,
                max: 100,
                variant: "primary",
                size: "md",
                "show-value": true
              }),
              createVNode(_component_rs_progress_bar, {
                label: "Secondary Progress",
                value: 43,
                max: 100,
                variant: "secondary",
                size: "md",
                "show-value": true
              }),
              createVNode(_component_rs_progress_bar, {
                label: "Success Progress",
                value: 45,
                max: 100,
                variant: "success",
                size: "md",
                "show-value": true
              }),
              createVNode(_component_rs_progress_bar, {
                label: "Danger Progress",
                value: 90,
                max: 100,
                variant: "danger",
                size: "md",
                "show-value": true
              }),
              createVNode(_component_rs_progress_bar, {
                label: "Warning Progress",
                value: 36,
                max: 100,
                variant: "warning",
                size: "md",
                "show-value": true
              }),
              createVNode(_component_rs_progress_bar, {
                label: "Info Progress",
                value: 25,
                max: 100,
                variant: "info",
                size: "md",
                "show-value": true
              })
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/Kitchensink/ui/component/progress.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=progress.eb710972.mjs.map
