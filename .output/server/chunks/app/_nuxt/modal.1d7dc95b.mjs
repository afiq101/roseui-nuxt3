import { c as _sfc_main$q, b as __nuxt_component_1$2, d as _sfc_main$p, s as _sfc_main$f, k as __nuxt_component_3 } from '../server.mjs';
import { ref, withCtx, createTextVNode, unref, createVNode, useSSRContext } from 'vue';
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
  __name: "modal",
  __ssrInlineRender: true,
  setup(__props) {
    const showModal = ref({
      modal1: false,
      modal2: false,
      modal3: false,
      modal4: false,
      modal5: false,
      modal6: false,
      modal7: false,
      modal8: false,
      modal9: false,
      modal10: false,
      modal11: false,
      modal12: false,
      modal13: false
    });
    const showCode = ref({
      code1: false,
      code2: false,
      code3: false,
      code4: false,
      code5: false
    });
    const clickOK = () => {
      alert("You have clicked OK");
    };
    const clickCancel = () => {
      alert("You have clicked Cancel");
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_LayoutsBreadcrumb = _sfc_main$q;
      const _component_rs_card = __nuxt_component_1$2;
      const _component_rs_button = _sfc_main$p;
      const _component_rs_modal = _sfc_main$f;
      const _component_ClientOnly = __nuxt_component_3;
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_component_LayoutsBreadcrumb, null, null, _parent));
      _push(ssrRenderComponent(_component_rs_card, null, {
        header: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Default `);
          } else {
            return [
              createTextVNode("Default ")
            ];
          }
        }),
        body: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<p class="mb-4"${_scopeId}>Use <code${_scopeId}>rs-model</code> to show/hide modal.</p><div class="flex flex-wrap items-center justify-start gap-x-6"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_rs_button, {
              onClick: ($event) => unref(showModal).modal1 = true
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`Show Modal`);
                } else {
                  return [
                    createTextVNode("Show Modal")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_rs_button, {
              onClick: ($event) => unref(showModal).modal9 = true
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`Hide Overlay`);
                } else {
                  return [
                    createTextVNode("Hide Overlay")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div>`);
            _push2(ssrRenderComponent(_component_rs_modal, {
              title: "This is a modal",
              modelValue: unref(showModal).modal1,
              "onUpdate:modelValue": ($event) => unref(showModal).modal1 = $event
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` This is the content of modal. `);
                } else {
                  return [
                    createTextVNode(" This is the content of modal. ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_rs_modal, {
              title: "This is a modal",
              modelValue: unref(showModal).modal9,
              "onUpdate:modelValue": ($event) => unref(showModal).modal9 = $event,
              "hide-overlay": ""
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` This is the content of modal. `);
                } else {
                  return [
                    createTextVNode(" This is the content of modal. ")
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
                createTextVNode("Use "),
                createVNode("code", null, "rs-model"),
                createTextVNode(" to show/hide modal.")
              ]),
              createVNode("div", { class: "flex flex-wrap items-center justify-start gap-x-6" }, [
                createVNode(_component_rs_button, {
                  onClick: ($event) => unref(showModal).modal1 = true
                }, {
                  default: withCtx(() => [
                    createTextVNode("Show Modal")
                  ]),
                  _: 1
                }, 8, ["onClick"]),
                createVNode(_component_rs_button, {
                  onClick: ($event) => unref(showModal).modal9 = true
                }, {
                  default: withCtx(() => [
                    createTextVNode("Hide Overlay")
                  ]),
                  _: 1
                }, 8, ["onClick"])
              ]),
              createVNode(_component_rs_modal, {
                title: "This is a modal",
                modelValue: unref(showModal).modal1,
                "onUpdate:modelValue": ($event) => unref(showModal).modal1 = $event
              }, {
                default: withCtx(() => [
                  createTextVNode(" This is the content of modal. ")
                ]),
                _: 1
              }, 8, ["modelValue", "onUpdate:modelValue"]),
              createVNode(_component_rs_modal, {
                title: "This is a modal",
                modelValue: unref(showModal).modal9,
                "onUpdate:modelValue": ($event) => unref(showModal).modal9 = $event,
                "hide-overlay": ""
              }, {
                default: withCtx(() => [
                  createTextVNode(" This is the content of modal. ")
                ]),
                _: 1
              }, 8, ["modelValue", "onUpdate:modelValue"]),
              createVNode("div", { class: "flex justify-end" }, [
                createVNode("button", {
                  class: "text-sm border border-slate-200 py-1 px-3 rounded-lg",
                  onClick: ($event) => unref(showCode).code1 ? unref(showCode).code1 = false : unref(showCode).code1 = true
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
            _push2(`Size `);
          } else {
            return [
              createTextVNode("Size ")
            ];
          }
        }),
        body: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<p class="mb-4"${_scopeId}> Modal size uses props <code${_scopeId}>size</code> to change the size of modal. There are 3 sizes: <code${_scopeId}>sm</code>, <code${_scopeId}>md</code> and <code${_scopeId}>lg</code>. The default size is <code${_scopeId}>md</code>. </p><div class="flex flex-wrap items-center justify-start gap-x-6"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_rs_button, {
              onClick: ($event) => unref(showModal).modal2 = true
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`Small Size`);
                } else {
                  return [
                    createTextVNode("Small Size")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_rs_button, {
              onClick: ($event) => unref(showModal).modal3 = true
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`Medium Size`);
                } else {
                  return [
                    createTextVNode("Medium Size")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_rs_button, {
              onClick: ($event) => unref(showModal).modal4 = true
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`Large Size`);
                } else {
                  return [
                    createTextVNode("Large Size")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div>`);
            _push2(ssrRenderComponent(_component_rs_modal, {
              title: "This is a modal",
              size: "sm",
              modelValue: unref(showModal).modal2,
              "onUpdate:modelValue": ($event) => unref(showModal).modal2 = $event
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` This is the content of small modal. `);
                } else {
                  return [
                    createTextVNode(" This is the content of small modal. ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_rs_modal, {
              title: "This is a modal",
              size: "md",
              modelValue: unref(showModal).modal3,
              "onUpdate:modelValue": ($event) => unref(showModal).modal3 = $event
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` This is the content of medium modal. `);
                } else {
                  return [
                    createTextVNode(" This is the content of medium modal. ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_rs_modal, {
              title: "This is a modal",
              size: "lg",
              modelValue: unref(showModal).modal4,
              "onUpdate:modelValue": ($event) => unref(showModal).modal4 = $event
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` This is the content of large modal. `);
                } else {
                  return [
                    createTextVNode(" This is the content of large modal. ")
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
                createTextVNode(" Modal size uses props "),
                createVNode("code", null, "size"),
                createTextVNode(" to change the size of modal. There are 3 sizes: "),
                createVNode("code", null, "sm"),
                createTextVNode(", "),
                createVNode("code", null, "md"),
                createTextVNode(" and "),
                createVNode("code", null, "lg"),
                createTextVNode(". The default size is "),
                createVNode("code", null, "md"),
                createTextVNode(". ")
              ]),
              createVNode("div", { class: "flex flex-wrap items-center justify-start gap-x-6" }, [
                createVNode(_component_rs_button, {
                  onClick: ($event) => unref(showModal).modal2 = true
                }, {
                  default: withCtx(() => [
                    createTextVNode("Small Size")
                  ]),
                  _: 1
                }, 8, ["onClick"]),
                createVNode(_component_rs_button, {
                  onClick: ($event) => unref(showModal).modal3 = true
                }, {
                  default: withCtx(() => [
                    createTextVNode("Medium Size")
                  ]),
                  _: 1
                }, 8, ["onClick"]),
                createVNode(_component_rs_button, {
                  onClick: ($event) => unref(showModal).modal4 = true
                }, {
                  default: withCtx(() => [
                    createTextVNode("Large Size")
                  ]),
                  _: 1
                }, 8, ["onClick"])
              ]),
              createVNode(_component_rs_modal, {
                title: "This is a modal",
                size: "sm",
                modelValue: unref(showModal).modal2,
                "onUpdate:modelValue": ($event) => unref(showModal).modal2 = $event
              }, {
                default: withCtx(() => [
                  createTextVNode(" This is the content of small modal. ")
                ]),
                _: 1
              }, 8, ["modelValue", "onUpdate:modelValue"]),
              createVNode(_component_rs_modal, {
                title: "This is a modal",
                size: "md",
                modelValue: unref(showModal).modal3,
                "onUpdate:modelValue": ($event) => unref(showModal).modal3 = $event
              }, {
                default: withCtx(() => [
                  createTextVNode(" This is the content of medium modal. ")
                ]),
                _: 1
              }, 8, ["modelValue", "onUpdate:modelValue"]),
              createVNode(_component_rs_modal, {
                title: "This is a modal",
                size: "lg",
                modelValue: unref(showModal).modal4,
                "onUpdate:modelValue": ($event) => unref(showModal).modal4 = $event
              }, {
                default: withCtx(() => [
                  createTextVNode(" This is the content of large modal. ")
                ]),
                _: 1
              }, 8, ["modelValue", "onUpdate:modelValue"]),
              createVNode("div", { class: "flex justify-end" }, [
                createVNode("button", {
                  class: "text-sm border border-slate-200 py-1 px-3 rounded-lg",
                  onClick: ($event) => unref(showCode).code2 ? unref(showCode).code2 = false : unref(showCode).code2 = true
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
            _push2(`Position `);
          } else {
            return [
              createTextVNode("Position ")
            ];
          }
        }),
        body: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<p class="mb-4"${_scopeId}> Modal position uses props <code${_scopeId}>position</code> to change the position of modal. There are 3 positions: <code${_scopeId}>top</code>, <code${_scopeId}>center</code> and <code${_scopeId}>bottom</code>. The default position is <code${_scopeId}>top</code>. </p><div class="flex flex-wrap items-center justify-start gap-x-6"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_rs_button, {
              onClick: ($event) => unref(showModal).modal5 = true
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`Top`);
                } else {
                  return [
                    createTextVNode("Top")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_rs_button, {
              onClick: ($event) => unref(showModal).modal6 = true
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`Center`);
                } else {
                  return [
                    createTextVNode("Center")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_rs_button, {
              onClick: ($event) => unref(showModal).modal7 = true
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`Bottom`);
                } else {
                  return [
                    createTextVNode("Bottom")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div>`);
            _push2(ssrRenderComponent(_component_rs_modal, {
              title: "This is a modal",
              position: "top",
              modelValue: unref(showModal).modal5,
              "onUpdate:modelValue": ($event) => unref(showModal).modal5 = $event
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` This is the content of modal. `);
                } else {
                  return [
                    createTextVNode(" This is the content of modal. ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_rs_modal, {
              title: "This is a modal",
              position: "center",
              modelValue: unref(showModal).modal6,
              "onUpdate:modelValue": ($event) => unref(showModal).modal6 = $event
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` This is the content of modal. `);
                } else {
                  return [
                    createTextVNode(" This is the content of modal. ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_rs_modal, {
              title: "This is a modal",
              position: "bottom",
              modelValue: unref(showModal).modal7,
              "onUpdate:modelValue": ($event) => unref(showModal).modal7 = $event
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` This is the content of modal. `);
                } else {
                  return [
                    createTextVNode(" This is the content of modal. ")
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
                createTextVNode(" Modal position uses props "),
                createVNode("code", null, "position"),
                createTextVNode(" to change the position of modal. There are 3 positions: "),
                createVNode("code", null, "top"),
                createTextVNode(", "),
                createVNode("code", null, "center"),
                createTextVNode(" and "),
                createVNode("code", null, "bottom"),
                createTextVNode(". The default position is "),
                createVNode("code", null, "top"),
                createTextVNode(". ")
              ]),
              createVNode("div", { class: "flex flex-wrap items-center justify-start gap-x-6" }, [
                createVNode(_component_rs_button, {
                  onClick: ($event) => unref(showModal).modal5 = true
                }, {
                  default: withCtx(() => [
                    createTextVNode("Top")
                  ]),
                  _: 1
                }, 8, ["onClick"]),
                createVNode(_component_rs_button, {
                  onClick: ($event) => unref(showModal).modal6 = true
                }, {
                  default: withCtx(() => [
                    createTextVNode("Center")
                  ]),
                  _: 1
                }, 8, ["onClick"]),
                createVNode(_component_rs_button, {
                  onClick: ($event) => unref(showModal).modal7 = true
                }, {
                  default: withCtx(() => [
                    createTextVNode("Bottom")
                  ]),
                  _: 1
                }, 8, ["onClick"])
              ]),
              createVNode(_component_rs_modal, {
                title: "This is a modal",
                position: "top",
                modelValue: unref(showModal).modal5,
                "onUpdate:modelValue": ($event) => unref(showModal).modal5 = $event
              }, {
                default: withCtx(() => [
                  createTextVNode(" This is the content of modal. ")
                ]),
                _: 1
              }, 8, ["modelValue", "onUpdate:modelValue"]),
              createVNode(_component_rs_modal, {
                title: "This is a modal",
                position: "center",
                modelValue: unref(showModal).modal6,
                "onUpdate:modelValue": ($event) => unref(showModal).modal6 = $event
              }, {
                default: withCtx(() => [
                  createTextVNode(" This is the content of modal. ")
                ]),
                _: 1
              }, 8, ["modelValue", "onUpdate:modelValue"]),
              createVNode(_component_rs_modal, {
                title: "This is a modal",
                position: "bottom",
                modelValue: unref(showModal).modal7,
                "onUpdate:modelValue": ($event) => unref(showModal).modal7 = $event
              }, {
                default: withCtx(() => [
                  createTextVNode(" This is the content of modal. ")
                ]),
                _: 1
              }, 8, ["modelValue", "onUpdate:modelValue"]),
              createVNode("div", { class: "flex justify-end" }, [
                createVNode("button", {
                  class: "text-sm border border-slate-200 py-1 px-3 rounded-lg",
                  onClick: ($event) => unref(showCode).code3 ? unref(showCode).code3 = false : unref(showCode).code3 = true
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
            _push2(`Customize`);
          } else {
            return [
              createTextVNode("Customize")
            ];
          }
        }),
        body: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<p class="mb-4 text-justify"${_scopeId}> Modal header, body and footer can be customized by using template slots. The header slot named <code${_scopeId}>header</code> and the body slot named <code${_scopeId}>body</code> and the footer slot named <code${_scopeId}>footer</code>. Ok title can be customized by using <code${_scopeId}>ok-title</code> prop. The default title is <code${_scopeId}>Ok</code>. Cancel title can be customized by using <code${_scopeId}>cancel-title</code> prop. The default title is <code${_scopeId}>Cancel</code>. Ok and cancel button can be hide by using <code${_scopeId}>ok-only</code> or <code${_scopeId}>cancel-only</code> prop. The default value is <code${_scopeId}>false</code> for both. </p><div class="flex flex-wrap items-center justify-start gap-x-6"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_rs_button, {
              onClick: ($event) => unref(showModal).modal8 = true
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`Show Modal`);
                } else {
                  return [
                    createTextVNode("Show Modal")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_rs_button, {
              onClick: ($event) => unref(showModal).modal10 = true
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`Custom Button`);
                } else {
                  return [
                    createTextVNode("Custom Button")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_rs_button, {
              onClick: ($event) => unref(showModal).modal11 = true
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`OK Only`);
                } else {
                  return [
                    createTextVNode("OK Only")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_rs_button, {
              onClick: ($event) => unref(showModal).modal12 = true
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`Cancel Only`);
                } else {
                  return [
                    createTextVNode("Cancel Only")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div>`);
            _push2(ssrRenderComponent(_component_rs_modal, {
              title: "This is a modal",
              modelValue: unref(showModal).modal8,
              "onUpdate:modelValue": ($event) => unref(showModal).modal8 = $event
            }, {
              header: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Custom Header `);
                } else {
                  return [
                    createTextVNode(" Custom Header ")
                  ];
                }
              }),
              body: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`Custom Body `);
                } else {
                  return [
                    createTextVNode("Custom Body ")
                  ];
                }
              }),
              footer: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Custom Footer`);
                } else {
                  return [
                    createTextVNode(" Custom Footer")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_rs_modal, {
              title: "This is a modal",
              modelValue: unref(showModal).modal10,
              "onUpdate:modelValue": ($event) => unref(showModal).modal10 = $event,
              "cancel-title": "Close",
              "ok-title": "Accept"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` This is the content of modal. `);
                } else {
                  return [
                    createTextVNode(" This is the content of modal. ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_rs_modal, {
              title: "This is a modal",
              modelValue: unref(showModal).modal11,
              "onUpdate:modelValue": ($event) => unref(showModal).modal11 = $event,
              "ok-only": ""
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` This is the content of modal. `);
                } else {
                  return [
                    createTextVNode(" This is the content of modal. ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_rs_modal, {
              title: "This is a modal",
              modelValue: unref(showModal).modal12,
              "onUpdate:modelValue": ($event) => unref(showModal).modal12 = $event,
              "cancel-only": ""
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` This is the content of modal. `);
                } else {
                  return [
                    createTextVNode(" This is the content of modal. ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`<div class="flex justify-end"${_scopeId}><button class="text-sm border border-slate-200 py-1 px-3 rounded-lg"${_scopeId}> Show Code </button></div>`);
            _push2(ssrRenderComponent(_component_ClientOnly, null, null, _parent2, _scopeId));
          } else {
            return [
              createVNode("p", { class: "mb-4 text-justify" }, [
                createTextVNode(" Modal header, body and footer can be customized by using template slots. The header slot named "),
                createVNode("code", null, "header"),
                createTextVNode(" and the body slot named "),
                createVNode("code", null, "body"),
                createTextVNode(" and the footer slot named "),
                createVNode("code", null, "footer"),
                createTextVNode(". Ok title can be customized by using "),
                createVNode("code", null, "ok-title"),
                createTextVNode(" prop. The default title is "),
                createVNode("code", null, "Ok"),
                createTextVNode(". Cancel title can be customized by using "),
                createVNode("code", null, "cancel-title"),
                createTextVNode(" prop. The default title is "),
                createVNode("code", null, "Cancel"),
                createTextVNode(". Ok and cancel button can be hide by using "),
                createVNode("code", null, "ok-only"),
                createTextVNode(" or "),
                createVNode("code", null, "cancel-only"),
                createTextVNode(" prop. The default value is "),
                createVNode("code", null, "false"),
                createTextVNode(" for both. ")
              ]),
              createVNode("div", { class: "flex flex-wrap items-center justify-start gap-x-6" }, [
                createVNode(_component_rs_button, {
                  onClick: ($event) => unref(showModal).modal8 = true
                }, {
                  default: withCtx(() => [
                    createTextVNode("Show Modal")
                  ]),
                  _: 1
                }, 8, ["onClick"]),
                createVNode(_component_rs_button, {
                  onClick: ($event) => unref(showModal).modal10 = true
                }, {
                  default: withCtx(() => [
                    createTextVNode("Custom Button")
                  ]),
                  _: 1
                }, 8, ["onClick"]),
                createVNode(_component_rs_button, {
                  onClick: ($event) => unref(showModal).modal11 = true
                }, {
                  default: withCtx(() => [
                    createTextVNode("OK Only")
                  ]),
                  _: 1
                }, 8, ["onClick"]),
                createVNode(_component_rs_button, {
                  onClick: ($event) => unref(showModal).modal12 = true
                }, {
                  default: withCtx(() => [
                    createTextVNode("Cancel Only")
                  ]),
                  _: 1
                }, 8, ["onClick"])
              ]),
              createVNode(_component_rs_modal, {
                title: "This is a modal",
                modelValue: unref(showModal).modal8,
                "onUpdate:modelValue": ($event) => unref(showModal).modal8 = $event
              }, {
                header: withCtx(() => [
                  createTextVNode(" Custom Header ")
                ]),
                body: withCtx(() => [
                  createTextVNode("Custom Body ")
                ]),
                footer: withCtx(() => [
                  createTextVNode(" Custom Footer")
                ]),
                _: 1
              }, 8, ["modelValue", "onUpdate:modelValue"]),
              createVNode(_component_rs_modal, {
                title: "This is a modal",
                modelValue: unref(showModal).modal10,
                "onUpdate:modelValue": ($event) => unref(showModal).modal10 = $event,
                "cancel-title": "Close",
                "ok-title": "Accept"
              }, {
                default: withCtx(() => [
                  createTextVNode(" This is the content of modal. ")
                ]),
                _: 1
              }, 8, ["modelValue", "onUpdate:modelValue"]),
              createVNode(_component_rs_modal, {
                title: "This is a modal",
                modelValue: unref(showModal).modal11,
                "onUpdate:modelValue": ($event) => unref(showModal).modal11 = $event,
                "ok-only": ""
              }, {
                default: withCtx(() => [
                  createTextVNode(" This is the content of modal. ")
                ]),
                _: 1
              }, 8, ["modelValue", "onUpdate:modelValue"]),
              createVNode(_component_rs_modal, {
                title: "This is a modal",
                modelValue: unref(showModal).modal12,
                "onUpdate:modelValue": ($event) => unref(showModal).modal12 = $event,
                "cancel-only": ""
              }, {
                default: withCtx(() => [
                  createTextVNode(" This is the content of modal. ")
                ]),
                _: 1
              }, 8, ["modelValue", "onUpdate:modelValue"]),
              createVNode("div", { class: "flex justify-end" }, [
                createVNode("button", {
                  class: "text-sm border border-slate-200 py-1 px-3 rounded-lg",
                  onClick: ($event) => unref(showCode).code4 ? unref(showCode).code4 = false : unref(showCode).code4 = true
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
            _push2(`Bind Function `);
          } else {
            return [
              createTextVNode("Bind Function ")
            ];
          }
        }),
        body: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<p class="mb-4"${_scopeId}> You can bind function for ok and cancel button inside the modal by using <code${_scopeId}>ok-callback</code> and <code${_scopeId}>cancel-callback</code> prop. </p><div class="flex flex-wrap items-center justify-start gap-x-6"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_rs_button, {
              onClick: ($event) => unref(showModal).modal13 = true
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`Bind Function`);
                } else {
                  return [
                    createTextVNode("Bind Function")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div>`);
            _push2(ssrRenderComponent(_component_rs_modal, {
              title: "This is a modal",
              modelValue: unref(showModal).modal13,
              "onUpdate:modelValue": ($event) => unref(showModal).modal13 = $event,
              "ok-callback": clickOK,
              "cancel-callback": clickCancel
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` This is the content of modal. `);
                } else {
                  return [
                    createTextVNode(" This is the content of modal. ")
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
                createTextVNode(" You can bind function for ok and cancel button inside the modal by using "),
                createVNode("code", null, "ok-callback"),
                createTextVNode(" and "),
                createVNode("code", null, "cancel-callback"),
                createTextVNode(" prop. ")
              ]),
              createVNode("div", { class: "flex flex-wrap items-center justify-start gap-x-6" }, [
                createVNode(_component_rs_button, {
                  onClick: ($event) => unref(showModal).modal13 = true
                }, {
                  default: withCtx(() => [
                    createTextVNode("Bind Function")
                  ]),
                  _: 1
                }, 8, ["onClick"])
              ]),
              createVNode(_component_rs_modal, {
                title: "This is a modal",
                modelValue: unref(showModal).modal13,
                "onUpdate:modelValue": ($event) => unref(showModal).modal13 = $event,
                "ok-callback": clickOK,
                "cancel-callback": clickCancel
              }, {
                default: withCtx(() => [
                  createTextVNode(" This is the content of modal. ")
                ]),
                _: 1
              }, 8, ["modelValue", "onUpdate:modelValue"]),
              createVNode("div", { class: "flex justify-end" }, [
                createVNode("button", {
                  class: "text-sm border border-slate-200 py-1 px-3 rounded-lg",
                  onClick: ($event) => unref(showCode).code5 ? unref(showCode).code5 = false : unref(showCode).code5 = true
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/Kitchensink/ui/component/modal.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=modal.1d7dc95b.mjs.map
