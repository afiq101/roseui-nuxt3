import { c as _sfc_main$q, b as __nuxt_component_1$2, t as _sfc_main$e, v as _sfc_main$d, k as __nuxt_component_3 } from '../server.mjs';
import { ref, resolveComponent, withCtx, createTextVNode, createVNode, unref, isRef, useSSRContext } from 'vue';
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
  __name: "tab",
  __ssrInlineRender: true,
  setup(__props) {
    const showCode1 = ref(false);
    const showCode2 = ref(false);
    const showCode3 = ref(false);
    const vertical = ref(false);
    const type = ref("default");
    const variant = ref("primary");
    const fill = ref(false);
    const justify = ref("left");
    const variantOptions = [
      { label: "Primary", value: "primary" },
      { label: "Secondary", value: "secondary" },
      { label: "Success", value: "success" },
      { label: "Danger", value: "danger" },
      { label: "Warning", value: "warning" },
      { label: "Info", value: "info" }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_LayoutsBreadcrumb = _sfc_main$q;
      const _component_rs_card = __nuxt_component_1$2;
      const _component_rs_tab = _sfc_main$e;
      const _component_rs_tab_item = _sfc_main$d;
      const _component_ClientOnly = __nuxt_component_3;
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
            _push2(`<p class="mb-4"${_scopeId}> Use the <code${_scopeId}>rs-tab</code> component to create a tabbed interface. <code${_scopeId}>rs-tab-item</code> is used to create each tab. The tabs are rendered as a list of links. The selected tab is styled differently to indicate it is active. </p>`);
            _push2(ssrRenderComponent(_component_rs_tab, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_rs_tab_item, { title: "Tab 1" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` Tab 1 `);
                      } else {
                        return [
                          createTextVNode(" Tab 1 ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_rs_tab_item, { title: "Tab 2" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` Tab 2 `);
                      } else {
                        return [
                          createTextVNode(" Tab 2 ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_rs_tab_item, { title: "Tab 3" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` Tab 3 `);
                      } else {
                        return [
                          createTextVNode(" Tab 3 ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_rs_tab_item, { title: "Tab 1" }, {
                      default: withCtx(() => [
                        createTextVNode(" Tab 1 ")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_rs_tab_item, { title: "Tab 2" }, {
                      default: withCtx(() => [
                        createTextVNode(" Tab 2 ")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_rs_tab_item, { title: "Tab 3" }, {
                      default: withCtx(() => [
                        createTextVNode(" Tab 3 ")
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`<div class="flex justify-end"${_scopeId}><button class="text-sm border border-slate-200 py-1 px-3 rounded-lg"${_scopeId}> Show Code </button></div>`);
            _push2(ssrRenderComponent(_component_ClientOnly, null, null, _parent2, _scopeId));
          } else {
            return [
              createVNode("p", { class: "mb-4" }, [
                createTextVNode(" Use the "),
                createVNode("code", null, "rs-tab"),
                createTextVNode(" component to create a tabbed interface. "),
                createVNode("code", null, "rs-tab-item"),
                createTextVNode(" is used to create each tab. The tabs are rendered as a list of links. The selected tab is styled differently to indicate it is active. ")
              ]),
              createVNode(_component_rs_tab, null, {
                default: withCtx(() => [
                  createVNode(_component_rs_tab_item, { title: "Tab 1" }, {
                    default: withCtx(() => [
                      createTextVNode(" Tab 1 ")
                    ]),
                    _: 1
                  }),
                  createVNode(_component_rs_tab_item, { title: "Tab 2" }, {
                    default: withCtx(() => [
                      createTextVNode(" Tab 2 ")
                    ]),
                    _: 1
                  }),
                  createVNode(_component_rs_tab_item, { title: "Tab 3" }, {
                    default: withCtx(() => [
                      createTextVNode(" Tab 3 ")
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createVNode("div", { class: "flex justify-end" }, [
                createVNode("button", {
                  class: "text-sm border border-slate-200 py-1 px-3 rounded-lg",
                  onClick: ($event) => unref(showCode1) ? showCode1.value = false : showCode1.value = true
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
            _push2(` Vertical Tab `);
          } else {
            return [
              createTextVNode(" Vertical Tab ")
            ];
          }
        }),
        body: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<p class="mb-4"${_scopeId}> Use props <code${_scopeId}>vertical</code> to create a vertical tabbed interface. </p>`);
            _push2(ssrRenderComponent(_component_rs_tab, { vertical: "" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_rs_tab_item, { title: "Tab 1" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` Tab 1 `);
                      } else {
                        return [
                          createTextVNode(" Tab 1 ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_rs_tab_item, { title: "Tab 2" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` Tab 2 `);
                      } else {
                        return [
                          createTextVNode(" Tab 2 ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_rs_tab_item, { title: "Tab 3" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` Tab 3 `);
                      } else {
                        return [
                          createTextVNode(" Tab 3 ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_rs_tab_item, { title: "Tab 1" }, {
                      default: withCtx(() => [
                        createTextVNode(" Tab 1 ")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_rs_tab_item, { title: "Tab 2" }, {
                      default: withCtx(() => [
                        createTextVNode(" Tab 2 ")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_rs_tab_item, { title: "Tab 3" }, {
                      default: withCtx(() => [
                        createTextVNode(" Tab 3 ")
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`<div class="flex justify-end"${_scopeId}><button class="text-sm border border-slate-200 py-1 px-3 rounded-lg"${_scopeId}> Show Code </button></div>`);
            _push2(ssrRenderComponent(_component_ClientOnly, null, null, _parent2, _scopeId));
          } else {
            return [
              createVNode("p", { class: "mb-4" }, [
                createTextVNode(" Use props "),
                createVNode("code", null, "vertical"),
                createTextVNode(" to create a vertical tabbed interface. ")
              ]),
              createVNode(_component_rs_tab, { vertical: "" }, {
                default: withCtx(() => [
                  createVNode(_component_rs_tab_item, { title: "Tab 1" }, {
                    default: withCtx(() => [
                      createTextVNode(" Tab 1 ")
                    ]),
                    _: 1
                  }),
                  createVNode(_component_rs_tab_item, { title: "Tab 2" }, {
                    default: withCtx(() => [
                      createTextVNode(" Tab 2 ")
                    ]),
                    _: 1
                  }),
                  createVNode(_component_rs_tab_item, { title: "Tab 3" }, {
                    default: withCtx(() => [
                      createTextVNode(" Tab 3 ")
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
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
      _push(ssrRenderComponent(_component_rs_card, null, {
        header: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Styling `);
          } else {
            return [
              createTextVNode(" Styling ")
            ];
          }
        }),
        body: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<p class="mb-4"${_scopeId}> The <code${_scopeId}>rs-tab</code> can be styled using the following props <code${_scopeId}>variant</code> and <code${_scopeId}>type</code>. The <code${_scopeId}>type</code> prop can be used to create a card and border style tab. The <code${_scopeId}>variant</code> prop can be used to change the color of the tab. </p><div class="flex flex-wrap gap-x-5"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_FormKit, {
              label: "Variant",
              type: "radio",
              modelValue: unref(variant),
              "onUpdate:modelValue": ($event) => isRef(variant) ? variant.value = $event : null,
              options: variantOptions,
              classes: {
                options: "flex flex-wrap gap-4 pt-2",
                fieldset: "px-4 py-0 max-w-full"
              }
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_FormKit, {
              modelValue: unref(type),
              "onUpdate:modelValue": ($event) => isRef(type) ? type.value = $event : null,
              type: "radio",
              label: "Type",
              options: [
                { label: "Default", value: "default" },
                { label: "Border", value: "border" },
                { label: "Card", value: "card" }
              ],
              classes: {
                options: "flex flex-wrap gap-4 pt-2",
                fieldset: "px-4 py-0 max-w-full"
              }
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_FormKit, {
              modelValue: unref(vertical),
              "onUpdate:modelValue": ($event) => isRef(vertical) ? vertical.value = $event : null,
              type: "radio",
              label: "Vertical",
              options: [
                { label: "False", value: false },
                { label: "True", value: true }
              ],
              classes: {
                options: "flex flex-wrap gap-4 pt-2",
                fieldset: "px-4 py-0 max-w-full"
              }
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_FormKit, {
              modelValue: unref(fill),
              "onUpdate:modelValue": ($event) => isRef(fill) ? fill.value = $event : null,
              type: "radio",
              label: "Fill",
              options: [
                { label: "False", value: false },
                { label: "True", value: true }
              ],
              classes: {
                options: "flex flex-wrap gap-4 pt-2",
                fieldset: "px-4 py-0 max-w-full"
              }
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_FormKit, {
              modelValue: unref(justify),
              "onUpdate:modelValue": ($event) => isRef(justify) ? justify.value = $event : null,
              type: "radio",
              label: "Justify",
              options: [
                { label: "Left", value: "left" },
                { label: "Center", value: "center" },
                { label: "Right", value: "right" }
              ],
              classes: {
                options: "flex flex-wrap gap-4 pt-2",
                fieldset: "px-4 py-0 max-w-full"
              }
            }, null, _parent2, _scopeId));
            _push2(`</div>`);
            _push2(ssrRenderComponent(_component_rs_tab, {
              variant: unref(variant),
              type: unref(type),
              fill: unref(fill),
              justify: unref(justify),
              vertical: unref(vertical)
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_rs_tab_item, { title: "Tab 1" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` Tab 1 `);
                      } else {
                        return [
                          createTextVNode(" Tab 1 ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_rs_tab_item, { title: "Tab 2" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` Tab 2 `);
                      } else {
                        return [
                          createTextVNode(" Tab 2 ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_rs_tab_item, { title: "Tab 3" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` Tab 3 `);
                      } else {
                        return [
                          createTextVNode(" Tab 3 ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_rs_tab_item, { title: "Tab 1" }, {
                      default: withCtx(() => [
                        createTextVNode(" Tab 1 ")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_rs_tab_item, { title: "Tab 2" }, {
                      default: withCtx(() => [
                        createTextVNode(" Tab 2 ")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_rs_tab_item, { title: "Tab 3" }, {
                      default: withCtx(() => [
                        createTextVNode(" Tab 3 ")
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`<div class="flex justify-end"${_scopeId}><button class="text-sm border border-slate-200 py-1 px-3 rounded-lg"${_scopeId}> Show Code </button></div>`);
            _push2(ssrRenderComponent(_component_ClientOnly, null, null, _parent2, _scopeId));
          } else {
            return [
              createVNode("p", { class: "mb-4" }, [
                createTextVNode(" The "),
                createVNode("code", null, "rs-tab"),
                createTextVNode(" can be styled using the following props "),
                createVNode("code", null, "variant"),
                createTextVNode(" and "),
                createVNode("code", null, "type"),
                createTextVNode(". The "),
                createVNode("code", null, "type"),
                createTextVNode(" prop can be used to create a card and border style tab. The "),
                createVNode("code", null, "variant"),
                createTextVNode(" prop can be used to change the color of the tab. ")
              ]),
              createVNode("div", { class: "flex flex-wrap gap-x-5" }, [
                createVNode(_component_FormKit, {
                  label: "Variant",
                  type: "radio",
                  modelValue: unref(variant),
                  "onUpdate:modelValue": ($event) => isRef(variant) ? variant.value = $event : null,
                  options: variantOptions,
                  classes: {
                    options: "flex flex-wrap gap-4 pt-2",
                    fieldset: "px-4 py-0 max-w-full"
                  }
                }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                createVNode(_component_FormKit, {
                  modelValue: unref(type),
                  "onUpdate:modelValue": ($event) => isRef(type) ? type.value = $event : null,
                  type: "radio",
                  label: "Type",
                  options: [
                    { label: "Default", value: "default" },
                    { label: "Border", value: "border" },
                    { label: "Card", value: "card" }
                  ],
                  classes: {
                    options: "flex flex-wrap gap-4 pt-2",
                    fieldset: "px-4 py-0 max-w-full"
                  }
                }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                createVNode(_component_FormKit, {
                  modelValue: unref(vertical),
                  "onUpdate:modelValue": ($event) => isRef(vertical) ? vertical.value = $event : null,
                  type: "radio",
                  label: "Vertical",
                  options: [
                    { label: "False", value: false },
                    { label: "True", value: true }
                  ],
                  classes: {
                    options: "flex flex-wrap gap-4 pt-2",
                    fieldset: "px-4 py-0 max-w-full"
                  }
                }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                createVNode(_component_FormKit, {
                  modelValue: unref(fill),
                  "onUpdate:modelValue": ($event) => isRef(fill) ? fill.value = $event : null,
                  type: "radio",
                  label: "Fill",
                  options: [
                    { label: "False", value: false },
                    { label: "True", value: true }
                  ],
                  classes: {
                    options: "flex flex-wrap gap-4 pt-2",
                    fieldset: "px-4 py-0 max-w-full"
                  }
                }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                createVNode(_component_FormKit, {
                  modelValue: unref(justify),
                  "onUpdate:modelValue": ($event) => isRef(justify) ? justify.value = $event : null,
                  type: "radio",
                  label: "Justify",
                  options: [
                    { label: "Left", value: "left" },
                    { label: "Center", value: "center" },
                    { label: "Right", value: "right" }
                  ],
                  classes: {
                    options: "flex flex-wrap gap-4 pt-2",
                    fieldset: "px-4 py-0 max-w-full"
                  }
                }, null, 8, ["modelValue", "onUpdate:modelValue"])
              ]),
              createVNode(_component_rs_tab, {
                variant: unref(variant),
                type: unref(type),
                fill: unref(fill),
                justify: unref(justify),
                vertical: unref(vertical)
              }, {
                default: withCtx(() => [
                  createVNode(_component_rs_tab_item, { title: "Tab 1" }, {
                    default: withCtx(() => [
                      createTextVNode(" Tab 1 ")
                    ]),
                    _: 1
                  }),
                  createVNode(_component_rs_tab_item, { title: "Tab 2" }, {
                    default: withCtx(() => [
                      createTextVNode(" Tab 2 ")
                    ]),
                    _: 1
                  }),
                  createVNode(_component_rs_tab_item, { title: "Tab 3" }, {
                    default: withCtx(() => [
                      createTextVNode(" Tab 3 ")
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }, 8, ["variant", "type", "fill", "justify", "vertical"]),
              createVNode("div", { class: "flex justify-end" }, [
                createVNode("button", {
                  class: "text-sm border border-slate-200 py-1 px-3 rounded-lg",
                  onClick: ($event) => unref(showCode3) ? showCode3.value = false : showCode3.value = true
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/Kitchensink/ui/component/tab.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=tab.06e1a798.mjs.map
