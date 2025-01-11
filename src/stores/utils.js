import { defineStore } from "pinia";

export const useUtilStore = defineStore("utils", {
  state: () => ({}),
  getters: {},
  actions: {
    formatUsd(currency) {
      // Create our number formatter.
      const formatter = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
        trailingZeroDisplay: "stripIfInteger",
      });
      return formatter.format(currency);
    },
  },
});
