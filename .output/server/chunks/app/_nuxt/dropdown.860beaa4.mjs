import { c as _sfc_main$q, b as __nuxt_component_1$2, q as _sfc_main$k, r as _sfc_main$j, k as __nuxt_component_3 } from '../server.mjs';
import { ref, withCtx, createTextVNode, createVNode, unref, useSSRContext } from 'vue';
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
  __name: "dropdown",
  __ssrInlineRender: true,
  setup(__props) {
    const showCode1 = ref(false);
    const showCode2 = ref(false);
    const showCode3 = ref(false);
    const showCode4 = ref(false);
    const showCode5 = ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_LayoutsBreadcrumb = _sfc_main$q;
      const _component_rs_card = __nuxt_component_1$2;
      const _component_rs_dropdown = _sfc_main$k;
      const _component_rs_dropdown_item = _sfc_main$j;
      const _component_ClientOnly = __nuxt_component_3;
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_component_LayoutsBreadcrumb, null, null, _parent));
      _push(ssrRenderComponent(_component_rs_card, null, {
        header: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Default Dropdown `);
          } else {
            return [
              createTextVNode(" Default Dropdown ")
            ];
          }
        }),
        body: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<p class="mb-2"${_scopeId}>Use the <code${_scopeId}>rs-dropdown</code> to show alert.</p><div class="flex flex-wrap items-center justify-start gap-x-6"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_rs_dropdown, {
              title: "Default",
              class: "mb-2"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_rs_dropdown_item, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` Option 1 `);
                      } else {
                        return [
                          createTextVNode(" Option 1 ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_rs_dropdown_item, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` Option 2 `);
                      } else {
                        return [
                          createTextVNode(" Option 2 ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_rs_dropdown_item, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` Option 3 `);
                      } else {
                        return [
                          createTextVNode(" Option 3 ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_rs_dropdown_item, null, {
                      default: withCtx(() => [
                        createTextVNode(" Option 1 ")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_rs_dropdown_item, null, {
                      default: withCtx(() => [
                        createTextVNode(" Option 2 ")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_rs_dropdown_item, null, {
                      default: withCtx(() => [
                        createTextVNode(" Option 3 ")
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_rs_dropdown, {
              title: "Divider",
              class: "mb-2"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_rs_dropdown_item, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` Option 1 `);
                      } else {
                        return [
                          createTextVNode(" Option 1 ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_rs_dropdown_item, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` Option 2 `);
                      } else {
                        return [
                          createTextVNode(" Option 2 ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_rs_dropdown_item, { divider: "" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` Option 1 `);
                      } else {
                        return [
                          createTextVNode(" Option 1 ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_rs_dropdown_item, null, {
                      default: withCtx(() => [
                        createTextVNode(" Option 1 ")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_rs_dropdown_item, null, {
                      default: withCtx(() => [
                        createTextVNode(" Option 2 ")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_rs_dropdown_item, { divider: "" }, {
                      default: withCtx(() => [
                        createTextVNode(" Option 1 ")
                      ]),
                      _: 1
                    })
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
                createVNode("code", null, "rs-dropdown"),
                createTextVNode(" to show alert.")
              ]),
              createVNode("div", { class: "flex flex-wrap items-center justify-start gap-x-6" }, [
                createVNode(_component_rs_dropdown, {
                  title: "Default",
                  class: "mb-2"
                }, {
                  default: withCtx(() => [
                    createVNode(_component_rs_dropdown_item, null, {
                      default: withCtx(() => [
                        createTextVNode(" Option 1 ")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_rs_dropdown_item, null, {
                      default: withCtx(() => [
                        createTextVNode(" Option 2 ")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_rs_dropdown_item, null, {
                      default: withCtx(() => [
                        createTextVNode(" Option 3 ")
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                }),
                createVNode(_component_rs_dropdown, {
                  title: "Divider",
                  class: "mb-2"
                }, {
                  default: withCtx(() => [
                    createVNode(_component_rs_dropdown_item, null, {
                      default: withCtx(() => [
                        createTextVNode(" Option 1 ")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_rs_dropdown_item, null, {
                      default: withCtx(() => [
                        createTextVNode(" Option 2 ")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_rs_dropdown_item, { divider: "" }, {
                      default: withCtx(() => [
                        createTextVNode(" Option 1 ")
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                })
              ]),
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
            _push2(` Variant `);
          } else {
            return [
              createTextVNode(" Variant ")
            ];
          }
        }),
        body: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<p class="mb-4"${_scopeId}> Dropdown variant uses props <code${_scopeId}>variant</code> to change the color of the button. There are 6 variants: <code${_scopeId}>primary</code>, <code${_scopeId}>info</code>, <code${_scopeId}>success</code>, <code${_scopeId}>warning</code> and <code${_scopeId}>danger</code>. </p><div class="flex flex-wrap items-center justify-start gap-x-6"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_rs_dropdown, {
              title: "Primary",
              variant: "primary",
              class: "mb-2"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_rs_dropdown_item, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` Option 1 `);
                      } else {
                        return [
                          createTextVNode(" Option 1 ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_rs_dropdown_item, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` Option 2 `);
                      } else {
                        return [
                          createTextVNode(" Option 2 ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_rs_dropdown_item, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` Option 3 `);
                      } else {
                        return [
                          createTextVNode(" Option 3 ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_rs_dropdown_item, null, {
                      default: withCtx(() => [
                        createTextVNode(" Option 1 ")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_rs_dropdown_item, null, {
                      default: withCtx(() => [
                        createTextVNode(" Option 2 ")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_rs_dropdown_item, null, {
                      default: withCtx(() => [
                        createTextVNode(" Option 3 ")
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_rs_dropdown, {
              title: "Info",
              variant: "info",
              class: "mb-2"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_rs_dropdown_item, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` Option 1 `);
                      } else {
                        return [
                          createTextVNode(" Option 1 ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_rs_dropdown_item, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` Option 2 `);
                      } else {
                        return [
                          createTextVNode(" Option 2 ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_rs_dropdown_item, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` Option 3 `);
                      } else {
                        return [
                          createTextVNode(" Option 3 ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_rs_dropdown_item, null, {
                      default: withCtx(() => [
                        createTextVNode(" Option 1 ")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_rs_dropdown_item, null, {
                      default: withCtx(() => [
                        createTextVNode(" Option 2 ")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_rs_dropdown_item, null, {
                      default: withCtx(() => [
                        createTextVNode(" Option 3 ")
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_rs_dropdown, {
              title: "Success",
              variant: "success",
              class: "mb-2"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_rs_dropdown_item, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` Option 1 `);
                      } else {
                        return [
                          createTextVNode(" Option 1 ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_rs_dropdown_item, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` Option 2 `);
                      } else {
                        return [
                          createTextVNode(" Option 2 ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_rs_dropdown_item, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` Option 3 `);
                      } else {
                        return [
                          createTextVNode(" Option 3 ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_rs_dropdown_item, null, {
                      default: withCtx(() => [
                        createTextVNode(" Option 1 ")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_rs_dropdown_item, null, {
                      default: withCtx(() => [
                        createTextVNode(" Option 2 ")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_rs_dropdown_item, null, {
                      default: withCtx(() => [
                        createTextVNode(" Option 3 ")
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_rs_dropdown, {
              title: "Warning",
              variant: "warning",
              class: "mb-2"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_rs_dropdown_item, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` Option 1 `);
                      } else {
                        return [
                          createTextVNode(" Option 1 ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_rs_dropdown_item, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` Option 2 `);
                      } else {
                        return [
                          createTextVNode(" Option 2 ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_rs_dropdown_item, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` Option 3 `);
                      } else {
                        return [
                          createTextVNode(" Option 3 ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_rs_dropdown_item, null, {
                      default: withCtx(() => [
                        createTextVNode(" Option 1 ")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_rs_dropdown_item, null, {
                      default: withCtx(() => [
                        createTextVNode(" Option 2 ")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_rs_dropdown_item, null, {
                      default: withCtx(() => [
                        createTextVNode(" Option 3 ")
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_rs_dropdown, {
              title: "Danger",
              variant: "danger",
              class: "mb-2"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_rs_dropdown_item, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` Option 1 `);
                      } else {
                        return [
                          createTextVNode(" Option 1 ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_rs_dropdown_item, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` Option 2 `);
                      } else {
                        return [
                          createTextVNode(" Option 2 ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_rs_dropdown_item, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` Option 3 `);
                      } else {
                        return [
                          createTextVNode(" Option 3 ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_rs_dropdown_item, null, {
                      default: withCtx(() => [
                        createTextVNode(" Option 1 ")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_rs_dropdown_item, null, {
                      default: withCtx(() => [
                        createTextVNode(" Option 2 ")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_rs_dropdown_item, null, {
                      default: withCtx(() => [
                        createTextVNode(" Option 3 ")
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div><div class="flex justify-end"${_scopeId}><button class="text-sm border border-slate-200 py-1 px-3 rounded-lg"${_scopeId}> Show Code </button></div>`);
            _push2(ssrRenderComponent(_component_ClientOnly, null, null, _parent2, _scopeId));
          } else {
            return [
              createVNode("p", { class: "mb-4" }, [
                createTextVNode(" Dropdown variant uses props "),
                createVNode("code", null, "variant"),
                createTextVNode(" to change the color of the button. There are 6 variants: "),
                createVNode("code", null, "primary"),
                createTextVNode(", "),
                createVNode("code", null, "info"),
                createTextVNode(", "),
                createVNode("code", null, "success"),
                createTextVNode(", "),
                createVNode("code", null, "warning"),
                createTextVNode(" and "),
                createVNode("code", null, "danger"),
                createTextVNode(". ")
              ]),
              createVNode("div", { class: "flex flex-wrap items-center justify-start gap-x-6" }, [
                createVNode(_component_rs_dropdown, {
                  title: "Primary",
                  variant: "primary",
                  class: "mb-2"
                }, {
                  default: withCtx(() => [
                    createVNode(_component_rs_dropdown_item, null, {
                      default: withCtx(() => [
                        createTextVNode(" Option 1 ")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_rs_dropdown_item, null, {
                      default: withCtx(() => [
                        createTextVNode(" Option 2 ")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_rs_dropdown_item, null, {
                      default: withCtx(() => [
                        createTextVNode(" Option 3 ")
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                }),
                createVNode(_component_rs_dropdown, {
                  title: "Info",
                  variant: "info",
                  class: "mb-2"
                }, {
                  default: withCtx(() => [
                    createVNode(_component_rs_dropdown_item, null, {
                      default: withCtx(() => [
                        createTextVNode(" Option 1 ")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_rs_dropdown_item, null, {
                      default: withCtx(() => [
                        createTextVNode(" Option 2 ")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_rs_dropdown_item, null, {
                      default: withCtx(() => [
                        createTextVNode(" Option 3 ")
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                }),
                createVNode(_component_rs_dropdown, {
                  title: "Success",
                  variant: "success",
                  class: "mb-2"
                }, {
                  default: withCtx(() => [
                    createVNode(_component_rs_dropdown_item, null, {
                      default: withCtx(() => [
                        createTextVNode(" Option 1 ")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_rs_dropdown_item, null, {
                      default: withCtx(() => [
                        createTextVNode(" Option 2 ")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_rs_dropdown_item, null, {
                      default: withCtx(() => [
                        createTextVNode(" Option 3 ")
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                }),
                createVNode(_component_rs_dropdown, {
                  title: "Warning",
                  variant: "warning",
                  class: "mb-2"
                }, {
                  default: withCtx(() => [
                    createVNode(_component_rs_dropdown_item, null, {
                      default: withCtx(() => [
                        createTextVNode(" Option 1 ")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_rs_dropdown_item, null, {
                      default: withCtx(() => [
                        createTextVNode(" Option 2 ")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_rs_dropdown_item, null, {
                      default: withCtx(() => [
                        createTextVNode(" Option 3 ")
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                }),
                createVNode(_component_rs_dropdown, {
                  title: "Danger",
                  variant: "danger",
                  class: "mb-2"
                }, {
                  default: withCtx(() => [
                    createVNode(_component_rs_dropdown_item, null, {
                      default: withCtx(() => [
                        createTextVNode(" Option 1 ")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_rs_dropdown_item, null, {
                      default: withCtx(() => [
                        createTextVNode(" Option 2 ")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_rs_dropdown_item, null, {
                      default: withCtx(() => [
                        createTextVNode(" Option 3 ")
                      ]),
                      _: 1
                    })
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
      _push(ssrRenderComponent(_component_rs_card, null, {
        header: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Variant Type `);
          } else {
            return [
              createTextVNode(" Variant Type ")
            ];
          }
        }),
        body: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<p class="mb-4"${_scopeId}> Dropdown variant uses props <code${_scopeId}>variant</code> to change the color of the button. There are 6 variants: <code${_scopeId}>primary</code>, <code${_scopeId}>info</code>, <code${_scopeId}>success</code>, <code${_scopeId}>warning</code> and <code${_scopeId}>danger</code>. </p><div class="my-6"${_scopeId}><div class="font-semibold text-lg bg-slate-100 dark:bg-slate-700 w-full mb-4 pl-2"${_scopeId}> Fill </div><div class="flex flex-wrap items-center justify-start gap-x-6"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_rs_dropdown, {
              title: "Primary",
              variant: "primary",
              class: "mb-2"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_rs_dropdown_item, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` Option 1 `);
                      } else {
                        return [
                          createTextVNode(" Option 1 ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_rs_dropdown_item, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` Option 2 `);
                      } else {
                        return [
                          createTextVNode(" Option 2 ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_rs_dropdown_item, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` Option 3 `);
                      } else {
                        return [
                          createTextVNode(" Option 3 ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_rs_dropdown_item, null, {
                      default: withCtx(() => [
                        createTextVNode(" Option 1 ")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_rs_dropdown_item, null, {
                      default: withCtx(() => [
                        createTextVNode(" Option 2 ")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_rs_dropdown_item, null, {
                      default: withCtx(() => [
                        createTextVNode(" Option 3 ")
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_rs_dropdown, {
              title: "Info",
              variant: "info",
              class: "mb-2"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_rs_dropdown_item, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` Option 1 `);
                      } else {
                        return [
                          createTextVNode(" Option 1 ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_rs_dropdown_item, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` Option 2 `);
                      } else {
                        return [
                          createTextVNode(" Option 2 ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_rs_dropdown_item, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` Option 3 `);
                      } else {
                        return [
                          createTextVNode(" Option 3 ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_rs_dropdown_item, null, {
                      default: withCtx(() => [
                        createTextVNode(" Option 1 ")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_rs_dropdown_item, null, {
                      default: withCtx(() => [
                        createTextVNode(" Option 2 ")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_rs_dropdown_item, null, {
                      default: withCtx(() => [
                        createTextVNode(" Option 3 ")
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_rs_dropdown, {
              title: "Success",
              variant: "success",
              class: "mb-2"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_rs_dropdown_item, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` Option 1 `);
                      } else {
                        return [
                          createTextVNode(" Option 1 ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_rs_dropdown_item, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` Option 2 `);
                      } else {
                        return [
                          createTextVNode(" Option 2 ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_rs_dropdown_item, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` Option 3 `);
                      } else {
                        return [
                          createTextVNode(" Option 3 ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_rs_dropdown_item, null, {
                      default: withCtx(() => [
                        createTextVNode(" Option 1 ")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_rs_dropdown_item, null, {
                      default: withCtx(() => [
                        createTextVNode(" Option 2 ")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_rs_dropdown_item, null, {
                      default: withCtx(() => [
                        createTextVNode(" Option 3 ")
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_rs_dropdown, {
              title: "Warning",
              variant: "warning",
              class: "mb-2"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_rs_dropdown_item, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` Option 1 `);
                      } else {
                        return [
                          createTextVNode(" Option 1 ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_rs_dropdown_item, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` Option 2 `);
                      } else {
                        return [
                          createTextVNode(" Option 2 ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_rs_dropdown_item, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` Option 3 `);
                      } else {
                        return [
                          createTextVNode(" Option 3 ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_rs_dropdown_item, null, {
                      default: withCtx(() => [
                        createTextVNode(" Option 1 ")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_rs_dropdown_item, null, {
                      default: withCtx(() => [
                        createTextVNode(" Option 2 ")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_rs_dropdown_item, null, {
                      default: withCtx(() => [
                        createTextVNode(" Option 3 ")
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_rs_dropdown, {
              title: "Danger",
              variant: "danger",
              class: "mb-2"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_rs_dropdown_item, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` Option 1 `);
                      } else {
                        return [
                          createTextVNode(" Option 1 ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_rs_dropdown_item, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` Option 2 `);
                      } else {
                        return [
                          createTextVNode(" Option 2 ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_rs_dropdown_item, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` Option 3 `);
                      } else {
                        return [
                          createTextVNode(" Option 3 ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_rs_dropdown_item, null, {
                      default: withCtx(() => [
                        createTextVNode(" Option 1 ")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_rs_dropdown_item, null, {
                      default: withCtx(() => [
                        createTextVNode(" Option 2 ")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_rs_dropdown_item, null, {
                      default: withCtx(() => [
                        createTextVNode(" Option 3 ")
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></div><div class="my-6"${_scopeId}><div class="font-semibold text-lg bg-slate-100 dark:bg-slate-700 w-full mb-4 pl-2"${_scopeId}> Outline </div><div class="flex flex-wrap items-center justify-start gap-x-6"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_rs_dropdown, {
              title: "Primary",
              variant: "primary-outline",
              class: "mb-2"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_rs_dropdown_item, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` Option 1 `);
                      } else {
                        return [
                          createTextVNode(" Option 1 ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_rs_dropdown_item, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` Option 2 `);
                      } else {
                        return [
                          createTextVNode(" Option 2 ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_rs_dropdown_item, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` Option 3 `);
                      } else {
                        return [
                          createTextVNode(" Option 3 ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_rs_dropdown_item, null, {
                      default: withCtx(() => [
                        createTextVNode(" Option 1 ")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_rs_dropdown_item, null, {
                      default: withCtx(() => [
                        createTextVNode(" Option 2 ")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_rs_dropdown_item, null, {
                      default: withCtx(() => [
                        createTextVNode(" Option 3 ")
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_rs_dropdown, {
              title: "Info",
              variant: "info-outline",
              class: "mb-2"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_rs_dropdown_item, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` Option 1 `);
                      } else {
                        return [
                          createTextVNode(" Option 1 ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_rs_dropdown_item, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` Option 2 `);
                      } else {
                        return [
                          createTextVNode(" Option 2 ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_rs_dropdown_item, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` Option 3 `);
                      } else {
                        return [
                          createTextVNode(" Option 3 ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_rs_dropdown_item, null, {
                      default: withCtx(() => [
                        createTextVNode(" Option 1 ")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_rs_dropdown_item, null, {
                      default: withCtx(() => [
                        createTextVNode(" Option 2 ")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_rs_dropdown_item, null, {
                      default: withCtx(() => [
                        createTextVNode(" Option 3 ")
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_rs_dropdown, {
              title: "Success",
              variant: "success-outline",
              class: "mb-2"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_rs_dropdown_item, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` Option 1 `);
                      } else {
                        return [
                          createTextVNode(" Option 1 ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_rs_dropdown_item, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` Option 2 `);
                      } else {
                        return [
                          createTextVNode(" Option 2 ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_rs_dropdown_item, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` Option 3 `);
                      } else {
                        return [
                          createTextVNode(" Option 3 ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_rs_dropdown_item, null, {
                      default: withCtx(() => [
                        createTextVNode(" Option 1 ")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_rs_dropdown_item, null, {
                      default: withCtx(() => [
                        createTextVNode(" Option 2 ")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_rs_dropdown_item, null, {
                      default: withCtx(() => [
                        createTextVNode(" Option 3 ")
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_rs_dropdown, {
              title: "Warning",
              variant: "warning-outline",
              class: "mb-2"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_rs_dropdown_item, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` Option 1 `);
                      } else {
                        return [
                          createTextVNode(" Option 1 ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_rs_dropdown_item, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` Option 2 `);
                      } else {
                        return [
                          createTextVNode(" Option 2 ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_rs_dropdown_item, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` Option 3 `);
                      } else {
                        return [
                          createTextVNode(" Option 3 ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_rs_dropdown_item, null, {
                      default: withCtx(() => [
                        createTextVNode(" Option 1 ")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_rs_dropdown_item, null, {
                      default: withCtx(() => [
                        createTextVNode(" Option 2 ")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_rs_dropdown_item, null, {
                      default: withCtx(() => [
                        createTextVNode(" Option 3 ")
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_rs_dropdown, {
              title: "Danger",
              variant: "danger-outline",
              class: "mb-2"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_rs_dropdown_item, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` Option 1 `);
                      } else {
                        return [
                          createTextVNode(" Option 1 ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_rs_dropdown_item, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` Option 2 `);
                      } else {
                        return [
                          createTextVNode(" Option 2 ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_rs_dropdown_item, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` Option 3 `);
                      } else {
                        return [
                          createTextVNode(" Option 3 ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_rs_dropdown_item, null, {
                      default: withCtx(() => [
                        createTextVNode(" Option 1 ")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_rs_dropdown_item, null, {
                      default: withCtx(() => [
                        createTextVNode(" Option 2 ")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_rs_dropdown_item, null, {
                      default: withCtx(() => [
                        createTextVNode(" Option 3 ")
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></div><div class="my-6"${_scopeId}><div class="font-semibold text-lg bg-slate-100 dark:bg-slate-700 w-full mb-4 pl-2"${_scopeId}> Text </div><div class="flex flex-wrap items-center justify-start gap-x-6"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_rs_dropdown, {
              title: "Primary",
              variant: "primary-text",
              class: "mb-2"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_rs_dropdown_item, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` Option 1 `);
                      } else {
                        return [
                          createTextVNode(" Option 1 ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_rs_dropdown_item, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` Option 2 `);
                      } else {
                        return [
                          createTextVNode(" Option 2 ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_rs_dropdown_item, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` Option 3 `);
                      } else {
                        return [
                          createTextVNode(" Option 3 ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_rs_dropdown_item, null, {
                      default: withCtx(() => [
                        createTextVNode(" Option 1 ")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_rs_dropdown_item, null, {
                      default: withCtx(() => [
                        createTextVNode(" Option 2 ")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_rs_dropdown_item, null, {
                      default: withCtx(() => [
                        createTextVNode(" Option 3 ")
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_rs_dropdown, {
              title: "Info",
              variant: "info-text",
              class: "mb-2"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_rs_dropdown_item, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` Option 1 `);
                      } else {
                        return [
                          createTextVNode(" Option 1 ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_rs_dropdown_item, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` Option 2 `);
                      } else {
                        return [
                          createTextVNode(" Option 2 ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_rs_dropdown_item, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` Option 3 `);
                      } else {
                        return [
                          createTextVNode(" Option 3 ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_rs_dropdown_item, null, {
                      default: withCtx(() => [
                        createTextVNode(" Option 1 ")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_rs_dropdown_item, null, {
                      default: withCtx(() => [
                        createTextVNode(" Option 2 ")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_rs_dropdown_item, null, {
                      default: withCtx(() => [
                        createTextVNode(" Option 3 ")
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_rs_dropdown, {
              title: "Success",
              variant: "success-text",
              class: "mb-2"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_rs_dropdown_item, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` Option 1 `);
                      } else {
                        return [
                          createTextVNode(" Option 1 ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_rs_dropdown_item, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` Option 2 `);
                      } else {
                        return [
                          createTextVNode(" Option 2 ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_rs_dropdown_item, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` Option 3 `);
                      } else {
                        return [
                          createTextVNode(" Option 3 ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_rs_dropdown_item, null, {
                      default: withCtx(() => [
                        createTextVNode(" Option 1 ")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_rs_dropdown_item, null, {
                      default: withCtx(() => [
                        createTextVNode(" Option 2 ")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_rs_dropdown_item, null, {
                      default: withCtx(() => [
                        createTextVNode(" Option 3 ")
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_rs_dropdown, {
              title: "Warning",
              variant: "warning-text",
              class: "mb-2"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_rs_dropdown_item, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` Option 1 `);
                      } else {
                        return [
                          createTextVNode(" Option 1 ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_rs_dropdown_item, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` Option 2 `);
                      } else {
                        return [
                          createTextVNode(" Option 2 ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_rs_dropdown_item, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` Option 3 `);
                      } else {
                        return [
                          createTextVNode(" Option 3 ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_rs_dropdown_item, null, {
                      default: withCtx(() => [
                        createTextVNode(" Option 1 ")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_rs_dropdown_item, null, {
                      default: withCtx(() => [
                        createTextVNode(" Option 2 ")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_rs_dropdown_item, null, {
                      default: withCtx(() => [
                        createTextVNode(" Option 3 ")
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_rs_dropdown, {
              title: "Danger",
              variant: "danger-text",
              class: "mb-2"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_rs_dropdown_item, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` Option 1 `);
                      } else {
                        return [
                          createTextVNode(" Option 1 ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_rs_dropdown_item, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` Option 2 `);
                      } else {
                        return [
                          createTextVNode(" Option 2 ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_rs_dropdown_item, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` Option 3 `);
                      } else {
                        return [
                          createTextVNode(" Option 3 ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_rs_dropdown_item, null, {
                      default: withCtx(() => [
                        createTextVNode(" Option 1 ")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_rs_dropdown_item, null, {
                      default: withCtx(() => [
                        createTextVNode(" Option 2 ")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_rs_dropdown_item, null, {
                      default: withCtx(() => [
                        createTextVNode(" Option 3 ")
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></div><div class="flex justify-end"${_scopeId}><button class="text-sm border border-slate-200 py-1 px-3 rounded-lg"${_scopeId}> Show Code </button></div>`);
            _push2(ssrRenderComponent(_component_ClientOnly, null, null, _parent2, _scopeId));
          } else {
            return [
              createVNode("p", { class: "mb-4" }, [
                createTextVNode(" Dropdown variant uses props "),
                createVNode("code", null, "variant"),
                createTextVNode(" to change the color of the button. There are 6 variants: "),
                createVNode("code", null, "primary"),
                createTextVNode(", "),
                createVNode("code", null, "info"),
                createTextVNode(", "),
                createVNode("code", null, "success"),
                createTextVNode(", "),
                createVNode("code", null, "warning"),
                createTextVNode(" and "),
                createVNode("code", null, "danger"),
                createTextVNode(". ")
              ]),
              createVNode("div", { class: "my-6" }, [
                createVNode("div", { class: "font-semibold text-lg bg-slate-100 dark:bg-slate-700 w-full mb-4 pl-2" }, " Fill "),
                createVNode("div", { class: "flex flex-wrap items-center justify-start gap-x-6" }, [
                  createVNode(_component_rs_dropdown, {
                    title: "Primary",
                    variant: "primary",
                    class: "mb-2"
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_rs_dropdown_item, null, {
                        default: withCtx(() => [
                          createTextVNode(" Option 1 ")
                        ]),
                        _: 1
                      }),
                      createVNode(_component_rs_dropdown_item, null, {
                        default: withCtx(() => [
                          createTextVNode(" Option 2 ")
                        ]),
                        _: 1
                      }),
                      createVNode(_component_rs_dropdown_item, null, {
                        default: withCtx(() => [
                          createTextVNode(" Option 3 ")
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }),
                  createVNode(_component_rs_dropdown, {
                    title: "Info",
                    variant: "info",
                    class: "mb-2"
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_rs_dropdown_item, null, {
                        default: withCtx(() => [
                          createTextVNode(" Option 1 ")
                        ]),
                        _: 1
                      }),
                      createVNode(_component_rs_dropdown_item, null, {
                        default: withCtx(() => [
                          createTextVNode(" Option 2 ")
                        ]),
                        _: 1
                      }),
                      createVNode(_component_rs_dropdown_item, null, {
                        default: withCtx(() => [
                          createTextVNode(" Option 3 ")
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }),
                  createVNode(_component_rs_dropdown, {
                    title: "Success",
                    variant: "success",
                    class: "mb-2"
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_rs_dropdown_item, null, {
                        default: withCtx(() => [
                          createTextVNode(" Option 1 ")
                        ]),
                        _: 1
                      }),
                      createVNode(_component_rs_dropdown_item, null, {
                        default: withCtx(() => [
                          createTextVNode(" Option 2 ")
                        ]),
                        _: 1
                      }),
                      createVNode(_component_rs_dropdown_item, null, {
                        default: withCtx(() => [
                          createTextVNode(" Option 3 ")
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }),
                  createVNode(_component_rs_dropdown, {
                    title: "Warning",
                    variant: "warning",
                    class: "mb-2"
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_rs_dropdown_item, null, {
                        default: withCtx(() => [
                          createTextVNode(" Option 1 ")
                        ]),
                        _: 1
                      }),
                      createVNode(_component_rs_dropdown_item, null, {
                        default: withCtx(() => [
                          createTextVNode(" Option 2 ")
                        ]),
                        _: 1
                      }),
                      createVNode(_component_rs_dropdown_item, null, {
                        default: withCtx(() => [
                          createTextVNode(" Option 3 ")
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }),
                  createVNode(_component_rs_dropdown, {
                    title: "Danger",
                    variant: "danger",
                    class: "mb-2"
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_rs_dropdown_item, null, {
                        default: withCtx(() => [
                          createTextVNode(" Option 1 ")
                        ]),
                        _: 1
                      }),
                      createVNode(_component_rs_dropdown_item, null, {
                        default: withCtx(() => [
                          createTextVNode(" Option 2 ")
                        ]),
                        _: 1
                      }),
                      createVNode(_component_rs_dropdown_item, null, {
                        default: withCtx(() => [
                          createTextVNode(" Option 3 ")
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  })
                ])
              ]),
              createVNode("div", { class: "my-6" }, [
                createVNode("div", { class: "font-semibold text-lg bg-slate-100 dark:bg-slate-700 w-full mb-4 pl-2" }, " Outline "),
                createVNode("div", { class: "flex flex-wrap items-center justify-start gap-x-6" }, [
                  createVNode(_component_rs_dropdown, {
                    title: "Primary",
                    variant: "primary-outline",
                    class: "mb-2"
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_rs_dropdown_item, null, {
                        default: withCtx(() => [
                          createTextVNode(" Option 1 ")
                        ]),
                        _: 1
                      }),
                      createVNode(_component_rs_dropdown_item, null, {
                        default: withCtx(() => [
                          createTextVNode(" Option 2 ")
                        ]),
                        _: 1
                      }),
                      createVNode(_component_rs_dropdown_item, null, {
                        default: withCtx(() => [
                          createTextVNode(" Option 3 ")
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }),
                  createVNode(_component_rs_dropdown, {
                    title: "Info",
                    variant: "info-outline",
                    class: "mb-2"
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_rs_dropdown_item, null, {
                        default: withCtx(() => [
                          createTextVNode(" Option 1 ")
                        ]),
                        _: 1
                      }),
                      createVNode(_component_rs_dropdown_item, null, {
                        default: withCtx(() => [
                          createTextVNode(" Option 2 ")
                        ]),
                        _: 1
                      }),
                      createVNode(_component_rs_dropdown_item, null, {
                        default: withCtx(() => [
                          createTextVNode(" Option 3 ")
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }),
                  createVNode(_component_rs_dropdown, {
                    title: "Success",
                    variant: "success-outline",
                    class: "mb-2"
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_rs_dropdown_item, null, {
                        default: withCtx(() => [
                          createTextVNode(" Option 1 ")
                        ]),
                        _: 1
                      }),
                      createVNode(_component_rs_dropdown_item, null, {
                        default: withCtx(() => [
                          createTextVNode(" Option 2 ")
                        ]),
                        _: 1
                      }),
                      createVNode(_component_rs_dropdown_item, null, {
                        default: withCtx(() => [
                          createTextVNode(" Option 3 ")
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }),
                  createVNode(_component_rs_dropdown, {
                    title: "Warning",
                    variant: "warning-outline",
                    class: "mb-2"
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_rs_dropdown_item, null, {
                        default: withCtx(() => [
                          createTextVNode(" Option 1 ")
                        ]),
                        _: 1
                      }),
                      createVNode(_component_rs_dropdown_item, null, {
                        default: withCtx(() => [
                          createTextVNode(" Option 2 ")
                        ]),
                        _: 1
                      }),
                      createVNode(_component_rs_dropdown_item, null, {
                        default: withCtx(() => [
                          createTextVNode(" Option 3 ")
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }),
                  createVNode(_component_rs_dropdown, {
                    title: "Danger",
                    variant: "danger-outline",
                    class: "mb-2"
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_rs_dropdown_item, null, {
                        default: withCtx(() => [
                          createTextVNode(" Option 1 ")
                        ]),
                        _: 1
                      }),
                      createVNode(_component_rs_dropdown_item, null, {
                        default: withCtx(() => [
                          createTextVNode(" Option 2 ")
                        ]),
                        _: 1
                      }),
                      createVNode(_component_rs_dropdown_item, null, {
                        default: withCtx(() => [
                          createTextVNode(" Option 3 ")
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  })
                ])
              ]),
              createVNode("div", { class: "my-6" }, [
                createVNode("div", { class: "font-semibold text-lg bg-slate-100 dark:bg-slate-700 w-full mb-4 pl-2" }, " Text "),
                createVNode("div", { class: "flex flex-wrap items-center justify-start gap-x-6" }, [
                  createVNode(_component_rs_dropdown, {
                    title: "Primary",
                    variant: "primary-text",
                    class: "mb-2"
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_rs_dropdown_item, null, {
                        default: withCtx(() => [
                          createTextVNode(" Option 1 ")
                        ]),
                        _: 1
                      }),
                      createVNode(_component_rs_dropdown_item, null, {
                        default: withCtx(() => [
                          createTextVNode(" Option 2 ")
                        ]),
                        _: 1
                      }),
                      createVNode(_component_rs_dropdown_item, null, {
                        default: withCtx(() => [
                          createTextVNode(" Option 3 ")
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }),
                  createVNode(_component_rs_dropdown, {
                    title: "Info",
                    variant: "info-text",
                    class: "mb-2"
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_rs_dropdown_item, null, {
                        default: withCtx(() => [
                          createTextVNode(" Option 1 ")
                        ]),
                        _: 1
                      }),
                      createVNode(_component_rs_dropdown_item, null, {
                        default: withCtx(() => [
                          createTextVNode(" Option 2 ")
                        ]),
                        _: 1
                      }),
                      createVNode(_component_rs_dropdown_item, null, {
                        default: withCtx(() => [
                          createTextVNode(" Option 3 ")
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }),
                  createVNode(_component_rs_dropdown, {
                    title: "Success",
                    variant: "success-text",
                    class: "mb-2"
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_rs_dropdown_item, null, {
                        default: withCtx(() => [
                          createTextVNode(" Option 1 ")
                        ]),
                        _: 1
                      }),
                      createVNode(_component_rs_dropdown_item, null, {
                        default: withCtx(() => [
                          createTextVNode(" Option 2 ")
                        ]),
                        _: 1
                      }),
                      createVNode(_component_rs_dropdown_item, null, {
                        default: withCtx(() => [
                          createTextVNode(" Option 3 ")
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }),
                  createVNode(_component_rs_dropdown, {
                    title: "Warning",
                    variant: "warning-text",
                    class: "mb-2"
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_rs_dropdown_item, null, {
                        default: withCtx(() => [
                          createTextVNode(" Option 1 ")
                        ]),
                        _: 1
                      }),
                      createVNode(_component_rs_dropdown_item, null, {
                        default: withCtx(() => [
                          createTextVNode(" Option 2 ")
                        ]),
                        _: 1
                      }),
                      createVNode(_component_rs_dropdown_item, null, {
                        default: withCtx(() => [
                          createTextVNode(" Option 3 ")
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }),
                  createVNode(_component_rs_dropdown, {
                    title: "Danger",
                    variant: "danger-text",
                    class: "mb-2"
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_rs_dropdown_item, null, {
                        default: withCtx(() => [
                          createTextVNode(" Option 1 ")
                        ]),
                        _: 1
                      }),
                      createVNode(_component_rs_dropdown_item, null, {
                        default: withCtx(() => [
                          createTextVNode(" Option 2 ")
                        ]),
                        _: 1
                      }),
                      createVNode(_component_rs_dropdown_item, null, {
                        default: withCtx(() => [
                          createTextVNode(" Option 3 ")
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  })
                ])
              ]),
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
      _push(ssrRenderComponent(_component_rs_card, null, {
        header: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Position `);
          } else {
            return [
              createTextVNode(" Position ")
            ];
          }
        }),
        body: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<p class="mb-4"${_scopeId}> Dropdown position uses props <code${_scopeId}>position</code> to change the position of dropdown item. There are 4 positions: <code${_scopeId}>top</code>, <code${_scopeId}>bottom</code>, <code${_scopeId}>left</code> and <code${_scopeId}>right</code>. </p><div class="flex flex-wrap items-center justify-start gap-x-6"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_rs_dropdown, {
              title: "Bottom",
              class: "mb-2"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_rs_dropdown_item, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` Option 1 `);
                      } else {
                        return [
                          createTextVNode(" Option 1 ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_rs_dropdown_item, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` Option 2 `);
                      } else {
                        return [
                          createTextVNode(" Option 2 ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_rs_dropdown_item, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` Option 3 `);
                      } else {
                        return [
                          createTextVNode(" Option 3 ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_rs_dropdown_item, null, {
                      default: withCtx(() => [
                        createTextVNode(" Option 1 ")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_rs_dropdown_item, null, {
                      default: withCtx(() => [
                        createTextVNode(" Option 2 ")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_rs_dropdown_item, null, {
                      default: withCtx(() => [
                        createTextVNode(" Option 3 ")
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_rs_dropdown, {
              title: "Top",
              position: "top",
              class: "mb-2"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_rs_dropdown_item, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` Option 1 `);
                      } else {
                        return [
                          createTextVNode(" Option 1 ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_rs_dropdown_item, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` Option 2 `);
                      } else {
                        return [
                          createTextVNode(" Option 2 ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_rs_dropdown_item, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` Option 3 `);
                      } else {
                        return [
                          createTextVNode(" Option 3 ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_rs_dropdown_item, null, {
                      default: withCtx(() => [
                        createTextVNode(" Option 1 ")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_rs_dropdown_item, null, {
                      default: withCtx(() => [
                        createTextVNode(" Option 2 ")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_rs_dropdown_item, null, {
                      default: withCtx(() => [
                        createTextVNode(" Option 3 ")
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_rs_dropdown, {
              title: "Left",
              position: "left",
              class: "mb-2"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_rs_dropdown_item, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` Option 1 `);
                      } else {
                        return [
                          createTextVNode(" Option 1 ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_rs_dropdown_item, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` Option 2 `);
                      } else {
                        return [
                          createTextVNode(" Option 2 ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_rs_dropdown_item, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` Option 3 `);
                      } else {
                        return [
                          createTextVNode(" Option 3 ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_rs_dropdown_item, null, {
                      default: withCtx(() => [
                        createTextVNode(" Option 1 ")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_rs_dropdown_item, null, {
                      default: withCtx(() => [
                        createTextVNode(" Option 2 ")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_rs_dropdown_item, null, {
                      default: withCtx(() => [
                        createTextVNode(" Option 3 ")
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_rs_dropdown, {
              title: "Right",
              position: "right",
              class: "mb-2"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_rs_dropdown_item, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` Option 1 `);
                      } else {
                        return [
                          createTextVNode(" Option 1 ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_rs_dropdown_item, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` Option 2 `);
                      } else {
                        return [
                          createTextVNode(" Option 2 ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_rs_dropdown_item, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` Option 3 `);
                      } else {
                        return [
                          createTextVNode(" Option 3 ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_rs_dropdown_item, null, {
                      default: withCtx(() => [
                        createTextVNode(" Option 1 ")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_rs_dropdown_item, null, {
                      default: withCtx(() => [
                        createTextVNode(" Option 2 ")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_rs_dropdown_item, null, {
                      default: withCtx(() => [
                        createTextVNode(" Option 3 ")
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div><div class="flex justify-end"${_scopeId}><button class="text-sm border border-slate-200 py-1 px-3 rounded-lg"${_scopeId}> Show Code </button></div>`);
            _push2(ssrRenderComponent(_component_ClientOnly, null, null, _parent2, _scopeId));
          } else {
            return [
              createVNode("p", { class: "mb-4" }, [
                createTextVNode(" Dropdown position uses props "),
                createVNode("code", null, "position"),
                createTextVNode(" to change the position of dropdown item. There are 4 positions: "),
                createVNode("code", null, "top"),
                createTextVNode(", "),
                createVNode("code", null, "bottom"),
                createTextVNode(", "),
                createVNode("code", null, "left"),
                createTextVNode(" and "),
                createVNode("code", null, "right"),
                createTextVNode(". ")
              ]),
              createVNode("div", { class: "flex flex-wrap items-center justify-start gap-x-6" }, [
                createVNode(_component_rs_dropdown, {
                  title: "Bottom",
                  class: "mb-2"
                }, {
                  default: withCtx(() => [
                    createVNode(_component_rs_dropdown_item, null, {
                      default: withCtx(() => [
                        createTextVNode(" Option 1 ")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_rs_dropdown_item, null, {
                      default: withCtx(() => [
                        createTextVNode(" Option 2 ")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_rs_dropdown_item, null, {
                      default: withCtx(() => [
                        createTextVNode(" Option 3 ")
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                }),
                createVNode(_component_rs_dropdown, {
                  title: "Top",
                  position: "top",
                  class: "mb-2"
                }, {
                  default: withCtx(() => [
                    createVNode(_component_rs_dropdown_item, null, {
                      default: withCtx(() => [
                        createTextVNode(" Option 1 ")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_rs_dropdown_item, null, {
                      default: withCtx(() => [
                        createTextVNode(" Option 2 ")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_rs_dropdown_item, null, {
                      default: withCtx(() => [
                        createTextVNode(" Option 3 ")
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                }),
                createVNode(_component_rs_dropdown, {
                  title: "Left",
                  position: "left",
                  class: "mb-2"
                }, {
                  default: withCtx(() => [
                    createVNode(_component_rs_dropdown_item, null, {
                      default: withCtx(() => [
                        createTextVNode(" Option 1 ")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_rs_dropdown_item, null, {
                      default: withCtx(() => [
                        createTextVNode(" Option 2 ")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_rs_dropdown_item, null, {
                      default: withCtx(() => [
                        createTextVNode(" Option 3 ")
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                }),
                createVNode(_component_rs_dropdown, {
                  title: "Right",
                  position: "right",
                  class: "mb-2"
                }, {
                  default: withCtx(() => [
                    createVNode(_component_rs_dropdown_item, null, {
                      default: withCtx(() => [
                        createTextVNode(" Option 1 ")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_rs_dropdown_item, null, {
                      default: withCtx(() => [
                        createTextVNode(" Option 2 ")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_rs_dropdown_item, null, {
                      default: withCtx(() => [
                        createTextVNode(" Option 3 ")
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                })
              ]),
              createVNode("div", { class: "flex justify-end" }, [
                createVNode("button", {
                  class: "text-sm border border-slate-200 py-1 px-3 rounded-lg",
                  onClick: ($event) => unref(showCode4) ? showCode4.value = false : showCode4.value = true
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
            _push2(` Size `);
          } else {
            return [
              createTextVNode(" Size ")
            ];
          }
        }),
        body: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<p class="mb-4"${_scopeId}> Dropdown size uses props <code${_scopeId}>size</code> to change the size of dropdown button. There are 3 sizes: <code${_scopeId}>small</code>, <code${_scopeId}>medium</code> and <code${_scopeId}>large</code>. </p><div class="flex flex-wrap items-center justify-start gap-x-6"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_rs_dropdown, {
              title: "Small",
              size: "sm",
              class: "mb-2"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_rs_dropdown_item, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` Option 3 `);
                      } else {
                        return [
                          createTextVNode(" Option 3 ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_rs_dropdown_item, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` Option 1 `);
                      } else {
                        return [
                          createTextVNode(" Option 1 ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_rs_dropdown_item, null, {
                      default: withCtx(() => [
                        createTextVNode(" Option 3 ")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_rs_dropdown_item, null, {
                      default: withCtx(() => [
                        createTextVNode(" Option 1 ")
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_rs_dropdown, {
              title: "Medium",
              size: "md",
              class: "mb-2"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_rs_dropdown_item, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` Option 1 `);
                      } else {
                        return [
                          createTextVNode(" Option 1 ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_rs_dropdown_item, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` Option 2 `);
                      } else {
                        return [
                          createTextVNode(" Option 2 ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_rs_dropdown_item, null, {
                      default: withCtx(() => [
                        createTextVNode(" Option 1 ")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_rs_dropdown_item, null, {
                      default: withCtx(() => [
                        createTextVNode(" Option 2 ")
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_rs_dropdown, {
              title: "Large",
              size: "lg",
              class: "mb-2"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_rs_dropdown_item, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` Option 1 `);
                      } else {
                        return [
                          createTextVNode(" Option 1 ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_rs_dropdown_item, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` Option 3 `);
                      } else {
                        return [
                          createTextVNode(" Option 3 ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_rs_dropdown_item, null, {
                      default: withCtx(() => [
                        createTextVNode(" Option 1 ")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_rs_dropdown_item, null, {
                      default: withCtx(() => [
                        createTextVNode(" Option 3 ")
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div><div class="flex justify-end"${_scopeId}><button class="text-sm border border-slate-200 py-1 px-3 rounded-lg"${_scopeId}> Show Code </button></div>`);
            _push2(ssrRenderComponent(_component_ClientOnly, null, null, _parent2, _scopeId));
          } else {
            return [
              createVNode("p", { class: "mb-4" }, [
                createTextVNode(" Dropdown size uses props "),
                createVNode("code", null, "size"),
                createTextVNode(" to change the size of dropdown button. There are 3 sizes: "),
                createVNode("code", null, "small"),
                createTextVNode(", "),
                createVNode("code", null, "medium"),
                createTextVNode(" and "),
                createVNode("code", null, "large"),
                createTextVNode(". ")
              ]),
              createVNode("div", { class: "flex flex-wrap items-center justify-start gap-x-6" }, [
                createVNode(_component_rs_dropdown, {
                  title: "Small",
                  size: "sm",
                  class: "mb-2"
                }, {
                  default: withCtx(() => [
                    createVNode(_component_rs_dropdown_item, null, {
                      default: withCtx(() => [
                        createTextVNode(" Option 3 ")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_rs_dropdown_item, null, {
                      default: withCtx(() => [
                        createTextVNode(" Option 1 ")
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                }),
                createVNode(_component_rs_dropdown, {
                  title: "Medium",
                  size: "md",
                  class: "mb-2"
                }, {
                  default: withCtx(() => [
                    createVNode(_component_rs_dropdown_item, null, {
                      default: withCtx(() => [
                        createTextVNode(" Option 1 ")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_rs_dropdown_item, null, {
                      default: withCtx(() => [
                        createTextVNode(" Option 2 ")
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                }),
                createVNode(_component_rs_dropdown, {
                  title: "Large",
                  size: "lg",
                  class: "mb-2"
                }, {
                  default: withCtx(() => [
                    createVNode(_component_rs_dropdown_item, null, {
                      default: withCtx(() => [
                        createTextVNode(" Option 1 ")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_rs_dropdown_item, null, {
                      default: withCtx(() => [
                        createTextVNode(" Option 3 ")
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                })
              ]),
              createVNode("div", { class: "flex justify-end" }, [
                createVNode("button", {
                  class: "text-sm border border-slate-200 py-1 px-3 rounded-lg",
                  onClick: ($event) => unref(showCode5) ? showCode5.value = false : showCode5.value = true
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/Kitchensink/ui/component/dropdown.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=dropdown.860beaa4.mjs.map
