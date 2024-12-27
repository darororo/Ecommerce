<template>
  <Transition appear @enter="navEnter" >
  <NavComponent class="nav" :textColor="color" :bgColor="bgColor" :borderColor="borderColor"/>
  </Transition>
  <LandingComponent class="hero"/>
  <ProductList/>
  <h1>Popular Cars</h1>
  <div class="popular-list">
    <template v-for="(car, index) in popularCars" :key="index">
      <PopularCard 
      :name="car.name"
      :themeColor="car.color" 
      :price="car.price"
      :img="car.img"
      :imgHeight="car.height"
      />
    </template>
  </div>
  <h1>Features</h1>
  <div class="car-listing">
    <CarCard />
    <CarCard />
    <CarCard />    
    <CarCard />
    <CarCard />
    <CarCard /> 
    <CarCard />
    <CarCard />   
    <CarCard />       
  </div>
  <FooterComponent/>
  <div>
    <SideBarComponent/>
  </div>
</template>

<script>
import CarCard from '../components/CarCard.vue';
import FooterComponent from '../components/FooterComponent.vue';
import LandingComponent from '../components/LandingComponent.vue';
import NavComponent from '../components/NavComponent.vue';
import PopularCard from '../components/PopularCard.vue';
import ProductList from '../components/ProductList.vue';
import {gsap, Power2} from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SideBarComponent from '../components/SideBarComponent.vue';

export default {
    setup() {
        gsap.registerPlugin(ScrollTrigger);
    },
    data() {
      return {
        color: 'white',
        bgColor: 'transparent',
        borderColor: "gray",
        popularCars: [
          {
            name: "Porsche 911 GT2 RS",
            price: "293,200",
            color: "gray",
            img: "./src/assets/images/popular/car1.png",
            height: "160px",
          },
          {
            name: "Ferrari SF90",
            price: "293,200",
            color: "red",
            img: "./src/assets/images/popular/car2.png",
            height: "160px",

          },
          {
            name: "Lamborghini Aventador S Roadster",
            price: "293,200",
            color: "#0066ff",
            img: "./src/assets/images/popular/car3.png",
            height: "125px",

          }

        ]
      }
    },
    components: {
      LandingComponent,
      NavComponent,
      ProductList,
      PopularCard,
      CarCard,
      FooterComponent,
      SideBarComponent
    },
    methods: {
      navInit,
      navEnter,
      navLeave,
    },

}


function navInit(el, done) {
  this.color = "white"
  done()
}

function navEnter(el, done){
  console.log("enter")
  gsap.to(el, {
    scrollTrigger: {
      // trigger: ".hero",
      start: "+=10px top",
      end: "+=10px 0",
      toggleActions: "play none reverse none",
      // markers: true,

    },
    duration: 0.4,
    ease: "power2",
    immediateRender: false,
    backgroundColor: "white",
    onStart: () => {
      this.color = "black";
      this.borderColor = "#C0C0C0";
      // this.bgColor = "white";
      done();
    },
    onReverseComplete: () => {
      this.color = "white";
      this.bgColor = "transparent"
      done();
    }
  })
}

function navLeave(el, done){
  // gsap.to(el, {
  //   duration: 0,
  //   onComplete: () => {
  //     this.color = "black"
  //   },
  //   onReverseComplete: () => {
  //     this.color = "black"
  //   }
  // })

  this.color = white;
}
</script>

<style scoped>
h1 {
    padding: 30px 0px 0px 160px;
    font-size: 38px;
    font-family: "Raleway", sans-serif;
    font-optical-sizing: auto;
    font-weight: bold;
}
.car-listing {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(380px, 1fr) );
  gap: 40px 36px;
  justify-content: center;
  padding: 20px 160px 50px 160px;
}

.popular-list {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(450px, 1fr) );
  gap: 30px;
  justify-content: center;
  padding: 20px 160px 20px 160px;
  
}
</style>