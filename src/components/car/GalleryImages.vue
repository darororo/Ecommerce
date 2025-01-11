<script>
import { mapState } from "pinia";
import FooterComponent from "../FooterComponent.vue";
import Back from "./Back.vue";
import { useCarStore } from "../../stores/cars";
export default {
  components: {
    Back,
    FooterComponent,
  },
  computed: {
    ...mapState(useCarStore, {
      cars: "cars",
      imageUrls(store) {
        const urls = [];
        const id = this.$route.params.carId;
        const car = store.getCar(id)
        car.images.forEach(img => {
          urls.push(store.getImageURL("cars", id, img))
        });
        console.log(car.images)

        return urls
      },
    }),
  }
};
</script>

<template>
  <Back />
  <div class="container">
    <div class="grid-container">
      <div class="grid-header">
        <img v-for="img in imageUrls.slice(0, 2)" :src="img" class="header-image" />
      </div>
      <div class="grid-main">
        <img v-for="img in imageUrls.slice(3, 4)" :src="img" class="main-image" />
        <!-- <img src="@/assets/images/products/car4.png" class="main-image" />
        <img src="@/assets/images/products/car5.png" class="main-image" /> -->
      </div>
      <div class="grid-footer">
        <img v-for="img in imageUrls.slice(4, 5)" :src="img" class="footer-image" />
        <!-- <img src="@/assets/images/products/car4.png" class="footer-image" /> -->
      </div>
    </div>
    <div class="last-gallery">
      <img :src="imageUrls[imageUrls.length - 1]" />
    </div>
  </div>
</template>

<style scoped>
.container {
  padding: 10px 20px 100px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.grid-container {
  display: grid;
  grid-template-rows: auto auto auto;
  gap: 10px;
  width: 100%;
}

.grid-header {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px;
  width: 100%;
}

.grid-header img {
  height: 70%;
  width: 100%;
  object-fit: cover;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  cursor: pointer;
}

.grid-main {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
  height: 100%;
  width: 100%;
}

.grid-main img {
  position: relative;
  bottom: 198px;
  height: auto;
  height: 90%;
  width: 100%;
  object-fit: cover;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  cursor: pointer;
}

.grid-footer {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px;
  width: 100%;
}

.grid-footer img {
  position: relative;
  bottom: 240px;
  height: auto;
  width: 100%;
  height: 80%;
  object-fit: cover;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  cursor: pointer;
}

.last-gallery {
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 10px;
  width: 100%;
}

.last-gallery>img {
  position: relative;
  bottom: 358px;
  height: auto;
  height: 80%;
  width: 100%;
  object-fit: cover;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  cursor: pointer;
}
</style>
