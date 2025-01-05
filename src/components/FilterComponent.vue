<template>
  <div class="filter-panel">
    <!-- Price Section -->
    <div class="section">
      <p class="title gold">Price</p>
      <div v-for="option in priceOptions" :key="option.value" class="option">
        <input
          type="radio"
          :id="option.value"
          name="price"
          :value="option.value"
          v-model="selectedPrice"
        />
        <label :for="option.value" class="roboto">{{ option.label }}</label>
      </div>
    </div>

    <!-- Brand Section -->
    <div class="section">
      <p class="title gold">Brand</p>
      <div v-for="brand in brandOptions" :key="brand.value" class="option">
        <input
          type="radio"
          :id="brand.value"
          name="brand"
          :value="brand.value"
          v-model="selectedBrand"
        />
        <label :for="brand.value" class="roboto">{{ brand.label }}</label>
      </div>
    </div>

    <!-- Discount Section -->
    <div class="section">
      <p class="title gold">Discount</p>
      <div
        v-for="discount in discountOptions"
        :key="discount.value"
        class="option"
      >
        <input
          type="radio"
          :id="discount.value"
          name="discount"
          :value="discount.value"
          v-model="selectedDiscount"
        />
        <label :for="discount.value" class="roboto">{{ discount.label }}</label>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const selectedPrice = ref("all");
const selectedBrand = ref("all");
const selectedDiscount = ref("all");

// Define filter options
const priceOptions = [
  { value: "all", label: "All" },
  { value: "above1M", label: "Above $1M" },
  { value: "under1M", label: "Under $1M" },
  { value: "under500K", label: "Under $500K" },
  { value: "under200K", label: "Under $200K" },
  { value: "under100K", label: "Under $100K" },
];

const brandOptions = [
  { value: "all", label: "All" },
  { value: "ferrari", label: "Ferrari" },
  { value: "mercedes", label: "Mercedes" },
  { value: "porsche", label: "Porsche" },
  { value: "lamborghini", label: "Lamborghini" },
  { value: "bmw", label: "BMW" },
];

const discountOptions = [
  { value: "all", label: "All" },
  { value: "withDiscounts", label: "With discounts" },
];
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Goldman:wght@400;700&family=Roboto:wght@400;700&display=swap");

.filter-panel {
  max-width: 300px;
  margin: 0 auto;
}

.section {
  margin-bottom: 20px;
}

.title {
  font-family: "Quattrocento", serif;
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 10px;
}

.option {
  margin-bottom: 8px;
}

input[type="radio"] {
  margin-right: 10px;
}

.roboto {
  font-family: "Quattrocento", serif;
  font-weight: 500;
  font-size: 16px;
}
</style>
