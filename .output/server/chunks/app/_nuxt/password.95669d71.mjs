import { c as _sfc_main$q, b as __nuxt_component_1$2, e as __nuxt_component_1$1 } from '../server.mjs';
import { ref, computed, resolveComponent, withCtx, createTextVNode, createVNode, unref, openBlock, createBlock, isRef, createCommentVNode, toDisplayString, useSSRContext } from 'vue';
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

const _sfc_main = {
  __name: "password",
  __ssrInlineRender: true,
  setup(__props) {
    const password = ref("");
    const inputType = ref("password");
    const score = ref(null);
    const strength = ref(null);
    const toggleType = () => {
      inputType.value = inputType.value === "password" ? "text" : "password";
    };
    const computedtype = computed(() => {
      return inputType.value;
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_LayoutsBreadcrumb = _sfc_main$q;
      const _component_rs_card = __nuxt_component_1$2;
      const _component_FormKit = resolveComponent("FormKit");
      const _component_Icon = __nuxt_component_1$1;
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
              type: "password",
              label: "Password"
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_FormKit, {
                type: "password",
                label: "Password"
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_rs_card, null, {
        header: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Confirmation `);
          } else {
            return [
              createTextVNode(" Confirmation ")
            ];
          }
        }),
        body: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_FormKit, { type: "group" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_FormKit, {
                    type: "password",
                    name: "password",
                    label: "Password",
                    help: "Enter a new password",
                    validation: "required"
                  }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_FormKit, {
                    type: "password",
                    name: "password_confirm",
                    label: "Confirm password",
                    help: "Confirm your new password",
                    validation: "required|confirm",
                    "validation-label": "Password confirmation"
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_FormKit, {
                      type: "password",
                      name: "password",
                      label: "Password",
                      help: "Enter a new password",
                      validation: "required"
                    }),
                    createVNode(_component_FormKit, {
                      type: "password",
                      name: "password_confirm",
                      label: "Confirm password",
                      help: "Confirm your new password",
                      validation: "required|confirm",
                      "validation-label": "Password confirmation"
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_FormKit, { type: "group" }, {
                default: withCtx(() => [
                  createVNode(_component_FormKit, {
                    type: "password",
                    name: "password",
                    label: "Password",
                    help: "Enter a new password",
                    validation: "required"
                  }),
                  createVNode(_component_FormKit, {
                    type: "password",
                    name: "password_confirm",
                    label: "Confirm password",
                    help: "Confirm your new password",
                    validation: "required|confirm",
                    "validation-label": "Password confirmation"
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
              type: "password",
              label: "Validate Password",
              validation: "matches:/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[^\\w\\s]).{8,}$/",
              "validation-messages": {
                matches: "The password must contain at least one uppercase letter, one lowercase letter, one digit, one special character and should have 8 characters long."
              },
              "validation-visibility": "dirty"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_FormKit, {
              type: unref(computedtype),
              label: "See Password"
            }, {
              suffix: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<button class="h-full rounded-r-md p-2 flex justify-center items-center"${_scopeId2}>`);
                  if (unref(computedtype) == "password") {
                    _push3(ssrRenderComponent(_component_Icon, {
                      name: "mdi:eye-outline",
                      size: "19"
                    }, null, _parent3, _scopeId2));
                  } else {
                    _push3(ssrRenderComponent(_component_Icon, {
                      name: "mdi:eye-off-outline",
                      size: "19"
                    }, null, _parent3, _scopeId2));
                  }
                  _push3(`</button>`);
                } else {
                  return [
                    createVNode("button", {
                      class: "h-full rounded-r-md p-2 flex justify-center items-center",
                      onClick: toggleType
                    }, [
                      unref(computedtype) == "password" ? (openBlock(), createBlock(_component_Icon, {
                        key: 0,
                        name: "mdi:eye-outline",
                        size: "19"
                      })) : (openBlock(), createBlock(_component_Icon, {
                        key: 1,
                        name: "mdi:eye-off-outline",
                        size: "19"
                      }))
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_FormKit, {
              type: "password",
              label: "Strong Meter Password",
              modelValue: unref(password),
              "onUpdate:modelValue": ($event) => isRef(password) ? password.value = $event : null
            }, {
              messages: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  if (unref(score) < 3 && unref(password) !== "") {
                    _push3(`<ul class="formkit-messages list-none p-0 mt-1 mb-0"${_scopeId2}><li class="formkit-message text-red-500 mb-1 text-xs"${_scopeId2}> Password strength must be at least safe level. </li></ul>`);
                  } else {
                    _push3(`<!---->`);
                  }
                } else {
                  return [
                    unref(score) < 3 && unref(password) !== "" ? (openBlock(), createBlock("ul", {
                      key: 0,
                      class: "formkit-messages list-none p-0 mt-1 mb-0"
                    }, [
                      createVNode("li", { class: "formkit-message text-red-500 mb-1 text-xs" }, " Password strength must be at least safe level. ")
                    ])) : createCommentVNode("", true)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`<div class="flex"${_scopeId}><span class="text-primary-400 font-semibold capitalize"${_scopeId}>${ssrInterpolate(unref(strength))}</span></div>`);
          } else {
            return [
              createVNode(_component_FormKit, {
                type: "password",
                label: "Validate Password",
                validation: "matches:/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[^\\w\\s]).{8,}$/",
                "validation-messages": {
                  matches: "The password must contain at least one uppercase letter, one lowercase letter, one digit, one special character and should have 8 characters long."
                },
                "validation-visibility": "dirty"
              }, null, 8, ["validation-messages"]),
              createVNode(_component_FormKit, {
                type: unref(computedtype),
                label: "See Password"
              }, {
                suffix: withCtx(() => [
                  createVNode("button", {
                    class: "h-full rounded-r-md p-2 flex justify-center items-center",
                    onClick: toggleType
                  }, [
                    unref(computedtype) == "password" ? (openBlock(), createBlock(_component_Icon, {
                      key: 0,
                      name: "mdi:eye-outline",
                      size: "19"
                    })) : (openBlock(), createBlock(_component_Icon, {
                      key: 1,
                      name: "mdi:eye-off-outline",
                      size: "19"
                    }))
                  ])
                ]),
                _: 1
              }, 8, ["type"]),
              createVNode(_component_FormKit, {
                type: "password",
                label: "Strong Meter Password",
                modelValue: unref(password),
                "onUpdate:modelValue": ($event) => isRef(password) ? password.value = $event : null
              }, {
                messages: withCtx(() => [
                  unref(score) < 3 && unref(password) !== "" ? (openBlock(), createBlock("ul", {
                    key: 0,
                    class: "formkit-messages list-none p-0 mt-1 mb-0"
                  }, [
                    createVNode("li", { class: "formkit-message text-red-500 mb-1 text-xs" }, " Password strength must be at least safe level. ")
                  ])) : createCommentVNode("", true)
                ]),
                _: 1
              }, 8, ["modelValue", "onUpdate:modelValue"]),
              createVNode("div", { class: "flex" }, [
                createVNode("span", { class: "text-primary-400 font-semibold capitalize" }, toDisplayString(unref(strength)), 1)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/Kitchensink/form/element/password.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=password.95669d71.mjs.map
