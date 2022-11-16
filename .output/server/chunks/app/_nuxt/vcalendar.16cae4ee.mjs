import { c as _sfc_main$q, b as __nuxt_component_1$2, e as __nuxt_component_1$1, k as __nuxt_component_3 } from '../server.mjs';
import { ref, withCtx, createVNode, createTextVNode, unref, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate } from 'vue/server-renderer';
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
  __name: "vcalendar",
  __ssrInlineRender: true,
  setup(__props) {
    const date = ref(DateTime.now());
    const range = ref({
      start: DateTime.local(2022, 6, 6),
      end: DateTime.local(2022, 6, 20)
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_LayoutsBreadcrumb = _sfc_main$q;
      const _component_rs_card = __nuxt_component_1$2;
      const _component_Icon = __nuxt_component_1$1;
      const _component_ClientOnly = __nuxt_component_3;
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_component_LayoutsBreadcrumb, null, null, _parent));
      _push(ssrRenderComponent(_component_rs_card, null, {
        header: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_Icon, {
              class: "mr-2 flex justify-center",
              name: "ic:outline-info"
            }, null, _parent2, _scopeId));
            _push2(`Info </div>`);
          } else {
            return [
              createVNode("div", { class: "flex" }, [
                createVNode(_component_Icon, {
                  class: "mr-2 flex justify-center",
                  name: "ic:outline-info"
                }),
                createTextVNode("Info ")
              ])
            ];
          }
        }),
        body: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<p class="mb-4"${_scopeId}> This template use <a href="https://vcalendar.io/" target="_blank" class="hover:underline text-primary-400"${_scopeId}>V-Calendar</a> which is a Vue component that allows you to create a calendar. </p>`);
          } else {
            return [
              createVNode("p", { class: "mb-4" }, [
                createTextVNode(" This template use "),
                createVNode("a", {
                  href: "https://vcalendar.io/",
                  target: "_blank",
                  class: "hover:underline text-primary-400"
                }, "V-Calendar"),
                createTextVNode(" which is a Vue component that allows you to create a calendar. ")
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_rs_card, null, {
        header: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Single Date `);
          } else {
            return [
              createTextVNode(" Single Date ")
            ];
          }
        }),
        body: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<p class="mb-4"${_scopeId}> Single date calendar is a calendar that only allows you to select a single date. It is a good way to select a date for a datepicker. </p><div class="flex flex-col justify-center items-center"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_ClientOnly, null, null, _parent2, _scopeId));
            _push2(`<p class="py-2"${_scopeId}><span class="font-semibold"${_scopeId}>Date:</span> ${ssrInterpolate(unref(date))}</p></div>`);
          } else {
            return [
              createVNode("p", { class: "mb-4" }, " Single date calendar is a calendar that only allows you to select a single date. It is a good way to select a date for a datepicker. "),
              createVNode("div", { class: "flex flex-col justify-center items-center" }, [
                createVNode(_component_ClientOnly),
                createVNode("p", { class: "py-2" }, [
                  createVNode("span", { class: "font-semibold" }, "Date:"),
                  createTextVNode(" " + toDisplayString(unref(date)), 1)
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
            _push2(` Date Range `);
          } else {
            return [
              createTextVNode(" Date Range ")
            ];
          }
        }),
        body: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<p class="mb-4"${_scopeId}> Date range calendar is a calendar that allows you to select a date range. </p><div class="flex flex-col justify-center items-center"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_ClientOnly, null, null, _parent2, _scopeId));
            _push2(`<p class="py-2"${_scopeId}><span class="font-semibold"${_scopeId}>Date:</span> ${ssrInterpolate(unref(range))}</p></div>`);
          } else {
            return [
              createVNode("p", { class: "mb-4" }, " Date range calendar is a calendar that allows you to select a date range. "),
              createVNode("div", { class: "flex flex-col justify-center items-center" }, [
                createVNode(_component_ClientOnly),
                createVNode("p", { class: "py-2" }, [
                  createVNode("span", { class: "font-semibold" }, "Date:"),
                  createTextVNode(" " + toDisplayString(unref(range)), 1)
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
            _push2(` Date &amp; Time `);
          } else {
            return [
              createTextVNode(" Date & Time ")
            ];
          }
        }),
        body: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<p class="mb-4"${_scopeId}> Date &amp; time calendar is a calendar that allows you to select a date and time. </p><div class="flex flex-col justify-center items-center"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_ClientOnly, null, null, _parent2, _scopeId));
            _push2(`<p class="py-2"${_scopeId}><span class="font-semibold"${_scopeId}>Date:</span> ${ssrInterpolate(unref(date))}</p></div>`);
          } else {
            return [
              createVNode("p", { class: "mb-4" }, " Date & time calendar is a calendar that allows you to select a date and time. "),
              createVNode("div", { class: "flex flex-col justify-center items-center" }, [
                createVNode(_component_ClientOnly),
                createVNode("p", { class: "py-2" }, [
                  createVNode("span", { class: "font-semibold" }, "Date:"),
                  createTextVNode(" " + toDisplayString(unref(date)), 1)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/Kitchensink/form/element/vcalendar.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=vcalendar.16cae4ee.mjs.map
