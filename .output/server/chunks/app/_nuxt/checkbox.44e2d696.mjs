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
  __name: "checkbox",
  __ssrInlineRender: true,
  setup(__props) {
    const options = ["Audi", "Mazda", "Proton", "Perodua", "BMW", "Mercedes"];
    const options2 = [
      { label: "Shawshank redemption", value: "shawshank" },
      { label: "The Godfather", value: "godfather" },
      {
        label: "Casablanca (too old)",
        value: "casablanca",
        attrs: { disabled: true }
      },
      { label: "The Lord of the Rings", value: "lotr" },
      { label: "Saving Private Ryan", value: "saving-ryan" }
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
            _push2(` Single Checkbox `);
          } else {
            return [
              createTextVNode(" Single Checkbox ")
            ];
          }
        }),
        body: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_FormKit, {
              type: "checkbox",
              label: "Terms and Conditions",
              help: "Do you agree to our terms of service?",
              name: "terms",
              validation: "accepted",
              "validation-visibility": "dirty",
              "input-class": "icon-check"
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_FormKit, {
                type: "checkbox",
                label: "Terms and Conditions",
                help: "Do you agree to our terms of service?",
                name: "terms",
                validation: "accepted",
                "validation-visibility": "dirty",
                "input-class": "icon-check"
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_rs_card, null, {
        header: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Multiple Checkbox `);
          } else {
            return [
              createTextVNode(" Multiple Checkbox ")
            ];
          }
        }),
        body: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_FormKit, {
              type: "checkbox",
              label: "Cars",
              help: "Select your favourite cars?",
              options
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_FormKit, {
                type: "checkbox",
                label: "Cars",
                help: "Select your favourite cars?",
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
            _push2(` Disabled Checkbox Item `);
          } else {
            return [
              createTextVNode(" Disabled Checkbox Item ")
            ];
          }
        }),
        body: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_FormKit, {
              type: "checkbox",
              label: "Movies",
              help: "What is your favourite movie?",
              options: options2
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_FormKit, {
                type: "checkbox",
                label: "Movies",
                help: "What is your favourite movie?",
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
              type: "checkbox",
              label: "Cars",
              help: "Please select at least 3 cars?",
              options,
              validation: "required|min:3",
              "validation-visibility": "dirty"
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_FormKit, {
                type: "checkbox",
                label: "Cars",
                help: "Please select at least 3 cars?",
                options,
                validation: "required|min:3",
                "validation-visibility": "dirty"
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/Kitchensink/form/element/checkbox.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=checkbox.44e2d696.mjs.map
