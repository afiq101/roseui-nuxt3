import { c as _sfc_main$q, b as __nuxt_component_1$2 } from '../server.mjs';
import { ref, computed, withCtx, createVNode, unref, mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
import { useBarChart, useDoughnutChart, useLineChart, usePieChart, usePolarAreaChart, useRadarChart, useBubbleChart, useScatterChart, PieChart, DoughnutChart, LineChart, BarChart, PolarAreaChart, RadarChart, BubbleChart, ScatterChart } from 'vue-chart-3';
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
  __name: "chartjs",
  __ssrInlineRender: true,
  setup(__props) {
    const data = ref([30, 40, 60, 70, 5]);
    const data2 = ref([
      { x: 20, y: 25, r: 22 },
      { x: 10, y: 23, r: 5 },
      { x: 30, y: 40, r: 25 },
      { x: 40, y: 20, r: 10 },
      { x: 15, y: 5, r: 10 },
      { x: 17, y: 10, r: 5 }
    ]);
    const options = computed(() => ({
      scales: {
        y: {
          beginAtZero: true
        }
      },
      plugins: {
        zoom: {
          zoom: {
            wheel: {
              enabled: true
            },
            pinch: {
              enabled: true
            },
            mode: "xy"
          }
        },
        legend: {
          display: true
        }
      }
    }));
    const optionsHide = computed(() => ({
      scales: {
        y: {
          beginAtZero: true,
          display: false
        },
        x: {
          display: false
        }
      },
      plugins: {
        zoom: {
          zoom: {
            wheel: {
              enabled: true
            },
            pinch: {
              enabled: true
            },
            mode: "xy"
          }
        },
        legend: {
          display: true
        }
      }
    }));
    const chartData = computed(() => ({
      labels: [
        "Customer 1",
        "Customer 2",
        "Customer 3",
        "Customer 4",
        "Customer 5"
      ],
      datasets: [
        {
          label: "Order",
          data: data.value,
          backgroundColor: ["#FF829D", "#FFD778", "#5EB5EF", "#6FCDCD", "#ECEDF1"]
        }
      ]
    }));
    const chartDataArr = computed(() => ({
      datasets: [
        {
          label: "First Dataset",
          data: data2.value,
          backgroundColor: ["#FF829D", "#FFD778", "#5EB5EF", "#6FCDCD", "#ECEDF1"]
        }
      ]
    }));
    const { barChartProps } = useBarChart({
      chartData,
      options
    });
    const { doughnutChartProps } = useDoughnutChart({
      chartData,
      optionsHide
    });
    const { lineChartProps } = useLineChart({
      chartData,
      options
    });
    const { pieChartProps } = usePieChart({
      chartData,
      options: optionsHide
    });
    const { polarAreaChartProps } = usePolarAreaChart({
      chartData,
      options: optionsHide
    });
    useRadarChart({
      chartData,
      options: optionsHide
    });
    const { bubbleChartProps } = useBubbleChart({
      chartData: chartDataArr,
      options
    });
    const { scatterChartProps } = useScatterChart({
      chartData: chartDataArr,
      options
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_LayoutsBreadcrumb = _sfc_main$q;
      const _component_rs_card = __nuxt_component_1$2;
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_component_LayoutsBreadcrumb, null, null, _parent));
      _push(`<p class="mb-4"> We ensure Chartjs is fully supported using vue 3. Read the full documentation <a href="https://vue-chart-3.netlify.app/" class="text-blue-500 hover:underline" target="_blank">here</a>. </p><div class="grid grid-cols-1 lg:grid-cols-2 gap-4">`);
      _push(ssrRenderComponent(_component_rs_card, null, {
        header: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<h5${_scopeId}>Pie Chart</h5>`);
          } else {
            return [
              createVNode("h5", null, "Pie Chart")
            ];
          }
        }),
        body: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(PieChart), mergeProps(unref(pieChartProps), { style: { "position": "relative", "height": "40vh", "width": "80vw" } }), null, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(PieChart), mergeProps(unref(pieChartProps), { style: { "position": "relative", "height": "40vh", "width": "80vw" } }), null, 16)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_rs_card, null, {
        header: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<h5${_scopeId}>Doughnut Chart</h5>`);
          } else {
            return [
              createVNode("h5", null, "Doughnut Chart")
            ];
          }
        }),
        body: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(DoughnutChart), mergeProps(unref(doughnutChartProps), { style: { "position": "relative", "height": "40vh", "width": "80vw" } }), null, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(DoughnutChart), mergeProps(unref(doughnutChartProps), { style: { "position": "relative", "height": "40vh", "width": "80vw" } }), null, 16)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_rs_card, { class: "col-span-2" }, {
        header: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<h5${_scopeId}>Line Chart</h5>`);
          } else {
            return [
              createVNode("h5", null, "Line Chart")
            ];
          }
        }),
        body: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(LineChart), mergeProps(unref(lineChartProps), { style: { "position": "relative", "height": "40vh", "width": "80vw" } }), null, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(LineChart), mergeProps(unref(lineChartProps), { style: { "position": "relative", "height": "40vh", "width": "80vw" } }), null, 16)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_rs_card, null, {
        header: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<h5${_scopeId}>Bar Chart</h5>`);
          } else {
            return [
              createVNode("h5", null, "Bar Chart")
            ];
          }
        }),
        body: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(BarChart), mergeProps(unref(barChartProps), { style: { "position": "relative", "height": "40vh", "width": "80vw" } }), null, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(BarChart), mergeProps(unref(barChartProps), { style: { "position": "relative", "height": "40vh", "width": "80vw" } }), null, 16)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_rs_card, null, {
        header: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<h5${_scopeId}>Polar Area Chart</h5>`);
          } else {
            return [
              createVNode("h5", null, "Polar Area Chart")
            ];
          }
        }),
        body: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(PolarAreaChart), mergeProps(unref(polarAreaChartProps), { style: { "position": "relative", "height": "40vh", "width": "80vw" } }), null, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(PolarAreaChart), mergeProps(unref(polarAreaChartProps), { style: { "position": "relative", "height": "40vh", "width": "80vw" } }), null, 16)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_rs_card, null, {
        header: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<h5${_scopeId}>Radar Chart</h5>`);
          } else {
            return [
              createVNode("h5", null, "Radar Chart")
            ];
          }
        }),
        body: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(RadarChart), mergeProps(unref(polarAreaChartProps), { style: { "position": "relative", "height": "40vh", "width": "80vw" } }), null, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(RadarChart), mergeProps(unref(polarAreaChartProps), { style: { "position": "relative", "height": "40vh", "width": "80vw" } }), null, 16)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_rs_card, null, {
        header: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<h5${_scopeId}>Bubble Chart</h5>`);
          } else {
            return [
              createVNode("h5", null, "Bubble Chart")
            ];
          }
        }),
        body: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(BubbleChart), mergeProps(unref(bubbleChartProps), { style: { "position": "relative", "height": "40vh", "width": "80vw" } }), null, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(BubbleChart), mergeProps(unref(bubbleChartProps), { style: { "position": "relative", "height": "40vh", "width": "80vw" } }), null, 16)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_rs_card, { class: "col-span-2" }, {
        header: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<h5${_scopeId}>Scatter Chart</h5>`);
          } else {
            return [
              createVNode("h5", null, "Scatter Chart")
            ];
          }
        }),
        body: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(ScatterChart), mergeProps(unref(scatterChartProps), { style: { "position": "relative", "height": "40vh", "width": "80vw" } }), null, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(ScatterChart), mergeProps(unref(scatterChartProps), { style: { "position": "relative", "height": "40vh", "width": "80vw" } }), null, 16)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/Kitchensink/ui/chart/chartjs.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=chartjs.e4b6c56a.mjs.map
