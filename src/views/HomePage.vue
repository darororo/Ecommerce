<template>
  <NavComponent/>
  <LandingComponent/>
  <ProductList/>
  <PopularCard />
</template>

<script>
import LandingComponent from '../components/LandingComponent.vue';
import NavComponent from '../components/NavComponent.vue';
import PopularCard from '../components/PopularCard.vue';
import ProductList from '../components/ProductList.vue';

export default {
    components: {
        LandingComponent,
        NavComponent,
        ProductList,
        PopularCard
    }
}

</script>