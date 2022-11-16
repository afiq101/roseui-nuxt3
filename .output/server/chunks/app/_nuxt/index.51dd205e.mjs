import { _ as _export_sfc$1, w as __nuxt_component_0$1 } from '../server.mjs';
import { useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrInterpolate, ssrRenderAttr, ssrIncludeBooleanAttr } from 'vue/server-renderer';
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
      config: []
    };
  },
  mounted: async function() {
    this.isLoading = true;
    await $fetch("/api/configuration/list").then((res) => {
      console.log("Return API : ", res);
      let q = res;
      if (q.status_code === 200 && q.status === "success") {
        this.config = q.data;
        this.isLoading = false;
      } else {
        console.log("Error axios : ", q.message);
        this.isLoading = false;
      }
    }).catch((e) => {
      console.log("Syntax Error at axios : ", e);
      this.isLoading = false;
    });
  },
  methods: {
    async updateStatus(code, status) {
      console.log("CODE : ", code);
      console.log("STATUS : ", status);
      let new_status = status === "1" ? "0" : "1";
      await $fetch(
        "/api/configuration/update",
        {
          method: "post",
          body: {
            configurationCode: code,
            configurationStatus: new_status
          }
        }
      ).then((res) => {
        console.log(res);
        if (res.status_code === 200) {
          this.$router.go("/tetapan/sistem");
        } else {
          this.isLoading = false;
        }
      }).catch((e) => {
        console.log("Syntax Error at Axios UpdateStatus : ", e);
        this.isLoading = false;
      });
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Skeleton = __nuxt_component_0$1;
  _push(`<div${ssrRenderAttrs(_attrs)}><div><div class="relative flex flex-col min-w-0 mb-4 lg:mb-0 break-words w-full"><div class="rounded-t mb-5 px-0"><div class="flex flex-wrap items-center py-2"><div><div><span class="text-gray-800 font-bold text-2xl">Tetapan Sistem</span></div><span class="text-sm text-gray-500">Berikut merupakan maklumat dan tetapan sistem ini seperti warna tema sistem, pengurusan pengguna, pengurusan institusi dan lain-lain.</span></div></div></div></div></div><div class="mt-2"><div class="grid grid-cols-1">`);
  if ($data.isLoading) {
    _push(`<div class="justify-center items-center content-center">`);
    _push(ssrRenderComponent(_component_Skeleton, null, null, _parent));
    _push(`</div>`);
  } else {
    _push(`<!---->`);
  }
  if (!$data.isLoading) {
    _push(`<div><!--[-->`);
    ssrRenderList($data.config, (conf) => {
      _push(`<div class="rounded border border-gray-200 p-4 bg-white flex justify-between items-center mb-2"><div><h4 class="text-md text-gray-700">${ssrInterpolate(conf.configurationName)}</h4><span class="text-sm text-gray-500">${ssrInterpolate(conf.configurationCode)}</span><div class="mt-2 items-center grid grid-cols-2 gap-2">`);
      if (conf.configurationData && conf.configurationDataType) {
        _push(`<div>`);
        if (conf.configurationDataType === "RM") {
          _push(`<div><span class="text-md text-gray-500 font-bold">${ssrInterpolate(conf.configurationDataType + parseFloat(conf.configurationData).toFixed(2))}</span></div>`);
        } else if (conf.configurationDataType === "%") {
          _push(`<div><span class="text-md text-gray-500 font-bold">${ssrInterpolate(parseFloat(conf.configurationData).toFixed(2) + conf.configurationDataType)}</span></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      if (conf.configurationData && !conf.configurationDataType) {
        _push(`<div><div><span class="text-md text-gray-500 font-bold">${ssrInterpolate(conf.configurationData)}</span></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div><div><label${ssrRenderAttr("for", `default-toggle${conf.configurationId}`)} class="inline-flex relative items-center cursor-pointer"><input type="checkbox"${ssrRenderAttr("value", conf.configurationCode)}${ssrRenderAttr("id", `default-toggle${conf.configurationId}`)} class="sr-only peer"${ssrIncludeBooleanAttr(conf.configurationStatus === "1" ? true : false) ? " checked" : ""}><div class="w-11 h-6 bg-gray-300 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-red-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[&#39;&#39;] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-red-800"></div></label></div></div>`);
    });
    _push(`<!--]--></div>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</div></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/Tetapan/Sistem/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc$1(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { index as default };
//# sourceMappingURL=index.51dd205e.mjs.map
