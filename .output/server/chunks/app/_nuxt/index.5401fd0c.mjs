import { _ as _export_sfc$1, w as __nuxt_component_0$1 } from '../server.mjs';
import { mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrInterpolate, ssrRenderClass } from 'vue/server-renderer';
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
      isLoading: true,
      data: []
    };
  },
  mounted: async function() {
    this.isLoading = true;
    try {
      let fetch = await $fetch("/api/transaction/list").then((res) => {
        if (res.status_code === 200 && res.status === "success") {
          this.data = res.data;
        }
      });
      this.isLoading = false;
    } catch (e) {
      console.log("Syntax Error : ", e);
      this.isLoading = false;
    }
  },
  methods: {
    async fetchData() {
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Skeleton = __nuxt_component_0$1;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "grid grid-cols-1 lg:grid-cols-1 gap-4" }, _attrs))}>`);
  if ($data.isLoading) {
    _push(`<div><div class="relative flex flex-col min-w-0 mb-4 lg:mb-0 break-words w-full"><div class="rounded-t mb-5 px-0"><div class="flex flex-wrap items-center py-2"><div><div><span class="text-gray-800 font-bold text-2xl">Transaksi Wakaf</span></div><span class="text-sm text-gray-500">Senarai transaksi keseluruhan wakaf termasuk nama pewakaf, nombor rujukan bayaran wakaf dan juga tarikh dan masa pembayaran.</span></div></div></div><div class="rounded mb-0 px-0 border-0 justify-center"><div class="block w-full overflow-x-auto rounded-lg justify-center">`);
    _push(ssrRenderComponent(_component_Skeleton, null, null, _parent));
    _push(`</div></div></div></div>`);
  } else {
    _push(`<!---->`);
  }
  if (!$data.isLoading) {
    _push(`<div><div class="relative flex flex-col min-w-0 mb-4 lg:mb-0 break-words w-full rounded"><div class="rounded-t mb-5 px-0"><div class="flex flex-wrap items-center py-2"><div><div><span class="text-gray-800 font-bold text-2xl">Transaksi Wakaf</span></div><span class="text-sm text-gray-500">Senarai transaksi keseluruhan wakaf termasuk nama pewakaf, nombor rujukan bayaran wakaf dan juga tarikh dan masa pembayaran.</span></div></div></div><div class="rounded mb-0 px-0 border-0 bg-white"><div class="block w-full overflow-x-auto rounded-lg shadow-sm"><table class="items-center w-full bg-white border-collapse"><thead><tr><th class="px-4 text-gray-700 align-middle bg-gray-50 border-b border-solid border-gray-200 py-3 text-sm border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">No.</th><th class="px-4 text-gray-700 align-middle bg-gray-50 border-b border-solid border-gray-200 py-3 text-sm border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">Rujukan</th><th class="px-4 text-gray-700 align-middle bg-gray-50 border-b border-solid border-gray-200 py-3 text-sm border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">Nama</th><th class="px-4 text-gray-700 align-middle bg-gray-50 border-b border-solid border-gray-200 py-3 text-sm border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">Institusi</th><th class="px-4 text-gray-700 align-middle bg-gray-50 border-b border-solid border-gray-200 py-3 text-sm border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">Jumlah (RM)</th><th class="px-4 text-gray-700 align-middle bg-gray-50 border-b border-solid border-gray-200 py-3 text-sm border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">Tarikh</th><th class="px-4 text-gray-700 align-middle bg-gray-50 border-b border-solid border-gray-200 py-3 text-sm border-l-0 border-r-0 whitespace-nowrap font-semibold text-left min-w-140-px">Status</th></tr></thead><tbody>`);
    if (!$data.isLoading && $data.data.length < 1) {
      _push(`<tr><td colspan="7" class="text-center border-t-0 px-4 align-middle border-l-0 border-b border-solid border-r-0 text-xs whitespace-nowrap p-4"> -- Tiada Maklumat Terkini -- </td></tr>`);
    } else {
      _push(`<!---->`);
    }
    _push(`<!--[-->`);
    ssrRenderList($data.data, (trans) => {
      _push(`<tr class="text-gray-700 hover:bg-gray-200"><th class="border-t-0 px-4 align-middle border-l-0 border-b border-solid border-r-0 text-xs whitespace-nowrap p-4 text-left">${ssrInterpolate($data.data.indexOf(trans) + 1)}</th><th class="border-t-0 px-4 align-middle border-l-0 border-b border-solid border-r-0 text-xs whitespace-nowrap p-4 text-left text-red-900">${ssrInterpolate(trans.billpaymentInvoiceNo ? trans.billpaymentInvoiceNo : "--")}</th><td class="border-t-0 px-4 align-middle border-l-0 border-b border-solid border-r-0 text-xs whitespace-nowrap p-4">${ssrInterpolate(trans.billpaymentPayorName)}</td><td class="border-t-0 px-4 align-middle border-l-0 border-b border-solid border-r-0 text-xs whitespace-nowrap p-4">${ssrInterpolate(trans.organizationName)}</td><td class="border-t-0 px-4 align-middle border-l-0 border-b border-solid border-r-0 text-xs whitespace-nowrap p-4">${ssrInterpolate(trans.billpaymentAmount ? parseFloat(trans.billpaymentAmount).toFixed(2) : "0.00")}</td><td class="border-t-0 px-4 align-middle border-l-0 border-b border-solid border-r-0 text-xs whitespace-nowrap p-4">${ssrInterpolate(trans.billpaymentCreatedDate)}</td><td class="${ssrRenderClass(
        trans.billpaymentStatus === 1 ? "border-t-0 px-4 align-middle border-l-0 border-b border-solid border-r-0 text-xs font-bold whitespace-nowrap p-4 text-green-600" : trans.billpaymentStatus === 3 ? "border-t-0 px-4 align-middle border-l-0 border-b border-solid border-r-0 text-xs font-bold whitespace-nowrap p-4 text-red-600" : "border-t-0 px-4 align-middle border-l-0 border-b border-solid border-r-0 text-xs font-bold whitespace-nowrap p-4 text-gray-900"
      )}">${ssrInterpolate(trans.billpaymentStatus === 1 ? "Berjaya" : trans.billpaymentStatus === 3 ? "Gagal" : "--")}</td></tr>`);
    });
    _push(`<!--]--></tbody></table></div></div></div></div>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/Transaksi/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc$1(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { index as default };
//# sourceMappingURL=index.5401fd0c.mjs.map
