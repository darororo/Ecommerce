<template>
  <div class="car-header">
    <div class="image-section">
      <div class="main-img">
        <RouterLink :to="'/car/' + $route.params.carId + '/gallery'">
          <img :src="imageUrls[0]" class="large-image" />
          <div v-if="car.discount" class="discount-tag"> {{ car.discount }} % OFF</div>
        </RouterLink>
      </div>
      <RouterLink :to="'/car/' + $route.params.carId + '/gallery'">
        <div class="small-gallery">
          <!-- <img v-for="img in imageUrls" :src="img" alt=""> -->
          <img v-for="img in imageUrls.slice(1, 4)" :src="img" alt="" class="small-image" />
          <!-- <img src="@/assets/images/products/car2.png" class="small-image" />
          <img src="@/assets/images/products/car3.png" class="small-image" />
          <img src="@/assets/images/products/car4.png" class="small-image" /> -->
          <div v-show="car.images.length > 5" class="overlay-container">
            <div class="overlay-text">All Photos ({{ car.images.length }})</div>
            <img :src="imageUrls[car.images.length - 1]" class="small-image" />
          </div>
        </div>
      </RouterLink>
    </div>
    <div class="price-sec">
      <div class="car-details">
        <div class="text-content">
          <h2 class="title">{{ car.model }}</h2>
        </div>
      </div>
      <div class="car-details1">
        <p class="subtitle">{{ car.location }}</p>
        <div class="price-inquire price">
          <p v-if="car.discount"> <span class="original-price"><del>{{ formatUsd(car.price) }}</del></span>
            {{ formatUsd(discountedPrice(car.price, car.discount)) }}
          </p>
          <p v-else class="price">{{ formatUsd(car.price) }}</p>
          <button @click="inquire" class="inquire-button">Inquire</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'pinia';
import { useCarStore } from '../../stores/cars';
import { useUtilStore } from '../../stores/utils';

export default {
  name: "CarHeader",
  methods: {
    inquire() {
      alert("Inquire button clicked!");
    },
  },
  computed: {
    ...mapState(useCarStore, {
      car(store) {
        return store.getCar(this.$route.params.carId);
      },
      imageUrls(store) {
        const urls = [];
        this.car.images.forEach(img => {
          urls.push(store.getImageURL("cars", this.$route.params.carId, img))
        });
        return urls
      },
      discountedPrice: 'getDiscountedPrice',
    }),

    ...mapState(useUtilStore, {
      formatUsd: 'formatUsd',
    })

  },

};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Lora:ital,wght@0,400..700;1,400..700&display=swap");

.car-header {
  padding: 10px 136px 0 136px;
}

.car-header .main-img {
  width: auto;
  height: 100%;
  position: relative;
}

.back-button {
  display: flex;
  align-items: center;
  background-color: rgba(217, 217, 217, 0.7);
  box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
  padding: 0px 0px 0px 20px;
  width: auto;
}

.back-button button {
  font-family: Arial, Helvetica, sans-serif;
  height: 60px;
  text-align: left;
  font-size: 20px;
  font-weight: 500;
  border: 10px;
  background-color: rgba(217, 217, 217, 0);
  cursor: pointer;
}

.router-link {
  display: flex;
  align-items: center;
  text-decoration: none;
}

.image-section {
  display: flex;
  justify-content: center;
  padding: 10px 120px 0 120px;
  column-gap: 10px;
}

.large-image {
  width: auto;
  height: 498px;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
}

.small-gallery {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px;
}

.small-gallery>img {
  height: 244px;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
}

.overlay-container {
  position: relative;
}

.overlay-container>img {
  height: 240px;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
}

.overlay-text {
  display: flex;
  position: absolute;
  top: 49%;
  left: 50%;
  font-family: Arial, Helvetica, sans-serif;
  transform: translate(-50%, -50%);
  color: white;
  font-size: 18px;
  font-weight: bold;
  background-color: rgba(0, 0, 0, 0.5);
  border-radius: 10px;
  height: 240px;
  width: 100%;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}

.car-details {
  margin-top: 30px;
}

.car-details1 {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 10px;
}

.price-inquire {
  display: flex;
  align-items: center;
  column-gap: 60px;
}

.text-content {
  font-family: Arial, Helvetica, sans-serif;
}

.title {
  font-size: 30px;
  font-weight: 600;
  color: #000000;
  margin: 0;
}

.subtitle {
  font-size: 16px;
  font-family: "Roboto";
  color: #000000;
}

.price {
  font-size: 34px;
  color: #090607;
  font-weight: bold;
  margin: 0;
  font-family: "Inria Sans", serif;
  font-weight: 700;
  font-style: normal;
}

.original-price {
  font-size: 24px;
  color: red;
}

.inquire-button {
  display: inline-block;
  background-color: #e63946;
  color: white;
  height: 60px;
  width: 220px;
  border: none;
  font-size: 16px;
  cursor: pointer;
  border-radius: 0px 16px 0px 16px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
}

.discount-tag {
  position: absolute;
  width: 100px;
  height: 40px;
  bottom: 20px;
  right: 0;
  color: white;
  background-color: rgb(255, 111, 0);
  font-weight: 600;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 7px 0 0 7px;
}
</style>
