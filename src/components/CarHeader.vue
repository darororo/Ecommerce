<template>
    <div class="car-header">
        
    <div class="back-button">
      <button @click="goBack">⬅ Back</button>
    </div>
    <div></div>
      <div class="car-gallery">
        <img src="@/assets/images/products/car1.png" alt="" class="large-image" />
        <img src="@/assets/images/products/car2.png" alt="">
        <img src="@/assets/images/products/car3.png" alt="">
        <img src="@/assets/images/products/car4.png" alt="">
        <div class=" overlay-container">
          <img src="@/assets/images/products/car5.png" alt="">
          <div class="overlay-text">All Photos (6)</div>
        </div>
      </div>
  
      <div class="car-details">
        <div class="text-content">
          <h2 class="title">2017 Ferrari LaFerrari</h2>
        </div>
        
      </div>
      <div class="car-details1">
          <p class="subtitle">Dubai, United Arab Emirates</p>

          <p class="price">$6,669,988</p>
          <button @click="inquire" class="inquire-button">Inquire</button>
        </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "CarHeader",
    methods: {
      inquire() {
        alert("Inquire button clicked!");
      },
    },
  };
  </script>
  
  <style scoped>
  @import url('https://fonts.googleapis.com/css2?family=Goldman:wght@400;700&family=Roboto+Serif:ital,opsz,wght@0,8..144,100..900;1,8..144,100..900&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Goldman:wght@400;700&family=Inria+Sans:ital,wght@0,300;0,400;0,700;1,300;1,400;1,700&family=Roboto+Serif:ital,opsz,wght@0,8..144,100..900;1,8..144,100..900&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');
  .car-header {
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #f9f9f9;
    padding: 20px;
    
  }
  .back-button {
    width: 100%;
    text-align: left;
  }
  .back-button button {
  width: 100%;
  height: 35px;
  text-align: left;
  background: gainsboro;
  border: 10px;
  padding: 5px;
  
}
  
  .car-gallery {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 20px;
    width: 100%;
    max-width: 1200px;
    
  }
  
  .car-gallery .large-image {
    grid-column: span 3;
    grid-row: span 2;
    width: 100%;
    height: auto;
    border-radius: 5px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  }
  
  .car-gallery img {
    width: 100%;
    height: 175px;
    border-radius: 5px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
    
  }
  

  
  
  /* Overlay container styling */
  .overlay-container {
    position: relative;
    

  }
  
  .overlay-text {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: white;
    font-size: 15px;
    font-weight: bold;
    padding: 37px 90px 90px;
    background-color: rgba(0, 0, 0, 0.5);
    border-radius: 5px;
    
  }
  
  .car-details {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 20px;
    width: 100%;
    max-width: 1200px;
    
  }
  .car-details1{
    
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 20px;
    width: 100%;
    max-width: 1200px;
  }
  
  .text-content {
    text-align: left;
    font-family: "Roboto Serif", serif;
  }
  
  .title {
    font-size: 24px;
    font-weight: bold;
    color: #333;
    margin: 0;
  }
  
  .subtitle {
    font-size: 16px;
    color: #777;
    margin: 5px 0 0 0;
  }
  
  .price {
    font-size: 28px;
    color: #090607;
    font-weight: bold;
    margin: 0;
    font-family: "Inria Sans", serif;
    font-weight: 700;
    font-style: normal;
   
  }
  
  
  .inquire-button {
    display: inline-block;
    margin-top: 10px;
    padding: 10px 20px;
    background-color: #e63946;
    color: white;
    border: none;
    width: 15%;
    font-size: 16px;
    border-radius: 15px;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }
  .button:hover {background-color: #3e8e41}

  .button:active {
    background-color: #3e8e41;
    box-shadow: 0 5px #666;
    transform: translateY(4px);
  }
    
  .inquire-button:hover {
    background-color: #d62839;
  }
  </style>
  