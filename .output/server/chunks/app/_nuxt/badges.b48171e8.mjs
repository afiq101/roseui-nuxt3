import { c as _sfc_main$q, b as __nuxt_component_1$2, p as _sfc_main$g, k as __nuxt_component_3 } from '../server.mjs';
import { ref, withCtx, createVNode, createTextVNode, unref, useSSRContext } from 'vue';
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
  __name: "badges",
  __ssrInlineRender: true,
  setup(__props) {
    const showCode = ref(false);
    const showCode2 = ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_LayoutsBreadcrumb = _sfc_main$q;
      const _component_rs_card = __nuxt_component_1$2;
      const _component_rs_badge = _sfc_main$g;
      const _component_ClientOnly = __nuxt_component_3;
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_component_LayoutsBreadcrumb, null, null, _parent));
      _push(ssrRenderComponent(_component_rs_card, null, {
        header: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<h5${_scopeId}>Default Badges</h5>`);
          } else {
            return [
              createVNode("h5", null, "Default Badges")
            ];
          }
        }),
        body: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<p class="mb-2"${_scopeId}>Use the <code${_scopeId}>rs-badge</code> to show badges.</p><div class="grid grid-cols-3 md:grid-cols-6 gap-4 gap-y-0"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_rs_badge, {
              variant: "primary",
              class: "mb-4"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Primary `);
                } else {
                  return [
                    createTextVNode(" Primary ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_rs_badge, {
              variant: "info",
              class: "mb-4"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Info `);
                } else {
                  return [
                    createTextVNode(" Info ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_rs_badge, {
              variant: "success",
              class: "mb-4"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Success `);
                } else {
                  return [
                    createTextVNode(" Success ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_rs_badge, {
              variant: "warning",
              class: "mb-4"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Warning `);
                } else {
                  return [
                    createTextVNode(" Warning ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_rs_badge, {
              variant: "danger",
              class: "mb-4"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Danger `);
                } else {
                  return [
                    createTextVNode(" Danger ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div><div class="flex justify-end"${_scopeId}><button class="text-sm border border-slate-200 py-1 px-3 rounded-lg"${_scopeId}> Show Code </button></div>`);
            _push2(ssrRenderComponent(_component_ClientOnly, null, null, _parent2, _scopeId));
          } else {
            return [
              createVNode("p", { class: "mb-2" }, [
                createTextVNode("Use the "),
                createVNode("code", null, "rs-badge"),
                createTextVNode(" to show badges.")
              ]),
              createVNode("div", { class: "grid grid-cols-3 md:grid-cols-6 gap-4 gap-y-0" }, [
                createVNode(_component_rs_badge, {
                  variant: "primary",
                  class: "mb-4"
                }, {
                  default: withCtx(() => [
                    createTextVNode(" Primary ")
                  ]),
                  _: 1
                }),
                createVNode(_component_rs_badge, {
                  variant: "info",
                  class: "mb-4"
                }, {
                  default: withCtx(() => [
                    createTextVNode(" Info ")
                  ]),
                  _: 1
                }),
                createVNode(_component_rs_badge, {
                  variant: "success",
                  class: "mb-4"
                }, {
                  default: withCtx(() => [
                    createTextVNode(" Success ")
                  ]),
                  _: 1
                }),
                createVNode(_component_rs_badge, {
                  variant: "warning",
                  class: "mb-4"
                }, {
                  default: withCtx(() => [
                    createTextVNode(" Warning ")
                  ]),
                  _: 1
                }),
                createVNode(_component_rs_badge, {
                  variant: "danger",
                  class: "mb-4"
                }, {
                  default: withCtx(() => [
                    createTextVNode(" Danger ")
                  ]),
                  _: 1
                })
              ]),
              createVNode("div", { class: "flex justify-end" }, [
                createVNode("button", {
                  class: "text-sm border border-slate-200 py-1 px-3 rounded-lg",
                  onClick: ($event) => unref(showCode) ? showCode.value = false : showCode.value = true
                }, " Show Code ", 8, ["onClick"])
              ]),
              createVNode(_component_ClientOnly)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_rs_card, null, {
        header: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<h5${_scopeId}>Badges With Icon</h5>`);
          } else {
            return [
              createVNode("h5", null, "Badges With Icon")
            ];
          }
        }),
        body: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<p class="mb-2"${_scopeId}> Include props <code${_scopeId}>icon</code> to <code${_scopeId}>rs-badge</code> to show badges. </p><div class="grid grid-cols-3 md:grid-cols-6 gap-4 gap-y-0"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_rs_badge, {
              variant: "primary",
              icon: "star",
              class: "mb-4"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Primary `);
                } else {
                  return [
                    createTextVNode(" Primary ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_rs_badge, {
              variant: "info",
              icon: "star",
              class: "mb-4"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Info `);
                } else {
                  return [
                    createTextVNode(" Info ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_rs_badge, {
              variant: "success",
              icon: "star",
              class: "mb-4"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Success `);
                } else {
                  return [
                    createTextVNode(" Success ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_rs_badge, {
              variant: "warning",
              icon: "star",
              class: "mb-4"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Warning `);
                } else {
                  return [
                    createTextVNode(" Warning ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_rs_badge, {
              variant: "danger",
              icon: "star",
              class: "mb-4"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Danger `);
                } else {
                  return [
                    createTextVNode(" Danger ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div><div class="flex justify-end"${_scopeId}><button class="text-sm border border-slate-200 py-1 px-3 rounded-lg"${_scopeId}> Show Code </button></div>`);
            _push2(ssrRenderComponent(_component_ClientOnly, null, null, _parent2, _scopeId));
          } else {
            return [
              createVNode("p", { class: "mb-2" }, [
                createTextVNode(" Include props "),
                createVNode("code", null, "icon"),
                createTextVNode(" to "),
                createVNode("code", null, "rs-badge"),
                createTextVNode(" to show badges. ")
              ]),
              createVNode("div", { class: "grid grid-cols-3 md:grid-cols-6 gap-4 gap-y-0" }, [
                createVNode(_component_rs_badge, {
                  variant: "primary",
                  icon: "star",
                  class: "mb-4"
                }, {
                  default: withCtx(() => [
                    createTextVNode(" Primary ")
                  ]),
                  _: 1
                }),
                createVNode(_component_rs_badge, {
                  variant: "info",
                  icon: "star",
                  class: "mb-4"
                }, {
                  default: withCtx(() => [
                    createTextVNode(" Info ")
                  ]),
                  _: 1
                }),
                createVNode(_component_rs_badge, {
                  variant: "success",
                  icon: "star",
                  class: "mb-4"
                }, {
                  default: withCtx(() => [
                    createTextVNode(" Success ")
                  ]),
                  _: 1
                }),
                createVNode(_component_rs_badge, {
                  variant: "warning",
                  icon: "star",
                  class: "mb-4"
                }, {
                  default: withCtx(() => [
                    createTextVNode(" Warning ")
                  ]),
                  _: 1
                }),
                createVNode(_component_rs_badge, {
                  variant: "danger",
                  icon: "star",
                  class: "mb-4"
                }, {
                  default: withCtx(() => [
                    createTextVNode(" Danger ")
                  ]),
                  _: 1
                })
              ]),
              createVNode("div", { class: "flex justify-end" }, [
                createVNode("button", {
                  class: "text-sm border border-slate-200 py-1 px-3 rounded-lg",
                  onClick: ($event) => unref(showCode2) ? showCode2.value = false : showCode2.value = true
                }, " Show Code ", 8, ["onClick"])
              ]),
              createVNode(_component_ClientOnly)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/Kitchensink/ui/component/badges.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=badges.b48171e8.mjs.map
