import { a as __nuxt_component_0$2 } from '../server.mjs';
import { resolveComponent, mergeProps, withCtx, createTextVNode, createVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr } from 'vue/server-renderer';
import { _ as _imports_0 } from './google-logo.b8c1cc4b.mjs';
import { _ as _imports_0$1 } from './login.c5a26381.mjs';
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
  __name: "login-v1",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_FormKit = resolveComponent("FormKit");
      const _component_NuxtLink = __nuxt_component_0$2;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex-none lg:flex justify-center h-screen" }, _attrs))}><div class="flex-auto w-full md:w-full lg:w-5/12 bg-white dark:bg-slate-800"><div class="flex h-screen items-start md:items-center justify-start md:justify-center"><div class="w-full md:w-8/12 lg:w-full px-10 md:px-16 py-12 md:py-20"><div class="text-center"></div><h3 class="mb-5">Login</h3><p class="text-slate-500 mb-5"> Welcome to Rose UI. Please login to continue. </p><div class="grid grid-cols-2">`);
      _push(ssrRenderComponent(_component_FormKit, {
        label: "Username",
        type: "text",
        "outer-class": "col-span-2"
      }, null, _parent));
      _push(ssrRenderComponent(_component_FormKit, {
        label: "Password",
        name: "password",
        type: "password",
        "outer-class": "col-span-2"
      }, null, _parent));
      _push(ssrRenderComponent(_component_FormKit, {
        type: "checkbox",
        "input-class": "checked:bg-primary-400 checked:border-transparent",
        label: "Remember Me"
      }, null, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        class: "flex items-center justify-end h-5 mt-1 text-primary-400 hover:underline",
        to: "/auth/forgot-password-v1"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Forgot Password?`);
          } else {
            return [
              createTextVNode("Forgot Password?")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/",
        class: "col-span-2"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_FormKit, {
              type: "button",
              "input-class": "w-full"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Sign In `);
                } else {
                  return [
                    createTextVNode(" Sign In ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_FormKit, {
                type: "button",
                "input-class": "w-full"
              }, {
                default: withCtx(() => [
                  createTextVNode(" Sign In ")
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_FormKit, {
        type: "button",
        "outer-class": "col-span-2",
        "input-class": "w-full btn-white"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex items-center justify-center gap-3"${_scopeId}><img class="w-5"${ssrRenderAttr("src", _imports_0)}${_scopeId}> Sign In with Google </div>`);
          } else {
            return [
              createVNode("div", { class: "flex items-center justify-center gap-3" }, [
                createVNode("img", {
                  class: "w-5",
                  src: _imports_0
                }),
                createTextVNode(" Sign In with Google ")
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><p class="mt-3 text-center text-slate-500"> Don&#39;t have an account? `);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/auth/register-v1",
        class: "text-primary-400 hover:underline"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Sign Up`);
          } else {
            return [
              createTextVNode("Sign Up")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</p></div></div><div class="absolute bottom-5 left-5 text-xs text-slate-400"> \xA9 Rose UI 2022 </div></div><div class="flex-auto w-full lg:w-7/12 m-auto hidden md:block"><div class="flex justify-center items-center"><img class="w-96"${ssrRenderAttr("src", _imports_0$1)}></div></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/Kitchensink/auth/login-v1.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=login-v1.333c0cde.mjs.map
