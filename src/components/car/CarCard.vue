<template>
  <div class="container">
    <div class="img-container">
      <div v-if="car.discount" class="discount-tag"> {{ car.discount }} % OFF</div>
      <img :src="imageUrl" />
    </div>
    <div class="text-container">
      <div class="text-row-1">
        <div class="price" v-if="car.discount">
          <span class="original-price"><del>{{ formatUsd(car.price) }}</del></span>
          {{ formatUsd(discountedPrice) }}
        </div>
        <div v-else class="price discounted-price">{{ formatUsd(car.price) }}</div>
        <BookmarkComponent :car="car" />
      </div>
      <div class="name-car">{{ car.model }}</div>
      <div class="script-seller">
        <div class="description">
          {{ car.description }}
        </div>
        <div class="seller">
          <SellerIcon />
          <span>Yem Daro</span>
        </div>
      </div>
      <div class="reser-detail">
        <RouterLink :to="{ name: 'checkout', params: { carId: car.id } }">
          <button class="btn-reser">Reserve Now</button>
        </RouterLink>
        <RouterLink :to="`/car/${car.id}`">
          <button class="btn-deta">More detail</button>
        </RouterLink>
      </div>
    </div>
  </div>
</template>

<script>
import { RouterLink } from "vue-router";
import SellerIcon from "@/components/icons/SellerIcon.vue";
import { mapState } from "pinia";
import { useCarStore } from "../../stores/cars";
import { useUtilStore } from "../../stores/utils";
import { useUsersStore } from "../../stores/users";
import BookmarkComponent from "../bookmark/BookmarkComponent.vue";

export default {
  components: {
    SellerIcon,
    BookmarkComponent,
  },
  computed: {
    ...mapState(useCarStore, {
      cars: "cars",
      imageUrl(store) {
        return store.getImageURL("cars", this.car.id, this.car.images[0]);
      },
      discountedPrice(store) {
        return store.getDiscountedPrice(this.car.price, this.car.discount)
      }
    }),
    ...mapState(useUtilStore, {
      formatUsd: "formatUsd",
    }),
  },
  props: {
    car: Object,
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Caudex:ital,wght@0,400;0,700;1,400;1,700&family=Goldman:wght@400;700&family=Inria+Serif:ital,wght@0,300;0,400;0,700;1,300;1,400;1,700&family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&family=Montserrat:ital,wght@0,100..900;1,100..900&family=Quattrocento+Sans:ital,wght@0,400;0,700;1,400;1,700&family=Quattrocento:wght@400;700&family=Quicksand:wght@300..700&display=swap");
@import url("https://fonts.cdnfonts.com/css/inria-sans");

.container {
  display: flex;
  flex-direction: column;
  width: 100%;
  padding-bottom: 8px;
  height: 100%;
  border: 1px solid #b0b0b0;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  border-radius: 10px;
  font-family: "Inria Sans", sans-serif;
}

.img-container>img {
  display: block;
  max-height: 320px;
  width: 100%;
  /* height: 100%; */
  height: 100vh;
  border-radius: 10px 10px 0px 0px;
}

.img-container {
  position: relative;
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

.original-price {
  font-size: 16px;
  color: red;
}

.text-container {
  background: white;
  height: 100%;
  padding: 16px 16px 0px 16px;
}

.text-row-1 {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 10px;
  word-spacing: 12px;
}

.star {
  visibility: hidden;
  font-size: 36px;
  bottom: 22px;
  right: 16px;
  position: relative;
  cursor: pointer;
}

.star::after {
  content: "\2605";
  visibility: visible;
  color: black;
}

.star:checked::after {
  color: #a8a8a8;
  content: "\2606";
}

.price {
  font-style: normal;
  font-size: 18px;
  font-weight: bold;
}

.bookmark {
  display: flex;
  align-items: center;
  gap: 14px;
  font-size: 18px;
  font-style: normal;
  font-family: "Inria Sans", sans-serif;
  cursor: pointer;
}

.name-car {
  font-family: "Inria Sans", sans-serif;
  font-weight: 100;
  padding-bottom: 10px;
  font-size: 18px;
}

.description {
  font-family: "Inria Sans", sans-serif;
  font-size: 16px;
  font-weight: lighter;
  color: #828282;
  width: 24rem;
  line-height: 24px;
}

.script-seller {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  padding: 14px 0px 20px 0px;
}

.seller {
  display: flex;
  color: #464646;
  gap: 4px;
  cursor: pointer;
  padding: 0px 6px 0px 0px;
}

.seller span {
  font-size: 14px;
}

.reser-detail {
  display: flex;
  justify-content: space-between;
}

.btn-reser {
  position: relative;
  display: inline-block;
  padding: 14px 60px;
  font-size: 16px;
  color: white;
  background-color: red;
  border: 1px solid transparent;
  border-radius: 0px 12px 0px 12px;
  cursor: pointer;
  overflow: hidden;
  transition: color 0.5s ease, background-color 0.5s ease, border 0.5s ease;
  z-index: 1;
}

.btn-reser::before {
  content: "";
  position: absolute;
  top: 50%;
  left: 50%;
  width: 120%;
  height: 0%;
  transform: translate(-50%, -50%) rotate(45deg);
  z-index: -1;
  background-color: white;
  transition: height 0.8s ease;
}

.btn-reser:hover::before {
  height: 400%;
}

.btn-reser:hover {
  color: black;
  border: 1px solid rgb(172, 172, 172);
}

.btn-deta {
  width: 230px;
  height: 50px;
  border: 2px solid rgb(172, 172, 172);
  background-color: white;
  border-radius: 0px 12px 0px 12px;
  font-family: "Inria Sans", sans-serif;
  font-size: 18px;
  font-weight: 200;
  border: 1px solid rgb(172, 172, 172);
  cursor: pointer;
}
</style>
