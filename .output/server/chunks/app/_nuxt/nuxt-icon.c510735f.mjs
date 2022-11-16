import { c as _sfc_main$q, b as __nuxt_component_1$2, e as __nuxt_component_1$1 } from '../server.mjs';
import { resolveDirective, withCtx, createVNode, createTextVNode, withDirectives, openBlock, createBlock, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrGetDirectiveProps } from 'vue/server-renderer';
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
  __name: "nuxt-icon",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_LayoutsBreadcrumb = _sfc_main$q;
      const _component_rs_card = __nuxt_component_1$2;
      const _component_Icon = __nuxt_component_1$1;
      const _directive_highlight = resolveDirective("highlight");
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
            _push2(` This library include around 100,000 icons from iconify. Here shows the list of <a href="https://icones.js.org/" class="underline text-primary-400" target="_blank"${_scopeId}>icon sets</a> that you can use. `);
          } else {
            return [
              createTextVNode(" This library include around 100,000 icons from iconify. Here shows the list of "),
              createVNode("a", {
                href: "https://icones.js.org/",
                class: "underline text-primary-400",
                target: "_blank"
              }, "icon sets"),
              createTextVNode(" that you can use. ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_rs_card, null, {
        header: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex"${_scopeId}>How to use?</div>`);
          } else {
            return [
              createVNode("div", { class: "flex" }, "How to use?")
            ];
          }
        }),
        body: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` it is simple to use, just add the icon name in the name attribute. For example, to use the icon from the icon set `);
            _push2(ssrRenderComponent(_component_Icon, { name: "ic:outline-info" }, null, _parent2, _scopeId));
            _push2(`, you can use the following code: <div${ssrRenderAttrs(ssrGetDirectiveProps(_ctx, _directive_highlight))}${_scopeId}><pre class="language-html shadow-none"${_scopeId}>          <code class="language-html"${_scopeId}>
            &lt;Icon name=&quot;ic:outline-info&quot;&gt;&lt;/Icon&gt;
          </code>
        </pre></div>`);
          } else {
            return [
              createTextVNode(" it is simple to use, just add the icon name in the name attribute. For example, to use the icon from the icon set "),
              createVNode(_component_Icon, { name: "ic:outline-info" }),
              createTextVNode(", you can use the following code: "),
              withDirectives((openBlock(), createBlock("div", null, [
                createVNode("pre", { class: "language-html shadow-none" }, [
                  createTextVNode("          "),
                  createVNode("code", { class: "language-html" }, '\n            <Icon name="ic:outline-info"></Icon>\n          '),
                  createTextVNode("\n        ")
                ])
              ])), [
                [_directive_highlight]
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/Kitchensink/ui/icon/nuxt-icon.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=nuxt-icon.c510735f.mjs.map
