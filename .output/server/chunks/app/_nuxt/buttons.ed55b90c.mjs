import { c as _sfc_main$q, b as __nuxt_component_1$2, d as _sfc_main$p, k as __nuxt_component_3 } from '../server.mjs';
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
  __name: "buttons",
  __ssrInlineRender: true,
  setup(__props) {
    const showCode1 = ref(false);
    const showCode2 = ref(false);
    const showCode3 = ref(false);
    ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_LayoutsBreadcrumb = _sfc_main$q;
      const _component_rs_card = __nuxt_component_1$2;
      const _component_rs_button = _sfc_main$p;
      const _component_ClientOnly = __nuxt_component_3;
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
            _push2(`<p class="mb-4"${_scopeId}>Use the <code${_scopeId}>rs-button</code> to show badges.</p><div class="flex flex-wrap items-center justify-start gap-x-6"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_rs_button, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Button `);
                } else {
                  return [
                    createTextVNode(" Button ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div><div class="flex justify-end"${_scopeId}><button class="text-sm border border-slate-200 py-1 px-3 rounded-lg my-2"${_scopeId}> Show Code </button></div>`);
            _push2(ssrRenderComponent(_component_ClientOnly, null, null, _parent2, _scopeId));
          } else {
            return [
              createVNode("p", { class: "mb-4" }, [
                createTextVNode("Use the "),
                createVNode("code", null, "rs-button"),
                createTextVNode(" to show badges.")
              ]),
              createVNode("div", { class: "flex flex-wrap items-center justify-start gap-x-6" }, [
                createVNode(_component_rs_button, null, {
                  default: withCtx(() => [
                    createTextVNode(" Button ")
                  ]),
                  _: 1
                })
              ]),
              createVNode("div", { class: "flex justify-end" }, [
                createVNode("button", {
                  class: "text-sm border border-slate-200 py-1 px-3 rounded-lg my-2",
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
            _push2(`<p class="mb-4"${_scopeId}> Button variant uses props <code${_scopeId}>variant</code> to change the color of the button. There are 6 variants: <code${_scopeId}>primary</code>, <code${_scopeId}>info</code>, <code${_scopeId}>success</code>, <code${_scopeId}>warning</code> and <code${_scopeId}>danger</code>. </p><div class="flex flex-wrap items-center justify-start gap-x-6"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_rs_button, { variant: "primary" }, {
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
            _push2(ssrRenderComponent(_component_rs_button, { variant: "info" }, {
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
            _push2(ssrRenderComponent(_component_rs_button, { variant: "success" }, {
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
            _push2(ssrRenderComponent(_component_rs_button, { variant: "warning" }, {
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
            _push2(ssrRenderComponent(_component_rs_button, { variant: "danger" }, {
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
            _push2(`</div><div class="flex justify-end"${_scopeId}><button class="text-sm border border-slate-200 py-1 px-3 rounded-lg my-2"${_scopeId}> Show Code </button></div>`);
            _push2(ssrRenderComponent(_component_ClientOnly, null, null, _parent2, _scopeId));
          } else {
            return [
              createVNode("p", { class: "mb-4" }, [
                createTextVNode(" Button variant uses props "),
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
                createVNode(_component_rs_button, { variant: "primary" }, {
                  default: withCtx(() => [
                    createTextVNode(" Primary ")
                  ]),
                  _: 1
                }),
                createVNode(_component_rs_button, { variant: "info" }, {
                  default: withCtx(() => [
                    createTextVNode(" Info ")
                  ]),
                  _: 1
                }),
                createVNode(_component_rs_button, { variant: "success" }, {
                  default: withCtx(() => [
                    createTextVNode(" Success ")
                  ]),
                  _: 1
                }),
                createVNode(_component_rs_button, { variant: "warning" }, {
                  default: withCtx(() => [
                    createTextVNode(" Warning ")
                  ]),
                  _: 1
                }),
                createVNode(_component_rs_button, { variant: "danger" }, {
                  default: withCtx(() => [
                    createTextVNode(" Danger ")
                  ]),
                  _: 1
                })
              ]),
              createVNode("div", { class: "flex justify-end" }, [
                createVNode("button", {
                  class: "text-sm border border-slate-200 py-1 px-3 rounded-lg my-2",
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
            _push2(`<p class="mb-4"${_scopeId}> Button variant type uses props <code${_scopeId}>variant</code> to change the shape of the button. There are 3 variant types: <code${_scopeId}>fill</code>, <code${_scopeId}>outline</code> and <code${_scopeId}>text</code>. <code${_scopeId}>fill</code> is the default. <code${_scopeId}>outline</code> is used to create a button with a border. <code${_scopeId}>text</code> is used to create a button with no border and no background. </p><div class="my-6"${_scopeId}><div class="font-semibold text-lg bg-slate-100 dark:bg-slate-700 w-full mb-4 pl-2"${_scopeId}> Fill </div><div class="flex flex-wrap items-center justify-start gap-x-6"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_rs_button, {
              type: "fill",
              variant: "primary"
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
            _push2(ssrRenderComponent(_component_rs_button, {
              type: "fill",
              variant: "info"
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
            _push2(ssrRenderComponent(_component_rs_button, {
              type: "fill",
              variant: "success"
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
            _push2(ssrRenderComponent(_component_rs_button, {
              type: "fill",
              variant: "warning"
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
            _push2(ssrRenderComponent(_component_rs_button, {
              type: "fill",
              variant: "danger"
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
            _push2(`</div></div><div class="my-6"${_scopeId}><div class="font-semibold text-lg bg-slate-100 dark:bg-slate-700 w-full mb-4 pl-2"${_scopeId}> Outline </div><div class="flex flex-wrap items-center justify-start gap-x-6"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_rs_button, { variant: "primary-outline" }, {
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
            _push2(ssrRenderComponent(_component_rs_button, { variant: "info-outline" }, {
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
            _push2(ssrRenderComponent(_component_rs_button, { variant: "success-outline" }, {
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
            _push2(ssrRenderComponent(_component_rs_button, { variant: "warning-outline" }, {
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
            _push2(ssrRenderComponent(_component_rs_button, { variant: "danger-outline" }, {
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
            _push2(`</div></div><div class="my-6"${_scopeId}><div class="font-semibold text-lg bg-slate-100 dark:bg-slate-700 w-full mb-4 pl-2"${_scopeId}> Text </div><div class="flex flex-wrap items-center justify-start gap-x-6"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_rs_button, { variant: "primary-text" }, {
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
            _push2(ssrRenderComponent(_component_rs_button, { variant: "info-text" }, {
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
            _push2(ssrRenderComponent(_component_rs_button, { variant: "success-text" }, {
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
            _push2(ssrRenderComponent(_component_rs_button, { variant: "warning-text" }, {
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
            _push2(ssrRenderComponent(_component_rs_button, { variant: "danger-text" }, {
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
            _push2(`</div></div><div class="flex justify-end"${_scopeId}><button class="text-sm border border-slate-200 py-1 px-3 rounded-lg my-2"${_scopeId}> Show Code </button></div>`);
            _push2(ssrRenderComponent(_component_ClientOnly, null, null, _parent2, _scopeId));
          } else {
            return [
              createVNode("p", { class: "mb-4" }, [
                createTextVNode(" Button variant type uses props "),
                createVNode("code", null, "variant"),
                createTextVNode(" to change the shape of the button. There are 3 variant types: "),
                createVNode("code", null, "fill"),
                createTextVNode(", "),
                createVNode("code", null, "outline"),
                createTextVNode(" and "),
                createVNode("code", null, "text"),
                createTextVNode(". "),
                createVNode("code", null, "fill"),
                createTextVNode(" is the default. "),
                createVNode("code", null, "outline"),
                createTextVNode(" is used to create a button with a border. "),
                createVNode("code", null, "text"),
                createTextVNode(" is used to create a button with no border and no background. ")
              ]),
              createVNode("div", { class: "my-6" }, [
                createVNode("div", { class: "font-semibold text-lg bg-slate-100 dark:bg-slate-700 w-full mb-4 pl-2" }, " Fill "),
                createVNode("div", { class: "flex flex-wrap items-center justify-start gap-x-6" }, [
                  createVNode(_component_rs_button, {
                    type: "fill",
                    variant: "primary"
                  }, {
                    default: withCtx(() => [
                      createTextVNode(" Primary ")
                    ]),
                    _: 1
                  }),
                  createVNode(_component_rs_button, {
                    type: "fill",
                    variant: "info"
                  }, {
                    default: withCtx(() => [
                      createTextVNode(" Info ")
                    ]),
                    _: 1
                  }),
                  createVNode(_component_rs_button, {
                    type: "fill",
                    variant: "success"
                  }, {
                    default: withCtx(() => [
                      createTextVNode(" Success ")
                    ]),
                    _: 1
                  }),
                  createVNode(_component_rs_button, {
                    type: "fill",
                    variant: "warning"
                  }, {
                    default: withCtx(() => [
                      createTextVNode(" Warning ")
                    ]),
                    _: 1
                  }),
                  createVNode(_component_rs_button, {
                    type: "fill",
                    variant: "danger"
                  }, {
                    default: withCtx(() => [
                      createTextVNode(" Danger ")
                    ]),
                    _: 1
                  })
                ])
              ]),
              createVNode("div", { class: "my-6" }, [
                createVNode("div", { class: "font-semibold text-lg bg-slate-100 dark:bg-slate-700 w-full mb-4 pl-2" }, " Outline "),
                createVNode("div", { class: "flex flex-wrap items-center justify-start gap-x-6" }, [
                  createVNode(_component_rs_button, { variant: "primary-outline" }, {
                    default: withCtx(() => [
                      createTextVNode(" Primary ")
                    ]),
                    _: 1
                  }),
                  createVNode(_component_rs_button, { variant: "info-outline" }, {
                    default: withCtx(() => [
                      createTextVNode(" Info ")
                    ]),
                    _: 1
                  }),
                  createVNode(_component_rs_button, { variant: "success-outline" }, {
                    default: withCtx(() => [
                      createTextVNode(" Success ")
                    ]),
                    _: 1
                  }),
                  createVNode(_component_rs_button, { variant: "warning-outline" }, {
                    default: withCtx(() => [
                      createTextVNode(" Warning ")
                    ]),
                    _: 1
                  }),
                  createVNode(_component_rs_button, { variant: "danger-outline" }, {
                    default: withCtx(() => [
                      createTextVNode(" Danger ")
                    ]),
                    _: 1
                  })
                ])
              ]),
              createVNode("div", { class: "my-6" }, [
                createVNode("div", { class: "font-semibold text-lg bg-slate-100 dark:bg-slate-700 w-full mb-4 pl-2" }, " Text "),
                createVNode("div", { class: "flex flex-wrap items-center justify-start gap-x-6" }, [
                  createVNode(_component_rs_button, { variant: "primary-text" }, {
                    default: withCtx(() => [
                      createTextVNode(" Primary ")
                    ]),
                    _: 1
                  }),
                  createVNode(_component_rs_button, { variant: "info-text" }, {
                    default: withCtx(() => [
                      createTextVNode(" Info ")
                    ]),
                    _: 1
                  }),
                  createVNode(_component_rs_button, { variant: "success-text" }, {
                    default: withCtx(() => [
                      createTextVNode(" Success ")
                    ]),
                    _: 1
                  }),
                  createVNode(_component_rs_button, { variant: "warning-text" }, {
                    default: withCtx(() => [
                      createTextVNode(" Warning ")
                    ]),
                    _: 1
                  }),
                  createVNode(_component_rs_button, { variant: "danger-text" }, {
                    default: withCtx(() => [
                      createTextVNode(" Danger ")
                    ]),
                    _: 1
                  })
                ])
              ]),
              createVNode("div", { class: "flex justify-end" }, [
                createVNode("button", {
                  class: "text-sm border border-slate-200 py-1 px-3 rounded-lg my-2",
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
            _push2(` Size `);
          } else {
            return [
              createTextVNode(" Size ")
            ];
          }
        }),
        body: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<p class="mb-4"${_scopeId}> Button size uses props <code${_scopeId}>size</code> to change the size of button. There are 3 sizes: <code${_scopeId}>small</code>, <code${_scopeId}>medium</code> and <code${_scopeId}>large</code>. </p><div class="flex flex-wrap items-center justify-start gap-x-6"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_rs_button, { size: "sm" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Small `);
                } else {
                  return [
                    createTextVNode(" Small ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_rs_button, { size: "md" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Medium `);
                } else {
                  return [
                    createTextVNode(" Medium ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_rs_button, { size: "lg" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Large `);
                } else {
                  return [
                    createTextVNode(" Large ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div><div class="flex justify-end"${_scopeId}><button class="text-sm border border-slate-200 py-1 px-3 rounded-lg my-2"${_scopeId}> Show Code </button></div>`);
            _push2(ssrRenderComponent(_component_ClientOnly, null, null, _parent2, _scopeId));
          } else {
            return [
              createVNode("p", { class: "mb-4" }, [
                createTextVNode(" Button size uses props "),
                createVNode("code", null, "size"),
                createTextVNode(" to change the size of button. There are 3 sizes: "),
                createVNode("code", null, "small"),
                createTextVNode(", "),
                createVNode("code", null, "medium"),
                createTextVNode(" and "),
                createVNode("code", null, "large"),
                createTextVNode(". ")
              ]),
              createVNode("div", { class: "flex flex-wrap items-center justify-start gap-x-6" }, [
                createVNode(_component_rs_button, { size: "sm" }, {
                  default: withCtx(() => [
                    createTextVNode(" Small ")
                  ]),
                  _: 1
                }),
                createVNode(_component_rs_button, { size: "md" }, {
                  default: withCtx(() => [
                    createTextVNode(" Medium ")
                  ]),
                  _: 1
                }),
                createVNode(_component_rs_button, { size: "lg" }, {
                  default: withCtx(() => [
                    createTextVNode(" Large ")
                  ]),
                  _: 1
                })
              ]),
              createVNode("div", { class: "flex justify-end" }, [
                createVNode("button", {
                  class: "text-sm border border-slate-200 py-1 px-3 rounded-lg my-2",
                  onClick: ($event) => unref(showCode1) ? showCode1.value = false : showCode1.value = true
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/Kitchensink/ui/component/buttons.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=buttons.ed55b90c.mjs.map
