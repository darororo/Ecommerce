<template>
  <Transition appear @enter="navEnter" >
    <NavComponent class="nav" :textColor="color"/>
  </Transition>
  <LandingComponent class="hero"/>

  <ProductList/>
  <PopularCard />
  <FooterComponent/>
</template>

<script>
import FooterComponent from '../components/FooterComponent.vue';
import LandingComponent from '../components/LandingComponent.vue';
import NavComponent from '../components/NavComponent.vue';
import PopularCard from '../components/PopularCard.vue';
import ProductList from '../components/ProductList.vue';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default {
    setup() {
        gsap.registerPlugin(ScrollTrigger);
    },
    data() {
      return {
        color: 'white',
      }
    },
    components: {
      LandingComponent,
      NavComponent,
      ProductList,
      PopularCard
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
      trigger: ".hero",
      start: "bottom top",
      toggleActions: "play none reverse none",
      markers: true,

    },
    duration: 0,
    onComplete: () => {
      this.color = "black";
      done();
    },
    onReverseComplete: () => {
      this.color = "white"
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