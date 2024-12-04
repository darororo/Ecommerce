<template>
  <NavComponent/>
  <LandingComponent/>
  <BrandList/>
  <PopularCard/>
</template>

<script>
import LandingComponent from '../components/LandingComponent.vue';
import NavComponent from '../components/NavComponent.vue';
import PopularCard from '../components/PopularCard.vue';
import BrandList from '../components/BrandList.vue';

export default {
    components: {
        LandingComponent,
        NavComponent,
        BrandList,
        PopularCard,
    }
}

</script>