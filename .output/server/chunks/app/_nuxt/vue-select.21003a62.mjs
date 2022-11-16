import { c as _sfc_main$q, b as __nuxt_component_1$2 } from '../server.mjs';
import { resolveComponent, withCtx, createTextVNode, createVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
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
  __name: "vue-select",
  __ssrInlineRender: true,
  setup(__props) {
    const countryList = [
      "Afghanistan",
      "Albania",
      "Algeria",
      "American Samoa",
      "Andorra",
      "Angola",
      "Anguilla",
      "Antarctica",
      "Antigua and Barbuda",
      "Argentina",
      "Armenia",
      "Aruba",
      "Australia",
      "Austria",
      "Azerbaijan",
      "Bahamas (the)",
      "Bahrain",
      "Bangladesh",
      "Barbados",
      "Belarus",
      "Belgium",
      "Belize",
      "Benin",
      "Bermuda",
      "Bhutan",
      "Bolivia (Plurinational State of)",
      "Bonaire, Sint Eustatius and Saba",
      "Bosnia and Herzegovina",
      "Botswana",
      "Bouvet Island",
      "Brazil",
      "British Indian Ocean Territory (the)",
      "Brunei Darussalam",
      "Bulgaria",
      "Burkina Faso",
      "Burundi",
      "Cabo Verde",
      "Cambodia",
      "Cameroon",
      "Canada",
      "Cayman Islands (the)",
      "Central African Republic (the)",
      "Chad",
      "Chile",
      "China",
      "Christmas Island",
      "Cocos (Keeling) Islands (the)",
      "Colombia",
      "Comoros (the)",
      "Congo (the Democratic Republic of the)",
      "Congo (the)",
      "Cook Islands (the)",
      "Costa Rica",
      "Croatia",
      "Cuba",
      "Cura\xE7ao",
      "Cyprus",
      "Czechia",
      "C\xF4te d'Ivoire",
      "Denmark",
      "Djibouti",
      "Dominica",
      "Dominican Republic (the)",
      "Ecuador",
      "Egypt",
      "El Salvador",
      "Equatorial Guinea",
      "Eritrea",
      "Estonia",
      "Eswatini",
      "Ethiopia",
      "Falkland Islands (the) [Malvinas]",
      "Faroe Islands (the)",
      "Fiji",
      "Finland",
      "France",
      "French Guiana",
      "French Polynesia",
      "French Southern Territories (the)",
      "Gabon",
      "Gambia (the)",
      "Georgia",
      "Germany",
      "Ghana",
      "Gibraltar",
      "Greece",
      "Greenland",
      "Grenada",
      "Guadeloupe",
      "Guam",
      "Guatemala",
      "Guernsey",
      "Guinea",
      "Guinea-Bissau",
      "Guyana",
      "Haiti",
      "Heard Island and McDonald Islands",
      "Holy See (the)",
      "Honduras",
      "Hong Kong",
      "Hungary",
      "Iceland",
      "India",
      "Indonesia",
      "Iran (Islamic Republic of)",
      "Iraq",
      "Ireland",
      "Isle of Man",
      "Israel",
      "Italy",
      "Jamaica",
      "Japan",
      "Jersey",
      "Jordan",
      "Kazakhstan",
      "Kenya",
      "Kiribati",
      "Korea (the Democratic People's Republic of)",
      "Korea (the Republic of)",
      "Kuwait",
      "Kyrgyzstan",
      "Lao People's Democratic Republic (the)",
      "Latvia",
      "Lebanon",
      "Lesotho",
      "Liberia",
      "Libya",
      "Liechtenstein",
      "Lithuania",
      "Luxembourg",
      "Macao",
      "Madagascar",
      "Malawi",
      "Malaysia",
      "Maldives",
      "Mali",
      "Malta",
      "Marshall Islands (the)",
      "Martinique",
      "Mauritania",
      "Mauritius",
      "Mayotte",
      "Mexico",
      "Micronesia (Federated States of)",
      "Moldova (the Republic of)",
      "Monaco",
      "Mongolia",
      "Montenegro",
      "Montserrat",
      "Morocco",
      "Mozambique",
      "Myanmar",
      "Namibia",
      "Nauru",
      "Nepal",
      "Netherlands (the)",
      "New Caledonia",
      "New Zealand",
      "Nicaragua",
      "Niger (the)",
      "Nigeria",
      "Niue",
      "Norfolk Island",
      "Northern Mariana Islands (the)",
      "Norway",
      "Oman",
      "Pakistan",
      "Palau",
      "Palestine, State of",
      "Panama",
      "Papua New Guinea",
      "Paraguay",
      "Peru",
      "Philippines (the)",
      "Pitcairn",
      "Poland",
      "Portugal",
      "Puerto Rico",
      "Qatar",
      "Republic of North Macedonia",
      "Romania",
      "Russian Federation (the)",
      "Rwanda",
      "R\xE9union",
      "Saint Barth\xE9lemy",
      "Saint Helena, Ascension and Tristan da Cunha",
      "Saint Kitts and Nevis",
      "Saint Lucia",
      "Saint Martin (French part)",
      "Saint Pierre and Miquelon",
      "Saint Vincent and the Grenadines",
      "Samoa",
      "San Marino",
      "Sao Tome and Principe",
      "Saudi Arabia",
      "Senegal",
      "Serbia",
      "Seychelles",
      "Sierra Leone",
      "Singapore",
      "Sint Maarten (Dutch part)",
      "Slovakia",
      "Slovenia",
      "Solomon Islands",
      "Somalia",
      "South Africa",
      "South Georgia and the South Sandwich Islands",
      "South Sudan",
      "Spain",
      "Sri Lanka",
      "Sudan (the)",
      "Suriname",
      "Svalbard and Jan Mayen",
      "Sweden",
      "Switzerland",
      "Syrian Arab Republic",
      "Taiwan",
      "Tajikistan",
      "Tanzania, United Republic of",
      "Thailand",
      "Timor-Leste",
      "Togo",
      "Tokelau",
      "Tonga",
      "Trinidad and Tobago",
      "Tunisia",
      "Turkey",
      "Turkmenistan",
      "Turks and Caicos Islands (the)",
      "Tuvalu",
      "Uganda",
      "Ukraine",
      "United Arab Emirates (the)",
      "United Kingdom of Great Britain and Northern Ireland (the)",
      "United States Minor Outlying Islands (the)",
      "United States of America (the)",
      "Uruguay",
      "Uzbekistan",
      "Vanuatu",
      "Venezuela (Bolivarian Republic of)",
      "Viet Nam",
      "Virgin Islands (British)",
      "Virgin Islands (U.S.)",
      "Wallis and Futuna",
      "Western Sahara",
      "Yemen",
      "Zambia",
      "Zimbabwe",
      "\xC5land Islands"
    ];
    const emptyList = [];
    const selected = [];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_LayoutsBreadcrumb = _sfc_main$q;
      const _component_rs_card = __nuxt_component_1$2;
      const _component_v_select = resolveComponent("v-select");
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_component_LayoutsBreadcrumb, null, null, _parent));
      _push(ssrRenderComponent(_component_rs_card, null, {
        header: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Info `);
          } else {
            return [
              createTextVNode(" Info ")
            ];
          }
        }),
        body: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<p class="text-justify"${_scopeId}><a href="https://vue-select.org" target="_blank" class="hover:underline text-primary-400"${_scopeId}>Vue Select</a> is a feature rich select/dropdown/typeahead component. It provides a default template that fits most use cases for a filterable select dropdown. The component is designed to be as lightweight as possible, while maintaining high standards for accessibility, developer experience, and customization. </p>`);
          } else {
            return [
              createVNode("p", { class: "text-justify" }, [
                createVNode("a", {
                  href: "https://vue-select.org",
                  target: "_blank",
                  class: "hover:underline text-primary-400"
                }, "Vue Select"),
                createTextVNode(" is a feature rich select/dropdown/typeahead component. It provides a default template that fits most use cases for a filterable select dropdown. The component is designed to be as lightweight as possible, while maintaining high standards for accessibility, developer experience, and customization. ")
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_rs_card, null, {
        header: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Example `);
          } else {
            return [
              createTextVNode(" Example ")
            ];
          }
        }),
        body: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="mb-4"${_scopeId}><label for="country" class="text-gray-700 dark:text-gray-200 block mb-2 font-semibold text-sm"${_scopeId}>Single Select Country</label>`);
            _push2(ssrRenderComponent(_component_v_select, {
              name: "country",
              options: countryList
            }, null, _parent2, _scopeId));
            _push2(`</div><div class="mb-4"${_scopeId}><label for="country" class="text-gray-700 dark:text-gray-200 block mb-2 font-semibold text-sm"${_scopeId}>Multiple Select Country</label>`);
            _push2(ssrRenderComponent(_component_v_select, {
              name: "country",
              options: countryList,
              multiple: ""
            }, null, _parent2, _scopeId));
            _push2(`</div><div class="mb-4"${_scopeId}><label for="country" class="text-gray-700 dark:text-gray-200 block mb-2 font-semibold text-sm"${_scopeId}>Taggable Select Country</label>`);
            _push2(ssrRenderComponent(_component_v_select, {
              name: "country",
              options: emptyList,
              multiple: "",
              taggable: ""
            }, null, _parent2, _scopeId));
            _push2(`</div><div class="mb-4"${_scopeId}><label for="country" class="text-gray-700 dark:text-gray-200 block mb-2 font-semibold text-sm"${_scopeId}>Pushable Tag Select Country</label>`);
            _push2(ssrRenderComponent(_component_v_select, {
              name: "country",
              options: emptyList,
              multiple: "",
              taggable: "",
              "push-tags": ""
            }, null, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "mb-4" }, [
                createVNode("label", {
                  for: "country",
                  class: "text-gray-700 dark:text-gray-200 block mb-2 font-semibold text-sm"
                }, "Single Select Country"),
                createVNode(_component_v_select, {
                  name: "country",
                  options: countryList
                })
              ]),
              createVNode("div", { class: "mb-4" }, [
                createVNode("label", {
                  for: "country",
                  class: "text-gray-700 dark:text-gray-200 block mb-2 font-semibold text-sm"
                }, "Multiple Select Country"),
                createVNode(_component_v_select, {
                  name: "country",
                  options: countryList,
                  multiple: ""
                })
              ]),
              createVNode("div", { class: "mb-4" }, [
                createVNode("label", {
                  for: "country",
                  class: "text-gray-700 dark:text-gray-200 block mb-2 font-semibold text-sm"
                }, "Taggable Select Country"),
                createVNode(_component_v_select, {
                  name: "country",
                  options: emptyList,
                  multiple: "",
                  taggable: ""
                })
              ]),
              createVNode("div", { class: "mb-4" }, [
                createVNode("label", {
                  for: "country",
                  class: "text-gray-700 dark:text-gray-200 block mb-2 font-semibold text-sm"
                }, "Pushable Tag Select Country"),
                createVNode(_component_v_select, {
                  name: "country",
                  options: emptyList,
                  multiple: "",
                  taggable: "",
                  "push-tags": ""
                })
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_rs_card, null, {
        header: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Validation `);
          } else {
            return [
              createTextVNode(" Validation ")
            ];
          }
        }),
        body: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<label for="country" class="text-gray-700 dark:text-gray-200 block mb-2 font-semibold text-sm"${_scopeId}>Limit Select</label>`);
            _push2(ssrRenderComponent(_component_v_select, {
              name: "country",
              class: "mb-4",
              modelValue: selected,
              "onUpdate:modelValue": ($event) => selected = $event,
              selectable: () => selected.length < 3,
              options: countryList,
              multiple: ""
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode("label", {
                for: "country",
                class: "text-gray-700 dark:text-gray-200 block mb-2 font-semibold text-sm"
              }, "Limit Select"),
              createVNode(_component_v_select, {
                name: "country",
                class: "mb-4",
                modelValue: selected,
                "onUpdate:modelValue": ($event) => selected = $event,
                selectable: () => selected.length < 3,
                options: countryList,
                multiple: ""
              }, null, 8, ["selectable"])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/Kitchensink/form/element/vue-select.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=vue-select.21003a62.mjs.map
