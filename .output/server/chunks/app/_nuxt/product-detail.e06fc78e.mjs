import { u as useRoute, n as navigateTo, c as _sfc_main$q, b as __nuxt_component_1$2, e as __nuxt_component_1$1, d as _sfc_main$p, f as _sfc_main$o, g as _sfc_main$n, h as _sfc_main$m } from '../server.mjs';
import { withAsyncContext, withCtx, unref, createVNode, openBlock, createBlock, Fragment, renderList, toDisplayString, createCommentVNode, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrRenderStyle, ssrRenderAttr, ssrInterpolate } from 'vue/server-renderer';
import products from './data.b5ed65c2.mjs';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/vue';
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
  __name: "product-detail",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const modules = [Navigation, Pagination, Scrollbar, A11y];
    const route = useRoute();
    if (!route.query.sku) {
      [__temp, __restore] = withAsyncContext(() => navigateTo("/apps/ecommerce/products")), await __temp, __restore();
    }
    const product = products.find((p) => p.sku == route.query.sku);
    const formatPrice = (price) => {
      return parseFloat(price).toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    };
    const formatSold = (n) => {
      if (n < 1e3)
        return n;
      if (n >= 1e3)
        return +(n / 1e3).toFixed(1) + "K";
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_LayoutsBreadcrumb = _sfc_main$q;
      const _component_rs_card = __nuxt_component_1$2;
      const _component_Icon = __nuxt_component_1$1;
      const _component_rs_button = _sfc_main$p;
      const _component_rs_collapse = _sfc_main$o;
      const _component_rs_collapse_item = _sfc_main$n;
      const _component_rs_progress_bar = _sfc_main$m;
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_component_LayoutsBreadcrumb, null, null, _parent));
      _push(ssrRenderComponent(_component_rs_card, { class: "py-5" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex flex-col md:flex-row items-center md:items-start justify-center my-4 px-5"${_scopeId}><div class="product-image w-full md:w-2/5 flex justify-center items-center"${_scopeId}>`);
            if (unref(product).images.length > 1) {
              _push2(ssrRenderComponent(unref(Swiper), {
                modules,
                "slides-per-view": 1,
                centeredSlides: true,
                pagination: { clickable: true },
                navigation: ""
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<!--[-->`);
                    ssrRenderList(unref(product).images, (val, index) => {
                      _push3(ssrRenderComponent(unref(SwiperSlide), { key: index }, {
                        default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                          if (_push4) {
                            _push4(`<div class="w-full flex justify-center items-center"${_scopeId3}><img style="${ssrRenderStyle({ "max-width": "230px" })}" class="object-scale-down md:!max-w-xs"${ssrRenderAttr("src", val)}${_scopeId3}></div>`);
                          } else {
                            return [
                              createVNode("div", { class: "w-full flex justify-center items-center" }, [
                                createVNode("img", {
                                  style: { "max-width": "230px" },
                                  class: "object-scale-down md:!max-w-xs",
                                  src: val
                                }, null, 8, ["src"])
                              ])
                            ];
                          }
                        }),
                        _: 2
                      }, _parent3, _scopeId2));
                    });
                    _push3(`<!--]-->`);
                  } else {
                    return [
                      (openBlock(true), createBlock(Fragment, null, renderList(unref(product).images, (val, index) => {
                        return openBlock(), createBlock(unref(SwiperSlide), { key: index }, {
                          default: withCtx(() => [
                            createVNode("div", { class: "w-full flex justify-center items-center" }, [
                              createVNode("img", {
                                style: { "max-width": "230px" },
                                class: "object-scale-down md:!max-w-xs",
                                src: val
                              }, null, 8, ["src"])
                            ])
                          ]),
                          _: 2
                        }, 1024);
                      }), 128))
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              _push2(`<img style="${ssrRenderStyle({ "max-width": "200px" })}" class="object-scale-down md:!max-w-md"${ssrRenderAttr("src", unref(product).images[0])}${_scopeId}>`);
            }
            _push2(`</div><div class="product-content w-full md:w-3/5"${_scopeId}><a href="#" class="font-medium text-secondary cursor-pointer hover:text-gray-500"${_scopeId}>${ssrInterpolate(unref(product).store)}</a><h3 class="text-xl md:text-2xl mb-2"${_scopeId}>${ssrInterpolate(unref(product).name)}</h3><div class="flex items-center gap-x-1"${_scopeId}><!--[-->`);
            ssrRenderList(Math.floor(unref(product).rating), (star, index) => {
              _push2(ssrRenderComponent(_component_Icon, {
                name: "ic:baseline-star",
                class: "text-amber-400",
                key: index
              }, null, _parent2, _scopeId));
            });
            _push2(`<!--]--><!--[-->`);
            ssrRenderList(unref(product).rating % 1 != 0 ? 1 : 0, (star, index) => {
              _push2(ssrRenderComponent(_component_Icon, {
                name: "ic:baseline-star-half",
                class: "text-amber-400",
                key: index
              }, null, _parent2, _scopeId));
            });
            _push2(`<!--]--><!--[-->`);
            ssrRenderList(5 - Math.ceil(unref(product).rating), (star, index) => {
              _push2(ssrRenderComponent(_component_Icon, {
                name: "ic:baseline-star-border",
                class: "text-amber-400",
                key: index
              }, null, _parent2, _scopeId));
            });
            _push2(`<!--]--><div class="product-rating-sold ml-1"${_scopeId}><span class="text-sm"${_scopeId}> (${ssrInterpolate(formatSold(unref(product).sold))}) </span></div></div><div class="product-price my-2"${_scopeId}><span class="text-primary-500 text-3xl md:text-4xl font-semibold"${_scopeId}>RM${ssrInterpolate(formatPrice(unref(product).price))}</span>`);
            if (unref(product).discountedPrice) {
              _push2(`<span class="text-lg line-through text-secondary ml-0 md:ml-2 mt-1 block md:inline-block"${_scopeId}>${ssrInterpolate(unref(product).currency)}${ssrInterpolate(formatPrice(unref(product).price))}</span>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div><div class="product-stock text-gray-500 font-medium my-2"${_scopeId}> Available: ${ssrInterpolate(unref(product).stock)}</div><div class="product-description"${_scopeId}><p class="text-gray-500"${_scopeId}>${ssrInterpolate(unref(product).description)}</p></div><div class="product-action my-4 flex flex-col-reverse md:flex-row items-start md:items-center gap-4"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_rs_button, { class: "w-full md:w-fit" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_Icon, {
                    class: "mr-2",
                    name: "ph:shopping-cart"
                  }, null, _parent3, _scopeId2));
                  _push3(`<span class="text-white"${_scopeId2}>Add to Cart</span>`);
                } else {
                  return [
                    createVNode(_component_Icon, {
                      class: "mr-2",
                      name: "ph:shopping-cart"
                    }),
                    createVNode("span", { class: "text-white" }, "Add to Cart")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_rs_button, {
              variant: "primary-outline",
              class: "w-full md:w-fit"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_Icon, {
                    class: "mr-2",
                    name: "ph:heart-light"
                  }, null, _parent3, _scopeId2));
                  _push3(`<span${_scopeId2}>Wishlist</span>`);
                } else {
                  return [
                    createVNode(_component_Icon, {
                      class: "mr-2",
                      name: "ph:heart-light"
                    }),
                    createVNode("span", null, "Wishlist")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div><div class="product-attributes my-5"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_rs_collapse, { accordion: "" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_rs_collapse_item, { title: "Product Specifications:" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<ul class="grid grid-cols-2 gap-3"${_scopeId3}><!--[-->`);
                        ssrRenderList(unref(product).attributes, (val, index) => {
                          _push4(`<li class="font-medium"${_scopeId3}><span class="font-normal text-secondary"${_scopeId3}>${ssrInterpolate(val.name)}: </span><span${_scopeId3}>${ssrInterpolate(val.value)}</span></li>`);
                        });
                        _push4(`<!--]--></ul>`);
                      } else {
                        return [
                          createVNode("ul", { class: "grid grid-cols-2 gap-3" }, [
                            (openBlock(true), createBlock(Fragment, null, renderList(unref(product).attributes, (val, index) => {
                              return openBlock(), createBlock("li", {
                                class: "font-medium",
                                key: index
                              }, [
                                createVNode("span", { class: "font-normal text-secondary" }, toDisplayString(val.name) + ": ", 1),
                                createVNode("span", null, toDisplayString(val.value), 1)
                              ]);
                            }), 128))
                          ])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_rs_collapse_item, { title: "Product Specifications:" }, {
                      default: withCtx(() => [
                        createVNode("ul", { class: "grid grid-cols-2 gap-3" }, [
                          (openBlock(true), createBlock(Fragment, null, renderList(unref(product).attributes, (val, index) => {
                            return openBlock(), createBlock("li", {
                              class: "font-medium",
                              key: index
                            }, [
                              createVNode("span", { class: "font-normal text-secondary" }, toDisplayString(val.name) + ": ", 1),
                              createVNode("span", null, toDisplayString(val.value), 1)
                            ]);
                          }), 128))
                        ])
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></div></div><div class="item-features py-14 md:py-20 bg-gray-50 dark:bg-gray-700 grid md:grid-cols-3"${_scopeId}><div class="flex flex-col items-center justify-center px-4 my-4 md:my-0"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_Icon, {
              size: "1.75rem",
              class: "text-primary-400",
              name: "ph:tag"
            }, null, _parent2, _scopeId));
            _push2(`<span class="text-lg font-semibold my-2"${_scopeId}>Lowest Price So Far</span><p class="text-center"${_scopeId}> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p></div><div class="flex flex-col items-center justify-center px-4 my-4 md:my-0"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_Icon, {
              size: "1.75rem",
              class: "text-primary-400",
              name: "ph:lightning"
            }, null, _parent2, _scopeId));
            _push2(`<span class="text-lg font-semibold my-2"${_scopeId}>Fast Delivery</span><p class="text-center"${_scopeId}> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p></div><div class="flex flex-col items-center justify-center px-4 my-4 md:my-0"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_Icon, {
              size: "1.75rem",
              class: "text-primary-400",
              name: "ph:shield"
            }, null, _parent2, _scopeId));
            _push2(`<span class="text-lg font-semibold my-2"${_scopeId}>3 Years Warranty</span><p class="text-center"${_scopeId}> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p></div></div><div class="review p-5 mt-5 flex items-start flex-col md:flex-row gap-4"${_scopeId}><div class="customer-review-rating w-full md:w-3/12"${_scopeId}><div class="mb-5"${_scopeId}><h4${_scopeId}>Customer Reviews</h4><!--[-->`);
            ssrRenderList(Math.floor(unref(product).rating), (star, index) => {
              _push2(ssrRenderComponent(_component_Icon, {
                name: "ic:baseline-star",
                class: "text-amber-400",
                key: index
              }, null, _parent2, _scopeId));
            });
            _push2(`<!--]--><!--[-->`);
            ssrRenderList(unref(product).rating % 1 != 0 ? 1 : 0, (star, index) => {
              _push2(ssrRenderComponent(_component_Icon, {
                name: "ic:baseline-star-half",
                class: "text-amber-400",
                key: index
              }, null, _parent2, _scopeId));
            });
            _push2(`<!--]--><!--[-->`);
            ssrRenderList(5 - Math.ceil(unref(product).rating), (star, index) => {
              _push2(ssrRenderComponent(_component_Icon, {
                name: "ic:baseline-star-border",
                class: "text-amber-400",
                key: index
              }, null, _parent2, _scopeId));
            });
            _push2(`<!--]--> ${ssrInterpolate(unref(product).rating)} of 5 <br${_scopeId}><div class="rating-5 flex items-center my-2"${_scopeId}><p class="basis-20"${_scopeId}>5 Stars</p>`);
            _push2(ssrRenderComponent(_component_rs_progress_bar, {
              class: "mb-0",
              value: 60,
              max: 100,
              variant: "primary",
              size: "sm"
            }, null, _parent2, _scopeId));
            _push2(`</div><div class="rating-4 flex items-center my-2"${_scopeId}><p class="basis-20"${_scopeId}>4 Stars</p>`);
            _push2(ssrRenderComponent(_component_rs_progress_bar, {
              class: "mb-0",
              value: 35,
              max: 100,
              variant: "primary",
              size: "sm"
            }, null, _parent2, _scopeId));
            _push2(`</div><div class="rating-3 flex items-center my-2"${_scopeId}><p class="basis-20"${_scopeId}>3 Stars</p>`);
            _push2(ssrRenderComponent(_component_rs_progress_bar, {
              class: "mb-0",
              value: 5,
              max: 100,
              variant: "primary",
              size: "sm"
            }, null, _parent2, _scopeId));
            _push2(`</div><div class="rating-2 flex items-center my-2"${_scopeId}><p class="basis-20"${_scopeId}>2 Stars</p>`);
            _push2(ssrRenderComponent(_component_rs_progress_bar, {
              class: "mb-0",
              value: 0,
              max: 100,
              variant: "primary",
              size: "sm"
            }, null, _parent2, _scopeId));
            _push2(`</div><div class="rating-1 flex items-center my-2"${_scopeId}><p class="basis-20"${_scopeId}>1 Stars</p>`);
            _push2(ssrRenderComponent(_component_rs_progress_bar, {
              class: "mb-0",
              value: 0,
              max: 100,
              variant: "primary",
              size: "sm"
            }, null, _parent2, _scopeId));
            _push2(`</div></div></div><div class="customer-review w-full md:w-9/12"${_scopeId}><!--[-->`);
            ssrRenderList(5, (index) => {
              _push2(`<div class="customer-wrapper"${_scopeId}><div class="customer flex items-center gap-2 mb-2"${_scopeId}><div class="w-8 h-8 rounded-full"${_scopeId}><img${ssrRenderAttr("src", `https://robohash.org/` + index)} alt=""${_scopeId}></div><div class="rate"${_scopeId}><p class="font-semibold"${_scopeId}>Iqmal Rizal</p>`);
              _push2(ssrRenderComponent(_component_Icon, {
                name: "ic:baseline-star",
                class: "text-amber-400"
              }, null, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_Icon, {
                name: "ic:baseline-star",
                class: "text-amber-400"
              }, null, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_Icon, {
                name: "ic:baseline-star",
                class: "text-amber-400"
              }, null, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_Icon, {
                name: "ic:baseline-star",
                class: "text-amber-400"
              }, null, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_Icon, {
                name: "ic:baseline-star",
                class: "text-amber-400"
              }, null, _parent2, _scopeId));
              _push2(`</div></div><div${_scopeId}> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&#39;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </div><hr class="my-4"${_scopeId}></div>`);
            });
            _push2(`<!--]--></div></div>`);
          } else {
            return [
              createVNode("div", { class: "flex flex-col md:flex-row items-center md:items-start justify-center my-4 px-5" }, [
                createVNode("div", { class: "product-image w-full md:w-2/5 flex justify-center items-center" }, [
                  unref(product).images.length > 1 ? (openBlock(), createBlock(unref(Swiper), {
                    key: 0,
                    modules,
                    "slides-per-view": 1,
                    centeredSlides: true,
                    pagination: { clickable: true },
                    navigation: ""
                  }, {
                    default: withCtx(() => [
                      (openBlock(true), createBlock(Fragment, null, renderList(unref(product).images, (val, index) => {
                        return openBlock(), createBlock(unref(SwiperSlide), { key: index }, {
                          default: withCtx(() => [
                            createVNode("div", { class: "w-full flex justify-center items-center" }, [
                              createVNode("img", {
                                style: { "max-width": "230px" },
                                class: "object-scale-down md:!max-w-xs",
                                src: val
                              }, null, 8, ["src"])
                            ])
                          ]),
                          _: 2
                        }, 1024);
                      }), 128))
                    ]),
                    _: 1
                  })) : (openBlock(), createBlock("img", {
                    key: 1,
                    style: { "max-width": "200px" },
                    class: "object-scale-down md:!max-w-md",
                    src: unref(product).images[0]
                  }, null, 8, ["src"]))
                ]),
                createVNode("div", { class: "product-content w-full md:w-3/5" }, [
                  createVNode("a", {
                    href: "#",
                    class: "font-medium text-secondary cursor-pointer hover:text-gray-500"
                  }, toDisplayString(unref(product).store), 1),
                  createVNode("h3", { class: "text-xl md:text-2xl mb-2" }, toDisplayString(unref(product).name), 1),
                  createVNode("div", { class: "flex items-center gap-x-1" }, [
                    (openBlock(true), createBlock(Fragment, null, renderList(Math.floor(unref(product).rating), (star, index) => {
                      return openBlock(), createBlock(_component_Icon, {
                        name: "ic:baseline-star",
                        class: "text-amber-400",
                        key: index
                      });
                    }), 128)),
                    (openBlock(true), createBlock(Fragment, null, renderList(unref(product).rating % 1 != 0 ? 1 : 0, (star, index) => {
                      return openBlock(), createBlock(_component_Icon, {
                        name: "ic:baseline-star-half",
                        class: "text-amber-400",
                        key: index
                      });
                    }), 128)),
                    (openBlock(true), createBlock(Fragment, null, renderList(5 - Math.ceil(unref(product).rating), (star, index) => {
                      return openBlock(), createBlock(_component_Icon, {
                        name: "ic:baseline-star-border",
                        class: "text-amber-400",
                        key: index
                      });
                    }), 128)),
                    createVNode("div", { class: "product-rating-sold ml-1" }, [
                      createVNode("span", { class: "text-sm" }, " (" + toDisplayString(formatSold(unref(product).sold)) + ") ", 1)
                    ])
                  ]),
                  createVNode("div", { class: "product-price my-2" }, [
                    createVNode("span", { class: "text-primary-500 text-3xl md:text-4xl font-semibold" }, "RM" + toDisplayString(formatPrice(unref(product).price)), 1),
                    unref(product).discountedPrice ? (openBlock(), createBlock("span", {
                      key: 0,
                      class: "text-lg line-through text-secondary ml-0 md:ml-2 mt-1 block md:inline-block"
                    }, toDisplayString(unref(product).currency) + toDisplayString(formatPrice(unref(product).price)), 1)) : createCommentVNode("", true)
                  ]),
                  createVNode("div", { class: "product-stock text-gray-500 font-medium my-2" }, " Available: " + toDisplayString(unref(product).stock), 1),
                  createVNode("div", { class: "product-description" }, [
                    createVNode("p", { class: "text-gray-500" }, toDisplayString(unref(product).description), 1)
                  ]),
                  createVNode("div", { class: "product-action my-4 flex flex-col-reverse md:flex-row items-start md:items-center gap-4" }, [
                    createVNode(_component_rs_button, { class: "w-full md:w-fit" }, {
                      default: withCtx(() => [
                        createVNode(_component_Icon, {
                          class: "mr-2",
                          name: "ph:shopping-cart"
                        }),
                        createVNode("span", { class: "text-white" }, "Add to Cart")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_rs_button, {
                      variant: "primary-outline",
                      class: "w-full md:w-fit"
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_Icon, {
                          class: "mr-2",
                          name: "ph:heart-light"
                        }),
                        createVNode("span", null, "Wishlist")
                      ]),
                      _: 1
                    })
                  ]),
                  createVNode("div", { class: "product-attributes my-5" }, [
                    createVNode(_component_rs_collapse, { accordion: "" }, {
                      default: withCtx(() => [
                        createVNode(_component_rs_collapse_item, { title: "Product Specifications:" }, {
                          default: withCtx(() => [
                            createVNode("ul", { class: "grid grid-cols-2 gap-3" }, [
                              (openBlock(true), createBlock(Fragment, null, renderList(unref(product).attributes, (val, index) => {
                                return openBlock(), createBlock("li", {
                                  class: "font-medium",
                                  key: index
                                }, [
                                  createVNode("span", { class: "font-normal text-secondary" }, toDisplayString(val.name) + ": ", 1),
                                  createVNode("span", null, toDisplayString(val.value), 1)
                                ]);
                              }), 128))
                            ])
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    })
                  ])
                ])
              ]),
              createVNode("div", { class: "item-features py-14 md:py-20 bg-gray-50 dark:bg-gray-700 grid md:grid-cols-3" }, [
                createVNode("div", { class: "flex flex-col items-center justify-center px-4 my-4 md:my-0" }, [
                  createVNode(_component_Icon, {
                    size: "1.75rem",
                    class: "text-primary-400",
                    name: "ph:tag"
                  }),
                  createVNode("span", { class: "text-lg font-semibold my-2" }, "Lowest Price So Far"),
                  createVNode("p", { class: "text-center" }, " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ")
                ]),
                createVNode("div", { class: "flex flex-col items-center justify-center px-4 my-4 md:my-0" }, [
                  createVNode(_component_Icon, {
                    size: "1.75rem",
                    class: "text-primary-400",
                    name: "ph:lightning"
                  }),
                  createVNode("span", { class: "text-lg font-semibold my-2" }, "Fast Delivery"),
                  createVNode("p", { class: "text-center" }, " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ")
                ]),
                createVNode("div", { class: "flex flex-col items-center justify-center px-4 my-4 md:my-0" }, [
                  createVNode(_component_Icon, {
                    size: "1.75rem",
                    class: "text-primary-400",
                    name: "ph:shield"
                  }),
                  createVNode("span", { class: "text-lg font-semibold my-2" }, "3 Years Warranty"),
                  createVNode("p", { class: "text-center" }, " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ")
                ])
              ]),
              createVNode("div", { class: "review p-5 mt-5 flex items-start flex-col md:flex-row gap-4" }, [
                createVNode("div", { class: "customer-review-rating w-full md:w-3/12" }, [
                  createVNode("div", { class: "mb-5" }, [
                    createVNode("h4", null, "Customer Reviews"),
                    (openBlock(true), createBlock(Fragment, null, renderList(Math.floor(unref(product).rating), (star, index) => {
                      return openBlock(), createBlock(_component_Icon, {
                        name: "ic:baseline-star",
                        class: "text-amber-400",
                        key: index
                      });
                    }), 128)),
                    (openBlock(true), createBlock(Fragment, null, renderList(unref(product).rating % 1 != 0 ? 1 : 0, (star, index) => {
                      return openBlock(), createBlock(_component_Icon, {
                        name: "ic:baseline-star-half",
                        class: "text-amber-400",
                        key: index
                      });
                    }), 128)),
                    (openBlock(true), createBlock(Fragment, null, renderList(5 - Math.ceil(unref(product).rating), (star, index) => {
                      return openBlock(), createBlock(_component_Icon, {
                        name: "ic:baseline-star-border",
                        class: "text-amber-400",
                        key: index
                      });
                    }), 128)),
                    createTextVNode(" " + toDisplayString(unref(product).rating) + " of 5 ", 1),
                    createVNode("br"),
                    createVNode("div", { class: "rating-5 flex items-center my-2" }, [
                      createVNode("p", { class: "basis-20" }, "5 Stars"),
                      createVNode(_component_rs_progress_bar, {
                        class: "mb-0",
                        value: 60,
                        max: 100,
                        variant: "primary",
                        size: "sm"
                      })
                    ]),
                    createVNode("div", { class: "rating-4 flex items-center my-2" }, [
                      createVNode("p", { class: "basis-20" }, "4 Stars"),
                      createVNode(_component_rs_progress_bar, {
                        class: "mb-0",
                        value: 35,
                        max: 100,
                        variant: "primary",
                        size: "sm"
                      })
                    ]),
                    createVNode("div", { class: "rating-3 flex items-center my-2" }, [
                      createVNode("p", { class: "basis-20" }, "3 Stars"),
                      createVNode(_component_rs_progress_bar, {
                        class: "mb-0",
                        value: 5,
                        max: 100,
                        variant: "primary",
                        size: "sm"
                      })
                    ]),
                    createVNode("div", { class: "rating-2 flex items-center my-2" }, [
                      createVNode("p", { class: "basis-20" }, "2 Stars"),
                      createVNode(_component_rs_progress_bar, {
                        class: "mb-0",
                        value: 0,
                        max: 100,
                        variant: "primary",
                        size: "sm"
                      })
                    ]),
                    createVNode("div", { class: "rating-1 flex items-center my-2" }, [
                      createVNode("p", { class: "basis-20" }, "1 Stars"),
                      createVNode(_component_rs_progress_bar, {
                        class: "mb-0",
                        value: 0,
                        max: 100,
                        variant: "primary",
                        size: "sm"
                      })
                    ])
                  ])
                ]),
                createVNode("div", { class: "customer-review w-full md:w-9/12" }, [
                  (openBlock(), createBlock(Fragment, null, renderList(5, (index) => {
                    return createVNode("div", {
                      class: "customer-wrapper",
                      key: index
                    }, [
                      createVNode("div", { class: "customer flex items-center gap-2 mb-2" }, [
                        createVNode("div", { class: "w-8 h-8 rounded-full" }, [
                          createVNode("img", {
                            src: `https://robohash.org/` + index,
                            alt: ""
                          }, null, 8, ["src"])
                        ]),
                        createVNode("div", { class: "rate" }, [
                          createVNode("p", { class: "font-semibold" }, "Iqmal Rizal"),
                          createVNode(_component_Icon, {
                            name: "ic:baseline-star",
                            class: "text-amber-400"
                          }),
                          createVNode(_component_Icon, {
                            name: "ic:baseline-star",
                            class: "text-amber-400"
                          }),
                          createVNode(_component_Icon, {
                            name: "ic:baseline-star",
                            class: "text-amber-400"
                          }),
                          createVNode(_component_Icon, {
                            name: "ic:baseline-star",
                            class: "text-amber-400"
                          }),
                          createVNode(_component_Icon, {
                            name: "ic:baseline-star",
                            class: "text-amber-400"
                          })
                        ])
                      ]),
                      createVNode("div", null, " Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. "),
                      createVNode("hr", { class: "my-4" })
                    ]);
                  }), 64))
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/Kitchensink/ecommerce/product-detail.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=product-detail.e06fc78e.mjs.map
