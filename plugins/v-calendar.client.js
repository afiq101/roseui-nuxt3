import { SetupCalendar, Calendar, DatePicker } from "v-calendar";
import "v-calendar/dist/style.css";

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(SetupCalendar, {
    componentPrefix: "v",
  });
  nuxtApp.vueApp.component("v-calendar", Calendar);
  nuxtApp.vueApp.component("v-date-picker", DatePicker);
});
