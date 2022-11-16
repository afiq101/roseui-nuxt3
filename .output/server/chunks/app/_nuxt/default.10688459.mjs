import { unref, withCtx, renderSlot, useSSRContext, mergeProps, watch, ref, resolveComponent, createTextVNode, createVNode, toDisplayString, openBlock, createBlock, createCommentVNode, computed } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderSlot, ssrRenderAttr, ssrInterpolate, ssrRenderList, ssrRenderClass } from 'vue/server-renderer';
import { x as defineStore, i as useLayoutStore, _ as _export_sfc$1, z as useState, e as __nuxt_component_1$1, u as useRoute, a as __nuxt_component_0$2 } from '../server.mjs';
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
import 'simplebar-vue3';
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

const useThemeStore = defineStore({
  id: "theme",
  state: () => ({
    theme: "light",
    layoutType: "vertical"
  }),
  actions: {
    setTheme(theme) {
      this.theme = theme;
    },
    setLayoutType(layoutType) {
      this.layoutType = layoutType;
    }
  }
});
const useColorMode = () => {
  return useState("color-mode").value;
};
const _imports_0 = "" + globalThis.__buildAssetsURL("logo.af80a588.png");
const _imports_1 = "" + globalThis.__buildAssetsURL("logo-white.44bb277a.png");
const _sfc_main$7 = {
  __name: "Header",
  __ssrInlineRender: true,
  emits: ["toggleMenu"],
  setup(__props, { emit }) {
    const isVertical = ref(true);
    const isDesktop = ref(true);
    useColorMode();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Icon = __nuxt_component_1$1;
      const _component_VTooltip = resolveComponent("VTooltip");
      const _component_VDropdown = resolveComponent("VDropdown");
      const _component_SimpleBar = resolveComponent("SimpleBar");
      _push(`<!--[--><div class="w-header z-20 bg-white dark:bg-slate-800 fixed top-0 right-0 px-5 py-3 duration-300 shadow-md shadow-slate-200 dark:shadow-slate-900"><div class="flex items-stretch justify-between">`);
      if (unref(isVertical)) {
        _push(`<div class="flex"><span class="flex items-center justify-center"><button class="icon-btn h-10 w-10 rounded-full">`);
        _push(ssrRenderComponent(_component_Icon, {
          name: "ic:round-menu",
          class: ""
        }, null, _parent));
        _push(`</button></span></div>`);
      } else {
        _push(`<div class="flex"><div class="flex flex-auto gap-3 justify-center items-center"><img class="h-10 w-10 block dark:hidden"${ssrRenderAttr("src", _imports_0)} alt=""><img class="h-10 w-10 hidden dark:block"${ssrRenderAttr("src", _imports_1)} alt="">`);
        if (unref(isDesktop)) {
          _push(`<span class="text-xl font-semibold text-primary-800 dark:text-white">Rose UI</span>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div></div>`);
      }
      _push(`<div class="flex gap-2 item-center justify-items-end">`);
      _push(ssrRenderComponent(_component_VTooltip, null, {
        popper: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` 10 unread notification `);
          } else {
            return [
              createTextVNode(" 10 unread notification ")
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_VDropdown, {
              placement: "bottom-end",
              distance: "13",
              name: "notification"
            }, {
              popper: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<ul class="header-dropdown w-full md:w-80"${_scopeId2}><li class="d-head flex items-center justify-between py-2 px-4"${_scopeId2}><span class="font-semibold"${_scopeId2}>Notification</span><div class="flex items-center text-primary-400 cursor-pointer hover:underline"${_scopeId2}><a class="ml-2"${_scopeId2}>View All</a></div></li>`);
                  _push3(ssrRenderComponent(_component_SimpleBar, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<li${_scopeId3}><div class="bg-slate-100 dark:bg-slate-700 py-2 px-4"${_scopeId3}> Today </div><a class="py-2 px-4 block"${_scopeId3}><div class="flex items-center"${_scopeId3}>`);
                        _push4(ssrRenderComponent(_component_Icon, {
                          name: "ic:outline-circle",
                          class: "text-primary-400 flex-none"
                        }, null, _parent4, _scopeId3));
                        _push4(`<span class="mx-2"${_scopeId3}>Terdapat Satu Pembayaran yang berlaku menggunakan bil Kuih Raya Cik Kiah</span><div class="w-12 h-12 rounded-full ml-auto flex-none"${_scopeId3}><img class="rounded-full" src="https://ui-avatars.com/api/?name=Raziq Danish" alt=""${_scopeId3}></div></div></a><a class="py-2 px-4 block"${_scopeId3}><div class="flex items-center"${_scopeId3}>`);
                        _push4(ssrRenderComponent(_component_Icon, {
                          name: "ic:outline-circle",
                          class: "text-primary-400 flex-none"
                        }, null, _parent4, _scopeId3));
                        _push4(`<span class="mx-2"${_scopeId3}>Terdapat Satu Pembayaran yang berlaku menggunakan bil Mercun</span><div class="w-12 h-12 rounded-full ml-auto flex-none"${_scopeId3}><img class="rounded-full" src="https://ui-avatars.com/api/?name=Iqmal Rizal" alt=""${_scopeId3}></div></div></a></li>`);
                      } else {
                        return [
                          createVNode("li", null, [
                            createVNode("div", { class: "bg-slate-100 dark:bg-slate-700 py-2 px-4" }, " Today "),
                            createVNode("a", { class: "py-2 px-4 block" }, [
                              createVNode("div", { class: "flex items-center" }, [
                                createVNode(_component_Icon, {
                                  name: "ic:outline-circle",
                                  class: "text-primary-400 flex-none"
                                }),
                                createVNode("span", { class: "mx-2" }, "Terdapat Satu Pembayaran yang berlaku menggunakan bil Kuih Raya Cik Kiah"),
                                createVNode("div", { class: "w-12 h-12 rounded-full ml-auto flex-none" }, [
                                  createVNode("img", {
                                    class: "rounded-full",
                                    src: "https://ui-avatars.com/api/?name=Raziq Danish",
                                    alt: ""
                                  })
                                ])
                              ])
                            ]),
                            createVNode("a", { class: "py-2 px-4 block" }, [
                              createVNode("div", { class: "flex items-center" }, [
                                createVNode(_component_Icon, {
                                  name: "ic:outline-circle",
                                  class: "text-primary-400 flex-none"
                                }),
                                createVNode("span", { class: "mx-2" }, "Terdapat Satu Pembayaran yang berlaku menggunakan bil Mercun"),
                                createVNode("div", { class: "w-12 h-12 rounded-full ml-auto flex-none" }, [
                                  createVNode("img", {
                                    class: "rounded-full",
                                    src: "https://ui-avatars.com/api/?name=Iqmal Rizal",
                                    alt: ""
                                  })
                                ])
                              ])
                            ])
                          ])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`</ul>`);
                } else {
                  return [
                    createVNode("ul", { class: "header-dropdown w-full md:w-80" }, [
                      createVNode("li", { class: "d-head flex items-center justify-between py-2 px-4" }, [
                        createVNode("span", { class: "font-semibold" }, "Notification"),
                        createVNode("div", { class: "flex items-center text-primary-400 cursor-pointer hover:underline" }, [
                          createVNode("a", { class: "ml-2" }, "View All")
                        ])
                      ]),
                      createVNode(_component_SimpleBar, null, {
                        default: withCtx(() => [
                          createVNode("li", null, [
                            createVNode("div", { class: "bg-slate-100 dark:bg-slate-700 py-2 px-4" }, " Today "),
                            createVNode("a", { class: "py-2 px-4 block" }, [
                              createVNode("div", { class: "flex items-center" }, [
                                createVNode(_component_Icon, {
                                  name: "ic:outline-circle",
                                  class: "text-primary-400 flex-none"
                                }),
                                createVNode("span", { class: "mx-2" }, "Terdapat Satu Pembayaran yang berlaku menggunakan bil Kuih Raya Cik Kiah"),
                                createVNode("div", { class: "w-12 h-12 rounded-full ml-auto flex-none" }, [
                                  createVNode("img", {
                                    class: "rounded-full",
                                    src: "https://ui-avatars.com/api/?name=Raziq Danish",
                                    alt: ""
                                  })
                                ])
                              ])
                            ]),
                            createVNode("a", { class: "py-2 px-4 block" }, [
                              createVNode("div", { class: "flex items-center" }, [
                                createVNode(_component_Icon, {
                                  name: "ic:outline-circle",
                                  class: "text-primary-400 flex-none"
                                }),
                                createVNode("span", { class: "mx-2" }, "Terdapat Satu Pembayaran yang berlaku menggunakan bil Mercun"),
                                createVNode("div", { class: "w-12 h-12 rounded-full ml-auto flex-none" }, [
                                  createVNode("img", {
                                    class: "rounded-full",
                                    src: "https://ui-avatars.com/api/?name=Iqmal Rizal",
                                    alt: ""
                                  })
                                ])
                              ])
                            ])
                          ])
                        ]),
                        _: 1
                      })
                    ])
                  ];
                }
              }),
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<button class="relative icon-btn h-10 w-10 rounded-full"${_scopeId2}><span class="w-3 h-3 absolute top-1 right-2 rounded-full bg-primary-400"${_scopeId2}></span>`);
                  _push3(ssrRenderComponent(_component_Icon, {
                    name: "ic:round-notifications-none",
                    class: ""
                  }, null, _parent3, _scopeId2));
                  _push3(`</button>`);
                } else {
                  return [
                    createVNode("button", { class: "relative icon-btn h-10 w-10 rounded-full" }, [
                      createVNode("span", { class: "w-3 h-3 absolute top-1 right-2 rounded-full bg-primary-400" }),
                      createVNode(_component_Icon, {
                        name: "ic:round-notifications-none",
                        class: ""
                      })
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_VDropdown, {
                placement: "bottom-end",
                distance: "13",
                name: "notification"
              }, {
                popper: withCtx(() => [
                  createVNode("ul", { class: "header-dropdown w-full md:w-80" }, [
                    createVNode("li", { class: "d-head flex items-center justify-between py-2 px-4" }, [
                      createVNode("span", { class: "font-semibold" }, "Notification"),
                      createVNode("div", { class: "flex items-center text-primary-400 cursor-pointer hover:underline" }, [
                        createVNode("a", { class: "ml-2" }, "View All")
                      ])
                    ]),
                    createVNode(_component_SimpleBar, null, {
                      default: withCtx(() => [
                        createVNode("li", null, [
                          createVNode("div", { class: "bg-slate-100 dark:bg-slate-700 py-2 px-4" }, " Today "),
                          createVNode("a", { class: "py-2 px-4 block" }, [
                            createVNode("div", { class: "flex items-center" }, [
                              createVNode(_component_Icon, {
                                name: "ic:outline-circle",
                                class: "text-primary-400 flex-none"
                              }),
                              createVNode("span", { class: "mx-2" }, "Terdapat Satu Pembayaran yang berlaku menggunakan bil Kuih Raya Cik Kiah"),
                              createVNode("div", { class: "w-12 h-12 rounded-full ml-auto flex-none" }, [
                                createVNode("img", {
                                  class: "rounded-full",
                                  src: "https://ui-avatars.com/api/?name=Raziq Danish",
                                  alt: ""
                                })
                              ])
                            ])
                          ]),
                          createVNode("a", { class: "py-2 px-4 block" }, [
                            createVNode("div", { class: "flex items-center" }, [
                              createVNode(_component_Icon, {
                                name: "ic:outline-circle",
                                class: "text-primary-400 flex-none"
                              }),
                              createVNode("span", { class: "mx-2" }, "Terdapat Satu Pembayaran yang berlaku menggunakan bil Mercun"),
                              createVNode("div", { class: "w-12 h-12 rounded-full ml-auto flex-none" }, [
                                createVNode("img", {
                                  class: "rounded-full",
                                  src: "https://ui-avatars.com/api/?name=Iqmal Rizal",
                                  alt: ""
                                })
                              ])
                            ])
                          ])
                        ])
                      ]),
                      _: 1
                    })
                  ])
                ]),
                default: withCtx(() => [
                  createVNode("button", { class: "relative icon-btn h-10 w-10 rounded-full" }, [
                    createVNode("span", { class: "w-3 h-3 absolute top-1 right-2 rounded-full bg-primary-400" }),
                    createVNode(_component_Icon, {
                      name: "ic:round-notifications-none",
                      class: ""
                    })
                  ])
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_VDropdown, {
        placement: "bottom-end",
        distance: "13",
        name: "profile"
      }, {
        popper: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<ul class="header-dropdown w-full md:w-52"${_scopeId}><li${_scopeId}><a class="flex items-center cursor-pointer py-2 px-4 hover:bg-slate-200 hover:dark:bg-slate-700"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_Icon, {
              name: "ic:outline-view-sidebar",
              class: "mr-2"
            }, null, _parent2, _scopeId));
            _push2(` ${ssrInterpolate(unref(isVertical) ? "Horizontal Layout" : "Vertical Layout")}</a></li><li${_scopeId}><a class="flex items-center cursor-pointer py-2 px-4 hover:bg-slate-200 hover:dark:bg-slate-700"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_Icon, {
              name: "ic:outline-account-circle",
              class: "mr-2"
            }, null, _parent2, _scopeId));
            _push2(` Account </a></li><li${_scopeId}><a class="flex items-center cursor-pointer py-2 px-4 hover:bg-slate-200 hover:dark:bg-slate-700"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_Icon, {
              name: "ic:outline-settings",
              class: "mr-2"
            }, null, _parent2, _scopeId));
            _push2(` Setting </a></li><li${_scopeId}><a class="flex items-center cursor-pointer py-2 px-4 hover:bg-slate-200 hover:dark:bg-slate-700"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_Icon, {
              name: "ic:outline-logout",
              class: "mr-2"
            }, null, _parent2, _scopeId));
            _push2(` Logout </a></li></ul>`);
          } else {
            return [
              createVNode("ul", { class: "header-dropdown w-full md:w-52" }, [
                createVNode("li", null, [
                  createVNode("a", { class: "flex items-center cursor-pointer py-2 px-4 hover:bg-slate-200 hover:dark:bg-slate-700" }, [
                    createVNode(_component_Icon, {
                      name: "ic:outline-view-sidebar",
                      class: "mr-2"
                    }),
                    createTextVNode(" " + toDisplayString(unref(isVertical) ? "Horizontal Layout" : "Vertical Layout"), 1)
                  ])
                ]),
                createVNode("li", null, [
                  createVNode("a", { class: "flex items-center cursor-pointer py-2 px-4 hover:bg-slate-200 hover:dark:bg-slate-700" }, [
                    createVNode(_component_Icon, {
                      name: "ic:outline-account-circle",
                      class: "mr-2"
                    }),
                    createTextVNode(" Account ")
                  ])
                ]),
                createVNode("li", null, [
                  createVNode("a", { class: "flex items-center cursor-pointer py-2 px-4 hover:bg-slate-200 hover:dark:bg-slate-700" }, [
                    createVNode(_component_Icon, {
                      name: "ic:outline-settings",
                      class: "mr-2"
                    }),
                    createTextVNode(" Setting ")
                  ])
                ]),
                createVNode("li", null, [
                  createVNode("a", { class: "flex items-center cursor-pointer py-2 px-4 hover:bg-slate-200 hover:dark:bg-slate-700" }, [
                    createVNode(_component_Icon, {
                      name: "ic:outline-logout",
                      class: "mr-2"
                    }),
                    createTextVNode(" Logout ")
                  ])
                ])
              ])
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<button class="icon-btn px-2 rounded-lg border border-white md:border-gray-200 dark:border-gray-700"${_scopeId}><img class="w-8 h-8 object-cover rounded-full" src="https://ui-avatars.com/api/?name=John Doe"${_scopeId}>`);
            if (unref(isDesktop)) {
              _push2(`<div class="grid grid-cols-1 text-left ml-3 flex-none"${_scopeId}><p class="font-semibold text-sm truncate w-24 mb-0"${_scopeId}>John Doe</p><span class="font-medium text-xs truncate w-24"${_scopeId}>RM 10,000.00</span></div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(ssrRenderComponent(_component_Icon, {
              name: "ic:outline-keyboard-arrow-down",
              class: "ml-3"
            }, null, _parent2, _scopeId));
            _push2(`</button>`);
          } else {
            return [
              createVNode("button", { class: "icon-btn px-2 rounded-lg border border-white md:border-gray-200 dark:border-gray-700" }, [
                createVNode("img", {
                  class: "w-8 h-8 object-cover rounded-full",
                  src: "https://ui-avatars.com/api/?name=John Doe"
                }),
                unref(isDesktop) ? (openBlock(), createBlock("div", {
                  key: 0,
                  class: "grid grid-cols-1 text-left ml-3 flex-none"
                }, [
                  createVNode("p", { class: "font-semibold text-sm truncate w-24 mb-0" }, "John Doe"),
                  createVNode("span", { class: "font-medium text-xs truncate w-24" }, "RM 10,000.00")
                ])) : createCommentVNode("", true),
                createVNode(_component_Icon, {
                  name: "ic:outline-keyboard-arrow-down",
                  class: "ml-3"
                })
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div><div tabindex="0" class="w-header-search bg-white dark:bg-slate-800 px-4 z-40 duration-300 shadow-md shadow-slate-200 dark:shadow-slate-900 -top-20 focus-within:top-0 right-0">`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "ic:outline-search",
        class: ""
      }, null, _parent));
      _push(`<input id="header-search" type="text" class="w-full ml-2 px-2 py-3 appearance-none text-md rounded-lg focus:outline-none dark:bg-slate-800" name="Search" placeholder="Search..."></div><!--]-->`);
    };
  }
};
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/layouts/Header.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const Menu = [
  {
    child: [
      {
        title: "Utama",
        path: "/dashboard",
        icon: "ic:outline-dashboard",
        child: []
      }
    ]
  },
  {
    header: "General",
    description: "Menu Utama",
    child: [
      {
        title: "Wakaf",
        icon: "ph:handshake",
        path: "/wakaf"
      },
      {
        title: "Pengguna",
        icon: "ph:users-three",
        path: "/pengguna"
      },
      {
        title: "Institusi",
        icon: "fluent:organization-24-regular",
        path: "/institusi"
      },
      {
        title: "Kredit",
        icon: "ph:wallet",
        child: [
          {
            title: "Akaun",
            icon: "ph:user",
            path: "/kredit"
          },
          {
            title: "Pengguna",
            icon: "ph:users-three",
            path: "/kredit/akaun-kredit-pengguna"
          },
          {
            title: "Institusi",
            icon: "fluent:organization-24-regular",
            path: "/kredit/akaun-kredit-institusi"
          }
        ]
      },
      {
        title: "Transaksi",
        icon: "ph:list-dashes",
        path: "/transaksi"
      },
      {
        title: "Kewangan",
        icon: "icon-park-outline:financing-one",
        path: "/kewangan"
      },
      {
        title: "Agihan",
        icon: "majesticons:money-hand-line",
        path: "/agihan"
      },
      {
        title: "Kempen",
        icon: "mdi:advertisements",
        path: "/kempen"
      },
      {
        title: "Laporan",
        icon: "fluent-mdl2:report-lock",
        path: "/laporan"
      }
    ]
  },
  {
    header: "Tetapan",
    description: "Aplikasi & Sistem",
    child: [
      {
        title: "Aplikasi",
        icon: "ph:device-mobile",
        path: "/tetapan/aplikasi"
      },
      {
        title: "Sistem",
        icon: "ph:gear",
        path: "/tetapan/sistem"
      }
    ]
  }
];
const _sfc_main$6 = {
  __name: "ItemChild",
  __ssrInlineRender: true,
  props: {
    items: {
      type: Array,
      required: true
    },
    indent: {
      type: Number,
      default: 0.1
    }
  },
  emits: ["openMenu"],
  setup(__props, { emit }) {
    const props = __props;
    const route = useRoute();
    const themeStore = useThemeStore();
    const theme = themeStore.theme;
    const indent = ref(props.indent);
    const menuItem = props.items ? props.items : [];
    function openMenu(event) {
      emit("openMenu", event);
    }
    function activeMenu(routePath) {
      return route.path == routePath ? ` shadow-lg
            shadow-primary-800/30
            dark:shadow-primary-500/10
            text-white
            bg-primary-800
            active-menu` : `transition-all	duration-300 text-primary-800 hover:ml-4`;
    }
    const indentStyle = computed(() => {
      if (theme == "dark")
        return { "background-color": `rgba(18, 24, 37, ${indent.value})` };
      else
        return { "background-color": `rgba(226, 232, 240, ${indent.value})` };
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$2;
      const _component_Icon = __nuxt_component_1$1;
      _push(`<ul${ssrRenderAttrs(mergeProps({
        class: "menu-content hide transition-all duration-300",
        style: unref(indentStyle)
      }, _attrs))}><!--[-->`);
      ssrRenderList(unref(menuItem), (item, index) => {
        _push(`<li>`);
        if (item.child === void 0 || item.child && item.child.length !== 0) {
          _push(ssrRenderComponent(_component_NuxtLink, {
            class: ["flex items-center px-6 py-3 mx-3 rounded-lg cursor-pointer", activeMenu(item.path)],
            to: item.path
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                if (item.icon) {
                  _push2(ssrRenderComponent(_component_Icon, {
                    name: "ci:dot-04-l",
                    size: "14"
                  }, null, _parent2, _scopeId));
                } else {
                  _push2(`<!---->`);
                }
                _push2(`<span class="mx-4 font-normal text-xs active:text-white"${_scopeId}>${ssrInterpolate(item.title)}</span>`);
                if (item.child && item.child.length > 0) {
                  _push2(ssrRenderComponent(_component_Icon, {
                    class: "ml-auto side-menu-arrow",
                    name: "material-symbols:chevron-right-rounded",
                    size: "18"
                  }, null, _parent2, _scopeId));
                } else {
                  _push2(`<!---->`);
                }
              } else {
                return [
                  item.icon ? (openBlock(), createBlock(_component_Icon, {
                    key: 0,
                    name: "ci:dot-04-l",
                    size: "14"
                  })) : createCommentVNode("", true),
                  createVNode("span", { class: "mx-4 font-normal text-xs active:text-white" }, toDisplayString(item.title), 1),
                  item.child && item.child.length > 0 ? (openBlock(), createBlock(_component_Icon, {
                    key: 1,
                    class: "ml-auto side-menu-arrow",
                    name: "material-symbols:chevron-right-rounded",
                    size: "18"
                  })) : createCommentVNode("", true)
                ];
              }
            }),
            _: 2
          }, _parent));
        } else {
          _push(`<a class="${ssrRenderClass([activeMenu(item.path), "flex items-center px-4 py-3 mx-3 rounded-lg cursor-pointer"])}"><span class="mx-3 font-normal">${ssrInterpolate(item.title)}</span>`);
          if (item.child && item.child.length > 0) {
            _push(ssrRenderComponent(_component_Icon, {
              class: "ml-auto side-menu-arrow",
              name: "material-symbols:chevron-right-rounded",
              size: "18"
            }, null, _parent));
          } else {
            _push(`<!---->`);
          }
          _push(`</a>`);
        }
        if (item.child) {
          _push(ssrRenderComponent(_sfc_main$6, {
            items: item.child,
            indent: unref(indent) + 0.1,
            onOpenMenu: openMenu,
            onActiveMenu: activeMenu
          }, null, _parent));
        } else {
          _push(`<!---->`);
        }
        _push(`</li>`);
      });
      _push(`<!--]--></ul>`);
    };
  }
};
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/layouts/sidemenu/ItemChild.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const _sfc_main$5 = {
  __name: "Item",
  __ssrInlineRender: true,
  props: {
    items: {
      type: Array,
      default: () => [],
      required: true
    }
  },
  setup(__props) {
    const props = __props;
    const route = useRoute();
    const menuItem = props.items ? props.items : [];
    function openMenu(event) {
      const target = event.currentTarget;
      try {
        target.querySelector("a").classList.toggle("nav-open");
        target.querySelector("ul").classList.toggle("hide");
      } catch (e) {
        return;
      }
    }
    function activeMenu(routePath) {
      return route.path == routePath ? ` shadow-lg
            shadow-primary-800/30
            dark:shadow-primary-500/10
            text-white
            bg-primary-800
            active-menu` : `transition-all	duration-300 hover:ml-4`;
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$2;
      const _component_Icon = __nuxt_component_1$1;
      _push(`<!--[-->`);
      ssrRenderList(unref(menuItem), (item, index) => {
        _push(`<div>`);
        if (item.header) {
          _push(`<div class="text-left font-normal text-xs mx-6 mt-5 mb-2"><span class="uppercase text-primary-800 dark:text-primary-400">${ssrInterpolate(item.header ? item.header : "")}</span><p class="text-gray-500 dark:text-secondary">${ssrInterpolate(item.description ? item.description : "")}</p></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<ul class="navigation-menu"><!--[-->`);
        ssrRenderList(item.child, (item2, index2) => {
          _push(`<li class="navigation-item">`);
          if (item2.child === void 0 || item2.child && item2.child.length === 0) {
            _push(ssrRenderComponent(_component_NuxtLink, {
              class: ["flex items-center px-4 py-3 mx-3 rounded-lg cursor-pointer", activeMenu(item2.path)],
              to: item2.path
            }, {
              default: withCtx((_, _push2, _parent2, _scopeId) => {
                if (_push2) {
                  if (item2.icon) {
                    _push2(ssrRenderComponent(_component_Icon, {
                      name: item2.icon,
                      size: "18"
                    }, null, _parent2, _scopeId));
                  } else {
                    _push2(ssrRenderComponent(_component_Icon, {
                      name: "material-symbols:file-copy-outline-rounded",
                      size: "18"
                    }, null, _parent2, _scopeId));
                  }
                  _push2(`<span class="mx-3 font-normal"${_scopeId}>${ssrInterpolate(item2.title)}</span>`);
                  if (item2.child && item2.child.length > 0) {
                    _push2(ssrRenderComponent(_component_Icon, {
                      class: "ml-auto side-menu-arrow",
                      name: "material-symbols:chevron-right-rounded",
                      size: "18"
                    }, null, _parent2, _scopeId));
                  } else {
                    _push2(`<!---->`);
                  }
                } else {
                  return [
                    item2.icon ? (openBlock(), createBlock(_component_Icon, {
                      key: 0,
                      name: item2.icon,
                      size: "18"
                    }, null, 8, ["name"])) : (openBlock(), createBlock(_component_Icon, {
                      key: 1,
                      name: "material-symbols:file-copy-outline-rounded",
                      size: "18"
                    })),
                    createVNode("span", { class: "mx-3 font-normal" }, toDisplayString(item2.title), 1),
                    item2.child && item2.child.length > 0 ? (openBlock(), createBlock(_component_Icon, {
                      key: 2,
                      class: "ml-auto side-menu-arrow",
                      name: "material-symbols:chevron-right-rounded",
                      size: "18"
                    })) : createCommentVNode("", true)
                  ];
                }
              }),
              _: 2
            }, _parent));
          } else {
            _push(`<a class="${ssrRenderClass([activeMenu(item2.path), "flex items-center px-4 py-3 mx-3 rounded-lg cursor-pointer"])}">`);
            if (item2.icon) {
              _push(ssrRenderComponent(_component_Icon, {
                name: item2.icon,
                size: "18"
              }, null, _parent));
            } else {
              _push(ssrRenderComponent(_component_Icon, {
                name: "material-symbols:file-copy-outline-rounded",
                size: "18"
              }, null, _parent));
            }
            _push(`<span class="mx-3 font-normal">${ssrInterpolate(item2.title)}</span>`);
            if (item2.child && item2.child.length > 0) {
              _push(ssrRenderComponent(_component_Icon, {
                class: "ml-auto side-menu-arrow",
                name: "material-symbols:chevron-right-rounded",
                size: "18"
              }, null, _parent));
            } else {
              _push(`<!---->`);
            }
            _push(`</a>`);
          }
          if (item2.child) {
            _push(ssrRenderComponent(_sfc_main$6, {
              items: item2.child,
              onOpenMenu: openMenu,
              onActiveMenu: activeMenu
            }, null, _parent));
          } else {
            _push(`<!---->`);
          }
          _push(`</li>`);
        });
        _push(`<!--]--></ul></div>`);
      });
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/layouts/sidemenu/Item.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const _sfc_main$4 = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const menuItem = Menu;
    return (_ctx, _push, _parent, _attrs) => {
      const _component_SimpleBar = resolveComponent("SimpleBar");
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "vertical-menu bg-white dark:bg-slate-800 text-base h-screen fixed w-64 top-0 z-50 duration-300 border-l-0 shadow-md shadow-slate-200 dark:shadow-slate-900" }, _attrs))}><div class="py-2 px-4"><div class="flex flex-auto gap-3 justify-center items-center"><span class="text-xl font-semibold text-primary-800 dark:text-white">Biz Amal</span></div></div><div class="flex flex-col justify-between my-6">`);
      _push(ssrRenderComponent(_component_SimpleBar, { style: { "max-height": "87vh" } }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_sfc_main$5, { items: unref(menuItem) }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_sfc_main$5, { items: unref(menuItem) }, null, 8, ["items"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div>`);
    };
  }
};
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/layouts/sidemenu/index.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const _sfc_main$3 = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const { width } = useWindowSize();
    const layoutStore = useLayoutStore();
    const mobileWidth = layoutStore.mobileWidth;
    watch(
      () => [width.value],
      ([width2]) => {
        if (width2 <= mobileWidth) {
          document.querySelector(".v-layout").classList.add("menu-hide");
          document.getElementsByClassName("menu-overlay")[0].classList.add("hide");
        } else
          document.querySelector(".v-layout").classList.remove("menu-hide");
      }
    );
    function toggleMenu(event) {
      document.querySelector(".v-layout").classList.toggle("menu-hide");
      document.getElementsByClassName("menu-overlay")[0].classList.toggle("hide");
    }
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_sfc_main$7, { onToggleMenu: toggleMenu }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$4, null, null, _parent));
      _push(`<div class="content-page duration-300">`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</div><div class="menu-overlay"></div><!--]-->`);
    };
  }
};
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/layouts/vertical/index.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const _sfc_main$2 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(_attrs)}></div>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/layouts/horizontal/index.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const RSHorizontal = /* @__PURE__ */ _export_sfc$1(_sfc_main$2, [["ssrRender", _sfc_ssrRender]]);
const _sfc_main$1 = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const themeStore = useThemeStore();
    const layoutType = themeStore.layoutType;
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "layout-wrapper" }, _attrs))}>`);
      if (unref(layoutType) === "vertical") {
        _push(`<div class="v-layout h-100">`);
        _push(ssrRenderComponent(_sfc_main$3, null, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "default")
              ];
            }
          }),
          _: 3
        }, _parent));
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      if (unref(layoutType) === "horizontal") {
        _push(`<div class="h-layout h-100">`);
        _push(ssrRenderComponent(RSHorizontal, null, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "default")
              ];
            }
          }),
          _: 3
        }, _parent));
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/layouts/index.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = {
  __name: "default",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(unref(_sfc_main$1), null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "default")
            ];
          }
        }),
        _: 3
      }, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/default.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=default.10688459.mjs.map
