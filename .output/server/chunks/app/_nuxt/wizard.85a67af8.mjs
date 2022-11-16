import { c as _sfc_main$q, b as __nuxt_component_1$2, l as _sfc_main$l } from '../server.mjs';
import { ref, resolveComponent, withCtx, createTextVNode, createVNode, useSSRContext } from 'vue';
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
  __name: "wizard",
  __ssrInlineRender: true,
  setup(__props) {
    ref("contactInfo");
    const stepNames = ["Contact Info", "Organization Info", "Application"];
    const stepNames2 = ["Contact", "Organization", "Application"];
    function submit() {
      alert("Form submitted");
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_LayoutsBreadcrumb = _sfc_main$q;
      const _component_rs_card = __nuxt_component_1$2;
      const _component_rs_wizard = _sfc_main$l;
      const _component_FormKit = resolveComponent("FormKit");
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_component_LayoutsBreadcrumb, null, null, _parent));
      _push(ssrRenderComponent(_component_rs_card, null, {
        header: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Top Step `);
          } else {
            return [
              createTextVNode(" Top Step ")
            ];
          }
        }),
        body: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_rs_wizard, {
              type: "top",
              steps: stepNames,
              "form-submit": submit,
              "form-action": true,
              "form-step-required": true,
              "form-step-back": true,
              "form-navigate": true,
              "form-error-counter": false
            }, {
              contactinfo: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_FormKit, {
                    type: "text",
                    label: "*First name",
                    help: "Please enter your first name",
                    validation: "required",
                    "validation-visibility": "dirty"
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_FormKit, {
                      type: "text",
                      label: "*First name",
                      help: "Please enter your first name",
                      validation: "required",
                      "validation-visibility": "dirty"
                    })
                  ];
                }
              }),
              organizationinfo: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_FormKit, {
                    type: "text",
                    label: "Organization name",
                    validation: "required",
                    "validation-visibility": "dirty"
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_FormKit, {
                      type: "text",
                      label: "Organization name",
                      validation: "required",
                      "validation-visibility": "dirty"
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_rs_wizard, {
                type: "top",
                steps: stepNames,
                "form-submit": submit,
                "form-action": true,
                "form-step-required": true,
                "form-step-back": true,
                "form-navigate": true,
                "form-error-counter": false
              }, {
                contactinfo: withCtx(() => [
                  createVNode(_component_FormKit, {
                    type: "text",
                    label: "*First name",
                    help: "Please enter your first name",
                    validation: "required",
                    "validation-visibility": "dirty"
                  })
                ]),
                organizationinfo: withCtx(() => [
                  createVNode(_component_FormKit, {
                    type: "text",
                    label: "Organization name",
                    validation: "required",
                    "validation-visibility": "dirty"
                  })
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_rs_card, null, {
        header: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Left Step `);
          } else {
            return [
              createTextVNode(" Left Step ")
            ];
          }
        }),
        body: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_rs_wizard, {
              type: "left",
              steps: stepNames2,
              "form-submit": submit,
              "form-action": true,
              "form-step-required": true,
              "form-step-back": true,
              "form-navigate": false,
              "form-error-counter": false
            }, {
              contact: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_FormKit, {
                    type: "text",
                    label: "*First name",
                    help: "Please enter your first name",
                    validation: "required",
                    "validation-visibility": "dirty"
                  }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_FormKit, {
                    type: "text",
                    label: "*First name",
                    help: "Please enter your first name",
                    validation: "required",
                    "validation-visibility": "dirty"
                  }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_FormKit, {
                    type: "text",
                    label: "*First name",
                    help: "Please enter your first name",
                    validation: "required",
                    "validation-visibility": "dirty"
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_FormKit, {
                      type: "text",
                      label: "*First name",
                      help: "Please enter your first name",
                      validation: "required",
                      "validation-visibility": "dirty"
                    }),
                    createVNode(_component_FormKit, {
                      type: "text",
                      label: "*First name",
                      help: "Please enter your first name",
                      validation: "required",
                      "validation-visibility": "dirty"
                    }),
                    createVNode(_component_FormKit, {
                      type: "text",
                      label: "*First name",
                      help: "Please enter your first name",
                      validation: "required",
                      "validation-visibility": "dirty"
                    })
                  ];
                }
              }),
              organization: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_FormKit, {
                    type: "text",
                    label: "Organization name"
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_FormKit, {
                      type: "text",
                      label: "Organization name"
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_rs_wizard, {
                type: "left",
                steps: stepNames2,
                "form-submit": submit,
                "form-action": true,
                "form-step-required": true,
                "form-step-back": true,
                "form-navigate": false,
                "form-error-counter": false
              }, {
                contact: withCtx(() => [
                  createVNode(_component_FormKit, {
                    type: "text",
                    label: "*First name",
                    help: "Please enter your first name",
                    validation: "required",
                    "validation-visibility": "dirty"
                  }),
                  createVNode(_component_FormKit, {
                    type: "text",
                    label: "*First name",
                    help: "Please enter your first name",
                    validation: "required",
                    "validation-visibility": "dirty"
                  }),
                  createVNode(_component_FormKit, {
                    type: "text",
                    label: "*First name",
                    help: "Please enter your first name",
                    validation: "required",
                    "validation-visibility": "dirty"
                  })
                ]),
                organization: withCtx(() => [
                  createVNode(_component_FormKit, {
                    type: "text",
                    label: "Organization name"
                  })
                ]),
                _: 1
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/Kitchensink/form/wizard.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=wizard.85a67af8.mjs.map
