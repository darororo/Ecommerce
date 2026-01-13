<template>
  <Transition name="sidebar">
    <div v-if="isSidebarVisible" class="sidebar-container">
      <SideBarComponent @close-sidebar="toggleSidebar" />
    </div>
  </Transition>
  <NavComponent
    v-show="$route.name !== 'brand'"
    class="nav"
    :textColor="scrolled ? 'black' : 'white'"
    :borderColor="scrolled ? 'rgba(0,0,0,0.2)' : 'rgba(255,255,255,0.15)'"
    :bgColor="scrolled ? 'rgba(255,255,255,0.1)' : 'rgba(255,255,255,0.1)'"
    :scrolled="scrolled"
    @toggle-sidebar="toggleSidebar"
    @search-cars="(data) => (query = data)"
  />
  <LandingComponent v-if="$route.name !== 'brand'" class="hero" ref="hero" />
  <BrandLanding v-else class="brand-landing" />
  <BrandList />
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
  <div class="car-listing-container">
    <div class="car-listing">
      <template v-for="car in filteredCars">
        <CarCard :car="car" />
      </template>
    </div>
    <div class="filter-wrapper">
      <FilterComponent
        @filter-brand="
          (data) => {
            filterBrand = data;
          }
        "
        @filter-price="
          (data) => {
            filterPrice = data;
          }
        "
        @filter-discount="
          (data) => {
            filterDiscount = data;
          }
        "
      />
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
import SideBarComponent from "../components/users/SideBarComponent.vue";
import FilterComponent from "../components/filter/FilterComponent.vue";
import BrandLanding from "../components/landingPage/BrandLanding.vue";
import { mapState } from "pinia";
import { useCarStore } from "../stores/cars";
import BrandList from "../components/BrandList.vue";

export default {
  data() {
    return {
      query: "",
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
      scrolled: false,

      // Filter objects
      filterPrice: 0,
      filterBrand: "",
      filterDiscount: "",
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
    toggleSidebar() {
      this.isSidebarVisible = !this.isSidebarVisible;
    },
    handleScroll() {
      const hero = this.$refs.hero?.$el;
      if (hero) {
        this.scrolled = window.scrollY > hero.offsetHeight;
      }
    },
  },
  mounted() {
    this.handleScroll();
    window.addEventListener("scroll", this.handleScroll);
  },
  beforeUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  computed: {
    ...mapState(useCarStore, {
      cars: "cars",
      searchCars: "searchCars",
      filteredCars(store) {
        let filtered = store.filter(
          this.filterPrice,
          this.filterBrand,
          this.filterDiscount
        );
        if (this.query.length > 0) {
          filtered = store.searchCars(this.query, filtered);
        }
        console.log(filtered);
        return filtered;
      },
    }),
  },
  watch: {
    filterBrand(cur) {
      console.log(cur);
    },
  },
};
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
  gap: 40px;
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
</style>
