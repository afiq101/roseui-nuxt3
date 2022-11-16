import { c as _sfc_main$q, b as __nuxt_component_1$2 } from '../server.mjs';
import { resolveComponent, withCtx, createTextVNode, unref, createVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
import { DateTime } from 'luxon';
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
  __name: "date-time",
  __ssrInlineRender: true,
  setup(__props) {
    const dt = DateTime.now();
    const date = dt.toISODate();
    const datetime = dt.toFormat("yyyy-MM-dd'T'HH:mm");
    const month = dt.toFormat("yyyy-MM");
    const time = dt.toFormat("HH:mm");
    const week = dt.toFormat("yyyy-'W'kk");
    const dateStart = dt.plus({ days: -7 }).toFormat("yyyy-MM-dd");
    const dateEnd = dt.plus({ days: 7 }).toFormat("yyyy-MM-dd");
    return (_ctx, _push, _parent, _attrs) => {
      const _component_LayoutsBreadcrumb = _sfc_main$q;
      const _component_rs_card = __nuxt_component_1$2;
      const _component_FormKit = resolveComponent("FormKit");
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_component_LayoutsBreadcrumb, null, null, _parent));
      _push(ssrRenderComponent(_component_rs_card, null, {
        header: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Default `);
          } else {
            return [
              createTextVNode(" Default ")
            ];
          }
        }),
        body: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_FormKit, {
              type: "datetime-local",
              value: unref(datetime),
              label: "Datetime"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_FormKit, {
              type: "date",
              value: unref(date),
              label: "Date Only"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_FormKit, {
              type: "month",
              value: unref(month),
              label: "Month Only"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_FormKit, {
              type: "time",
              value: unref(time),
              label: "Time Only"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_FormKit, {
              type: "week",
              value: unref(week),
              label: "Week Only"
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_FormKit, {
                type: "datetime-local",
                value: unref(datetime),
                label: "Datetime"
              }, null, 8, ["value"]),
              createVNode(_component_FormKit, {
                type: "date",
                value: unref(date),
                label: "Date Only"
              }, null, 8, ["value"]),
              createVNode(_component_FormKit, {
                type: "month",
                value: unref(month),
                label: "Month Only"
              }, null, 8, ["value"]),
              createVNode(_component_FormKit, {
                type: "time",
                value: unref(time),
                label: "Time Only"
              }, null, 8, ["value"]),
              createVNode(_component_FormKit, {
                type: "week",
                value: unref(week),
                label: "Week Only"
              }, null, 8, ["value"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_rs_card, null, {
        header: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Validation `);
          } else {
            return [
              createTextVNode(" Validation ")
            ];
          }
        }),
        body: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_FormKit, {
              type: "date",
              label: "Date",
              help: "Enter date (the date must be after 2020)",
              validation: "date_after:2020-12-31",
              "validation-visibility": "live"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_FormKit, {
              type: "date",
              label: "Date",
              help: "Enter date (the date must be before 2020)",
              validation: "date_before:2020-01-01",
              "validation-visibility": "live"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_FormKit, {
              type: "date",
              label: "Date",
              help: "Enter date (the date must be between 6/6/2022 and 20/6/2022)",
              validation: [["date_between", unref(dateStart), unref(dateEnd)]],
              "validation-visibility": "live"
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_FormKit, {
                type: "date",
                label: "Date",
                help: "Enter date (the date must be after 2020)",
                validation: "date_after:2020-12-31",
                "validation-visibility": "live"
              }),
              createVNode(_component_FormKit, {
                type: "date",
                label: "Date",
                help: "Enter date (the date must be before 2020)",
                validation: "date_before:2020-01-01",
                "validation-visibility": "live"
              }),
              createVNode(_component_FormKit, {
                type: "date",
                label: "Date",
                help: "Enter date (the date must be between 6/6/2022 and 20/6/2022)",
                validation: [["date_between", unref(dateStart), unref(dateEnd)]],
                "validation-visibility": "live"
              }, null, 8, ["validation"])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/Kitchensink/form/element/date-time.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=date-time.de822eec.mjs.map
