import { _ as _export_sfc$1, w as __nuxt_component_0$1, b as __nuxt_component_1$2, m as _sfc_main$i } from '../server.mjs';
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
      list_wallet: []
    };
  },
  mounted: async function() {
    this.isLoading = true;
    await $fetch("/api/user/wallet/list", {
      method: "post",
      body: {}
    }).then((res) => {
      console.log("RESPONSE API : ", res);
      if (res.status_code === 200) {
        this.list_wallet = res.data;
      }
      this.isLoading = false;
    }).catch((e) => {
      console.log("Axios Error : ", e);
      this.isLoading = false;
    });
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Skeleton = __nuxt_component_0$1;
  const _component_rs_card = __nuxt_component_1$2;
  const _component_rs_table = _sfc_main$i;
  _push(`<div${ssrRenderAttrs(_attrs)}><div class="relative flex flex-col min-w-0 mb-4 lg:mb-0 break-words w-full"><div class="grid grid-cols-1 rounded-t mb-5 px-0 content-center justify-between"><div class="flex flex-wrap items-center py-2"><div><div><span class="text-gray-800 font-bold text-2xl">Akaun Kredit Pengguna</span></div><span class="text-sm text-gray-500"> Pengurusan akaun kredit pengguna seperti senarai akaun kredit pengguna, kemaskini akaun kredit pengguna dan lain-lain. </span></div></div></div></div><div>`);
  if ($data.isLoading) {
    _push(`<div>`);
    _push(ssrRenderComponent(_component_Skeleton, null, null, _parent));
    _push(`</div>`);
  } else {
    _push(`<!---->`);
  }
  if (!$data.isLoading && $data.list_wallet.length > 0) {
    _push(`<div>`);
    _push(ssrRenderComponent(_component_rs_card, null, {
      header: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`Senarai Akaun Kredit Pengguna`);
        } else {
          return [
            createTextVNode("Senarai Akaun Kredit Pengguna")
          ];
        }
      }),
      body: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(ssrRenderComponent(_component_rs_table, {
            data: $data.list_wallet,
            "options-advanced": {
              sortable: true,
              responsive: true
            },
            advanced: ""
          }, null, _parent2, _scopeId));
        } else {
          return [
            createVNode(_component_rs_table, {
              data: $data.list_wallet,
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
  _push(`</div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/Kredit/akaun-kredit-pengguna.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const akaunKreditPengguna = /* @__PURE__ */ _export_sfc$1(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { akaunKreditPengguna as default };
//# sourceMappingURL=akaun-kredit-pengguna.0fc04e35.mjs.map
