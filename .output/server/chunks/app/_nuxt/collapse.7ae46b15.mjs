import { c as _sfc_main$q, b as __nuxt_component_1$2, f as _sfc_main$o, g as _sfc_main$n, k as __nuxt_component_3 } from '../server.mjs';
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
  __name: "collapse",
  __ssrInlineRender: true,
  setup(__props) {
    const type = ref("default");
    const showCode1 = ref(false);
    const showCode2 = ref(false);
    const showCode3 = ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_LayoutsBreadcrumb = _sfc_main$q;
      const _component_rs_card = __nuxt_component_1$2;
      const _component_rs_collapse = _sfc_main$o;
      const _component_rs_collapse_item = _sfc_main$n;
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
            _push2(`<p class="mb-2"${_scopeId}> Use the <code${_scopeId}>rs-collapse</code> to show collapse. <code${_scopeId}>rs-collapse-item</code> is used to show collapse item. </p>`);
            _push2(ssrRenderComponent(_component_rs_collapse, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_rs_collapse_item, { title: "Collapse Item 1" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<p class="text-justify"${_scopeId3}> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&#39;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. </p>`);
                      } else {
                        return [
                          createVNode("p", { class: "text-justify" }, " Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_rs_collapse_item, { title: "Collapse Item 2" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<p${_scopeId3}>Collapse Item 1 content</p>`);
                      } else {
                        return [
                          createVNode("p", null, "Collapse Item 1 content")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_rs_collapse_item, { title: "Collapse Item 1" }, {
                      default: withCtx(() => [
                        createVNode("p", { class: "text-justify" }, " Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. ")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_rs_collapse_item, { title: "Collapse Item 2" }, {
                      default: withCtx(() => [
                        createVNode("p", null, "Collapse Item 1 content")
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
              createVNode("p", { class: "mb-2" }, [
                createTextVNode(" Use the "),
                createVNode("code", null, "rs-collapse"),
                createTextVNode(" to show collapse. "),
                createVNode("code", null, "rs-collapse-item"),
                createTextVNode(" is used to show collapse item. ")
              ]),
              createVNode(_component_rs_collapse, null, {
                default: withCtx(() => [
                  createVNode(_component_rs_collapse_item, { title: "Collapse Item 1" }, {
                    default: withCtx(() => [
                      createVNode("p", { class: "text-justify" }, " Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. ")
                    ]),
                    _: 1
                  }),
                  createVNode(_component_rs_collapse_item, { title: "Collapse Item 2" }, {
                    default: withCtx(() => [
                      createVNode("p", null, "Collapse Item 1 content")
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
            _push2(` Accordion `);
          } else {
            return [
              createTextVNode(" Accordion ")
            ];
          }
        }),
        body: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<p class="mb-2"${_scopeId}> Use the <code${_scopeId}>accordion</code> prop to <code${_scopeId}>rs-collapse</code> to make it accordion. </p>`);
            _push2(ssrRenderComponent(_component_rs_collapse, { accordion: "" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_rs_collapse_item, { title: "Accordion Item 1" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<p class="text-justify"${_scopeId3}> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&#39;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. </p>`);
                      } else {
                        return [
                          createVNode("p", { class: "text-justify" }, " Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_rs_collapse_item, { title: "Accordion Item 2" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<p${_scopeId3}>Collapse Item 1 content</p>`);
                      } else {
                        return [
                          createVNode("p", null, "Collapse Item 1 content")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_rs_collapse_item, { title: "Accordion Item 1" }, {
                      default: withCtx(() => [
                        createVNode("p", { class: "text-justify" }, " Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. ")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_rs_collapse_item, { title: "Accordion Item 2" }, {
                      default: withCtx(() => [
                        createVNode("p", null, "Collapse Item 1 content")
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
              createVNode("p", { class: "mb-2" }, [
                createTextVNode(" Use the "),
                createVNode("code", null, "accordion"),
                createTextVNode(" prop to "),
                createVNode("code", null, "rs-collapse"),
                createTextVNode(" to make it accordion. ")
              ]),
              createVNode(_component_rs_collapse, { accordion: "" }, {
                default: withCtx(() => [
                  createVNode(_component_rs_collapse_item, { title: "Accordion Item 1" }, {
                    default: withCtx(() => [
                      createVNode("p", { class: "text-justify" }, " Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. ")
                    ]),
                    _: 1
                  }),
                  createVNode(_component_rs_collapse_item, { title: "Accordion Item 2" }, {
                    default: withCtx(() => [
                      createVNode("p", null, "Collapse Item 1 content")
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
            _push2(` Type `);
          } else {
            return [
              createTextVNode(" Type ")
            ];
          }
        }),
        body: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<p class="mb-2"${_scopeId}> Use the <code${_scopeId}>type</code> prop to <code${_scopeId}>rs-collapse</code> to make it accordion. The type can be <code${_scopeId}>default</code>, <code${_scopeId}>border</code> and <code${_scopeId}>card</code>. </p>`);
            _push2(ssrRenderComponent(_component_FormKit, {
              modelValue: unref(type),
              "onUpdate:modelValue": ($event) => isRef(type) ? type.value = $event : null,
              type: "radio",
              label: "Type",
              options: [
                { label: "Default", value: "default" },
                { label: "Border", value: "border" },
                { label: "Card", value: "card" }
              ]
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_rs_collapse, { type: unref(type) }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_rs_collapse_item, { title: "Collapse Item 1" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<p class="text-justify"${_scopeId3}> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&#39;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. </p>`);
                      } else {
                        return [
                          createVNode("p", { class: "text-justify" }, " Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_rs_collapse_item, { title: "Collapse Item 2" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<p${_scopeId3}>Collapse Item 2 content</p>`);
                      } else {
                        return [
                          createVNode("p", null, "Collapse Item 2 content")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_rs_collapse_item, { title: "Collapse Item 3" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<p${_scopeId3}>Collapse Item 13 content</p>`);
                      } else {
                        return [
                          createVNode("p", null, "Collapse Item 13 content")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_rs_collapse_item, { title: "Collapse Item 1" }, {
                      default: withCtx(() => [
                        createVNode("p", { class: "text-justify" }, " Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. ")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_rs_collapse_item, { title: "Collapse Item 2" }, {
                      default: withCtx(() => [
                        createVNode("p", null, "Collapse Item 2 content")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_rs_collapse_item, { title: "Collapse Item 3" }, {
                      default: withCtx(() => [
                        createVNode("p", null, "Collapse Item 13 content")
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
              createVNode("p", { class: "mb-2" }, [
                createTextVNode(" Use the "),
                createVNode("code", null, "type"),
                createTextVNode(" prop to "),
                createVNode("code", null, "rs-collapse"),
                createTextVNode(" to make it accordion. The type can be "),
                createVNode("code", null, "default"),
                createTextVNode(", "),
                createVNode("code", null, "border"),
                createTextVNode(" and "),
                createVNode("code", null, "card"),
                createTextVNode(". ")
              ]),
              createVNode(_component_FormKit, {
                modelValue: unref(type),
                "onUpdate:modelValue": ($event) => isRef(type) ? type.value = $event : null,
                type: "radio",
                label: "Type",
                options: [
                  { label: "Default", value: "default" },
                  { label: "Border", value: "border" },
                  { label: "Card", value: "card" }
                ]
              }, null, 8, ["modelValue", "onUpdate:modelValue"]),
              createVNode(_component_rs_collapse, { type: unref(type) }, {
                default: withCtx(() => [
                  createVNode(_component_rs_collapse_item, { title: "Collapse Item 1" }, {
                    default: withCtx(() => [
                      createVNode("p", { class: "text-justify" }, " Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. ")
                    ]),
                    _: 1
                  }),
                  createVNode(_component_rs_collapse_item, { title: "Collapse Item 2" }, {
                    default: withCtx(() => [
                      createVNode("p", null, "Collapse Item 2 content")
                    ]),
                    _: 1
                  }),
                  createVNode(_component_rs_collapse_item, { title: "Collapse Item 3" }, {
                    default: withCtx(() => [
                      createVNode("p", null, "Collapse Item 13 content")
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }, 8, ["type"]),
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/Kitchensink/ui/component/collapse.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=collapse.7ae46b15.mjs.map
