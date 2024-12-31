<template>
  <div class="container">
    <div class="img-container">
      <img src="@/assets/images/products/car1.png" />
    </div>
    <div class="text-container">
      <div class="text-row-1">
        <div class="price">$6,670,088</div>
        <div class="bookmark">
          <input class="star" type="checkbox" title="bookmark page" checked />
        </div>
      </div>
      <div class="name-car">2017 Ferrari LaFerrari</div>
      <div class="script-seller">
        <div class="description">
          The LaFerrari features a 6262cc V12 engine built for performance. The
          LaFerrari is the first production car to ever be equipped with an
          F1-derived hybrid solution
        </div>
        <div class="seller">
          <SellerIcon />
          <span>Yem Daro</span>
        </div>
      </div>
      <div class="reser-detail">
        <button class="btn-reser">Reserve Now</button>
        <RouterLink to="/car/1">
          <button class="btn-deta">More detail</button>
        </RouterLink>
      </div>
    </div>
  </div>
</template>

<script>
import { RouterLink } from "vue-router";
import SellerIcon from "@/components/icons/SellerIcon.vue";

export default {
  components: {
    SellerIcon,
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
}

.img-container > img {
  width: 100%;
  height: 100%;
  border-radius: 10px;
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
  font-family: "Inria Sans", sans-serif;
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
