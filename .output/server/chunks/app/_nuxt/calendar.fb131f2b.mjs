import { j as useNuxtApp, c as _sfc_main$q, b as __nuxt_component_1$2, e as __nuxt_component_1$1, k as __nuxt_component_3 } from '../server.mjs';
import { ref, withCtx, createVNode, createTextVNode, unref, useSSRContext } from 'vue';
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
  __name: "calendar",
  __ssrInlineRender: true,
  setup(__props) {
    const { $FullCalendar } = useNuxtApp();
    const FullCalendar = $FullCalendar;
    const calendarOptions = ref(null);
    const handleDateClick = (arg) => {
    };
    calendarOptions.value = {
      ...FullCalendar == null ? void 0 : FullCalendar.options,
      initialView: "dayGridMonth",
      headerToolbar: {
        left: "prev,next title",
        right: "dayGridMonth,timeGridWeek,listWeek"
      },
      dateClick: handleDateClick,
      dragScroll: true,
      dayMaxEvents: 2,
      navLinks: true,
      events: [
        { title: "event 1", start: "2022-07-05", end: "2022-07-08" },
        { title: "event 2", start: "2022-07-05", end: "2022-07-08" },
        { title: "event 3", start: "2022-07-05", end: "2022-07-08" },
        { title: "event 3", start: "2022-07-05", end: "2022-07-08" },
        { title: "event 3", start: "2022-07-05", end: "2022-07-08" },
        { title: "event 3", start: "2022-07-05", end: "2022-07-08" },
        { title: "event 4", date: "2022-07-22" }
      ]
    };
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
            _push2(`<p class="mb-4"${_scopeId}> This template use <a href="https://fullcalendar.io/" target="_blank" class="hover:underline text-primary-400"${_scopeId}>FullCalendar</a> which is a Vue component that allows you to create a calendar. Fullcalendar is a JavaScript library that provides a simple API for easily creating a calendar. Besides, it is a great way to display events on a page. </p>`);
          } else {
            return [
              createVNode("p", { class: "mb-4" }, [
                createTextVNode(" This template use "),
                createVNode("a", {
                  href: "https://fullcalendar.io/",
                  target: "_blank",
                  class: "hover:underline text-primary-400"
                }, "FullCalendar"),
                createTextVNode(" which is a Vue component that allows you to create a calendar. Fullcalendar is a JavaScript library that provides a simple API for easily creating a calendar. Besides, it is a great way to display events on a page. ")
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
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
            _push2(`<p class="mb-4"${_scopeId}> Use <code${_scopeId}>rs-calendar</code> to display a calendar. The calendar is a simple component that displays a grid of days. </p>`);
            _push2(ssrRenderComponent(_component_ClientOnly, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(FullCalendar), { options: unref(calendarOptions) }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(unref(FullCalendar), { options: unref(calendarOptions) }, null, 8, ["options"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode("p", { class: "mb-4" }, [
                createTextVNode(" Use "),
                createVNode("code", null, "rs-calendar"),
                createTextVNode(" to display a calendar. The calendar is a simple component that displays a grid of days. ")
              ]),
              createVNode(_component_ClientOnly, null, {
                default: withCtx(() => [
                  createVNode(unref(FullCalendar), { options: unref(calendarOptions) }, null, 8, ["options"])
                ]),
                _: 1
              })
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/Kitchensink/ui/component/calendar.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=calendar.fb131f2b.mjs.map
