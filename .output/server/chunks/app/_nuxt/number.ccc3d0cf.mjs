import { c as _sfc_main$q, b as __nuxt_component_1$2 } from '../server.mjs';
import { resolveComponent, withCtx, createTextVNode, createVNode, useSSRContext } from 'vue';
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
  __name: "number",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_LayoutsBreadcrumb = _sfc_main$q;
      const _component_rs_card = __nuxt_component_1$2;
      const _component_FormKit = resolveComponent("FormKit");
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
            _push2(ssrRenderComponent(_component_FormKit, {
              type: "number",
              help: "What temperature should the house be?",
              label: "Temperature",
              value: "25",
              step: "1"
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_FormKit, {
                type: "number",
                help: "What temperature should the house be?",
                label: "Temperature",
                value: "25",
                step: "1"
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_rs_card, null, {
        header: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Number validation `);
          } else {
            return [
              createTextVNode(" Number validation ")
            ];
          }
        }),
        body: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_FormKit, {
              type: "number",
              help: "The temperature should be between 20 - 50 degrees",
              label: "Temperature",
              value: "20",
              step: "1",
              validation: "between:20,50",
              "validation-visibility": "live"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_FormKit, {
              type: "number",
              help: "Minimum temperature should be 20 degrees",
              label: "Temperature",
              value: "20",
              step: "1",
              validation: "min:20",
              "validation-visibility": "live"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_FormKit, {
              type: "number",
              help: "Maximum temperature should be 50 degrees",
              label: "Temperature",
              value: "50",
              step: "1",
              validation: "max:50",
              "validation-visibility": "live"
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_FormKit, {
                type: "number",
                help: "The temperature should be between 20 - 50 degrees",
                label: "Temperature",
                value: "20",
                step: "1",
                validation: "between:20,50",
                "validation-visibility": "live"
              }),
              createVNode(_component_FormKit, {
                type: "number",
                help: "Minimum temperature should be 20 degrees",
                label: "Temperature",
                value: "20",
                step: "1",
                validation: "min:20",
                "validation-visibility": "live"
              }),
              createVNode(_component_FormKit, {
                type: "number",
                help: "Maximum temperature should be 50 degrees",
                label: "Temperature",
                value: "50",
                step: "1",
                validation: "max:50",
                "validation-visibility": "live"
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/Kitchensink/form/element/number.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=number.ccc3d0cf.mjs.map