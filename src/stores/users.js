import { defineStore } from "pinia";

export const useUsersStore = defineStore("users", {
  state: () => ({
    bookmarks: [],
    mapCarBookmarked: {},
    mapCarLoan: {},
  }),
  getters: {},
  actions: {
    addBookmark(car) {
      if (!this.mapCarBookmarked[car.id]) {
        this.bookmarks.push(car);
        this.mapCarBookmarked[car.id] = true;
        console.log(this.bookmarks);
      }
    },
    removeBookmark(car) {
      const index = this.bookmarks.indexOf(car);
      this.bookmarks.splice(index, 1);
      delete this.mapCarBookmarked[car.id];
    },
    isBookmarked(car) {
      if (this.mapCarBookmarked[car.id]) {
        return true;
      } else {
        return false;
      }
    },
  },
});
