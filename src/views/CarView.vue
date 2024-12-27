<script>
import CarHeader from '@/components/CarHeader.vue';
import NavComponent from '@/components/NavComponent.vue';
import CarDescription from '../components/CarDescription.vue';
export default {
    components: {
        CarHeader, NavComponent, CarDescription
    }
}
</script>

<template>
    <NavComponent/>
    <CarHeader/>
    <div class="line"><hr></div>
    <CarDescription/>
</template>

<style>
.line {
    padding: 26px 136px 0px 136px;
}
</style>