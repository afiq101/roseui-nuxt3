import { c as _sfc_main$q, b as __nuxt_component_1$2, e as __nuxt_component_1$1, k as __nuxt_component_3 } from '../server.mjs';
import { ref, computed, withCtx, createVNode, createTextVNode, openBlock, createBlock, Fragment, renderList, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrRenderAttr, ssrInterpolate, ssrRenderClass } from 'vue/server-renderer';
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
  __name: "dashboard",
  __ssrInlineRender: true,
  setup(__props) {
    const data1 = ref([]);
    const data2 = ref([]);
    const data3 = ref([]);
    const data4 = ref([]);
    var sparkline1Data = [47, 45, 54, 38, 56, 24, 65];
    var sparkline2Data = [61, 35, 66, 41, 59, 25, 32];
    var sparkline3Data = [25, 18, 36, 41, 43, 35, 14];
    var sparkline4Data = [8, 16, 22, 41, 43, 35, 14];
    const customers = [
      {
        name: "Ali",
        age: "25",
        city: "Kuala Lumpur",
        country: "Malaysia",
        totalPurchase: 1524,
        purchase: 23
      },
      {
        name: "Kamal",
        age: "45",
        city: "Pulau Pinang",
        country: "Malaysia",
        totalPurchase: 643,
        purchase: 14
      },
      {
        name: "Auni",
        age: "21",
        city: "Kelantan",
        country: "Malaysia",
        totalPurchase: 543,
        purchase: 12
      },
      {
        name: "Iqmal",
        age: "19",
        city: "Negeri Sembilan",
        country: "Malaysia",
        totalPurchase: 258,
        purchase: 6
      }
    ];
    const randomizeArray = function(arg) {
      var array = arg.slice();
      var currentIndex = array.length, temporaryValue, randomIndex;
      while (0 !== currentIndex) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
      }
      return array;
    };
    data1.value.push({
      name: "Revenues",
      data: randomizeArray(sparkline1Data)
    });
    data2.value.push({
      name: "Users",
      data: randomizeArray(sparkline2Data)
    });
    data3.value.push({
      name: "Products",
      data: randomizeArray(sparkline3Data)
    });
    data4.value.push({
      name: "Viewers",
      data: randomizeArray(sparkline4Data)
    });
    computed(() => ({
      chart: {
        type: "area",
        sparkline: {
          enabled: true
        }
      },
      stroke: {
        curve: "smooth"
      },
      fill: {
        opacity: 1
      },
      labels: [...Array(7).keys()].map((n) => `2022-06-0${n + 1}`),
      xaxis: {
        type: "datetime"
      }
    }));
    ref([44, 55, 67, 83]);
    computed(() => ({
      chart: {
        height: 350,
        type: "radialBar"
      },
      plotOptions: {
        radialBar: {
          dataLabels: {
            style: {
              colors: "#9CA3AF"
            },
            name: {
              offsetY: 30,
              fontSize: "18px"
            },
            value: {
              offsetY: -15,
              fontSize: "30px"
            },
            total: {
              show: true,
              label: "Total",
              formatter: function(w) {
                return 249;
              }
            }
          }
        }
      },
      labels: ["Product A", "Product B", "Product C", "Product D"],
      stroke: {
        lineCap: "round"
      }
    }));
    ref([
      {
        name: "Bill A",
        data: [...Array(12).keys()].map((n) => Math.round(Math.random() * 100))
      },
      {
        name: "Bill B",
        data: [...Array(12).keys()].map((n) => Math.round(Math.random() * 100))
      }
    ]);
    computed(() => ({
      chart: {
        height: 350,
        type: "area",
        toolbar: {
          show: false
        }
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        curve: "smooth"
      },
      colors: ["#6366F1", "#F97316"],
      yaxis: {
        labels: {
          style: {
            colors: "#9CA3AF",
            fontSize: "12px"
          }
        }
      },
      xaxis: {
        type: "datetime",
        categories: [
          "2022-01-01",
          "2022-02-01",
          "2022-03-01",
          "2022-04-01",
          "2022-05-01",
          "2022-06-01",
          "2022-07-01",
          "2022-08-01",
          "2022-09-01",
          "2022-10-01",
          "2022-11-01",
          "2022-12-01"
        ],
        labels: {
          style: {
            colors: "#9CA3AF",
            fontSize: "14px",
            fontWeight: 400
          },
          datetimeFormatter: {
            month: "MMM"
          }
        }
      },
      legend: {
        position: "top",
        horizontalAlign: "left",
        labels: {
          colors: "#9CA3AF",
          useSeriesColors: false
        }
      },
      tooltip: {
        x: {
          format: "MMMM"
        }
      }
    }));
    return (_ctx, _push, _parent, _attrs) => {
      const _component_LayoutsBreadcrumb = _sfc_main$q;
      const _component_rs_card = __nuxt_component_1$2;
      const _component_Icon = __nuxt_component_1$1;
      const _component_ClientOnly = __nuxt_component_3;
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_component_LayoutsBreadcrumb, null, null, _parent));
      _push(`<div class="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-x-6">`);
      _push(ssrRenderComponent(_component_rs_card, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="summary-1 pt-5 pb-3 px-5 flex items-center gap-4"${_scopeId}><div class="p-5 flex justify-center items-center bg-primary-100 rounded-2xl"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_Icon, {
              class: "text-primary-500",
              name: "ic:outline-attach-money"
            }, null, _parent2, _scopeId));
            _push2(`</div><div class="flex-1 truncate"${_scopeId}><span class="block font-semibold text-xl leading-tight"${_scopeId}> RM 100,000</span><span class="text-base font-semibold text-secondary"${_scopeId}>Total Revenues</span></div></div>`);
            _push2(ssrRenderComponent(_component_ClientOnly, null, null, _parent2, _scopeId));
          } else {
            return [
              createVNode("div", { class: "summary-1 pt-5 pb-3 px-5 flex items-center gap-4" }, [
                createVNode("div", { class: "p-5 flex justify-center items-center bg-primary-100 rounded-2xl" }, [
                  createVNode(_component_Icon, {
                    class: "text-primary-500",
                    name: "ic:outline-attach-money"
                  })
                ]),
                createVNode("div", { class: "flex-1 truncate" }, [
                  createVNode("span", { class: "block font-semibold text-xl leading-tight" }, " RM 100,000"),
                  createVNode("span", { class: "text-base font-semibold text-secondary" }, "Total Revenues")
                ])
              ]),
              createVNode(_component_ClientOnly)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_rs_card, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="summary-2 pt-5 pb-3 px-5 flex items-center gap-4"${_scopeId}><div class="p-5 flex justify-center items-center bg-indigo-100 rounded-2xl"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_Icon, {
              class: "text-indigo-500",
              name: "ic:outline-account-circle"
            }, null, _parent2, _scopeId));
            _push2(`</div><div class="flex-1 truncate"${_scopeId}><span class="block font-semibold text-xl leading-tight"${_scopeId}> 512</span><span class="text-base font-semibold text-secondary"${_scopeId}>Total Users</span></div></div>`);
            _push2(ssrRenderComponent(_component_ClientOnly, null, null, _parent2, _scopeId));
          } else {
            return [
              createVNode("div", { class: "summary-2 pt-5 pb-3 px-5 flex items-center gap-4" }, [
                createVNode("div", { class: "p-5 flex justify-center items-center bg-indigo-100 rounded-2xl" }, [
                  createVNode(_component_Icon, {
                    class: "text-indigo-500",
                    name: "ic:outline-account-circle"
                  })
                ]),
                createVNode("div", { class: "flex-1 truncate" }, [
                  createVNode("span", { class: "block font-semibold text-xl leading-tight" }, " 512"),
                  createVNode("span", { class: "text-base font-semibold text-secondary" }, "Total Users")
                ])
              ]),
              createVNode(_component_ClientOnly)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_rs_card, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="summary-3 pt-5 pb-3 px-5 flex items-center gap-4"${_scopeId}><div class="p-5 flex justify-center items-center bg-orange-100 rounded-2xl"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_Icon, {
              class: "text-orange-500",
              name: "ic:outline-shopping-bag"
            }, null, _parent2, _scopeId));
            _push2(`</div><div class="flex-1 truncate"${_scopeId}><span class="block font-semibold text-xl leading-tight"${_scopeId}> 20</span><span class="text-base font-semibold text-secondary"${_scopeId}>Total Products</span></div></div>`);
            _push2(ssrRenderComponent(_component_ClientOnly, null, null, _parent2, _scopeId));
          } else {
            return [
              createVNode("div", { class: "summary-3 pt-5 pb-3 px-5 flex items-center gap-4" }, [
                createVNode("div", { class: "p-5 flex justify-center items-center bg-orange-100 rounded-2xl" }, [
                  createVNode(_component_Icon, {
                    class: "text-orange-500",
                    name: "ic:outline-shopping-bag"
                  })
                ]),
                createVNode("div", { class: "flex-1 truncate" }, [
                  createVNode("span", { class: "block font-semibold text-xl leading-tight" }, " 20"),
                  createVNode("span", { class: "text-base font-semibold text-secondary" }, "Total Products")
                ])
              ]),
              createVNode(_component_ClientOnly)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_rs_card, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="summary-4 pt-5 pb-3 px-5 flex items-center gap-4"${_scopeId}><div class="p-5 flex justify-center items-center bg-blue-100 rounded-2xl"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_Icon, {
              class: "text-blue-500",
              name: "ic:outline-remove-red-eye"
            }, null, _parent2, _scopeId));
            _push2(`</div><div class="flex-1 truncate"${_scopeId}><span class="block font-semibold text-xl leading-tight"${_scopeId}> 2,452</span><span class="text-base font-semibold text-secondary"${_scopeId}>Total Viewers</span></div></div>`);
            _push2(ssrRenderComponent(_component_ClientOnly, null, null, _parent2, _scopeId));
          } else {
            return [
              createVNode("div", { class: "summary-4 pt-5 pb-3 px-5 flex items-center gap-4" }, [
                createVNode("div", { class: "p-5 flex justify-center items-center bg-blue-100 rounded-2xl" }, [
                  createVNode(_component_Icon, {
                    class: "text-blue-500",
                    name: "ic:outline-remove-red-eye"
                  })
                ]),
                createVNode("div", { class: "flex-1 truncate" }, [
                  createVNode("span", { class: "block font-semibold text-xl leading-tight" }, " 2,452"),
                  createVNode("span", { class: "text-base font-semibold text-secondary" }, "Total Viewers")
                ])
              ]),
              createVNode(_component_ClientOnly)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="flex flex-col md:flex-row gap-x-6"><div class="w-12/2 md:w-8/12 flex flex-col">`);
      _push(ssrRenderComponent(_component_rs_card, { class: "flex-1" }, {
        header: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Transaction `);
          } else {
            return [
              createTextVNode(" Transaction ")
            ];
          }
        }),
        body: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_ClientOnly, null, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_ClientOnly)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_rs_card, { class: "flex-1" }, {
        header: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Referral`);
          } else {
            return [
              createTextVNode(" Referral")
            ];
          }
        }),
        body: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<!--[-->`);
            ssrRenderList(customers, (val, index) => {
              _push2(`<div class="flex justify-between items-center rounded-lg bg-gray-100 dark:bg-slate-700 p-5 first:mt-0 mt-3"${_scopeId}><div class="flex items-center gap-x-4"${_scopeId}><img${ssrRenderAttr("src", `https://avatars.dicebear.com/api/adventurer-neutral/${val.name}.svg`)} class="h-10 w-10 rounded-lg"${_scopeId}><div class="flex-1"${_scopeId}><div class="flex flex-col"${_scopeId}><span class="text-gray-900 dark:text-white font-semibold text-lg"${_scopeId}>${ssrInterpolate(val.name)}</span><span class="text-gray-600 dark:text-gray-50 text-sm"${_scopeId}> RM${ssrInterpolate(parseFloat(val.totalPurchase).toFixed(2))} | ${ssrInterpolate(val.purchase)} sold </span></div></div></div><div${_scopeId}><button class="flex items-center p-4 rounded-full bg-white dark:bg-slate-800 hover:bg-gray-50 dark:hover:bg-slate-900 shadow-md"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_Icon, {
                size: "20px",
                name: "ic:baseline-mail-outline"
              }, null, _parent2, _scopeId));
              _push2(`</button></div></div>`);
            });
            _push2(`<!--]-->`);
          } else {
            return [
              (openBlock(), createBlock(Fragment, null, renderList(customers, (val, index) => {
                return createVNode("div", {
                  key: index,
                  class: "flex justify-between items-center rounded-lg bg-gray-100 dark:bg-slate-700 p-5 first:mt-0 mt-3"
                }, [
                  createVNode("div", { class: "flex items-center gap-x-4" }, [
                    createVNode("img", {
                      src: `https://avatars.dicebear.com/api/adventurer-neutral/${val.name}.svg`,
                      class: "h-10 w-10 rounded-lg"
                    }, null, 8, ["src"]),
                    createVNode("div", { class: "flex-1" }, [
                      createVNode("div", { class: "flex flex-col" }, [
                        createVNode("span", { class: "text-gray-900 dark:text-white font-semibold text-lg" }, toDisplayString(val.name), 1),
                        createVNode("span", { class: "text-gray-600 dark:text-gray-50 text-sm" }, " RM" + toDisplayString(parseFloat(val.totalPurchase).toFixed(2)) + " | " + toDisplayString(val.purchase) + " sold ", 1)
                      ])
                    ])
                  ]),
                  createVNode("div", null, [
                    createVNode("button", { class: "flex items-center p-4 rounded-full bg-white dark:bg-slate-800 hover:bg-gray-50 dark:hover:bg-slate-900 shadow-md" }, [
                      createVNode(_component_Icon, {
                        size: "20px",
                        name: "ic:baseline-mail-outline"
                      })
                    ])
                  ])
                ]);
              }), 64))
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="w-12/2 md:w-4/12 flex flex-col">`);
      _push(ssrRenderComponent(_component_rs_card, { class: "flex-1" }, {
        header: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Monthly Target `);
          } else {
            return [
              createTextVNode(" Monthly Target ")
            ];
          }
        }),
        body: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_ClientOnly, null, null, _parent2, _scopeId));
            _push2(`<hr class="my-4"${_scopeId}><p class="text-xl py-5 font-medium"${_scopeId}>Products</p><!--[-->`);
            ssrRenderList(["A", "B", "C", "D", "E"], (val, index) => {
              _push2(`<div class="${ssrRenderClass([{
                "mt-0": index === 0,
                "mt-3": index !== 0
              }, "flex item-center gap-x-4"])}"${_scopeId}><img${ssrRenderAttr("src", `https://picsum.photos/id/${Math.round(
                Math.random() * 100
              )}/200/300`)} class="h-20 w-20 object-cover rounded-lg"${_scopeId}><div class="flex-1 flex items-center"${_scopeId}><div${_scopeId}><span class="font-semibold text-lg leading-tight"${_scopeId}>Product ${ssrInterpolate(val)}</span><p${_scopeId}> Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p></div></div></div>`);
            });
            _push2(`<!--]-->`);
          } else {
            return [
              createVNode(_component_ClientOnly),
              createVNode("hr", { class: "my-4" }),
              createVNode("p", { class: "text-xl py-5 font-medium" }, "Products"),
              (openBlock(), createBlock(Fragment, null, renderList(["A", "B", "C", "D", "E"], (val, index) => {
                return createVNode("div", {
                  class: ["flex item-center gap-x-4", {
                    "mt-0": index === 0,
                    "mt-3": index !== 0
                  }],
                  key: index
                }, [
                  createVNode("img", {
                    src: `https://picsum.photos/id/${Math.round(
                      Math.random() * 100
                    )}/200/300`,
                    class: "h-20 w-20 object-cover rounded-lg"
                  }, null, 8, ["src"]),
                  createVNode("div", { class: "flex-1 flex items-center" }, [
                    createVNode("div", null, [
                      createVNode("span", { class: "font-semibold text-lg leading-tight" }, "Product " + toDisplayString(val), 1),
                      createVNode("p", null, " Lorem ipsum dolor sit amet, consectetur adipiscing elit. ")
                    ])
                  ])
                ], 2);
              }), 64))
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/dashboard.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=dashboard.a58b7941.mjs.map
