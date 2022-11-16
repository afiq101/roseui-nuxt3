import { _ as _export_sfc$1, b as __nuxt_component_1$2, m as _sfc_main$i } from '../server.mjs';
import { withCtx, createTextVNode, createVNode, useSSRContext } from 'vue';
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
      isLoading: true,
      list: []
    };
  },
  mounted: async function() {
    await $fetch("/api/user/get", {
      method: "POST"
    }).then((res) => {
      console.log("RESPONSE API : ", res);
      if (res.status_code === 200) {
        this.list = res.data;
      }
    }).finally(
      this.isLoading = false
    );
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_rs_card = __nuxt_component_1$2;
  const _component_rs_table = _sfc_main$i;
  _push(`<div${ssrRenderAttrs(_attrs)}><div class="relative flex flex-col min-w-0 mb-4 lg:mb-0 break-words w-full"><div class="rounded-t mb-5 px-0"><div class="flex flex-wrap items-center py-2"><div><div><span class="text-gray-800 font-bold text-2xl">Pengguna Aplikasi Biz Amal</span></div><span class="text-sm text-gray-500">Senarai pewakaf yang telah didaftarkan ke dalam sistem Biz Amal serta maklumat pewakaf.</span></div></div></div></div>`);
  if (!$data.isLoading && $data.list.length > 0) {
    _push(`<div>`);
    _push(ssrRenderComponent(_component_rs_card, null, {
      header: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`Senarai Pengguna Berdaftar`);
        } else {
          return [
            createTextVNode("Senarai Pengguna Berdaftar")
          ];
        }
      }),
      body: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(ssrRenderComponent(_component_rs_table, {
            data: $data.list,
            "options-advanced": {
              sortable: true,
              responsive: true
            },
            advanced: ""
          }, null, _parent2, _scopeId));
        } else {
          return [
            createVNode(_component_rs_table, {
              data: $data.list,
              "options-advanced": {
                sortable: true,
                responsive: true
              },
              advanced: ""
            }, null, 8, ["data"])
          ];
        }
      }),
      _: 1
    }, _parent));
    _push(`</div>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/Pengguna/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc$1(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { index as default };
//# sourceMappingURL=index.63099c18.mjs.map
