<script>
import Back from "./Back.vue";
export default {
  components: {
    Back,
  },
};
</script>

<template>
  <Back />
  <div class="container">
    <div class="grid-container">
      <div class="grid-header">
        <img src="@/assets/images/products/car1.png" class="header-image" />
        <img src="@/assets/images/products/car2.png" class="header-image" />
      </div>
      <div class="grid-main">
        <img src="@/assets/images/products/car3.png" class="main-image" />
        <img src="@/assets/images/products/car4.png" class="main-image" />
        <img src="@/assets/images/products/car5.png" class="main-image" />
      </div>
      <div class="grid-footer">
        <img src="@/assets/images/products/car3.png" class="footer-image" />
        <img src="@/assets/images/products/car4.png" class="footer-image" />
      </div>
    </div>
    <div class="last-gallery">
      <img src="@/assets/images/products/car1.png" />
    </div>
  </div>
</template>

<style scoped>
.container {
  padding: 10px 20px 0px 20px;
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
  height: auto;
  height: 100%;
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
  height: auto;
  height: 100%;
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
  height: auto;
  width: 100%;
  height: 100%;
  object-fit: cover;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  cursor: pointer;
}
.last-gallery {
  display: flex;
  justify-content: center;
  padding-top: 10px;
  width: 100%;
}
.last-gallery > img {
  height: auto;
  height: 100%;
  width: 100%;
  object-fit: cover;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  cursor: pointer;
}
</style>
