<template>
  <Transition appear @enter="navEnter" >
  <NavComponent class="nav" :textColor="color" :bgColor="bgColor" :borderColor="borderColor"/>
  </Transition>
  <LandingComponent class="hero"/>
  <ProductList/>
  <PopularCard />
  <CarCard />
  <FooterComponent/>
  <div style="height: 200px;"></div>
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

export default {
    setup() {
        gsap.registerPlugin(ScrollTrigger);
    },
    data() {
      return {
        color: 'white',
        bgColor: 'transparent',
        borderColor: "gray"
      }
    },
    components: {
      LandingComponent,
      NavComponent,
      ProductList,
      PopularCard,
      CarCard,
      FooterComponent
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