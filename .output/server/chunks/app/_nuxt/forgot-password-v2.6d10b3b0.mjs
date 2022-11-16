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
  __name: "forgot-password-v2",
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
            _push2(`<h3 class="mb-4"${_scopeId}>Forgot Password</h3><p class="text-slate-500 mb-6"${_scopeId}> Please input the correct email to reset the password. </p><div class="grid grid-cols-1"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_FormKit, {
              label: "Email",
              type: "email",
              "outer-class": "text-left"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_NuxtLink, { to: "/auth/reset-password-v2" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` &gt; `);
                  _push3(ssrRenderComponent(_component_FormKit, {
                    type: "button",
                    "input-class": "w-full"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`Validate Email`);
                      } else {
                        return [
                          createTextVNode("Validate Email")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createTextVNode(" > "),
                    createVNode(_component_FormKit, {
                      type: "button",
                      "input-class": "w-full"
                    }, {
                      default: withCtx(() => [
                        createTextVNode("Validate Email")
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div><p class="mt-3 text-center text-slate-500"${_scopeId}> Already have an account? `);
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
              createVNode("h3", { class: "mb-4" }, "Forgot Password"),
              createVNode("p", { class: "text-slate-500 mb-6" }, " Please input the correct email to reset the password. "),
              createVNode("div", { class: "grid grid-cols-1" }, [
                createVNode(_component_FormKit, {
                  label: "Email",
                  type: "email",
                  "outer-class": "text-left"
                }),
                createVNode(_component_NuxtLink, { to: "/auth/reset-password-v2" }, {
                  default: withCtx(() => [
                    createTextVNode(" > "),
                    createVNode(_component_FormKit, {
                      type: "button",
                      "input-class": "w-full"
                    }, {
                      default: withCtx(() => [
                        createTextVNode("Validate Email")
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                })
              ]),
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/Kitchensink/auth/forgot-password-v2.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=forgot-password-v2.6d10b3b0.mjs.map