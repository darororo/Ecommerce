<template>
  <Transition name="sidebar">
    <div v-if="isSidebarVisible" class="sidebar-container">
      <SideBarComponent @close-sidebar="toggleSidebar" />
    </div>
  </Transition>
  <Transition appear @enter="navEnter">
    <NavComponent v-show="$route.name !== 'brand'" class="nav" :textColor="color" :bgColor="bgColor"
      :borderColor="borderColor" @toggle-sidebar="toggleSidebar" @search-cars="(data) => query = data" />
  </Transition>
  <LandingComponent v-if="$route.name !== 'brand'" class="hero" />
  <BrandLanding v-else class="brand-landing" />
  <BrandList />
  <h1>Popular Cars</h1>
  <div class="popular-list">
    <template v-for="(car, index) in popularCars" :key="index">
      <PopularCard :name="car.name" :themeColor="car.color" :price="car.price" :img="car.img" :imgHeight="car.height" />
    </template>
  </div>
  <h1>Features</h1>
  <div class="car-listing-container">
    <div class="car-listing">
      <template v-for="car in filteredCars">
        <CarCard :car="car" />
      </template>
    </div>
    <div class="filter-wrapper">
      <FilterComponent @filter-brand="(data) => { filterBrand = data }" @filter-price="(data) => { filterPrice = data }"
        @filter-discount="(data) => { filterDiscount = data }" />
    </div>
  </div>
  <FooterComponent />
</template>

<script>
import CarCard from "../components/car/CarCard.vue";
import FooterComponent from "../components/FooterComponent.vue";
import LandingComponent from "../components/LandingComponent.vue";
import NavComponent from "../components/navigation/NavComponent.vue";
import PopularCard from "../components/car/PopularCard.vue";
import { gsap, Power2 } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SideBarComponent from "../components/users/SideBarComponent.vue";
import FilterComponent from "../components/filter/FilterComponent.vue";
import BrandLanding from "../components/landingPage/BrandLanding.vue";
import { mapState } from "pinia";
import { useCarStore } from "../stores/cars";
import BrandList from "../components/BrandList.vue";

export default {
  setup() {
    gsap.registerPlugin(ScrollTrigger);
  },
  data() {
    return {
      query: '',
      color: "white",
      bgColor: "transparent",
      borderColor: "#C0C0C0",
      popularCars: [
        {
          name: "Porsche 911 GT2 RS",
          price: "293,200",
          color: "gray",
          img: "/Ecommerce/src/assets/images/popular/car1.png",
          height: "160px",
        },
        {
          name: "Ferrari SF90",
          price: "293,200",
          color: "red",
          img: "/Ecommerce/src/assets/images/popular/car2.png",
          height: "160px",
        },
        {
          name: "Lamborghini Aventador S Roadster",
          price: "293,200",
          color: "#0066ff",
          img: "/Ecommerce/src/assets/images/popular/car3.png",
          height: "125px",
        },
      ],
      isSidebarVisible: false,

      // Filter objects
      filterPrice: 0,
      filterBrand: '',
      filterDiscount: '',
    };
  },

  components: {
    LandingComponent,
    NavComponent,
    PopularCard,
    CarCard,
    FooterComponent,
    SideBarComponent,
    FilterComponent,
    BrandLanding,
    BrandList,
  },
  methods: {
    navInit,
    navEnter,
    navLeave,
    toggleSidebar() {
      this.isSidebarVisible = !this.isSidebarVisible;
    },
  },
  computed: {
    ...mapState(useCarStore, {
      cars: "cars",
      searchCars: 'searchCars',
      filteredCars(store) {
        let filtered = store.filter(this.filterPrice, this.filterBrand, this.filterDiscount);
        if (this.query.length > 0) {
          filtered = store.searchCars(this.query, filtered)
        }
        console.log(filtered)
        return filtered
      },
    })
  },
  watch: {
    filterBrand(cur) {
      console.log(cur)
    }
  }
};

function navInit(el, done) {
  this.color = "white";
  done();
}

function navEnter(el, done) {
  console.log("enter");
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
      this.bgColor = "transparent";
      done();
    },
  });
}

function navLeave(el, done) {
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
  padding: 10px 0px 10px 160px;
  font-size: 38px;
  font-family: "Raleway", sans-serif;
  font-optical-sizing: auto;
  font-weight: bold;
}

.car-listing {
  flex: 3;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(380px, 30%));
  gap: 30px 26px;
  justify-content: center;
  padding: 20px 0px 30px 100px;
}

.popular-list {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(450px, 1fr));
  justify-content: center;
  padding: 20px 160px 20px 160px;
}

.car-listing-container {
  display: flex;
  position: relative;
  align-items: flex-start;
  margin-bottom: 20px;
}

.filter-wrapper {
  position: sticky;
  top: 100px;
}

.brand-landing {
  /* padding-top: 1000px; */
}
</style>
