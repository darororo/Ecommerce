<script>
import CarHeader from "@/components/car/CarHeader.vue";
import NavComponent from "@/components/navigation/NavComponent.vue";
import CarDescription from "@/components/car/CarDescription.vue";
import Back from "../components/car/Back.vue";
import ContactDealer from "../components/ContactDealer.vue";
import EngineDetails from "../components/EngineDetails.vue";
import CommentSection from "@/components/comment/CommentSection.vue";
import EngineDetailsUnboxed from "../components/EngineDetailsUnboxed.vue";
import FooterComponent from "../components/FooterComponent.vue";
import Breadcrumb from "../components/car/Breadcrumb.vue";
import { mapState } from "pinia";
import { useCarStore } from "../stores/cars";
import { useUtilStore } from "../stores/utils";
import SuggestedCar from "../components/SuggestedCar.vue";

export default {
  setup() {
    const carStore = useCarStore();

    return {
      carStore,
    };
  },
  components: {
    Back,
    CarHeader,
    NavComponent,
    CarDescription,
    ContactDealer,
    EngineDetailsUnboxed,
    CommentSection,
    FooterComponent,
    Breadcrumb,
    SuggestedCar,
  },
  data() {
    return {};
  },
  computed: {
    ...mapState(useCarStore, {
      cars: "cars",
    }),

    car() {
      let c = this.cars.find((car) => car.id === this.$route.params.carId);
      return c;
    },

    ...mapState(useUtilStore, {
      priceUsd(store) {
        return store.formatUsd(this.car.price);
      },
    }),

    showGallery() {
      let curPath = this.$route.path;
      return curPath.split("/").reverse()[0] === "gallery";
    },
    carByBrand() {
      return this.cars.filter((c) => c.brand === this.car.brand);
    },
  },
};
</script>

<template>
  <NavComponent
    v-show="!showGallery"
    :bgColor="'white'"
    :textColor="'black'"
    :borderColor="'#C0C0C0'"
  />
  <div class="container" v-show="car.brand">
    <div v-if="!showGallery" class="main">
      <Breadcrumb :brand="car.brand" :model="car.model" />
      <CarHeader />
      <div class="line">
        <hr />
      </div>
      <div class="listing-body-wrapper">
        <div class="desc-container">
          <CarDescription :description="car.innerDescription" />
          <div class="line-grey">
            <hr />
          </div>
          <div class="engine-details">
            <EngineDetailsUnboxed />
          </div>
          <div class="line-grey">
            <hr />
          </div>
          <div class="comment-section">
            <CommentSection />
          </div>
        </div>
        <div class="contact-dealer">
          <ContactDealer />
        </div>
      </div>
      <div class="line">
        <hr />
        <h1>You Might Also Like</h1>
      </div>
    </div>
    <div v-else>
      <RouterView />
    </div>
  </div>
  <div class="suggested-car-container">
    <template v-for="car in carByBrand.slice(0, 3)">
      <SuggestedCar :car="car" />
    </template>
  </div>
  <FooterComponent />
</template>

<style scoped>
.line {
  padding: 10px 136px 10px 136px;
}

.line-grey {
  border-color: #ffffff;
  margin: 1px 0;
  padding: 0px 30px 0 0px;
}

.listing-body-wrapper {
  display: flex;
  justify-content: space-between;
  position: relative;
  padding: 0px 136px 0 136px;
}

.desc-container {
  display: flex;
  flex-direction: column;
}

.comment-section {
  margin-top: 14px;
  width: auto;
  padding: 0px 30px 0px 0px;
}

.contact-dealer {
  position: sticky;
  top: 100px;
  height: 100%;
}

.engine-details {
  margin-bottom: 18px;
}

.suggested-car-container {
  display: grid;
  justify-content: center;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  padding: 0px 126px 0 126px;
}
</style>
