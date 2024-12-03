<template>
  <NavComponent/>
  <LandingComponent/>
  <ProductList/>
</template>

<script>
import LandingComponent from '../components/LandingComponent.vue';
import NavComponent from '../components/NavComponent.vue';
import ProductList from '../components/ProductList.vue';

export default {
    components: {
        LandingComponent,
        NavComponent,
        ProductList
    }
}

</script>