<script>
import { mapState } from "pinia";
import { useUsersStore } from "@/stores/users";
import { useUtilStore } from "@/stores/utils";
import SimpleCarCard from "@/components/car/SimpleCarCard.vue";
import NavComponent from "@/components/navigation/NavComponent.vue";
import { useCarStore } from "../stores/cars";

export default {
  setup() {
    const userStore = useUsersStore();
    const utilStore = useUtilStore();
    console.log(userStore.bookmarks.length);
    return {
      userStore,
      utilStore,
    };
  },
  components: {
    SimpleCarCard,
    NavComponent,
  },
  computed: {
    ...mapState(useUsersStore, {
      bookmarks: "bookmarks",
    }),
    ...mapState(useCarStore, {
      imageUrl(store) {
        return (id, img) => store.getImageURL("cars", id, img);
      },
    }),
    ...mapState(useUtilStore, {
      formatUsd: "formatUsd",
    }),
  },
};
</script>

<template>
  <NavComponent text-color="black" />
  <div class="bookmark-container">
    <div class="simple-card-container">
      <template v-for="car in bookmarks" :key="car.id">
        <SimpleCarCard
          :id="car.id"
          :model="car.model"
          :price="formatUsd(car.price)"
          :image="imageUrl(car.id, car.images[0])"
        />
      </template>
    </div>
  </div>
</template>

<style scoped>
.bookmark-container {
  padding: 150px 0 0 500px;
}

.simple-card-container {
  display: flex;
  flex-direction: column;
  row-gap: 20px;
}
</style>
