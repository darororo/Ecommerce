<template>
  <div class="product-list">
      <h3 class="header-product">Product lists</h3>
      <div class="product-container">
        <div class="product-item" v-for="(brand, index) in brands" :key="index">
          <img :src="brand.logo" :alt="brand.name" loading="lazy" />
          <!-- <div style="display: flex;">
            <div style="border: 1px solid; height: 10px; width: 10px; border-radius: 100%; font-size: 8px; font-weight: bold;">R</div>
          </div> -->
          <p class="branch-name">{{ brand.name }}</p> 
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
          { name: '', logo: new URL('@/assets/images/brands/ferrari.png', import.meta.url).href },
          { name: '', logo: new URL('@/assets/images/brands/mercedes.png', import.meta.url).href },
          { name: '', logo: new URL('@/assets/images/brands/lamborghini.png', import.meta.url).href },
          { name: '', logo: new URL('@/assets/images/brands/bmw.png', import.meta.url).href }
        ]
      };
    }
  };
  </script>
  <style>
  @import url('https://fonts.cdnfonts.com/css/yapari-trial');
  @import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap');
  
  .header-product {
    padding: 100px 0px 28px 0px;
    font-family: "Montserrat", sans-serif; 
    font-weight: 400;
    font-size: 32px;
  }
  .product-list {
    text-align: center;
    margin-top: 20px;
  }
  
  .product-container {
    display: flex;
    justify-content: center;
    gap: 20px;
  }
  
  .product-item {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column; 
    text-align: center;
    border: 1px solid #ccc;
    padding: 20px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    width: 180px;
    height: 100px; 
    background-color: white;
    cursor: pointer;
  }
  
  .product-item img {
    max-width: 48px;
    max-width: 48px;
    margin-top: 20px;
  }
  
  .branch-name {
    margin-top: 8px;
    font-size: 14px;
    font-family: 'Yapari Variable Trial', sans-serif; 
  }
  </style>
  