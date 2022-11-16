import { resolveDirective, openBlock, createElementBlock, normalizeClass, renderSlot, normalizeProps, guardReactiveProps, createElementVNode, Fragment as Fragment$1, renderList, createTextVNode, toDisplayString, createBlock, resolveDynamicComponent, createCommentVNode, mergeProps, toHandlers, withDirectives, vShow, createVNode, Transition, withCtx, withModifiers, getCurrentInstance, toRef, isRef, inject, defineAsyncComponent, version, useSSRContext, computed, unref, ref, watch, defineComponent, reactive, resolveComponent, useSlots, provide, watchEffect, h, onUnmounted, pushScopeId, popScopeId, Suspense, withAsyncContext, shallowRef, isReactive, toRaw, markRaw, nextTick, createApp, effectScope, onErrorCaptured, triggerRef, withScopeId, normalizeStyle, withKeys, toRefs } from 'vue';
import { $fetch } from 'ohmyfetch';
import { createHooks } from 'hookable';
import { getContext, executeAsync } from 'unctx';
import { hasProtocol, parseURL, joinURL, isEqual } from 'ufo';
import { sendRedirect, createError as createError$1 } from 'h3';
import { defuFn } from 'defu';
import { resolveUnref } from '@vueuse/shared';
import { useRoute as useRoute$1, RouterView, createMemoryHistory, createRouter } from 'vue-router';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderList, ssrRenderComponent, ssrRenderSlot, ssrGetDirectiveProps, ssrRenderClass, ssrRenderStyle, ssrRenderAttr, ssrRenderTeleport, ssrRenderVNode, ssrRenderSuspense } from 'vue/server-renderer';
import { Icon as Icon$1 } from '@iconify/vue/dist/offline';
import { loadIcon } from '@iconify/vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { SimpleBar } from 'simplebar-vue3';
import { useWindowSize } from 'vue-window-size';
import { getNode, createMessage, error, createNode, resetCount, warn, watchRegistry, isNode as isNode$1, createConfig, clearErrors, setErrors, submitForm, reset, createClasses, generateClassList, sugar, isDOM, isComponent as isComponent$1, isConditional, compile } from '@formkit/core';
import { directive } from 'vue3-click-away';
import { cloneAny, extend, camel, kebab, nodeProps, only, except, slugify, isObject, has, isPojo, empty, eq, shallowClone, undefine } from '@formkit/utils';
import { createSection, useSchema, createLibraryPlugin, inputs } from '@formkit/inputs';
import * as defaultRules from '@formkit/rules';
import { createValidationPlugin } from '@formkit/validation';
import { createI18nPlugin, en } from '@formkit/i18n';
import { createIconHandler, generateClasses, createThemePlugin } from '@formkit/themes';
import { createObserver } from '@formkit/observer';
import { useDropzone } from 'vue3-dropzone';
import { autoAnimatePlugin } from '@formkit/auto-animate/vue';
import Maska from 'maska';
import { UidPlugin } from '@shimyshack/uid';
import VueCodeHighlight from 'vue-code-highlight';
import CountryFlag from 'vue-country-flag-next';
import { a as useRuntimeConfig$1 } from '../nitro/node-server.mjs';
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

var E = Object.defineProperty, M = Object.defineProperties;
var x = Object.getOwnPropertyDescriptors;
var V = Object.getOwnPropertySymbols;
var I = Object.prototype.hasOwnProperty, N = Object.prototype.propertyIsEnumerable;
var C = (e, t, s) => t in e ? E(e, t, { enumerable: !0, configurable: !0, writable: !0, value: s }) : e[t] = s, f = (e, t) => {
  for (var s in t || (t = {}))
    I.call(t, s) && C(e, s, t[s]);
  if (V)
    for (var s of V(t))
      N.call(t, s) && C(e, s, t[s]);
  return e;
}, m = (e, t) => M(e, x(t));
const U = {
  props: {
    autoscroll: {
      type: Boolean,
      default: !0
    }
  },
  watch: {
    typeAheadPointer() {
      this.autoscroll && this.maybeAdjustScroll();
    },
    open(e) {
      this.autoscroll && e && this.$nextTick(() => this.maybeAdjustScroll());
    }
  },
  methods: {
    maybeAdjustScroll() {
      var t;
      const e = ((t = this.$refs.dropdownMenu) == null ? void 0 : t.children[this.typeAheadPointer]) || !1;
      if (e) {
        const s = this.getDropdownViewport(), { top: n, bottom: l, height: i } = e.getBoundingClientRect();
        if (n < s.top)
          return this.$refs.dropdownMenu.scrollTop = e.offsetTop;
        if (l > s.bottom)
          return this.$refs.dropdownMenu.scrollTop = e.offsetTop - (s.height - i);
      }
    },
    getDropdownViewport() {
      return this.$refs.dropdownMenu ? this.$refs.dropdownMenu.getBoundingClientRect() : {
        height: 0,
        top: 0,
        bottom: 0
      };
    }
  }
}, q = {
  data() {
    return {
      typeAheadPointer: -1
    };
  },
  watch: {
    filteredOptions() {
      for (let e = 0; e < this.filteredOptions.length; e++)
        if (this.selectable(this.filteredOptions[e])) {
          this.typeAheadPointer = e;
          break;
        }
    },
    open(e) {
      e && this.typeAheadToLastSelected();
    },
    selectedValue() {
      this.open && this.typeAheadToLastSelected();
    }
  },
  methods: {
    typeAheadUp() {
      for (let e = this.typeAheadPointer - 1; e >= 0; e--)
        if (this.selectable(this.filteredOptions[e])) {
          this.typeAheadPointer = e;
          break;
        }
    },
    typeAheadDown() {
      for (let e = this.typeAheadPointer + 1; e < this.filteredOptions.length; e++)
        if (this.selectable(this.filteredOptions[e])) {
          this.typeAheadPointer = e;
          break;
        }
    },
    typeAheadSelect() {
      const e = this.filteredOptions[this.typeAheadPointer];
      e && this.selectable(e) && this.select(e);
    },
    typeAheadToLastSelected() {
      this.typeAheadPointer = this.selectedValue.length !== 0 ? this.filteredOptions.indexOf(this.selectedValue[this.selectedValue.length - 1]) : -1;
    }
  }
}, J = {
  props: {
    loading: {
      type: Boolean,
      default: !1
    }
  },
  data() {
    return {
      mutableLoading: !1
    };
  },
  watch: {
    search() {
      this.$emit("search", this.search, this.toggleLoading);
    },
    loading(e) {
      this.mutableLoading = e;
    }
  },
  methods: {
    toggleLoading(e = null) {
      return e == null ? this.mutableLoading = !this.mutableLoading : this.mutableLoading = e;
    }
  }
}, S = (e, t) => {
  const s = e.__vccOpts || e;
  for (const [n, l] of t)
    s[n] = l;
  return s;
}, H = {}, X = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "10",
  height: "10"
}, Y = /* @__PURE__ */ createElementVNode("path", { d: "M6.895455 5l2.842897-2.842898c.348864-.348863.348864-.914488 0-1.263636L9.106534.261648c-.348864-.348864-.914489-.348864-1.263636 0L5 3.104545 2.157102.261648c-.348863-.348864-.914488-.348864-1.263636 0L.261648.893466c-.348864.348864-.348864.914489 0 1.263636L3.104545 5 .261648 7.842898c-.348864.348863-.348864.914488 0 1.263636l.631818.631818c.348864.348864.914773.348864 1.263636 0L5 6.895455l2.842898 2.842897c.348863.348864.914772.348864 1.263636 0l.631818-.631818c.348864-.348864.348864-.914489 0-1.263636L6.895455 5z" }, null, -1), Q = [
  Y
];
function G(e, t) {
  return openBlock(), createElementBlock("svg", X, Q);
}
const W = /* @__PURE__ */ S(H, [["render", G]]), Z = {}, ee = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "14",
  height: "10"
}, te = /* @__PURE__ */ createElementVNode("path", { d: "M9.211364 7.59931l4.48338-4.867229c.407008-.441854.407008-1.158247 0-1.60046l-.73712-.80023c-.407008-.441854-1.066904-.441854-1.474243 0L7 5.198617 2.51662.33139c-.407008-.441853-1.066904-.441853-1.474243 0l-.737121.80023c-.407008.441854-.407008 1.158248 0 1.600461l4.48338 4.867228L7 10l2.211364-2.40069z" }, null, -1), se = [
  te
];
function ie(e, t) {
  return openBlock(), createElementBlock("svg", ee, se);
}
const oe = /* @__PURE__ */ S(Z, [["render", ie]]), T = {
  Deselect: W,
  OpenIndicator: oe
}, ne = {
  mounted(e, { instance: t }) {
    if (t.appendToBody) {
      const {
        height: s,
        top: n,
        left: l,
        width: i
      } = t.$refs.toggle.getBoundingClientRect();
      let y = window.scrollX || window.pageXOffset, o = window.scrollY || window.pageYOffset;
      e.unbindPosition = t.calculatePosition(e, t, {
        width: i + "px",
        left: y + l + "px",
        top: o + n + s + "px"
      }), document.body.appendChild(e);
    }
  },
  unmounted(e, { instance: t }) {
    t.appendToBody && (e.unbindPosition && typeof e.unbindPosition == "function" && e.unbindPosition(), e.parentNode && e.parentNode.removeChild(e));
  }
};
function le(e) {
  const t = {};
  return Object.keys(e).sort().forEach((s) => {
    t[s] = e[s];
  }), JSON.stringify(t);
}
let ae = 0;
function re() {
  return ++ae;
}
const de = {
  components: f({}, T),
  directives: { appendToBody: ne },
  mixins: [U, q, J],
  compatConfig: {
    MODE: 3
  },
  emits: [
    "open",
    "close",
    "update:modelValue",
    "search",
    "search:compositionstart",
    "search:compositionend",
    "search:keydown",
    "search:blur",
    "search:focus",
    "search:input",
    "option:created",
    "option:selecting",
    "option:selected",
    "option:deselecting",
    "option:deselected"
  ],
  props: {
    modelValue: {},
    components: {
      type: Object,
      default: () => ({})
    },
    options: {
      type: Array,
      default() {
        return [];
      }
    },
    disabled: {
      type: Boolean,
      default: !1
    },
    clearable: {
      type: Boolean,
      default: !0
    },
    deselectFromDropdown: {
      type: Boolean,
      default: !1
    },
    searchable: {
      type: Boolean,
      default: !0
    },
    multiple: {
      type: Boolean,
      default: !1
    },
    placeholder: {
      type: String,
      default: ""
    },
    transition: {
      type: String,
      default: "vs__fade"
    },
    clearSearchOnSelect: {
      type: Boolean,
      default: !0
    },
    closeOnSelect: {
      type: Boolean,
      default: !0
    },
    label: {
      type: String,
      default: "label"
    },
    autocomplete: {
      type: String,
      default: "off"
    },
    reduce: {
      type: Function,
      default: (e) => e
    },
    selectable: {
      type: Function,
      default: (e) => !0
    },
    getOptionLabel: {
      type: Function,
      default(e) {
        return typeof e == "object" ? e.hasOwnProperty(this.label) ? e[this.label] : console.warn(`[vue-select warn]: Label key "option.${this.label}" does not exist in options object ${JSON.stringify(e)}.
https://vue-select.org/api/props.html#getoptionlabel`) : e;
      }
    },
    getOptionKey: {
      type: Function,
      default(e) {
        if (typeof e != "object")
          return e;
        try {
          return e.hasOwnProperty("id") ? e.id : le(e);
        } catch (t) {
          return console.warn(`[vue-select warn]: Could not stringify this option to generate unique key. Please provide'getOptionKey' prop to return a unique key for each option.
https://vue-select.org/api/props.html#getoptionkey`, e, t);
        }
      }
    },
    onTab: {
      type: Function,
      default: function() {
        this.selectOnTab && !this.isComposing && this.typeAheadSelect();
      }
    },
    taggable: {
      type: Boolean,
      default: !1
    },
    tabindex: {
      type: Number,
      default: null
    },
    pushTags: {
      type: Boolean,
      default: !1
    },
    filterable: {
      type: Boolean,
      default: !0
    },
    filterBy: {
      type: Function,
      default(e, t, s) {
        return (t || "").toLocaleLowerCase().indexOf(s.toLocaleLowerCase()) > -1;
      }
    },
    filter: {
      type: Function,
      default(e, t) {
        return e.filter((s) => {
          let n = this.getOptionLabel(s);
          return typeof n == "number" && (n = n.toString()), this.filterBy(s, n, t);
        });
      }
    },
    createOption: {
      type: Function,
      default(e) {
        return typeof this.optionList[0] == "object" ? { [this.label]: e } : e;
      }
    },
    resetOnOptionsChange: {
      default: !1,
      validator: (e) => ["function", "boolean"].includes(typeof e)
    },
    clearSearchOnBlur: {
      type: Function,
      default: function({ clearSearchOnSelect: e, multiple: t }) {
        return e && !t;
      }
    },
    noDrop: {
      type: Boolean,
      default: !1
    },
    inputId: {
      type: String
    },
    dir: {
      type: String,
      default: "auto"
    },
    selectOnTab: {
      type: Boolean,
      default: !1
    },
    selectOnKeyCodes: {
      type: Array,
      default: () => [13]
    },
    searchInputQuerySelector: {
      type: String,
      default: "[type=search]"
    },
    mapKeydown: {
      type: Function,
      default: (e, t) => e
    },
    appendToBody: {
      type: Boolean,
      default: !1
    },
    calculatePosition: {
      type: Function,
      default(e, t, { width: s, top: n, left: l }) {
        e.style.top = n, e.style.left = l, e.style.width = s;
      }
    },
    dropdownShouldOpen: {
      type: Function,
      default({ noDrop: e, open: t, mutableLoading: s }) {
        return e ? !1 : t && !s;
      }
    },
    uid: {
      type: [String, Number],
      default: () => re()
    }
  },
  data() {
    return {
      search: "",
      open: !1,
      isComposing: !1,
      pushedTags: [],
      _value: [],
      deselectButtons: []
    };
  },
  computed: {
    isReducingValues() {
      return this.$props.reduce !== this.$options.props.reduce.default;
    },
    isTrackingValues() {
      return typeof this.modelValue == "undefined" || this.isReducingValues;
    },
    selectedValue() {
      let e = this.modelValue;
      return this.isTrackingValues && (e = this.$data._value), e != null && e !== "" ? [].concat(e) : [];
    },
    optionList() {
      return this.options.concat(this.pushTags ? this.pushedTags : []);
    },
    searchEl() {
      return this.$slots.search ? this.$refs.selectedOptions.querySelector(this.searchInputQuerySelector) : this.$refs.search;
    },
    scope() {
      const e = {
        search: this.search,
        loading: this.loading,
        searching: this.searching,
        filteredOptions: this.filteredOptions
      };
      return {
        search: {
          attributes: f({
            disabled: this.disabled,
            placeholder: this.searchPlaceholder,
            tabindex: this.tabindex,
            readonly: !this.searchable,
            id: this.inputId,
            "aria-autocomplete": "list",
            "aria-labelledby": `vs${this.uid}__combobox`,
            "aria-controls": `vs${this.uid}__listbox`,
            ref: "search",
            type: "search",
            autocomplete: this.autocomplete,
            value: this.search
          }, this.dropdownOpen && this.filteredOptions[this.typeAheadPointer] ? {
            "aria-activedescendant": `vs${this.uid}__option-${this.typeAheadPointer}`
          } : {}),
          events: {
            compositionstart: () => this.isComposing = !0,
            compositionend: () => this.isComposing = !1,
            keydown: this.onSearchKeyDown,
            blur: this.onSearchBlur,
            focus: this.onSearchFocus,
            input: (t) => this.search = t.target.value
          }
        },
        spinner: {
          loading: this.mutableLoading
        },
        noOptions: {
          search: this.search,
          loading: this.mutableLoading,
          searching: this.searching
        },
        openIndicator: {
          attributes: {
            ref: "openIndicator",
            role: "presentation",
            class: "vs__open-indicator"
          }
        },
        listHeader: e,
        listFooter: e,
        header: m(f({}, e), { deselect: this.deselect }),
        footer: m(f({}, e), { deselect: this.deselect })
      };
    },
    childComponents() {
      return f(f({}, T), this.components);
    },
    stateClasses() {
      return {
        "vs--open": this.dropdownOpen,
        "vs--single": !this.multiple,
        "vs--multiple": this.multiple,
        "vs--searching": this.searching && !this.noDrop,
        "vs--searchable": this.searchable && !this.noDrop,
        "vs--unsearchable": !this.searchable,
        "vs--loading": this.mutableLoading,
        "vs--disabled": this.disabled
      };
    },
    searching() {
      return !!this.search;
    },
    dropdownOpen() {
      return this.dropdownShouldOpen(this);
    },
    searchPlaceholder() {
      return this.isValueEmpty && this.placeholder ? this.placeholder : void 0;
    },
    filteredOptions() {
      const e = [].concat(this.optionList);
      if (!this.filterable && !this.taggable)
        return e;
      const t = this.search.length ? this.filter(e, this.search, this) : e;
      if (this.taggable && this.search.length) {
        const s = this.createOption(this.search);
        this.optionExists(s) || t.unshift(s);
      }
      return t;
    },
    isValueEmpty() {
      return this.selectedValue.length === 0;
    },
    showClearButton() {
      return !this.multiple && this.clearable && !this.open && !this.isValueEmpty;
    }
  },
  watch: {
    options(e, t) {
      const s = () => typeof this.resetOnOptionsChange == "function" ? this.resetOnOptionsChange(e, t, this.selectedValue) : this.resetOnOptionsChange;
      !this.taggable && s() && this.clearSelection(), this.modelValue && this.isTrackingValues && this.setInternalValueFromOptions(this.modelValue);
    },
    modelValue: {
      immediate: !0,
      handler(e) {
        this.isTrackingValues && this.setInternalValueFromOptions(e);
      }
    },
    multiple() {
      this.clearSelection();
    },
    open(e) {
      this.$emit(e ? "open" : "close");
    }
  },
  created() {
    this.mutableLoading = this.loading;
  },
  methods: {
    setInternalValueFromOptions(e) {
      Array.isArray(e) ? this.$data._value = e.map((t) => this.findOptionFromReducedValue(t)) : this.$data._value = this.findOptionFromReducedValue(e);
    },
    select(e) {
      this.$emit("option:selecting", e), this.isOptionSelected(e) ? this.deselectFromDropdown && (this.clearable || this.multiple && this.selectedValue.length > 1) && this.deselect(e) : (this.taggable && !this.optionExists(e) && (this.$emit("option:created", e), this.pushTag(e)), this.multiple && (e = this.selectedValue.concat(e)), this.updateValue(e), this.$emit("option:selected", e)), this.onAfterSelect(e);
    },
    deselect(e) {
      this.$emit("option:deselecting", e), this.updateValue(this.selectedValue.filter((t) => !this.optionComparator(t, e))), this.$emit("option:deselected", e);
    },
    clearSelection() {
      this.updateValue(this.multiple ? [] : null);
    },
    onAfterSelect(e) {
      this.closeOnSelect && (this.open = !this.open, this.searchEl.blur()), this.clearSearchOnSelect && (this.search = "");
    },
    updateValue(e) {
      typeof this.modelValue == "undefined" && (this.$data._value = e), e !== null && (Array.isArray(e) ? e = e.map((t) => this.reduce(t)) : e = this.reduce(e)), this.$emit("update:modelValue", e);
    },
    toggleDropdown(e) {
      const t = e.target !== this.searchEl;
      t && e.preventDefault();
      const s = [
        ...this.deselectButtons || [],
        this.$refs.clearButton
      ];
      if (this.searchEl === void 0 || s.filter(Boolean).some((n) => n.contains(e.target) || n === e.target)) {
        e.preventDefault();
        return;
      }
      this.open && t ? this.searchEl.blur() : this.disabled || (this.open = !0, this.searchEl.focus());
    },
    isOptionSelected(e) {
      return this.selectedValue.some((t) => this.optionComparator(t, e));
    },
    isOptionDeselectable(e) {
      return this.isOptionSelected(e) && this.deselectFromDropdown;
    },
    optionComparator(e, t) {
      return this.getOptionKey(e) === this.getOptionKey(t);
    },
    findOptionFromReducedValue(e) {
      const t = (n) => JSON.stringify(this.reduce(n)) === JSON.stringify(e), s = [...this.options, ...this.pushedTags].filter(t);
      return s.length === 1 ? s[0] : s.find((n) => this.optionComparator(n, this.$data._value)) || e;
    },
    closeSearchOptions() {
      this.open = !1, this.$emit("search:blur");
    },
    maybeDeleteValue() {
      if (!this.searchEl.value.length && this.selectedValue && this.selectedValue.length && this.clearable) {
        let e = null;
        this.multiple && (e = [
          ...this.selectedValue.slice(0, this.selectedValue.length - 1)
        ]), this.updateValue(e);
      }
    },
    optionExists(e) {
      return this.optionList.some((t) => this.optionComparator(t, e));
    },
    normalizeOptionForSlot(e) {
      return typeof e == "object" ? e : { [this.label]: e };
    },
    pushTag(e) {
      this.pushedTags.push(e);
    },
    onEscape() {
      this.search.length ? this.search = "" : this.searchEl.blur();
    },
    onSearchBlur() {
      if (this.mousedown && !this.searching)
        this.mousedown = !1;
      else {
        const { clearSearchOnSelect: e, multiple: t } = this;
        this.clearSearchOnBlur({ clearSearchOnSelect: e, multiple: t }) && (this.search = ""), this.closeSearchOptions();
        return;
      }
      if (this.search.length === 0 && this.options.length === 0) {
        this.closeSearchOptions();
        return;
      }
    },
    onSearchFocus() {
      this.open = !0, this.$emit("search:focus");
    },
    onMousedown() {
      this.mousedown = !0;
    },
    onMouseUp() {
      this.mousedown = !1;
    },
    onSearchKeyDown(e) {
      const t = (l) => (l.preventDefault(), !this.isComposing && this.typeAheadSelect()), s = {
        8: (l) => this.maybeDeleteValue(),
        9: (l) => this.onTab(),
        27: (l) => this.onEscape(),
        38: (l) => (l.preventDefault(), this.typeAheadUp()),
        40: (l) => (l.preventDefault(), this.typeAheadDown())
      };
      this.selectOnKeyCodes.forEach((l) => s[l] = t);
      const n = this.mapKeydown(s, this);
      if (typeof n[e.keyCode] == "function")
        return n[e.keyCode](e);
    }
  }
}, he = ["dir"], ce = ["id", "aria-expanded", "aria-owns"], ue = {
  ref: "selectedOptions",
  class: "vs__selected-options"
}, pe = ["disabled", "title", "aria-label", "onClick"], fe = {
  ref: "actions",
  class: "vs__actions"
}, ge = ["disabled"], ye = { class: "vs__spinner" }, me = ["id"], be = ["id", "aria-selected", "onMouseover", "onClick"], _e = {
  key: 0,
  class: "vs__no-options"
}, Oe = /* @__PURE__ */ createTextVNode(" Sorry, no matching options. "), we = ["id"];
function ve(e, t, s, n, l, i) {
  const y = resolveDirective("append-to-body");
  return openBlock(), createElementBlock("div", {
    dir: s.dir,
    class: normalizeClass(["v-select", i.stateClasses])
  }, [
    renderSlot(e.$slots, "header", normalizeProps(guardReactiveProps(i.scope.header))),
    createElementVNode("div", {
      id: `vs${s.uid}__combobox`,
      ref: "toggle",
      class: "vs__dropdown-toggle",
      role: "combobox",
      "aria-expanded": i.dropdownOpen.toString(),
      "aria-owns": `vs${s.uid}__listbox`,
      "aria-label": "Search for option",
      onMousedown: t[1] || (t[1] = (o) => i.toggleDropdown(o))
    }, [
      createElementVNode("div", ue, [
        (openBlock(!0), createElementBlock(Fragment$1, null, renderList(i.selectedValue, (o, p) => renderSlot(e.$slots, "selected-option-container", {
          option: i.normalizeOptionForSlot(o),
          deselect: i.deselect,
          multiple: s.multiple,
          disabled: s.disabled
        }, () => [
          (openBlock(), createElementBlock("span", {
            key: s.getOptionKey(o),
            class: "vs__selected"
          }, [
            renderSlot(e.$slots, "selected-option", normalizeProps(guardReactiveProps(i.normalizeOptionForSlot(o))), () => [
              createTextVNode(toDisplayString(s.getOptionLabel(o)), 1)
            ]),
            s.multiple ? (openBlock(), createElementBlock("button", {
              key: 0,
              ref_for: !0,
              ref: (g) => l.deselectButtons[p] = g,
              disabled: s.disabled,
              type: "button",
              class: "vs__deselect",
              title: `Deselect ${s.getOptionLabel(o)}`,
              "aria-label": `Deselect ${s.getOptionLabel(o)}`,
              onClick: (g) => i.deselect(o)
            }, [
              (openBlock(), createBlock(resolveDynamicComponent(i.childComponents.Deselect)))
            ], 8, pe)) : createCommentVNode("", !0)
          ]))
        ])), 256)),
        renderSlot(e.$slots, "search", normalizeProps(guardReactiveProps(i.scope.search)), () => [
          createElementVNode("input", mergeProps({ class: "vs__search" }, i.scope.search.attributes, toHandlers(i.scope.search.events)), null, 16)
        ])
      ], 512),
      createElementVNode("div", fe, [
        withDirectives(createElementVNode("button", {
          ref: "clearButton",
          disabled: s.disabled,
          type: "button",
          class: "vs__clear",
          title: "Clear Selected",
          "aria-label": "Clear Selected",
          onClick: t[0] || (t[0] = (...o) => i.clearSelection && i.clearSelection(...o))
        }, [
          (openBlock(), createBlock(resolveDynamicComponent(i.childComponents.Deselect)))
        ], 8, ge), [
          [vShow, i.showClearButton]
        ]),
        renderSlot(e.$slots, "open-indicator", normalizeProps(guardReactiveProps(i.scope.openIndicator)), () => [
          s.noDrop ? createCommentVNode("", !0) : (openBlock(), createBlock(resolveDynamicComponent(i.childComponents.OpenIndicator), normalizeProps(mergeProps({ key: 0 }, i.scope.openIndicator.attributes)), null, 16))
        ]),
        renderSlot(e.$slots, "spinner", normalizeProps(guardReactiveProps(i.scope.spinner)), () => [
          withDirectives(createElementVNode("div", ye, "Loading...", 512), [
            [vShow, e.mutableLoading]
          ])
        ])
      ], 512)
    ], 40, ce),
    createVNode(Transition, { name: s.transition }, {
      default: withCtx(() => [
        i.dropdownOpen ? withDirectives((openBlock(), createElementBlock("ul", {
          id: `vs${s.uid}__listbox`,
          ref: "dropdownMenu",
          key: `vs${s.uid}__listbox`,
          class: "vs__dropdown-menu",
          role: "listbox",
          tabindex: "-1",
          onMousedown: t[2] || (t[2] = withModifiers((...o) => i.onMousedown && i.onMousedown(...o), ["prevent"])),
          onMouseup: t[3] || (t[3] = (...o) => i.onMouseUp && i.onMouseUp(...o))
        }, [
          renderSlot(e.$slots, "list-header", normalizeProps(guardReactiveProps(i.scope.listHeader))),
          (openBlock(!0), createElementBlock(Fragment$1, null, renderList(i.filteredOptions, (o, p) => (openBlock(), createElementBlock("li", {
            id: `vs${s.uid}__option-${p}`,
            key: s.getOptionKey(o),
            role: "option",
            class: normalizeClass(["vs__dropdown-option", {
              "vs__dropdown-option--deselect": i.isOptionDeselectable(o) && p === e.typeAheadPointer,
              "vs__dropdown-option--selected": i.isOptionSelected(o),
              "vs__dropdown-option--highlight": p === e.typeAheadPointer,
              "vs__dropdown-option--disabled": !s.selectable(o)
            }]),
            "aria-selected": p === e.typeAheadPointer ? !0 : null,
            onMouseover: (g) => s.selectable(o) ? e.typeAheadPointer = p : null,
            onClick: withModifiers((g) => s.selectable(o) ? i.select(o) : null, ["prevent", "stop"])
          }, [
            renderSlot(e.$slots, "option", normalizeProps(guardReactiveProps(i.normalizeOptionForSlot(o))), () => [
              createTextVNode(toDisplayString(s.getOptionLabel(o)), 1)
            ])
          ], 42, be))), 128)),
          i.filteredOptions.length === 0 ? (openBlock(), createElementBlock("li", _e, [
            renderSlot(e.$slots, "no-options", normalizeProps(guardReactiveProps(i.scope.noOptions)), () => [
              Oe
            ])
          ])) : createCommentVNode("", !0),
          renderSlot(e.$slots, "list-footer", normalizeProps(guardReactiveProps(i.scope.listFooter)))
        ], 40, me)), [
          [y]
        ]) : (openBlock(), createElementBlock("ul", {
          key: 1,
          id: `vs${s.uid}__listbox`,
          role: "listbox",
          style: { display: "none", visibility: "hidden" }
        }, null, 8, we))
      ]),
      _: 3
    }, 8, ["name"]),
    renderSlot(e.$slots, "footer", normalizeProps(guardReactiveProps(i.scope.footer)))
  ], 10, he);
}
const Ce = /* @__PURE__ */ S(de, [["render", ve]]);

