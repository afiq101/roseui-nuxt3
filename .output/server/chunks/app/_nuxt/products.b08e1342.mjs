import { i as useLayoutStore, n as navigateTo, c as _sfc_main$q, e as __nuxt_component_1$1, b as __nuxt_component_1$2, d as _sfc_main$p } from '../server.mjs';
import { ref, computed, watch, resolveComponent, unref, isRef, withCtx, createVNode, openBlock, createBlock, Fragment, renderList, toDisplayString, createTextVNode, createCommentVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderList, ssrRenderClass, ssrRenderAttr } from 'vue/server-renderer';
import products from './data.b5ed65c2.mjs';
import category from './category.34740ef9.mjs';
import { SimpleBar } from 'simplebar-vue3';
import { useWindowSize } from 'vue-window-size';
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
  __name: "products",
  __ssrInlineRender: true,
  setup(__props) {
    const layoutStore = useLayoutStore();
    const mobileWidth = layoutStore.mobileWidth;
    const { width } = useWindowSize();
    const windowWidth = ref(width);
    const data = ref(products);
    const dataLength = ref(products.length);
    const search = ref("");
    const categorySelect = ref("");
    const categories = ref(category);
    const showFilter = ref(true);
    const sort = ref("Featured");
    const currentPage = ref(1);
    const pageSize = ref(6);
    const maxPageShown = ref(3);
    async function navigateProductDetail(sku) {
      await navigateTo({
        path: "/apps/ecommerce/product-detail",
        query: {
          sku
        }
      });
    }
    const computedData = computed(() => {
      let result = [];
      let totalData = 0;
      result = data.value.filter((product) => {
        return product.name.toLowerCase().includes(search.value.toLowerCase());
      }).filter((_, index) => {
        let start = (currentPage.value - 1) * pageSize.value;
        let end = currentPage.value * pageSize.value;
        totalData++;
        if (index >= start && index < end)
          return true;
      });
      dataLength.value = totalData;
      return result;
    });
    watch(categorySelect, (newVal) => {
      if (newVal) {
        data.value = products;
        data.value = data.value.filter((product) => {
          return product.category === newVal;
        });
      } else {
        data.value = products;
      }
    });
    const formatPrice = (price) => {
      return parseFloat(price).toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    };
    const formatSold = (n) => {
      if (n < 1e3)
        return n;
      if (n >= 1e3)
        return +(n / 1e3).toFixed(1) + "K";
    };
    const iconEvent = (e) => {
      e.stopPropagation();
      const icon = e.path[1];
      if (window.getComputedStyle(icon).fill == "rgb(169, 169, 169)" || window.getComputedStyle(icon).stroke == "rgb(169, 169, 169)") {
        icon.style.fill = "#FF5A5F";
        icon.style.stroke = "#FF5A5F";
      } else {
        icon.style.fill = "#A9A9A9";
        icon.style.stroke = "#A9A9A9";
      }
    };
    const isDesktop = computed(() => {
      return windowWidth.value >= mobileWidth ? true : false;
    });
    watch(isDesktop, (value) => {
      if (!value)
        showFilter.value = false;
      else
        showFilter.value = true;
    });
    const totalPage = computed(() => {
      return Math.ceil(dataLength.value / pageSize.value);
    });
    const pageChange = (page) => {
      currentPage.value = page;
    };
    const nextPage = () => {
      if (currentPage.value * pageSize.value < dataLength.value)
        currentPage.value++;
    };
    const prevPage = () => {
      if (currentPage.value > 1)
        currentPage.value--;
    };
    const pages = computed(() => {
      let totalPG = Math.ceil(dataLength.value / pageSize.value);
      const numShown = Math.min(maxPageShown.value, totalPG);
      let first = currentPage.value - Math.floor(numShown / 2);
      first = Math.max(first, 1);
      first = Math.min(first, totalPG - numShown + 1);
      return [...Array(numShown)].map((k, i) => i + first);
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_LayoutsBreadcrumb = _sfc_main$q;
      const _component_FormKit = resolveComponent("FormKit");
      const _component_Icon = __nuxt_component_1$1;
      const _component_rs_card = __nuxt_component_1$2;
      const _component_rs_button = _sfc_main$p;
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_component_LayoutsBreadcrumb, null, null, _parent));
      _push(`<div class="product-header mb-2 flex justify-between items-center"><p class="ml-1 font-medium text-gray-500">${ssrInterpolate(unref(computedData).length)} results found </p>`);
      _push(ssrRenderComponent(_component_FormKit, {
        type: "select",
        modelValue: unref(sort),
        "onUpdate:modelValue": ($event) => isRef(sort) ? sort.value = $event : null,
        options: ["Featured", "Highest Price", "Lowest Price"],
        "outer-class": "mb-0"
      }, null, _parent));
      _push(`</div>`);
      _push(ssrRenderComponent(_component_FormKit, {
        modelValue: unref(search),
        "onUpdate:modelValue": ($event) => isRef(search) ? search.value = $event : null,
        placeholder: "Search for a products...",
        type: "search",
        "inner-class": "border-0 rounded-md shadow-md shadow-slate-200 dark:shadow-slate-900"
      }, null, _parent));
      _push(`<div class="filter-top-wrapper flex pb-4"><button class="flex items-center rounded-lg py-2 px-4 bg-white dark:bg-slate-800 dark:text-gray-300 hover:bg-slate-200 shadow-md shadow-slate-200 dark:shadow-slate-900">`);
      _push(ssrRenderComponent(_component_Icon, {
        size: "1.25rem",
        name: "ic:outline-filter-alt"
      }, null, _parent));
      _push(`</button>`);
      _push(ssrRenderComponent(unref(SimpleBar), { style: { "width": "100%" } }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="category-wrapper flex gap-x-4 pl-4"${_scopeId}><!--[-->`);
            ssrRenderList(unref(categories), (category2, index) => {
              _push2(`<button class="${ssrRenderClass([{
                "bg-gray-200": unref(categorySelect) === category2.name
              }, "flex items-center rounded-lg py-2 px-3 bg-white dark:bg-slate-800 dark:text-gray-300 hover:bg-slate-200 font-semibold text-sm shadow-md shadow-slate-200 dark:shadow-slate-900"])}"${_scopeId}><div class="flex items-center bg-slate-100 dark:bg-slate-700 border border-slate-200 dark:border-slate-700 w-10 h-10 rounded-lg mr-2"${_scopeId}><img class="h-full w-full object-scale-down"${ssrRenderAttr("src", category2.image)}${_scopeId}></div><span${_scopeId}>${ssrInterpolate(category2.name)}</span></button>`);
            });
            _push2(`<!--]--></div>`);
          } else {
            return [
              createVNode("div", { class: "category-wrapper flex gap-x-4 pl-4" }, [
                (openBlock(true), createBlock(Fragment, null, renderList(unref(categories), (category2, index) => {
                  return openBlock(), createBlock("button", {
                    class: ["flex items-center rounded-lg py-2 px-3 bg-white dark:bg-slate-800 dark:text-gray-300 hover:bg-slate-200 font-semibold text-sm shadow-md shadow-slate-200 dark:shadow-slate-900", {
                      "bg-gray-200": unref(categorySelect) === category2.name
                    }],
                    onClick: ($event) => categorySelect.value = category2.name,
                    key: index
                  }, [
                    createVNode("div", { class: "flex items-center bg-slate-100 dark:bg-slate-700 border border-slate-200 dark:border-slate-700 w-10 h-10 rounded-lg mr-2" }, [
                      createVNode("img", {
                        class: "h-full w-full object-scale-down",
                        src: category2.image
                      }, null, 8, ["src"])
                    ]),
                    createVNode("span", null, toDisplayString(category2.name), 1)
                  ], 10, ["onClick"]);
                }), 128))
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="${ssrRenderClass([{
        "filter-wrapper-show": unref(showFilter),
        "filter-wrapper-hide": !unref(showFilter)
      }, "filter-wrapper fixed md:relative top-0 right-0 float-none md:float-left w-64 mr-0 md:mr-6 z-50 md:z-0"])}"><div class="${ssrRenderClass([{
        show: unref(showFilter),
        hide: !unref(showFilter)
      }, "filter-overlay visible md:invisible"])}"></div>`);
      _push(ssrRenderComponent(_component_rs_card, { class: "p-4 rounded-none md:rounded-lg max-h-screen md:max-h-fit overflow-auto" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="filter-title mb-4"${_scopeId}><h3 class="flex items-center text-lg font-semibold"${_scopeId}>Search Filter</h3></div><span class="font-semibold"${_scopeId}>Categories</span>`);
            _push2(ssrRenderComponent(_component_FormKit, {
              type: "radio",
              options: [...unref(categories).map((category2) => category2.name)],
              classes: {
                fieldset: "border-none !p-0 mt-4"
              }
            }, null, _parent2, _scopeId));
            _push2(`<hr class="mb-4"${_scopeId}><span class="font-semibold"${_scopeId}>Price Range</span><div class="flex items-center justify-center mt-4 gap-x-5"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_FormKit, {
              type: "number",
              placeholder: "Min",
              "outer-class": "mb-0"
            }, null, _parent2, _scopeId));
            _push2(`<div${_scopeId}>-</div>`);
            _push2(ssrRenderComponent(_component_FormKit, {
              type: "number",
              placeholder: "Max",
              "outer-class": "mb-0"
            }, null, _parent2, _scopeId));
            _push2(`</div><hr class="my-4"${_scopeId}><span class="font-semibold"${_scopeId}>Brand</span>`);
            _push2(ssrRenderComponent(_component_FormKit, {
              type: "radio",
              options: ["Asus", "Samsung", "MSI", "Apple", "Playstation 5"],
              classes: {
                fieldset: "border-none !p-0 mt-4"
              }
            }, null, _parent2, _scopeId));
            _push2(`<hr class="my-4"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_rs_button, {
              class: "w-full",
              onClick: ($event) => (categorySelect.value = "", search.value = "")
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`Clear Filter`);
                } else {
                  return [
                    createTextVNode("Clear Filter")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode("div", { class: "filter-title mb-4" }, [
                createVNode("h3", { class: "flex items-center text-lg font-semibold" }, "Search Filter")
              ]),
              createVNode("span", { class: "font-semibold" }, "Categories"),
              createVNode(_component_FormKit, {
                type: "radio",
                options: [...unref(categories).map((category2) => category2.name)],
                classes: {
                  fieldset: "border-none !p-0 mt-4"
                }
              }, null, 8, ["options"]),
              createVNode("hr", { class: "mb-4" }),
              createVNode("span", { class: "font-semibold" }, "Price Range"),
              createVNode("div", { class: "flex items-center justify-center mt-4 gap-x-5" }, [
                createVNode(_component_FormKit, {
                  type: "number",
                  placeholder: "Min",
                  "outer-class": "mb-0"
                }),
                createVNode("div", null, "-"),
                createVNode(_component_FormKit, {
                  type: "number",
                  placeholder: "Max",
                  "outer-class": "mb-0"
                })
              ]),
              createVNode("hr", { class: "my-4" }),
              createVNode("span", { class: "font-semibold" }, "Brand"),
              createVNode(_component_FormKit, {
                type: "radio",
                options: ["Asus", "Samsung", "MSI", "Apple", "Playstation 5"],
                classes: {
                  fieldset: "border-none !p-0 mt-4"
                }
              }),
              createVNode("hr", { class: "my-4" }),
              createVNode(_component_rs_button, {
                class: "w-full",
                onClick: ($event) => (categorySelect.value = "", search.value = "")
              }, {
                default: withCtx(() => [
                  createTextVNode("Clear Filter")
                ]),
                _: 1
              }, 8, ["onClick"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="${ssrRenderClass([{
        "xl:ml-0": !unref(showFilter)
      }, "container-wrapper ml-0 xl:ml-70"])}"><div class="product-wrapper grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-x-5"><!--[-->`);
      ssrRenderList(unref(computedData), (product, index) => {
        _push(ssrRenderComponent(_component_rs_card, {
          class: "cursor-pointer hover:scale-105 transition-all",
          key: index,
          onClick: ($event) => navigateProductDetail(product.sku)
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="product-image relative h-50 rounded-lg"${_scopeId}><img class="object-scale-down w-full h-full"${ssrRenderAttr("src", product.images.length > 0 ? product.images[0] : "")}${ssrRenderAttr("alt", product.name)}${_scopeId}>`);
              if (product.discount && product.discount != 0) {
                _push2(`<span class="product-discount text-sm bg-primary-500 text-white absolute top-3 -right-2 px-2 py-1 rounded-md"${_scopeId}>${ssrInterpolate(product.discount)}% off </span>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`</div><div class="product-content-wrapper flex flex-col px-4 mb-4"${_scopeId}><div class="product-title mt-4 h-12"${_scopeId}><span class="block text-base font-semibold line-clamp-1"${_scopeId}>${ssrInterpolate(product.name)}</span><span class="text-secondary line-clamp-1 text-sm"${_scopeId}>${ssrInterpolate(product.description)}</span></div><div class="product-content flex flex-col"${_scopeId}><div class="product-rating flex items-center my-2"${_scopeId}><!--[-->`);
              ssrRenderList(Math.floor(product.rating), (star, index2) => {
                _push2(ssrRenderComponent(_component_Icon, {
                  name: "ic:baseline-star",
                  class: "text-amber-400",
                  key: index2
                }, null, _parent2, _scopeId));
              });
              _push2(`<!--]--><!--[-->`);
              ssrRenderList(product.rating % 1 != 0 ? 1 : 0, (star, index2) => {
                _push2(ssrRenderComponent(_component_Icon, {
                  name: "ic:baseline-star-half",
                  class: "text-amber-400",
                  key: index2
                }, null, _parent2, _scopeId));
              });
              _push2(`<!--]--><!--[-->`);
              ssrRenderList(5 - Math.ceil(product.rating), (star, index2) => {
                _push2(ssrRenderComponent(_component_Icon, {
                  name: "ic:baseline-star-border",
                  class: "text-amber-400",
                  key: index2
                }, null, _parent2, _scopeId));
              });
              _push2(`<!--]--><div class="product-rating-sold ml-1"${_scopeId}><span class="text-xs"${_scopeId}> (${ssrInterpolate(formatSold(product.sold))}) </span></div></div><div class="product-price flex justify-between"${_scopeId}><div class="truncate"${_scopeId}><div class="text-sm text-primary-500"${_scopeId}>${ssrInterpolate(product.currency)}<span class="text-lg"${_scopeId}>${ssrInterpolate(product.discountedPrice ? formatPrice(product.discountedPrice) : formatPrice(product.price))}</span></div>`);
              if (product.discountedPrice) {
                _push2(`<span class="text-sm line-through text-secondary mt-1"${_scopeId}>${ssrInterpolate(product.currency)}${ssrInterpolate(formatPrice(product.price))}</span>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`</div><div class="action-button flex items-center gap-x-5"${_scopeId}><div class="icon-wrapper"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_Icon, {
                size: "1.4rem",
                fill: "#A9A9A9",
                stroke: "#A9A9A9",
                name: "ph:shopping-cart-fill"
              }, null, _parent2, _scopeId));
              _push2(`</div><div class="icon-wrapper"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_Icon, {
                size: "1.4rem",
                fill: "#A9A9A9",
                stroke: "#A9A9A9",
                name: "ph:heart-fill"
              }, null, _parent2, _scopeId));
              _push2(`</div></div></div></div></div>`);
            } else {
              return [
                createVNode("div", { class: "product-image relative h-50 rounded-lg" }, [
                  createVNode("img", {
                    class: "object-scale-down w-full h-full",
                    src: product.images.length > 0 ? product.images[0] : "",
                    alt: product.name
                  }, null, 8, ["src", "alt"]),
                  product.discount && product.discount != 0 ? (openBlock(), createBlock("span", {
                    key: 0,
                    class: "product-discount text-sm bg-primary-500 text-white absolute top-3 -right-2 px-2 py-1 rounded-md"
                  }, toDisplayString(product.discount) + "% off ", 1)) : createCommentVNode("", true)
                ]),
                createVNode("div", { class: "product-content-wrapper flex flex-col px-4 mb-4" }, [
                  createVNode("div", { class: "product-title mt-4 h-12" }, [
                    createVNode("span", { class: "block text-base font-semibold line-clamp-1" }, toDisplayString(product.name), 1),
                    createVNode("span", { class: "text-secondary line-clamp-1 text-sm" }, toDisplayString(product.description), 1)
                  ]),
                  createVNode("div", { class: "product-content flex flex-col" }, [
                    createVNode("div", { class: "product-rating flex items-center my-2" }, [
                      (openBlock(true), createBlock(Fragment, null, renderList(Math.floor(product.rating), (star, index2) => {
                        return openBlock(), createBlock(_component_Icon, {
                          name: "ic:baseline-star",
                          class: "text-amber-400",
                          key: index2
                        });
                      }), 128)),
                      (openBlock(true), createBlock(Fragment, null, renderList(product.rating % 1 != 0 ? 1 : 0, (star, index2) => {
                        return openBlock(), createBlock(_component_Icon, {
                          name: "ic:baseline-star-half",
                          class: "text-amber-400",
                          key: index2
                        });
                      }), 128)),
                      (openBlock(true), createBlock(Fragment, null, renderList(5 - Math.ceil(product.rating), (star, index2) => {
                        return openBlock(), createBlock(_component_Icon, {
                          name: "ic:baseline-star-border",
                          class: "text-amber-400",
                          key: index2
                        });
                      }), 128)),
                      createVNode("div", { class: "product-rating-sold ml-1" }, [
                        createVNode("span", { class: "text-xs" }, " (" + toDisplayString(formatSold(product.sold)) + ") ", 1)
                      ])
                    ]),
                    createVNode("div", { class: "product-price flex justify-between" }, [
                      createVNode("div", { class: "truncate" }, [
                        createVNode("div", { class: "text-sm text-primary-500" }, [
                          createTextVNode(toDisplayString(product.currency), 1),
                          createVNode("span", { class: "text-lg" }, toDisplayString(product.discountedPrice ? formatPrice(product.discountedPrice) : formatPrice(product.price)), 1)
                        ]),
                        product.discountedPrice ? (openBlock(), createBlock("span", {
                          key: 0,
                          class: "text-sm line-through text-secondary mt-1"
                        }, toDisplayString(product.currency) + toDisplayString(formatPrice(product.price)), 1)) : createCommentVNode("", true)
                      ]),
                      createVNode("div", { class: "action-button flex items-center gap-x-5" }, [
                        createVNode("div", { class: "icon-wrapper" }, [
                          createVNode(_component_Icon, {
                            size: "1.4rem",
                            fill: "#A9A9A9",
                            stroke: "#A9A9A9",
                            name: "ph:shopping-cart-fill"
                          })
                        ]),
                        createVNode("div", {
                          class: "icon-wrapper",
                          onClick: iconEvent
                        }, [
                          createVNode(_component_Icon, {
                            size: "1.4rem",
                            fill: "#A9A9A9",
                            stroke: "#A9A9A9",
                            name: "ph:heart-fill"
                          })
                        ])
                      ])
                    ])
                  ])
                ])
              ];
            }
          }),
          _: 2
        }, _parent));
      });
      _push(`<!--]--></div><div class="pagination flex justify-center items-center pb-4 gap-x-1">`);
      _push(ssrRenderComponent(_component_rs_button, {
        variant: "primary-outline",
        class: "rounded-full !p-1 w-8 h-8",
        onClick: prevPage,
        disabled: unref(currentPage) == 1
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_Icon, {
              name: "ic:round-chevron-left",
              size: "1rem"
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_Icon, {
                name: "ic:round-chevron-left",
                size: "1rem"
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<!--[-->`);
      ssrRenderList(unref(pages), (val, index) => {
        _push(ssrRenderComponent(_component_rs_button, {
          variant: unref(currentPage) == val ? "primary" : "primary-outline",
          class: "rounded-full !p-1 w-8 h-8",
          key: index,
          onClick: ($event) => pageChange(val)
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(val)}`);
            } else {
              return [
                createTextVNode(toDisplayString(val), 1)
              ];
            }
          }),
          _: 2
        }, _parent));
      });
      _push(`<!--]-->`);
      _push(ssrRenderComponent(_component_rs_button, {
        variant: "primary-outline",
        class: "rounded-full !p-1 w-8 h-8",
        onClick: nextPage,
        disabled: unref(currentPage) == unref(totalPage)
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_Icon, {
              name: "ic:round-chevron-right",
              size: "1rem"
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_Icon, {
                name: "ic:round-chevron-right",
                size: "1rem"
              })
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/Kitchensink/ecommerce/products.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=products.b08e1342.mjs.map
