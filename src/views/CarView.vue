<script>
import CarHeader from "@/components/car/CarHeader.vue";
import NavComponent from "@/components/NavComponent.vue";
import CarDescription from "@/components/car/CarDescription.vue";
import Back from "../components/car/Back.vue";
import ContactDealer from "../components/ContactDealer.vue";
import EngineDetails from "../components/EngineDetails.vue";
export default {
  components: {
    Back,
    CarHeader,
    NavComponent,
    CarDescription,
    ContactDealer,
    EngineDetails,
  },
};
</script>

<template>
  <Back />
  <div class="container">
    <CarHeader />
    <div class="line"><hr /></div>
    <div class="listing-body-wrapper">
      <CarDescription />
      <div>
        <EngineDetails />
        <ContactDealer />
      </div>
    </div>
  </div>
</template>

<style scoped>
.container {
  padding: 0px 136px 0px 136px;
}
.listing-body-wrapper {
  display: flex;
  justify-content: space-between;
}
</style>
