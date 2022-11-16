import { mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderAttr } from 'vue/server-renderer';

const _imports_0 = "" + globalThis.__buildAssetsURL("500.f21aaff3.svg");
const _sfc_main = {
  __name: "500",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex h-screen p-6 md:p-10" }, _attrs))}><div class="m-auto"><div class="flex items-center flex-col md:flex-row gap-10"><img class="w-80 flex-shrink"${ssrRenderAttr("src", _imports_0)} alt=""><div class="flex-1 text-center md:text-left items-center"><span class="block mb-2 font-bold text-2xl md:text-3xl">Oops, something went wrong. </span><p class="text-lg md:text-xl font-base"> Please try again later or contact us if the problem persists. </p></div></div></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/Kitchensink/error/500.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=500.a3557c8d.mjs.map
