import { _ as _export_sfc$1, a as __nuxt_component_0$2 } from '../server.mjs';
import { resolveComponent, withCtx, createVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderStyle, ssrRenderComponent } from 'vue/server-renderer';
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
  setup() {
    return {};
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_center = resolveComponent("center");
  const _component_nuxt_link = __nuxt_component_0$2;
  _push(`<div${ssrRenderAttrs(_attrs)}><div class="relative flex flex-col min-w-0 mb-4 lg:mb-0 break-words w-full"><div class="grid grid-cols-3 rounded-t mb-5 px-0 content-center justify-between"><div class="col-span-2 flex flex-wrap items-center py-2"><div><div><span class="text-gray-800 font-bold text-2xl">Akaun Kredit</span></div><span class="text-sm text-gray-500"> Pengurusan akaun kredit seperti transaksi akaun kredit, tambah nilai akaun kredit dan lain-lain. </span></div></div><div class="col-span-1 flex justify-end"><button class="bg-primary-800 button-md rounded py-2 px-6 text-white self-center"><span>Transaksi</span></button></div></div></div><div class="grid grid-cols-1 lg:grid-cols-3 gap-3 mt-2"><div class="bg-white rounded p-2 colspan-1 lg:p-4 border border-gray-200 items-stretch" style="${ssrRenderStyle({ "justify-content": "center", "align-items": "center" })}"><div style="${ssrRenderStyle({ "justify-content": "center", "align-items": "center" })}">`);
  _push(ssrRenderComponent(_component_center, null, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="justify-center align-center items-center"${_scopeId}><img src="https://cdn-icons-png.flaticon.com/512/584/584026.png" class="self-auto object-contain w-10 h-10 lg:w-16 lg:h-16"${_scopeId}></div><div class="mt-3"${_scopeId}><h2 class="text-3xl font-bold"${_scopeId}>200.00</h2></div><div class="mt-2"${_scopeId}><div${_scopeId}><span class="text-md text-gray-600"${_scopeId}>Baki Kredit</span></div><button class="hidden md:block w-32 px-2 py-2 mt-1 text-white bg-red-900 rounded" style="${ssrRenderStyle({ "justify-content": "center", "align-items": "center" })}"${_scopeId}>`);
        _push2(ssrRenderComponent(_component_nuxt_link, { to: "/kredit/tambah-nilai" }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<span${_scopeId2}>Tambah Nilai</span>`);
            } else {
              return [
                createVNode("span", null, "Tambah Nilai")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(`</button></div>`);
      } else {
        return [
          createVNode("div", { class: "justify-center align-center items-center" }, [
            createVNode("img", {
              src: "https://cdn-icons-png.flaticon.com/512/584/584026.png",
              class: "self-auto object-contain w-10 h-10 lg:w-16 lg:h-16"
            })
          ]),
          createVNode("div", { class: "mt-3" }, [
            createVNode("h2", { class: "text-3xl font-bold" }, "200.00")
          ]),
          createVNode("div", { class: "mt-2" }, [
            createVNode("div", null, [
              createVNode("span", { class: "text-md text-gray-600" }, "Baki Kredit")
            ]),
            createVNode("button", {
              class: "hidden md:block w-32 px-2 py-2 mt-1 text-white bg-red-900 rounded",
              style: { "justify-content": "center", "align-items": "center" }
            }, [
              createVNode(_component_nuxt_link, { to: "/kredit/tambah-nilai" }, {
                default: withCtx(() => [
                  createVNode("span", null, "Tambah Nilai")
                ]),
                _: 1
              })
            ])
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></div><div class="bg-white rounded border border-gray-200 p-2 lg:col-span-2 lg:p-4"><div class="border-b border-gray-100"><h2 class="font-bold text-lg">Maklumat Kredit</h2></div><div class="mt-3"><h4 class="font-bold text-sm">No. Akaun Kredit</h4><span class="text-gray-600 text-sm">981279817923</span></div><div class="mt-2"><h4 class="font-bold text-sm">Nama Pemegang Akaun</h4><span class="text-gray-600 text-sm">Admin Awqaf</span></div><div class="mt-2"><h4 class="font-bold text-sm">Tarikh Cipta</h4><span class="text-gray-600 text-sm">12 Julai 2022</span></div></div></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/Kredit/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc$1(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { index as default };
//# sourceMappingURL=index.a74cf31c.mjs.map
