import { b as __nuxt_component_1$2, a as __nuxt_component_0$2 } from '../server.mjs';
import { resolveComponent, mergeProps, withCtx, createTextVNode, createVNode, useSSRContext } from 'vue';
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
  __name: "register-v2",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_rs_card = __nuxt_component_1$2;
      const _component_FormKit = resolveComponent("FormKit");
      const _component_NuxtLink = __nuxt_component_0$2;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex-none md:flex justify-center text-center items-center h-screen" }, _attrs))}><div class="w-full md:w-3/4 lg:w-1/2 xl:w-2/6">`);
      _push(ssrRenderComponent(_component_rs_card, { class: "h-screen md:h-auto px-10 md:px-16 py-12 md:py-20 mb-0" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<h3 class="mb-4"${_scopeId}>Sign Up</h3><p class="text-slate-500 mb-6 col-sp"${_scopeId}> Please fill in the form to create an account. </p>`);
            _push2(ssrRenderComponent(_component_FormKit, {
              label: "Username",
              type: "text",
              "label-class": "text-left"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_FormKit, {
              label: "Email",
              type: "email",
              "label-class": "text-left"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_FormKit, {
              label: "Password",
              type: "password",
              "label-class": "text-left"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_FormKit, {
              label: "Re-enter Password",
              type: "password",
              "label-class": "text-left"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_FormKit, {
              type: "checkbox",
              label: "agreement",
              "outer-class": "col-span-1 md:col-span-2"
            }, {
              label: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`I agree to the <a class="text-primary-400 hover:underline ml-1"${_scopeId2}>Term and Services</a>`);
                } else {
                  return [
                    createTextVNode("I agree to the "),
                    createVNode("a", { class: "text-primary-400 hover:underline ml-1" }, "Term and Services")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_NuxtLink, {
              to: "/",
              class: "col-span-1 md:col-span-2"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_FormKit, {
                    type: "button",
                    "input-class": "w-full"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`Sign up`);
                      } else {
                        return [
                          createTextVNode("Sign up")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_FormKit, {
                      type: "button",
                      "input-class": "w-full"
                    }, {
                      default: withCtx(() => [
                        createTextVNode("Sign up")
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`<p class="mt-3 text-center text-slate-500"${_scopeId}> Already have an account? `);
            _push2(ssrRenderComponent(_component_NuxtLink, {
              to: "/auth/login-v2",
              class: "text-primary-400 hover:underline"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`Login`);
                } else {
                  return [
                    createTextVNode("Login")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</p>`);
          } else {
            return [
              createVNode("h3", { class: "mb-4" }, "Sign Up"),
              createVNode("p", { class: "text-slate-500 mb-6 col-sp" }, " Please fill in the form to create an account. "),
              createVNode(_component_FormKit, {
                label: "Username",
                type: "text",
                "label-class": "text-left"
              }),
              createVNode(_component_FormKit, {
                label: "Email",
                type: "email",
                "label-class": "text-left"
              }),
              createVNode(_component_FormKit, {
                label: "Password",
                type: "password",
                "label-class": "text-left"
              }),
              createVNode(_component_FormKit, {
                label: "Re-enter Password",
                type: "password",
                "label-class": "text-left"
              }),
              createVNode(_component_FormKit, {
                type: "checkbox",
                label: "agreement",
                "outer-class": "col-span-1 md:col-span-2"
              }, {
                label: withCtx(() => [
                  createTextVNode("I agree to the "),
                  createVNode("a", { class: "text-primary-400 hover:underline ml-1" }, "Term and Services")
                ]),
                _: 1
              }),
              createVNode(_component_NuxtLink, {
                to: "/",
                class: "col-span-1 md:col-span-2"
              }, {
                default: withCtx(() => [
                  createVNode(_component_FormKit, {
                    type: "button",
                    "input-class": "w-full"
                  }, {
                    default: withCtx(() => [
                      createTextVNode("Sign up")
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createVNode("p", { class: "mt-3 text-center text-slate-500" }, [
                createTextVNode(" Already have an account? "),
                createVNode(_component_NuxtLink, {
                  to: "/auth/login-v2",
                  class: "text-primary-400 hover:underline"
                }, {
                  default: withCtx(() => [
                    createTextVNode("Login")
                  ]),
                  _: 1
                })
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/Kitchensink/auth/register-v2.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=register-v2.96d45242.mjs.map
