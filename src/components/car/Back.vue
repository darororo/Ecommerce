<template>
  <div class="back-button">
    <RouterLink to="/" class="router-link">
      <ChevronBack />
      <button @click="goBack">Back</button>
    </RouterLink>
  </div>
</template>

<script>
import ChevronBack from "../icons/productPage/chevronBack.vue";

export default {
  components: {
    ChevronBack,
  },
};
</script>

<style scoped>
.back-button {
  display: flex;
  align-items: center;
  background-color: rgba(217, 217, 217, 0.7);
  box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
  padding: 0px 0px 0px 20px;
  width: auto;
}
.back-button button {
  font-family: Arial, Helvetica, sans-serif;
  height: 60px;
  text-align: left;
  font-size: 20px;
  font-weight: 500;
  border: 10px;
  background-color: rgba(217, 217, 217, 0);
  cursor: pointer;
}
.router-link {
  display: flex;
  align-items: center;
  text-decoration: none;
}
</style>
