import { c as _sfc_main$q, b as __nuxt_component_1$2, e as __nuxt_component_1$1 } from '../server.mjs';
import { ref, computed, resolveComponent, withCtx, createTextVNode, createVNode, unref, isRef, useSSRContext } from 'vue';
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
  __name: "input-group",
  __ssrInlineRender: true,
  setup(__props) {
    const key = ref("jg9dsk23rnfsd");
    const generateKey = () => {
      key.value = Math.random().toString(36).substring(2, 15);
    };
    const computedKey = computed(() => {
      return key.value;
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
            _push2(`Prefix`);
          } else {
            return [
              createTextVNode("Prefix")
            ];
          }
        }),
        body: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_FormKit, {
              type: "text",
              label: "Text",
              placeholder: "1.00"
            }, {
              prefix: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="p-3"${_scopeId2}>RM</div>`);
                } else {
                  return [
                    createVNode("div", { class: "p-3" }, "RM")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_FormKit, {
              type: "text",
              placeholder: "1.00"
            }, {
              prefix: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="bg-slate-100 dark:bg-slate-700 h-full rounded-l-md p-3"${_scopeId2}> RM </div>`);
                } else {
                  return [
                    createVNode("div", { class: "bg-slate-100 dark:bg-slate-700 h-full rounded-l-md p-3" }, " RM ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_FormKit, {
              type: "text",
              label: "Icon",
              placeholder: "Icon"
            }, {
              prefix: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_Icon, {
                    class: "px-2",
                    name: "ic:outline-info"
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_Icon, {
                      class: "px-2",
                      name: "ic:outline-info"
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_FormKit, {
              type: "text",
              label: "Button",
              modelValue: unref(computedKey),
              "onUpdate:modelValue": ($event) => isRef(computedKey) ? computedKey.value = $event : null,
              placeholder: "Button"
            }, {
              prefix: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<button class="bg-slate-100 hover:bg-slate-200 dark:bg-slate-700 hover:dark:bg-slate-900 h-full rounded-l-md p-3 flex justify-center items-center"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_Icon, {
                    name: "ic:round-refresh",
                    size: "19"
                  }, null, _parent3, _scopeId2));
                  _push3(`</button>`);
                } else {
                  return [
                    createVNode("button", {
                      class: "bg-slate-100 hover:bg-slate-200 dark:bg-slate-700 hover:dark:bg-slate-900 h-full rounded-l-md p-3 flex justify-center items-center",
                      onClick: generateKey
                    }, [
                      createVNode(_component_Icon, {
                        name: "ic:round-refresh",
                        size: "19"
                      })
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_FormKit, {
                type: "text",
                label: "Text",
                placeholder: "1.00"
              }, {
                prefix: withCtx(() => [
                  createVNode("div", { class: "p-3" }, "RM")
                ]),
                _: 1
              }),
              createVNode(_component_FormKit, {
                type: "text",
                placeholder: "1.00"
              }, {
                prefix: withCtx(() => [
                  createVNode("div", { class: "bg-slate-100 dark:bg-slate-700 h-full rounded-l-md p-3" }, " RM ")
                ]),
                _: 1
              }),
              createVNode(_component_FormKit, {
                type: "text",
                label: "Icon",
                placeholder: "Icon"
              }, {
                prefix: withCtx(() => [
                  createVNode(_component_Icon, {
                    class: "px-2",
                    name: "ic:outline-info"
                  })
                ]),
                _: 1
              }),
              createVNode(_component_FormKit, {
                type: "text",
                label: "Button",
                modelValue: unref(computedKey),
                "onUpdate:modelValue": ($event) => isRef(computedKey) ? computedKey.value = $event : null,
                placeholder: "Button"
              }, {
                prefix: withCtx(() => [
                  createVNode("button", {
                    class: "bg-slate-100 hover:bg-slate-200 dark:bg-slate-700 hover:dark:bg-slate-900 h-full rounded-l-md p-3 flex justify-center items-center",
                    onClick: generateKey
                  }, [
                    createVNode(_component_Icon, {
                      name: "ic:round-refresh",
                      size: "19"
                    })
                  ])
                ]),
                _: 1
              }, 8, ["modelValue", "onUpdate:modelValue"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_rs_card, null, {
        header: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Suffix`);
          } else {
            return [
              createTextVNode("Suffix")
            ];
          }
        }),
        body: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_FormKit, {
              type: "text",
              label: "Text",
              placeholder: "10.00"
            }, {
              suffix: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="p-3"${_scopeId2}>Kg</div>`);
                } else {
                  return [
                    createVNode("div", { class: "p-3" }, "Kg")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_FormKit, {
              type: "text",
              placeholder: "1.00"
            }, {
              suffix: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="bg-slate-100 dark:bg-slate-700 h-full rounded-r-md p-3"${_scopeId2}> Kg </div>`);
                } else {
                  return [
                    createVNode("div", { class: "bg-slate-100 dark:bg-slate-700 h-full rounded-r-md p-3" }, " Kg ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_FormKit, {
              type: "text",
              label: "Icon",
              placeholder: "Icon"
            }, {
              suffix: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_Icon, {
                    class: "px-2",
                    name: "ic:outline-info"
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_Icon, {
                      class: "px-2",
                      name: "ic:outline-info"
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_FormKit, {
              type: "text",
              label: "Button",
              modelValue: unref(computedKey),
              "onUpdate:modelValue": ($event) => isRef(computedKey) ? computedKey.value = $event : null,
              placeholder: "Button"
            }, {
              suffix: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<button class="bg-slate-100 hover:bg-slate-200 dark:bg-slate-700 hover:dark:bg-slate-900 h-full rounded-r-md p-3 flex justify-center items-center"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_Icon, {
                    name: "ic:round-refresh",
                    size: "19"
                  }, null, _parent3, _scopeId2));
                  _push3(`</button>`);
                } else {
                  return [
                    createVNode("button", {
                      class: "bg-slate-100 hover:bg-slate-200 dark:bg-slate-700 hover:dark:bg-slate-900 h-full rounded-r-md p-3 flex justify-center items-center",
                      onClick: generateKey
                    }, [
                      createVNode(_component_Icon, {
                        name: "ic:round-refresh",
                        size: "19"
                      })
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_FormKit, {
                type: "text",
                label: "Text",
                placeholder: "10.00"
              }, {
                suffix: withCtx(() => [
                  createVNode("div", { class: "p-3" }, "Kg")
                ]),
                _: 1
              }),
              createVNode(_component_FormKit, {
                type: "text",
                placeholder: "1.00"
              }, {
                suffix: withCtx(() => [
                  createVNode("div", { class: "bg-slate-100 dark:bg-slate-700 h-full rounded-r-md p-3" }, " Kg ")
                ]),
                _: 1
              }),
              createVNode(_component_FormKit, {
                type: "text",
                label: "Icon",
                placeholder: "Icon"
              }, {
                suffix: withCtx(() => [
                  createVNode(_component_Icon, {
                    class: "px-2",
                    name: "ic:outline-info"
                  })
                ]),
                _: 1
              }),
              createVNode(_component_FormKit, {
                type: "text",
                label: "Button",
                modelValue: unref(computedKey),
                "onUpdate:modelValue": ($event) => isRef(computedKey) ? computedKey.value = $event : null,
                placeholder: "Button"
              }, {
                suffix: withCtx(() => [
                  createVNode("button", {
                    class: "bg-slate-100 hover:bg-slate-200 dark:bg-slate-700 hover:dark:bg-slate-900 h-full rounded-r-md p-3 flex justify-center items-center",
                    onClick: generateKey
                  }, [
                    createVNode(_component_Icon, {
                      name: "ic:round-refresh",
                      size: "19"
                    })
                  ])
                ]),
                _: 1
              }, 8, ["modelValue", "onUpdate:modelValue"])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/Kitchensink/form/element/input-group.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=input-group.b809493f.mjs.map
