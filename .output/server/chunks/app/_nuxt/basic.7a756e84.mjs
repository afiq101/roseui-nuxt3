import { b as __nuxt_component_1$2, d as _sfc_main$p, m as _sfc_main$i } from '../server.mjs';
import { ref, withCtx, createTextVNode, unref, createVNode, useSSRContext } from 'vue';
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
  __name: "basic",
  __ssrInlineRender: true,
  setup(__props) {
    const changedata = ref(false);
    const field = ["Id", "Name", "Amount(RM)", "Discount(%)"];
    const data = [
      {
        id: 1,
        fullName: "Margit, The Fallen Omen",
        age: 25,
        email: "margit25@gmail.com"
      },
      {
        id: 2,
        fullName: "Malenia",
        age: 50,
        email: "malenia@gmail.com"
      },
      {
        id: 3,
        fullName: "Godrick Soldier",
        age: 30,
        email: "godrick@gmail.com"
      },
      {
        id: 4,
        fullName: "Godwyn, The Graften",
        age: 70,
        email: "godwyn@gmail.com"
      },
      {
        id: 5,
        fullName: "Ranni",
        age: 26,
        email: "ranni@gmail.com"
      }
    ];
    const data2 = [
      {
        no: 1,
        item: "Table",
        price: "RM20",
        discount: "10%"
      },
      {
        no: 2,
        item: "Chair",
        price: "RM10",
        discount: "20%"
      },
      {
        no: 3,
        item: "Lamp",
        price: "RM30",
        discount: "30%"
      },
      {
        no: 4,
        item: "Bed",
        price: "RM50",
        discount: "40%"
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_rs_card = __nuxt_component_1$2;
      const _component_rs_button = _sfc_main$p;
      const _component_rs_table = _sfc_main$i;
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_component_rs_card, null, {
        header: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Table`);
          } else {
            return [
              createTextVNode(" Table")
            ];
          }
        }),
        body: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_rs_button, {
              onClick: ($event) => unref(changedata) ? changedata.value = false : changedata.value = true,
              class: "mb-4"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Change data `);
                } else {
                  return [
                    createTextVNode(" Change data ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_rs_table, {
              field: !unref(changedata) ? [] : field,
              data: !unref(changedata) ? data : data2,
              options: {
                variant: "default",
                striped: true,
                bordered: true,
                borderless: true,
                hover: true,
                fixed: false
              },
              basic: ""
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_rs_button, {
                onClick: ($event) => unref(changedata) ? changedata.value = false : changedata.value = true,
                class: "mb-4"
              }, {
                default: withCtx(() => [
                  createTextVNode(" Change data ")
                ]),
                _: 1
              }, 8, ["onClick"]),
              createVNode(_component_rs_table, {
                field: !unref(changedata) ? [] : field,
                data: !unref(changedata) ? data : data2,
                options: {
                  variant: "default",
                  striped: true,
                  bordered: true,
                  borderless: true,
                  hover: true,
                  fixed: false
                },
                basic: ""
              }, null, 8, ["field", "data"])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/Kitchensink/table/basic.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=basic.7a756e84.mjs.map
