import { c as _sfc_main$q, b as __nuxt_component_1$2, e as __nuxt_component_1$1 } from '../server.mjs';
import { resolveComponent, withCtx, createVNode, createTextVNode, openBlock, createBlock, Fragment, renderList, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrRenderAttr } from 'vue/server-renderer';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
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
  __name: "carousel",
  __ssrInlineRender: true,
  setup(__props) {
    const onSwiper = (swiper) => {
    };
    const onSlideChange = () => {
    };
    const modules = [Navigation, Pagination, Scrollbar, A11y];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_LayoutsBreadcrumb = _sfc_main$q;
      const _component_rs_card = __nuxt_component_1$2;
      const _component_Icon = __nuxt_component_1$1;
      const _component_swiper = resolveComponent("swiper");
      const _component_swiper_slide = resolveComponent("swiper-slide");
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
            _push2(`<p class="mb-4"${_scopeId}> This template use <a href="https://swiperjs.com/vue" target="_blank" class="hover:underline text-primary-400"${_scopeId}>Swiper JS</a> which is a Vue component that allows you to create a carousel. </p>`);
          } else {
            return [
              createVNode("p", { class: "mb-4" }, [
                createTextVNode(" This template use "),
                createVNode("a", {
                  href: "https://swiperjs.com/vue",
                  target: "_blank",
                  class: "hover:underline text-primary-400"
                }, "Swiper JS"),
                createTextVNode(" which is a Vue component that allows you to create a carousel. ")
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_rs_card, null, {
        header: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Default (Horizontal)`);
          } else {
            return [
              createTextVNode(" Default (Horizontal)")
            ];
          }
        }),
        body: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_swiper, {
              modules,
              "slides-per-view": 1,
              centeredSlides: true,
              pagination: { clickable: true },
              onSwiper,
              onSlideChange,
              navigation: ""
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<!--[-->`);
                  ssrRenderList(10, (n) => {
                    _push3(ssrRenderComponent(_component_swiper_slide, { key: n }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`<div class="w-full flex justify-center items-center"${_scopeId3}><img${ssrRenderAttr("src", "https://picsum.photos/1024/600?random=" + n)} class="object-contain w-full md:w-1/2"${_scopeId3}></div>`);
                        } else {
                          return [
                            createVNode("div", { class: "w-full flex justify-center items-center" }, [
                              createVNode("img", {
                                src: "https://picsum.photos/1024/600?random=" + n,
                                class: "object-contain w-full md:w-1/2"
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
                    (openBlock(), createBlock(Fragment, null, renderList(10, (n) => {
                      return createVNode(_component_swiper_slide, { key: n }, {
                        default: withCtx(() => [
                          createVNode("div", { class: "w-full flex justify-center items-center" }, [
                            createVNode("img", {
                              src: "https://picsum.photos/1024/600?random=" + n,
                              class: "object-contain w-full md:w-1/2"
                            }, null, 8, ["src"])
                          ])
                        ]),
                        _: 2
                      }, 1024);
                    }), 64))
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_swiper, {
                modules,
                "slides-per-view": 1,
                centeredSlides: true,
                pagination: { clickable: true },
                onSwiper,
                onSlideChange,
                navigation: ""
              }, {
                default: withCtx(() => [
                  (openBlock(), createBlock(Fragment, null, renderList(10, (n) => {
                    return createVNode(_component_swiper_slide, { key: n }, {
                      default: withCtx(() => [
                        createVNode("div", { class: "w-full flex justify-center items-center" }, [
                          createVNode("img", {
                            src: "https://picsum.photos/1024/600?random=" + n,
                            class: "object-contain w-full md:w-1/2"
                          }, null, 8, ["src"])
                        ])
                      ]),
                      _: 2
                    }, 1024);
                  }), 64))
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/Kitchensink/ui/component/carousel.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=carousel.081d645a.mjs.map
