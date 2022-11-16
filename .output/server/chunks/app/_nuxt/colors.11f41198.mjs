import { c as _sfc_main$q, b as __nuxt_component_1$2, k as __nuxt_component_3 } from '../server.mjs';
import { withCtx, createTextVNode, createVNode, openBlock, createBlock, Fragment, renderList, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrRenderClass, ssrInterpolate } from 'vue/server-renderer';
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
  __name: "colors",
  __ssrInlineRender: true,
  setup(__props) {
    const defaultColor = {
      primary: ["bg-primary-400", "text-white"],
      secondary: ["bg-secondary-400", "text-white"],
      info: ["bg-info", "text-white"],
      success: ["bg-success", "text-white"],
      warning: ["bg-warning", "text-white"],
      danger: ["bg-danger", "text-white"],
      light: ["bg-light"],
      dark: ["bg-dark", "text-white"]
    };
    const color = {
      slate: [
        "bg-slate-50",
        "bg-slate-100",
        "bg-slate-200",
        "bg-slate-300",
        "bg-slate-400",
        "bg-slate-500",
        "bg-slate-600",
        "bg-slate-700",
        "bg-slate-800",
        "bg-slate-900	"
      ],
      gray: [
        "bg-gray-50",
        "bg-gray-100",
        "bg-gray-200",
        "bg-gray-300",
        "bg-secondary",
        "bg-gray-500",
        "bg-gray-600",
        "bg-gray-700",
        "bg-slate-800",
        "bg-slate-900"
      ],
      zinc: [
        "bg-zinc-50",
        "bg-zinc-100",
        "bg-zinc-200",
        "bg-zinc-300",
        "bg-zinc-400",
        "bg-zinc-500",
        "bg-zinc-600",
        "bg-zinc-700",
        "bg-slate-800",
        "bg-slate-900"
      ],
      neutral: [
        "bg-neutral-50",
        "bg-neutral-100",
        "bg-neutral-200",
        "bg-neutral-300",
        "bg-neutral-400",
        "bg-neutral-500",
        "bg-neutral-600",
        "bg-neutral-700",
        "bg-slate-800",
        "bg-slate-900"
      ],
      stone: [
        "bg-stone-50",
        "bg-stone-100",
        "bg-stone-200",
        "bg-stone-300",
        "bg-stone-400",
        "bg-stone-500",
        "bg-stone-600",
        "bg-stone-700",
        "bg-stone-800",
        "bg-stone-900"
      ],
      red: [
        "bg-red-50",
        "bg-red-100",
        "bg-red-200",
        "bg-red-300",
        "bg-danger",
        "bg-red-500",
        "bg-red-600",
        "bg-red-700",
        "bg-red-800",
        "bg-red-900"
      ],
      orange: [
        "bg-orange-50",
        "bg-orange-100",
        "bg-orange-200",
        "bg-orange-300",
        "bg-warning",
        "bg-orange-500",
        "bg-orange-600",
        "bg-orange-700",
        "bg-orange-800",
        "bg-orange-900"
      ],
      yellow: [
        "bg-yellow-50",
        "bg-yellow-100",
        "bg-yellow-200",
        "bg-yellow-300",
        "bg-yellow-400",
        "bg-yellow-500",
        "bg-yellow-600",
        "bg-yellow-700",
        "bg-yellow-800",
        "bg-yellow-900"
      ],
      green: [
        "bg-green-50",
        "bg-green-100",
        "bg-green-200",
        "bg-green-300",
        "bg-success",
        "bg-green-500",
        "bg-green-600",
        "bg-green-700",
        "bg-green-800",
        "bg-green-900"
      ],
      teal: [
        "bg-teal-50",
        "bg-teal-100",
        "bg-teal-200",
        "bg-teal-300",
        "bg-teal-400",
        "bg-teal-500",
        "bg-teal-600",
        "bg-teal-700",
        "bg-teal-800",
        "bg-teal-900"
      ],
      blue: [
        "bg-blue-50",
        "bg-blue-100",
        "bg-blue-200",
        "bg-blue-300",
        "bg-info",
        "bg-blue-500",
        "bg-blue-600",
        "bg-blue-700",
        "bg-blue-800",
        "bg-blue-900"
      ],
      indigo: [
        "bg-indigo-50",
        "bg-indigo-100",
        "bg-indigo-200",
        "bg-indigo-300",
        "bg-indigo-400",
        "bg-indigo-500",
        "bg-indigo-600",
        "bg-indigo-700",
        "bg-indigo-800",
        "bg-indigo-900"
      ],
      purple: [
        "bg-purple-50",
        "bg-purple-100",
        "bg-purple-200",
        "bg-purple-300",
        "bg-purple-400",
        "bg-purple-500",
        "bg-purple-600",
        "bg-purple-700",
        "bg-purple-800",
        "bg-purple-900"
      ],
      pink: [
        "bg-pink-50",
        "bg-pink-100",
        "bg-pink-200",
        "bg-pink-300",
        "bg-pink-400",
        "bg-pink-500",
        "bg-pink-600",
        "bg-pink-700",
        "bg-pink-800",
        "bg-pink-900"
      ]
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_LayoutsBreadcrumb = _sfc_main$q;
      const _component_rs_card = __nuxt_component_1$2;
      const _component_client_only = __nuxt_component_3;
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_component_LayoutsBreadcrumb, null, null, _parent));
      _push(ssrRenderComponent(_component_rs_card, null, {
        header: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Default Color `);
          } else {
            return [
              createTextVNode(" Default Color ")
            ];
          }
        }),
        body: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<p class="mb-4"${_scopeId}> This template also have a series of default color such as: </p><ul class="list-disc list-inside mb-4"${_scopeId}><li${_scopeId}>Primary</li><li${_scopeId}>Secondary</li><li${_scopeId}>Info</li><li${_scopeId}>Success</li><li${_scopeId}>Warning</li><li${_scopeId}>Danger</li><li${_scopeId}>Light</li><li${_scopeId}>Dark</li></ul><div class="grid grid-cols-2 md:grid-cols-5 gap-4"${_scopeId}><!--[-->`);
            ssrRenderList(defaultColor, (color2, key, index) => {
              _push2(`<div class=""${_scopeId}><div class="${ssrRenderClass([`${color2[0]} ${color2[1]}`, "h-10 w-full rounded-lg flex justify-center items-center font-medium"])}"${_scopeId}>${ssrInterpolate(`bg-${key}`)}</div></div>`);
            });
            _push2(`<!--]--></div>`);
          } else {
            return [
              createVNode("p", { class: "mb-4" }, " This template also have a series of default color such as: "),
              createVNode("ul", { class: "list-disc list-inside mb-4" }, [
                createVNode("li", null, "Primary"),
                createVNode("li", null, "Secondary"),
                createVNode("li", null, "Info"),
                createVNode("li", null, "Success"),
                createVNode("li", null, "Warning"),
                createVNode("li", null, "Danger"),
                createVNode("li", null, "Light"),
                createVNode("li", null, "Dark")
              ]),
              createVNode("div", { class: "grid grid-cols-2 md:grid-cols-5 gap-4" }, [
                (openBlock(), createBlock(Fragment, null, renderList(defaultColor, (color2, key, index) => {
                  return createVNode("div", {
                    class: "",
                    key: index
                  }, [
                    createVNode("div", {
                      class: ["h-10 w-full rounded-lg flex justify-center items-center font-medium", `${color2[0]} ${color2[1]}`]
                    }, toDisplayString(`bg-${key}`), 3)
                  ]);
                }), 64))
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_rs_card, null, {
        header: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<h5${_scopeId}>Tailwind Color</h5>`);
          } else {
            return [
              createVNode("h5", null, "Tailwind Color")
            ];
          }
        }),
        body: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<p class="mb-4"${_scopeId}>Below is the list of tailwind 3 color.</p><div class="grid grid-cols-1 gap-6"${_scopeId}><!--[-->`);
            ssrRenderList(color, (colorArr, key, index) => {
              _push2(`<div class="flex justify-center items-center"${_scopeId}><div class="text-sm flex-shrink-0 w-10 md:w-16 capitalize"${_scopeId}>${ssrInterpolate(key)}</div><div class="flex-1 ml-4 grid grid-cols-5 md:grid-cols-10 gap-4"${_scopeId}><!--[-->`);
              ssrRenderList(colorArr, (value, index2) => {
                _push2(`<div class=""${_scopeId}><div class="${ssrRenderClass([value, "h-10 w-full rounded-lg text-center"])}"${_scopeId}></div><span class="flex justify-center items-center font-medium"${_scopeId}>${ssrInterpolate(value.split("-")[2])}</span></div>`);
              });
              _push2(`<!--]--></div></div>`);
            });
            _push2(`<!--]--></div>`);
          } else {
            return [
              createVNode("p", { class: "mb-4" }, "Below is the list of tailwind 3 color."),
              createVNode("div", { class: "grid grid-cols-1 gap-6" }, [
                (openBlock(), createBlock(Fragment, null, renderList(color, (colorArr, key, index) => {
                  return createVNode("div", {
                    class: "flex justify-center items-center",
                    key: index
                  }, [
                    createVNode("div", { class: "text-sm flex-shrink-0 w-10 md:w-16 capitalize" }, toDisplayString(key), 1),
                    createVNode("div", { class: "flex-1 ml-4 grid grid-cols-5 md:grid-cols-10 gap-4" }, [
                      (openBlock(true), createBlock(Fragment, null, renderList(colorArr, (value, index2) => {
                        return openBlock(), createBlock("div", {
                          class: "",
                          key: index2
                        }, [
                          createVNode("div", {
                            class: ["h-10 w-full rounded-lg text-center", value]
                          }, null, 2),
                          createVNode("span", { class: "flex justify-center items-center font-medium" }, toDisplayString(value.split("-")[2]), 1)
                        ]);
                      }), 128))
                    ])
                  ]);
                }), 64))
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_rs_card, null, {
        header: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<h5${_scopeId}>How to use it?</h5>`);
          } else {
            return [
              createVNode("h5", null, "How to use it?")
            ];
          }
        }),
        body: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<p class="mb-4"${_scopeId}> This ui template primarily uses the tailwind default colour. This color can be used for background, text, border, and more. </p>`);
            _push2(ssrRenderComponent(_component_client_only, null, null, _parent2, _scopeId));
          } else {
            return [
              createVNode("p", { class: "mb-4" }, " This ui template primarily uses the tailwind default colour. This color can be used for background, text, border, and more. "),
              createVNode(_component_client_only)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/Kitchensink/ui/colors.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=colors.11f41198.mjs.map
