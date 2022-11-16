import { c as _sfc_main$q, b as __nuxt_component_1$2, d as _sfc_main$p } from '../server.mjs';
import { ref, resolveComponent, withCtx, unref, createVNode, toDisplayString, openBlock, createBlock, createCommentVNode, Fragment, renderList, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrRenderAttr, ssrInterpolate } from 'vue/server-renderer';
import products from './data.b5ed65c2.mjs';
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
  __name: "checkout",
  __ssrInlineRender: true,
  setup(__props) {
    const data = ref(products);
    const formatPrice = (price) => {
      return parseFloat(price).toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_LayoutsBreadcrumb = _sfc_main$q;
      const _component_rs_card = __nuxt_component_1$2;
      const _component_SimpleBar = resolveComponent("SimpleBar");
      const _component_FormKit = resolveComponent("FormKit");
      const _component_rs_button = _sfc_main$p;
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_component_LayoutsBreadcrumb, null, null, _parent));
      _push(ssrRenderComponent(_component_rs_card, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="grid grid-cols-1 md:grid-cols-2 gap-4"${_scopeId}><div class="py-7 bg-white dark:bg-slate-800 rounded-l-lg"${_scopeId}><div class="px-10"${_scopeId}><h5${_scopeId}>Summary Order</h5><p${_scopeId}>This is a list of items in the cart.</p></div>`);
            _push2(ssrRenderComponent(_component_SimpleBar, {
              class: "mt-7 px-10",
              style: { "height": "350px" }
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<!--[-->`);
                  ssrRenderList(unref(data), (product, index) => {
                    _push3(ssrRenderComponent(_component_rs_card, {
                      class: "p-5",
                      key: index
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`<div class="flex flex-col md:flex-row gap-4"${_scopeId3}><div class="product-img flex items-center w-30 h-30"${_scopeId3}><img class="object-center"${ssrRenderAttr("src", product.images[0])} alt=""${_scopeId3}></div><div class="product-title flex-1 flex flex-col justify-between"${_scopeId3}><div${_scopeId3}><h5 class="line-clamp-1"${_scopeId3}>${ssrInterpolate(product.name)}</h5><span${_scopeId3}>${ssrInterpolate(product.sku)}</span><br${_scopeId3}><span${_scopeId3}> Quantity: 1 </span></div><div class="product-price my-2"${_scopeId3}><span class="text-xl font-semibold"${_scopeId3}>RM${ssrInterpolate(formatPrice(product.price))}</span>`);
                          if (product.discountedPrice) {
                            _push4(`<span class="text-base line-through text-secondary ml-0 md:ml-2 mt-1 block md:inline-block text-gray-400"${_scopeId3}>${ssrInterpolate(product.currency)}${ssrInterpolate(formatPrice(product.price))}</span>`);
                          } else {
                            _push4(`<!---->`);
                          }
                          _push4(`</div></div></div>`);
                        } else {
                          return [
                            createVNode("div", { class: "flex flex-col md:flex-row gap-4" }, [
                              createVNode("div", { class: "product-img flex items-center w-30 h-30" }, [
                                createVNode("img", {
                                  class: "object-center",
                                  src: product.images[0],
                                  alt: ""
                                }, null, 8, ["src"])
                              ]),
                              createVNode("div", { class: "product-title flex-1 flex flex-col justify-between" }, [
                                createVNode("div", null, [
                                  createVNode("h5", { class: "line-clamp-1" }, toDisplayString(product.name), 1),
                                  createVNode("span", null, toDisplayString(product.sku), 1),
                                  createVNode("br"),
                                  createVNode("span", null, " Quantity: 1 ")
                                ]),
                                createVNode("div", { class: "product-price my-2" }, [
                                  createVNode("span", { class: "text-xl font-semibold" }, "RM" + toDisplayString(formatPrice(product.price)), 1),
                                  product.discountedPrice ? (openBlock(), createBlock("span", {
                                    key: 0,
                                    class: "text-base line-through text-secondary ml-0 md:ml-2 mt-1 block md:inline-block text-gray-400"
                                  }, toDisplayString(product.currency) + toDisplayString(formatPrice(product.price)), 1)) : createCommentVNode("", true)
                                ])
                              ])
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
                    (openBlock(true), createBlock(Fragment, null, renderList(unref(data), (product, index) => {
                      return openBlock(), createBlock(_component_rs_card, {
                        class: "p-5",
                        key: index
                      }, {
                        default: withCtx(() => [
                          createVNode("div", { class: "flex flex-col md:flex-row gap-4" }, [
                            createVNode("div", { class: "product-img flex items-center w-30 h-30" }, [
                              createVNode("img", {
                                class: "object-center",
                                src: product.images[0],
                                alt: ""
                              }, null, 8, ["src"])
                            ]),
                            createVNode("div", { class: "product-title flex-1 flex flex-col justify-between" }, [
                              createVNode("div", null, [
                                createVNode("h5", { class: "line-clamp-1" }, toDisplayString(product.name), 1),
                                createVNode("span", null, toDisplayString(product.sku), 1),
                                createVNode("br"),
                                createVNode("span", null, " Quantity: 1 ")
                              ]),
                              createVNode("div", { class: "product-price my-2" }, [
                                createVNode("span", { class: "text-xl font-semibold" }, "RM" + toDisplayString(formatPrice(product.price)), 1),
                                product.discountedPrice ? (openBlock(), createBlock("span", {
                                  key: 0,
                                  class: "text-base line-through text-secondary ml-0 md:ml-2 mt-1 block md:inline-block text-gray-400"
                                }, toDisplayString(product.currency) + toDisplayString(formatPrice(product.price)), 1)) : createCommentVNode("", true)
                              ])
                            ])
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
            _push2(`<div class="mt-7 px-10"${_scopeId}><span class="font-semibold"${_scopeId}>Address</span>`);
            _push2(ssrRenderComponent(_component_rs_card, { class: "mt-7 p-5 text-white !bg-primary-400" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<h6${_scopeId2}>Home</h6><p${_scopeId2}> 116, Jalan Tengku Badar, Kampung Raja Uda, 42000 Pelabuhan Klang, Selangor </p>`);
                } else {
                  return [
                    createVNode("h6", null, "Home"),
                    createVNode("p", null, " 116, Jalan Tengku Badar, Kampung Raja Uda, 42000 Pelabuhan Klang, Selangor ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_rs_card, { class: "mt-5 p-5" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<h6${_scopeId2}>Office</h6><p${_scopeId2}> 11, Jalan Tasik Selatan 3, Bandar Tasik Selatan, 57000 Kuala Lumpur, Wilayah Persekutuan Kuala Lumpur </p>`);
                } else {
                  return [
                    createVNode("h6", null, "Office"),
                    createVNode("p", null, " 11, Jalan Tasik Selatan 3, Bandar Tasik Selatan, 57000 Kuala Lumpur, Wilayah Persekutuan Kuala Lumpur ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></div><div class="py-7 bg-gray-50 dark:bg-slate-700 rounded-r-lg"${_scopeId}><div class="px-10"${_scopeId}><h5${_scopeId}>Payment Details</h5><p${_scopeId}>Enter your payment details below.</p></div><div class="form-detail mt-7"${_scopeId}><div class="text-base font-semibold bg-gray-200 dark:bg-slate-600 py-3 px-10 my-4"${_scopeId}> Customer Information </div><div class="form-customer px-10"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_FormKit, {
              type: "text",
              label: "Name",
              placeholder: "Enter your name"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_FormKit, {
              type: "email",
              label: "Email Address",
              placeholder: "Enter your email"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_FormKit, {
              type: "mask",
              label: "Phone Number",
              placeholder: "Enter your phone number",
              mask: "###########"
            }, null, _parent2, _scopeId));
            _push2(`</div><div class="text-base font-semibold bg-gray-200 dark:bg-slate-600 py-3 px-10 my-4"${_scopeId}> Card Details </div><div class="form-card px-10"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_FormKit, {
              type: "mask",
              label: "Card Number",
              placeholder: "**** **** **** ****",
              mask: "#### #### #### ####"
            }, null, _parent2, _scopeId));
            _push2(`<div class="grid grid-cols-2 gap-4"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_FormKit, {
              type: "mask",
              label: "Expiration Date",
              placeholder: "MM/YY",
              mask: "##/##"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_FormKit, {
              type: "mask",
              label: "Security Code",
              placeholder: "CVC",
              mask: "###"
            }, null, _parent2, _scopeId));
            _push2(`</div></div><div class="px-10"${_scopeId}><div class="subtotal flex justify-between"${_scopeId}><div class="font-semibold"${_scopeId}>Subtotal</div><div${_scopeId}>RM 3200.50</div></div><div class="discount flex justify-between my-2"${_scopeId}><div class="font-semibold"${_scopeId}>Discount (10%)</div><div${_scopeId}>RM 2,880.45</div></div><div class="total flex justify-between my-2"${_scopeId}><div class="font-semibold"${_scopeId}>Total</div><div${_scopeId}>RM 2,880.45</div></div>`);
            _push2(ssrRenderComponent(_component_rs_button, { class: "w-full mt-4" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`Pay RM 2,880.45`);
                } else {
                  return [
                    createTextVNode("Pay RM 2,880.45")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></div></div></div>`);
          } else {
            return [
              createVNode("div", { class: "grid grid-cols-1 md:grid-cols-2 gap-4" }, [
                createVNode("div", { class: "py-7 bg-white dark:bg-slate-800 rounded-l-lg" }, [
                  createVNode("div", { class: "px-10" }, [
                    createVNode("h5", null, "Summary Order"),
                    createVNode("p", null, "This is a list of items in the cart.")
                  ]),
                  createVNode(_component_SimpleBar, {
                    class: "mt-7 px-10",
                    style: { "height": "350px" }
                  }, {
                    default: withCtx(() => [
                      (openBlock(true), createBlock(Fragment, null, renderList(unref(data), (product, index) => {
                        return openBlock(), createBlock(_component_rs_card, {
                          class: "p-5",
                          key: index
                        }, {
                          default: withCtx(() => [
                            createVNode("div", { class: "flex flex-col md:flex-row gap-4" }, [
                              createVNode("div", { class: "product-img flex items-center w-30 h-30" }, [
                                createVNode("img", {
                                  class: "object-center",
                                  src: product.images[0],
                                  alt: ""
                                }, null, 8, ["src"])
                              ]),
                              createVNode("div", { class: "product-title flex-1 flex flex-col justify-between" }, [
                                createVNode("div", null, [
                                  createVNode("h5", { class: "line-clamp-1" }, toDisplayString(product.name), 1),
                                  createVNode("span", null, toDisplayString(product.sku), 1),
                                  createVNode("br"),
                                  createVNode("span", null, " Quantity: 1 ")
                                ]),
                                createVNode("div", { class: "product-price my-2" }, [
                                  createVNode("span", { class: "text-xl font-semibold" }, "RM" + toDisplayString(formatPrice(product.price)), 1),
                                  product.discountedPrice ? (openBlock(), createBlock("span", {
                                    key: 0,
                                    class: "text-base line-through text-secondary ml-0 md:ml-2 mt-1 block md:inline-block text-gray-400"
                                  }, toDisplayString(product.currency) + toDisplayString(formatPrice(product.price)), 1)) : createCommentVNode("", true)
                                ])
                              ])
                            ])
                          ]),
                          _: 2
                        }, 1024);
                      }), 128))
                    ]),
                    _: 1
                  }),
                  createVNode("div", { class: "mt-7 px-10" }, [
                    createVNode("span", { class: "font-semibold" }, "Address"),
                    createVNode(_component_rs_card, { class: "mt-7 p-5 text-white !bg-primary-400" }, {
                      default: withCtx(() => [
                        createVNode("h6", null, "Home"),
                        createVNode("p", null, " 116, Jalan Tengku Badar, Kampung Raja Uda, 42000 Pelabuhan Klang, Selangor ")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_rs_card, { class: "mt-5 p-5" }, {
                      default: withCtx(() => [
                        createVNode("h6", null, "Office"),
                        createVNode("p", null, " 11, Jalan Tasik Selatan 3, Bandar Tasik Selatan, 57000 Kuala Lumpur, Wilayah Persekutuan Kuala Lumpur ")
                      ]),
                      _: 1
                    })
                  ])
                ]),
                createVNode("div", { class: "py-7 bg-gray-50 dark:bg-slate-700 rounded-r-lg" }, [
                  createVNode("div", { class: "px-10" }, [
                    createVNode("h5", null, "Payment Details"),
                    createVNode("p", null, "Enter your payment details below.")
                  ]),
                  createVNode("div", { class: "form-detail mt-7" }, [
                    createVNode("div", { class: "text-base font-semibold bg-gray-200 dark:bg-slate-600 py-3 px-10 my-4" }, " Customer Information "),
                    createVNode("div", { class: "form-customer px-10" }, [
                      createVNode(_component_FormKit, {
                        type: "text",
                        label: "Name",
                        placeholder: "Enter your name"
                      }),
                      createVNode(_component_FormKit, {
                        type: "email",
                        label: "Email Address",
                        placeholder: "Enter your email"
                      }),
                      createVNode(_component_FormKit, {
                        type: "mask",
                        label: "Phone Number",
                        placeholder: "Enter your phone number",
                        mask: "###########"
                      })
                    ]),
                    createVNode("div", { class: "text-base font-semibold bg-gray-200 dark:bg-slate-600 py-3 px-10 my-4" }, " Card Details "),
                    createVNode("div", { class: "form-card px-10" }, [
                      createVNode(_component_FormKit, {
                        type: "mask",
                        label: "Card Number",
                        placeholder: "**** **** **** ****",
                        mask: "#### #### #### ####"
                      }),
                      createVNode("div", { class: "grid grid-cols-2 gap-4" }, [
                        createVNode(_component_FormKit, {
                          type: "mask",
                          label: "Expiration Date",
                          placeholder: "MM/YY",
                          mask: "##/##"
                        }),
                        createVNode(_component_FormKit, {
                          type: "mask",
                          label: "Security Code",
                          placeholder: "CVC",
                          mask: "###"
                        })
                      ])
                    ]),
                    createVNode("div", { class: "px-10" }, [
                      createVNode("div", { class: "subtotal flex justify-between" }, [
                        createVNode("div", { class: "font-semibold" }, "Subtotal"),
                        createVNode("div", null, "RM 3200.50")
                      ]),
                      createVNode("div", { class: "discount flex justify-between my-2" }, [
                        createVNode("div", { class: "font-semibold" }, "Discount (10%)"),
                        createVNode("div", null, "RM 2,880.45")
                      ]),
                      createVNode("div", { class: "total flex justify-between my-2" }, [
                        createVNode("div", { class: "font-semibold" }, "Total"),
                        createVNode("div", null, "RM 2,880.45")
                      ]),
                      createVNode(_component_rs_button, { class: "w-full mt-4" }, {
                        default: withCtx(() => [
                          createTextVNode("Pay RM 2,880.45")
                        ]),
                        _: 1
                      })
                    ])
                  ])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/Kitchensink/ecommerce/checkout.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=checkout.aba1e6da.mjs.map
