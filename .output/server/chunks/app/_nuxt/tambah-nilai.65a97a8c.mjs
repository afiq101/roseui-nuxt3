import { _ as _export_sfc$1, f as _sfc_main$o, g as _sfc_main$n } from '../server.mjs';
import { resolveComponent, mergeProps, withCtx, createVNode, toDisplayString, openBlock, createBlock, createCommentVNode, Fragment, renderList, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderStyle, ssrRenderAttr, ssrInterpolate, ssrRenderComponent, ssrRenderList, ssrRenderClass } from 'vue/server-renderer';
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
  data() {
    return {
      payor_name: "",
      payor_email: "",
      payor_phone: "",
      topup_amount: 0,
      payment_description: "",
      payment_reference_no: "",
      payment_method: null,
      bankcode: "",
      card_holder_name: "",
      card_bank_account: "",
      card_cvv: "",
      card_year: "",
      card_month: "",
      list_bank_loading: true,
      list_bank_fpx: [
        { "CODE": "ABB0233", "NAME": "Affin Bank" },
        { "CODE": "ABMB0212", "NAME": "Alliance Bank" },
        { "CODE": "AMBB0209", "NAME": "AmBank" },
        { "CODE": "BIMB0340", "NAME": "Bank Islam" },
        { "CODE": "BMMB0341", "NAME": "Bank Muamalat" },
        { "CODE": "BKRM0602", "NAME": "Bank Rakyat" },
        { "CODE": "BSN0601", "NAME": "BSN" },
        { "CODE": "BCBB0235", "NAME": "CIMB Clicks" },
        { "CODE": "HLB0224", "NAME": "Hong Leong Bank" },
        { "CODE": "HSBC0223", "NAME": "HSBC" },
        { "CODE": "KFH0346", "NAME": "KFH" },
        { "CODE": "MB2U0227", "NAME": "Maybank2U" },
        { "CODE": "OCBC0229", "NAME": "OCBC Bank" },
        { "CODE": "PBB0233", "NAME": "Public Bank" },
        { "CODE": "RHB0218", "NAME": "RHB Bank" },
        { "CODE": "TEST0021", "NAME": "SBI Bank A" },
        { "CODE": "TEST0022", "NAME": "SBI Bank B" },
        { "CODE": "TEST0023", "NAME": "SBI Bank C" },
        { "CODE": "SCB0216", "NAME": "Standard Chartered" },
        { "CODE": "UOB0226", "NAME": "UOB Bank" }
      ]
    };
  },
  mounted: async function() {
    let reference_no = "AWQFTOPUP" + new Date().getTime();
    if (reference_no && this.payment_reference_no === "") {
      this.payment_reference_no = reference_no;
      this.payment_description = `Bayaran tambah nilai untuk ${reference_no}`;
    }
  },
  methods: {
    async payWithFPX() {
      await $fetch("/api/payment/createPayment", {
        method: "post",
        body: {
          billName: "Bayar bil tambah nilai",
          billDescription: `Bayar Topup ${parseFloat(this.topup_amount).toFixed(2)}`,
          billTo: this.payor_name,
          billEmail: this.payor_email,
          billPhone: this.payor_phone,
          billAmount: parseFloat(this.topup_amount).toFixed(2)
        }
      }).then((res) => {
        console.log("RESPONSE API : ", res);
        if (res.status_code === 200 && res.status === "success") {
          window.location.href = res.data.url + `?billBankID=${this.bankcode}`;
        }
      });
    },
    async payWithCC() {
    },
    setBank(bank) {
      this.bankcode = bank;
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_rs_collapse = _sfc_main$o;
  const _component_rs_collapse_item = _sfc_main$n;
  const _component_center = resolveComponent("center");
  const _component_font_awesome_icon = resolveComponent("font-awesome-icon");
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "p-5" }, _attrs))}><div class="lg:flex lg:items-center lg:justify-between"><div class="min-w-0 flex-1"><div class="mt-0 flex sm:items-center sm:justify-between" style="${ssrRenderStyle({ "justify-content": "space-between", "align-items": "baseline" })}"><div><span class="text-2xl font-bold">Kredit / Tambah Nilai</span></div></div><span class="text-sm text-gray-500">Isi maklumat di bawah dan pilih amaun tambah nilai yang sesuai.</span></div></div><div class="mt-5 p-4 bg-white rounded"><div><div class="md:grid md:grid-cols-3 md:gap-6"><div class="md:col-span-1"><div class=""><h3 class="m-0 text-lg font-medium leading-6 text-gray-900">Maklumat Tambah Nilai</h3><p class="text-xs text-gray-500">Sila lengkapkan maklumat pembayaran tambah nilai di bawah dan pilih kaedah bayaran tambah nilai anda di sebelah kanan.</p></div><div class="mt-4"><div class="grid grid-cols-1 gap-6"><div class="col-span-3 sm:col-span-2"><label for="company-website" class="block text-sm font-medium text-gray-700">No. Rujukan Bayaran</label><div class="mt-1 flex rounded-md shadow-sm"><input type="text" disabled${ssrRenderAttr("value", $data.payment_reference_no)} name="payment_reference_no" id="payment_reference_no" class="bg-gray-200 rounded-md border border-gray-300 text-sm w-full p-2" placeholder="Ahmad Husni"></div></div></div><div class="mt-4 grid grid-cols-1 gap-6"><div class="col-span-3 sm:col-span-2"><label for="company-website" class="block text-sm font-medium text-gray-700">Deskripsi</label><div class="mt-1 flex rounded-md shadow-sm"><textarea type="text" disabled name="payment_description" id="payment_description" class="rounded-md border border-gray-300 text-sm w-full p-2" placeholder="Ahmad Husni">${ssrInterpolate($data.payment_description)}</textarea></div></div></div><div class="mt-4 grid grid-cols-1 gap-6"><div class="col-span-3 sm:col-span-2"><label for="company-website" class="block text-sm font-medium text-gray-700">Nama</label><div class="mt-1 flex rounded-md shadow-sm"><input${ssrRenderAttr("value", $data.payor_name)} type="text" name="nama" id="nama" class="rounded-md border border-gray-300 text-sm w-full p-2" placeholder="Ahmad Husni"></div></div></div><div class="mt-4 grid grid-cols-1 gap-6"><div class="col-span-3 sm:col-span-2"><label for="company-website" class="block text-sm font-medium text-gray-700">E-mel</label><div class="mt-1 flex rounded-md shadow-sm"><input${ssrRenderAttr("value", $data.payor_email)} type="email" name="nama" id="nama" class="rounded-md border border-gray-300 text-sm w-full p-2" placeholder="ahmadhusni@gmail.com"></div></div></div><div class="mt-4 grid grid-cols-1 gap-6"><div class="col-span-3 sm:col-span-2"><label for="company-website" class="block text-sm font-medium text-gray-700">No. Telefon</label><div class="mt-1 flex rounded-md shadow-sm"><input${ssrRenderAttr("value", $data.payor_phone)} type="text" name="nama" id="nama" class="rounded-md border border-gray-300 text-sm w-full p-2" placeholder="0123456789"></div></div></div></div></div><div class="mt-5 md:col-span-2 md:mt-0"><div><div class="md:shadow sm:overflow-hidden sm:rounded-md"><div class="space-y-6 bg-white md:px-4 py-5 sm:p-6"><div class="grid grid-cols-1 gap-6"><div class="col-span-3 sm:col-span-2"><label for="company-website" class="block text-sm font-medium text-gray-700">Amaun</label><div class="mt-1 flex rounded-md shadow-sm"><span class="inline-flex items-center rounded-l-md border border-r-0 border-gray-300 bg-gray-50 px-3 text-sm text-gray-500 p-2">RM</span><input type="text"${ssrRenderAttr("value", $data.topup_amount)} name="topup_amount" id="company-website" class="border border-gray-300 text-sm w-full p-2" placeholder="10.00"></div>`);
  if ($data.topup_amount < 30) {
    _push(`<p class="mt-2 text-xs text-red-800">* Minima amaun tambah nilai ialah RM30.00.</p>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</div></div><div class="mt-2">`);
  _push(ssrRenderComponent(_component_rs_collapse, { type: "border" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_rs_collapse_item, {
          title: `Online Banking (FPX) [${$data.bankcode ? $data.bankcode : "--Sila Pilih--"}]`
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<div class="grid grid-cols-1 sm:grid-cols-2 xs:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-1"${_scopeId2}><!--[-->`);
              ssrRenderList($data.list_bank_fpx, (bank) => {
                _push3(`<div class="${ssrRenderClass(bank.CODE === $data.bankcode ? `p-2 bg-gray-200 text-gray-700 border h-20 rounded border-gray-200` : `p-2 bg-white text-gray-700 h-20 rounded border border-gray-200`)}" style="${ssrRenderStyle({ "align-items": "center" })}"${_scopeId2}>`);
                _push3(ssrRenderComponent(_component_center, { class: "py-auto" }, {
                  default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                    if (_push4) {
                      _push4(`<img${ssrRenderAttr("src", `https://dev.toyyibpay.com/asset/img/logobank/${bank.CODE}.png`)} class="w-7 h-7"${_scopeId3}><span class="text-sm text-gray-500"${_scopeId3}>${ssrInterpolate(bank.NAME)}</span>`);
                      if (bank.CODE === $data.bankcode) {
                        _push4(`<div${_scopeId3}>`);
                        _push4(ssrRenderComponent(_component_font_awesome_icon, {
                          class: "w-5 h-5 text-green-600",
                          icon: ["fas", "check"]
                        }, null, _parent4, _scopeId3));
                        _push4(`</div>`);
                      } else {
                        _push4(`<!---->`);
                      }
                    } else {
                      return [
                        createVNode("img", {
                          src: `https://dev.toyyibpay.com/asset/img/logobank/${bank.CODE}.png`,
                          class: "w-7 h-7"
                        }, null, 8, ["src"]),
                        createVNode("span", { class: "text-sm text-gray-500" }, toDisplayString(bank.NAME), 1),
                        bank.CODE === $data.bankcode ? (openBlock(), createBlock("div", { key: 0 }, [
                          createVNode(_component_font_awesome_icon, {
                            class: "w-5 h-5 text-green-600",
                            icon: ["fas", "check"]
                          })
                        ])) : createCommentVNode("", true)
                      ];
                    }
                  }),
                  _: 2
                }, _parent3, _scopeId2));
                _push3(`</div>`);
              });
              _push3(`<!--]--></div>`);
            } else {
              return [
                createVNode("div", { class: "grid grid-cols-1 sm:grid-cols-2 xs:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-1" }, [
                  (openBlock(true), createBlock(Fragment, null, renderList($data.list_bank_fpx, (bank) => {
                    return openBlock(), createBlock("div", {
                      onClick: ($event) => $options.setBank(bank.CODE),
                      class: bank.CODE === $data.bankcode ? `p-2 bg-gray-200 text-gray-700 border h-20 rounded border-gray-200` : `p-2 bg-white text-gray-700 h-20 rounded border border-gray-200`,
                      style: { "align-items": "center" }
                    }, [
                      createVNode(_component_center, { class: "py-auto" }, {
                        default: withCtx(() => [
                          createVNode("img", {
                            src: `https://dev.toyyibpay.com/asset/img/logobank/${bank.CODE}.png`,
                            class: "w-7 h-7"
                          }, null, 8, ["src"]),
                          createVNode("span", { class: "text-sm text-gray-500" }, toDisplayString(bank.NAME), 1),
                          bank.CODE === $data.bankcode ? (openBlock(), createBlock("div", { key: 0 }, [
                            createVNode(_component_font_awesome_icon, {
                              class: "w-5 h-5 text-green-600",
                              icon: ["fas", "check"]
                            })
                          ])) : createCommentVNode("", true)
                        ]),
                        _: 2
                      }, 1024)
                    ], 10, ["onClick"]);
                  }), 256))
                ])
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_rs_collapse_item, { title: "Kad Kredit & Debit (SenangPay)" }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<p${_scopeId2}>Collapse Item 2 content</p>`);
            } else {
              return [
                createVNode("p", null, "Collapse Item 2 content")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_rs_collapse_item, {
            title: `Online Banking (FPX) [${$data.bankcode ? $data.bankcode : "--Sila Pilih--"}]`
          }, {
            default: withCtx(() => [
              createVNode("div", { class: "grid grid-cols-1 sm:grid-cols-2 xs:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-1" }, [
                (openBlock(true), createBlock(Fragment, null, renderList($data.list_bank_fpx, (bank) => {
                  return openBlock(), createBlock("div", {
                    onClick: ($event) => $options.setBank(bank.CODE),
                    class: bank.CODE === $data.bankcode ? `p-2 bg-gray-200 text-gray-700 border h-20 rounded border-gray-200` : `p-2 bg-white text-gray-700 h-20 rounded border border-gray-200`,
                    style: { "align-items": "center" }
                  }, [
                    createVNode(_component_center, { class: "py-auto" }, {
                      default: withCtx(() => [
                        createVNode("img", {
                          src: `https://dev.toyyibpay.com/asset/img/logobank/${bank.CODE}.png`,
                          class: "w-7 h-7"
                        }, null, 8, ["src"]),
                        createVNode("span", { class: "text-sm text-gray-500" }, toDisplayString(bank.NAME), 1),
                        bank.CODE === $data.bankcode ? (openBlock(), createBlock("div", { key: 0 }, [
                          createVNode(_component_font_awesome_icon, {
                            class: "w-5 h-5 text-green-600",
                            icon: ["fas", "check"]
                          })
                        ])) : createCommentVNode("", true)
                      ]),
                      _: 2
                    }, 1024)
                  ], 10, ["onClick"]);
                }), 256))
              ])
            ]),
            _: 1
          }, 8, ["title"]),
          createVNode(_component_rs_collapse_item, { title: "Kad Kredit & Debit (SenangPay)" }, {
            default: withCtx(() => [
              createVNode("p", null, "Collapse Item 2 content")
            ]),
            _: 1
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></div><div class="bg-gray-50 px-4 py-3 text-right sm:px-6"><button type="button" class="m-0 inline-flex justify-center rounded-md border border-transparent bg-red-800 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"> Tambah Nilai - RM ${ssrInterpolate($data.topup_amount ? parseFloat($data.topup_amount).toFixed(2) : parseFloat(0).toFixed(2))}</button></div></div></div></div></div></div></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/Kredit/tambah-nilai.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const tambahNilai = /* @__PURE__ */ _export_sfc$1(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { tambahNilai as default };
//# sourceMappingURL=tambah-nilai.65a97a8c.mjs.map
