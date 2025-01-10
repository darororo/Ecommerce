<script>
import { RouterLink } from "vue-router";
import Back from "./assets/icons/back.vue";
import { useBrandsStore } from "../../stores/brands";
import { registerRuntimeCompiler } from "vue";
export default {
  setup() {
    const brandStore = useBrandsStore();

    return {
      brandStore,
    };
  },
  components: {
    Back,
  },
  computed: {
    brand() {
      return this.brandStore.brands[this.$route.params.brandName];
    },
    cssLinearGradient() {
      return `linear-gradient(180deg, rgba(255, 255, 255, 1) 0%, ${this.brand.cssGradient} 100%)`;
    },
    bgLetterColor() {
      return this.brand.bgLetterColor;
    },
    carName() {
      return this.brand.carName;
    },
    bgName() {
      return this.brand.bgName;
    },
    firstLink() {
      return this.brand.firstLink;
    },
    secondLink() {
      return this.brand.secondLink;
    },
    thirdLink() {
      return this.brand.thirdLink;
    },
  },
};
</script>

<template>
  <!-- <NavComponent
    :bgColor="'transparent'"
    :textColor="'black'"
    :borderColor="'#C0C0C0'"
  /> -->
  <div class="container-wrapper">
    <span>{{ $route.params.brandName.toUpperCase() }}</span>
  </div>
  <RouterLink to="/">
    <div class="return-home-page">
      <button>
        <Back />
        <span>Back</span>
      </button>
    </div>
  </RouterLink>
  <section class="hero">
    <div class="hero-background">
      <span>{{ bgName }}</span>
      <div class="image-landing-page">
        <img :src="brand.landingImg" />
      </div>
    </div>
  </section>
  <div class="details">
    <div class="details-subtitle">
      <span class="span-link-subtitle">
        <a href="">{{ firstLink }}</a>
        <a href="">{{ secondLink }}</a>
        <a href="">{{ thirdLink }}</a>
      </span>
      <h1>{{ carName }}</h1>
      <label>Gasoline</label>
    </div>
    <div class="listing-items">
      <hr />
    </div>
  </div>
</template>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Roboto+Serif:ital,opsz,wght@0,8..144,100..900;1,8..144,100..900&display=swap");
@font-face {
  font-family: "911Porscha";
  src: url("./assets/fonts/fontFormate/911porschav3.ttf") format("truetype");
  font-weight: normal;
  font-style: normal;
}
.container-wrapper {
  display: flex;
  justify-content: center;
  text-align: center;
  /* padding-top: 116px; */
}
.container-wrapper span {
  font-size: 32px;
  letter-spacing: 4px;
  padding: 30px;
  background-color: white;
  width: 100%;
  border: 1px solid #c0c0c0;
  font-family: "911Porscha", sans-serif;
}
.return-home-page {
  position: absolute;
  top: 22px;
  left: 30px;
  background-color: transparent;
}

.return-home-page button {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
  padding: 10px 20px 10px 10px;
  border: 1px solid gray;
  font-weight: 600;
  border-radius: 4px;
  color: #555;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 14px;
  background-color: white;
  cursor: pointer;
}

.hero {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  width: 100%;
}
.hero-background {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 48vh;
  max-height: 600px;
  width: 100%;
  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 1) 0%,
    rgb(214, 214, 214) 100%
  );
  background: v-bind(cssLinearGradient);
}
.hero-background span {
  position: absolute;
  z-index: 2;
  top: 20%;
  font-size: 16rem;
  font-family: "911Porscha", sans-serif;
  font-weight: bold;
  /* color: #c0c0c0; */
  color: v-bind(bgLetterColor);
  text-align: center;
}
.image-landing-page {
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 52%;
  max-width: 1200px;
  top: 85%;
  z-index: 100;
  transform: translateY(-50%);
}
.image-landing-page > img {
  width: 100%;
  height: auto;
  object-fit: contain;
  max-width: none;
  transform: scale(1.3);
  max-height: none;
}
.details-subtitle {
  margin-top: 8%;
}
.details-subtitle {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.details-subtitle span {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 30px;
}
.details-subtitle h1 {
  font-size: 3rem;
  font-family: "911Porscha", sans-serif;
  font-weight: bolder;
}
.span-link-subtitle a {
  /* text-decoration: none; */
  color: black;
  font-family: Arial, Helvetica, sans-serif;
  font-weight: lighter;
  font-size: 18px;
}
.details-subtitle label {
  font-size: 14px;
  padding: 6px 20px 6px 20px;
  background-color: #e9e9e9;
  border-radius: 6px;
}
.listing-items {
  padding: 20px 136px 0px 136px;
}
hr {
  border-top: 1px solid #ccc;
}
</style>
