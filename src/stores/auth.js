import { defineStore } from "pinia";

export const useAuthStore = defineStore("auth", {
  state: () => ({
    disableCheckoutNext: false,
  }),
  getters: {},
  actions: {},
});
