<template>
  <div
    class="related-rides"
    @click="$router.push({ name: 'car', params: { carId: car.id } })"
  >
    <div class="suggested-card">
      <div class="ride-details">
        <div class="img-container">
          <div v-if="car.discount" class="discount-tag">
            {{ car.discount }} % OFF
          </div>
          <img :src="imageUrl" class="ride-image" />
        </div>
        <div class="product-card">
          <div v-if="car.discount">
            <p class="price">
              <span class="original-price">
                <del>
                  {{ formatUsd(car.price) }}
                </del>
              </span>
              {{ formatUsd(discountedPrice) }}
            </p>
          </div>
          <p v-else class="price discounted-price">
            {{ formatUsd(car.price) }}
          </p>
          <h3>{{ car.model }}</h3>
          <span>{{ car.location }}</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapState } from "pinia";
import { useCarStore } from "../stores/cars";
import { object } from "yup";
import { useUtilStore } from "../stores/utils";

export default {
  props: {
    car: Object,
  },
  computed: {
    ...mapState(useUtilStore, { formatUsd: "formatUsd" }),
    ...mapState(useCarStore, {
      imageUrl(store) {
        return store.getImageURL("cars", this.car.id, this.car.images[0]);
      },
      discountedPrice(store) {
        return store.getDiscountedPrice(this.car.price, this.car.discount);
      },
    }),
  },
};
</script>
<style scoped>
.related-rides {
  text-align: center;
  font-family: Arial, sans-serif;
  margin: 10px;
}

.suggested-card {
  display: flex;
  align-items: center;
  margin: 0 auto;
  border: 1px solid #ccc;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
}

.ride-details {
  text-align: left;
}

.ride-image {
  max-width: 100%;
  height: auto;
}

.price {
  font-size: 20px;
  color: black;
  font-weight: bold;
}
h3 {
  font-weight: 500;
  font-size: 16px;
}
span {
  font-size: 16px;
  color: #555;
}
.product-card {
  padding: 30px 20px 20px 20px;
  line-height: 16px;
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
</style>
