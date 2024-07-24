// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: [
    "@nuxtjs/tailwindcss",
    "@formkit/nuxt",
    "@vueuse/nuxt",
    "floating-vue/nuxt",
    "@pinia/nuxt",
    "@pinia-plugin-persistedstate/nuxt",
    "nuxt-typed-router",
    "nuxt-icon",
    "@davestewart/nuxt-scrollbar",
  ],
  app: {
    pageTransition: { name: "page", mode: "out-in" },
  },
  head: {
    title: "corradUI - NuxtJS Admin Dashboard Template",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: "corradUI - NuxtJS Admin Dashboard Template",
      },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
  },
  tailwindcss: {
    cssPath: "~/assets/style/css/tailwind.css",
    configPath: "tailwind.config",
    exposeConfig: false,
    config: {},
    injectPosition: 0,
    viewer: false,
  },
  css: ["~/assets/style/scss/main.scss"],
  formkit: {
    defaultConfig: true,
  },
});
