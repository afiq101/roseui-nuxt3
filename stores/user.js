import { defineStore } from "pinia";

export const useUserStore = defineStore({
  id: "user",
  state: () => ({
    user: null,
    isAuth: false,
  }),
  actions: {
    setUser(user) {
      this.user = user;
    },
    setAuth(isAuth) {
      this.isAuth = isAuth;
    },
  },
});
