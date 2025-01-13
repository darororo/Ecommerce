<template>
  <div class="filter-panel">
    <!-- Price Section -->
    <div class="section">
      <p class="title gold">Price</p>
      <fieldset>
        <div v-for="option in priceOptions" :key="option.value" class="option">
          <input type="radio" :id="option.value" @click="selectedPrice = option.value" name="price"
            :checked="option.selected" :value="option.value" />
          <label :for="option.value" class="roboto">{{ option.label }}</label>
        </div>
      </fieldset>
    </div>

    <!-- Brand Section -->
    <div class="section">
      <p class="title gold">Brand</p>
      <fieldset>
        <div v-for="brand in brandOptions" :key="brand.value" class="option">
          <input type="radio" :id="brand.value" @click="selectedBrand = brand.value" name="brand"
            :checked="brand.selected" :value="brand.value" />
          <label :for="brand.value" class="roboto">{{ brand.label }}</label>
        </div>
      </fieldset>
    </div>

    <!-- Discount Section -->
    <div class="section">
      <p class="title gold">Discount</p>
      <fieldset>
        <div v-for="discount in discountOptions" :key="discount.value" class="option">
          <input type="radio" :id="discount.value" :checked="discount.selected"
            @click="selectedDiscount = discount.value" name="discount" :value="discount.value" />
          <label :for="discount.value" class="roboto">{{ discount.label }}</label>
        </div>
      </fieldset>
    </div>
  </div>
</template>

<script setup>
import { ref, watch } from "vue";

const selectedPrice = ref(false);
const selectedBrand = ref(false);
const selectedDiscount = ref(false);

// Define filter options
const priceOptions = [
  { value: false, label: "All", selected: true },
  { value: 1000001, label: "Above $1M" },
  { value: 1000000, label: "Under $1M" },
  { value: 500000, label: "Under $500K" },
  { value: 200000, label: "Under $200K" },
  { value: 100000, label: "Under $100K" },
];

const brandOptions = [
  { value: false, label: "All", selected: true },
  { value: "ferrari", label: "Ferrari" },
  { value: "mercedes", label: "Mercedes" },
  { value: "porsche", label: "Porsche" },
  { value: "lamborghini", label: "Lamborghini" },
  { value: "bmw", label: "BMW" },
];

const discountOptions = [
  { value: false, label: "All", selected: true },
  { value: true, label: "With discounts" },
];
const emit = defineEmits(['filter-price', 'filter-brand', 'filter-discount']);

emit('filter-price', selectedPrice)
emit('filter-brand', selectedBrand)
emit('filter-discount', selectedDiscount)

watch(selectedPrice, (cur) => {
  emit('filter-price', cur)
});
watch(selectedBrand, (cur) => {
  console.log('brand filter: ', cur)
  emit('filter-brand', cur)
})
watch(selectedDiscount, (cur) => emit('filter-discount', cur))

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
