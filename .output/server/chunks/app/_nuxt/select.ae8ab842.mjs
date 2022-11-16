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
  __name: "select",
  __ssrInlineRender: true,
  setup(__props) {
    const options = [
      "Malaysia",
      "Singapore",
      "Thailand",
      "Indonesia",
      "Brunei",
      "Laos",
      "Cambodia",
      "Myanmar",
      "Philippines",
      "Vietnam",
      "Timor-Leste"
    ];
    const options2 = [
      { label: "Malaysia", value: "my", attrs: { disabled: true } },
      { label: "Singapore", value: "sg", attrs: { disabled: true } },
      { label: "Thailand", value: "th", attrs: { disabled: true } },
      { label: "Indonesia", value: "id", attrs: { disabled: true } },
      { label: "Brunei", value: "b", attrs: { disabled: true } },
      { label: "Laos", value: "ls", attrs: { disabled: true } },
      { label: "Cambodia", value: "cb", attrs: { disabled: true } },
      { label: "Japan", value: "jp" },
      { label: "Myanmar", value: "mm", attrs: { disabled: true } }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_LayoutsBreadcrumb = _sfc_main$q;
      const _component_rs_card = __nuxt_component_1$2;
      const _component_FormKit = resolveComponent("FormKit");
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_component_LayoutsBreadcrumb, null, null, _parent));
      _push(ssrRenderComponent(_component_rs_card, null, {
        header: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Single Select `);
          } else {
            return [
              createTextVNode(" Single Select ")
            ];
          }
        }),
        body: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_FormKit, {
              type: "select",
              label: "Which country is the biggest?",
              options
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_FormKit, {
                type: "select",
                label: "Which country is the biggest?",
                options
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_rs_card, null, {
        header: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Multiple Select `);
          } else {
            return [
              createTextVNode(" Multiple Select ")
            ];
          }
        }),
        body: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_FormKit, {
              type: "select",
              multiple: "",
              label: "Select all the country that you like?",
              help: "Select all that apply by holding command (macOS) or control (PC).",
              options,
              "input-class": "h-full"
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_FormKit, {
                type: "select",
                multiple: "",
                label: "Select all the country that you like?",
                help: "Select all that apply by holding command (macOS) or control (PC).",
                options,
                "input-class": "h-full"
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_rs_card, null, {
        header: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Disabled Select Item `);
          } else {
            return [
              createTextVNode(" Disabled Select Item ")
            ];
          }
        }),
        body: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_FormKit, {
              type: "select",
              label: "Which country you want to visit?",
              options: options2
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_FormKit, {
                type: "select",
                label: "Which country you want to visit?",
                options: options2
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_rs_card, null, {
        header: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Validation `);
          } else {
            return [
              createTextVNode(" Validation ")
            ];
          }
        }),
        body: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_FormKit, {
              type: "select",
              label: "Which country is the biggest?",
              placeholder: "Select a country",
              options,
              validation: "required|is:Indonesia",
              "validation-visibility": "dirty",
              "validation-messages": {
                is: "Nope! Indonesia is the largest country in the list."
              }
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_FormKit, {
                type: "select",
                label: "Which country is the biggest?",
                placeholder: "Select a country",
                options,
                validation: "required|is:Indonesia",
                "validation-visibility": "dirty",
                "validation-messages": {
                  is: "Nope! Indonesia is the largest country in the list."
                }
              }, null, 8, ["validation-messages"])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/Kitchensink/form/element/select.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=select.ae8ab842.mjs.map
