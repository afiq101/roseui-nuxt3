// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: [
    "@nuxtjs/tailwindcss",
    "@nuxtjs/color-mode",
    "@pinia/nuxt",
    "@formkit/nuxt",
    "nuxt-icon",
  ],
  buildModules: ["@nuxtjs/pwa", "floating-vue/nuxt"],
  app: {
    pageTransition: { name: "page", mode: "out-in" },
  },
  head: {
    title: "RoseUI - NuxtJS Admin Dashboard Template",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: "RoseUI - NuxtJS Admin Dashboard Template",
      },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
  },
  pwa: {
    icon: false, // disables the icon module
    manifest: {
      name: "MawarCMS",
      lang: "en",
      useWebmanifestExtension: false,
    },
  },
  tailwindcss: {
    cssPath: "~/assets/style/css/tailwind.css",
    configPath: "tailwind.config",
    exposeConfig: false,
    config: {},
    injectPosition: 0,
    viewer: true,
  },
  colorMode: {
    preference: "system", // default value of $colorMode.preference
    fallback: "light", // fallback value if not system preference found
    classSuffix: "",
  },
  css: ["~/assets/style/scss/main.scss"],
  formkit: {
    defaultConfig: true,
  },
});
