<template>
  <NavComponent/>
  <LandingComponent/>
</template>

<script>
import LandingComponent from '../components/LandingComponent.vue';
import NavComponent from '../components/NavComponent.vue';

export default {
    components: {
        LandingComponent,
        NavComponent
    }
}

</script>