<script setup lang="ts">
import FormButton from './components/FormButton.vue';
</script>

<template>
    <FormButton
    :bgColor="'green'"/>

    <FormButton
    :bgColor="'red'"
    :label="'cancel '"/>

    <FormButton
    :bgColor="'black'"
    :label="'click '"/>
</template>




