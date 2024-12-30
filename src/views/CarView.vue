<script>
import CarHeader from "@/components/car/CarHeader.vue";
import NavComponent from "@/components/NavComponent.vue";
import CarDescription from "@/components/car/CarDescription.vue";
import Back from "../components/car/Back.vue";
export default {
  components: {
    Back,
    CarHeader,
    NavComponent,
    CarDescription,
  },
};
</script>

<template>
  <Back />
  <div class="container">
    <CarHeader />
    <div class="line"><hr /></div>
    <CarDescription />
  </div>
</template>

<style scoped>
.container {
  padding: 0px 136px 0px 136px;
}
</style>
