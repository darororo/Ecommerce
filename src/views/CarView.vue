<script>
import CarHeader from "@/components/car/CarHeader.vue";
import NavComponent from "@/components/NavComponent.vue";
import CarDescription from "@/components/car/CarDescription.vue";
export default {
  components: {
    CarHeader,
    NavComponent,
    CarDescription,
  },
};
</script>

<template>
  <div class="container">
    <CarHeader />
    <div class="line"><hr /></div>
    <CarDescription /> 
  </div>
</template>

<style scoped>
.line {
  
}

.container {
  padding: 26px 136px 0px 136px;
}
</style>
