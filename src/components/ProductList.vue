<template>
    <div class="product-list">
      <h3>Product Lists</h3>
      <div class="product-container">
        <div class="product-item" v-for="(brand, index) in brands" :key="index">
          <img :src="brand.logo" :alt="brand.name" />
          <p class="branch-name">{{ brand.name }}</p> <!-- Add this line to show the name -->
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        brands: [
          { name: 'Porsche', logo: new URL('@/assets/images/brands/porsche.png', import.meta.url).href },
          { name: 'Ferrari', logo: new URL('@/assets/images/brands/ferrari.png', import.meta.url).href },
          { name: 'Mercedes', logo: new URL('@/assets/images/brands/mercedes.png', import.meta.url).href },
          { name: 'Lamborghini', logo: new URL('@/assets/images/brands/lamborghini.png', import.meta.url).href },
          { name: 'BMW', logo: new URL('@/assets/images/brands/bmw.png', import.meta.url).href }
        ]
      };
    }
  };
  </script>
  
  <style scoped>
  .product-list {
    text-align: center;
    margin-top: 20px;
    font-family: Montserrat;
  }
  
  .product-container {
    display: flex;
    justify-content: center;
    gap: 20px;
  }
  
  .product-item {
    border: 1px solid #ccc;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    width: 132px;
    height: 130px; /* Increased height to fit the text */
    display: flex;
    flex-direction: column; /* Stack image and text vertically */
    align-items: center;
    justify-content: center;
    background-color: white;
  }
  
  .product-item img {
    max-width: 80px;
    max-height: 80px;
  }
  
  .branch-name {
    margin-top: 10px;
    font-size: 14px;
    font-weight: bold;
  }
  </style>
  