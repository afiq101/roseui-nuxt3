// Import vue 3 plugin here
import CountryFlag from "vue-country-flag-next";

// import CSS files
//import "vue3-country-flag-icon/dist/CountryFlag.css";

// Install the plugin
export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.component("CountryFlag", CountryFlag);
});
