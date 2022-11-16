import { c as _sfc_main$q, b as __nuxt_component_1$2, o as _sfc_main$h, k as __nuxt_component_3, d as _sfc_main$p } from '../server.mjs';
import { ref, resolveComponent, resolveDirective, withCtx, createVNode, createTextVNode, mergeProps, unref, Transition, withDirectives, openBlock, createBlock, vShow, isRef, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrGetDirectiveProps } from 'vue/server-renderer';
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
  __name: "alert",
  __ssrInlineRender: true,
  setup(__props) {
    const showCode = ref(false);
    const showCode2 = ref(false);
    const autoDismiss = ref(false);
    const timer = ref(1e3);
    const resetAlert = () => {
      autoDismiss.value = true;
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_LayoutsBreadcrumb = _sfc_main$q;
      const _component_rs_card = __nuxt_component_1$2;
      const _component_rs_alert = _sfc_main$h;
      const _component_ClientOnly = __nuxt_component_3;
      const _component_SimpleBar = resolveComponent("SimpleBar");
      const _component_FormKit = resolveComponent("FormKit");
      const _component_rs_button = _sfc_main$p;
      const _directive_highlight = resolveDirective("highlight");
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_component_LayoutsBreadcrumb, null, null, _parent));
      _push(ssrRenderComponent(_component_rs_card, null, {
        header: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<h5${_scopeId}>Default Alert</h5>`);
          } else {
            return [
              createVNode("h5", null, "Default Alert")
            ];
          }
        }),
        body: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<p class="mb-2"${_scopeId}>Use the <code${_scopeId}>rs-alert</code> to show alert.</p>`);
            _push2(ssrRenderComponent(_component_rs_alert, {
              variant: "primary",
              class: "mb-4"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`Hi, this is a primary alert!`);
                } else {
                  return [
                    createTextVNode("Hi, this is a primary alert!")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_rs_alert, {
              variant: "info",
              class: "mb-4"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`Hi, this is an info alert!`);
                } else {
                  return [
                    createTextVNode("Hi, this is an info alert!")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_rs_alert, {
              variant: "success",
              class: "mb-4"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`Hi, this is a success alert!`);
                } else {
                  return [
                    createTextVNode("Hi, this is a success alert!")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_rs_alert, {
              variant: "warning",
              class: "mb-4"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`Hi, this is a warning alert!`);
                } else {
                  return [
                    createTextVNode("Hi, this is a warning alert!")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_rs_alert, {
              variant: "danger",
              class: "mb-4"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`Hi, this is a danger alert!`);
                } else {
                  return [
                    createTextVNode("Hi, this is a danger alert!")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`<div class="flex justify-end"${_scopeId}><button class="text-sm border border-slate-200 py-1 px-3 rounded-lg"${_scopeId}> Show Code </button></div>`);
            _push2(ssrRenderComponent(_component_ClientOnly, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div${ssrRenderAttrs(mergeProps({
                    style: unref(showCode) ? null : { display: "none" }
                  }, ssrGetDirectiveProps(_ctx, _directive_highlight)))}${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_SimpleBar, { style: { "height": "400px" } }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<pre class="language-html shadow-none"${_scopeId3}>            <code${_scopeId3}>
              &lt;template&gt; 
                &lt;rs-alert variant=&quot;primary&quot;&gt;Hi, this is a primary alert!&lt;/rs-alert&gt;
                &lt;rs-alert variant=&quot;info&quot;&gt;Hi, this is an info alert!&lt;/rs-alert&gt;
                &lt;rs-alert variant=&quot;success&quot;&gt;Hi, this is a success alert!&lt;/rs-alert&gt;
                &lt;rs-alert variant=&quot;warning&quot;&gt;Hi, this is a warning alert!&lt;/rs-alert&gt;
                &lt;rs-alert variant=&quot;danger&quot;&gt;Hi, this is a danger alert!&lt;/rs-alert&gt;
              &lt;/template&gt;

              &lt;script&gt; 
                import RsAlert from &quot;@/components/Alert.vue&quot;;

                export default {
                  components: {
                    RsAlert,
                  },
                  setup() {
                    return {};
                  },
                };
              &lt;/script&gt;
            </code>
          </pre>`);
                      } else {
                        return [
                          createVNode("pre", { class: "language-html shadow-none" }, [
                            createTextVNode("            "),
                            createVNode("code", null, '\n              <template> \n                <rs-alert variant="primary">Hi, this is a primary alert!</rs-alert>\n                <rs-alert variant="info">Hi, this is an info alert!</rs-alert>\n                <rs-alert variant="success">Hi, this is a success alert!</rs-alert>\n                <rs-alert variant="warning">Hi, this is a warning alert!</rs-alert>\n                <rs-alert variant="danger">Hi, this is a danger alert!</rs-alert>\n              </template>\n\n              <script> \n                import RsAlert from "@/components/Alert.vue";\n\n                export default {\n                  components: {\n                    RsAlert,\n                  },\n                  setup() {\n                    return {};\n                  },\n                };\n              <\/script>\n            '),
                            createTextVNode("\n          ")
                          ])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`</div>`);
                } else {
                  return [
                    createVNode(Transition, { name: "fade" }, {
                      default: withCtx(() => [
                        withDirectives((openBlock(), createBlock("div", null, [
                          createVNode(_component_SimpleBar, { style: { "height": "400px" } }, {
                            default: withCtx(() => [
                              createVNode("pre", { class: "language-html shadow-none" }, [
                                createTextVNode("            "),
                                createVNode("code", null, '\n              <template> \n                <rs-alert variant="primary">Hi, this is a primary alert!</rs-alert>\n                <rs-alert variant="info">Hi, this is an info alert!</rs-alert>\n                <rs-alert variant="success">Hi, this is a success alert!</rs-alert>\n                <rs-alert variant="warning">Hi, this is a warning alert!</rs-alert>\n                <rs-alert variant="danger">Hi, this is a danger alert!</rs-alert>\n              </template>\n\n              <script> \n                import RsAlert from "@/components/Alert.vue";\n\n                export default {\n                  components: {\n                    RsAlert,\n                  },\n                  setup() {\n                    return {};\n                  },\n                };\n              <\/script>\n            '),
                                createTextVNode("\n          ")
                              ])
                            ]),
                            _: 1
                          })
                        ])), [
                          [vShow, unref(showCode)],
                          [_directive_highlight]
                        ])
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode("p", { class: "mb-2" }, [
                createTextVNode("Use the "),
                createVNode("code", null, "rs-alert"),
                createTextVNode(" to show alert.")
              ]),
              createVNode(_component_rs_alert, {
                variant: "primary",
                class: "mb-4"
              }, {
                default: withCtx(() => [
                  createTextVNode("Hi, this is a primary alert!")
                ]),
                _: 1
              }),
              createVNode(_component_rs_alert, {
                variant: "info",
                class: "mb-4"
              }, {
                default: withCtx(() => [
                  createTextVNode("Hi, this is an info alert!")
                ]),
                _: 1
              }),
              createVNode(_component_rs_alert, {
                variant: "success",
                class: "mb-4"
              }, {
                default: withCtx(() => [
                  createTextVNode("Hi, this is a success alert!")
                ]),
                _: 1
              }),
              createVNode(_component_rs_alert, {
                variant: "warning",
                class: "mb-4"
              }, {
                default: withCtx(() => [
                  createTextVNode("Hi, this is a warning alert!")
                ]),
                _: 1
              }),
              createVNode(_component_rs_alert, {
                variant: "danger",
                class: "mb-4"
              }, {
                default: withCtx(() => [
                  createTextVNode("Hi, this is a danger alert!")
                ]),
                _: 1
              }),
              createVNode("div", { class: "flex justify-end" }, [
                createVNode("button", {
                  class: "text-sm border border-slate-200 py-1 px-3 rounded-lg",
                  onClick: ($event) => unref(showCode) ? showCode.value = false : showCode.value = true
                }, " Show Code ", 8, ["onClick"])
              ]),
              createVNode(_component_ClientOnly, null, {
                default: withCtx(() => [
                  createVNode(Transition, { name: "fade" }, {
                    default: withCtx(() => [
                      withDirectives((openBlock(), createBlock("div", null, [
                        createVNode(_component_SimpleBar, { style: { "height": "400px" } }, {
                          default: withCtx(() => [
                            createVNode("pre", { class: "language-html shadow-none" }, [
                              createTextVNode("            "),
                              createVNode("code", null, '\n              <template> \n                <rs-alert variant="primary">Hi, this is a primary alert!</rs-alert>\n                <rs-alert variant="info">Hi, this is an info alert!</rs-alert>\n                <rs-alert variant="success">Hi, this is a success alert!</rs-alert>\n                <rs-alert variant="warning">Hi, this is a warning alert!</rs-alert>\n                <rs-alert variant="danger">Hi, this is a danger alert!</rs-alert>\n              </template>\n\n              <script> \n                import RsAlert from "@/components/Alert.vue";\n\n                export default {\n                  components: {\n                    RsAlert,\n                  },\n                  setup() {\n                    return {};\n                  },\n                };\n              <\/script>\n            '),
                              createTextVNode("\n          ")
                            ])
                          ]),
                          _: 1
                        })
                      ])), [
                        [vShow, unref(showCode)],
                        [_directive_highlight]
                      ])
                    ]),
                    _: 1
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
            _push2(`<h5${_scopeId}>Auto Dimissal</h5>`);
          } else {
            return [
              createVNode("h5", null, "Auto Dimissal")
            ];
          }
        }),
        body: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<p class="mb-2"${_scopeId}> Use the <code${_scopeId}>auto-dismiss</code> prop to auto dimiss the alert. The default timer is 1000ms. You can change the timer by passing a value to the <code${_scopeId}>timer</code> prop. </p>`);
            if (!unref(autoDismiss)) {
              _push2(ssrRenderComponent(_component_rs_alert, {
                variant: "primary",
                class: "mb-4"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`Hi, this is not auto dismiss alert!`);
                  } else {
                    return [
                      createTextVNode("Hi, this is not auto dismiss alert!")
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              _push2(ssrRenderComponent(_component_rs_alert, {
                variant: "primary",
                class: "mb-4",
                "auto-dismiss": "",
                timer: unref(timer)
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`Hi, this is auto dismiss alert!`);
                  } else {
                    return [
                      createTextVNode("Hi, this is auto dismiss alert!")
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            }
            _push2(`<div class="flex items-center gap-x-2"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_FormKit, {
              type: "number",
              name: "timer",
              value: "1000",
              step: "100",
              modelValue: unref(timer),
              "onUpdate:modelValue": ($event) => isRef(timer) ? timer.value = $event : null,
              classes: {
                outer: "mb-0",
                inner: "!mb-0"
              }
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_rs_button, { onClick: resetAlert }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Set Timer`);
                } else {
                  return [
                    createTextVNode(" Set Timer")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div><div class="flex justify-end"${_scopeId}><button class="text-sm border border-slate-200 py-1 px-3 rounded-lg"${_scopeId}> Show Code </button></div>`);
            _push2(ssrRenderComponent(_component_ClientOnly, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div${ssrRenderAttrs(mergeProps({
                    style: unref(showCode2) ? null : { display: "none" }
                  }, ssrGetDirectiveProps(_ctx, _directive_highlight)))}${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_SimpleBar, { style: { "height": "400px" } }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<pre class="language-html shadow-none"${_scopeId3}>            <code${_scopeId3}>
              &lt;template&gt; 
                &lt;rs-alert auto-dismiss :timer=&quot;1000&quot;&gt;Hi, this is an auto dismissable alert!&lt;/rs-alert&gt;
              &lt;/template&gt;

              &lt;script&gt; 
                import RsAlert from &quot;@/components/Alert.vue&quot;;

                export default {
                  components: {
                    RsAlert,
                  },
                  setup() {
                    return {};
                  },
                };
              &lt;/script&gt;
            </code>
          </pre>`);
                      } else {
                        return [
                          createVNode("pre", { class: "language-html shadow-none" }, [
                            createTextVNode("            "),
                            createVNode("code", null, '\n              <template> \n                <rs-alert auto-dismiss :timer="1000">Hi, this is an auto dismissable alert!</rs-alert>\n              </template>\n\n              <script> \n                import RsAlert from "@/components/Alert.vue";\n\n                export default {\n                  components: {\n                    RsAlert,\n                  },\n                  setup() {\n                    return {};\n                  },\n                };\n              <\/script>\n            '),
                            createTextVNode("\n          ")
                          ])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`</div>`);
                } else {
                  return [
                    createVNode(Transition, { name: "fade" }, {
                      default: withCtx(() => [
                        withDirectives((openBlock(), createBlock("div", null, [
                          createVNode(_component_SimpleBar, { style: { "height": "400px" } }, {
                            default: withCtx(() => [
                              createVNode("pre", { class: "language-html shadow-none" }, [
                                createTextVNode("            "),
                                createVNode("code", null, '\n              <template> \n                <rs-alert auto-dismiss :timer="1000">Hi, this is an auto dismissable alert!</rs-alert>\n              </template>\n\n              <script> \n                import RsAlert from "@/components/Alert.vue";\n\n                export default {\n                  components: {\n                    RsAlert,\n                  },\n                  setup() {\n                    return {};\n                  },\n                };\n              <\/script>\n            '),
                                createTextVNode("\n          ")
                              ])
                            ]),
                            _: 1
                          })
                        ])), [
                          [vShow, unref(showCode2)],
                          [_directive_highlight]
                        ])
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode("p", { class: "mb-2" }, [
                createTextVNode(" Use the "),
                createVNode("code", null, "auto-dismiss"),
                createTextVNode(" prop to auto dimiss the alert. The default timer is 1000ms. You can change the timer by passing a value to the "),
                createVNode("code", null, "timer"),
                createTextVNode(" prop. ")
              ]),
              !unref(autoDismiss) ? (openBlock(), createBlock(_component_rs_alert, {
                key: 0,
                variant: "primary",
                class: "mb-4"
              }, {
                default: withCtx(() => [
                  createTextVNode("Hi, this is not auto dismiss alert!")
                ]),
                _: 1
              })) : (openBlock(), createBlock(_component_rs_alert, {
                key: 1,
                variant: "primary",
                class: "mb-4",
                "auto-dismiss": "",
                timer: unref(timer)
              }, {
                default: withCtx(() => [
                  createTextVNode("Hi, this is auto dismiss alert!")
                ]),
                _: 1
              }, 8, ["timer"])),
              createVNode("div", { class: "flex items-center gap-x-2" }, [
                createVNode(_component_FormKit, {
                  type: "number",
                  name: "timer",
                  value: "1000",
                  step: "100",
                  modelValue: unref(timer),
                  "onUpdate:modelValue": ($event) => isRef(timer) ? timer.value = $event : null,
                  classes: {
                    outer: "mb-0",
                    inner: "!mb-0"
                  }
                }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                createVNode(_component_rs_button, { onClick: resetAlert }, {
                  default: withCtx(() => [
                    createTextVNode(" Set Timer")
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
              createVNode(_component_ClientOnly, null, {
                default: withCtx(() => [
                  createVNode(Transition, { name: "fade" }, {
                    default: withCtx(() => [
                      withDirectives((openBlock(), createBlock("div", null, [
                        createVNode(_component_SimpleBar, { style: { "height": "400px" } }, {
                          default: withCtx(() => [
                            createVNode("pre", { class: "language-html shadow-none" }, [
                              createTextVNode("            "),
                              createVNode("code", null, '\n              <template> \n                <rs-alert auto-dismiss :timer="1000">Hi, this is an auto dismissable alert!</rs-alert>\n              </template>\n\n              <script> \n                import RsAlert from "@/components/Alert.vue";\n\n                export default {\n                  components: {\n                    RsAlert,\n                  },\n                  setup() {\n                    return {};\n                  },\n                };\n              <\/script>\n            '),
                              createTextVNode("\n          ")
                            ])
                          ]),
                          _: 1
                        })
                      ])), [
                        [vShow, unref(showCode2)],
                        [_directive_highlight]
                      ])
                    ]),
                    _: 1
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/Kitchensink/ui/component/alert.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=alert.630632a7.mjs.map
