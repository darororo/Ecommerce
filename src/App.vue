<template>
  <RouterView />
</template>

<script>
import { mapState } from "pinia";
import pb from "./lib/pocketbase";
import { useCarStore } from "./stores/cars";

export default {
  setup() {
    const carStore = useCarStore();
    return {
      carStore,
    };
  },
  async mounted() {
    // try {
    //   const authData = await pb
    //     .collection("users")
    //     .authWithPassword("daroyem99@gmail.com", "password123");
    //   console.log(authData.record.email)
    // } catch (error) {
    //   alert(error)
    // }

    await this.carStore.fetchCars();
    console.log(this.carStore.cars);
  },
};
</script>
