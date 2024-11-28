<script setup lang="ts">
import FormButton from './components/FormButton.vue';
</script>

<template>
    <div class="container">
        <FormButton
        :bgColor="'green'"/>

        <FormButton
        :bgColor="'red'"
        :label="'cancel '"/>

        <FormButton
        :bgColor="'black'"
        :label="'click '"/>
    </div>

</template>

<style scoped>
.container {
    display: flex;
    justify-content: center;
    
}
</style>