const appConfig = useRuntimeConfig$1().app;
const baseURL = () => appConfig.baseURL;
const nuxtAppCtx = getContext("nuxt-app");
const NuxtPluginIndicator = "__nuxt_plugin";
function createNuxtApp(options) {
  let hydratingCount = 0;
  const nuxtApp = {
    provide: void 0,
    globalName: "nuxt",
    payload: reactive({
      data: {},
      state: {},
      _errors: {},
      ...{ serverRendered: true }
    }),
    isHydrating: false,
    deferHydration() {
      if (!nuxtApp.isHydrating) {
        return () => {
        };
      }
      hydratingCount++;
      let called = false;
      return () => {
        if (called) {
          return;
        }
        called = true;
        hydratingCount--;
        if (hydratingCount === 0) {
          nuxtApp.isHydrating = false;
          return nuxtApp.callHook("app:suspense:resolve");
        }
      };
    },
    _asyncDataPromises: {},
    _asyncData: {},
    ...options
  };
  nuxtApp.hooks = createHooks();
  nuxtApp.hook = nuxtApp.hooks.hook;
  nuxtApp.callHook = nuxtApp.hooks.callHook;
  nuxtApp.provide = (name, value) => {
    const $name = "$" + name;
    defineGetter(nuxtApp, $name, value);
    defineGetter(nuxtApp.vueApp.config.globalProperties, $name, value);
  };
  defineGetter(nuxtApp.vueApp, "$nuxt", nuxtApp);
  defineGetter(nuxtApp.vueApp.config.globalProperties, "$nuxt", nuxtApp);
  {
    if (nuxtApp.ssrContext) {
      nuxtApp.ssrContext.nuxt = nuxtApp;
    }
    nuxtApp.ssrContext = nuxtApp.ssrContext || {};
    if (nuxtApp.ssrContext.payload) {
      Object.assign(nuxtApp.payload, nuxtApp.ssrContext.payload);
    }
    nuxtApp.ssrContext.payload = nuxtApp.payload;
    nuxtApp.payload.config = {
      public: options.ssrContext.runtimeConfig.public,
      app: options.ssrContext.runtimeConfig.app
    };
  }
  const runtimeConfig = options.ssrContext.runtimeConfig;
  const compatibilityConfig = new Proxy(runtimeConfig, {
    get(target, prop) {
      var _a;
      if (prop === "public") {
        return target.public;
      }
      return (_a = target[prop]) != null ? _a : target.public[prop];
    },
    set(target, prop, value) {
      {
        return false;
      }
    }
  });
  nuxtApp.provide("config", compatibilityConfig);
  return nuxtApp;
}
async function applyPlugin(nuxtApp, plugin2) {
  if (typeof plugin2 !== "function") {
    return;
  }
  const { provide: provide2 } = await callWithNuxt(nuxtApp, plugin2, [nuxtApp]) || {};
  if (provide2 && typeof provide2 === "object") {
    for (const key in provide2) {
      nuxtApp.provide(key, provide2[key]);
    }
  }
}
async function applyPlugins(nuxtApp, plugins2) {
  for (const plugin2 of plugins2) {
    await applyPlugin(nuxtApp, plugin2);
  }
}
function normalizePlugins(_plugins2) {
  const plugins2 = _plugins2.map((plugin2) => {
    if (typeof plugin2 !== "function") {
      return null;
    }
    if (plugin2.length > 1) {
      return (nuxtApp) => plugin2(nuxtApp, nuxtApp.provide);
    }
    return plugin2;
  }).filter(Boolean);
  return plugins2;
}
function defineNuxtPlugin(plugin2) {
  plugin2[NuxtPluginIndicator] = true;
  return plugin2;
}
function callWithNuxt(nuxt, setup, args) {
  const fn = () => args ? setup(...args) : setup();
  {
    return nuxtAppCtx.callAsync(nuxt, fn);
  }
}
function useNuxtApp() {
  const nuxtAppInstance = nuxtAppCtx.tryUse();
  if (!nuxtAppInstance) {
    const vm = getCurrentInstance();
    if (!vm) {
      throw new Error("nuxt instance unavailable");
    }
    return vm.appContext.app.$nuxt;
  }
  return nuxtAppInstance;
}
function useRuntimeConfig() {
  return useNuxtApp().$config;
}
function defineGetter(obj, key, val) {
  Object.defineProperty(obj, key, { get: () => val });
}
function defineAppConfig(config2) {
  return config2;
}
const useError = () => toRef(useNuxtApp().payload, "error");
const showError = (_err) => {
  const err = createError(_err);
  try {
    const nuxtApp = useNuxtApp();
    nuxtApp.callHook("app:error", err);
    const error2 = useError();
    error2.value = error2.value || err;
  } catch {
    throw err;
  }
  return err;
};
const createError = (err) => {
  const _err = createError$1(err);
  _err.__nuxt_error = true;
  return _err;
};
function useState(...args) {
  const autoKey = typeof args[args.length - 1] === "string" ? args.pop() : void 0;
  if (typeof args[0] !== "string") {
    args.unshift(autoKey);
  }
  const [_key, init] = args;
  if (!_key || typeof _key !== "string") {
    throw new TypeError("[nuxt] [useState] key must be a string: " + _key);
  }
  if (init !== void 0 && typeof init !== "function") {
    throw new Error("[nuxt] [useState] init must be a function: " + init);
  }
  const key = "$s" + _key;
  const nuxt = useNuxtApp();
  const state = toRef(nuxt.payload.state, key);
  if (state.value === void 0 && init) {
    const initialValue = init();
    if (isRef(initialValue)) {
      nuxt.payload.state[key] = initialValue;
      return initialValue;
    }
    state.value = initialValue;
  }
  return state;
}
const useRouter = () => {
  var _a;
  return (_a = useNuxtApp()) == null ? void 0 : _a.$router;
};
const useRoute = () => {
  if (getCurrentInstance()) {
    return inject("_route", useNuxtApp()._route);
  }
  return useNuxtApp()._route;
};
const defineNuxtRouteMiddleware = (middleware) => middleware;
const navigateTo = (to, options) => {
  if (!to) {
    to = "/";
  }
  const toPath = typeof to === "string" ? to : to.path || "/";
  const isExternal = hasProtocol(toPath, true);
  if (isExternal && !(options == null ? void 0 : options.external)) {
    throw new Error("Navigating to external URL is not allowed by default. Use `nagivateTo (url, { external: true })`.");
  }
  if (isExternal && parseURL(toPath).protocol === "script:") {
    throw new Error("Cannot navigate to an URL with script protocol.");
  }
  const router = useRouter();
  {
    const nuxtApp = useNuxtApp();
    if (nuxtApp.ssrContext && nuxtApp.ssrContext.event) {
      const redirectLocation = isExternal ? toPath : joinURL(useRuntimeConfig().app.baseURL, router.resolve(to).fullPath || "/");
      return nuxtApp.callHook("app:redirected").then(() => sendRedirect(nuxtApp.ssrContext.event, redirectLocation, (options == null ? void 0 : options.redirectCode) || 302));
    }
  }
  if (isExternal) {
    if (options == null ? void 0 : options.replace) {
      location.replace(toPath);
    } else {
      location.href = toPath;
    }
    return Promise.resolve();
  }
  return (options == null ? void 0 : options.replace) ? router.replace(to) : router.push(to);
};
const firstNonUndefined = (...args) => args.find((arg) => arg !== void 0);
const DEFAULT_EXTERNAL_REL_ATTRIBUTE = "noopener noreferrer";
function defineNuxtLink(options) {
  const componentName = options.componentName || "NuxtLink";
  return defineComponent({
    name: componentName,
    props: {
      to: {
        type: [String, Object],
        default: void 0,
        required: false
      },
      href: {
        type: [String, Object],
        default: void 0,
        required: false
      },
      target: {
        type: String,
        default: void 0,
        required: false
      },
      rel: {
        type: String,
        default: void 0,
        required: false
      },
      noRel: {
        type: Boolean,
        default: void 0,
        required: false
      },
      prefetch: {
        type: Boolean,
        default: void 0,
        required: false
      },
      noPrefetch: {
        type: Boolean,
        default: void 0,
        required: false
      },
      activeClass: {
        type: String,
        default: void 0,
        required: false
      },
      exactActiveClass: {
        type: String,
        default: void 0,
        required: false
      },
      prefetchedClass: {
        type: String,
        default: void 0,
        required: false
      },
      replace: {
        type: Boolean,
        default: void 0,
        required: false
      },
      ariaCurrentValue: {
        type: String,
        default: void 0,
        required: false
      },
      external: {
        type: Boolean,
        default: void 0,
        required: false
      },
      custom: {
        type: Boolean,
        default: void 0,
        required: false
      }
    },
    setup(props2, { slots }) {
      const router = useRouter();
      const to = computed(() => {
        return props2.to || props2.href || "";
      });
      const isExternal = computed(() => {
        if (props2.external) {
          return true;
        }
        if (props2.target && props2.target !== "_self") {
          return true;
        }
        if (typeof to.value === "object") {
          return false;
        }
        return to.value === "" || hasProtocol(to.value, true);
      });
      const prefetched = ref(false);
      const el = void 0;
      return () => {
        var _a, _b, _c;
        if (!isExternal.value) {
          return h(
            resolveComponent("RouterLink"),
            {
              ref: void 0,
              to: to.value,
              ...prefetched.value && !props2.custom ? { class: props2.prefetchedClass || options.prefetchedClass } : {},
              activeClass: props2.activeClass || options.activeClass,
              exactActiveClass: props2.exactActiveClass || options.exactActiveClass,
              replace: props2.replace,
              ariaCurrentValue: props2.ariaCurrentValue,
              custom: props2.custom
            },
            slots.default
          );
        }
        const href = typeof to.value === "object" ? (_b = (_a = router.resolve(to.value)) == null ? void 0 : _a.href) != null ? _b : null : to.value || null;
        const target = props2.target || null;
        const rel = props2.noRel ? null : firstNonUndefined(props2.rel, options.externalRelAttribute, href ? DEFAULT_EXTERNAL_REL_ATTRIBUTE : "") || null;
        const navigate = () => navigateTo(href, { replace: props2.replace });
        if (props2.custom) {
          if (!slots.default) {
            return null;
          }
          return slots.default({
            href,
            navigate,
            route: router.resolve(href),
            rel,
            target,
            isActive: false,
            isExactActive: false
          });
        }
        return h("a", { ref: el, href, rel, target }, (_c = slots.default) == null ? void 0 : _c.call(slots));
      };
    }
  });
}
const __nuxt_component_0$2 = defineNuxtLink({ componentName: "NuxtLink" });
const cfg0 = defineAppConfig({
  nuxtIcon: {
    size: "24px",
    aliases: {
      nuxt: "logos:nuxt-icon"
    }
  }
});
const inlineConfig = {};
const __appConfig = defuFn(cfg0, inlineConfig);
function useAppConfig() {
  const nuxtApp = useNuxtApp();
  if (!nuxtApp._appConfig) {
    nuxtApp._appConfig = reactive(__appConfig);
  }
  return nuxtApp._appConfig;
}
function useHead(meta2) {
  useNuxtApp()._useHead(meta2);
}
const components = {
  Icon: defineAsyncComponent(() => Promise.resolve().then(() => Icon).then((c) => c.default || c))
};
const _nuxt_components_plugin_mjs_KR1HBZs4kY = defineNuxtPlugin((nuxtApp) => {
  for (const name in components) {
    nuxtApp.vueApp.component(name, components[name]);
    nuxtApp.vueApp.component("Lazy" + name, components[name]);
  }
});
var PROVIDE_KEY$1 = "usehead";
var HEAD_COUNT_KEY = "head:count";
var HEAD_ATTRS_KEY = "data-head-attrs";
var SELF_CLOSING_TAGS = ["meta", "link", "base"];
var BODY_TAG_ATTR_NAME = "data-meta-body";
var propsToString = (props2) => {
  const handledAttributes = [];
  for (const [key, value] of Object.entries(props2)) {
    if (value === false || value == null)
      continue;
    let attribute = key;
    if (value !== true)
      attribute += `="${String(value).replace(/"/g, "&quot;")}"`;
    handledAttributes.push(attribute);
  }
  return handledAttributes.length > 0 ? ` ${handledAttributes.join(" ")}` : "";
};
var tagToString = (tag) => {
  const attrs = propsToString(tag.props);
  const openTag = `<${tag.tag}${attrs}>`;
  return SELF_CLOSING_TAGS.includes(tag.tag) ? openTag : `${openTag}${tag.children || ""}</${tag.tag}>`;
};
var resolveHeadEntries = (entries, force) => {
  return entries.map((e) => {
    if (e.input && (force || !e.resolved))
      e.input = resolveUnrefHeadInput(e.input);
    return e;
  });
};
var renderHeadToString = async (head) => {
  var _a, _b;
  const headHtml = [];
  const bodyHtml = [];
  let titleHtml = "";
  const attrs = { htmlAttrs: {}, bodyAttrs: {} };
  const resolvedEntries = resolveHeadEntries(head.headEntries);
  for (const h2 in head.hooks["resolved:entries"])
    await head.hooks["resolved:entries"][h2](resolvedEntries);
  const headTags = resolveHeadEntriesToTags(resolvedEntries);
  for (const h2 in head.hooks["resolved:tags"])
    await head.hooks["resolved:tags"][h2](headTags);
  for (const tag of headTags) {
    if ((_a = tag.options) == null ? void 0 : _a.beforeTagRender)
      tag.options.beforeTagRender(tag);
    if (tag.tag === "title")
      titleHtml = tagToString(tag);
    else if (tag.tag === "htmlAttrs" || tag.tag === "bodyAttrs")
      attrs[tag.tag] = { ...attrs[tag.tag], ...tag.props };
    else if ((_b = tag.options) == null ? void 0 : _b.body)
      bodyHtml.push(tagToString(tag));
    else
      headHtml.push(tagToString(tag));
  }
  headHtml.push(`<meta name="${HEAD_COUNT_KEY}" content="${headHtml.length}">`);
  return {
    get headTags() {
      return titleHtml + headHtml.join("");
    },
    get htmlAttrs() {
      return propsToString({
        ...attrs.htmlAttrs,
        [HEAD_ATTRS_KEY]: Object.keys(attrs.htmlAttrs).join(",")
      });
    },
    get bodyAttrs() {
      return propsToString({
        ...attrs.bodyAttrs,
        [HEAD_ATTRS_KEY]: Object.keys(attrs.bodyAttrs).join(",")
      });
    },
    get bodyTags() {
      return bodyHtml.join("");
    }
  };
};
var sortTags = (aTag, bTag) => {
  const tagWeight = (tag) => {
    var _a;
    if ((_a = tag.options) == null ? void 0 : _a.renderPriority)
      return tag.options.renderPriority;
    switch (tag.tag) {
      case "base":
        return -1;
      case "meta":
        if (tag.props.charset)
          return -2;
        if (tag.props["http-equiv"] === "content-security-policy")
          return 0;
        return 10;
      default:
        return 10;
    }
  };
  return tagWeight(aTag) - tagWeight(bTag);
};
var tagDedupeKey = (tag) => {
  const { props: props2, tag: tagName, options } = tag;
  if (["base", "title", "titleTemplate", "bodyAttrs", "htmlAttrs"].includes(tagName))
    return tagName;
  if (tagName === "link" && props2.rel === "canonical")
    return "canonical";
  if (props2.charset)
    return "charset";
  if (options == null ? void 0 : options.key)
    return `${tagName}:${options.key}`;
  const name = ["id"];
  if (tagName === "meta")
    name.push(...["name", "property", "http-equiv"]);
  for (const n of name) {
    if (typeof props2[n] !== "undefined") {
      return `${tagName}:${n}:${props2[n]}`;
    }
  }
  return tag.runtime.position;
};
function resolveUnrefHeadInput(ref2) {
  const root = resolveUnref(ref2);
  if (!ref2 || !root) {
    return root;
  }
  if (Array.isArray(root)) {
    return root.map(resolveUnrefHeadInput);
  }
  if (typeof root === "object") {
    return Object.fromEntries(
      Object.entries(root).map(([key, value]) => {
        if (key === "titleTemplate")
          return [key, unref(value)];
        return [
          key,
          resolveUnrefHeadInput(value)
        ];
      })
    );
  }
  return root;
}
var resolveTag = (name, input, e) => {
  var _a;
  input = { ...input };
  const tag = {
    tag: name,
    props: {},
    runtime: {
      entryId: e.id
    },
    options: {
      ...e.options
    }
  };
  ["hid", "vmid", "key"].forEach((key) => {
    if (input[key]) {
      tag.options.key = input[key];
      delete input[key];
    }
  });
  ["children", "innerHTML", "textContent"].forEach((key) => {
    if (typeof input[key] !== "undefined") {
      tag.children = input[key];
      delete input[key];
    }
  });
  ["body", "renderPriority"].forEach((key) => {
    if (typeof input[key] !== "undefined") {
      tag.options[key] = input[key];
      delete input[key];
    }
  });
  if ((_a = tag.options) == null ? void 0 : _a.body)
    input[BODY_TAG_ATTR_NAME] = true;
  tag.props = input;
  return tag;
};
var headInputToTags = (e) => {
  return Object.entries(e.input).filter(([, v]) => typeof v !== "undefined").map(([key, value]) => {
    return (Array.isArray(value) ? value : [value]).map((props2) => {
      switch (key) {
        case "title":
        case "titleTemplate":
          return {
            tag: key,
            children: props2,
            props: {},
            runtime: { entryId: e.id },
            options: e.options
          };
        case "base":
        case "meta":
        case "link":
        case "style":
        case "script":
        case "noscript":
        case "htmlAttrs":
        case "bodyAttrs":
          return resolveTag(key, props2, e);
        default:
          return false;
      }
    });
  }).flat().filter((v) => !!v);
};
var renderTitleTemplate = (template, title) => {
  if (template == null)
    return title || null;
  if (typeof template === "function")
    return template(title);
  return template.replace("%s", title != null ? title : "");
};
var resolveHeadEntriesToTags = (entries) => {
  const deduping = {};
  const resolvedEntries = resolveHeadEntries(entries);
  resolvedEntries.forEach((entry2, entryIndex) => {
    const tags = headInputToTags(entry2);
    tags.forEach((tag, tagIdx) => {
      tag.runtime = tag.runtime || {};
      tag.runtime.position = entryIndex * 1e4 + tagIdx;
      deduping[tagDedupeKey(tag)] = tag;
    });
  });
  let resolvedTags = Object.values(deduping).sort((a, b) => a.runtime.position - b.runtime.position).sort(sortTags);
  const titleTemplateIdx = resolvedTags.findIndex((i2) => i2.tag === "titleTemplate");
  const titleIdx = resolvedTags.findIndex((i2) => i2.tag === "title");
  if (titleIdx !== -1 && titleTemplateIdx !== -1) {
    const newTitle = renderTitleTemplate(
      resolvedTags[titleTemplateIdx].children,
      resolvedTags[titleIdx].children
    );
    if (newTitle !== null) {
      resolvedTags[titleIdx].children = newTitle || resolvedTags[titleIdx].children;
    } else {
      resolvedTags = resolvedTags.filter((_, i2) => i2 !== titleIdx);
    }
    resolvedTags = resolvedTags.filter((_, i2) => i2 !== titleTemplateIdx);
  } else if (titleTemplateIdx !== -1) {
    const newTitle = renderTitleTemplate(
      resolvedTags[titleTemplateIdx].children
    );
    if (newTitle !== null) {
      resolvedTags[titleTemplateIdx].children = newTitle;
      resolvedTags[titleTemplateIdx].tag = "title";
    } else {
      resolvedTags = resolvedTags.filter((_, i2) => i2 !== titleTemplateIdx);
    }
  }
  return resolvedTags;
};
function isEqualNode(oldTag, newTag) {
  if (oldTag instanceof HTMLElement && newTag instanceof HTMLElement) {
    const nonce = newTag.getAttribute("nonce");
    if (nonce && !oldTag.getAttribute("nonce")) {
      const cloneTag = newTag.cloneNode(true);
      cloneTag.setAttribute("nonce", "");
      cloneTag.nonce = nonce;
      return nonce === oldTag.nonce && oldTag.isEqualNode(cloneTag);
    }
  }
  return oldTag.isEqualNode(newTag);
}
var setAttrs = (el, attrs) => {
  const existingAttrs = el.getAttribute(HEAD_ATTRS_KEY);
  if (existingAttrs) {
    for (const key of existingAttrs.split(",")) {
      if (!(key in attrs))
        el.removeAttribute(key);
    }
  }
  const keys = [];
  for (const key in attrs) {
    const value = attrs[key];
    if (value == null)
      continue;
    if (value === false)
      el.removeAttribute(key);
    else
      el.setAttribute(key, value);
    keys.push(key);
  }
  if (keys.length)
    el.setAttribute(HEAD_ATTRS_KEY, keys.join(","));
  else
    el.removeAttribute(HEAD_ATTRS_KEY);
};
var createElement = (tag, document2) => {
  var _a;
  const $el = document2.createElement(tag.tag);
  Object.entries(tag.props).forEach(([k, v]) => {
    if (v !== false) {
      $el.setAttribute(k, v === true ? "" : String(v));
    }
  });
  if (tag.children) {
    if ((_a = tag.options) == null ? void 0 : _a.safe) {
      if (tag.tag !== "script")
        $el.textContent = tag.children;
    } else {
      $el.innerHTML = tag.children;
    }
  }
  return $el;
};
var updateElements = (document2 = window.document, type, tags) => {
  var _a, _b;
  const head = document2.head;
  const body = document2.body;
  let headCountEl = head.querySelector(`meta[name="${HEAD_COUNT_KEY}"]`);
  const bodyMetaElements = body.querySelectorAll(`[${BODY_TAG_ATTR_NAME}]`);
  const headCount = headCountEl ? Number(headCountEl.getAttribute("content")) : 0;
  const oldHeadElements = [];
  const oldBodyElements = [];
  if (bodyMetaElements) {
    for (let i2 = 0; i2 < bodyMetaElements.length; i2++) {
      if (bodyMetaElements[i2] && ((_a = bodyMetaElements[i2].tagName) == null ? void 0 : _a.toLowerCase()) === type)
        oldBodyElements.push(bodyMetaElements[i2]);
    }
  }
  if (headCountEl) {
    for (let i2 = 0, j = headCountEl.previousElementSibling; i2 < headCount; i2++, j = (j == null ? void 0 : j.previousElementSibling) || null) {
      if (((_b = j == null ? void 0 : j.tagName) == null ? void 0 : _b.toLowerCase()) === type)
        oldHeadElements.push(j);
    }
  } else {
    headCountEl = document2.createElement("meta");
    headCountEl.setAttribute("name", HEAD_COUNT_KEY);
    headCountEl.setAttribute("content", "0");
    head.append(headCountEl);
  }
  let newElements = tags.map((tag) => {
    var _a3;
    var _a2;
    return {
      element: createElement(tag, document2),
      body: (_a3 = (_a2 = tag.options) == null ? void 0 : _a2.body) != null ? _a3 : false
    };
  });
  newElements = newElements.filter((newEl) => {
    for (let i2 = 0; i2 < oldHeadElements.length; i2++) {
      const oldEl = oldHeadElements[i2];
      if (isEqualNode(oldEl, newEl.element)) {
        oldHeadElements.splice(i2, 1);
        return false;
      }
    }
    for (let i2 = 0; i2 < oldBodyElements.length; i2++) {
      const oldEl = oldBodyElements[i2];
      if (isEqualNode(oldEl, newEl.element)) {
        oldBodyElements.splice(i2, 1);
        return false;
      }
    }
    return true;
  });
  oldBodyElements.forEach((t) => {
    var _a2;
    return (_a2 = t.parentNode) == null ? void 0 : _a2.removeChild(t);
  });
  oldHeadElements.forEach((t) => {
    var _a2;
    return (_a2 = t.parentNode) == null ? void 0 : _a2.removeChild(t);
  });
  newElements.forEach((t) => {
    if (t.body)
      body.insertAdjacentElement("beforeend", t.element);
    else
      head.insertBefore(t.element, headCountEl);
  });
  headCountEl.setAttribute(
    "content",
    `${headCount - oldHeadElements.length + newElements.filter((t) => !t.body).length}`
  );
};
var updateDOM = async (head, previousTags, document2) => {
  var _a, _b;
  const tags = {};
  if (!document2)
    document2 = window.document;
  for (const k in head.hooks["before:dom"]) {
    if (await head.hooks["before:dom"][k]() === false)
      return;
  }
  const resolvedEntries = resolveHeadEntries(head.headEntries);
  for (const h2 in head.hooks["resolved:entries"])
    await head.hooks["resolved:entries"][h2](resolvedEntries);
  const headTags = resolveHeadEntriesToTags(resolvedEntries);
  for (const h2 in head.hooks["resolved:tags"])
    await head.hooks["resolved:tags"][h2](headTags);
  for (const tag of headTags) {
    switch (tag.tag) {
      case "title":
        if (typeof tag.children !== "undefined")
          document2.title = tag.children;
        break;
      case "base":
      case "meta":
      case "link":
      case "style":
      case "script":
      case "noscript":
        tags[tag.tag] = tags[tag.tag] || [];
        tags[tag.tag].push(tag);
        break;
    }
  }
  setAttrs(document2.documentElement, ((_a = headTags.find((t) => t.tag === "htmlAttrs")) == null ? void 0 : _a.props) || {});
  setAttrs(document2.body, ((_b = headTags.find((t) => t.tag === "bodyAttrs")) == null ? void 0 : _b.props) || {});
  const tagKeys = /* @__PURE__ */ new Set([...Object.keys(tags), ...previousTags]);
  for (const tag of tagKeys)
    updateElements(document2, tag, tags[tag] || []);
  previousTags.clear();
  Object.keys(tags).forEach((i2) => previousTags.add(i2));
};
version.startsWith("2.");
var createHead = (initHeadObject) => {
  let entries = [];
  let entryId = 0;
  const previousTags = /* @__PURE__ */ new Set();
  let domUpdateTick = null;
  const head = {
    install(app) {
      if (app.config.globalProperties)
        app.config.globalProperties.$head = head;
      app.provide(PROVIDE_KEY$1, head);
    },
    hooks: {
      "before:dom": [],
      "resolved:tags": [],
      "resolved:entries": []
    },
    get headEntries() {
      return entries;
    },
    get headTags() {
      const resolvedEntries = resolveHeadEntries(head.headEntries);
      return resolveHeadEntriesToTags(resolvedEntries);
    },
    addHeadObjs(input, options) {
      return head.addEntry(input, options);
    },
    addEntry(input, options = {}) {
      let resolved = false;
      if (options == null ? void 0 : options.resolved) {
        resolved = true;
        delete options.resolved;
      }
      const entry2 = {
        id: entryId++,
        options,
        resolved,
        input
      };
      entries.push(entry2);
      return {
        remove() {
          entries = entries.filter((_objs) => _objs.id !== entry2.id);
        },
        update(updatedInput) {
          entries = entries.map((e) => {
            if (e.id === entry2.id)
              e.input = updatedInput;
            return e;
          });
        }
      };
    },
    async updateDOM(document2, force) {
      const doDomUpdate = () => {
        domUpdateTick = null;
        return updateDOM(head, previousTags, document2);
      };
      if (force)
        return doDomUpdate();
      return domUpdateTick = domUpdateTick || new Promise((resolve) => nextTick(() => resolve(doDomUpdate())));
    },
    addReactiveEntry(input, options = {}) {
      let entrySideEffect = null;
      const cleanUpWatch = watchEffect(() => {
        const resolvedInput = resolveUnrefHeadInput(input);
        if (entrySideEffect === null) {
          entrySideEffect = head.addEntry(
            resolvedInput,
            { ...options, resolved: true }
          );
        } else {
          entrySideEffect.update(resolvedInput);
        }
      });
      return () => {
        cleanUpWatch();
        if (entrySideEffect)
          entrySideEffect.remove();
      };
    }
  };
  if (initHeadObject)
    head.addEntry(initHeadObject);
  return head;
};
const appPageTransition = { "name": "page", "mode": "out-in" };
const appHead = { "meta": [{ "name": "viewport", "content": "width=device-width, initial-scale=1" }, { "charset": "utf-8" }], "link": [], "style": [], "script": [], "noscript": [] };
const appLayoutTransition = { "name": "layout", "mode": "out-in" };
const appKeepalive = false;
const node_modules_nuxt_dist_head_runtime_lib_vueuse_head_plugin_mjs_D7WGfuP1A0 = defineNuxtPlugin((nuxtApp) => {
  const head = createHead();
  head.addEntry(appHead, { resolved: true });
  nuxtApp.vueApp.use(head);
  nuxtApp._useHead = (_meta, options) => {
    {
      head.addEntry(_meta, options);
      return;
    }
  };
  {
    nuxtApp.ssrContext.renderMeta = async () => {
      const meta2 = await renderHeadToString(head);
      return {
        ...meta2,
        bodyScripts: meta2.bodyTags
      };
    };
  }
});
const metaMixin = {
  created() {
    const instance = getCurrentInstance();
    if (!instance) {
      return;
    }
    const options = instance.type;
    if (!options || !("head" in options)) {
      return;
    }
    const nuxtApp = useNuxtApp();
    const source = typeof options.head === "function" ? () => options.head(nuxtApp) : options.head;
    useHead(source);
  }
};
const node_modules_nuxt_dist_head_runtime_mixin_plugin_mjs_prWV5EzJWI = defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.mixin(metaMixin);
});
const _export_sfc$1 = (sfc, props2) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props2) {
    target[key] = val;
  }
  return target;
};
const meta$12 = void 0;
const meta$11 = void 0;
const meta$10 = void 0;
const meta$$ = void 0;
const meta$_ = {
  title: "forgot-password-v1",
  layout: "empty"
};
const _sfc_main$s = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "bg-white dark:bg-slate-800 rounded-lg mb-6 duration-300 shadow-md shadow-slate-200 dark:shadow-slate-900" }, _attrs))}>`);
  if (!!_ctx.$slots.header) {
    _push(`<header class="text-xl p-5 font-medium">`);
    ssrRenderSlot(_ctx.$slots, "header", {}, null, _push, _parent);
    _push(`</header>`);
  } else {
    _push(`<!---->`);
  }
  _push(`<main>`);
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</main>`);
  if (!!_ctx.$slots.body) {
    _push(`<div class="px-5 pb-5">`);
    ssrRenderSlot(_ctx.$slots, "body", {}, null, _push, _parent);
    _push(`</div>`);
  } else {
    _push(`<!---->`);
  }
  if (!!_ctx.$slots.footer) {
    _push(`<footer class="px-5 pb-5">`);
    ssrRenderSlot(_ctx.$slots, "footer", {}, null, _push, _parent);
    _push(`</footer>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</div>`);
}
const _sfc_setup$m = _sfc_main$s.setup;
_sfc_main$s.setup = (props2, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/RsCard.vue");
  return _sfc_setup$m ? _sfc_setup$m(props2, ctx) : void 0;
};
const __nuxt_component_1$2 = /* @__PURE__ */ _export_sfc$1(_sfc_main$s, [["ssrRender", _sfc_ssrRender$1]]);
const meta$Z = {
  title: "forgot-password-v2",
  layout: "empty"
};
const meta$Y = {
  title: "login-v1",
  layout: "empty"
};
const meta$X = {
  title: "login-v2",
  layout: "empty"
};
const meta$W = {
  title: "register-v1",
  layout: "empty"
};
const meta$V = {
  title: "register-v2",
  layout: "empty"
};
const meta$U = {
  title: "reset-password-v1",
  layout: "empty"
};
const meta$T = {
  title: "reset-password-v2",
  layout: "empty"
};
const meta$S = void 0;
const _sfc_main$r = /* @__PURE__ */ defineComponent({
  __name: "Icon",
  __ssrInlineRender: true,
  props: {
    name: {
      type: String,
      required: true
    },
    size: {
      type: String,
      default: ""
    }
  },
  async setup(__props) {
    let __temp, __restore;
    const props2 = __props;
    const nuxtApp = useNuxtApp();
    const nuxtIcon = useAppConfig().nuxtIcon;
    const state = useState("icons", () => ({}));
    const isFetching = ref(false);
    const iconName = computed(() => ((nuxtIcon == null ? void 0 : nuxtIcon.aliases) || {})[props2.name] || props2.name);
    const icon = computed(() => {
      var _a;
      return (_a = state.value) == null ? void 0 : _a[iconName.value];
    });
    const component = computed(() => nuxtApp.vueApp.component(iconName.value));
    const sSize = computed(() => {
      const size2 = props2.size || (nuxtIcon == null ? void 0 : nuxtIcon.size) || "1em";
      if (String(Number(size2)) === size2) {
        return `${size2}px`;
      }
      return size2;
    });
    async function loadIconComponent() {
      var _a;
      if (component.value) {
        return;
      }
      if (!((_a = state.value) == null ? void 0 : _a[iconName.value])) {
        isFetching.value = true;
        state.value[iconName.value] = await loadIcon(iconName.value).catch(() => void 0);
        isFetching.value = false;
      }
    }
    watch(() => iconName.value, loadIconComponent);
    !component.value && ([__temp, __restore] = withAsyncContext(() => loadIconComponent()), __temp = await __temp, __restore(), __temp);
    return (_ctx, _push, _parent, _attrs) => {
      if (unref(isFetching)) {
        _push(`<span${ssrRenderAttrs(mergeProps({
          class: "icon",
          width: unref(sSize),
          height: unref(sSize)
        }, _attrs))} data-v-ca945699></span>`);
      } else if (unref(icon)) {
        _push(ssrRenderComponent(unref(Icon$1), mergeProps({
          icon: unref(icon),
          class: "icon",
          width: unref(sSize),
          height: unref(sSize)
        }, _attrs), null, _parent));
      } else if (unref(component)) {
        ssrRenderVNode(_push, createVNode(resolveDynamicComponent(unref(component)), mergeProps({
          class: "icon",
          width: unref(sSize),
          height: unref(sSize)
        }, _attrs), null), _parent);
      } else {
        _push(`<span${ssrRenderAttrs(mergeProps({
          class: "icon",
          style: { fontSize: unref(sSize), lineHeight: unref(sSize), width: unref(sSize), height: unref(sSize) }
        }, _attrs))} data-v-ca945699>${ssrInterpolate(__props.name)}</span>`);
      }
    };
  }
});
const _sfc_setup$l = _sfc_main$r.setup;
_sfc_main$r.setup = (props2, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/nuxt-icon/dist/runtime/Icon.vue");
  return _sfc_setup$l ? _sfc_setup$l(props2, ctx) : void 0;
};
const __nuxt_component_1$1 = /* @__PURE__ */ _export_sfc$1(_sfc_main$r, [["__scopeId", "data-v-ca945699"]]);
const Icon = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: __nuxt_component_1$1
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$q = {
  __name: "Breadcrumb",
  __ssrInlineRender: true,
  setup(__props) {
    const route = useRoute();
    const breadcrumb = computed(() => {
      const matched = route.matched;
      const breadcrumb2 = matched.map((item) => {
        return {
          name: item.meta.title,
          path: item.path
        };
      });
      return breadcrumb2;
    });
    const title = computed(() => {
      const matched = route.matched;
      const title2 = matched[matched.length - 1].meta.title;
      return title2;
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Icon = __nuxt_component_1$1;
      if (unref(breadcrumb) && unref(title)) {
        _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex flex-col md:flex-row items-stretch justify-between pb-5" }, _attrs))}><span class="text-xl font-semibold">${ssrInterpolate(unref(title))}</span>`);
        if (unref(breadcrumb) && unref(breadcrumb).length != 0) {
          _push(`<div class="flex items-center text-sm"><!--[-->`);
          ssrRenderList(unref(breadcrumb), (item, index) => {
            _push(`<span class="flex items-center text-primary-400">`);
            if (index != 0) {
              _push(ssrRenderComponent(_component_Icon, {
                name: "ic:round-chevron-right",
                size: "14",
                class: "pr-1"
              }, null, _parent));
            } else {
              _push(`<!---->`);
            }
            _push(`<a class="underline cursor-pointer hover:text-primary-300 pr-1">${ssrInterpolate(item.name)}</a></span>`);
          });
          _push(`<!--]--></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
};
const _sfc_setup$k = _sfc_main$q.setup;
_sfc_main$q.setup = (props2, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/layouts/Breadcrumb.vue");
  return _sfc_setup$k ? _sfc_setup$k(props2, ctx) : void 0;
};
const _sfc_main$p = {
  __name: "RsButton",
  __ssrInlineRender: true,
  props: {
    type: {
      type: String,
      default: "fill"
    },
    variant: {
      type: String,
      default: "primary"
    },
    size: {
      type: String,
      default: "md"
    }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<button${ssrRenderAttrs(mergeProps({
        class: ["w-fit rounded-lg flex justify-center items-center h-fit", {
          "text-xs px-4 py-1": __props.size === "sm",
          "text-sm px-8 py-2.5": __props.size === "md",
          "text-base px-10 py-4": __props.size === "lg",
          "text-white bg-primary-400 hover:bg-primary-500 disabled:bg-primary-50 disabled:text-primary-100 disabled:border-primary-50 disabled:cursor-default dark:disabled:bg-slate-700 dark:disabled:text-slate-800 dark:disabled:border-slate-700": __props.variant === "primary",
          "text-white bg-secondary hover:bg-gray-500 disabled:bg-gray-50 disabled:text-gray-100 disabled:border-gray-50 disabled:cursor-default dark:disabled:bg-slate-700 dark:disabled:text-slate-800 dark:disabled:border-slate-700": __props.variant === "secondary",
          "text-white bg-blue-500 hover:bg-blue-600 disabled:bg-blue-50 disabled:text-blue-100 disabled:border-blue-50 disabled:cursor-default dark:disabled:bg-slate-700 dark:disabled:text-slate-800 dark:disabled:border-slate-700": __props.variant === "info",
          "text-white bg-green-500 hover:bg-green-600 disabled:bg-green-50 disabled:text-green-100 disabled:border-green-50 disabled:cursor-default dark:disabled:bg-slate-700 dark:disabled:text-slate-800 dark:disabled:border-slate-700": __props.variant === "success",
          "text-white bg-warning hover:bg-orange-500 disabled:bg-orange-50 disabled:text-orange-100 disabled:border-orange-50 disabled:cursor-default dark:disabled:bg-slate-700 dark:disabled:text-slate-800 dark:disabled:border-slate-700": __props.variant === "warning",
          "text-white bg-red-500 hover:bg-red-600 disabled:bg-red-50 disabled:text-red-100 disabled:border-red-50 disabled:cursor-default dark:disabled:bg-slate-700 dark:disabled:text-slate-800 dark:disabled:border-slate-700": __props.variant === "danger",
          "text-primary-400 border border-primary-400 hover:bg-primary-50 dark:hover:bg-slate-700 disabled:bg-primary-50 disabled:text-primary-100 disabled:border-primary-50 disabled:cursor-default dark:disabled:bg-slate-700 dark:disabled:text-slate-800 dark:disabled:border-slate-700": __props.variant === "primary-outline",
          "text-secondary border border-secondary hover:bg-gray-50 disabled:bg-gray-50 disabled:text-gray-100 disabled:border-gray-50 disabled:cursor-default dark:disabled:bg-slate-700 dark:disabled:text-slate-800 dark:disabled:border-slate-700": __props.variant === "secondary-outline",
          "text-blue-500 border border-blue-500 hover:bg-blue-50 disabled:bg-blue-50 disabled:text-blue-100 disabled:border-blue-50 disabled:cursor-default dark:disabled:bg-slate-700 dark:disabled:text-slate-800 dark:disabled:border-slate-700": __props.variant === "info-outline",
          "text-green-500 border border-green-500 hover:bg-green-50 disabled:bg-green-50 disabled:text-green-100 disabled:border-green-50 disabled:cursor-default dark:disabled:bg-slate-700 dark:disabled:text-slate-800 dark:disabled:border-slate-700": __props.variant === "success-outline",
          "text-warning border border-warning hover:bg-orange-50 disabled:bg-orange-50 disabled:text-orange-100 disabled:border-orange-50 disabled:cursor-default dark:disabled:bg-slate-700 dark:disabled:text-slate-800 dark:disabled:border-slate-700": __props.variant === "warning-outline",
          "text-red-500 border border-red-500 hover:bg-red-50 disabled:bg-red-50 disabled:text-red-100 disabled:border-red-50 disabled:cursor-default dark:disabled:bg-slate-700 dark:disabled:text-slate-800 dark:disabled:border-slate-700": __props.variant === "danger-outline",
          "text-primary-400 hover:bg-primary-50 disabled:bg-primary-50 disabled:text-primary-100 disabled:cursor-default dark:disabled:bg-slate-700 dark:disabled:text-slate-800": __props.variant === "primary-text",
          "text-secondary hover:bg-gray-50 disabled:bg-gray-50 disabled:text-gray-100 disabled:cursor-default dark:disabled:bg-slate-700 dark:disabled:text-slate-800": __props.variant === "secondary-text",
          "text-blue-500 hover:bg-blue-50 disabled:bg-blue-50 disabled:text-blue-100 disabled:cursor-default dark:disabled:bg-slate-700 dark:disabled:text-slate-800": __props.variant === "info-text",
          "text-green-500 hover:bg-green-50 disabled:bg-green-50 disabled:text-green-100 disabled:cursor-default dark:disabled:bg-slate-700 dark:disabled:text-slate-800": __props.variant === "success-text",
          "text-warning hover:bg-orange-50 disabled:bg-orange-50 disabled:text-orange-100 disabled:cursor-default dark:disabled:bg-slate-700 dark:disabled:text-slate-800": __props.variant === "warning-text",
          "text-red-500 hover:bg-red-50 disabled:bg-red-50 disabled:text-red-100 disabled:cursor-default dark:disabled:bg-slate-700 dark:disabled:text-slate-800": __props.variant === "danger-text"
        }]
      }, _attrs))}>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</button>`);
    };
  }
};
const _sfc_setup$j = _sfc_main$p.setup;
_sfc_main$p.setup = (props2, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/RsButton.vue");
  return _sfc_setup$j ? _sfc_setup$j(props2, ctx) : void 0;
};
const meta$R = {
  title: "Checkout"
};
const meta$Q = void 0;
const _sfc_main$o = {
  __name: "RsCollapse",
  __ssrInlineRender: true,
  props: {
    accordion: {
      type: Boolean,
      default: false
    },
    type: {
      type: String,
      default: "default"
    }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _directive_uid = resolveDirective("uid");
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: ["rs-collapse w-full mb-4", {
          "border-t border-x rounded-lg": __props.type === "border"
        }]
      }, _attrs, ssrGetDirectiveProps(_ctx, _directive_uid)))}>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</div>`);
    };
  }
};
const _sfc_setup$i = _sfc_main$o.setup;
_sfc_main$o.setup = (props2, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/RsCollapse.vue");
  return _sfc_setup$i ? _sfc_setup$i(props2, ctx) : void 0;
};
const _sfc_main$n = {
  __name: "RsCollapseItem",
  __ssrInlineRender: true,
  props: {
    title: {
      type: String,
      required: false
    }
  },
  setup(__props) {
    const collapseGroup = ref(null);
    ref(null);
    const instance = getCurrentInstance();
    instance.parent.props.accordion;
    const type = ref(instance.parent.props.type);
    ref(0);
    const maxHeight = ref(60);
    watch(
      () => instance.parent.props.type,
      (newValue) => {
        type.value = newValue;
      },
      { deep: true }
    );
    return (_ctx, _push, _parent, _attrs) => {
      const _directive_uid = resolveDirective("uid");
      _push(`<div${ssrRenderAttrs(mergeProps({
        ref_key: "collapseGroup",
        ref: collapseGroup,
        class: ["rs-collapse-group", {
          "border-b": unref(type) === "default",
          "border-b last:rounded-b-lg": unref(type) === "border",
          "shadow-md dark:shadow-slate-900 my-4": unref(type) === "card"
        }],
        style: `max-height: ${unref(maxHeight)}px; transition-property: max-height`
      }, _attrs, ssrGetDirectiveProps(_ctx, _directive_uid)))}><div class="rs-collapse-header">`);
      if (!!_ctx.$slots.title) {
        ssrRenderSlot(_ctx.$slots, "title", {}, null, _push, _parent);
      } else {
        _push(`<span>${ssrInterpolate(__props.title)}</span>`);
      }
      _push(`</div><div class="rs-collapse-body">`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</div></div>`);
    };
  }
};
const _sfc_setup$h = _sfc_main$n.setup;
_sfc_main$n.setup = (props2, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/RsCollapseItem.vue");
  return _sfc_setup$h ? _sfc_setup$h(props2, ctx) : void 0;
};
const _sfc_main$m = {
  __name: "RsProgressBar",
  __ssrInlineRender: true,
  props: {
    label: {
      type: String,
      default: ""
    },
    value: {
      type: Number,
      default: 0
    },
    max: {
      type: Number,
      default: 100
    },
    variant: {
      type: String,
      default: "primary"
    },
    size: {
      type: String,
      default: "md"
    },
    showValue: {
      type: Boolean,
      default: false
    }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "progress-wrapper w-full mb-4" }, _attrs))}><div class="progress-label text-sm mb-1">${ssrInterpolate(__props.label)}</div><div class="${ssrRenderClass([{
        "h-3": __props.size === "sm",
        "h-4": __props.size === "md",
        "h-5": __props.size === "lg",
        "bg-primary-200": __props.variant == "primary",
        "bg-secondary-200": __props.variant == "secondary",
        "bg-green-200": __props.variant == "success",
        "bg-red-200": __props.variant == "danger",
        "bg-orange-200": __props.variant == "warning",
        "bg-blue-200": __props.variant == "info"
      }, "progress flex rounded-full"])}"><div class="${ssrRenderClass([{
        "bg-primary-400": __props.variant == "primary",
        "bg-secondary-400": __props.variant == "secondary",
        "bg-green-400": __props.variant == "success",
        "bg-red-400": __props.variant == "danger",
        "bg-orange-400": __props.variant == "warning",
        "bg-blue-400": __props.variant == "info"
      }, "progressbar flex items-center justify-center rounded-full text-white"])}" style="${ssrRenderStyle({ width: __props.value / __props.max * 100 + "%" })}">`);
      if (__props.showValue) {
        _push(`<span class="text-xs">${ssrInterpolate(__props.value)}</span>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div></div>`);
    };
  }
};
const _sfc_setup$g = _sfc_main$m.setup;
_sfc_main$m.setup = (props2, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/RsProgressBar.vue");
  return _sfc_setup$g ? _sfc_setup$g(props2, ctx) : void 0;
};
const meta$P = {
  title: "Product Detail"
};
const isVue2 = false;
/*!
  * pinia v2.0.23
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */
let activePinia;
const setActivePinia = (pinia) => activePinia = pinia;
const piniaSymbol = Symbol();
function isPlainObject(o) {
  return o && typeof o === "object" && Object.prototype.toString.call(o) === "[object Object]" && typeof o.toJSON !== "function";
}
var MutationType;
(function(MutationType2) {
  MutationType2["direct"] = "direct";
  MutationType2["patchObject"] = "patch object";
  MutationType2["patchFunction"] = "patch function";
})(MutationType || (MutationType = {}));
function createPinia() {
  const scope = effectScope(true);
  const state = scope.run(() => ref({}));
  let _p = [];
  let toBeInstalled = [];
  const pinia = markRaw({
    install(app) {
      setActivePinia(pinia);
      {
        pinia._a = app;
        app.provide(piniaSymbol, pinia);
        app.config.globalProperties.$pinia = pinia;
        toBeInstalled.forEach((plugin2) => _p.push(plugin2));
        toBeInstalled = [];
      }
    },
    use(plugin2) {
      if (!this._a && !isVue2) {
        toBeInstalled.push(plugin2);
      } else {
        _p.push(plugin2);
      }
      return this;
    },
    _p,
    _a: null,
    _e: scope,
    _s: /* @__PURE__ */ new Map(),
    state
  });
  return pinia;
}
const noop = () => {
};
function addSubscription(subscriptions, callback, detached, onCleanup = noop) {
  subscriptions.push(callback);
  const removeSubscription = () => {
    const idx = subscriptions.indexOf(callback);
    if (idx > -1) {
      subscriptions.splice(idx, 1);
      onCleanup();
    }
  };
  if (!detached && getCurrentInstance()) {
    onUnmounted(removeSubscription);
  }
  return removeSubscription;
}
function triggerSubscriptions(subscriptions, ...args) {
  subscriptions.slice().forEach((callback) => {
    callback(...args);
  });
}
function mergeReactiveObjects(target, patchToApply) {
  if (target instanceof Map && patchToApply instanceof Map) {
    patchToApply.forEach((value, key) => target.set(key, value));
  }
  if (target instanceof Set && patchToApply instanceof Set) {
    patchToApply.forEach(target.add, target);
  }
  for (const key in patchToApply) {
    if (!patchToApply.hasOwnProperty(key))
      continue;
    const subPatch = patchToApply[key];
    const targetValue = target[key];
    if (isPlainObject(targetValue) && isPlainObject(subPatch) && target.hasOwnProperty(key) && !isRef(subPatch) && !isReactive(subPatch)) {
      target[key] = mergeReactiveObjects(targetValue, subPatch);
    } else {
      target[key] = subPatch;
    }
  }
  return target;
}
const skipHydrateSymbol = Symbol();
function shouldHydrate(obj) {
  return !isPlainObject(obj) || !obj.hasOwnProperty(skipHydrateSymbol);
}
const { assign: assign$1 } = Object;
function isComputed(o) {
  return !!(isRef(o) && o.effect);
}
function createOptionsStore(id, options, pinia, hot) {
  const { state, actions, getters } = options;
  const initialState = pinia.state.value[id];
  let store;
  function setup() {
    if (!initialState && (!("production" !== "production") )) {
      {
        pinia.state.value[id] = state ? state() : {};
      }
    }
    const localState = toRefs(pinia.state.value[id]);
    return assign$1(localState, actions, Object.keys(getters || {}).reduce((computedGetters, name) => {
      computedGetters[name] = markRaw(computed(() => {
        setActivePinia(pinia);
        const store2 = pinia._s.get(id);
        return getters[name].call(store2, store2);
      }));
      return computedGetters;
    }, {}));
  }
  store = createSetupStore(id, setup, options, pinia, hot, true);
  store.$reset = function $reset() {
    const newState = state ? state() : {};
    this.$patch(($state) => {
      assign$1($state, newState);
    });
  };
  return store;
}
function createSetupStore($id, setup, options = {}, pinia, hot, isOptionsStore) {
  let scope;
  const optionsForPlugin = assign$1({ actions: {} }, options);
  const $subscribeOptions = {
    deep: true
  };
  let isListening;
  let isSyncListening;
  let subscriptions = markRaw([]);
  let actionSubscriptions = markRaw([]);
  let debuggerEvents;
  const initialState = pinia.state.value[$id];
  if (!isOptionsStore && !initialState && (!("production" !== "production") )) {
    {
      pinia.state.value[$id] = {};
    }
  }
  ref({});
  let activeListener;
  function $patch(partialStateOrMutator) {
    let subscriptionMutation;
    isListening = isSyncListening = false;
    if (typeof partialStateOrMutator === "function") {
      partialStateOrMutator(pinia.state.value[$id]);
      subscriptionMutation = {
        type: MutationType.patchFunction,
        storeId: $id,
        events: debuggerEvents
      };
    } else {
      mergeReactiveObjects(pinia.state.value[$id], partialStateOrMutator);
      subscriptionMutation = {
        type: MutationType.patchObject,
        payload: partialStateOrMutator,
        storeId: $id,
        events: debuggerEvents
      };
    }
    const myListenerId = activeListener = Symbol();
    nextTick().then(() => {
      if (activeListener === myListenerId) {
        isListening = true;
      }
    });
    isSyncListening = true;
    triggerSubscriptions(subscriptions, subscriptionMutation, pinia.state.value[$id]);
  }
  const $reset = noop;
  function $dispose() {
    scope.stop();
    subscriptions = [];
    actionSubscriptions = [];
    pinia._s.delete($id);
  }
  function wrapAction(name, action) {
    return function() {
      setActivePinia(pinia);
      const args = Array.from(arguments);
      const afterCallbackList = [];
      const onErrorCallbackList = [];
      function after(callback) {
        afterCallbackList.push(callback);
      }
      function onError(callback) {
        onErrorCallbackList.push(callback);
      }
      triggerSubscriptions(actionSubscriptions, {
        args,
        name,
        store,
        after,
        onError
      });
      let ret;
      try {
        ret = action.apply(this && this.$id === $id ? this : store, args);
      } catch (error2) {
        triggerSubscriptions(onErrorCallbackList, error2);
        throw error2;
      }
      if (ret instanceof Promise) {
        return ret.then((value) => {
          triggerSubscriptions(afterCallbackList, value);
          return value;
        }).catch((error2) => {
          triggerSubscriptions(onErrorCallbackList, error2);
          return Promise.reject(error2);
        });
      }
      triggerSubscriptions(afterCallbackList, ret);
      return ret;
    };
  }
  const partialStore = {
    _p: pinia,
    $id,
    $onAction: addSubscription.bind(null, actionSubscriptions),
    $patch,
    $reset,
    $subscribe(callback, options2 = {}) {
      const removeSubscription = addSubscription(subscriptions, callback, options2.detached, () => stopWatcher());
      const stopWatcher = scope.run(() => watch(() => pinia.state.value[$id], (state) => {
        if (options2.flush === "sync" ? isSyncListening : isListening) {
          callback({
            storeId: $id,
            type: MutationType.direct,
            events: debuggerEvents
          }, state);
        }
      }, assign$1({}, $subscribeOptions, options2)));
      return removeSubscription;
    },
    $dispose
  };
  const store = reactive(partialStore);
  pinia._s.set($id, store);
  const setupStore = pinia._e.run(() => {
    scope = effectScope();
    return scope.run(() => setup());
  });
  for (const key in setupStore) {
    const prop = setupStore[key];
    if (isRef(prop) && !isComputed(prop) || isReactive(prop)) {
      if (!isOptionsStore) {
        if (initialState && shouldHydrate(prop)) {
          if (isRef(prop)) {
            prop.value = initialState[key];
          } else {
            mergeReactiveObjects(prop, initialState[key]);
          }
        }
        {
          pinia.state.value[$id][key] = prop;
        }
      }
    } else if (typeof prop === "function") {
      const actionValue = wrapAction(key, prop);
      {
        setupStore[key] = actionValue;
      }
      optionsForPlugin.actions[key] = prop;
    } else ;
  }
  {
    assign$1(store, setupStore);
    assign$1(toRaw(store), setupStore);
  }
  Object.defineProperty(store, "$state", {
    get: () => pinia.state.value[$id],
    set: (state) => {
      $patch(($state) => {
        assign$1($state, state);
      });
    }
  });
  pinia._p.forEach((extender) => {
    {
      assign$1(store, scope.run(() => extender({
        store,
        app: pinia._a,
        pinia,
        options: optionsForPlugin
      })));
    }
  });
  if (initialState && isOptionsStore && options.hydrate) {
    options.hydrate(store.$state, initialState);
  }
  isListening = true;
  isSyncListening = true;
  return store;
}
function defineStore(idOrOptions, setup, setupOptions) {
  let id;
  let options;
  const isSetupStore = typeof setup === "function";
  if (typeof idOrOptions === "string") {
    id = idOrOptions;
    options = isSetupStore ? setupOptions : setup;
  } else {
    options = idOrOptions;
    id = idOrOptions.id;
  }
  function useStore(pinia, hot) {
    const currentInstance = getCurrentInstance();
    pinia = (pinia) || currentInstance && inject(piniaSymbol);
    if (pinia)
      setActivePinia(pinia);
    pinia = activePinia;
    if (!pinia._s.has(id)) {
      if (isSetupStore) {
        createSetupStore(id, setup, options, pinia);
      } else {
        createOptionsStore(id, options, pinia);
      }
    }
    const store = pinia._s.get(id);
    return store;
  }
  useStore.$id = id;
  return useStore;
}
const useLayoutStore = defineStore({
  id: "layout",
  state: () => ({
    layoutType: "vertical",
    mobileWidth: "1024"
  }),
  actions: {
    setLayoutType(layoutType) {
      this.layoutType = layoutType;
    }
  }
});
const meta$O = {
  title: "Products"
};
const meta$N = {
  title: "404",
  layout: "empty"
};
const meta$M = {
  title: "500",
  layout: "empty"
};
const meta$L = {
  title: "Input Checkbox"
};
const meta$K = {
  title: "Custom Input"
};
const meta$J = {
  title: "Date Time"
};
const meta$I = {
  title: "File"
};
const meta$H = {
  title: "Input Group"
};
const meta$G = {
  title: "Input Mask"
};
const meta$F = {
  title: "Form Input"
};
const meta$E = {
  title: "Input Number"
};
const meta$D = {
  title: "Input Password"
};
const meta$C = {
  title: "Input Radio"
};
const meta$B = {
  title: "Input Select"
};
const meta$A = {
  title: "Input Textarea"
};
const __nuxt_component_3 = defineComponent({
  name: "ClientOnly",
  props: ["fallback", "placeholder", "placeholderTag", "fallbackTag"],
  setup(_, { slots }) {
    const mounted = ref(false);
    return (props2) => {
      var _a;
      if (mounted.value) {
        return (_a = slots.default) == null ? void 0 : _a.call(slots);
      }
      const slot = slots.fallback || slots.placeholder;
      if (slot) {
        return slot();
      }
      const fallbackStr = props2.fallback || props2.placeholder || "";
      const fallbackTag = props2.fallbackTag || props2.placeholderTag || "span";
      return createElementBlock(fallbackTag, null, fallbackStr);
    };
  }
});
const meta$z = {
  title: "VCalendar"
};
const meta$y = {
  title: "VueQuill"
};
const meta$x = {
  title: "Vue Select"
};
const _sfc_main$l = {
  __name: "RsWizard",
  __ssrInlineRender: true,
  props: {
    type: {
      type: String,
      default: "top"
    },
    steps: {
      type: Array,
      default: () => ["Default"]
    },
    currentStep: {
      type: String,
      default: ""
    },
    form: {
      type: Boolean,
      default: false
    },
    formSubmit: {
      type: Function,
      default: () => {
      }
    },
    formAction: {
      type: Boolean,
      default: true
    },
    formStepRequired: {
      type: Boolean,
      default: true
    },
    formStepBack: {
      type: Boolean,
      default: false
    },
    formNavigate: {
      type: Boolean,
      default: true
    },
    formErrorCounter: {
      type: Boolean,
      default: true
    }
  },
  setup(__props) {
    const props2 = __props;
    const step = reactive({});
    const activeStep = ref(props2.currentStep);
    const stepNames = ref(props2.steps);
    const visitedSteps = ref([]);
    const toLowerCase = (str) => str.toLowerCase().replace(/\s/g, "");
    const stepIndex = (stepName) => stepNames.value.indexOf(stepName);
    watch(activeStep, (newStep, oldStep) => {
      if (oldStep && !visitedSteps.value.includes(oldStep)) {
        visitedSteps.value.push(oldStep);
      }
      visitedSteps.value.forEach((step2) => {
        const node = getNode(step2);
        if (node != void 0)
          node.walk((n) => {
            n.store.set(
              createMessage({
                key: "submitted",
                value: true,
                visible: false
              })
            );
          });
      });
    });
    const nextStep = (stepName) => {
      const stepNames2 = Object.keys(step);
      const currentIndex = stepNames2.indexOf(activeStep.value);
      const nextIndex = stepNames2.indexOf(stepName);
      if (props2.formStepRequired) {
        if (!props2.formStepBack) {
          if (nextIndex > currentIndex) {
            if (step[activeStep.value].valid) {
              activeStep.value = stepName;
            } else {
              const node = getNode(activeStep.value);
              if (node)
                node.walk((n) => {
                  n.store.set(
                    createMessage({
                      key: "submitted",
                      value: true,
                      visible: false
                    })
                  );
                });
            }
          }
        } else {
          if (step[activeStep.value].valid || currentIndex > nextIndex) {
            activeStep.value = stepName;
          } else {
            const node = getNode(activeStep.value);
            if (node)
              node.walk((n) => {
                n.store.set(
                  createMessage({
                    key: "submitted",
                    value: true,
                    visible: false
                  })
                );
              });
          }
        }
      } else {
        activeStep.value = stepName;
      }
    };
    const setStep = (delta) => {
      const stepNames2 = Object.keys(step);
      const currentIndex = stepNames2.indexOf(activeStep.value);
      nextStep(stepNames2[currentIndex + delta]);
    };
    const stepPlugin = (node) => {
      if (node.props.type == "group") {
        step[node.name] = step[node.name] || {};
        node.on("created", () => {
          step[node.name].valid = toRef(node.context.state, "valid");
        });
        node.on("count:errors", ({ payload: count }) => {
          step[node.name].errorCount = count;
        });
        node.on("count:blocking", ({ payload: count }) => {
          step[node.name].blockingCount = count;
        });
        if (activeStep.value === "") {
          activeStep.value = node.name;
        }
        return false;
      }
    };
    const checkStepValidity = (stepName) => {
      if (step[stepName]) {
        return (step[stepName].errorCount > 0 || step[stepName].blockingCount > 0) && visitedSteps.value.includes(stepName);
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_FormKit = resolveComponent("FormKit");
      _push(ssrRenderComponent(_component_FormKit, mergeProps({
        type: "form",
        plugins: [stepPlugin],
        actions: __props.formAction ? true : false,
        onSubmit: ($event) => __props.formSubmit ? __props.formSubmit() : "",
        "form-class": { "top-form": __props.type == "top", "left-form": __props.type == "left" }
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<ul class="${ssrRenderClass({ "top-steps": __props.type == "top", "left-steps": __props.type == "left" })}"${_scopeId}><!--[-->`);
            ssrRenderList(unref(stepNames), (stepName, index) => {
              _push2(`<li class="${ssrRenderClass(["step", { "has-errors": checkStepValidity(stepName) }])}"${ssrRenderAttr("data-step-active", unref(activeStep) === stepName)}${ssrRenderAttr("data-step-completed", stepIndex(stepName) < stepIndex(unref(activeStep)))}${_scopeId}><div class="counter"${_scopeId}>${ssrInterpolate(index + 1)}.</div> ${ssrInterpolate(stepName)} `);
              if (checkStepValidity(stepName)) {
                _push2(`<span style="${ssrRenderStyle(__props.formErrorCounter ? null : { display: "none" })}" class="step--errors"${_scopeId}>${ssrInterpolate(unref(step)[stepName].errorCount + unref(step)[stepName].blockingCount)}</span>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`<div class="progress"${_scopeId}></div></li>`);
            });
            _push2(`<!--]--></ul><div class="form-wizard"${_scopeId}><!--[-->`);
            ssrRenderList(unref(stepNames), (stepName, index) => {
              _push2(`<section style="${ssrRenderStyle(unref(activeStep) === stepName ? null : { display: "none" })}"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_FormKit, {
                type: "group",
                id: stepName,
                name: stepName
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    ssrRenderSlot(_ctx.$slots, stepName === "Default" ? "default" : toLowerCase(stepName), {}, null, _push3, _parent3, _scopeId2);
                  } else {
                    return [
                      renderSlot(_ctx.$slots, stepName === "Default" ? "default" : toLowerCase(stepName))
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
              _push2(`</section>`);
            });
            _push2(`<!--]--></div>`);
            if (__props.formNavigate) {
              _push2(`<div class="flex justify-between"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_FormKit, {
                type: "button",
                disabled: stepIndex(unref(activeStep)) == 0,
                onClick: ($event) => setStep(-1)
              }, null, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_FormKit, {
                type: "button",
                disabled: stepIndex(unref(activeStep)) == unref(stepNames).length - 1,
                class: "next",
                onClick: ($event) => setStep(1)
              }, null, _parent2, _scopeId));
              _push2(`</div>`);
            } else {
              _push2(`<!---->`);
            }
          } else {
            return [
              createVNode("ul", {
                class: { "top-steps": __props.type == "top", "left-steps": __props.type == "left" }
              }, [
                (openBlock(true), createBlock(Fragment$1, null, renderList(unref(stepNames), (stepName, index) => {
                  return openBlock(), createBlock("li", {
                    key: index,
                    class: ["step", { "has-errors": checkStepValidity(stepName) }],
                    onClick: ($event) => nextStep(stepName),
                    "data-step-active": unref(activeStep) === stepName,
                    "data-step-completed": stepIndex(stepName) < stepIndex(unref(activeStep))
                  }, [
                    createVNode("div", { class: "counter" }, toDisplayString(index + 1) + ".", 1),
                    createTextVNode(" " + toDisplayString(stepName) + " ", 1),
                    checkStepValidity(stepName) ? withDirectives((openBlock(), createBlock("span", {
                      key: 0,
                      class: "step--errors",
                      textContent: toDisplayString(unref(step)[stepName].errorCount + unref(step)[stepName].blockingCount)
                    }, null, 8, ["textContent"])), [
                      [vShow, __props.formErrorCounter]
                    ]) : createCommentVNode("", true),
                    createVNode("div", { class: "progress" })
                  ], 10, ["onClick", "data-step-active", "data-step-completed"]);
                }), 128))
              ], 2),
              createVNode("div", { class: "form-wizard" }, [
                (openBlock(true), createBlock(Fragment$1, null, renderList(unref(stepNames), (stepName, index) => {
                  return withDirectives((openBlock(), createBlock("section", { key: index }, [
                    createVNode(_component_FormKit, {
                      type: "group",
                      id: stepName,
                      name: stepName
                    }, {
                      default: withCtx(() => [
                        renderSlot(_ctx.$slots, stepName === "Default" ? "default" : toLowerCase(stepName))
                      ]),
                      _: 2
                    }, 1032, ["id", "name"])
                  ])), [
                    [vShow, unref(activeStep) === stepName]
                  ]);
                }), 128))
              ]),
              __props.formNavigate ? (openBlock(), createBlock("div", {
                key: 0,
                class: "flex justify-between"
              }, [
                createVNode(_component_FormKit, {
                  type: "button",
                  disabled: stepIndex(unref(activeStep)) == 0,
                  onClick: ($event) => setStep(-1),
                  textContent: "Previous step"
                }, null, 8, ["disabled", "onClick"]),
                createVNode(_component_FormKit, {
                  type: "button",
                  disabled: stepIndex(unref(activeStep)) == unref(stepNames).length - 1,
                  class: "next",
                  onClick: ($event) => setStep(1),
                  textContent: "Next step"
                }, null, 8, ["disabled", "onClick"])
              ])) : createCommentVNode("", true)
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
};
const _sfc_setup$f = _sfc_main$l.setup;
_sfc_main$l.setup = (props2, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/RsWizard.vue");
  return _sfc_setup$f ? _sfc_setup$f(props2, ctx) : void 0;
};
const meta$w = {
  title: "Wizard Form"
};
const _sfc_main$k = {
  __name: "RsDropdown",
  __ssrInlineRender: true,
  props: {
    title: {
      type: String,
      default: "Default"
    },
    variant: {
      type: String,
      default: "primary"
    },
    position: {
      type: String,
      default: "bottom"
    },
    textAlign: {
      type: String,
      default: "left"
    },
    size: {
      type: String,
      default: "md"
    },
    itemSize: {
      type: String,
      default: "10rem"
    }
  },
  setup(__props) {
    const props2 = __props;
    const isOpen = ref(false);
    const closeMenu = (event) => {
      isOpen.value = false;
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Icon = __nuxt_component_1$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "relative inline-flex" }, _attrs, ssrGetDirectiveProps(_ctx, unref(directive), closeMenu)))}><button class="${ssrRenderClass([{
        "text-sm px-3 py-1.5": __props.size === "sm",
        "text-sm px-6 py-2.5": __props.size === "md",
        "text-base px-8 py-4": __props.size === "lg",
        "text-white focus:text-white bg-primary-400 hover:bg-primary-500 focus:bg-primary-500": __props.variant === "primary",
        "text-white focus:text-white bg-blue-500 hover:bg-blue-600 focus:bg-blue-600": __props.variant === "info",
        "text-white focus:text-white bg-green-500 hover:bg-green-600 focus:bg-green-600": __props.variant === "success",
        "text-white focus:text-white bg-warning hover:bg-orange-500 focus:bg-orange-500": __props.variant === "warning",
        "text-white focus:text-white bg-red-500 hover:bg-red-600 focus:bg-red-600": __props.variant === "danger",
        "text-primary-400 border border-primary-400 hover:bg-primary-50 focus:bg-primary-50": __props.variant === "primary-outline",
        "text-blue-500 border border-blue-500 hover:bg-blue-50 focus:bg-blue-50": __props.variant === "info-outline",
        "text-green-500 border border-green-500 hover:bg-green-50 focus:bg-green-50": __props.variant === "success-outline",
        "text-warning border border-warning hover:bg-orange-50 focus:bg-orange-50": __props.variant === "warning-outline",
        "text-red-500 border border-red-500 hover:bg-red-50 focus:bg-red-50": __props.variant === "danger-outline",
        "text-primary-400 hover:bg-primary-50 focus:bg-primary-50 ": __props.variant === "primary-text",
        "text-blue-500 hover:bg-blue-50 focus:bg-blue-50": __props.variant === "info-text",
        "text-green-500 hover:bg-green-50 focus:bg-green-50": __props.variant === "success-text",
        "text-warning hover:bg-orange-50 focus:bg-orange-50": __props.variant === "warning-text",
        "text-red-500 hover:bg-red-50 focus:bg-red-50": __props.variant === "danger-text"
      }, "flex items-center gap-x-2 rounded-lg focus:outline-none focus:ring-0 whitespace-nowrap"])}" type="button">`);
      if (_ctx.$slots.title) {
        ssrRenderSlot(_ctx.$slots, "title", {}, null, _push, _parent);
      } else {
        _push(`<span>${ssrInterpolate(props2.title)}</span>`);
      }
      if (__props.position === "bottom") {
        _push(ssrRenderComponent(_component_Icon, { name: "ic:outline-keyboard-arrow-down" }, null, _parent));
      } else if (__props.position === "top") {
        _push(ssrRenderComponent(_component_Icon, { name: "ic:outline-keyboard-arrow-up" }, null, _parent));
      } else if (__props.position === "left") {
        _push(ssrRenderComponent(_component_Icon, { name: "ic:outline-chevron-left" }, null, _parent));
      } else if (__props.position === "right") {
        _push(ssrRenderComponent(_component_Icon, { name: "ic:outline-chevron-right" }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</button><section class="${ssrRenderClass([{
        "top-10": __props.position == "bottom" && __props.size == "sm",
        "top-12": __props.position == "bottom" && __props.size == "md",
        "top-16": __props.position == "bottom" && __props.size == "lg",
        "bottom-10": __props.position == "top" && __props.size == "sm",
        "bottom-12": __props.position == "top" && __props.size == "md",
        "bottom-16": __props.position == "top" && __props.size == "lg",
        "top-0 -left-42": __props.position == "left",
        "top-0 -right-42": __props.position == "right",
        "right-0": (__props.position == "bottom" || __props.position == "top") && __props.textAlign == "right"
      }, "absolute z-10 bg-white dark:bg-slate-800 border dark:border-slate-700 shadow-md rounded-lg py-1 whitespace-nowrap"])}" style="${ssrRenderStyle([
        `min-width: ${__props.itemSize}`,
        unref(isOpen) ? null : { display: "none" }
      ])}">`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</section></div>`);
    };
  }
};
const _sfc_setup$e = _sfc_main$k.setup;
_sfc_main$k.setup = (props2, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/RsDropdown.vue");
  return _sfc_setup$e ? _sfc_setup$e(props2, ctx) : void 0;
};
const _sfc_main$j = {
  __name: "RsDropdownItem",
  __ssrInlineRender: true,
  props: {
    divider: {
      type: Boolean,
      default: false
    }
  },
  emits: ["click"],
  setup(__props, { emit: emits }) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      if (__props.divider) {
        _push(`<hr>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="flex items-center hover:bg-slate-100 dark:hover:bg-slate-700 cursor-pointer px-4 py-2">`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</div><!--]-->`);
    };
  }
};
const _sfc_setup$d = _sfc_main$j.setup;
_sfc_main$j.setup = (props2, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/RsDropdownItem.vue");
  return _sfc_setup$d ? _sfc_setup$d(props2, ctx) : void 0;
};
const _sfc_main$i = {
  __name: "RsTable",
  __ssrInlineRender: true,
  props: {
    field: {
      type: Array,
      default: () => []
    },
    data: {
      type: Array,
      default: () => []
    },
    basic: {
      type: Boolean,
      default: true
    },
    advanced: {
      type: Boolean,
      default: false
    },
    options: {
      type: Object,
      default: () => ({
        variant: "default",
        striped: false,
        bordered: false,
        borderless: false,
        hover: false
      })
    },
    optionsAdvanced: {
      type: Object,
      default: () => ({
        sortable: true,
        filterable: true,
        responsive: false
      })
    },
    grid: {
      type: Boolean,
      default: false
    }
  },
  setup(__props) {
    const props2 = __props;
    const layoutStore = useLayoutStore();
    const mobileWidth = layoutStore.mobileWidth;
    const { width } = useWindowSize();
    const windowWidth = ref(width);
    const columnTitle = ref([]);
    const dataTable = ref(props2.data);
    const dataTitle = ref([]);
    const dataLength = ref(props2.data.length);
    const currentSort = ref(0);
    const currentSortDir = ref("asc");
    const currentPage = ref(1);
    const pageSize = ref(5);
    const maxPageShown = ref(3);
    const keyword = ref("");
    const filter = ref([]);
    const openFilter = ref(false);
    const hideTable = ref(false);
    const isDesktop = computed(() => {
      return windowWidth.value >= mobileWidth ? true : false;
    });
    if (props2.optionsAdvanced.responsive) {
      if (isDesktop.value) {
        hideTable.value = false;
      } else {
        hideTable.value = true;
      }
    }
    watch(
      () => [props2.data, props2.field],
      () => {
        if (props2.field.length > 0) {
          columnTitle.value = props2.field;
          dataTitle.value = props2.field;
        } else {
          columnTitle.value = Object.keys(dataTable.value[0]);
          dataTitle.value = Object.keys(dataTable.value[0]);
        }
      },
      { immediate: true }
    );
    const camelCasetoTitle = (str) => {
      return str.replace(/([A-Z])/g, " $1").replace(/^./, (str2) => {
        return str2.toUpperCase();
      });
    };
    const setColumnTitle = (data) => {
      try {
        if (props2.field.length == 0) {
          columnTitle.value = Object.keys(data);
        } else {
          columnTitle.value = props2.field;
        }
      } catch (error2) {
        console.log(error2);
      }
    };
    setColumnTitle(dataTable.value[0]);
    computed(() => {
      let result = [];
      let totalData = 0;
      result = dataTable.value.slice().sort((a, b) => {
        let modifier = 1;
        let a1 = a[columnTitle.value[currentSort.value]];
        let b1 = b[columnTitle.value[currentSort.value]];
        if (currentSortDir.value === "desc")
          modifier = -1;
        if (a1 < b1)
          return -1 * modifier;
        if (a1 > b1)
          return 1 * modifier;
        return 0;
      }).filter((row) => {
        if (keyword.value === "")
          return true;
        let result2 = false;
        Object.entries(row).forEach(([key, value]) => {
          if (value.toString().toLowerCase().includes(keyword.value.toLowerCase())) {
            result2 = true;
          }
        });
        return result2;
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
    const totalEntries = computed(() => {
      return dataLength.value;
    });
    const pages = computed(() => {
      let totalPG = Math.ceil(dataLength.value / pageSize.value);
      const numShown = Math.min(maxPageShown.value, totalPG);
      let first = currentPage.value - Math.floor(numShown / 2);
      first = Math.max(first, 1);
      first = Math.min(first, totalPG - numShown + 1);
      return [...Array(numShown)].map((k, i2) => i2 + first);
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
    const firstPage = () => {
      currentPage.value = 1;
    };
    const lastPage = () => {
      currentPage.value = totalPage.value;
    };
    const hideColumn = (key) => {
      if (!getFilter(key)) {
        setFilter(key, "hide", true);
      } else {
        setFilter(key, "hide", false);
      }
    };
    const setFilter = (key, action, condition) => {
      let index = filter.value.findIndex((item) => item.key === key);
      if (index == -1) {
        filter.value.push({
          key,
          action: {
            [action]: condition
          }
        });
      } else {
        filter.value[index].action[action] = condition;
      }
    };
    const getFilter = (key) => {
      let result = false;
      filter.value.forEach((item) => {
        if (item.key === key) {
          result = item.action.hide;
        }
      });
      return result;
    };
    watch(
      () => filter.value,
      () => {
        filter.value.forEach((item) => {
          if (item.action.hide) {
            let index = columnTitle.value.indexOf(item.key);
            if (index !== -1) {
              columnTitle.value.splice(index, 1);
            }
          } else if (!item.action.hide) {
            let indexData = dataTitle.value.indexOf(item.key);
            if (!columnTitle.value.includes(item.key)) {
              columnTitle.value.splice(indexData, 0, item.key);
              columnTitle.value.sort((a, b) => {
                let indexA = dataTitle.value.indexOf(a);
                let indexB = dataTitle.value.indexOf(b);
                return indexA - indexB;
              });
            }
          }
        });
      },
      { deep: true }
    );
    const filterComputed = computed(() => {
      let result = [];
      filter.value.forEach((item) => {
        if (item.action.hide) {
          result.push({
            title: item.key,
            hide: item.action.hide
          });
        }
      });
      return result;
    });
    watch(
      () => windowWidth.value,
      () => {
        if (props2.optionsAdvanced.responsive) {
          if (windowWidth.value <= mobileWidth) {
            hideTable.value = true;
          } else {
            hideTable.value = false;
          }
        }
      },
      { deep: true }
    );
    return (_ctx, _push, _parent, _attrs) => {
      const _component_FormKit = resolveComponent("FormKit");
      const _component_rs_button = _sfc_main$p;
      const _component_Icon = __nuxt_component_1$1;
      const _component_rs_dropdown = _sfc_main$k;
      const _component_rs_dropdown_item = _sfc_main$j;
      const _component_ClientOnly = __nuxt_component_3;
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: ["table-wrapper", {
          "!border": __props.advanced && !unref(hideTable)
        }]
      }, _attrs))}>`);
      if (__props.advanced) {
        _push(`<div class="${ssrRenderClass([{
          open: unref(openFilter)
        }, "table-header"])}"><div class="table-header-filter"><div><div class="flex gap-x-2">`);
        _push(ssrRenderComponent(_component_FormKit, {
          modelValue: unref(keyword),
          "onUpdate:modelValue": ($event) => isRef(keyword) ? keyword.value = $event : null,
          type: "search",
          placeholder: "Search...",
          "outer-class": "mb-0"
        }, null, _parent));
        _push(ssrRenderComponent(_component_rs_button, {
          class: "!px-3 sm:!px-6 bg-primary-800",
          onClick: ($event) => unref(openFilter) ? openFilter.value = false : openFilter.value = true
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_Icon, {
                name: "ic:outline-filter-alt",
                class: "mr-0 md:mr-1",
                size: "1rem"
              }, null, _parent2, _scopeId));
              _push2(`<span class="hidden sm:block"${_scopeId}>Filter</span>`);
            } else {
              return [
                createVNode(_component_Icon, {
                  name: "ic:outline-filter-alt",
                  class: "mr-0 md:mr-1",
                  size: "1rem"
                }),
                createVNode("span", { class: "hidden sm:block" }, "Filter")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div></div><div class="flex justify-center items-center gap-x-2"><span class="text-secondary">Result per page:</span>`);
        _push(ssrRenderComponent(_component_FormKit, {
          type: "select",
          modelValue: unref(pageSize),
          "onUpdate:modelValue": ($event) => isRef(pageSize) ? pageSize.value = $event : null,
          options: [5, 10, 25, 100],
          "outer-class": "mb-0"
        }, null, _parent));
        _push(`</div></div><div class="flex flex-wrap items-center justify-start gap-x-3"><!--[-->`);
        ssrRenderList(unref(dataTitle), (val, index) => {
          _push(ssrRenderComponent(_component_rs_dropdown, {
            title: camelCasetoTitle(val),
            size: "sm",
            class: "mt-3",
            key: index
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(ssrRenderComponent(_component_rs_dropdown_item, {
                  onClick: ($event) => hideColumn(val)
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`${ssrInterpolate(getFilter(val) ? "Show Column" : "Hide Column")} `);
                      _push3(ssrRenderComponent(_component_Icon, {
                        name: getFilter(val) ? "mdi:eye-outline" : "mdi:eye-off-outline",
                        size: "1rem",
                        class: "ml-auto"
                      }, null, _parent3, _scopeId2));
                    } else {
                      return [
                        createTextVNode(toDisplayString(getFilter(val) ? "Show Column" : "Hide Column") + " ", 1),
                        createVNode(_component_Icon, {
                          name: getFilter(val) ? "mdi:eye-outline" : "mdi:eye-off-outline",
                          size: "1rem",
                          class: "ml-auto"
                        }, null, 8, ["name"])
                      ];
                    }
                  }),
                  _: 2
                }, _parent2, _scopeId));
              } else {
                return [
                  createVNode(_component_rs_dropdown_item, {
                    onClick: ($event) => hideColumn(val)
                  }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(getFilter(val) ? "Show Column" : "Hide Column") + " ", 1),
                      createVNode(_component_Icon, {
                        name: getFilter(val) ? "mdi:eye-outline" : "mdi:eye-off-outline",
                        size: "1rem",
                        class: "ml-auto"
                      }, null, 8, ["name"])
                    ]),
                    _: 2
                  }, 1032, ["onClick"])
                ];
              }
            }),
            _: 2
          }, _parent));
        });
        _push(`<!--]--></div></div>`);
      } else {
        _push(`<!---->`);
      }
      if (unref(filterComputed).length > 0) {
        _push(`<div class="table-header-filter-list w-full m-4"><div class="flex flex-wrap items-center justify-start gap-x-2"><!--[-->`);
        ssrRenderList(unref(filterComputed), (val, index) => {
          _push(`<div class="flex items-center justify-center gap-x-2 border border-primary-800 text-primary-800 rounded-lg py-1 px-2">${ssrInterpolate(val ? camelCasetoTitle(val.title) : "")} `);
          _push(ssrRenderComponent(_component_Icon, {
            name: "ic:round-close",
            class: "mr-0 md:mr-1 hover:text-red-800 cursor-pointer",
            size: "1rem",
            onClick: ($event) => hideColumn(val.title)
          }, null, _parent));
          _push(`</div>`);
        });
        _push(`<!--]--></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="w-full overflow-x-auto">`);
      _push(ssrRenderComponent(_component_ClientOnly, null, null, _parent));
      _push(`</div>`);
      if (__props.advanced) {
        _push(`<div class="table-footer"><div class="flex justify-center items-center gap-x-2"><span class="text-sm text-secondary hidden md:block">Showing ${ssrInterpolate(unref(pageSize) * unref(currentPage) - unref(pageSize) + 1)} to ${ssrInterpolate(unref(pageSize) * unref(currentPage))} of ${ssrInterpolate(unref(totalEntries))} entries</span></div><div class="table-footer-page">`);
        _push(ssrRenderComponent(_component_rs_button, {
          variant: "primary-outline",
          class: "rounded-full !p-1 w-8 h-8 text-primary-800 bg-primary-800",
          onClick: firstPage,
          disabled: unref(currentPage) == 1
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_Icon, {
                name: "ic:round-keyboard-double-arrow-left",
                size: "1rem"
              }, null, _parent2, _scopeId));
            } else {
              return [
                createVNode(_component_Icon, {
                  name: "ic:round-keyboard-double-arrow-left",
                  size: "1rem"
                })
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(ssrRenderComponent(_component_rs_button, {
          variant: "primary-outline",
          class: "rounded-full !p-1 w-8 h-8 text-red-800 bg-primary-800",
          onClick: prevPage,
          disabled: unref(currentPage) == 1
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_Icon, {
                name: "ic:round-keyboard-arrow-left",
                size: "1rem"
              }, null, _parent2, _scopeId));
            } else {
              return [
                createVNode(_component_Icon, {
                  name: "ic:round-keyboard-arrow-left",
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
            class: "rounded-full !p-1 w-8 h-8 bg-primary-800 text-white",
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
          class: "rounded-full !p-1 w-8 h-8 bg-primary-800 text-white",
          onClick: nextPage,
          disabled: unref(currentPage) == unref(totalPage)
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_Icon, {
                name: "ic:round-keyboard-arrow-right",
                size: "1rem"
              }, null, _parent2, _scopeId));
            } else {
              return [
                createVNode(_component_Icon, {
                  name: "ic:round-keyboard-arrow-right",
                  size: "1rem"
                })
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(ssrRenderComponent(_component_rs_button, {
          variant: "primary-outline",
          class: "rounded-full !p-1 w-8 h-8 bg-primary-800 text-white",
          onClick: lastPage,
          disabled: unref(currentPage) == unref(totalPage)
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_Icon, {
                name: "ic:round-keyboard-double-arrow-right",
                size: "1rem"
              }, null, _parent2, _scopeId));
            } else {
              return [
                createVNode(_component_Icon, {
                  name: "ic:round-keyboard-double-arrow-right",
                  size: "1rem"
                })
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
};
const _sfc_setup$c = _sfc_main$i.setup;
_sfc_main$i.setup = (props2, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/RsTable.vue");
  return _sfc_setup$c ? _sfc_setup$c(props2, ctx) : void 0;
};
const meta$v = void 0;
const meta$u = void 0;
const meta$t = void 0;
const meta$s = {
  title: "Apex Chart"
};
const meta$r = void 0;
const meta$q = {
  title: "Colors"
};
const _sfc_main$h = {
  __name: "RsAlert",
  __ssrInlineRender: true,
  props: {
    variant: {
      type: String,
      default: "primary"
    },
    dismissible: {
      type: Boolean,
      default: false
    },
    show: {
      type: Boolean,
      default: true
    },
    autoDismiss: {
      type: Boolean,
      default: false
    },
    timer: {
      type: Number,
      default: 1e3
    }
  },
  setup(__props) {
    const props2 = __props;
    const showComponent = ref(props2.show);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Icon = __nuxt_component_1$1;
      if (unref(showComponent)) {
        _push(`<div${ssrRenderAttrs(mergeProps({
          class: ["visible flex items-center justify-between w-100 py-2 px-3 rounded-lg", {
            "bg-blue-100  text-blue-500  ": __props.variant === "info",
            "bg-primary-100  text-primary-500 ": __props.variant === "primary",
            "bg-green-100  text-green-500  ": __props.variant === "success",
            "bg-orange-100  text-orange-500  ": __props.variant === "warning",
            "bg-red-100  text-red-500  ": __props.variant === "danger"
          }]
        }, _attrs))}>`);
        ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
        _push(`<button>`);
        _push(ssrRenderComponent(_component_Icon, {
          name: "ic:baseline-close",
          size: "14"
        }, null, _parent));
        _push(`</button></div>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
};
const _sfc_setup$b = _sfc_main$h.setup;
_sfc_main$h.setup = (props2, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/RsAlert.vue");
  return _sfc_setup$b ? _sfc_setup$b(props2, ctx) : void 0;
};
const meta$p = {
  title: "Alert"
};
const _sfc_main$g = {
  __name: "RsBadge",
  __ssrInlineRender: true,
  props: {
    variant: {
      type: String,
      default: "primary"
    },
    icon: {
      type: String,
      default: ""
    },
    iconSize: {
      type: String,
      default: "18"
    }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Icon = __nuxt_component_1$1;
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: ["inline whitespace-nowrap text-center rounded-lg w-auto text-white px-3 py-1", {
          "bg-blue-500": __props.variant === "info",
          "bg-primary-400": __props.variant === "primary",
          "bg-green-500": __props.variant === "success",
          "bg-warning": __props.variant === "warning",
          "bg-red-500": __props.variant === "danger"
        }]
      }, _attrs))}>`);
      if (__props.icon) {
        _push(ssrRenderComponent(_component_Icon, {
          class: "align-middle",
          name: __props.icon,
          size: __props.iconSize
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</div>`);
    };
  }
};
const _sfc_setup$a = _sfc_main$g.setup;
_sfc_main$g.setup = (props2, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/RsBadge.vue");
  return _sfc_setup$a ? _sfc_setup$a(props2, ctx) : void 0;
};
const meta$o = {
  title: "Badges"
};
const meta$n = {
  title: "Buttons"
};
const meta$m = {
  title: "Calendar"
};
const meta$l = {
  title: "Calendar"
};
const meta$k = {
  title: "Collapse"
};
const meta$j = {
  title: "Dropdown"
};
const _sfc_main$f = {
  __name: "RsModal",
  __ssrInlineRender: true,
  props: {
    title: {
      type: String,
      default: ""
    },
    size: {
      type: String,
      default: "md"
    },
    modelValue: {
      type: Boolean,
      default: false
    },
    position: {
      type: String,
      default: "top"
    },
    hideOverlay: {
      type: Boolean,
      default: false
    },
    okOnly: {
      type: Boolean,
      default: false
    },
    okTitle: {
      type: String,
      default: "OK"
    },
    cancelOnly: {
      type: Boolean,
      default: false
    },
    cancelTitle: {
      type: String,
      default: "Cancel"
    },
    okCallback: {
      type: Function,
      default: () => {
      }
    },
    cancelCallback: {
      type: Function,
      default: () => {
      }
    }
  },
  emits: ["update:modelValue"],
  setup(__props, { emit: emits }) {
    const props2 = __props;
    const closeModal = () => {
      emits("update:modelValue", false);
    };
    const validateCancelCallback = () => {
      if (props2.cancelCallback == "() => {}")
        closeModal();
      else
        props2.cancelCallback();
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Icon = __nuxt_component_1$1;
      const _component_rs_button = _sfc_main$p;
      ssrRenderTeleport(_push, (_push2) => {
        _push2(`<!--[-->`);
        if (__props.modelValue) {
          _push2(`<div class="${ssrRenderClass([{
            "flex items-start": __props.position == "top",
            "flex items-center": __props.position == "center",
            "flex items-end": __props.position == "bottom",
            "!bg-transparent": __props.hideOverlay
          }, "modal fixed top-0 left-0 w-full h-full overflow-hidden"])}"><div style="${ssrRenderStyle([
            __props.modelValue ? null : { display: "none" },
            {
              width: __props.size == "sm" ? "300px" : __props.size == "md" ? "500px" : "800px"
            }
          ])}" class="modal-dialog"><div class="modal-content border-none shadow-lg relative flex flex-col w-full pointer-events-auto bg-white dark:bg-slate-800 bg-clip-padding rounded-md outline-none text-current"><div class="modal-header flex flex-shrink-0 items-center justify-between p-4 border-b border-gray-200 dark:border-slate-700 rounded-t-md">`);
          if (!_ctx.$slots.header) {
            _push2(`<h4>${ssrInterpolate(__props.title)}</h4>`);
          } else {
            _push2(`<!---->`);
          }
          ssrRenderSlot(_ctx.$slots, "header", {}, null, _push2, _parent);
          _push2(ssrRenderComponent(_component_Icon, {
            onClick: closeModal,
            class: "hover:text-gray-800 cursor-pointer",
            name: "ic:round-close"
          }, null, _parent));
          _push2(`</div><div class="modal-body relative p-4">`);
          ssrRenderSlot(_ctx.$slots, "body", {}, null, _push2, _parent);
          if (!_ctx.$slots.body) {
            ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent);
          } else {
            _push2(`<!---->`);
          }
          _push2(`</div><div class="modal-footer flex flex-shrink-0 flex-wrap items-center justify-end p-4 border-t border-gray-200 dark:border-slate-700 rounded-b-md gap-x-3">`);
          ssrRenderSlot(_ctx.$slots, "footer", {}, null, _push2, _parent);
          if (!_ctx.$slots.footer && !__props.okOnly) {
            _push2(ssrRenderComponent(_component_rs_button, {
              onClick: validateCancelCallback,
              class: "bg-gray-500 hover:bg-gray-600"
            }, {
              default: withCtx((_, _push3, _parent2, _scopeId) => {
                if (_push3) {
                  _push3(`${ssrInterpolate(__props.cancelTitle)}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(__props.cancelTitle), 1)
                  ];
                }
              }),
              _: 1
            }, _parent));
          } else {
            _push2(`<!---->`);
          }
          if (!_ctx.$slots.footer && !__props.cancelOnly) {
            _push2(ssrRenderComponent(_component_rs_button, { onClick: __props.okCallback }, {
              default: withCtx((_, _push3, _parent2, _scopeId) => {
                if (_push3) {
                  _push3(`${ssrInterpolate(__props.okTitle)}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(__props.okTitle), 1)
                  ];
                }
              }),
              _: 1
            }, _parent));
          } else {
            _push2(`<!---->`);
          }
          _push2(`</div></div></div></div>`);
        } else {
          _push2(`<!---->`);
        }
        _push2(`<!--]-->`);
      }, "body", false, _parent);
    };
  }
};
const _sfc_setup$9 = _sfc_main$f.setup;
_sfc_main$f.setup = (props2, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/RsModal.vue");
  return _sfc_setup$9 ? _sfc_setup$9(props2, ctx) : void 0;
};
const meta$i = {
  title: "Modal"
};
const meta$h = {
  title: "Progress Bar"
};
const _sfc_main$e = {
  __name: "RsTab",
  __ssrInlineRender: true,
  props: {
    variant: {
      type: String,
      default: "primary"
    },
    type: {
      type: String,
      default: "default"
    },
    vertical: {
      type: Boolean,
      default: false
    },
    fill: {
      type: Boolean,
      default: false
    },
    justify: {
      type: String,
      default: "left"
    }
  },
  setup(__props) {
    const slots = useSlots();
    const tabs = ref(slots.default().map((tab) => tab.props));
    const selectedTitle = ref(tabs.value[0]["title"]);
    tabs.value.forEach((tab) => {
      if (typeof tab.active !== "undefined") {
        selectedTitle.value = tab.title;
      }
    });
    provide("selectedTitle", selectedTitle);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ClientOnly = __nuxt_component_3;
      _push(ssrRenderComponent(_component_ClientOnly, _attrs, null, _parent));
    };
  }
};
const _sfc_setup$8 = _sfc_main$e.setup;
_sfc_main$e.setup = (props2, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/RsTab.vue");
  return _sfc_setup$8 ? _sfc_setup$8(props2, ctx) : void 0;
};
const _sfc_main$d = {
  __name: "RsTabItem",
  __ssrInlineRender: true,
  props: {
    title: {
      type: String,
      required: true
    },
    active: {
      type: Boolean,
      default: false
    }
  },
  setup(__props) {
    const selectedTitle = inject("selectedTitle");
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: "tab-pane py-4 px-4",
        style: unref(selectedTitle) === __props.title ? null : { display: "none" }
      }, _attrs))}>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</div>`);
    };
  }
};
const _sfc_setup$7 = _sfc_main$d.setup;
_sfc_main$d.setup = (props2, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/RsTabItem.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props2, ctx) : void 0;
};
const meta$g = {
  title: "Tab"
};
const meta$f = {
  title: "Nuxt Icon"
};
const meta$e = {
  title: "Typography"
};
const _sfc_main$c = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><div role="status" class="p-4 bg-white space-y-4 w-full rounded border border-gray-200 divide-y divide-gray-200 shadow animate-pulse dark:divide-gray-700 md:p-6 dark:border-gray-700"><div class="flex justify-between items-center"><div><div class="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24 mb-2.5"></div><div class="w-32 h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div></div><div class="h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 w-12"></div></div><div class="flex justify-between items-center pt-4"><div><div class="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24 mb-2.5"></div><div class="w-32 h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div></div><div class="h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 w-12"></div></div><div class="flex justify-between items-center pt-4"><div><div class="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24 mb-2.5"></div><div class="w-32 h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div></div><div class="h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 w-12"></div></div><div class="flex justify-between items-center pt-4"><div><div class="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24 mb-2.5"></div><div class="w-32 h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div></div><div class="h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 w-12"></div></div><div class="flex justify-between items-center pt-4"><div><div class="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24 mb-2.5"></div><div class="w-32 h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div></div><div class="h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 w-12"></div></div><span class="sr-only">Loading...</span></div></div>`);
}
const _sfc_setup$6 = _sfc_main$c.setup;
_sfc_main$c.setup = (props2, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Skeleton.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props2, ctx) : void 0;
};
const __nuxt_component_0$1 = /* @__PURE__ */ _export_sfc$1(_sfc_main$c, [["ssrRender", _sfc_ssrRender]]);
const meta$d = void 0;
const meta$c = void 0;
const meta$b = void 0;
const meta$a = void 0;
const meta$9 = void 0;
const meta$8 = void 0;
const meta$7 = {
  layout: "empty"
};
const meta$6 = void 0;
const meta$5 = void 0;
const meta$4 = void 0;
const meta$3 = void 0;
const meta$2 = {
  title: "Dashboard"
};
const meta$1 = {
  title: "Forbidden",
  description: "Forbidden page",
  keywords: "forbidden, page",
  middleware: () => {
    return ["auth"];
  }
};
const meta = {
  title: "Home",
  description: "Home page",
  keywords: "home, page",
  middleware: ["dashboard"]
};
const _routes = [
  {
    name: "Agihan",
    path: "/Agihan",
    file: "/Users/syahrilsulaiman/Desktop/roseui-nuxt3/pages/Agihan/index.vue",
    children: [],
    meta: meta$12,
    alias: [],
    redirect: void 0,
    component: () => import('./_nuxt/index.2c9a49af.mjs').then((m) => m.default || m)
  },
  {
    name: "Institusi",
    path: "/Institusi",
    file: "/Users/syahrilsulaiman/Desktop/roseui-nuxt3/pages/Institusi/index.vue",
    children: [],
    meta: meta$11,
    alias: [],
    redirect: void 0,
    component: () => import('./_nuxt/index.05b94024.mjs').then((m) => m.default || m)
  },
  {
    name: "Kempen",
    path: "/Kempen",
    file: "/Users/syahrilsulaiman/Desktop/roseui-nuxt3/pages/Kempen/index.vue",
    children: [],
    meta: meta$10,
    alias: [],
    redirect: void 0,
    component: () => import('./_nuxt/index.9195e0c9.mjs').then((m) => m.default || m)
  },
  {
    name: "Kewangan",
    path: "/Kewangan",
    file: "/Users/syahrilsulaiman/Desktop/roseui-nuxt3/pages/Kewangan/index.vue",
    children: [],
    meta: meta$$,
    alias: [],
    redirect: void 0,
    component: () => import('./_nuxt/index.29ad29c8.mjs').then((m) => m.default || m)
  },
  {
    name: "Kitchensink-auth-forgot-password-v1",
    path: "/Kitchensink/auth/forgot-password-v1",
    file: "/Users/syahrilsulaiman/Desktop/roseui-nuxt3/pages/Kitchensink/auth/forgot-password-v1.vue",
    children: [],
    meta: meta$_,
    alias: (meta$_ == null ? void 0 : meta$_.alias) || [],
    redirect: (meta$_ == null ? void 0 : meta$_.redirect) || void 0,
    component: () => import('./_nuxt/forgot-password-v1.76511d28.mjs').then((m) => m.default || m)
  },
  {
    name: "Kitchensink-auth-forgot-password-v2",
    path: "/Kitchensink/auth/forgot-password-v2",
    file: "/Users/syahrilsulaiman/Desktop/roseui-nuxt3/pages/Kitchensink/auth/forgot-password-v2.vue",
    children: [],
    meta: meta$Z,
    alias: (meta$Z == null ? void 0 : meta$Z.alias) || [],
    redirect: (meta$Z == null ? void 0 : meta$Z.redirect) || void 0,
    component: () => import('./_nuxt/forgot-password-v2.6d10b3b0.mjs').then((m) => m.default || m)
  },
  {
    name: "Kitchensink-auth-login-v1",
    path: "/Kitchensink/auth/login-v1",
    file: "/Users/syahrilsulaiman/Desktop/roseui-nuxt3/pages/Kitchensink/auth/login-v1.vue",
    children: [],
    meta: meta$Y,
    alias: (meta$Y == null ? void 0 : meta$Y.alias) || [],
    redirect: (meta$Y == null ? void 0 : meta$Y.redirect) || void 0,
    component: () => import('./_nuxt/login-v1.333c0cde.mjs').then((m) => m.default || m)
  },
  {
    name: "Kitchensink-auth-login-v2",
    path: "/Kitchensink/auth/login-v2",
    file: "/Users/syahrilsulaiman/Desktop/roseui-nuxt3/pages/Kitchensink/auth/login-v2.vue",
    children: [],
    meta: meta$X,
    alias: (meta$X == null ? void 0 : meta$X.alias) || [],
    redirect: (meta$X == null ? void 0 : meta$X.redirect) || void 0,
    component: () => import('./_nuxt/login-v2.deda5489.mjs').then((m) => m.default || m)
  },
  {
    name: "Kitchensink-auth-register-v1",
    path: "/Kitchensink/auth/register-v1",
    file: "/Users/syahrilsulaiman/Desktop/roseui-nuxt3/pages/Kitchensink/auth/register-v1.vue",
    children: [],
    meta: meta$W,
    alias: (meta$W == null ? void 0 : meta$W.alias) || [],
    redirect: (meta$W == null ? void 0 : meta$W.redirect) || void 0,
    component: () => import('./_nuxt/register-v1.7c5aae8f.mjs').then((m) => m.default || m)
  },
  {
    name: "Kitchensink-auth-register-v2",
    path: "/Kitchensink/auth/register-v2",
    file: "/Users/syahrilsulaiman/Desktop/roseui-nuxt3/pages/Kitchensink/auth/register-v2.vue",
    children: [],
    meta: meta$V,
    alias: (meta$V == null ? void 0 : meta$V.alias) || [],
    redirect: (meta$V == null ? void 0 : meta$V.redirect) || void 0,
    component: () => import('./_nuxt/register-v2.96d45242.mjs').then((m) => m.default || m)
  },
  {
    name: "Kitchensink-auth-reset-password-v1",
    path: "/Kitchensink/auth/reset-password-v1",
    file: "/Users/syahrilsulaiman/Desktop/roseui-nuxt3/pages/Kitchensink/auth/reset-password-v1.vue",
    children: [],
    meta: meta$U,
    alias: (meta$U == null ? void 0 : meta$U.alias) || [],
    redirect: (meta$U == null ? void 0 : meta$U.redirect) || void 0,
    component: () => import('./_nuxt/reset-password-v1.16cfaa71.mjs').then((m) => m.default || m)
  },
  {
    name: "Kitchensink-auth-reset-password-v2",
    path: "/Kitchensink/auth/reset-password-v2",
    file: "/Users/syahrilsulaiman/Desktop/roseui-nuxt3/pages/Kitchensink/auth/reset-password-v2.vue",
    children: [],
    meta: meta$T,
    alias: (meta$T == null ? void 0 : meta$T.alias) || [],
    redirect: (meta$T == null ? void 0 : meta$T.redirect) || void 0,
    component: () => import('./_nuxt/reset-password-v2.3307b359.mjs').then((m) => m.default || m)
  },
  {
    name: "Kitchensink-ecommerce-category",
    path: "/Kitchensink/ecommerce/category",
    file: "/Users/syahrilsulaiman/Desktop/roseui-nuxt3/pages/Kitchensink/ecommerce/category.js",
    children: [],
    meta: meta$S,
    alias: [],
    redirect: void 0,
    component: () => import('./_nuxt/category.34740ef9.mjs').then((m) => m.default || m)
  },
  {
    name: "Kitchensink-ecommerce-checkout",
    path: "/Kitchensink/ecommerce/checkout",
    file: "/Users/syahrilsulaiman/Desktop/roseui-nuxt3/pages/Kitchensink/ecommerce/checkout.vue",
    children: [],
    meta: meta$R,
    alias: (meta$R == null ? void 0 : meta$R.alias) || [],
    redirect: (meta$R == null ? void 0 : meta$R.redirect) || void 0,
    component: () => import('./_nuxt/checkout.aba1e6da.mjs').then((m) => m.default || m)
  },
  {
    name: "Kitchensink-ecommerce-data",
    path: "/Kitchensink/ecommerce/data",
    file: "/Users/syahrilsulaiman/Desktop/roseui-nuxt3/pages/Kitchensink/ecommerce/data.js",
    children: [],
    meta: meta$Q,
    alias: [],
    redirect: void 0,
    component: () => import('./_nuxt/data.b5ed65c2.mjs').then((m) => m.default || m)
  },
  {
    name: "Kitchensink-ecommerce-product-detail",
    path: "/Kitchensink/ecommerce/product-detail",
    file: "/Users/syahrilsulaiman/Desktop/roseui-nuxt3/pages/Kitchensink/ecommerce/product-detail.vue",
    children: [],
    meta: meta$P,
    alias: (meta$P == null ? void 0 : meta$P.alias) || [],
    redirect: (meta$P == null ? void 0 : meta$P.redirect) || void 0,
    component: () => import('./_nuxt/product-detail.e06fc78e.mjs').then((m) => m.default || m)
  },
  {
    name: "Kitchensink-ecommerce-products",
    path: "/Kitchensink/ecommerce/products",
    file: "/Users/syahrilsulaiman/Desktop/roseui-nuxt3/pages/Kitchensink/ecommerce/products.vue",
    children: [],
    meta: meta$O,
    alias: (meta$O == null ? void 0 : meta$O.alias) || [],
    redirect: (meta$O == null ? void 0 : meta$O.redirect) || void 0,
    component: () => import('./_nuxt/products.b08e1342.mjs').then((m) => m.default || m)
  },
  {
    name: "Kitchensink-error-404",
    path: "/Kitchensink/error/404",
    file: "/Users/syahrilsulaiman/Desktop/roseui-nuxt3/pages/Kitchensink/error/404.vue",
    children: [],
    meta: meta$N,
    alias: (meta$N == null ? void 0 : meta$N.alias) || [],
    redirect: (meta$N == null ? void 0 : meta$N.redirect) || void 0,
    component: () => import('./_nuxt/404.eb23635e.mjs').then((m) => m.default || m)
  },
  {
    name: "Kitchensink-error-500",
    path: "/Kitchensink/error/500",
    file: "/Users/syahrilsulaiman/Desktop/roseui-nuxt3/pages/Kitchensink/error/500.vue",
    children: [],
    meta: meta$M,
    alias: (meta$M == null ? void 0 : meta$M.alias) || [],
    redirect: (meta$M == null ? void 0 : meta$M.redirect) || void 0,
    component: () => import('./_nuxt/500.a3557c8d.mjs').then((m) => m.default || m)
  },
  {
    name: "Kitchensink-form-element-checkbox",
    path: "/Kitchensink/form/element/checkbox",
    file: "/Users/syahrilsulaiman/Desktop/roseui-nuxt3/pages/Kitchensink/form/element/checkbox.vue",
    children: [],
    meta: meta$L,
    alias: (meta$L == null ? void 0 : meta$L.alias) || [],
    redirect: (meta$L == null ? void 0 : meta$L.redirect) || void 0,
    component: () => import('./_nuxt/checkbox.44e2d696.mjs').then((m) => m.default || m)
  },
  {
    name: "Kitchensink-form-element-custom",
    path: "/Kitchensink/form/element/custom",
    file: "/Users/syahrilsulaiman/Desktop/roseui-nuxt3/pages/Kitchensink/form/element/custom.vue",
    children: [],
    meta: meta$K,
    alias: (meta$K == null ? void 0 : meta$K.alias) || [],
    redirect: (meta$K == null ? void 0 : meta$K.redirect) || void 0,
    component: () => import('./_nuxt/custom.7cf1a7f3.mjs').then((m) => m.default || m)
  },
  {
    name: "Kitchensink-form-element-date-time",
    path: "/Kitchensink/form/element/date-time",
    file: "/Users/syahrilsulaiman/Desktop/roseui-nuxt3/pages/Kitchensink/form/element/date-time.vue",
    children: [],
    meta: meta$J,
    alias: (meta$J == null ? void 0 : meta$J.alias) || [],
    redirect: (meta$J == null ? void 0 : meta$J.redirect) || void 0,
    component: () => import('./_nuxt/date-time.de822eec.mjs').then((m) => m.default || m)
  },
  {
    name: "Kitchensink-form-element-file",
    path: "/Kitchensink/form/element/file",
    file: "/Users/syahrilsulaiman/Desktop/roseui-nuxt3/pages/Kitchensink/form/element/file.vue",
    children: [],
    meta: meta$I,
    alias: (meta$I == null ? void 0 : meta$I.alias) || [],
    redirect: (meta$I == null ? void 0 : meta$I.redirect) || void 0,
    component: () => import('./_nuxt/file.a6bd9b5d.mjs').then((m) => m.default || m)
  },
  {
    name: "Kitchensink-form-element-input-group",
    path: "/Kitchensink/form/element/input-group",
    file: "/Users/syahrilsulaiman/Desktop/roseui-nuxt3/pages/Kitchensink/form/element/input-group.vue",
    children: [],
    meta: meta$H,
    alias: (meta$H == null ? void 0 : meta$H.alias) || [],
    redirect: (meta$H == null ? void 0 : meta$H.redirect) || void 0,
    component: () => import('./_nuxt/input-group.b809493f.mjs').then((m) => m.default || m)
  },
  {
    name: "Kitchensink-form-element-input-mask",
    path: "/Kitchensink/form/element/input-mask",
    file: "/Users/syahrilsulaiman/Desktop/roseui-nuxt3/pages/Kitchensink/form/element/input-mask.vue",
    children: [],
    meta: meta$G,
    alias: (meta$G == null ? void 0 : meta$G.alias) || [],
    redirect: (meta$G == null ? void 0 : meta$G.redirect) || void 0,
    component: () => import('./_nuxt/input-mask.bf3ea113.mjs').then((m) => m.default || m)
  },
  {
    name: "Kitchensink-form-element-input",
    path: "/Kitchensink/form/element/input",
    file: "/Users/syahrilsulaiman/Desktop/roseui-nuxt3/pages/Kitchensink/form/element/input.vue",
    children: [],
    meta: meta$F,
    alias: (meta$F == null ? void 0 : meta$F.alias) || [],
    redirect: (meta$F == null ? void 0 : meta$F.redirect) || void 0,
    component: () => import('./_nuxt/input.0eb3f74f.mjs').then((m) => m.default || m)
  },
  {
    name: "Kitchensink-form-element-number",
    path: "/Kitchensink/form/element/number",
    file: "/Users/syahrilsulaiman/Desktop/roseui-nuxt3/pages/Kitchensink/form/element/number.vue",
    children: [],
    meta: meta$E,
    alias: (meta$E == null ? void 0 : meta$E.alias) || [],
    redirect: (meta$E == null ? void 0 : meta$E.redirect) || void 0,
    component: () => import('./_nuxt/number.ccc3d0cf.mjs').then((m) => m.default || m)
  },
  {
    name: "Kitchensink-form-element-password",
    path: "/Kitchensink/form/element/password",
    file: "/Users/syahrilsulaiman/Desktop/roseui-nuxt3/pages/Kitchensink/form/element/password.vue",
    children: [],
    meta: meta$D,
    alias: (meta$D == null ? void 0 : meta$D.alias) || [],
    redirect: (meta$D == null ? void 0 : meta$D.redirect) || void 0,
    component: () => import('./_nuxt/password.95669d71.mjs').then((m) => m.default || m)
  },
  {
    name: "Kitchensink-form-element-radio",
    path: "/Kitchensink/form/element/radio",
    file: "/Users/syahrilsulaiman/Desktop/roseui-nuxt3/pages/Kitchensink/form/element/radio.vue",
    children: [],
    meta: meta$C,
    alias: (meta$C == null ? void 0 : meta$C.alias) || [],
    redirect: (meta$C == null ? void 0 : meta$C.redirect) || void 0,
    component: () => import('./_nuxt/radio.4e20e92d.mjs').then((m) => m.default || m)
  },
  {
    name: "Kitchensink-form-element-select",
    path: "/Kitchensink/form/element/select",
    file: "/Users/syahrilsulaiman/Desktop/roseui-nuxt3/pages/Kitchensink/form/element/select.vue",
    children: [],
    meta: meta$B,
    alias: (meta$B == null ? void 0 : meta$B.alias) || [],
    redirect: (meta$B == null ? void 0 : meta$B.redirect) || void 0,
    component: () => import('./_nuxt/select.ae8ab842.mjs').then((m) => m.default || m)
  },
  {
    name: "Kitchensink-form-element-textarea",
    path: "/Kitchensink/form/element/textarea",
    file: "/Users/syahrilsulaiman/Desktop/roseui-nuxt3/pages/Kitchensink/form/element/textarea.vue",
    children: [],
    meta: meta$A,
    alias: (meta$A == null ? void 0 : meta$A.alias) || [],
    redirect: (meta$A == null ? void 0 : meta$A.redirect) || void 0,
    component: () => import('./_nuxt/textarea.adfc75a5.mjs').then((m) => m.default || m)
  },
  {
    name: "Kitchensink-form-element-vcalendar",
    path: "/Kitchensink/form/element/vcalendar",
    file: "/Users/syahrilsulaiman/Desktop/roseui-nuxt3/pages/Kitchensink/form/element/vcalendar.vue",
    children: [],
    meta: meta$z,
    alias: (meta$z == null ? void 0 : meta$z.alias) || [],
    redirect: (meta$z == null ? void 0 : meta$z.redirect) || void 0,
    component: () => import('./_nuxt/vcalendar.16cae4ee.mjs').then((m) => m.default || m)
  },
  {
    name: "Kitchensink-form-element-vue-quill",
    path: "/Kitchensink/form/element/vue-quill",
    file: "/Users/syahrilsulaiman/Desktop/roseui-nuxt3/pages/Kitchensink/form/element/vue-quill.vue",
    children: [],
    meta: meta$y,
    alias: (meta$y == null ? void 0 : meta$y.alias) || [],
    redirect: (meta$y == null ? void 0 : meta$y.redirect) || void 0,
    component: () => import('./_nuxt/vue-quill.e7017b0b.mjs').then((m) => m.default || m)
  },
  {
    name: "Kitchensink-form-element-vue-select",
    path: "/Kitchensink/form/element/vue-select",
    file: "/Users/syahrilsulaiman/Desktop/roseui-nuxt3/pages/Kitchensink/form/element/vue-select.vue",
    children: [],
    meta: meta$x,
    alias: (meta$x == null ? void 0 : meta$x.alias) || [],
    redirect: (meta$x == null ? void 0 : meta$x.redirect) || void 0,
    component: () => import('./_nuxt/vue-select.21003a62.mjs').then((m) => m.default || m)
  },
  {
    name: "Kitchensink-form-wizard",
    path: "/Kitchensink/form/wizard",
    file: "/Users/syahrilsulaiman/Desktop/roseui-nuxt3/pages/Kitchensink/form/wizard.vue",
    children: [],
    meta: meta$w,
    alias: (meta$w == null ? void 0 : meta$w.alias) || [],
    redirect: (meta$w == null ? void 0 : meta$w.redirect) || void 0,
    component: () => import('./_nuxt/wizard.85a67af8.mjs').then((m) => m.default || m)
  },
  {
    name: "Kitchensink-table-advanced",
    path: "/Kitchensink/table/advanced",
    file: "/Users/syahrilsulaiman/Desktop/roseui-nuxt3/pages/Kitchensink/table/advanced.vue",
    children: [],
    meta: meta$v,
    alias: [],
    redirect: void 0,
    component: () => import('./_nuxt/advanced.436109a6.mjs').then((m) => m.default || m)
  },
  {
    name: "Kitchensink-table-basic",
    path: "/Kitchensink/table/basic",
    file: "/Users/syahrilsulaiman/Desktop/roseui-nuxt3/pages/Kitchensink/table/basic.vue",
    children: [],
    meta: meta$u,
    alias: [],
    redirect: void 0,
    component: () => import('./_nuxt/basic.7a756e84.mjs').then((m) => m.default || m)
  },
  {
    name: "Kitchensink-table-data",
    path: "/Kitchensink/table/data",
    file: "/Users/syahrilsulaiman/Desktop/roseui-nuxt3/pages/Kitchensink/table/data.js",
    children: [],
    meta: meta$t,
    alias: [],
    redirect: void 0,
    component: () => import('./_nuxt/data.e8b59f98.mjs').then((m) => m.default || m)
  },
  {
    name: "Kitchensink-ui-chart-apex-chart",
    path: "/Kitchensink/ui/chart/apex-chart",
    file: "/Users/syahrilsulaiman/Desktop/roseui-nuxt3/pages/Kitchensink/ui/chart/apex-chart.vue",
    children: [],
    meta: meta$s,
    alias: (meta$s == null ? void 0 : meta$s.alias) || [],
    redirect: (meta$s == null ? void 0 : meta$s.redirect) || void 0,
    component: () => import('./_nuxt/apex-chart.eec56877.mjs').then((m) => m.default || m)
  },
  {
    name: "Kitchensink-ui-chart-chartjs",
    path: "/Kitchensink/ui/chart/chartjs",
    file: "/Users/syahrilsulaiman/Desktop/roseui-nuxt3/pages/Kitchensink/ui/chart/chartjs.vue",
    children: [],
    meta: meta$r,
    alias: [],
    redirect: void 0,
    component: () => import('./_nuxt/chartjs.e4b6c56a.mjs').then((m) => m.default || m)
  },
  {
    name: "Kitchensink-ui-colors",
    path: "/Kitchensink/ui/colors",
    file: "/Users/syahrilsulaiman/Desktop/roseui-nuxt3/pages/Kitchensink/ui/colors.vue",
    children: [],
    meta: meta$q,
    alias: (meta$q == null ? void 0 : meta$q.alias) || [],
    redirect: (meta$q == null ? void 0 : meta$q.redirect) || void 0,
    component: () => import('./_nuxt/colors.11f41198.mjs').then((m) => m.default || m)
  },
  {
    name: "Kitchensink-ui-component-alert",
    path: "/Kitchensink/ui/component/alert",
    file: "/Users/syahrilsulaiman/Desktop/roseui-nuxt3/pages/Kitchensink/ui/component/alert.vue",
    children: [],
    meta: meta$p,
    alias: (meta$p == null ? void 0 : meta$p.alias) || [],
    redirect: (meta$p == null ? void 0 : meta$p.redirect) || void 0,
    component: () => import('./_nuxt/alert.630632a7.mjs').then((m) => m.default || m)
  },
  {
    name: "Kitchensink-ui-component-badges",
    path: "/Kitchensink/ui/component/badges",
    file: "/Users/syahrilsulaiman/Desktop/roseui-nuxt3/pages/Kitchensink/ui/component/badges.vue",
    children: [],
    meta: meta$o,
    alias: (meta$o == null ? void 0 : meta$o.alias) || [],
    redirect: (meta$o == null ? void 0 : meta$o.redirect) || void 0,
    component: () => import('./_nuxt/badges.b48171e8.mjs').then((m) => m.default || m)
  },
  {
    name: "Kitchensink-ui-component-buttons",
    path: "/Kitchensink/ui/component/buttons",
    file: "/Users/syahrilsulaiman/Desktop/roseui-nuxt3/pages/Kitchensink/ui/component/buttons.vue",
    children: [],
    meta: meta$n,
    alias: (meta$n == null ? void 0 : meta$n.alias) || [],
    redirect: (meta$n == null ? void 0 : meta$n.redirect) || void 0,
    component: () => import('./_nuxt/buttons.ed55b90c.mjs').then((m) => m.default || m)
  },
  {
    name: "Kitchensink-ui-component-calendar",
    path: "/Kitchensink/ui/component/calendar",
    file: "/Users/syahrilsulaiman/Desktop/roseui-nuxt3/pages/Kitchensink/ui/component/calendar.vue",
    children: [],
    meta: meta$m,
    alias: (meta$m == null ? void 0 : meta$m.alias) || [],
    redirect: (meta$m == null ? void 0 : meta$m.redirect) || void 0,
    component: () => import('./_nuxt/calendar.fb131f2b.mjs').then((m) => m.default || m)
  },
  {
    name: "Kitchensink-ui-component-carousel",
    path: "/Kitchensink/ui/component/carousel",
    file: "/Users/syahrilsulaiman/Desktop/roseui-nuxt3/pages/Kitchensink/ui/component/carousel.vue",
    children: [],
    meta: meta$l,
    alias: (meta$l == null ? void 0 : meta$l.alias) || [],
    redirect: (meta$l == null ? void 0 : meta$l.redirect) || void 0,
    component: () => import('./_nuxt/carousel.081d645a.mjs').then((m) => m.default || m)
  },
  {
    name: "Kitchensink-ui-component-collapse",
    path: "/Kitchensink/ui/component/collapse",
    file: "/Users/syahrilsulaiman/Desktop/roseui-nuxt3/pages/Kitchensink/ui/component/collapse.vue",
    children: [],
    meta: meta$k,
    alias: (meta$k == null ? void 0 : meta$k.alias) || [],
    redirect: (meta$k == null ? void 0 : meta$k.redirect) || void 0,
    component: () => import('./_nuxt/collapse.7ae46b15.mjs').then((m) => m.default || m)
  },
  {
    name: "Kitchensink-ui-component-dropdown",
    path: "/Kitchensink/ui/component/dropdown",
    file: "/Users/syahrilsulaiman/Desktop/roseui-nuxt3/pages/Kitchensink/ui/component/dropdown.vue",
    children: [],
    meta: meta$j,
    alias: (meta$j == null ? void 0 : meta$j.alias) || [],
    redirect: (meta$j == null ? void 0 : meta$j.redirect) || void 0,
    component: () => import('./_nuxt/dropdown.860beaa4.mjs').then((m) => m.default || m)
  },
  {
    name: "Kitchensink-ui-component-modal",
    path: "/Kitchensink/ui/component/modal",
    file: "/Users/syahrilsulaiman/Desktop/roseui-nuxt3/pages/Kitchensink/ui/component/modal.vue",
    children: [],
    meta: meta$i,
    alias: (meta$i == null ? void 0 : meta$i.alias) || [],
    redirect: (meta$i == null ? void 0 : meta$i.redirect) || void 0,
    component: () => import('./_nuxt/modal.1d7dc95b.mjs').then((m) => m.default || m)
  },
  {
    name: "Kitchensink-ui-component-progress",
    path: "/Kitchensink/ui/component/progress",
    file: "/Users/syahrilsulaiman/Desktop/roseui-nuxt3/pages/Kitchensink/ui/component/progress.vue",
    children: [],
    meta: meta$h,
    alias: (meta$h == null ? void 0 : meta$h.alias) || [],
    redirect: (meta$h == null ? void 0 : meta$h.redirect) || void 0,
    component: () => import('./_nuxt/progress.eb710972.mjs').then((m) => m.default || m)
  },
  {
    name: "Kitchensink-ui-component-tab",
    path: "/Kitchensink/ui/component/tab",
    file: "/Users/syahrilsulaiman/Desktop/roseui-nuxt3/pages/Kitchensink/ui/component/tab.vue",
    children: [],
    meta: meta$g,
    alias: (meta$g == null ? void 0 : meta$g.alias) || [],
    redirect: (meta$g == null ? void 0 : meta$g.redirect) || void 0,
    component: () => import('./_nuxt/tab.06e1a798.mjs').then((m) => m.default || m)
  },
  {
    name: "Kitchensink-ui-icon-nuxt-icon",
    path: "/Kitchensink/ui/icon/nuxt-icon",
    file: "/Users/syahrilsulaiman/Desktop/roseui-nuxt3/pages/Kitchensink/ui/icon/nuxt-icon.vue",
    children: [],
    meta: meta$f,
    alias: (meta$f == null ? void 0 : meta$f.alias) || [],
    redirect: (meta$f == null ? void 0 : meta$f.redirect) || void 0,
    component: () => import('./_nuxt/nuxt-icon.c510735f.mjs').then((m) => m.default || m)
  },
  {
    name: "Kitchensink-ui-typography",
    path: "/Kitchensink/ui/typography",
    file: "/Users/syahrilsulaiman/Desktop/roseui-nuxt3/pages/Kitchensink/ui/typography.vue",
    children: [],
    meta: meta$e,
    alias: (meta$e == null ? void 0 : meta$e.alias) || [],
    redirect: (meta$e == null ? void 0 : meta$e.redirect) || void 0,
    component: () => import('./_nuxt/typography.343c0715.mjs').then((m) => m.default || m)
  },
  {
    name: "Kredit-akaun-kredit-institusi",
    path: "/Kredit/akaun-kredit-institusi",
    file: "/Users/syahrilsulaiman/Desktop/roseui-nuxt3/pages/Kredit/akaun-kredit-institusi.vue",
    children: [],
    meta: meta$d,
    alias: [],
    redirect: void 0,
    component: () => import('./_nuxt/akaun-kredit-institusi.8653eedb.mjs').then((m) => m.default || m)
  },
  {
    name: "Kredit-akaun-kredit-pengguna",
    path: "/Kredit/akaun-kredit-pengguna",
    file: "/Users/syahrilsulaiman/Desktop/roseui-nuxt3/pages/Kredit/akaun-kredit-pengguna.vue",
    children: [],
    meta: meta$c,
    alias: [],
    redirect: void 0,
    component: () => import('./_nuxt/akaun-kredit-pengguna.0fc04e35.mjs').then((m) => m.default || m)
  },
  {
    name: "Kredit",
    path: "/Kredit",
    file: "/Users/syahrilsulaiman/Desktop/roseui-nuxt3/pages/Kredit/index.vue",
    children: [],
    meta: meta$b,
    alias: [],
    redirect: void 0,
    component: () => import('./_nuxt/index.a74cf31c.mjs').then((m) => m.default || m)
  },
  {
    name: "Kredit-tambah-nilai",
    path: "/Kredit/tambah-nilai",
    file: "/Users/syahrilsulaiman/Desktop/roseui-nuxt3/pages/Kredit/tambah-nilai.vue",
    children: [],
    meta: meta$a,
    alias: [],
    redirect: void 0,
    component: () => import('./_nuxt/tambah-nilai.65a97a8c.mjs').then((m) => m.default || m)
  },
  {
    name: "Laporan",
    path: "/Laporan",
    file: "/Users/syahrilsulaiman/Desktop/roseui-nuxt3/pages/Laporan/index.vue",
    children: [],
    meta: meta$9,
    alias: [],
    redirect: void 0,
    component: () => import('./_nuxt/index.e5a6ab7a.mjs').then((m) => m.default || m)
  },
  {
    name: "Pengguna",
    path: "/Pengguna",
    file: "/Users/syahrilsulaiman/Desktop/roseui-nuxt3/pages/Pengguna/index.vue",
    children: [],
    meta: meta$8,
    alias: [],
    redirect: void 0,
    component: () => import('./_nuxt/index.63099c18.mjs').then((m) => m.default || m)
  },
  {
    name: "Receipt",
    path: "/Receipt",
    file: "/Users/syahrilsulaiman/Desktop/roseui-nuxt3/pages/Receipt.vue",
    children: [],
    meta: meta$7,
    alias: (meta$7 == null ? void 0 : meta$7.alias) || [],
    redirect: (meta$7 == null ? void 0 : meta$7.redirect) || void 0,
    component: () => import('./_nuxt/Receipt.a2a88732.mjs').then((m) => m.default || m)
  },
  {
    name: "Tetapan-Aplikasi",
    path: "/Tetapan/Aplikasi",
    file: "/Users/syahrilsulaiman/Desktop/roseui-nuxt3/pages/Tetapan/Aplikasi/index.vue",
    children: [],
    meta: meta$6,
    alias: [],
    redirect: void 0,
    component: () => import('./_nuxt/index.e82b09ee.mjs').then((m) => m.default || m)
  },
  {
    name: "Tetapan-Sistem",
    path: "/Tetapan/Sistem",
    file: "/Users/syahrilsulaiman/Desktop/roseui-nuxt3/pages/Tetapan/Sistem/index.vue",
    children: [],
    meta: meta$5,
    alias: [],
    redirect: void 0,
    component: () => import('./_nuxt/index.51dd205e.mjs').then((m) => m.default || m)
  },
  {
    name: "Transaksi",
    path: "/Transaksi",
    file: "/Users/syahrilsulaiman/Desktop/roseui-nuxt3/pages/Transaksi/index.vue",
    children: [],
    meta: meta$4,
    alias: [],
    redirect: void 0,
    component: () => import('./_nuxt/index.5401fd0c.mjs').then((m) => m.default || m)
  },
  {
    name: "Wakaf",
    path: "/Wakaf",
    file: "/Users/syahrilsulaiman/Desktop/roseui-nuxt3/pages/Wakaf/index.vue",
    children: [],
    meta: meta$3,
    alias: [],
    redirect: void 0,
    component: () => import('./_nuxt/index.3e4453e2.mjs').then((m) => m.default || m)
  },
  {
    name: "dashboard",
    path: "/dashboard",
    file: "/Users/syahrilsulaiman/Desktop/roseui-nuxt3/pages/dashboard.vue",
    children: [],
    meta: meta$2,
    alias: (meta$2 == null ? void 0 : meta$2.alias) || [],
    redirect: (meta$2 == null ? void 0 : meta$2.redirect) || void 0,
    component: () => import('./_nuxt/dashboard.a58b7941.mjs').then((m) => m.default || m)
  },
  {
    name: "forbidden",
    path: "/forbidden",
    file: "/Users/syahrilsulaiman/Desktop/roseui-nuxt3/pages/forbidden.vue",
    children: [],
    meta: meta$1,
    alias: (meta$1 == null ? void 0 : meta$1.alias) || [],
    redirect: (meta$1 == null ? void 0 : meta$1.redirect) || void 0,
    component: () => import('./_nuxt/forbidden.a04e67df.mjs').then((m) => m.default || m)
  },
  {
    name: "index",
    path: "/",
    file: "/Users/syahrilsulaiman/Desktop/roseui-nuxt3/pages/index.vue",
    children: [],
    meta,
    alias: (meta == null ? void 0 : meta.alias) || [],
    redirect: (meta == null ? void 0 : meta.redirect) || void 0,
    component: () => import('./_nuxt/index.dee35ce1.mjs').then((m) => m.default || m)
  }
];
const configRouterOptions = {};
const routerOptions = {
  ...configRouterOptions
};
const validate = defineNuxtRouteMiddleware(async (to) => {
  var _a;
  let __temp, __restore;
  if (!((_a = to.meta) == null ? void 0 : _a.validate)) {
    return;
  }
  const result = ([__temp, __restore] = executeAsync(() => Promise.resolve(to.meta.validate(to))), __temp = await __temp, __restore(), __temp);
  if (typeof result === "boolean") {
    return result;
  }
  return createError(result);
});
const globalMiddleware = [
  validate
];
const namedMiddleware = {
  auth: () => import('./_nuxt/auth.f2410fd5.mjs'),
  dashboard: () => import('./_nuxt/dashboard.d4ed2a8e.mjs')
};
const node_modules_nuxt_dist_pages_runtime_router_mjs_qNv5Ky2ZmB = defineNuxtPlugin(async (nuxtApp) => {
  var _a, _b, _c, _d;
  let __temp, __restore;
  let routerBase = useRuntimeConfig().app.baseURL;
  if (routerOptions.hashMode && !routerBase.includes("#")) {
    routerBase += "#";
  }
  const history = (_b = (_a = routerOptions.history) == null ? void 0 : _a.call(routerOptions, routerBase)) != null ? _b : createMemoryHistory(routerBase);
  const routes = (_d = (_c = routerOptions.routes) == null ? void 0 : _c.call(routerOptions, _routes)) != null ? _d : _routes;
  const initialURL = nuxtApp.ssrContext.url;
  const router = createRouter({
    ...routerOptions,
    history,
    routes
  });
  nuxtApp.vueApp.use(router);
  const previousRoute = shallowRef(router.currentRoute.value);
  router.afterEach((_to, from) => {
    previousRoute.value = from;
  });
  Object.defineProperty(nuxtApp.vueApp.config.globalProperties, "previousRoute", {
    get: () => previousRoute.value
  });
  const _route = shallowRef(router.resolve(initialURL));
  const syncCurrentRoute = () => {
    _route.value = router.currentRoute.value;
  };
  nuxtApp.hook("page:finish", syncCurrentRoute);
  router.afterEach((to, from) => {
    var _a2, _b2, _c2, _d2;
    if (((_b2 = (_a2 = to.matched[0]) == null ? void 0 : _a2.components) == null ? void 0 : _b2.default) === ((_d2 = (_c2 = from.matched[0]) == null ? void 0 : _c2.components) == null ? void 0 : _d2.default)) {
      syncCurrentRoute();
    }
  });
  const route = {};
  for (const key in _route.value) {
    route[key] = computed(() => _route.value[key]);
  }
  nuxtApp._route = reactive(route);
  nuxtApp._middleware = nuxtApp._middleware || {
    global: [],
    named: {}
  };
  useError();
  try {
    if (true) {
      ;
      [__temp, __restore] = executeAsync(() => router.push(initialURL)), await __temp, __restore();
      ;
    }
    ;
    [__temp, __restore] = executeAsync(() => router.isReady()), await __temp, __restore();
    ;
  } catch (error2) {
    callWithNuxt(nuxtApp, showError, [error2]);
  }
  const initialLayout = useState("_layout");
  router.beforeEach(async (to, from) => {
    var _a2, _b2;
    to.meta = reactive(to.meta);
    if (nuxtApp.isHydrating) {
      to.meta.layout = (_a2 = initialLayout.value) != null ? _a2 : to.meta.layout;
    }
    nuxtApp._processingMiddleware = true;
    const middlewareEntries = /* @__PURE__ */ new Set([...globalMiddleware, ...nuxtApp._middleware.global]);
    for (const component of to.matched) {
      const componentMiddleware = component.meta.middleware;
      if (!componentMiddleware) {
        continue;
      }
      if (Array.isArray(componentMiddleware)) {
        for (const entry2 of componentMiddleware) {
          middlewareEntries.add(entry2);
        }
      } else {
        middlewareEntries.add(componentMiddleware);
      }
    }
    for (const entry2 of middlewareEntries) {
      const middleware = typeof entry2 === "string" ? nuxtApp._middleware.named[entry2] || await ((_b2 = namedMiddleware[entry2]) == null ? void 0 : _b2.call(namedMiddleware).then((r) => r.default || r)) : entry2;
      if (!middleware) {
        throw new Error(`Unknown route middleware: '${entry2}'.`);
      }
      const result = await callWithNuxt(nuxtApp, middleware, [to, from]);
      {
        if (result === false || result instanceof Error) {
          const error2 = result || createError$1({
            statusCode: 404,
            statusMessage: `Page Not Found: ${initialURL}`
          });
          return callWithNuxt(nuxtApp, showError, [error2]);
        }
      }
      if (result || result === false) {
        return result;
      }
    }
  });
  router.afterEach(async (to) => {
    delete nuxtApp._processingMiddleware;
    if (to.matched.length === 0) {
      callWithNuxt(nuxtApp, showError, [createError$1({
        statusCode: 404,
        fatal: false,
        statusMessage: `Page not found: ${to.fullPath}`
      })]);
    } else if (to.matched[0].name === "404" && nuxtApp.ssrContext) {
      nuxtApp.ssrContext.event.res.statusCode = 404;
    } else {
      const currentURL = to.fullPath || "/";
      if (!isEqual(currentURL, initialURL)) {
        await callWithNuxt(nuxtApp, navigateTo, [currentURL]);
      }
    }
  });
  nuxtApp.hooks.hookOnce("app:created", async () => {
    try {
      await router.replace({
        ...router.resolve(initialURL),
        name: void 0,
        force: true
      });
    } catch (error2) {
      callWithNuxt(nuxtApp, showError, [error2]);
    }
  });
  return { provide: { router } };
});
const memo = {};
let instanceKey;
const instanceScopes = /* @__PURE__ */ new Map();
const raw = "__raw__";
const isClassProp = /[a-zA-Z0-9\-][cC]lass$/;
function getRef(token, data) {
  const value = ref(null);
  if (token === "get") {
    const nodeRefs = {};
    value.value = get$1.bind(null, nodeRefs);
    return value;
  }
  const path = token.split(".");
  watchEffect(() => value.value = getValue(data, path));
  return value;
}
function getValue(set2, path) {
  if (Array.isArray(set2)) {
    for (const subset of set2) {
      const value = subset !== false && getValue(subset, path);
      if (value !== void 0)
        return value;
    }
    return void 0;
  }
  let foundValue = void 0;
  let obj = set2;
  for (const i2 in path) {
    const key = path[i2];
    if (typeof obj !== "object" || obj === null) {
      foundValue = void 0;
      break;
    }
    const currentValue = obj[key];
    if (Number(i2) === path.length - 1 && currentValue !== void 0) {
      foundValue = currentValue;
      break;
    }
    obj = currentValue;
  }
  return foundValue;
}
function get$1(nodeRefs, id) {
  if (typeof id !== "string")
    return warn(650);
  if (!(id in nodeRefs))
    nodeRefs[id] = ref(void 0);
  if (nodeRefs[id].value === void 0) {
    nodeRefs[id].value = null;
    const root = getNode(id);
    if (root)
      nodeRefs[id].value = root.context;
    watchRegistry(id, ({ payload: node }) => {
      nodeRefs[id].value = isNode$1(node) ? node.context : node;
    });
  }
  return nodeRefs[id].value;
}
function parseSchema(library, schema) {
  function parseCondition(library2, node) {
    const condition = provider(compile(node.if), { if: true });
    const children = createElements(library2, node.then);
    const alternate = node.else ? createElements(library2, node.else) : null;
    return [condition, children, alternate];
  }
  function parseConditionAttr(attr, _default) {
    var _a, _b;
    const condition = provider(compile(attr.if));
    let b = () => _default;
    let a = () => _default;
    if (typeof attr.then === "object") {
      a = parseAttrs(attr.then, void 0);
    } else if (typeof attr.then === "string" && ((_a = attr.then) === null || _a === void 0 ? void 0 : _a.startsWith("$"))) {
      a = provider(compile(attr.then));
    } else {
      a = () => attr.then;
    }
    if (has(attr, "else")) {
      if (typeof attr.else === "object") {
        b = parseAttrs(attr.else);
      } else if (typeof attr.else === "string" && ((_b = attr.else) === null || _b === void 0 ? void 0 : _b.startsWith("$"))) {
        b = provider(compile(attr.else));
      } else {
        b = () => attr.else;
      }
    }
    return () => condition() ? a() : b();
  }
  function parseAttrs(unparsedAttrs, bindExp, _default = {}) {
    const explicitAttrs = new Set(Object.keys(unparsedAttrs || {}));
    const boundAttrs = bindExp ? provider(compile(bindExp)) : () => ({});
    const setters = [
      (attrs) => {
        const bound = boundAttrs();
        for (const attr in bound) {
          if (!explicitAttrs.has(attr)) {
            attrs[attr] = bound[attr];
          }
        }
      }
    ];
    if (unparsedAttrs) {
      if (isConditional(unparsedAttrs)) {
        const condition = parseConditionAttr(unparsedAttrs, _default);
        return condition;
      }
      for (let attr in unparsedAttrs) {
        const value = unparsedAttrs[attr];
        let getValue2;
        const isStr = typeof value === "string";
        if (attr.startsWith(raw)) {
          attr = attr.substring(7);
          getValue2 = () => value;
        } else if (isStr && value.startsWith("$") && value.length > 1 && !(value.startsWith("$reset") && isClassProp.test(attr))) {
          getValue2 = provider(compile(value));
        } else if (typeof value === "object" && isConditional(value)) {
          getValue2 = parseConditionAttr(value, void 0);
        } else if (typeof value === "object" && isPojo(value)) {
          getValue2 = parseAttrs(value);
        } else {
          getValue2 = () => value;
        }
        setters.push((attrs) => {
          attrs[attr] = getValue2();
        });
      }
    }
    return () => {
      const attrs = Array.isArray(unparsedAttrs) ? [] : {};
      setters.forEach((setter) => setter(attrs));
      return attrs;
    };
  }
  function parseNode(library2, _node) {
    let element = null;
    let attrs = () => null;
    let condition = false;
    let children = null;
    let alternate = null;
    let iterator = null;
    let resolve = false;
    const node = sugar(_node);
    if (isDOM(node)) {
      element = node.$el;
      attrs = node.$el !== "text" ? parseAttrs(node.attrs, node.bind) : () => null;
    } else if (isComponent$1(node)) {
      if (typeof node.$cmp === "string") {
        if (has(library2, node.$cmp)) {
          element = library2[node.$cmp];
        } else {
          element = node.$cmp;
          resolve = true;
        }
      } else {
        element = node.$cmp;
      }
      attrs = parseAttrs(node.props, node.bind);
    } else if (isConditional(node)) {
      [condition, children, alternate] = parseCondition(library2, node);
    }
    if (!isConditional(node) && "if" in node) {
      condition = provider(compile(node.if));
    } else if (!isConditional(node) && element === null) {
      condition = () => true;
    }
    if ("children" in node && node.children) {
      if (typeof node.children === "string") {
        if (node.children.startsWith("$slots.")) {
          element = element === "text" ? "slot" : element;
          children = provider(compile(node.children));
        } else if (node.children.startsWith("$") && node.children.length > 1) {
          const value = provider(compile(node.children));
          children = () => String(value());
        } else {
          children = () => String(node.children);
        }
      } else if (Array.isArray(node.children)) {
        children = createElements(library2, node.children);
      } else {
        const [childCondition, c, a] = parseCondition(library2, node.children);
        children = (iterationData) => childCondition && childCondition() ? c && c(iterationData) : a && a(iterationData);
      }
    }
    if (isComponent$1(node)) {
      if (children) {
        const produceChildren = children;
        children = (iterationData) => {
          return {
            default(slotData2, key) {
              var _a, _b, _c, _d;
              const currentKey = instanceKey;
              if (key)
                instanceKey = key;
              if (slotData2)
                (_a = instanceScopes.get(instanceKey)) === null || _a === void 0 ? void 0 : _a.unshift(slotData2);
              if (iterationData)
                (_b = instanceScopes.get(instanceKey)) === null || _b === void 0 ? void 0 : _b.unshift(iterationData);
              const c = produceChildren(iterationData);
              if (slotData2)
                (_c = instanceScopes.get(instanceKey)) === null || _c === void 0 ? void 0 : _c.shift();
              if (iterationData)
                (_d = instanceScopes.get(instanceKey)) === null || _d === void 0 ? void 0 : _d.shift();
              instanceKey = currentKey;
              return c;
            }
          };
        };
        children.slot = true;
      } else {
        children = () => ({});
      }
    }
    if ("for" in node && node.for) {
      const values = node.for.length === 3 ? node.for[2] : node.for[1];
      const getValues = typeof values === "string" && values.startsWith("$") ? provider(compile(values)) : () => values;
      iterator = [
        getValues,
        node.for[0],
        node.for.length === 3 ? String(node.for[1]) : null
      ];
    }
    return [condition, element, attrs, children, alternate, iterator, resolve];
  }
  function createSlots(children, iterationData) {
    const slots = children(iterationData);
    const currentKey = instanceKey;
    return Object.keys(slots).reduce((allSlots, slotName) => {
      const slotFn = slots && slots[slotName];
      allSlots[slotName] = (data) => {
        return slotFn && slotFn(data, currentKey) || null;
      };
      return allSlots;
    }, {});
  }
  function createElement2(library2, node) {
    const [condition, element, attrs, children, alternate, iterator, resolve] = parseNode(library2, node);
    let createNodes = (iterationData) => {
      if (condition && element === null && children) {
        return condition() ? children(iterationData) : alternate && alternate(iterationData);
      }
      if (element && (!condition || condition())) {
        if (element === "text" && children) {
          return createTextVNode(String(children()));
        }
        if (element === "slot" && children)
          return children(iterationData);
        const el = resolve ? resolveComponent(element) : element;
        const slots = (children === null || children === void 0 ? void 0 : children.slot) ? createSlots(children, iterationData) : null;
        return h(el, attrs(), slots || (children ? children(iterationData) : []));
      }
      return typeof alternate === "function" ? alternate(iterationData) : alternate;
    };
    if (iterator) {
      const repeatedNode = createNodes;
      const [getValues, valueName, keyName] = iterator;
      createNodes = () => {
        const _v = getValues();
        const values = !isNaN(_v) ? Array(Number(_v)).fill(0).map((_, i2) => i2) : _v;
        const fragment = [];
        if (typeof values !== "object")
          return null;
        const instanceScope = instanceScopes.get(instanceKey) || [];
        for (const key in values) {
          if (Array.isArray(values) && key === "length")
            continue;
          const iterationData = Object.defineProperty({
            ...instanceScope.reduce((previousIterationData, scopedData) => {
              if (previousIterationData.__idata) {
                return { ...previousIterationData, ...scopedData };
              }
              return scopedData;
            }, {}),
            [valueName]: values[key],
            ...keyName !== null ? { [keyName]: key } : {}
          }, "__idata", { enumerable: false, value: true });
          instanceScope.unshift(iterationData);
          fragment.push(repeatedNode.bind(null, iterationData)());
          instanceScope.shift();
        }
        return fragment;
      };
    }
    return createNodes;
  }
  function createElements(library2, schema2) {
    if (Array.isArray(schema2)) {
      const els = schema2.map(createElement2.bind(null, library2));
      return (iterationData) => els.map((element2) => element2(iterationData));
    }
    const element = createElement2(library2, schema2);
    return (iterationData) => element(iterationData);
  }
  const providers = [];
  function provider(compiled, hints = {}) {
    const compiledFns = {};
    providers.push((callback, key) => {
      compiledFns[key] = compiled.provide((tokens) => callback(tokens, hints));
    });
    return () => compiledFns[instanceKey]();
  }
  return function createInstance(providerCallback, key) {
    const memoKey = JSON.stringify(schema);
    const [render2, compiledProviders] = has(memo, memoKey) ? memo[memoKey] : [createElements(library, schema), providers];
    memo[memoKey] = [render2, compiledProviders];
    compiledProviders.forEach((compiledProvider) => {
      compiledProvider(providerCallback, key);
    });
    return () => {
      instanceKey = key;
      return render2();
    };
  };
}
function useScope(token, defaultValue) {
  const scopedData = instanceScopes.get(instanceKey) || [];
  let scopedValue = void 0;
  if (scopedData.length) {
    scopedValue = getValue(scopedData, token.split("."));
  }
  return scopedValue === void 0 ? defaultValue : scopedValue;
}
function slotData(data, key) {
  return new Proxy(data, {
    get(...args) {
      let data2 = void 0;
      const property = args[1];
      if (typeof property === "string") {
        const prevKey = instanceKey;
        instanceKey = key;
        data2 = useScope(property, void 0);
        instanceKey = prevKey;
      }
      return data2 !== void 0 ? data2 : Reflect.get(...args);
    }
  });
}
function createRenderFn(instanceCreator, data, instanceKey2) {
  return instanceCreator((requirements, hints = {}) => {
    return requirements.reduce((tokens, token) => {
      if (token.startsWith("slots.")) {
        const slot = token.substring(6);
        const hasSlot = data.slots && has(data.slots, slot);
        if (hints.if) {
          tokens[token] = () => hasSlot;
        } else if (data.slots && hasSlot) {
          const scopedData = slotData(data, instanceKey2);
          tokens[token] = () => data.slots[slot](scopedData);
          return tokens;
        }
      }
      const value = getRef(token, data);
      tokens[token] = () => useScope(token, value.value);
      return tokens;
    }, {});
  }, instanceKey2);
}
let i = 0;
const FormKitSchema = defineComponent({
  name: "FormKitSchema",
  props: {
    schema: {
      type: [Array, Object],
      required: true
    },
    data: {
      type: Object,
      default: () => ({})
    },
    library: {
      type: Object,
      default: () => ({})
    }
  },
  setup(props2, context) {
    const instance = getCurrentInstance();
    let instanceKey2 = Symbol(String(i++));
    instanceScopes.set(instanceKey2, []);
    let provider = parseSchema(props2.library, props2.schema);
    let render2;
    let data;
    watch(() => props2.schema, (newSchema, oldSchema) => {
      var _a;
      instanceKey2 = Symbol(String(i++));
      provider = parseSchema(props2.library, props2.schema);
      render2 = createRenderFn(provider, data, instanceKey2);
      if (newSchema === oldSchema) {
        ((_a = instance === null || instance === void 0 ? void 0 : instance.proxy) === null || _a === void 0 ? void 0 : _a.$forceUpdate)();
      }
    }, { deep: true });
    watchEffect(() => {
      data = Object.assign(reactive(props2.data), {
        slots: context.slots
      });
      render2 = createRenderFn(provider, data, instanceKey2);
    });
    return () => render2();
  }
});
const nativeProps = {
  config: {
    type: Object,
    default: {}
  },
  classes: {
    type: Object,
    required: false
  },
  delay: {
    type: Number,
    required: false
  },
  errors: {
    type: Array,
    default: []
  },
  inputErrors: {
    type: Object,
    default: () => ({})
  },
  index: {
    type: Number,
    required: false
  },
  id: {
    type: String,
    required: false
  },
  modelValue: {
    required: false
  },
  name: {
    type: String,
    required: false
  },
  parent: {
    type: Object,
    required: false
  },
  plugins: {
    type: Array,
    default: []
  },
  sectionsSchema: {
    type: Object,
    default: {}
  },
  type: {
    type: [String, Object],
    default: "text"
  },
  validation: {
    type: [String, Array],
    required: false
  },
  validationMessages: {
    type: Object,
    required: false
  },
  validationRules: {
    type: Object,
    required: false
  },
  validationLabel: {
    type: [String, Function],
    required: false
  }
};
const props = nativeProps;
const parentSymbol = Symbol("FormKitParent");
const FormKit = defineComponent({
  props,
  emits: {
    input: (_value, _node) => true,
    inputRaw: (_value, _node) => true,
    "update:modelValue": (_value) => true,
    node: (node) => !!node,
    submit: (_data, _node) => true,
    submitRaw: (_event, _node) => true,
    submitInvalid: (_node) => true
  },
  inheritAttrs: false,
  setup(props2, context) {
    const node = useInput(props2, context);
    if (!node.props.definition)
      error(600, node);
    if (node.props.definition.component) {
      return () => {
        var _a;
        return h((_a = node.props.definition) === null || _a === void 0 ? void 0 : _a.component, {
          context: node.context
        }, { ...context.slots });
      };
    }
    const schema = ref([]);
    const generateSchema = () => {
      var _a, _b;
      const schemaDefinition = (_b = (_a = node.props) === null || _a === void 0 ? void 0 : _a.definition) === null || _b === void 0 ? void 0 : _b.schema;
      if (!schemaDefinition)
        error(601, node);
      schema.value = typeof schemaDefinition === "function" ? schemaDefinition({ ...props2.sectionsSchema }) : schemaDefinition;
    };
    generateSchema();
    node.on("schema", generateSchema);
    context.emit("node", node);
    const library = node.props.definition.library;
    context.expose({ node });
    return () => h(FormKitSchema, { schema: schema.value, data: node.context, library }, { ...context.slots });
  }
});
function createPlugin(app, options) {
  app.component(options.alias || "FormKit", FormKit).component(options.schemaAlias || "FormKitSchema", FormKitSchema);
  return {
    get: getNode,
    setLocale: (locale) => {
      var _a;
      if ((_a = options.config) === null || _a === void 0 ? void 0 : _a.rootConfig) {
        options.config.rootConfig.locale = locale;
      }
    },
    clearErrors,
    setErrors,
    submit: submitForm,
    reset
  };
}
const optionsSymbol = Symbol.for("FormKitOptions");
const configSymbol = Symbol.for("FormKitConfig");
const plugin$1 = {
  install(app, _options) {
    const options = Object.assign({
      alias: "FormKit",
      schemaAlias: "FormKitSchema"
    }, typeof _options === "function" ? _options() : _options);
    const rootConfig = createConfig(options.config || {});
    options.config = { rootConfig };
    app.config.globalProperties.$formkit = createPlugin(app, options);
    app.provide(optionsSymbol, options);
    app.provide(configSymbol, rootConfig);
  }
};
const invalidGet = Symbol();
function watchVerbose(obj, callback) {
  const watchers = {};
  const applyWatch = (paths) => {
    for (const path of paths) {
      if (path.__str in watchers)
        watchers[path.__str]();
      watchers[path.__str] = watch(touch.bind(null, obj, path), dispatcher.bind(null, path), { deep: false });
    }
  };
  const clearWatch = (path) => {
    if (!path.length)
      return;
    for (const key in watchers) {
      if (`${key}`.startsWith(`${path.__str}.`)) {
        watchers[key]();
        delete watchers[key];
      }
    }
  };
  const dispatcher = createDispatcher(obj, callback, applyWatch, clearWatch);
  applyWatch(getPaths(obj));
}
function createDispatcher(obj, callback, applyWatch, clearChildWatches) {
  return (path) => {
    const value = get(obj, path);
    if (value === invalidGet)
      return;
    if (path.__deep)
      clearChildWatches(path);
    if (typeof value === "object")
      applyWatch(getPaths(value, [path], ...path));
    callback(path, value, obj);
  };
}
function touch(obj, path) {
  const value = get(obj, path);
  return value && typeof value === "object" ? Object.keys(value) : value;
}
function get(obj, path) {
  if (isRef(obj)) {
    if (path.length === 0)
      return obj.value;
    obj = obj.value;
  }
  return path.reduce((value, segment) => {
    if (value === invalidGet)
      return value;
    if (value === null || typeof value !== "object") {
      return invalidGet;
    }
    return value[segment];
  }, obj);
}
function getPaths(obj, paths = [], ...parents) {
  if (obj === null)
    return paths;
  if (!parents.length) {
    const path = Object.defineProperty([], "__str", {
      value: ""
    });
    obj = isRef(obj) ? obj.value : obj;
    if (obj && typeof obj === "object") {
      Object.defineProperty(path, "__deep", { value: true });
      paths.push(path);
    } else {
      return [path];
    }
  }
  if (obj === null || typeof obj !== "object")
    return paths;
  for (const key in obj) {
    const path = parents.concat(key);
    Object.defineProperty(path, "__str", { value: path.join(".") });
    const value = obj[key];
    if (isPojo(value) || Array.isArray(value)) {
      paths.push(Object.defineProperty(path, "__deep", { value: true }));
      paths = paths.concat(getPaths(value, [], ...path));
    } else {
      paths.push(path);
    }
  }
  return paths;
}
function useRaw(obj) {
  if (obj === null || typeof obj !== "object")
    return obj;
  if (isReactive(obj)) {
    obj = toRaw(obj);
  } else if (isRef(obj)) {
    obj = isReactive(obj.value) ? useRaw(obj.value) : obj.value;
  }
  return obj;
}
const pseudoProps = [
  "help",
  "label",
  "ignore",
  "disabled",
  "preserve",
  /^preserve(-e|E)rrors/,
  /^[a-z]+(?:-visibility|Visibility)$/,
  /^[a-zA-Z-]+(?:-class|Class)$/,
  "prefixIcon",
  "suffixIcon",
  /^[a-zA-Z-]+(?:-icon|Icon)$/
];
function classesToNodeProps(node, props2) {
  if (props2.classes) {
    Object.keys(props2.classes).forEach((key) => {
      if (typeof key === "string") {
        node.props[`_${key}Class`] = props2.classes[key];
        if (isObject(props2.classes[key]) && key === "inner")
          Object.values(props2.classes[key]);
      }
    });
  }
}
function onlyListeners(props2) {
  if (!props2)
    return {};
  const knownListeners = ["Submit", "SubmitRaw", "SubmitInvalid"].reduce((listeners, listener) => {
    const name = `on${listener}`;
    if (name in props2) {
      if (typeof props2[name] === "function") {
        listeners[name] = props2[name];
      }
    }
    return listeners;
  }, {});
  return knownListeners;
}
function useInput(props2, context, options = {}) {
  const config2 = Object.assign({}, inject(optionsSymbol) || {}, options);
  const instance = getCurrentInstance();
  const listeners = onlyListeners(instance === null || instance === void 0 ? void 0 : instance.vnode.props);
  const isVModeled = props2.modelValue !== void 0;
  const value = props2.modelValue !== void 0 ? props2.modelValue : cloneAny(context.attrs.value);
  function createInitialProps() {
    const initialProps2 = {
      ...nodeProps(props2),
      ...listeners
    };
    const attrs = except(nodeProps(context.attrs), pseudoProps);
    initialProps2.attrs = attrs;
    const propValues = only(nodeProps(context.attrs), pseudoProps);
    for (const propName in propValues) {
      initialProps2[camel(propName)] = propValues[propName];
    }
    const classesProps = { props: {} };
    classesToNodeProps(classesProps, props2);
    Object.assign(initialProps2, classesProps.props);
    if (typeof initialProps2.type !== "string") {
      initialProps2.definition = initialProps2.type;
      delete initialProps2.type;
    }
    return initialProps2;
  }
  const initialProps = createInitialProps();
  const parent = initialProps.ignore ? null : props2.parent || inject(parentSymbol, null);
  const node = createNode(extend(config2 || {}, {
    name: props2.name || void 0,
    value,
    parent,
    plugins: (config2.plugins || []).concat(props2.plugins),
    config: props2.config,
    props: initialProps,
    index: props2.index
  }, false, true));
  if (!node.props.definition)
    error(600, node);
  const lateBoundProps = ref(new Set(node.props.definition.props || []));
  node.on("added-props", ({ payload: lateProps }) => {
    if (Array.isArray(lateProps))
      lateProps.forEach((newProp) => lateBoundProps.value.add(newProp));
  });
  const pseudoPropNames = computed(() => pseudoProps.concat([...lateBoundProps.value]).reduce((names, prop) => {
    if (typeof prop === "string") {
      names.push(camel(prop));
      names.push(kebab(prop));
    } else {
      names.push(prop);
    }
    return names;
  }, []));
  watchEffect(() => classesToNodeProps(node, props2));
  const passThrough = nodeProps(props2);
  for (const prop in passThrough) {
    watch(() => props2[prop], () => {
      if (props2[prop] !== void 0) {
        node.props[prop] = props2[prop];
      }
    });
  }
  const attributeWatchers = /* @__PURE__ */ new Set();
  const possibleProps = nodeProps(context.attrs);
  watchEffect(() => {
    watchAttributes(only(possibleProps, pseudoPropNames.value));
  });
  function watchAttributes(attrProps) {
    attributeWatchers.forEach((stop) => {
      stop();
      attributeWatchers.delete(stop);
    });
    for (const prop in attrProps) {
      const camelName = camel(prop);
      attributeWatchers.add(watch(() => context.attrs[prop], () => {
        node.props[camelName] = context.attrs[prop];
      }));
    }
  }
  watchEffect(() => {
    const attrs = except(nodeProps(context.attrs), pseudoPropNames.value);
    node.props.attrs = Object.assign({}, node.props.attrs || {}, attrs);
  });
  watchEffect(() => {
    const messages = props2.errors.map((error2) => createMessage({
      key: slugify(error2),
      type: "error",
      value: error2,
      meta: { source: "prop" }
    }));
    node.store.apply(messages, (message) => message.type === "error" && message.meta.source === "prop");
  });
  if (node.type !== "input") {
    const sourceKey = `${node.name}-prop`;
    watchEffect(() => {
      const keys = Object.keys(props2.inputErrors);
      if (!keys.length)
        node.clearErrors(true, sourceKey);
      const messages = keys.reduce((messages2, key) => {
        let value2 = props2.inputErrors[key];
        if (typeof value2 === "string")
          value2 = [value2];
        if (Array.isArray(value2)) {
          messages2[key] = value2.map((error2) => createMessage({
            key: error2,
            type: "error",
            value: error2,
            meta: { source: sourceKey }
          }));
        }
        return messages2;
      }, {});
      node.store.apply(messages, (message) => message.type === "error" && message.meta.source === sourceKey);
    });
  }
  watchEffect(() => Object.assign(node.config, props2.config));
  if (node.type !== "input") {
    provide(parentSymbol, node);
  }
  let inputTimeout;
  const mutex = /* @__PURE__ */ new WeakSet();
  node.on("modelUpdated", () => {
    var _a, _b;
    context.emit("inputRaw", (_a = node.context) === null || _a === void 0 ? void 0 : _a.value, node);
    clearTimeout(inputTimeout);
    inputTimeout = setTimeout(context.emit, 20, "input", (_b = node.context) === null || _b === void 0 ? void 0 : _b.value, node);
    if (isVModeled && node.context) {
      const newValue = useRaw(node.context.value);
      if (isObject(newValue) && useRaw(props2.modelValue) !== newValue) {
        mutex.add(newValue);
      }
      context.emit("update:modelValue", newValue);
    }
  });
  if (isVModeled) {
    watchVerbose(toRef(props2, "modelValue"), (path, value2) => {
      var _a;
      const rawValue = useRaw(value2);
      if (isObject(rawValue) && mutex.has(rawValue)) {
        return mutex.delete(rawValue);
      }
      if (!path.length)
        node.input(value2, false);
      else
        (_a = node.at(path)) === null || _a === void 0 ? void 0 : _a.input(value2, false);
    });
    if (node.value !== value) {
      node.emit("modelUpdated");
    }
  }
  onUnmounted(() => node.destroy());
  return node;
}
let totalCreated = 1;
function isComponent(obj) {
  return typeof obj === "function" && obj.length === 2 || typeof obj === "object" && !Array.isArray(obj) && !("$el" in obj) && !("$cmp" in obj) && !("if" in obj);
}
function createInput(schemaOrComponent, definitionOptions = {}) {
  const definition = {
    type: "input",
    ...definitionOptions
  };
  let schema;
  if (isComponent(schemaOrComponent)) {
    const cmpName = `SchemaComponent${totalCreated++}`;
    schema = createSection("input", () => ({
      $cmp: cmpName,
      props: {
        context: "$node.context"
      }
    }));
    definition.library = { [cmpName]: markRaw(schemaOrComponent) };
  } else if (typeof schemaOrComponent === "function") {
    schema = schemaOrComponent;
  } else {
    schema = createSection("input", () => cloneAny(schemaOrComponent));
  }
  definition.schema = useSchema(schema || "Schema undefined");
  return definition;
}
const vueBindings = function vueBindings2(node) {
  node.ledger.count("blocking", (m) => m.blocking);
  const isValid = ref(!node.ledger.value("blocking"));
  node.ledger.count("errors", (m) => m.type === "error");
  const hasErrors = ref(!!node.ledger.value("errors"));
  let hasTicked = false;
  nextTick(() => {
    hasTicked = true;
  });
  const availableMessages = reactive(node.store.reduce((store, message) => {
    if (message.visible) {
      store[message.key] = message;
    }
    return store;
  }, {}));
  const validationVisibility = ref(node.props.validationVisibility || "blur");
  node.on("prop:validationVisibility", ({ payload }) => {
    validationVisibility.value = payload;
  });
  const hasShownErrors = ref(validationVisibility.value === "live");
  const validationVisible = computed(() => {
    if (context.state.submitted)
      return true;
    if (!hasShownErrors.value && !context.state.settled) {
      return false;
    }
    switch (validationVisibility.value) {
      case "live":
        return true;
      case "blur":
        return context.state.blurred;
      case "dirty":
        return context.state.dirty;
      default:
        return false;
    }
  });
  const isComplete = computed(() => {
    return hasValidation.value ? isValid.value && !hasErrors.value : context.state.dirty && !empty(context.value);
  });
  const hasValidation = ref(Array.isArray(node.props.parsedRules) && node.props.parsedRules.length > 0);
  node.on("prop:parsedRules", ({ payload: rules }) => {
    hasValidation.value = Array.isArray(rules) && rules.length > 0;
  });
  const messages = computed(() => {
    const visibleMessages = {};
    for (const key in availableMessages) {
      const message = availableMessages[key];
      if (message.type !== "validation" || validationVisible.value) {
        visibleMessages[key] = message;
      }
    }
    return visibleMessages;
  });
  const ui = reactive(node.store.reduce((messages2, message) => {
    if (message.type === "ui" && message.visible)
      messages2[message.key] = message;
    return messages2;
  }, {}));
  const cachedClasses = reactive({});
  const classes = new Proxy(cachedClasses, {
    get(...args) {
      const [target, property] = args;
      let className = Reflect.get(...args);
      if (!className && typeof property === "string") {
        if (!has(target, property) && !property.startsWith("__v")) {
          const observedNode = createObserver(node);
          observedNode.watch((node2) => {
            const rootClasses = typeof node2.config.rootClasses === "function" ? node2.config.rootClasses(property, node2) : {};
            const globalConfigClasses = node2.config.classes ? createClasses(property, node2, node2.config.classes[property]) : {};
            const classesPropClasses = createClasses(property, node2, node2.props[`_${property}Class`]);
            const sectionPropClasses = createClasses(property, node2, node2.props[`${property}Class`]);
            className = generateClassList(node2, property, rootClasses, globalConfigClasses, classesPropClasses, sectionPropClasses);
            target[property] = className;
          });
        }
      }
      return className;
    }
  });
  const describedBy = computed(() => {
    const describers = [];
    if (context.help) {
      describers.push(`help-${node.props.id}`);
    }
    for (const key in messages.value) {
      describers.push(`${node.props.id}-${key}`);
    }
    return describers.length ? describers.join(" ") : void 0;
  });
  const value = ref(node.value);
  const _value = ref(node.value);
  const context = reactive({
    _value,
    attrs: node.props.attrs,
    disabled: node.props.disabled,
    describedBy,
    fns: {
      length: (obj) => Object.keys(obj).length,
      number: (value2) => Number(value2),
      string: (value2) => String(value2),
      json: (value2) => JSON.stringify(value2),
      eq
    },
    handlers: {
      blur: (e) => {
        node.store.set(createMessage({ key: "blurred", visible: false, value: true }));
        if (typeof node.props.attrs.onBlur === "function") {
          node.props.attrs.onBlur(e);
        }
      },
      touch: () => {
        node.store.set(createMessage({ key: "dirty", visible: false, value: true }));
      },
      DOMInput: (e) => {
        node.input(e.target.value);
        node.emit("dom-input-event", e);
      }
    },
    help: node.props.help,
    id: node.props.id,
    label: node.props.label,
    messages,
    node: markRaw(node),
    options: node.props.options,
    state: {
      blurred: false,
      complete: isComplete,
      dirty: false,
      submitted: false,
      settled: node.isSettled,
      valid: isValid,
      errors: hasErrors,
      rules: hasValidation,
      validationVisible
    },
    type: node.props.type,
    family: node.props.family,
    ui,
    value,
    classes
  });
  node.on("created", () => {
    if (!eq(context.value, node.value)) {
      _value.value = node.value;
      value.value = node.value;
      triggerRef(value);
      triggerRef(_value);
    }
    node.props._init = cloneAny(node.value);
  });
  node.on("settled", ({ payload: isSettled }) => {
    context.state.settled = isSettled;
  });
  function observeProps(observe) {
    observe.forEach((prop) => {
      prop = camel(prop);
      if (!has(context, prop) && has(node.props, prop)) {
        context[prop] = node.props[prop];
      }
      node.on(`prop:${prop}`, ({ payload }) => {
        context[prop] = payload;
      });
    });
  }
  const rootProps = () => {
    const props2 = [
      "help",
      "label",
      "disabled",
      "options",
      "type",
      "attrs",
      "preserve",
      "preserveErrors",
      "id"
    ];
    const iconPattern = /^[a-zA-Z-]+(?:-icon|Icon)$/;
    const matchingProps = Object.keys(node.props).filter((prop) => {
      return iconPattern.test(prop);
    });
    return props2.concat(matchingProps);
  };
  observeProps(rootProps());
  function definedAs(definition) {
    if (definition.props)
      observeProps(definition.props);
  }
  node.props.definition && definedAs(node.props.definition);
  node.on("added-props", ({ payload }) => observeProps(payload));
  node.on("input", ({ payload }) => {
    if (node.type !== "input" && !isRef(payload) && !isReactive(payload)) {
      _value.value = shallowClone(payload);
    } else {
      _value.value = payload;
      triggerRef(_value);
    }
  });
  node.on("commit", ({ payload }) => {
    if (node.type !== "input" && !isRef(payload) && !isReactive(payload)) {
      value.value = _value.value = shallowClone(payload);
    } else {
      value.value = _value.value = payload;
      triggerRef(value);
    }
    node.emit("modelUpdated");
    if (!context.state.dirty && node.isCreated && hasTicked && !eq(value.value, node.props._init))
      context.handlers.touch();
    if (isComplete && node.type === "input" && hasErrors.value && !undefine(node.props.preserveErrors)) {
      node.store.filter((message) => {
        var _a;
        return !(message.type === "error" && ((_a = message.meta) === null || _a === void 0 ? void 0 : _a.autoClear) === true);
      });
    }
  });
  const updateState = async (message) => {
    if (message.type === "ui" && message.visible && !message.meta.showAsMessage) {
      ui[message.key] = message;
    } else if (message.visible) {
      availableMessages[message.key] = message;
    } else if (message.type === "state") {
      context.state[message.key] = !!message.value;
    }
  };
  node.on("message-added", (e) => updateState(e.payload));
  node.on("message-updated", (e) => updateState(e.payload));
  node.on("message-removed", ({ payload: message }) => {
    delete ui[message.key];
    delete availableMessages[message.key];
    delete context.state[message.key];
  });
  node.on("settled:blocking", () => {
    isValid.value = true;
  });
  node.on("unsettled:blocking", () => {
    isValid.value = false;
  });
  node.on("settled:errors", () => {
    hasErrors.value = false;
  });
  node.on("unsettled:errors", () => {
    hasErrors.value = true;
  });
  watch(validationVisible, (value2) => {
    if (value2) {
      hasShownErrors.value = true;
    }
  });
  node.context = context;
  node.emit("context", node, false);
};
const defaultConfig = (options = {}) => {
  const { rules = {}, locales = {}, inputs: inputs$1 = {}, messages = {}, locale = void 0, theme = void 0, iconLoaderUrl = void 0, iconLoader = void 0, icons = {}, ...nodeOptions } = options;
  const validation = createValidationPlugin({
    ...defaultRules,
    ...rules || {}
  });
  const i18n = createI18nPlugin(extend({ en, ...locales || {} }, messages));
  const library = createLibraryPlugin(inputs, inputs$1);
  const themePlugin = createThemePlugin(theme, icons, iconLoaderUrl, iconLoader);
  return extend({
    plugins: [library, themePlugin, vueBindings, i18n, validation],
    ...!locale ? {} : { config: { locale } }
  }, nodeOptions || {}, true);
};
defineComponent({
  name: "FormKitIcon",
  props: {
    icon: {
      type: String,
      default: ""
    },
    iconLoader: {
      type: Function,
      default: null
    },
    iconLoaderUrl: {
      type: Function,
      default: null
    }
  },
  setup(props2) {
    var _a, _b;
    const icon = ref(void 0);
    const config2 = inject(optionsSymbol, {});
    const parent = inject(parentSymbol, null);
    let iconHandler = void 0;
    if (props2.iconLoader && typeof props2.iconLoader === "function") {
      iconHandler = createIconHandler(props2.iconLoader);
    } else if (parent && ((_a = parent.props) === null || _a === void 0 ? void 0 : _a.iconLoader)) {
      iconHandler = createIconHandler(parent.props.iconLoader);
    } else if (props2.iconLoaderUrl && typeof props2.iconLoaderUrl === "function") {
      iconHandler = createIconHandler(iconHandler, props2.iconLoaderUrl);
    } else {
      const iconPlugin = (_b = config2 === null || config2 === void 0 ? void 0 : config2.plugins) === null || _b === void 0 ? void 0 : _b.find((plugin2) => {
        return typeof plugin2.iconHandler === "function";
      });
      if (iconPlugin) {
        iconHandler = iconPlugin.iconHandler;
      }
    }
    if (iconHandler && typeof iconHandler === "function") {
      const iconOrPromise = iconHandler(props2.icon);
      if (iconOrPromise instanceof Promise) {
        iconOrPromise.then((iconValue) => {
          icon.value = iconValue;
        });
      } else {
        icon.value = iconOrPromise;
      }
    }
    return () => {
      if (icon.value) {
        return h("span", {
          class: "formkit-icon",
          innerHTML: icon.value
        });
      }
      return null;
    };
  }
});
const textClassification = {
  label: "block mb-2 font-semibold text-sm formkit-invalid:text-red-500 dark:formkit-invalid:text-danger",
  inner: `
    flex
    items-center
    justify-center
    align-center
    w-full
    border
    border-slate-200
    dark:border-slate-700
    formkit-invalid:border-red-500
    dark:formkit-invalid:border-danger
    rounded-lg mb-1
    overflow-hidden
    focus-within:border-primary-400
    mb-0
  `,
  input: `
    w-full 
    h-10 
    px-3 
    border-none 
    text-sm 
    text-gray-700 
    dark:text-gray-200
    bg-white
    dark:bg-slate-800
    border-slate-200
    dark:border-slate-700
    placeholder-secondary 
    focus:outline-none 
    focus:shadow-outline 
    `,
  prefix: `ml-2`,
  message: "formkit-invalid:text-red-500 dark:formkit-invalid:text-danger"
};
const boxClassification = {
  inner: "relative",
  fieldset: "max-w-md border border-slate-200 dark:border-slate-700 rounded-lg px-4 py-2",
  legend: "font-bold text-sm",
  wrapper: "flex items-center mb-3 cursor-pointer",
  help: "mb-3",
  input: `flex 
          items-center 
          form-check-input
          appearance-none
          h-5 w-5 mr-2
          border-2 
          border-slate-200
          dark:border-slate-700
          checked:border-transparent 
          checked:bg-primary-400
          bg-white
          dark:bg-slate-800
          dark:checked:bg-primary-400
          rounded-md
          checked:shadow-sm checked:shadow-primary-500/30 
          focus:outline-none focus:ring-0 transition duration-200`,
  label: "text-sm text-gray-700 formkit-disabled:text-gray-300 dark:formkit-disabled:text-gray-700",
  message: "formkit-invalid:text-red-500 dark:formkit-invalid:text-danger"
};
const buttonClassification = {
  wrapper: "mb-1",
  input: "bg-primary-400 hover:bg-primary-500 text-white text-sm font-normal py-2 px-5 rounded-lg"
};
const OtpClassification = {
  label: "block mb-2 font-semibold text-sm formkit-invalid:text-red-500 dark:formkit-invalid:text-danger",
  inner: `
        flex
        items-center
        justify-left
        align-center
        rounded-lg mb-1
        overflow-hidden
        mb-0
  `,
  digit: `
    w-10 h-10 mr-2
    text-center
    rounded-lg
    border
    border-slate-200
    dark:border-slate-700   
    text-sm 
    text-gray-700 
    dark:text-gray-200
    bg-white
    dark:bg-slate-800
    placeholder-secondary
    focus-within:border-primary-400
    focus:outline-none 
    focus:shadow-outline
`,
  message: "formkit-invalid:text-red-500 dark:formkit-invalid:text-danger"
};
const defaultTheme = {
  global: {
    label: "text-gray-700 dark:text-gray-200",
    outer: "mb-4 formkit-disabled:opacity-50",
    help: "text-xs text-gray-500 dark:text-secondary mt-1",
    messages: "list-none p-0 mt-1 mb-0",
    message: "text-red-500 mb-1 text-xs",
    wrapper: ""
  },
  button: buttonClassification,
  color: {
    label: "block mb-1 font-bold text-sm",
    input: "w-16 h-8 cursor-pointer rounded-lg mb-2"
  },
  date: textClassification,
  "datetime-local": textClassification,
  checkbox: boxClassification,
  email: textClassification,
  file: {
    label: "block mb-1 font-bold text-sm",
    inner: "w-full cursor-pointer",
    input: "w-full cursor-pointer border rounded-lg text-gray-600 text-sm mb-1 file:cursor-pointer file:mr-4 file:py-2 file:px-4 file:rounded-l-lg file:border-0 file:text-sm file:bg-primary-400 file:text-white hover:file:bg-primary-500",
    noFiles: "block text-gray-800 text-sm my-1",
    fileItem: "block flex text-gray-800 text-sm my-1",
    removeFiles: "ml-auto text-blue-500 text-sm"
  },
  month: textClassification,
  number: textClassification,
  password: textClassification,
  radio: {
    ...boxClassification,
    input: boxClassification.input.replace("rounded-sm", "rounded-full")
  },
  range: {
    input: "form-range appearance-none w-full h-2 p-0 bg-gray-200 rounded-full focus:outline-none focus:ring-0 focus:shadow-none"
  },
  search: textClassification,
  select: { ...textClassification, option: "p-2" },
  submit: buttonClassification,
  tel: textClassification,
  text: textClassification,
  textarea: {
    ...textClassification,
    input: `
      block 
      w-full 
      px-3 py-2
      border-none 
      text-sm 
      text-gray-700 
      dark:text-gray-200
      bg-white
      dark:bg-slate-800
      placeholder-secondary 
      focus:outline-none 
      focus:shadow-outline `
  },
  time: textClassification,
  url: textClassification,
  week: textClassification,
  otp: OtpClassification,
  mask: textClassification,
  dropzone: {
    ...textClassification,
    inner: "w-full",
    dropzone: "border-2 border-gray-500 border-dashed p-6 active:bg-gray-100 dark:active:bg-gray-700"
  }
};
const _sfc_main$b = {
  __name: "OneTimePassword",
  __ssrInlineRender: true,
  props: {
    context: Object
  },
  setup(__props) {
    const props2 = __props;
    const digits = Number(props2.context.digits);
    const tmp = ref(props2.context.value || "");
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      ssrRenderList(unref(digits), (index) => {
        _push(`<input maxlength="1" class="${ssrRenderClass(__props.context.classes.digit)}"${ssrRenderAttr("value", unref(tmp)[index - 1] || "")}>`);
      });
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup$5 = _sfc_main$b.setup;
_sfc_main$b.setup = (props2, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/formkit/OneTimePassword.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props2, ctx) : void 0;
};
const _sfc_main$a = {
  __name: "TextMask",
  __ssrInlineRender: true,
  props: {
    context: Object
  },
  setup(__props) {
    const props2 = __props;
    const mask = String(props2.context.mask);
    return (_ctx, _push, _parent, _attrs) => {
      const _directive_maska = resolveDirective("maska");
      _push(`<input${ssrRenderAttrs(mergeProps({
        class: __props.context.classes.input,
        value: props2.context._value,
        placeholder: props2.context.attrs.placeholder
      }, _attrs, ssrGetDirectiveProps(_ctx, _directive_maska, unref(mask))))}>`);
    };
  }
};
const _sfc_setup$4 = _sfc_main$a.setup;
_sfc_main$a.setup = (props2, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/formkit/TextMask.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props2, ctx) : void 0;
};
const _sfc_main$9 = {
  __name: "FileDropzone",
  __ssrInlineRender: true,
  props: {
    context: Object
  },
  setup(__props) {
    const props2 = __props;
    const fileBase64 = ref([]);
    const files = ref([]);
    let err = ref(false);
    let errmsg = ref("");
    const accept = props2.context.accept;
    const multiple = props2.context.multiple;
    const maxSize = props2.context.maxSize;
    const minSize = props2.context.minSize;
    const maxFiles = props2.context.maxFiles;
    const disabled = props2.context.disabled;
    const toBase64 = (file) => new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error2) => reject(error2);
    });
    async function onDrop(fileList, fileError, event) {
      if (fileError.length == 0) {
        err.value = false;
        errmsg.value = "";
        for (let i2 = 0; i2 < fileList.length; i2++) {
          const base64 = await toBase64(fileList[i2]);
          fileBase64.value.push({ data: fileList[i2], base64 });
          files.value.push([fileList[i2]]);
        }
      } else {
        err.value = true;
        errmsg.value = fileError[0].errors[0].message;
      }
      updateNodeValue();
    }
    async function removeFiles(index) {
      fileBase64.value.splice(index, 1);
      files.value.splice(index, 1);
      updateNodeValue();
    }
    function updateNodeValue() {
      props2.context.node.input(files.value);
    }
    const { getRootProps, getInputProps, isDragActive } = useDropzone({
      onDrop,
      accept,
      multiple: multiple === "true" ? true : false,
      maxSize: maxSize ? parseInt(maxSize) : Infinity,
      minSize: minSize ? parseInt(minSize) : 0,
      maxFiles: maxFiles ? parseInt(maxFiles) : 0,
      disabled: disabled === "true" ? true : false
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Icon = __nuxt_component_1$1;
      const _directive_auto_animate = resolveDirective("auto-animate");
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: __props.context.classes.dropzone
      }, _attrs))}><div${ssrRenderAttrs(mergeProps(unref(getRootProps)(), { class: "cursor-pointer" }))}><input${ssrRenderAttrs(unref(getInputProps)())}><div class="flex items-center justify-center h-36"><div>`);
      _push(ssrRenderComponent(_component_Icon, {
        class: "!block m-auto mb-3",
        size: "30px",
        name: "ic:outline-upload-file"
      }, null, _parent));
      if (unref(isDragActive)) {
        _push(`<p class="text-center">Drop the files here ...</p>`);
      } else {
        _push(`<p>Drop files or click here to upload files</p>`);
      }
      _push(`</div></div></div><div${ssrRenderAttrs(mergeProps({
        id: "fileList",
        class: "grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4"
      }, ssrGetDirectiveProps(_ctx, _directive_auto_animate)))}><!--[-->`);
      ssrRenderList(unref(fileBase64), (file, index) => {
        _push(`<div${ssrRenderAttrs(mergeProps({ class: "relative overflow-hidden w-full h-20 md:h-36 rounded-lg border-2 border-gray-300 dark:border-gray-600" }, ssrGetDirectiveProps(_ctx, _directive_auto_animate)))}>`);
        if (file.data.type.includes("image")) {
          _push(`<img${ssrRenderAttr("src", file.base64)} class="w-full h-20 md:h-36 object-cover object-center rounded-lg">`);
        } else {
          _push(`<div class="h-full flex items-center justify-center opacity-50 text-primary-400 font-semibold uppercase text-xl whitespace-nowrap">${ssrInterpolate(file.data.name.slice(
            (file.data.name.lastIndexOf(".") - 1 >>> 0) + 2
          ))}</div>`);
        }
        _push(ssrRenderComponent(_component_Icon, {
          name: "ic:round-close",
          onClick: ($event) => removeFiles(index),
          class: "cursor-pointer absolute top-1 right-1 text-slate-600 hover:bg-slate-200 bg-white dark:bg-slate-800 dark:text-gray-300 dark:hover:dark:bg-slate-600 p-1 rounded-full",
          size: "18"
        }, null, _parent));
        _push(`<div class="absolute bottom-1 right-1 bg-white dark:bg-slate-800 px-2 rounded-lg"><span class="font-semibold text-xs text-slate-600 dark:text-gray-300">${ssrInterpolate(file.data.path)}</span></div></div>`);
      });
      _push(`<!--]--></div>`);
      if (unref(err)) {
        _push(`<ul class="formkit-messages list-none p-0 mt-1 mb-0 relative -bottom-5 -left-2" aria-live="polite"><li class="formkit-message text-red-500 mb-1 text-xs formkit-invalid:text-red-500 dark:formkit-invalid:text-danger" id="input_9-rule_required" data-message-type="validation">${ssrInterpolate(unref(errmsg))}</li></ul>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
};
const _sfc_setup$3 = _sfc_main$9.setup;
_sfc_main$9.setup = (props2, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/formkit/FileDropzone.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props2, ctx) : void 0;
};
const _sfc_main$8 = {
  __name: "WizardForm",
  __ssrInlineRender: true,
  props: {
    context: Object
  },
  setup(__props) {
    const props2 = __props;
    const steps = props2.context.steps;
    props2.context.currentStep;
    if (steps) {
      steps.map((step) => step.toLowerCase().replace(/\s/g, ""));
    }
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[--><ul style="${ssrRenderStyle(unref(steps) ? null : { display: "none" })}"><!--[-->`);
      ssrRenderList(unref(steps), (val, index) => {
        _push(`<li>${ssrInterpolate(val)}</li>`);
      });
      _push(`<!--]--></ul>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup$2 = _sfc_main$8.setup;
_sfc_main$8.setup = (props2, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/formkit/WizardForm.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props2, ctx) : void 0;
};
const customInput = {
  otp: createInput(_sfc_main$b, {
    props: ["digits"]
  }),
  mask: createInput(_sfc_main$a, {
    props: ["mask"]
  }),
  dropzone: createInput(_sfc_main$9, {
    props: ["accept", "multiple", "maxSize", "minSize", "maxFiles", "disabled"]
  }),
  wizard: createInput(_sfc_main$8, {
    props: ["steps", "currentStep"]
  })
};
const config$1 = {
  config: {
    classes: generateClasses(defaultTheme)
  },
  inputs: customInput
};
const _nuxt_formkitPlugin_mjs_pZqjah0RUG = defineNuxtPlugin((nuxtApp) => {
  nuxtApp.hook("app:rendered", () => {
    resetCount();
  });
  nuxtApp.vueApp.use(plugin$1, defaultConfig(config$1));
});
const node_modules__64pinia_nuxt_dist_runtime_plugin_vue3_mjs_A0OWXRrUgq = defineNuxtPlugin((nuxtApp) => {
  const pinia = createPinia();
  nuxtApp.vueApp.use(pinia);
  setActivePinia(pinia);
  {
    nuxtApp.payload.pinia = pinia.state.value;
  }
  return {
    provide: {
      pinia
    }
  };
});
const preference = "system";
const node_modules__64nuxtjs_color_mode_dist_runtime_plugin_server_mjs_XNCxeHyTuP = defineNuxtPlugin((nuxtApp) => {
  const colorMode = useState("color-mode", () => reactive({
    preference,
    value: preference,
    unknown: true,
    forced: false
  })).value;
  const htmlAttrs = {};
  {
    useHead({ htmlAttrs });
  }
  useRouter().afterEach((to) => {
    const forcedColorMode = to.meta.colorMode;
    if (forcedColorMode && forcedColorMode !== "system") {
      colorMode.value = htmlAttrs["data-color-mode-forced"] = forcedColorMode;
      colorMode.forced = true;
    } else if (forcedColorMode === "system") {
      console.warn("You cannot force the colorMode to system at the page level.");
    }
  });
  nuxtApp.provide("colorMode", colorMode);
});
function getBasePlacement(placement) {
  return placement.split("-")[0];
}
function getAlignment(placement) {
  return placement.split("-")[1];
}
function getMainAxisFromPlacement(placement) {
  return ["top", "bottom"].includes(getBasePlacement(placement)) ? "x" : "y";
}
function getLengthFromAxis(axis) {
  return axis === "y" ? "height" : "width";
}
function computeCoordsFromPlacement(_ref) {
  let {
    reference,
    floating,
    placement
  } = _ref;
  const commonX = reference.x + reference.width / 2 - floating.width / 2;
  const commonY = reference.y + reference.height / 2 - floating.height / 2;
  let coords;
  switch (getBasePlacement(placement)) {
    case "top":
      coords = {
        x: commonX,
        y: reference.y - floating.height
      };
      break;
    case "bottom":
      coords = {
        x: commonX,
        y: reference.y + reference.height
      };
      break;
    case "right":
      coords = {
        x: reference.x + reference.width,
        y: commonY
      };
      break;
    case "left":
      coords = {
        x: reference.x - floating.width,
        y: commonY
      };
      break;
    default:
      coords = {
        x: reference.x,
        y: reference.y
      };
  }
  const mainAxis = getMainAxisFromPlacement(placement);
  const length = getLengthFromAxis(mainAxis);
  switch (getAlignment(placement)) {
    case "start":
      coords[mainAxis] = coords[mainAxis] - (reference[length] / 2 - floating[length] / 2);
      break;
    case "end":
      coords[mainAxis] = coords[mainAxis] + (reference[length] / 2 - floating[length] / 2);
      break;
  }
  return coords;
}
const computePosition$1 = async (reference, floating, config2) => {
  const {
    placement = "bottom",
    strategy = "absolute",
    middleware = [],
    platform: platform2
  } = config2;
  let rects = await platform2.getElementRects({
    reference,
    floating,
    strategy
  });
  let {
    x,
    y
  } = computeCoordsFromPlacement({
    ...rects,
    placement
  });
  let statefulPlacement = placement;
  let middlewareData = {};
  for (let i2 = 0; i2 < middleware.length; i2++) {
    const {
      name,
      fn
    } = middleware[i2];
    const {
      x: nextX,
      y: nextY,
      data,
      reset: reset2
    } = await fn({
      x,
      y,
      initialPlacement: placement,
      placement: statefulPlacement,
      strategy,
      middlewareData,
      rects,
      platform: platform2,
      elements: {
        reference,
        floating
      }
    });
    x = nextX != null ? nextX : x;
    y = nextY != null ? nextY : y;
    middlewareData = {
      ...middlewareData,
      [name]: data != null ? data : {}
    };
    if (reset2) {
      if (typeof reset2 === "object") {
        if (reset2.placement) {
          statefulPlacement = reset2.placement;
        }
        if (reset2.rects) {
          rects = reset2.rects === true ? await platform2.getElementRects({
            reference,
            floating,
            strategy
          }) : reset2.rects;
        }
        ({
          x,
          y
        } = computeCoordsFromPlacement({
          ...rects,
          placement: statefulPlacement
        }));
      }
      i2 = -1;
      continue;
    }
  }
  return {
    x,
    y,
    placement: statefulPlacement,
    strategy,
    middlewareData
  };
};
function expandPaddingObject(padding) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...padding
  };
}
function getSideObjectFromPadding(padding) {
  return typeof padding !== "number" ? expandPaddingObject(padding) : {
    top: padding,
    right: padding,
    bottom: padding,
    left: padding
  };
}
function rectToClientRect(rect) {
  return {
    ...rect,
    top: rect.y,
    left: rect.x,
    right: rect.x + rect.width,
    bottom: rect.y + rect.height
  };
}
async function detectOverflow(middlewareArguments, options) {
  if (options === void 0) {
    options = {};
  }
  const {
    x,
    y,
    platform: platform2,
    rects,
    elements,
    strategy
  } = middlewareArguments;
  const {
    boundary = "clippingParents",
    rootBoundary = "viewport",
    elementContext = "floating",
    altBoundary = false,
    padding = 0
  } = options;
  const paddingObject = getSideObjectFromPadding(padding);
  const altContext = elementContext === "floating" ? "reference" : "floating";
  const element = elements[altBoundary ? altContext : elementContext];
  const clippingClientRect = await platform2.getClippingClientRect({
    element: await platform2.isElement(element) ? element : element.contextElement || await platform2.getDocumentElement({
      element: elements.floating
    }),
    boundary,
    rootBoundary
  });
  const elementClientRect = rectToClientRect(await platform2.convertOffsetParentRelativeRectToViewportRelativeRect({
    rect: elementContext === "floating" ? {
      ...rects.floating,
      x,
      y
    } : rects.reference,
    offsetParent: await platform2.getOffsetParent({
      element: elements.floating
    }),
    strategy
  }));
  return {
    top: clippingClientRect.top - elementClientRect.top + paddingObject.top,
    bottom: elementClientRect.bottom - clippingClientRect.bottom + paddingObject.bottom,
    left: clippingClientRect.left - elementClientRect.left + paddingObject.left,
    right: elementClientRect.right - clippingClientRect.right + paddingObject.right
  };
}
const min$1 = Math.min;
const max$1 = Math.max;
function within(min$1$1, value, max$1$1) {
  return max$1(min$1$1, min$1(value, max$1$1));
}
const arrow = (options) => ({
  name: "arrow",
  options,
  async fn(middlewareArguments) {
    const {
      element,
      padding = 0
    } = options != null ? options : {};
    const {
      x,
      y,
      placement,
      rects,
      platform: platform2
    } = middlewareArguments;
    if (element == null) {
      return {};
    }
    const paddingObject = getSideObjectFromPadding(padding);
    const coords = {
      x,
      y
    };
    const basePlacement = getBasePlacement(placement);
    const axis = getMainAxisFromPlacement(basePlacement);
    const length = getLengthFromAxis(axis);
    const arrowDimensions = await platform2.getDimensions({
      element
    });
    const minProp = axis === "y" ? "top" : "left";
    const maxProp = axis === "y" ? "bottom" : "right";
    const endDiff = rects.reference[length] + rects.reference[axis] - coords[axis] - rects.floating[length];
    const startDiff = coords[axis] - rects.reference[axis];
    const arrowOffsetParent = await platform2.getOffsetParent({
      element
    });
    const clientSize = arrowOffsetParent ? axis === "y" ? arrowOffsetParent.clientHeight || 0 : arrowOffsetParent.clientWidth || 0 : 0;
    const centerToReference = endDiff / 2 - startDiff / 2;
    const min2 = paddingObject[minProp];
    const max2 = clientSize - arrowDimensions[length] - paddingObject[maxProp];
    const center = clientSize / 2 - arrowDimensions[length] / 2 + centerToReference;
    const offset2 = within(min2, center, max2);
    return {
      data: {
        [axis]: offset2,
        centerOffset: center - offset2
      }
    };
  }
});
const hash$1 = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function getOppositePlacement(placement) {
  return placement.replace(/left|right|bottom|top/g, (matched) => hash$1[matched]);
}
function getAlignmentSides(placement, rects) {
  const isStart = getAlignment(placement) === "start";
  const mainAxis = getMainAxisFromPlacement(placement);
  const length = getLengthFromAxis(mainAxis);
  let mainAlignmentSide = mainAxis === "x" ? isStart ? "right" : "left" : isStart ? "bottom" : "top";
  if (rects.reference[length] > rects.floating[length]) {
    mainAlignmentSide = getOppositePlacement(mainAlignmentSide);
  }
  return {
    main: mainAlignmentSide,
    cross: getOppositePlacement(mainAlignmentSide)
  };
}
const hash = {
  start: "end",
  end: "start"
};
function getOppositeAlignmentPlacement(placement) {
  return placement.replace(/start|end/g, (matched) => hash[matched]);
}
const basePlacements = ["top", "right", "bottom", "left"];
const allPlacements = /* @__PURE__ */ basePlacements.reduce((acc, basePlacement) => acc.concat(basePlacement, basePlacement + "-start", basePlacement + "-end"), []);
function getPlacementList(alignment, autoAlignment, allowedPlacements) {
  const allowedPlacementsSortedByAlignment = alignment ? [...allowedPlacements.filter((placement) => getAlignment(placement) === alignment), ...allowedPlacements.filter((placement) => getAlignment(placement) !== alignment)] : allowedPlacements.filter((placement) => getBasePlacement(placement) === placement);
  return allowedPlacementsSortedByAlignment.filter((placement) => {
    if (alignment) {
      return getAlignment(placement) === alignment || (autoAlignment ? getOppositeAlignmentPlacement(placement) !== placement : false);
    }
    return true;
  });
}
const autoPlacement = function(options) {
  if (options === void 0) {
    options = {};
  }
  return {
    name: "autoPlacement",
    options,
    async fn(middlewareArguments) {
      var _middlewareData$autoP, _middlewareData$autoP2, _middlewareData$autoP3, _middlewareData$autoP4, _middlewareData$autoP5, _placementsSortedByLe;
      const {
        x,
        y,
        rects,
        middlewareData,
        placement
      } = middlewareArguments;
      const {
        alignment = null,
        allowedPlacements = allPlacements,
        autoAlignment = true,
        ...detectOverflowOptions
      } = options;
      if ((_middlewareData$autoP = middlewareData.autoPlacement) != null && _middlewareData$autoP.skip) {
        return {};
      }
      const placements2 = getPlacementList(alignment, autoAlignment, allowedPlacements);
      const overflow = await detectOverflow(middlewareArguments, detectOverflowOptions);
      const currentIndex = (_middlewareData$autoP2 = (_middlewareData$autoP3 = middlewareData.autoPlacement) == null ? void 0 : _middlewareData$autoP3.index) != null ? _middlewareData$autoP2 : 0;
      const currentPlacement = placements2[currentIndex];
      const {
        main: main2,
        cross
      } = getAlignmentSides(currentPlacement, rects);
      if (placement !== currentPlacement) {
        return {
          x,
          y,
          reset: {
            placement: placements2[0]
          }
        };
      }
      const currentOverflows = [overflow[getBasePlacement(currentPlacement)], overflow[main2], overflow[cross]];
      const allOverflows = [...(_middlewareData$autoP4 = (_middlewareData$autoP5 = middlewareData.autoPlacement) == null ? void 0 : _middlewareData$autoP5.overflows) != null ? _middlewareData$autoP4 : [], {
        placement: currentPlacement,
        overflows: currentOverflows
      }];
      const nextPlacement = placements2[currentIndex + 1];
      if (nextPlacement) {
        return {
          data: {
            index: currentIndex + 1,
            overflows: allOverflows
          },
          reset: {
            placement: nextPlacement
          }
        };
      }
      const placementsSortedByLeastOverflow = allOverflows.slice().sort((a, b) => a.overflows[0] - b.overflows[0]);
      const placementThatFitsOnAllSides = (_placementsSortedByLe = placementsSortedByLeastOverflow.find((_ref) => {
        let {
          overflows
        } = _ref;
        return overflows.every((overflow2) => overflow2 <= 0);
      })) == null ? void 0 : _placementsSortedByLe.placement;
      return {
        data: {
          skip: true
        },
        reset: {
          placement: placementThatFitsOnAllSides != null ? placementThatFitsOnAllSides : placementsSortedByLeastOverflow[0].placement
        }
      };
    }
  };
};
function getExpandedPlacements(placement) {
  const oppositePlacement = getOppositePlacement(placement);
  return [getOppositeAlignmentPlacement(placement), oppositePlacement, getOppositeAlignmentPlacement(oppositePlacement)];
}
const flip = function(options) {
  if (options === void 0) {
    options = {};
  }
  return {
    name: "flip",
    options,
    async fn(middlewareArguments) {
      var _middlewareData$flip, _middlewareData$flip2;
      const {
        placement,
        middlewareData,
        rects,
        initialPlacement
      } = middlewareArguments;
      if ((_middlewareData$flip = middlewareData.flip) != null && _middlewareData$flip.skip) {
        return {};
      }
      const {
        mainAxis: checkMainAxis = true,
        crossAxis: checkCrossAxis = true,
        fallbackPlacements: specifiedFallbackPlacements,
        fallbackStrategy = "bestFit",
        flipAlignment = true,
        ...detectOverflowOptions
      } = options;
      const basePlacement = getBasePlacement(placement);
      const isBasePlacement = basePlacement === initialPlacement;
      const fallbackPlacements = specifiedFallbackPlacements || (isBasePlacement || !flipAlignment ? [getOppositePlacement(initialPlacement)] : getExpandedPlacements(initialPlacement));
      const placements2 = [initialPlacement, ...fallbackPlacements];
      const overflow = await detectOverflow(middlewareArguments, detectOverflowOptions);
      const overflows = [];
      let overflowsData = ((_middlewareData$flip2 = middlewareData.flip) == null ? void 0 : _middlewareData$flip2.overflows) || [];
      if (checkMainAxis) {
        overflows.push(overflow[basePlacement]);
      }
      if (checkCrossAxis) {
        const {
          main: main2,
          cross
        } = getAlignmentSides(placement, rects);
        overflows.push(overflow[main2], overflow[cross]);
      }
      overflowsData = [...overflowsData, {
        placement,
        overflows
      }];
      if (!overflows.every((side) => side <= 0)) {
        var _middlewareData$flip$, _middlewareData$flip3;
        const nextIndex = ((_middlewareData$flip$ = (_middlewareData$flip3 = middlewareData.flip) == null ? void 0 : _middlewareData$flip3.index) != null ? _middlewareData$flip$ : 0) + 1;
        const nextPlacement = placements2[nextIndex];
        if (nextPlacement) {
          return {
            data: {
              index: nextIndex,
              overflows: overflowsData
            },
            reset: {
              placement: nextPlacement
            }
          };
        }
        let resetPlacement = "bottom";
        switch (fallbackStrategy) {
          case "bestFit": {
            var _overflowsData$slice$;
            const placement2 = (_overflowsData$slice$ = overflowsData.slice().sort((a, b) => a.overflows.filter((overflow2) => overflow2 > 0).reduce((acc, overflow2) => acc + overflow2, 0) - b.overflows.filter((overflow2) => overflow2 > 0).reduce((acc, overflow2) => acc + overflow2, 0))[0]) == null ? void 0 : _overflowsData$slice$.placement;
            if (placement2) {
              resetPlacement = placement2;
            }
            break;
          }
          case "initialPlacement":
            resetPlacement = initialPlacement;
            break;
        }
        return {
          data: {
            skip: true
          },
          reset: {
            placement: resetPlacement
          }
        };
      }
      return {};
    }
  };
};
function convertValueToCoords(_ref) {
  let {
    placement,
    rects,
    value
  } = _ref;
  const basePlacement = getBasePlacement(placement);
  const multiplier = ["left", "top"].includes(basePlacement) ? -1 : 1;
  const rawValue = typeof value === "function" ? value({
    ...rects,
    placement
  }) : value;
  const {
    mainAxis,
    crossAxis
  } = typeof rawValue === "number" ? {
    mainAxis: rawValue,
    crossAxis: 0
  } : {
    mainAxis: 0,
    crossAxis: 0,
    ...rawValue
  };
  return getMainAxisFromPlacement(basePlacement) === "x" ? {
    x: crossAxis,
    y: mainAxis * multiplier
  } : {
    x: mainAxis * multiplier,
    y: crossAxis
  };
}
const offset = function(value) {
  if (value === void 0) {
    value = 0;
  }
  return {
    name: "offset",
    options: value,
    fn(middlewareArguments) {
      const {
        x,
        y,
        placement,
        rects
      } = middlewareArguments;
      const diffCoords = convertValueToCoords({
        placement,
        rects,
        value
      });
      return {
        x: x + diffCoords.x,
        y: y + diffCoords.y,
        data: diffCoords
      };
    }
  };
};
function getCrossAxis(axis) {
  return axis === "x" ? "y" : "x";
}
const shift = function(options) {
  if (options === void 0) {
    options = {};
  }
  return {
    name: "shift",
    options,
    async fn(middlewareArguments) {
      const {
        x,
        y,
        placement
      } = middlewareArguments;
      const {
        mainAxis: checkMainAxis = true,
        crossAxis: checkCrossAxis = false,
        limiter = {
          fn: (_ref) => {
            let {
              x: x2,
              y: y2
            } = _ref;
            return {
              x: x2,
              y: y2
            };
          }
        },
        ...detectOverflowOptions
      } = options;
      const coords = {
        x,
        y
      };
      const overflow = await detectOverflow(middlewareArguments, detectOverflowOptions);
      const mainAxis = getMainAxisFromPlacement(getBasePlacement(placement));
      const crossAxis = getCrossAxis(mainAxis);
      let mainAxisCoord = coords[mainAxis];
      let crossAxisCoord = coords[crossAxis];
      if (checkMainAxis) {
        const minSide = mainAxis === "y" ? "top" : "left";
        const maxSide = mainAxis === "y" ? "bottom" : "right";
        const min2 = mainAxisCoord + overflow[minSide];
        const max2 = mainAxisCoord - overflow[maxSide];
        mainAxisCoord = within(min2, mainAxisCoord, max2);
      }
      if (checkCrossAxis) {
        const minSide = crossAxis === "y" ? "top" : "left";
        const maxSide = crossAxis === "y" ? "bottom" : "right";
        const min2 = crossAxisCoord + overflow[minSide];
        const max2 = crossAxisCoord - overflow[maxSide];
        crossAxisCoord = within(min2, crossAxisCoord, max2);
      }
      const limitedCoords = limiter.fn({
        ...middlewareArguments,
        [mainAxis]: mainAxisCoord,
        [crossAxis]: crossAxisCoord
      });
      return {
        ...limitedCoords,
        data: {
          x: limitedCoords.x - x,
          y: limitedCoords.y - y
        }
      };
    }
  };
};
const size = function(options) {
  if (options === void 0) {
    options = {};
  }
  return {
    name: "size",
    options,
    async fn(middlewareArguments) {
      var _middlewareData$size;
      const {
        placement,
        rects,
        middlewareData
      } = middlewareArguments;
      const {
        apply,
        ...detectOverflowOptions
      } = options;
      if ((_middlewareData$size = middlewareData.size) != null && _middlewareData$size.skip) {
        return {};
      }
      const overflow = await detectOverflow(middlewareArguments, detectOverflowOptions);
      const basePlacement = getBasePlacement(placement);
      const isEnd = getAlignment(placement) === "end";
      let heightSide;
      let widthSide;
      if (basePlacement === "top" || basePlacement === "bottom") {
        heightSide = basePlacement;
        widthSide = isEnd ? "left" : "right";
      } else {
        widthSide = basePlacement;
        heightSide = isEnd ? "top" : "bottom";
      }
      const xMin = max$1(overflow.left, 0);
      const xMax = max$1(overflow.right, 0);
      const yMin = max$1(overflow.top, 0);
      const yMax = max$1(overflow.bottom, 0);
      const dimensions = {
        height: rects.floating.height - (["left", "right"].includes(placement) ? 2 * (yMin !== 0 || yMax !== 0 ? yMin + yMax : max$1(overflow.top, overflow.bottom)) : overflow[heightSide]),
        width: rects.floating.width - (["top", "bottom"].includes(placement) ? 2 * (xMin !== 0 || xMax !== 0 ? xMin + xMax : max$1(overflow.left, overflow.right)) : overflow[widthSide])
      };
      apply == null ? void 0 : apply({
        ...dimensions,
        ...rects
      });
      return {
        data: {
          skip: true
        },
        reset: {
          rects: true
        }
      };
    }
  };
};
function isWindow(value) {
  return (value == null ? void 0 : value.toString()) === "[object Window]";
}
function getWindow(node) {
  if (node == null) {
    return window;
  }
  if (!isWindow(node)) {
    const ownerDocument = node.ownerDocument;
    return ownerDocument ? ownerDocument.defaultView || window : window;
  }
  return node;
}
function getComputedStyle$1(element) {
  return getWindow(element).getComputedStyle(element);
}
function getNodeName(node) {
  return isWindow(node) ? "" : node ? (node.nodeName || "").toLowerCase() : "";
}
function isHTMLElement(value) {
  return value instanceof getWindow(value).HTMLElement;
}
function isElement(value) {
  return value instanceof getWindow(value).Element;
}
function isNode(value) {
  return value instanceof getWindow(value).Node;
}
function isShadowRoot(node) {
  const OwnElement = getWindow(node).ShadowRoot;
  return node instanceof OwnElement || node instanceof ShadowRoot;
}
function isScrollParent(element) {
  const {
    overflow,
    overflowX,
    overflowY
  } = getComputedStyle$1(element);
  return /auto|scroll|overlay|hidden/.test(overflow + overflowY + overflowX);
}
function isTableElement(element) {
  return ["table", "td", "th"].includes(getNodeName(element));
}
function isContainingBlock(element) {
  const isFirefox = navigator.userAgent.toLowerCase().includes("firefox");
  const css = getComputedStyle$1(element);
  return css.transform !== "none" || css.perspective !== "none" || css.contain === "paint" || ["transform", "perspective"].includes(css.willChange) || isFirefox && css.willChange === "filter" || isFirefox && (css.filter ? css.filter !== "none" : false);
}
const min = Math.min;
const max = Math.max;
const round = Math.round;
function getBoundingClientRect(element, includeScale) {
  if (includeScale === void 0) {
    includeScale = false;
  }
  const clientRect = element.getBoundingClientRect();
  let scaleX = 1;
  let scaleY = 1;
  if (includeScale && isHTMLElement(element)) {
    scaleX = element.offsetWidth > 0 ? round(clientRect.width) / element.offsetWidth || 1 : 1;
    scaleY = element.offsetHeight > 0 ? round(clientRect.height) / element.offsetHeight || 1 : 1;
  }
  return {
    width: clientRect.width / scaleX,
    height: clientRect.height / scaleY,
    top: clientRect.top / scaleY,
    right: clientRect.right / scaleX,
    bottom: clientRect.bottom / scaleY,
    left: clientRect.left / scaleX,
    x: clientRect.left / scaleX,
    y: clientRect.top / scaleY
  };
}
function getDocumentElement(node) {
  return ((isNode(node) ? node.ownerDocument : node.document) || window.document).documentElement;
}
function getNodeScroll(element) {
  if (isWindow(element)) {
    return {
      scrollLeft: element.pageXOffset,
      scrollTop: element.pageYOffset
    };
  }
  return {
    scrollLeft: element.scrollLeft,
    scrollTop: element.scrollTop
  };
}
function getWindowScrollBarX(element) {
  return getBoundingClientRect(getDocumentElement(element)).left + getNodeScroll(element).scrollLeft;
}
function isScaled(element) {
  const rect = getBoundingClientRect(element);
  return round(rect.width) !== element.offsetWidth || round(rect.height) !== element.offsetHeight;
}
function getRectRelativeToOffsetParent(element, offsetParent, strategy) {
  const isOffsetParentAnElement = isHTMLElement(offsetParent);
  const documentElement = getDocumentElement(offsetParent);
  const rect = getBoundingClientRect(element, isOffsetParentAnElement && isScaled(offsetParent));
  let scroll = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const offsets = {
    x: 0,
    y: 0
  };
  if (isOffsetParentAnElement || !isOffsetParentAnElement && strategy !== "fixed") {
    if (getNodeName(offsetParent) !== "body" || isScrollParent(documentElement)) {
      scroll = getNodeScroll(offsetParent);
    }
    if (isHTMLElement(offsetParent)) {
      const offsetRect = getBoundingClientRect(offsetParent, true);
      offsets.x = offsetRect.x + offsetParent.clientLeft;
      offsets.y = offsetRect.y + offsetParent.clientTop;
    } else if (documentElement) {
      offsets.x = getWindowScrollBarX(documentElement);
    }
  }
  return {
    x: rect.left + scroll.scrollLeft - offsets.x,
    y: rect.top + scroll.scrollTop - offsets.y,
    width: rect.width,
    height: rect.height
  };
}
function getParentNode(node) {
  if (getNodeName(node) === "html") {
    return node;
  }
  return node.assignedSlot || node.parentNode || (isShadowRoot(node) ? node.host : null) || getDocumentElement(node);
}
function getTrueOffsetParent(element) {
  if (!isHTMLElement(element) || getComputedStyle(element).position === "fixed") {
    return null;
  }
  return element.offsetParent;
}
function getContainingBlock(element) {
  let currentNode = getParentNode(element);
  while (isHTMLElement(currentNode) && !["html", "body"].includes(getNodeName(currentNode))) {
    if (isContainingBlock(currentNode)) {
      return currentNode;
    } else {
      currentNode = currentNode.parentNode;
    }
  }
  return null;
}
function getOffsetParent(element) {
  const window2 = getWindow(element);
  let offsetParent = getTrueOffsetParent(element);
  while (offsetParent && isTableElement(offsetParent) && getComputedStyle(offsetParent).position === "static") {
    offsetParent = getTrueOffsetParent(offsetParent);
  }
  if (offsetParent && (getNodeName(offsetParent) === "html" || getNodeName(offsetParent) === "body" && getComputedStyle(offsetParent).position === "static" && !isContainingBlock(offsetParent))) {
    return window2;
  }
  return offsetParent || getContainingBlock(element) || window2;
}
function getDimensions(element) {
  return {
    width: element.offsetWidth,
    height: element.offsetHeight
  };
}
function convertOffsetParentRelativeRectToViewportRelativeRect(_ref) {
  let {
    rect,
    offsetParent,
    strategy
  } = _ref;
  const isOffsetParentAnElement = isHTMLElement(offsetParent);
  const documentElement = getDocumentElement(offsetParent);
  if (offsetParent === documentElement) {
    return rect;
  }
  let scroll = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const offsets = {
    x: 0,
    y: 0
  };
  if (isOffsetParentAnElement || !isOffsetParentAnElement && strategy !== "fixed") {
    if (getNodeName(offsetParent) !== "body" || isScrollParent(documentElement)) {
      scroll = getNodeScroll(offsetParent);
    }
    if (isHTMLElement(offsetParent)) {
      const offsetRect = getBoundingClientRect(offsetParent, true);
      offsets.x = offsetRect.x + offsetParent.clientLeft;
      offsets.y = offsetRect.y + offsetParent.clientTop;
    }
  }
  return {
    ...rect,
    x: rect.x - scroll.scrollLeft + offsets.x,
    y: rect.y - scroll.scrollTop + offsets.y
  };
}
function getViewportRect(element) {
  const win = getWindow(element);
  const html = getDocumentElement(element);
  const visualViewport = win.visualViewport;
  let width = html.clientWidth;
  let height = html.clientHeight;
  let x = 0;
  let y = 0;
  if (visualViewport) {
    width = visualViewport.width;
    height = visualViewport.height;
    if (Math.abs(win.innerWidth / visualViewport.scale - visualViewport.width) < 0.01) {
      x = visualViewport.offsetLeft;
      y = visualViewport.offsetTop;
    }
  }
  return {
    width,
    height,
    x,
    y
  };
}
function getDocumentRect(element) {
  var _element$ownerDocumen;
  const html = getDocumentElement(element);
  const scroll = getNodeScroll(element);
  const body = (_element$ownerDocumen = element.ownerDocument) == null ? void 0 : _element$ownerDocumen.body;
  const width = max(html.scrollWidth, html.clientWidth, body ? body.scrollWidth : 0, body ? body.clientWidth : 0);
  const height = max(html.scrollHeight, html.clientHeight, body ? body.scrollHeight : 0, body ? body.clientHeight : 0);
  let x = -scroll.scrollLeft + getWindowScrollBarX(element);
  const y = -scroll.scrollTop;
  if (getComputedStyle$1(body || html).direction === "rtl") {
    x += max(html.clientWidth, body ? body.clientWidth : 0) - width;
  }
  return {
    width,
    height,
    x,
    y
  };
}
function getScrollParent(node) {
  if (["html", "body", "#document"].includes(getNodeName(node))) {
    return node.ownerDocument.body;
  }
  if (isHTMLElement(node) && isScrollParent(node)) {
    return node;
  }
  return getScrollParent(getParentNode(node));
}
function getScrollParents(node, list) {
  var _node$ownerDocument;
  if (list === void 0) {
    list = [];
  }
  const scrollParent = getScrollParent(node);
  const isBody = scrollParent === ((_node$ownerDocument = node.ownerDocument) == null ? void 0 : _node$ownerDocument.body);
  const win = getWindow(scrollParent);
  const target = isBody ? [win].concat(win.visualViewport || [], isScrollParent(scrollParent) ? scrollParent : []) : scrollParent;
  const updatedList = list.concat(target);
  return isBody ? updatedList : updatedList.concat(getScrollParents(getParentNode(target)));
}
function contains(parent, child) {
  const rootNode = child.getRootNode == null ? void 0 : child.getRootNode();
  if (parent.contains(child)) {
    return true;
  } else if (rootNode && isShadowRoot(rootNode)) {
    let next = child;
    do {
      if (next && parent === next) {
        return true;
      }
      next = next.parentNode || next.host;
    } while (next);
  }
  return false;
}
function getInnerBoundingClientRect(element) {
  const clientRect = getBoundingClientRect(element);
  const top = clientRect.top + element.clientTop;
  const left = clientRect.left + element.clientLeft;
  return {
    top,
    left,
    x: left,
    y: top,
    right: left + element.clientWidth,
    bottom: top + element.clientHeight,
    width: element.clientWidth,
    height: element.clientHeight
  };
}
function getClientRectFromClippingParent(element, clippingParent) {
  if (clippingParent === "viewport") {
    return rectToClientRect(getViewportRect(element));
  }
  if (isElement(clippingParent)) {
    return getInnerBoundingClientRect(clippingParent);
  }
  return rectToClientRect(getDocumentRect(getDocumentElement(element)));
}
function getClippingParents(element) {
  const clippingParents = getScrollParents(getParentNode(element));
  const canEscapeClipping = ["absolute", "fixed"].includes(getComputedStyle$1(element).position);
  const clipperElement = canEscapeClipping && isHTMLElement(element) ? getOffsetParent(element) : element;
  if (!isElement(clipperElement)) {
    return [];
  }
  return clippingParents.filter((clippingParent) => isElement(clippingParent) && contains(clippingParent, clipperElement) && getNodeName(clippingParent) !== "body");
}
function getClippingClientRect(_ref) {
  let {
    element,
    boundary,
    rootBoundary
  } = _ref;
  const mainClippingParents = boundary === "clippingParents" ? getClippingParents(element) : [].concat(boundary);
  const clippingParents = [...mainClippingParents, rootBoundary];
  const firstClippingParent = clippingParents[0];
  const clippingRect = clippingParents.reduce((accRect, clippingParent) => {
    const rect = getClientRectFromClippingParent(element, clippingParent);
    accRect.top = max(rect.top, accRect.top);
    accRect.right = min(rect.right, accRect.right);
    accRect.bottom = min(rect.bottom, accRect.bottom);
    accRect.left = max(rect.left, accRect.left);
    return accRect;
  }, getClientRectFromClippingParent(element, firstClippingParent));
  clippingRect.width = clippingRect.right - clippingRect.left;
  clippingRect.height = clippingRect.bottom - clippingRect.top;
  clippingRect.x = clippingRect.left;
  clippingRect.y = clippingRect.top;
  return clippingRect;
}
const platform = {
  getElementRects: (_ref) => {
    let {
      reference,
      floating,
      strategy
    } = _ref;
    return {
      reference: getRectRelativeToOffsetParent(reference, getOffsetParent(floating), strategy),
      floating: {
        ...getDimensions(floating),
        x: 0,
        y: 0
      }
    };
  },
  convertOffsetParentRelativeRectToViewportRelativeRect: (args) => convertOffsetParentRelativeRectToViewportRelativeRect(args),
  getOffsetParent: (_ref2) => {
    let {
      element
    } = _ref2;
    return getOffsetParent(element);
  },
  isElement: (value) => isElement(value),
  getDocumentElement: (_ref3) => {
    let {
      element
    } = _ref3;
    return getDocumentElement(element);
  },
  getClippingClientRect: (args) => getClippingClientRect(args),
  getDimensions: (_ref4) => {
    let {
      element
    } = _ref4;
    return getDimensions(element);
  },
  getClientRects: (_ref5) => {
    let {
      element
    } = _ref5;
    return element.getClientRects();
  }
};
const computePosition = (reference, floating, options) => computePosition$1(reference, floating, {
  platform,
  ...options
});
var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
function assign(to, from) {
  for (const key in from) {
    if (Object.prototype.hasOwnProperty.call(from, key)) {
      if (typeof from[key] === "object" && to[key]) {
        assign(to[key], from[key]);
      } else {
        to[key] = from[key];
      }
    }
  }
}
const config = {
  disabled: false,
  distance: 5,
  skidding: 0,
  container: "body",
  boundary: void 0,
  instantMove: false,
  disposeTimeout: 5e3,
  popperTriggers: [],
  strategy: "absolute",
  preventOverflow: true,
  flip: true,
  shift: true,
  overflowPadding: 0,
  arrowPadding: 0,
  arrowOverflow: true,
  themes: {
    tooltip: {
      placement: "top",
      triggers: ["hover", "focus", "touch"],
      hideTriggers: (events) => [...events, "click"],
      delay: {
        show: 200,
        hide: 0
      },
      handleResize: false,
      html: false,
      loadingContent: "..."
    },
    dropdown: {
      placement: "bottom",
      triggers: ["click"],
      delay: 0,
      handleResize: true,
      autoHide: true
    },
    menu: {
      $extend: "dropdown",
      triggers: ["hover", "focus"],
      popperTriggers: ["hover", "focus"],
      delay: {
        show: 0,
        hide: 400
      }
    }
  }
};
function getDefaultConfig(theme, key) {
  let themeConfig = config.themes[theme] || {};
  let value;
  do {
    value = themeConfig[key];
    if (typeof value === "undefined") {
      if (themeConfig.$extend) {
        themeConfig = config.themes[themeConfig.$extend] || {};
      } else {
        themeConfig = null;
        value = config[key];
      }
    } else {
      themeConfig = null;
    }
  } while (themeConfig);
  return value;
}
function getThemeClasses(theme) {
  const result = [theme];
  let themeConfig = config.themes[theme] || {};
  do {
    if (themeConfig.$extend && !themeConfig.$resetCss) {
      result.push(themeConfig.$extend);
      themeConfig = config.themes[themeConfig.$extend] || {};
    } else {
      themeConfig = null;
    }
  } while (themeConfig);
  return result.map((c) => `v-popper--theme-${c}`);
}
function getAllParentThemes(theme) {
  const result = [theme];
  let themeConfig = config.themes[theme] || {};
  do {
    if (themeConfig.$extend) {
      result.push(themeConfig.$extend);
      themeConfig = config.themes[themeConfig.$extend] || {};
    } else {
      themeConfig = null;
    }
  } while (themeConfig);
  return result;
}
const placements = ["auto", "top", "bottom", "left", "right"].reduce((acc, base) => acc.concat([
  base,
  `${base}-start`,
  `${base}-end`
]), []);
const SHOW_EVENT_MAP = {
  hover: "mouseenter",
  focus: "focus",
  click: "click",
  touch: "touchstart"
};
const HIDE_EVENT_MAP = {
  hover: "mouseleave",
  focus: "blur",
  click: "click",
  touch: "touchend"
};
function removeFromArray(array, item) {
  const index = array.indexOf(item);
  if (index !== -1) {
    array.splice(index, 1);
  }
}
function nextFrame() {
  return new Promise((resolve) => requestAnimationFrame(() => {
    requestAnimationFrame(resolve);
  }));
}
const shownPoppers = [];
let hidingPopper = null;
const shownPoppersByTheme = {};
function getShownPoppersByTheme(theme) {
  let list = shownPoppersByTheme[theme];
  if (!list) {
    list = shownPoppersByTheme[theme] = [];
  }
  return list;
}
let Element = function() {
};
function defaultPropFactory(prop) {
  return function(props2) {
    return getDefaultConfig(props2.theme, prop);
  };
}
const PROVIDE_KEY = "__floating-vue__popper";
var PrivatePopper = () => defineComponent({
  name: "VPopper",
  provide() {
    return {
      [PROVIDE_KEY]: {
        parentPopper: this
      }
    };
  },
  inject: {
    [PROVIDE_KEY]: { default: null }
  },
  props: {
    theme: {
      type: String,
      required: true
    },
    targetNodes: {
      type: Function,
      required: true
    },
    referenceNode: {
      type: Function,
      default: null
    },
    popperNode: {
      type: Function,
      required: true
    },
    shown: {
      type: Boolean,
      default: false
    },
    showGroup: {
      type: String,
      default: null
    },
    ariaId: {
      default: null
    },
    disabled: {
      type: Boolean,
      default: defaultPropFactory("disabled")
    },
    positioningDisabled: {
      type: Boolean,
      default: defaultPropFactory("positioningDisabled")
    },
    placement: {
      type: String,
      default: defaultPropFactory("placement"),
      validator: (value) => placements.includes(value)
    },
    delay: {
      type: [String, Number, Object],
      default: defaultPropFactory("delay")
    },
    distance: {
      type: [Number, String],
      default: defaultPropFactory("distance")
    },
    skidding: {
      type: [Number, String],
      default: defaultPropFactory("skidding")
    },
    triggers: {
      type: Array,
      default: defaultPropFactory("triggers")
    },
    showTriggers: {
      type: [Array, Function],
      default: defaultPropFactory("showTriggers")
    },
    hideTriggers: {
      type: [Array, Function],
      default: defaultPropFactory("hideTriggers")
    },
    popperTriggers: {
      type: Array,
      default: defaultPropFactory("popperTriggers")
    },
    popperShowTriggers: {
      type: [Array, Function],
      default: defaultPropFactory("popperShowTriggers")
    },
    popperHideTriggers: {
      type: [Array, Function],
      default: defaultPropFactory("popperHideTriggers")
    },
    container: {
      type: [String, Object, Element, Boolean],
      default: defaultPropFactory("container")
    },
    boundary: {
      type: [String, Element],
      default: defaultPropFactory("boundary")
    },
    strategy: {
      type: String,
      validator: (value) => ["absolute", "fixed"].includes(value),
      default: defaultPropFactory("strategy")
    },
    autoHide: {
      type: [Boolean, Function],
      default: defaultPropFactory("autoHide")
    },
    handleResize: {
      type: Boolean,
      default: defaultPropFactory("handleResize")
    },
    instantMove: {
      type: Boolean,
      default: defaultPropFactory("instantMove")
    },
    eagerMount: {
      type: Boolean,
      default: defaultPropFactory("eagerMount")
    },
    popperClass: {
      type: [String, Array, Object],
      default: defaultPropFactory("popperClass")
    },
    computeTransformOrigin: {
      type: Boolean,
      default: defaultPropFactory("computeTransformOrigin")
    },
    autoMinSize: {
      type: Boolean,
      default: defaultPropFactory("autoMinSize")
    },
    autoSize: {
      type: [Boolean, String],
      default: defaultPropFactory("autoSize")
    },
    autoMaxSize: {
      type: Boolean,
      default: defaultPropFactory("autoMaxSize")
    },
    autoBoundaryMaxSize: {
      type: Boolean,
      default: defaultPropFactory("autoBoundaryMaxSize")
    },
    preventOverflow: {
      type: Boolean,
      default: defaultPropFactory("preventOverflow")
    },
    overflowPadding: {
      type: [Number, String],
      default: defaultPropFactory("overflowPadding")
    },
    arrowPadding: {
      type: [Number, String],
      default: defaultPropFactory("arrowPadding")
    },
    arrowOverflow: {
      type: Boolean,
      default: defaultPropFactory("arrowOverflow")
    },
    flip: {
      type: Boolean,
      default: defaultPropFactory("flip")
    },
    shift: {
      type: Boolean,
      default: defaultPropFactory("shift")
    },
    shiftCrossAxis: {
      type: Boolean,
      default: defaultPropFactory("shiftCrossAxis")
    },
    noAutoFocus: {
      type: Boolean,
      default: defaultPropFactory("noAutoFocus")
    }
  },
  emits: [
    "show",
    "hide",
    "update:shown",
    "apply-show",
    "apply-hide",
    "close-group",
    "close-directive",
    "auto-hide",
    "resize",
    "dispose"
  ],
  data() {
    return {
      isShown: false,
      isMounted: false,
      skipTransition: false,
      classes: {
        showFrom: false,
        showTo: false,
        hideFrom: false,
        hideTo: true
      },
      result: {
        x: 0,
        y: 0,
        placement: "",
        strategy: this.strategy,
        arrow: {
          x: 0,
          y: 0,
          centerOffset: 0
        },
        transformOrigin: null
      },
      shownChildren: /* @__PURE__ */ new Set(),
      lastAutoHide: true
    };
  },
  computed: {
    popperId() {
      return this.ariaId != null ? this.ariaId : this.randomId;
    },
    shouldMountContent() {
      return this.eagerMount || this.isMounted;
    },
    slotData() {
      return {
        popperId: this.popperId,
        isShown: this.isShown,
        shouldMountContent: this.shouldMountContent,
        skipTransition: this.skipTransition,
        autoHide: typeof this.autoHide === "function" ? this.lastAutoHide : this.autoHide,
        show: this.show,
        hide: this.hide,
        handleResize: this.handleResize,
        onResize: this.onResize,
        classes: __spreadProps(__spreadValues({}, this.classes), {
          popperClass: this.popperClass
        }),
        result: this.positioningDisabled ? null : this.result,
        attrs: this.$attrs
      };
    },
    parentPopper() {
      var _a;
      return (_a = this[PROVIDE_KEY]) == null ? void 0 : _a.parentPopper;
    },
    hasPopperShowTriggerHover() {
      var _a, _b;
      return ((_a = this.popperTriggers) == null ? void 0 : _a.includes("hover")) || ((_b = this.popperShowTriggers) == null ? void 0 : _b.includes("hover"));
    }
  },
  watch: __spreadValues(__spreadValues({
    shown: "$_autoShowHide",
    disabled(value) {
      if (value) {
        this.dispose();
      } else {
        this.init();
      }
    },
    async container() {
      if (this.isShown) {
        this.$_ensureTeleport();
        await this.$_computePosition();
      }
    }
  }, [
    "triggers",
    "positioningDisabled"
  ].reduce((acc, prop) => {
    acc[prop] = "$_refreshListeners";
    return acc;
  }, {})), [
    "placement",
    "distance",
    "skidding",
    "boundary",
    "strategy",
    "overflowPadding",
    "arrowPadding",
    "preventOverflow",
    "shift",
    "shiftCrossAxis",
    "flip"
  ].reduce((acc, prop) => {
    acc[prop] = "$_computePosition";
    return acc;
  }, {})),
  created() {
    this.$_isDisposed = true;
    this.randomId = `popper_${[Math.random(), Date.now()].map((n) => n.toString(36).substring(2, 10)).join("_")}`;
    if (this.autoMinSize) {
      console.warn('[floating-vue] `autoMinSize` option is deprecated. Use `autoSize="min"` instead.');
    }
    if (this.autoMaxSize) {
      console.warn("[floating-vue] `autoMaxSize` option is deprecated. Use `autoBoundaryMaxSize` instead.");
    }
  },
  mounted() {
    this.init();
    this.$_detachPopperNode();
  },
  activated() {
    this.$_autoShowHide();
  },
  deactivated() {
    this.hide();
  },
  beforeUnmount() {
    this.dispose();
  },
  methods: {
    show({ event = null, skipDelay = false, force = false } = {}) {
      var _a, _b;
      if (((_a = this.parentPopper) == null ? void 0 : _a.lockedChild) && this.parentPopper.lockedChild !== this)
        return;
      this.$_pendingHide = false;
      if (force || !this.disabled) {
        if (((_b = this.parentPopper) == null ? void 0 : _b.lockedChild) === this) {
          this.parentPopper.lockedChild = null;
        }
        this.$_scheduleShow(event, skipDelay);
        this.$emit("show");
        this.$_showFrameLocked = true;
        requestAnimationFrame(() => {
          this.$_showFrameLocked = false;
        });
      }
      this.$emit("update:shown", true);
    },
    hide({ event = null, skipDelay = false } = {}) {
      var _a;
      if (this.$_hideInProgress)
        return;
      if (this.shownChildren.size > 0) {
        this.$_pendingHide = true;
        return;
      }
      if (this.hasPopperShowTriggerHover && this.$_isAimingPopper()) {
        if (this.parentPopper) {
          this.parentPopper.lockedChild = this;
          clearTimeout(this.parentPopper.lockedChildTimer);
          this.parentPopper.lockedChildTimer = setTimeout(() => {
            if (this.parentPopper.lockedChild === this) {
              this.parentPopper.lockedChild.hide({ skipDelay });
              this.parentPopper.lockedChild = null;
            }
          }, 1e3);
        }
        return;
      }
      if (((_a = this.parentPopper) == null ? void 0 : _a.lockedChild) === this) {
        this.parentPopper.lockedChild = null;
      }
      this.$_pendingHide = false;
      this.$_scheduleHide(event, skipDelay);
      this.$emit("hide");
      this.$emit("update:shown", false);
    },
    init() {
      var _a, _b;
      if (!this.$_isDisposed)
        return;
      this.$_isDisposed = false;
      this.isMounted = false;
      this.$_events = [];
      this.$_preventShow = false;
      this.$_referenceNode = (_b = (_a = this.referenceNode) == null ? void 0 : _a.call(this)) != null ? _b : this.$el;
      this.$_targetNodes = this.targetNodes().filter((e) => e.nodeType === e.ELEMENT_NODE);
      this.$_popperNode = this.popperNode();
      this.$_innerNode = this.$_popperNode.querySelector(".v-popper__inner");
      this.$_arrowNode = this.$_popperNode.querySelector(".v-popper__arrow-container");
      this.$_swapTargetAttrs("title", "data-original-title");
      this.$_detachPopperNode();
      if (this.triggers.length) {
        this.$_addEventListeners();
      }
      if (this.shown) {
        this.show();
      }
    },
    dispose() {
      if (this.$_isDisposed)
        return;
      this.$_isDisposed = true;
      this.$_removeEventListeners();
      this.hide({ skipDelay: true });
      this.$_detachPopperNode();
      this.isMounted = false;
      this.isShown = false;
      this.$_updateParentShownChildren(false);
      this.$_swapTargetAttrs("data-original-title", "title");
      this.$emit("dispose");
    },
    async onResize() {
      if (this.isShown) {
        await this.$_computePosition();
        this.$emit("resize");
      }
    },
    async $_computePosition() {
      var _a;
      if (this.$_isDisposed || this.positioningDisabled)
        return;
      const options2 = {
        strategy: this.strategy,
        middleware: []
      };
      if (this.distance || this.skidding) {
        options2.middleware.push(offset({
          mainAxis: this.distance,
          crossAxis: this.skidding
        }));
      }
      const isPlacementAuto = this.placement.startsWith("auto");
      if (isPlacementAuto) {
        options2.middleware.push(autoPlacement({
          alignment: (_a = this.placement.split("-")[1]) != null ? _a : ""
        }));
      } else {
        options2.placement = this.placement;
      }
      if (this.preventOverflow) {
        if (this.shift) {
          options2.middleware.push(shift({
            padding: this.overflowPadding,
            boundary: this.boundary,
            crossAxis: this.shiftCrossAxis
          }));
        }
        if (!isPlacementAuto && this.flip) {
          options2.middleware.push(flip({
            padding: this.overflowPadding,
            boundary: this.boundary
          }));
        }
      }
      options2.middleware.push(arrow({
        element: this.$_arrowNode,
        padding: this.arrowPadding
      }));
      if (this.arrowOverflow) {
        options2.middleware.push({
          name: "arrowOverflow",
          fn: ({ placement, rects, middlewareData }) => {
            let overflow;
            const { centerOffset } = middlewareData.arrow;
            if (placement.startsWith("top") || placement.startsWith("bottom")) {
              overflow = Math.abs(centerOffset) > rects.reference.width / 2;
            } else {
              overflow = Math.abs(centerOffset) > rects.reference.height / 2;
            }
            return {
              data: {
                overflow
              }
            };
          }
        });
      }
      if (this.autoMinSize || this.autoSize) {
        const autoSize = this.autoSize ? this.autoSize : this.autoMinSize ? "min" : null;
        options2.middleware.push({
          name: "autoSize",
          fn: ({ rects, placement, middlewareData }) => {
            var _a2;
            if ((_a2 = middlewareData.autoSize) == null ? void 0 : _a2.skip) {
              return {};
            }
            let width;
            let height;
            if (placement.startsWith("top") || placement.startsWith("bottom")) {
              width = rects.reference.width;
            } else {
              height = rects.reference.height;
            }
            this.$_innerNode.style[autoSize === "min" ? "minWidth" : autoSize === "max" ? "maxWidth" : "width"] = width != null ? `${width}px` : null;
            this.$_innerNode.style[autoSize === "min" ? "minHeight" : autoSize === "max" ? "maxHeight" : "height"] = height != null ? `${height}px` : null;
            return {
              data: {
                skip: true
              },
              reset: {
                rects: true
              }
            };
          }
        });
      }
      if (this.autoMaxSize || this.autoBoundaryMaxSize) {
        this.$_innerNode.style.maxWidth = null;
        this.$_innerNode.style.maxHeight = null;
        options2.middleware.push(size({
          boundary: this.boundary,
          padding: this.overflowPadding,
          apply: ({ width, height }) => {
            this.$_innerNode.style.maxWidth = width != null ? `${width}px` : null;
            this.$_innerNode.style.maxHeight = height != null ? `${height}px` : null;
          }
        }));
      }
      const data = await computePosition(this.$_referenceNode, this.$_popperNode, options2);
      Object.assign(this.result, {
        x: data.x,
        y: data.y,
        placement: data.placement,
        strategy: data.strategy,
        arrow: __spreadValues(__spreadValues({}, data.middlewareData.arrow), data.middlewareData.arrowOverflow)
      });
    },
    $_scheduleShow(event = null, skipDelay = false) {
      this.$_updateParentShownChildren(true);
      this.$_hideInProgress = false;
      clearTimeout(this.$_scheduleTimer);
      if (hidingPopper && this.instantMove && hidingPopper.instantMove && hidingPopper !== this.parentPopper) {
        hidingPopper.$_applyHide(true);
        this.$_applyShow(true);
        return;
      }
      if (skipDelay) {
        this.$_applyShow();
      } else {
        this.$_scheduleTimer = setTimeout(this.$_applyShow.bind(this), this.$_computeDelay("show"));
      }
    },
    $_scheduleHide(event = null, skipDelay = false) {
      if (this.shownChildren.size > 0) {
        this.$_pendingHide = true;
        return;
      }
      this.$_updateParentShownChildren(false);
      this.$_hideInProgress = true;
      clearTimeout(this.$_scheduleTimer);
      if (this.isShown) {
        hidingPopper = this;
      }
      if (skipDelay) {
        this.$_applyHide();
      } else {
        this.$_scheduleTimer = setTimeout(this.$_applyHide.bind(this), this.$_computeDelay("hide"));
      }
    },
    $_computeDelay(type) {
      const delay = this.delay;
      return parseInt(delay && delay[type] || delay || 0);
    },
    async $_applyShow(skipTransition = false) {
      clearTimeout(this.$_disposeTimer);
      clearTimeout(this.$_scheduleTimer);
      this.skipTransition = skipTransition;
      if (this.isShown) {
        return;
      }
      this.$_ensureTeleport();
      await nextFrame();
      await this.$_computePosition();
      await this.$_applyShowEffect();
      if (!this.positioningDisabled) {
        this.$_registerEventListeners([
          ...getScrollParents(this.$_referenceNode),
          ...getScrollParents(this.$_popperNode)
        ], "scroll", () => {
          this.$_computePosition();
        });
      }
    },
    async $_applyShowEffect() {
      if (this.$_hideInProgress)
        return;
      if (this.computeTransformOrigin) {
        const bounds = this.$_referenceNode.getBoundingClientRect();
        const popperWrapper = this.$_popperNode.querySelector(".v-popper__wrapper");
        const parentBounds = popperWrapper.parentNode.getBoundingClientRect();
        const x = bounds.x + bounds.width / 2 - (parentBounds.left + popperWrapper.offsetLeft);
        const y = bounds.y + bounds.height / 2 - (parentBounds.top + popperWrapper.offsetTop);
        this.result.transformOrigin = `${x}px ${y}px`;
      }
      this.isShown = true;
      this.$_applyAttrsToTarget({
        "aria-describedby": this.popperId,
        "data-popper-shown": ""
      });
      const showGroup = this.showGroup;
      if (showGroup) {
        let popover;
        for (let i2 = 0; i2 < shownPoppers.length; i2++) {
          popover = shownPoppers[i2];
          if (popover.showGroup !== showGroup) {
            popover.hide();
            popover.$emit("close-group");
          }
        }
      }
      shownPoppers.push(this);
      document.body.classList.add("v-popper--some-open");
      for (const theme of getAllParentThemes(this.theme)) {
        getShownPoppersByTheme(theme).push(this);
        document.body.classList.add(`v-popper--some-open--${theme}`);
      }
      this.$emit("apply-show");
      this.classes.showFrom = true;
      this.classes.showTo = false;
      this.classes.hideFrom = false;
      this.classes.hideTo = false;
      await nextFrame();
      this.classes.showFrom = false;
      this.classes.showTo = true;
      if (!this.noAutoFocus)
        this.$_popperNode.focus();
    },
    async $_applyHide(skipTransition = false) {
      if (this.shownChildren.size > 0) {
        this.$_pendingHide = true;
        this.$_hideInProgress = false;
        return;
      }
      clearTimeout(this.$_scheduleTimer);
      if (!this.isShown) {
        return;
      }
      this.skipTransition = skipTransition;
      removeFromArray(shownPoppers, this);
      if (shownPoppers.length === 0) {
        document.body.classList.remove("v-popper--some-open");
      }
      for (const theme of getAllParentThemes(this.theme)) {
        const list = getShownPoppersByTheme(theme);
        removeFromArray(list, this);
        if (list.length === 0) {
          document.body.classList.remove(`v-popper--some-open--${theme}`);
        }
      }
      if (hidingPopper === this) {
        hidingPopper = null;
      }
      this.isShown = false;
      this.$_applyAttrsToTarget({
        "aria-describedby": void 0,
        "data-popper-shown": void 0
      });
      clearTimeout(this.$_disposeTimer);
      const disposeTime = getDefaultConfig(this.theme, "disposeTimeout");
      if (disposeTime !== null) {
        this.$_disposeTimer = setTimeout(() => {
          if (this.$_popperNode) {
            this.$_detachPopperNode();
            this.isMounted = false;
          }
        }, disposeTime);
      }
      this.$_removeEventListeners("scroll");
      this.$emit("apply-hide");
      this.classes.showFrom = false;
      this.classes.showTo = false;
      this.classes.hideFrom = true;
      this.classes.hideTo = false;
      await nextFrame();
      this.classes.hideFrom = false;
      this.classes.hideTo = true;
    },
    $_autoShowHide() {
      if (this.shown) {
        this.show();
      } else {
        this.hide();
      }
    },
    $_ensureTeleport() {
      if (this.$_isDisposed)
        return;
      let container = this.container;
      if (typeof container === "string") {
        container = window.document.querySelector(container);
      } else if (container === false) {
        container = this.$_targetNodes[0].parentNode;
      }
      if (!container) {
        throw new Error("No container for popover: " + this.container);
      }
      container.appendChild(this.$_popperNode);
      this.isMounted = true;
    },
    $_addEventListeners() {
      const handleShow = (event) => {
        if (this.isShown && !this.$_hideInProgress) {
          return;
        }
        event.usedByTooltip = true;
        !this.$_preventShow && this.show({ event });
      };
      this.$_registerTriggerListeners(this.$_targetNodes, SHOW_EVENT_MAP, this.triggers, this.showTriggers, handleShow);
      this.$_registerTriggerListeners([this.$_popperNode], SHOW_EVENT_MAP, this.popperTriggers, this.popperShowTriggers, handleShow);
      const handleHide = (event) => {
        if (event.usedByTooltip) {
          return;
        }
        this.hide({ event });
      };
      this.$_registerTriggerListeners(this.$_targetNodes, HIDE_EVENT_MAP, this.triggers, this.hideTriggers, handleHide);
      this.$_registerTriggerListeners([this.$_popperNode], HIDE_EVENT_MAP, this.popperTriggers, this.popperHideTriggers, handleHide);
    },
    $_registerEventListeners(targetNodes, eventType, handler) {
      this.$_events.push({ targetNodes, eventType, handler });
      targetNodes.forEach((node) => node.addEventListener(eventType, handler, void 0));
    },
    $_registerTriggerListeners(targetNodes, eventMap, commonTriggers, customTrigger, handler) {
      let triggers = commonTriggers;
      if (customTrigger != null) {
        triggers = typeof customTrigger === "function" ? customTrigger(triggers) : customTrigger;
      }
      triggers.forEach((trigger) => {
        const eventType = eventMap[trigger];
        if (eventType) {
          this.$_registerEventListeners(targetNodes, eventType, handler);
        }
      });
    },
    $_removeEventListeners(filterEventType) {
      const newList = [];
      this.$_events.forEach((listener) => {
        const { targetNodes, eventType, handler } = listener;
        if (!filterEventType || filterEventType === eventType) {
          targetNodes.forEach((node) => node.removeEventListener(eventType, handler));
        } else {
          newList.push(listener);
        }
      });
      this.$_events = newList;
    },
    $_refreshListeners() {
      if (!this.$_isDisposed) {
        this.$_removeEventListeners();
        this.$_addEventListeners();
      }
    },
    $_handleGlobalClose(event, touch2 = false) {
      if (this.$_showFrameLocked)
        return;
      this.hide({ event });
      if (event.closePopover) {
        this.$emit("close-directive");
      } else {
        this.$emit("auto-hide");
      }
      if (touch2) {
        this.$_preventShow = true;
        setTimeout(() => {
          this.$_preventShow = false;
        }, 300);
      }
    },
    $_detachPopperNode() {
      this.$_popperNode.parentNode && this.$_popperNode.parentNode.removeChild(this.$_popperNode);
    },
    $_swapTargetAttrs(attrFrom, attrTo) {
      for (const el of this.$_targetNodes) {
        const value = el.getAttribute(attrFrom);
        if (value) {
          el.removeAttribute(attrFrom);
          el.setAttribute(attrTo, value);
        }
      }
    },
    $_applyAttrsToTarget(attrs) {
      for (const el of this.$_targetNodes) {
        for (const n in attrs) {
          const value = attrs[n];
          if (value == null) {
            el.removeAttribute(n);
          } else {
            el.setAttribute(n, value);
          }
        }
      }
    },
    $_updateParentShownChildren(value) {
      let parent = this.parentPopper;
      while (parent) {
        if (value) {
          parent.shownChildren.add(this.randomId);
        } else {
          parent.shownChildren.delete(this.randomId);
          if (parent.$_pendingHide) {
            parent.hide();
          }
        }
        parent = parent.parentPopper;
      }
    },
    $_isAimingPopper() {
      const referenceBounds = this.$_referenceNode.getBoundingClientRect();
      if (mouseX >= referenceBounds.left && mouseX <= referenceBounds.right && mouseY >= referenceBounds.top && mouseY <= referenceBounds.bottom) {
        const popperBounds = this.$_popperNode.getBoundingClientRect();
        const vectorX = mouseX - mousePreviousX;
        const vectorY = mouseY - mousePreviousY;
        const distance = popperBounds.left + popperBounds.width / 2 - mousePreviousX + (popperBounds.top + popperBounds.height / 2) - mousePreviousY;
        const newVectorLength = distance + popperBounds.width + popperBounds.height;
        const edgeX = mousePreviousX + vectorX * newVectorLength;
        const edgeY = mousePreviousY + vectorY * newVectorLength;
        return lineIntersectsLine(mousePreviousX, mousePreviousY, edgeX, edgeY, popperBounds.left, popperBounds.top, popperBounds.left, popperBounds.bottom) || lineIntersectsLine(mousePreviousX, mousePreviousY, edgeX, edgeY, popperBounds.left, popperBounds.top, popperBounds.right, popperBounds.top) || lineIntersectsLine(mousePreviousX, mousePreviousY, edgeX, edgeY, popperBounds.right, popperBounds.top, popperBounds.right, popperBounds.bottom) || lineIntersectsLine(mousePreviousX, mousePreviousY, edgeX, edgeY, popperBounds.left, popperBounds.bottom, popperBounds.right, popperBounds.bottom);
      }
      return false;
    }
  },
  render() {
    return this.$slots.default(this.slotData);
  }
});
let mousePreviousX = 0;
let mousePreviousY = 0;
let mouseX = 0;
let mouseY = 0;
function lineIntersectsLine(x1, y1, x2, y2, x3, y3, x4, y4) {
  const uA = ((x4 - x3) * (y1 - y3) - (y4 - y3) * (x1 - x3)) / ((y4 - y3) * (x2 - x1) - (x4 - x3) * (y2 - y1));
  const uB = ((x2 - x1) * (y1 - y3) - (y2 - y1) * (x1 - x3)) / ((y4 - y3) * (x2 - x1) - (x4 - x3) * (y2 - y1));
  return uA >= 0 && uA <= 1 && uB >= 0 && uB <= 1;
}
var _export_sfc = (sfc, props2) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props2) {
    target[key] = val;
  }
  return target;
};
const _sfc_main$6 = {
  extends: PrivatePopper()
};
function _sfc_render$3(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", {
    ref: "reference",
    class: normalizeClass(["v-popper", {
      "v-popper--shown": _ctx.slotData.isShown
    }])
  }, [
    renderSlot(_ctx.$slots, "default", normalizeProps(guardReactiveProps(_ctx.slotData)))
  ], 2);
}
var Popper$1 = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["render", _sfc_render$3]]);
function getInternetExplorerVersion() {
  var ua = window.navigator.userAgent;
  var msie = ua.indexOf("MSIE ");
  if (msie > 0) {
    return parseInt(ua.substring(msie + 5, ua.indexOf(".", msie)), 10);
  }
  var trident = ua.indexOf("Trident/");
  if (trident > 0) {
    var rv = ua.indexOf("rv:");
    return parseInt(ua.substring(rv + 3, ua.indexOf(".", rv)), 10);
  }
  var edge = ua.indexOf("Edge/");
  if (edge > 0) {
    return parseInt(ua.substring(edge + 5, ua.indexOf(".", edge)), 10);
  }
  return -1;
}
let isIE;
function initCompat() {
  if (!initCompat.init) {
    initCompat.init = true;
    isIE = getInternetExplorerVersion() !== -1;
  }
}
var script = {
  name: "ResizeObserver",
  props: {
    emitOnMount: {
      type: Boolean,
      default: false
    },
    ignoreWidth: {
      type: Boolean,
      default: false
    },
    ignoreHeight: {
      type: Boolean,
      default: false
    }
  },
  emits: [
    "notify"
  ],
  mounted() {
    initCompat();
    nextTick(() => {
      this._w = this.$el.offsetWidth;
      this._h = this.$el.offsetHeight;
      if (this.emitOnMount) {
        this.emitSize();
      }
    });
    const object = document.createElement("object");
    this._resizeObject = object;
    object.setAttribute("aria-hidden", "true");
    object.setAttribute("tabindex", -1);
    object.onload = this.addResizeHandlers;
    object.type = "text/html";
    if (isIE) {
      this.$el.appendChild(object);
    }
    object.data = "about:blank";
    if (!isIE) {
      this.$el.appendChild(object);
    }
  },
  beforeUnmount() {
    this.removeResizeHandlers();
  },
  methods: {
    compareAndNotify() {
      if (!this.ignoreWidth && this._w !== this.$el.offsetWidth || !this.ignoreHeight && this._h !== this.$el.offsetHeight) {
        this._w = this.$el.offsetWidth;
        this._h = this.$el.offsetHeight;
        this.emitSize();
      }
    },
    emitSize() {
      this.$emit("notify", {
        width: this._w,
        height: this._h
      });
    },
    addResizeHandlers() {
      this._resizeObject.contentDocument.defaultView.addEventListener("resize", this.compareAndNotify);
      this.compareAndNotify();
    },
    removeResizeHandlers() {
      if (this._resizeObject && this._resizeObject.onload) {
        if (!isIE && this._resizeObject.contentDocument) {
          this._resizeObject.contentDocument.defaultView.removeEventListener("resize", this.compareAndNotify);
        }
        this.$el.removeChild(this._resizeObject);
        this._resizeObject.onload = null;
        this._resizeObject = null;
      }
    }
  }
};
const _withId = /* @__PURE__ */ withScopeId("data-v-b329ee4c");
pushScopeId("data-v-b329ee4c");
const _hoisted_1$2 = {
  class: "resize-observer",
  tabindex: "-1"
};
popScopeId();
const render = /* @__PURE__ */ _withId((_ctx, _cache, $props, $setup, $data, $options) => {
  return openBlock(), createBlock("div", _hoisted_1$2);
});
script.render = render;
script.__scopeId = "data-v-b329ee4c";
script.__file = "src/components/ResizeObserver.vue";
var PrivateThemeClass = (prop = "theme") => ({
  computed: {
    themeClass() {
      return getThemeClasses(this[prop]);
    }
  }
});
const _sfc_main$5 = defineComponent({
  name: "VPopperContent",
  components: {
    ResizeObserver: script
  },
  mixins: [
    PrivateThemeClass()
  ],
  props: {
    popperId: String,
    theme: String,
    shown: Boolean,
    mounted: Boolean,
    skipTransition: Boolean,
    autoHide: Boolean,
    handleResize: Boolean,
    classes: Object,
    result: Object
  },
  emits: [
    "hide",
    "resize"
  ],
  methods: {
    toPx(value) {
      if (value != null && !isNaN(value)) {
        return `${value}px`;
      }
      return null;
    }
  }
});
const _hoisted_1$1 = ["id", "aria-hidden", "tabindex", "data-popper-placement"];
const _hoisted_2$1 = {
  ref: "inner",
  class: "v-popper__inner"
};
const _hoisted_3 = /* @__PURE__ */ createElementVNode("div", { class: "v-popper__arrow-outer" }, null, -1);
const _hoisted_4 = /* @__PURE__ */ createElementVNode("div", { class: "v-popper__arrow-inner" }, null, -1);
const _hoisted_5 = [
  _hoisted_3,
  _hoisted_4
];
function _sfc_render$2(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_ResizeObserver = resolveComponent("ResizeObserver");
  return openBlock(), createElementBlock("div", {
    id: _ctx.popperId,
    ref: "popover",
    class: normalizeClass(["v-popper__popper", [
      _ctx.themeClass,
      _ctx.classes.popperClass,
      {
        "v-popper__popper--shown": _ctx.shown,
        "v-popper__popper--hidden": !_ctx.shown,
        "v-popper__popper--show-from": _ctx.classes.showFrom,
        "v-popper__popper--show-to": _ctx.classes.showTo,
        "v-popper__popper--hide-from": _ctx.classes.hideFrom,
        "v-popper__popper--hide-to": _ctx.classes.hideTo,
        "v-popper__popper--skip-transition": _ctx.skipTransition,
        "v-popper__popper--arrow-overflow": _ctx.result && _ctx.result.arrow.overflow,
        "v-popper__popper--no-positioning": !_ctx.result
      }
    ]]),
    style: normalizeStyle(_ctx.result ? {
      position: _ctx.result.strategy,
      transform: `translate3d(${Math.round(_ctx.result.x)}px,${Math.round(_ctx.result.y)}px,0)`
    } : void 0),
    "aria-hidden": _ctx.shown ? "false" : "true",
    tabindex: _ctx.autoHide ? 0 : void 0,
    "data-popper-placement": _ctx.result ? _ctx.result.placement : void 0,
    onKeyup: _cache[2] || (_cache[2] = withKeys(($event) => _ctx.autoHide && _ctx.$emit("hide"), ["esc"]))
  }, [
    createElementVNode("div", {
      class: "v-popper__backdrop",
      onClick: _cache[0] || (_cache[0] = ($event) => _ctx.autoHide && _ctx.$emit("hide"))
    }),
    createElementVNode("div", {
      class: "v-popper__wrapper",
      style: normalizeStyle(_ctx.result ? {
        transformOrigin: _ctx.result.transformOrigin
      } : void 0)
    }, [
      createElementVNode("div", _hoisted_2$1, [
        _ctx.mounted ? (openBlock(), createElementBlock(Fragment$1, { key: 0 }, [
          createElementVNode("div", null, [
            renderSlot(_ctx.$slots, "default")
          ]),
          _ctx.handleResize ? (openBlock(), createBlock(_component_ResizeObserver, {
            key: 0,
            onNotify: _cache[1] || (_cache[1] = ($event) => _ctx.$emit("resize", $event))
          })) : createCommentVNode("", true)
        ], 64)) : createCommentVNode("", true)
      ], 512),
      createElementVNode("div", {
        ref: "arrow",
        class: "v-popper__arrow-container",
        style: normalizeStyle(_ctx.result ? {
          left: _ctx.toPx(_ctx.result.arrow.x),
          top: _ctx.toPx(_ctx.result.arrow.y)
        } : void 0)
      }, _hoisted_5, 4)
    ], 4)
  ], 46, _hoisted_1$1);
}
var PrivatePopperContent = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["render", _sfc_render$2]]);
var PrivatePopperMethods = {
  methods: {
    show(...args) {
      return this.$refs.popper.show(...args);
    },
    hide(...args) {
      return this.$refs.popper.hide(...args);
    },
    dispose(...args) {
      return this.$refs.popper.dispose(...args);
    },
    onResize(...args) {
      return this.$refs.popper.onResize(...args);
    }
  }
};
const _sfc_main$4 = defineComponent({
  name: "VPopperWrapper",
  components: {
    Popper: Popper$1,
    PopperContent: PrivatePopperContent
  },
  mixins: [
    PrivatePopperMethods,
    PrivateThemeClass("finalTheme")
  ],
  props: {
    theme: {
      type: String,
      default: null
    }
  },
  computed: {
    finalTheme() {
      var _a;
      return (_a = this.theme) != null ? _a : this.$options.vPopperTheme;
    }
  },
  methods: {
    getTargetNodes() {
      return Array.from(this.$el.children).filter((node) => node !== this.$refs.popperContent.$el);
    }
  }
});
function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_PopperContent = resolveComponent("PopperContent");
  const _component_Popper = resolveComponent("Popper");
  return openBlock(), createBlock(_component_Popper, {
    ref: "popper",
    theme: _ctx.finalTheme,
    "target-nodes": _ctx.getTargetNodes,
    "popper-node": () => _ctx.$refs.popperContent.$el,
    class: normalizeClass([
      _ctx.themeClass
    ])
  }, {
    default: withCtx(({
      popperId,
      isShown,
      shouldMountContent,
      skipTransition,
      autoHide,
      show,
      hide,
      handleResize,
      onResize,
      classes,
      result
    }) => [
      renderSlot(_ctx.$slots, "default", {
        shown: isShown,
        show,
        hide
      }),
      createVNode(_component_PopperContent, {
        ref: "popperContent",
        "popper-id": popperId,
        theme: _ctx.finalTheme,
        shown: isShown,
        mounted: shouldMountContent,
        "skip-transition": skipTransition,
        "auto-hide": autoHide,
        "handle-resize": handleResize,
        classes,
        result,
        onHide: hide,
        onResize
      }, {
        default: withCtx(() => [
          renderSlot(_ctx.$slots, "popper", {
            shown: isShown,
            hide
          })
        ]),
        _: 2
      }, 1032, ["popper-id", "theme", "shown", "mounted", "skip-transition", "auto-hide", "handle-resize", "classes", "result", "onHide", "onResize"])
    ]),
    _: 3
  }, 8, ["theme", "target-nodes", "popper-node", "class"]);
}
var PrivatePopperWrapper = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["render", _sfc_render$1]]);
const _sfc_main$3 = defineComponent(__spreadProps(__spreadValues({}, PrivatePopperWrapper), {
  name: "VDropdown",
  vPopperTheme: "dropdown"
}));
const _sfc_main$2 = defineComponent(__spreadProps(__spreadValues({}, PrivatePopperWrapper), {
  name: "VMenu",
  vPopperTheme: "menu"
}));
const _sfc_main$1$1 = defineComponent(__spreadProps(__spreadValues({}, PrivatePopperWrapper), {
  name: "VTooltip",
  vPopperTheme: "tooltip"
}));
const _sfc_main$7 = defineComponent({
  name: "VTooltipDirective",
  components: {
    Popper: PrivatePopper(),
    PopperContent: PrivatePopperContent
  },
  mixins: [
    PrivatePopperMethods
  ],
  inheritAttrs: false,
  props: {
    theme: {
      type: String,
      default: "tooltip"
    },
    html: {
      type: Boolean,
      default: (props2) => getDefaultConfig(props2.theme, "html")
    },
    content: {
      type: [String, Number, Function],
      default: null
    },
    loadingContent: {
      type: String,
      default: (props2) => getDefaultConfig(props2.theme, "loadingContent")
    }
  },
  data() {
    return {
      asyncContent: null
    };
  },
  computed: {
    isContentAsync() {
      return typeof this.content === "function";
    },
    loading() {
      return this.isContentAsync && this.asyncContent == null;
    },
    finalContent() {
      if (this.isContentAsync) {
        return this.loading ? this.loadingContent : this.asyncContent;
      }
      return this.content;
    }
  },
  watch: {
    content: {
      handler() {
        this.fetchContent(true);
      },
      immediate: true
    },
    async finalContent() {
      await this.$nextTick();
      this.$refs.popper.onResize();
    }
  },
  created() {
    this.$_fetchId = 0;
  },
  methods: {
    fetchContent(force) {
      if (typeof this.content === "function" && this.$_isShown && (force || !this.$_loading && this.asyncContent == null)) {
        this.asyncContent = null;
        this.$_loading = true;
        const fetchId = ++this.$_fetchId;
        const result = this.content(this);
        if (result.then) {
          result.then((res) => this.onResult(fetchId, res));
        } else {
          this.onResult(fetchId, result);
        }
      }
    },
    onResult(fetchId, result) {
      if (fetchId !== this.$_fetchId)
        return;
      this.$_loading = false;
      this.asyncContent = result;
    },
    onShow() {
      this.$_isShown = true;
      this.fetchContent();
    },
    onHide() {
      this.$_isShown = false;
    }
  }
});
const _hoisted_1 = ["innerHTML"];
const _hoisted_2 = ["textContent"];
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_PopperContent = resolveComponent("PopperContent");
  const _component_Popper = resolveComponent("Popper");
  return openBlock(), createBlock(_component_Popper, mergeProps({ ref: "popper" }, _ctx.$attrs, {
    theme: _ctx.theme,
    "popper-node": () => _ctx.$refs.popperContent.$el,
    onApplyShow: _ctx.onShow,
    onApplyHide: _ctx.onHide
  }), {
    default: withCtx(({
      popperId,
      isShown,
      shouldMountContent,
      skipTransition,
      autoHide,
      hide,
      handleResize,
      onResize,
      classes,
      result
    }) => [
      createVNode(_component_PopperContent, {
        ref: "popperContent",
        class: normalizeClass({
          "v-popper--tooltip-loading": _ctx.loading
        }),
        "popper-id": popperId,
        theme: _ctx.theme,
        shown: isShown,
        mounted: shouldMountContent,
        "skip-transition": skipTransition,
        "auto-hide": autoHide,
        "handle-resize": handleResize,
        classes,
        result,
        onHide: hide,
        onResize
      }, {
        default: withCtx(() => [
          _ctx.html ? (openBlock(), createElementBlock("div", {
            key: 0,
            innerHTML: _ctx.finalContent
          }, null, 8, _hoisted_1)) : (openBlock(), createElementBlock("div", {
            key: 1,
            textContent: toDisplayString(_ctx.finalContent)
          }, null, 8, _hoisted_2))
        ]),
        _: 2
      }, 1032, ["class", "popper-id", "theme", "shown", "mounted", "skip-transition", "auto-hide", "handle-resize", "classes", "result", "onHide", "onResize"])
    ]),
    _: 1
  }, 16, ["theme", "popper-node", "onApplyShow", "onApplyHide"]);
}
var PrivateTooltipDirective = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["render", _sfc_render]]);
const TARGET_CLASS = "v-popper--has-tooltip";
function getPlacement(options2, modifiers) {
  let result = options2.placement;
  if (!result && modifiers) {
    for (const pos of placements) {
      if (modifiers[pos]) {
        result = pos;
      }
    }
  }
  if (!result) {
    result = getDefaultConfig(options2.theme || "tooltip", "placement");
  }
  return result;
}
function getOptions(el, value, modifiers) {
  let options2;
  const type = typeof value;
  if (type === "string") {
    options2 = { content: value };
  } else if (value && type === "object") {
    options2 = value;
  } else {
    options2 = { content: false };
  }
  options2.placement = getPlacement(options2, modifiers);
  options2.targetNodes = () => [el];
  options2.referenceNode = () => el;
  return options2;
}
let directiveApp;
let directives;
let uid = 0;
function ensureDirectiveApp() {
  if (directiveApp)
    return;
  directives = ref([]);
  directiveApp = createApp({
    name: "VTooltipDirectiveApp",
    setup() {
      return {
        directives
      };
    },
    render() {
      return this.directives.map((directive2) => {
        return h(PrivateTooltipDirective, __spreadProps(__spreadValues({}, directive2.options), {
          shown: directive2.shown || directive2.options.shown,
          key: directive2.id
        }));
      });
    },
    devtools: {
      hide: true
    }
  });
  const mountTarget = document.createElement("div");
  document.body.appendChild(mountTarget);
  directiveApp.mount(mountTarget);
}
function createTooltip(el, value, modifiers) {
  ensureDirectiveApp();
  const options2 = ref(getOptions(el, value, modifiers));
  const shown = ref(false);
  const item = {
    id: uid++,
    options: options2,
    shown
  };
  directives.value.push(item);
  if (el.classList) {
    el.classList.add(TARGET_CLASS);
  }
  const result = el.$_popper = {
    options: options2,
    item,
    show() {
      shown.value = true;
    },
    hide() {
      shown.value = false;
    }
  };
  return result;
}
function destroyTooltip(el) {
  if (el.$_popper) {
    const index = directives.value.indexOf(el.$_popper.item);
    if (index !== -1)
      directives.value.splice(index, 1);
    delete el.$_popper;
    delete el.$_popperOldShown;
    delete el.$_popperMountTarget;
  }
  if (el.classList) {
    el.classList.remove(TARGET_CLASS);
  }
}
function bind(el, { value, modifiers }) {
  const options2 = getOptions(el, value, modifiers);
  if (!options2.content || getDefaultConfig(options2.theme || "tooltip", "disabled")) {
    destroyTooltip(el);
  } else {
    let directive2;
    if (el.$_popper) {
      directive2 = el.$_popper;
      directive2.options.value = options2;
    } else {
      directive2 = createTooltip(el, value, modifiers);
    }
    if (typeof value.shown !== "undefined" && value.shown !== el.$_popperOldShown) {
      el.$_popperOldShown = value.shown;
      value.shown ? directive2.show() : directive2.hide();
    }
  }
}
var PrivateVTooltip = {
  beforeMount: bind,
  updated: bind,
  beforeUnmount(el) {
    destroyTooltip(el);
  }
};
function addListeners(el) {
  el.addEventListener("click", onClick);
  el.addEventListener("touchstart", onTouchStart, false);
}
function removeListeners(el) {
  el.removeEventListener("click", onClick);
  el.removeEventListener("touchstart", onTouchStart);
  el.removeEventListener("touchend", onTouchEnd);
  el.removeEventListener("touchcancel", onTouchCancel);
}
function onClick(event) {
  const el = event.currentTarget;
  event.closePopover = !el.$_vclosepopover_touch;
  event.closeAllPopover = el.$_closePopoverModifiers && !!el.$_closePopoverModifiers.all;
}
function onTouchStart(event) {
  if (event.changedTouches.length === 1) {
    const el = event.currentTarget;
    el.$_vclosepopover_touch = true;
    const touch2 = event.changedTouches[0];
    el.$_vclosepopover_touchPoint = touch2;
    el.addEventListener("touchend", onTouchEnd);
    el.addEventListener("touchcancel", onTouchCancel);
  }
}
function onTouchEnd(event) {
  const el = event.currentTarget;
  el.$_vclosepopover_touch = false;
  if (event.changedTouches.length === 1) {
    const touch2 = event.changedTouches[0];
    const firstTouch = el.$_vclosepopover_touchPoint;
    event.closePopover = Math.abs(touch2.screenY - firstTouch.screenY) < 20 && Math.abs(touch2.screenX - firstTouch.screenX) < 20;
    event.closeAllPopover = el.$_closePopoverModifiers && !!el.$_closePopoverModifiers.all;
  }
}
function onTouchCancel(event) {
  const el = event.currentTarget;
  el.$_vclosepopover_touch = false;
}
var PrivateVClosePopper = {
  beforeMount(el, { value, modifiers }) {
    el.$_closePopoverModifiers = modifiers;
    if (typeof value === "undefined" || value) {
      addListeners(el);
    }
  },
  updated(el, { value, oldValue, modifiers }) {
    el.$_closePopoverModifiers = modifiers;
    if (value !== oldValue) {
      if (typeof value === "undefined" || value) {
        addListeners(el);
      } else {
        removeListeners(el);
      }
    }
  },
  beforeUnmount(el) {
    removeListeners(el);
  }
};
function install(app, options2 = {}) {
  if (app.$_vTooltipInstalled)
    return;
  app.$_vTooltipInstalled = true;
  assign(config, options2);
  app.directive("tooltip", PrivateVTooltip);
  app.directive("close-popper", PrivateVClosePopper);
  app.component("VTooltip", _sfc_main$1$1);
  app.component("VDropdown", _sfc_main$3);
  app.component("VMenu", _sfc_main$2);
}
const plugin = {
  version: "2.0.0-beta.20",
  install,
  options: config
};
const _nuxt_floating_vue_mjs_EIcJ7xiw0h = defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(plugin);
});
const plugins_formkit_auto_animate_js_ablILmH4Iq = defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(autoAnimatePlugin);
});
const plugins_maska_js_r8BHBbSmHt = defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(Maska);
});
const plugins_simplebar_js_jq8LuQCHH1 = defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.component("SimpleBar", SimpleBar);
});
const plugins_swiper_js_xwaaUO4rVf = defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.component("Swiper", Swiper);
  nuxtApp.vueApp.component("SwiperSlide", SwiperSlide);
});
const plugins_uid_plugin_js_Nk3Cd5w1AK = defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(UidPlugin);
});
const plugins_v_select_js_SHiiYNL5GS = defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.component("v-select", Ce);
});
const plugins_vue_code_highlight_js_pVIHe4KY4S = defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(VueCodeHighlight);
});
const plugins_vue_country_flag_icon_js_dIy026dzdc = defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.component("CountryFlag", CountryFlag);
});
const _plugins = [
  _nuxt_components_plugin_mjs_KR1HBZs4kY,
  node_modules_nuxt_dist_head_runtime_lib_vueuse_head_plugin_mjs_D7WGfuP1A0,
  node_modules_nuxt_dist_head_runtime_mixin_plugin_mjs_prWV5EzJWI,
  node_modules_nuxt_dist_pages_runtime_router_mjs_qNv5Ky2ZmB,
  _nuxt_formkitPlugin_mjs_pZqjah0RUG,
  node_modules__64pinia_nuxt_dist_runtime_plugin_vue3_mjs_A0OWXRrUgq,
  node_modules__64nuxtjs_color_mode_dist_runtime_plugin_server_mjs_XNCxeHyTuP,
  _nuxt_floating_vue_mjs_EIcJ7xiw0h,
  plugins_formkit_auto_animate_js_ablILmH4Iq,
  plugins_maska_js_r8BHBbSmHt,
  plugins_simplebar_js_jq8LuQCHH1,
  plugins_swiper_js_xwaaUO4rVf,
  plugins_uid_plugin_js_Nk3Cd5w1AK,
  plugins_v_select_js_SHiiYNL5GS,
  plugins_vue_code_highlight_js_pVIHe4KY4S,
  plugins_vue_country_flag_icon_js_dIy026dzdc
];
const _sfc_main$1 = {
  __name: "nuxt-root",
  __ssrInlineRender: true,
  setup(__props) {
    const ErrorComponent = defineAsyncComponent(() => import('./_nuxt/error-component.d81cde1a.mjs').then((r) => r.default || r));
    const nuxtApp = useNuxtApp();
    nuxtApp.deferHydration();
    provide("_route", useRoute());
    nuxtApp.hooks.callHookWith((hooks) => hooks.map((hook) => hook()), "vue:setup");
    const error2 = useError();
    onErrorCaptured((err, target, info) => {
      nuxtApp.hooks.callHook("vue:error", err, target, info).catch((hookError) => console.error("[nuxt] Error in `vue:error` hook", hookError));
      {
        callWithNuxt(nuxtApp, showError, [err]);
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_App = resolveComponent("App");
      ssrRenderSuspense(_push, {
        default: () => {
          if (unref(error2)) {
            _push(ssrRenderComponent(unref(ErrorComponent), { error: unref(error2) }, null, _parent));
          } else {
            _push(ssrRenderComponent(_component_App, null, null, _parent));
          }
        },
        _: 1
      });
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props2, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/nuxt/dist/app/components/nuxt-root.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props2, ctx) : void 0;
};
const Fragment = defineComponent({
  setup(_props, { slots }) {
    return () => {
      var _a;
      return (_a = slots.default) == null ? void 0 : _a.call(slots);
    };
  }
});
const _wrapIf = (component, props2, slots) => {
  return { default: () => props2 ? h(component, props2 === true ? {} : props2, slots) : h(Fragment, {}, slots) };
};
const layouts = {
  default: () => import('./_nuxt/default.10688459.mjs').then((m) => m.default || m),
  empty: () => import('./_nuxt/empty.04b15ece.mjs').then((m) => m.default || m)
};
const LayoutLoader = defineComponent({
  props: {
    name: String,
    ...{}
  },
  async setup(props2, context) {
    const LayoutComponent = await layouts[props2.name]().then((r) => r.default || r);
    return () => {
      return h(LayoutComponent, {}, context.slots);
    };
  }
});
const __nuxt_component_0 = defineComponent({
  props: {
    name: {
      type: [String, Boolean, Object],
      default: null
    }
  },
  setup(props2, context) {
    const injectedRoute = inject("_route");
    const route = injectedRoute === useRoute() ? useRoute$1() : injectedRoute;
    const layout = computed(() => {
      var _a, _b;
      return (_b = (_a = unref(props2.name)) != null ? _a : route.meta.layout) != null ? _b : "default";
    });
    return () => {
      var _a;
      const hasLayout = layout.value && layout.value in layouts;
      const transitionProps = (_a = route.meta.layoutTransition) != null ? _a : appLayoutTransition;
      return _wrapIf(Transition, hasLayout && transitionProps, {
        default: () => _wrapIf(LayoutLoader, hasLayout && { key: layout.value, name: layout.value, hasTransition: !!transitionProps }, context.slots).default()
      }).default();
    };
  }
});
const __nuxt_component_1 = defineComponent({
  name: "NuxtLoadingIndicator",
  props: {
    throttle: {
      type: Number,
      default: 200
    },
    duration: {
      type: Number,
      default: 2e3
    },
    height: {
      type: Number,
      default: 3
    },
    color: {
      type: String,
      default: "repeating-linear-gradient(to right,#00dc82 0%,#34cdfe 50%,#0047e1 100%)"
    }
  },
  setup(props2, { slots }) {
    const indicator = useLoadingIndicator({
      duration: props2.duration,
      throttle: props2.throttle
    });
    const nuxtApp = useNuxtApp();
    nuxtApp.hook("page:start", indicator.start);
    nuxtApp.hook("page:finish", indicator.finish);
    return () => h("div", {
      class: "nuxt-loading-indicator",
      style: {
        position: "fixed",
        top: 0,
        right: 0,
        left: 0,
        pointerEvents: "none",
        width: `${indicator.progress.value}%`,
        height: `${props2.height}px`,
        opacity: indicator.isLoading.value ? 1 : 0,
        background: props2.color,
        backgroundSize: `${100 / indicator.progress.value * 100}% auto`,
        transition: "width 0.1s, height 0.4s, opacity 0.4s",
        zIndex: 999999
      }
    }, slots);
  }
});
function useLoadingIndicator(opts) {
  const progress = ref(0);
  const isLoading = ref(false);
  computed(() => 1e4 / opts.duration);
  let _timer = null;
  let _throttle = null;
  function start() {
    clear();
    progress.value = 0;
    isLoading.value = true;
    if (opts.throttle)
      ;
  }
  function finish() {
    progress.value = 100;
    _hide();
  }
  function clear() {
    clearInterval(_timer);
    clearTimeout(_throttle);
    _timer = null;
    _throttle = null;
  }
  function _hide() {
    clear();
  }
  return {
    progress,
    isLoading,
    start,
    finish,
    clear
  };
}
const interpolatePath = (route, match) => {
  return match.path.replace(/(:\w+)\([^)]+\)/g, "$1").replace(/(:\w+)[?+*]/g, "$1").replace(/:\w+/g, (r) => {
    var _a;
    return ((_a = route.params[r.slice(1)]) == null ? void 0 : _a.toString()) || "";
  });
};
const generateRouteKey = (override, routeProps) => {
  var _a;
  const matchedRoute = routeProps.route.matched.find((m) => {
    var _a2;
    return ((_a2 = m.components) == null ? void 0 : _a2.default) === routeProps.Component.type;
  });
  const source = (_a = override != null ? override : matchedRoute == null ? void 0 : matchedRoute.meta.key) != null ? _a : matchedRoute && interpolatePath(routeProps.route, matchedRoute);
  return typeof source === "function" ? source(routeProps.route) : source;
};
const wrapInKeepAlive = (props2, children) => {
  return { default: () => children };
};
const __nuxt_component_2 = defineComponent({
  name: "NuxtPage",
  inheritAttrs: false,
  props: {
    name: {
      type: String
    },
    transition: {
      type: [Boolean, Object],
      default: void 0
    },
    keepalive: {
      type: [Boolean, Object],
      default: void 0
    },
    route: {
      type: Object
    },
    pageKey: {
      type: [Function, String],
      default: null
    }
  },
  setup(props2, { attrs }) {
    const nuxtApp = useNuxtApp();
    return () => {
      return h(RouterView, { name: props2.name, route: props2.route, ...attrs }, {
        default: (routeProps) => {
          var _a, _b, _c, _d;
          if (!routeProps.Component) {
            return;
          }
          const key = generateRouteKey(props2.pageKey, routeProps);
          const transitionProps = (_b = (_a = props2.transition) != null ? _a : routeProps.route.meta.pageTransition) != null ? _b : appPageTransition;
          const done = nuxtApp.deferHydration();
          return _wrapIf(
            Transition,
            transitionProps,
            wrapInKeepAlive(
              (_d = (_c = props2.keepalive) != null ? _c : routeProps.route.meta.keepalive) != null ? _d : appKeepalive,
              h(Suspense, {
                onPending: () => nuxtApp.callHook("page:start", routeProps.Component),
                onResolve: () => nuxtApp.callHook("page:finish", routeProps.Component).finally(done)
              }, { default: () => h(Component, { key, routeProps, pageKey: key, hasTransition: !!transitionProps }) })
            )
          ).default();
        }
      });
    };
  }
});
const Component = defineComponent({
  props: ["routeProps", "pageKey", "hasTransition"],
  setup(props2) {
    const previousKey = props2.pageKey;
    const previousRoute = props2.routeProps.route;
    const route = {};
    for (const key in props2.routeProps.route) {
      route[key] = computed(() => previousKey === props2.pageKey ? props2.routeProps.route[key] : previousRoute[key]);
    }
    provide("_route", reactive(route));
    return () => {
      return h(props2.routeProps.Component);
    };
  }
});
const _sfc_main = {
  __name: "app",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      title: "Biz Amal - Platform Wakaf Terbesar di Malaysia",
      description: "Home page",
      bodyAttrs: {
        class: "bg-gray-100 dark:bg-slate-900 text-gray-600 dark:text-gray-300"
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLayout = __nuxt_component_0;
      const _component_NuxtLoadingIndicator = __nuxt_component_1;
      const _component_NuxtPage = __nuxt_component_2;
      _push(ssrRenderComponent(_component_NuxtLayout, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_NuxtLoadingIndicator, null, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_NuxtPage, null, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_NuxtLoadingIndicator),
              createVNode(_component_NuxtPage)
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props2, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("app.vue");
  return _sfc_setup ? _sfc_setup(props2, ctx) : void 0;
};
if (!globalThis.$fetch) {
  globalThis.$fetch = $fetch.create({
    baseURL: baseURL()
  });
}
let entry;
const plugins = normalizePlugins(_plugins);
{
  entry = async function createNuxtAppServer(ssrContext) {
    const vueApp = createApp(_sfc_main$1);
    vueApp.component("App", _sfc_main);
    const nuxt = createNuxtApp({ vueApp, ssrContext });
    try {
      await applyPlugins(nuxt, plugins);
      await nuxt.hooks.callHook("app:created", vueApp);
    } catch (err) {
      await nuxt.callHook("app:error", err);
      nuxt.payload.error = nuxt.payload.error || err;
    }
    return vueApp;
  };
}
const entry$1 = (ctx) => entry(ctx);

export { useHead as A, _export_sfc$1 as _, __nuxt_component_0$2 as a, __nuxt_component_1$2 as b, _sfc_main$q as c, _sfc_main$p as d, entry$1 as default, __nuxt_component_1$1 as e, _sfc_main$o as f, _sfc_main$n as g, _sfc_main$m as h, useLayoutStore as i, useNuxtApp as j, __nuxt_component_3 as k, _sfc_main$l as l, _sfc_main$i as m, navigateTo as n, _sfc_main$h as o, _sfc_main$g as p, _sfc_main$k as q, _sfc_main$j as r, _sfc_main$f as s, _sfc_main$e as t, useRoute as u, _sfc_main$d as v, __nuxt_component_0$1 as w, defineStore as x, defineNuxtRouteMiddleware as y, useState as z };
//# sourceMappingURL=server.mjs.map
