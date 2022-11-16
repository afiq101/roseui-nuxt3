import { x as defineStore, y as defineNuxtRouteMiddleware, n as navigateTo } from '../server.mjs';
import 'vue';
import 'ohmyfetch';
import 'hookable';
import 'unctx';
import 'ufo';
import 'h3';
import 'defu';
import '@vueuse/shared';
import 'vue-router';
import 'vue/server-renderer';
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

const useUserStore = defineStore({
  id: "user",
  state: () => ({
    user: null,
    isAuth: false
  }),
  actions: {
    setUser(user) {
      this.user = user;
    },
    setAuth(isAuth) {
      this.isAuth = isAuth;
    }
  }
});
const auth = defineNuxtRouteMiddleware((to, from) => {
  const user = useUserStore();
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    if (!user.isAuth) {
      return navigateTo("/login");
    } else {
      next();
    }
  }
});

export { auth as default };
//# sourceMappingURL=auth.f2410fd5.mjs.map
