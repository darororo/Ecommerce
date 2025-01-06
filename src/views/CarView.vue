<script>
import CarHeader from "@/components/car/CarHeader.vue";
import NavComponent from "@/components/NavComponent.vue";
import CarDescription from "@/components/car/CarDescription.vue";
import Back from "../components/car/Back.vue";
import ContactDealer from "../components/ContactDealer.vue";
import EngineDetails from "../components/EngineDetails.vue";
import CommentSection from "@/components/comment/CommentSection.vue";
import EngineDetailsUnboxed from "../components/EngineDetailsUnboxed.vue";
import FooterComponent from "../components/FooterComponent.vue";
import NavMenu from "../components/car/Breadcrumb.vue";
import { mapState } from "pinia";
import { useCarStore } from "../stores/cars";
import { useUtilStore } from "../stores/utils";

export default {
  components: {
    Back,
    CarHeader,
    NavComponent,
    CarDescription,
    ContactDealer,
    EngineDetails,
    EngineDetailsUnboxed,
    CommentSection,
    FooterComponent,
    NavMenu,
  },
  data() {
    return {
      // showGallery: false,
    };
  },
  computed: {
    ...mapState(useCarStore, {
      cars: "cars",
      car(store) {
        return store.getCar(parseInt(this.$route.params.carId))
      }
    }),

    ...mapState(useUtilStore, {
      priceUsd(store) {
        return store.formatUsd(this.car.price);
      }
    }),

    showGallery() {
      let curPath = this.$route.path;
      return curPath.split("/").reverse()[0] === "gallery";
    },

  },

};
</script>

<template>
  <NavComponent v-show="!showGallery" :bgColor="'white'" :textColor="'black'" :borderColor="'none'" />
  <div class="container">
    <div v-if="!showGallery" class="main">
      <NavMenu />
      <CarHeader :model="car.model" :price="priceUsd" :location="car.location" />
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
    </div>
    <div v-else>
      <RouterView />
    </div>
    <div class="line">
      <hr />
    </div>
  </div>
  <FooterComponent />
</template>

<style scoped>
.line {
  padding: 0px 136px 0 136px;
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
</style>
