import { _ as _export_sfc$1, b as __nuxt_component_1$2, k as __nuxt_component_3, a as __nuxt_component_0$2, e as __nuxt_component_1$1 } from '../server.mjs';
import { mergeProps, withCtx, createVNode, createTextVNode, useSSRContext } from 'vue';
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
  data() {
    return {
      title: "title",
      lottie_success: "https://assets4.lottiefiles.com/packages/lf20_s2lryxtd.json",
      lottie_failed: "https://assets9.lottiefiles.com/private_files/lf30_mlsj6yqm.json",
      status: null
    };
  },
  mounted: async function() {
    console.log("PARAMS : ", this.$route.query);
    let { status_id, billcode, msg, order_id, transaction_id } = this.$route.query;
    console.log("Status ID : ", status_id);
    console.log("BillCode : ", billcode);
    console.log("Message : ", msg);
    console.log("Order ID : ", order_id);
    console.log("Transaction ID : ", transaction_id);
    this.status = status_id;
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_rs_card = __nuxt_component_1$2;
  const _component_client_only = __nuxt_component_3;
  const _component_NuxtLink = __nuxt_component_0$2;
  const _component_Icon = __nuxt_component_1$1;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex-none md:flex justify-center text-center items-center h-screen" }, _attrs))}><div class="w-full md:w-3/4 lg:w-1/2 xl:w-2/6">`);
  _push(ssrRenderComponent(_component_rs_card, { class: "h-screen md:h-auto px-10 md:px-16 py-12 md:py-20 mb-0" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div${_scopeId}>`);
        _push2(ssrRenderComponent(_component_client_only, null, null, _parent2, _scopeId));
        _push2(`</div><h3 class="mb-4"${_scopeId}>Resit Pembayaran</h3><p class="text-slate-500 mb-6"${_scopeId}> Tahniah! Tambah nilai sebanyak RM 100.00 anda telah berjaya </p><div class="grid grid-cols-2"${_scopeId}></div><p class="mt-3 text-center text-slate-500"${_scopeId}>`);
        _push2(ssrRenderComponent(_component_NuxtLink, {
          to: "/kredit",
          class: "text-primary-800 hover:underline"
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(ssrRenderComponent(_component_Icon, {
                class: "text-primary-800",
                name: "ph:arrow-left"
              }, null, _parent3, _scopeId2));
              _push3(` Kembali `);
            } else {
              return [
                createVNode(_component_Icon, {
                  class: "text-primary-800",
                  name: "ph:arrow-left"
                }),
                createTextVNode(" Kembali ")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(`</p>`);
      } else {
        return [
          createVNode("div", null, [
            createVNode(_component_client_only)
          ]),
          createVNode("h3", { class: "mb-4" }, "Resit Pembayaran"),
          createVNode("p", { class: "text-slate-500 mb-6" }, " Tahniah! Tambah nilai sebanyak RM 100.00 anda telah berjaya "),
          createVNode("div", { class: "grid grid-cols-2" }),
          createVNode("p", { class: "mt-3 text-center text-slate-500" }, [
            createVNode(_component_NuxtLink, {
              to: "/kredit",
              class: "text-primary-800 hover:underline"
            }, {
              default: withCtx(() => [
                createVNode(_component_Icon, {
                  class: "text-primary-800",
                  name: "ph:arrow-left"
                }),
                createTextVNode(" Kembali ")
              ]),
              _: 1
            })
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/Receipt.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Receipt = /* @__PURE__ */ _export_sfc$1(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { Receipt as default };
//# sourceMappingURL=Receipt.a2a88732.mjs.map
