import { ssrRenderAttrs, ssrRenderList, ssrInterpolate } from 'vue/server-renderer';
import { useSSRContext } from 'vue';
import { _ as _export_sfc$1 } from '../server.mjs';
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
      let fetch = await $fetch("/api/organization/list").then((res) => {
        console.log("RETURN API : ", res);
        if (res.status_code === 200 && res.status === "success") {
          this.data = res.data;
        }
      });
      this.isLoading = false;
    } catch (e) {
      this.isLoading = false;
    }
  },
  methods: {
    async fetchData() {
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><div class="relative flex flex-col min-w-0 mb-4 lg:mb-0 break-words w-full"><div class="rounded-t mb-5 px-0"><div class="flex flex-wrap items-center py-2"><div><div><span class="text-gray-800 font-bold text-2xl">Institusi Wakaf</span></div><span class="text-sm text-gray-500">Senarai insitusi wakaf yang telah didaftarkan ke dalam sistem Biz Amal serta maklumat institusi.</span></div></div></div></div>`);
  if (!$data.isLoading) {
    _push(`<div class="ease-linear transition-all duration-150"><div class="relative flex flex-col min-w-0 mb-4 lg:mb-0 break-words w-full rounded"><div class="rounded mb-0 px-0 border-0 bg-white"><div class="block w-full overflow-x-auto rounded-lg shadow-sm"><table class="items-center w-full bg-white border-collapse"><thead><tr><th class="px-4 text-gray-700 align-middle bg-gray-50 border-b border-solid border-gray-200 py-3 text-sm border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">No.</th><th class="px-4 text-gray-700 align-middle bg-gray-50 border-b border-solid border-gray-200 py-3 text-sm border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">Nama</th><th class="px-4 text-gray-700 align-middle bg-gray-50 border-b border-solid border-gray-200 py-3 text-sm border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">Kata Pengguna</th><th class="px-4 text-gray-700 align-middle bg-gray-50 border-b border-solid border-gray-200 py-3 text-sm border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">No. Tel</th><th class="px-4 text-gray-700 align-middle bg-gray-50 border-b border-solid border-gray-200 py-3 text-sm border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">E-mel</th><th class="px-4 text-gray-700 align-middle bg-gray-50 border-b border-solid border-gray-200 py-3 text-sm border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">Negeri / Bandar</th><th class="px-4 text-gray-700 align-middle bg-gray-50 border-b border-solid border-gray-200 py-3 text-sm border-l-0 border-r-0 whitespace-nowrap font-semibold text-left min-w-140-px">Status</th></tr></thead><tbody><!--[-->`);
    ssrRenderList($data.data, (list) => {
      _push(`<tr class="text-gray-700 hover:bg-gray-200 ease-linear transition-all duration-150"><th class="border-t-0 px-4 align-middle border-l-0 border-b border-solid border-r-0 text-xs whitespace-nowrap p-4 text-left">${ssrInterpolate($data.data.indexOf(list) + 1)}</th><th class="border-t-0 px-4 align-middle border-l-0 border-b border-solid border-r-0 text-xs whitespace-nowrap p-4 text-left text-red-900">${ssrInterpolate(list.organizationName ? list.organizationName : "--")}</th><td class="border-t-0 px-4 align-middle border-l-0 border-b border-solid border-r-0 text-xs whitespace-nowrap p-4">${ssrInterpolate(list.organizationUsername)}</td><td class="border-t-0 px-4 align-middle border-l-0 border-b border-solid border-r-0 text-xs whitespace-nowrap p-4">${ssrInterpolate(list.organizationPhone)}</td><td class="border-t-0 px-4 align-middle border-l-0 border-b border-solid border-r-0 text-xs whitespace-nowrap p-4">${ssrInterpolate(list.organizationEmail)}</td><td class="border-t-0 px-4 align-middle border-l-0 border-b border-solid border-r-0 text-xs whitespace-nowrap p-4">${ssrInterpolate(list.organizationState)} / ${ssrInterpolate(list.organizationCity)}</td><td class="border-t-0 px-4 align-middle border-l-0 border-b border-solid border-r-0 text-xs whitespace-nowrap p-4">${ssrInterpolate(list.organizationStatus)}</td></tr>`);
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/Institusi/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc$1(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { index as default };
//# sourceMappingURL=index.05b94024.mjs.map
