import { c as _sfc_main$q, b as __nuxt_component_1$2 } from '../server.mjs';
import { withCtx, createVNode, createTextVNode, useSSRContext } from 'vue';
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
  __name: "typography",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_LayoutsBreadcrumb = _sfc_main$q;
      const _component_rs_card = __nuxt_component_1$2;
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_component_LayoutsBreadcrumb, null, null, _parent));
      _push(ssrRenderComponent(_component_rs_card, null, {
        header: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<h5${_scopeId}>Heading</h5>`);
          } else {
            return [
              createVNode("h5", null, "Heading")
            ];
          }
        }),
        body: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<p class="mb-4 pb-4"${_scopeId}> All HTML headers are supported, from &lt;h1&gt; to &lt;h6&gt; </p><div class="grid grid-cols-10 justify-between gap-y-2"${_scopeId}><div class="col-span-5 p-2 bg-slate-100 dark:bg-gray-700 text-left pl-4"${_scopeId}><h5 class="font-normal"${_scopeId}>Example</h5></div><div class="col-span-5 p-2 bg-slate-100 dark:bg-gray-700 text-right pr-4"${_scopeId}><h5 class="font-normal"${_scopeId}>Element Tag</h5></div><h1 class="ml-2 col-span-7"${_scopeId}>Header h1</h1><code class="text-right mr-2 col-span-3"${_scopeId}><span class="w-full bg-slate-100 dark:bg-gray-700"${_scopeId}>&lt;h1&gt;</span></code><h2 class="ml-2 col-span-7"${_scopeId}>Header h2</h2><code class="text-right mr-2 col-span-3"${_scopeId}><span class="w-full bg-slate-100 dark:bg-gray-700"${_scopeId}>&lt;h2&gt;</span></code><h3 class="ml-2 col-span-7"${_scopeId}>Header h3</h3><code class="text-right mr-2 col-span-3"${_scopeId}><span class="w-full bg-slate-100 dark:bg-gray-700"${_scopeId}>&lt;h3&gt;</span></code><h4 class="ml-2 col-span-7"${_scopeId}>Header h4</h4><code class="text-right mr-2 col-span-3"${_scopeId}><span class="w-full bg-slate-100 dark:bg-gray-700"${_scopeId}>&lt;h4&gt;</span></code><h5 class="ml-2 col-span-7"${_scopeId}>Header h5</h5><code class="text-right mr-2 col-span-3"${_scopeId}><span class="w-full bg-slate-100 dark:bg-gray-700"${_scopeId}>&lt;h5&gt;</span></code><h6 class="ml-2 col-span-7"${_scopeId}>Header h6</h6><code class="text-right mr-2 col-span-3"${_scopeId}><span class="w-full bg-slate-100 dark:bg-gray-700"${_scopeId}>&lt;h6&gt;</span></code></div>`);
          } else {
            return [
              createVNode("p", { class: "mb-4 pb-4" }, " All HTML headers are supported, from <h1> to <h6> "),
              createVNode("div", { class: "grid grid-cols-10 justify-between gap-y-2" }, [
                createVNode("div", { class: "col-span-5 p-2 bg-slate-100 dark:bg-gray-700 text-left pl-4" }, [
                  createVNode("h5", { class: "font-normal" }, "Example")
                ]),
                createVNode("div", { class: "col-span-5 p-2 bg-slate-100 dark:bg-gray-700 text-right pr-4" }, [
                  createVNode("h5", { class: "font-normal" }, "Element Tag")
                ]),
                createVNode("h1", { class: "ml-2 col-span-7" }, "Header h1"),
                createVNode("code", { class: "text-right mr-2 col-span-3" }, [
                  createVNode("span", { class: "w-full bg-slate-100 dark:bg-gray-700" }, "<h1>")
                ]),
                createVNode("h2", { class: "ml-2 col-span-7" }, "Header h2"),
                createVNode("code", { class: "text-right mr-2 col-span-3" }, [
                  createVNode("span", { class: "w-full bg-slate-100 dark:bg-gray-700" }, "<h2>")
                ]),
                createVNode("h3", { class: "ml-2 col-span-7" }, "Header h3"),
                createVNode("code", { class: "text-right mr-2 col-span-3" }, [
                  createVNode("span", { class: "w-full bg-slate-100 dark:bg-gray-700" }, "<h3>")
                ]),
                createVNode("h4", { class: "ml-2 col-span-7" }, "Header h4"),
                createVNode("code", { class: "text-right mr-2 col-span-3" }, [
                  createVNode("span", { class: "w-full bg-slate-100 dark:bg-gray-700" }, "<h4>")
                ]),
                createVNode("h5", { class: "ml-2 col-span-7" }, "Header h5"),
                createVNode("code", { class: "text-right mr-2 col-span-3" }, [
                  createVNode("span", { class: "w-full bg-slate-100 dark:bg-gray-700" }, "<h5>")
                ]),
                createVNode("h6", { class: "ml-2 col-span-7" }, "Header h6"),
                createVNode("code", { class: "text-right mr-2 col-span-3" }, [
                  createVNode("span", { class: "w-full bg-slate-100 dark:bg-gray-700" }, "<h6>")
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_rs_card, null, {
        header: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<h5${_scopeId}>Font Weight</h5>`);
          } else {
            return [
              createVNode("h5", null, "Font Weight")
            ];
          }
        }),
        body: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<p class="mb-4"${_scopeId}> We use <span class="text-cyan-500"${_scopeId}>tailwind</span> pre-defined class to change font weight of different element. </p><div class="grid grid-cols-2 justify-between gap-y-2"${_scopeId}><div class="py-1 bg-slate-100 dark:bg-gray-700 text-center"${_scopeId}><h5 class="font-normal"${_scopeId}>Example</h5></div><div class="py-1 bg-slate-100 dark:bg-gray-700 text-center"${_scopeId}><h5 class="font-normal"${_scopeId}>Class</h5></div><span class="font-light ml-2"${_scopeId}>This is the heading.</span><code class="text-right mr-2"${_scopeId}><span class="w-full bg-slate-100 dark:bg-gray-700"${_scopeId}>font-light</span></code><span class="font-normal ml-2"${_scopeId}>This is the heading.</span><code class="text-right mr-2"${_scopeId}><span class="w-full bg-slate-100 dark:bg-gray-700"${_scopeId}>font-normal</span></code><span class="font-medium ml-2"${_scopeId}>This is the heading.</span><code class="text-right mr-2"${_scopeId}><span class="w-full bg-slate-100 dark:bg-gray-700"${_scopeId}>font-medium</span></code><span class="font-semibold ml-2"${_scopeId}>This is the heading.</span><code class="text-right mr-2"${_scopeId}><span class="w-full bg-slate-100 dark:bg-gray-700"${_scopeId}>font-semibold</span></code><span class="font-bold ml-2"${_scopeId}>This is the heading.</span><code class="text-right mr-2"${_scopeId}><span class="w-full bg-slate-100 dark:bg-gray-700"${_scopeId}>font-bold</span></code></div>`);
          } else {
            return [
              createVNode("p", { class: "mb-4" }, [
                createTextVNode(" We use "),
                createVNode("span", { class: "text-cyan-500" }, "tailwind"),
                createTextVNode(" pre-defined class to change font weight of different element. ")
              ]),
              createVNode("div", { class: "grid grid-cols-2 justify-between gap-y-2" }, [
                createVNode("div", { class: "py-1 bg-slate-100 dark:bg-gray-700 text-center" }, [
                  createVNode("h5", { class: "font-normal" }, "Example")
                ]),
                createVNode("div", { class: "py-1 bg-slate-100 dark:bg-gray-700 text-center" }, [
                  createVNode("h5", { class: "font-normal" }, "Class")
                ]),
                createVNode("span", { class: "font-light ml-2" }, "This is the heading."),
                createVNode("code", { class: "text-right mr-2" }, [
                  createVNode("span", { class: "w-full bg-slate-100 dark:bg-gray-700" }, "font-light")
                ]),
                createVNode("span", { class: "font-normal ml-2" }, "This is the heading."),
                createVNode("code", { class: "text-right mr-2" }, [
                  createVNode("span", { class: "w-full bg-slate-100 dark:bg-gray-700" }, "font-normal")
                ]),
                createVNode("span", { class: "font-medium ml-2" }, "This is the heading."),
                createVNode("code", { class: "text-right mr-2" }, [
                  createVNode("span", { class: "w-full bg-slate-100 dark:bg-gray-700" }, "font-medium")
                ]),
                createVNode("span", { class: "font-semibold ml-2" }, "This is the heading."),
                createVNode("code", { class: "text-right mr-2" }, [
                  createVNode("span", { class: "w-full bg-slate-100 dark:bg-gray-700" }, "font-semibold")
                ]),
                createVNode("span", { class: "font-bold ml-2" }, "This is the heading."),
                createVNode("code", { class: "text-right mr-2" }, [
                  createVNode("span", { class: "w-full bg-slate-100 dark:bg-gray-700" }, "font-bold")
                ])
              ])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/Kitchensink/ui/typography.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=typography.343c0715.mjs.map
