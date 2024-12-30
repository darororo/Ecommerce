<template>
  <div class="car-header">
    <div class="back-button">
      <RouterLink to="/" class="router-link">
        <ChevronBack />
        <button @click="goBack">Back</button>
      </RouterLink>
    </div>
    <div class="image-section">
      <img src="@/assets/images/products/car1.png" class="large-image" />
      <div class="small-gallery">
        <img src="@/assets/images/products/car1.png" class="small-image" />
        <img src="@/assets/images/products/car1.png" class="small-image" />
        <img src="@/assets/images/products/car1.png" class="small-image" />
        <div class="overlay-container">
          <div class="overlay-text">All Photos (6)</div>
          <img src="@/assets/images/products/car1.png" class="small-image" />
        </div>
      </div>
    </div>
    <div class="price-sec">
      <div class="car-details">
        <div class="text-content">
          <h2 class="title">2017 Ferrari LaFerrari</h2>
        </div>
      </div>
      <div class="car-details1">
        <p class="subtitle">Dubai, United Arab Emirates</p>
        <div class="price-inquire">
          <p class="price">$6,669,988</p>
          <button @click="inquire" class="inquire-button">Inquire</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ChevronBack from "@/components/icons/productPage/chevronBack.vue";

export default {
  name: "CarHeader",
  methods: {
    inquire() {
      alert("Inquire button clicked!");
    },
  },
  components: {
    ChevronBack,
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Lora:ital,wght@0,400..700;1,400..700&display=swap");
.car-header {
  /* padding-top: 116px; */
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
  column-gap: 20px;
}
.large-image {
  width: auto;
  height: 443px;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
}
.small-gallery {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;
}
.small-gallery > img {
  height: 214px;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
}
.overlay-container {
  position: relative;
}
.overlay-container > img {
  height: 214px;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
}
.overlay-text {
  display: flex;
  position: absolute;
  top: 49%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
  font-size: 15px;
  font-weight: bold;
  background-color: rgba(0, 0, 0, 0.5);
  border-radius: 10px;
  height: 214px;
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
</style>
