<script setup>
    import AppNavBar from '../Component/AppNavBar.vue';

    const props = defineProps({data: Object});
</script>

<template>
    <AppNavBar/>
    <h1>Page1</h1>

    <h3>Name: {{ props.data.name }}</h3>
    <h3>Age: {{ props.data.age }}</h3>
    <h3>City: {{ props.data.city }}</h3>
</template>

<style scoped>

</style>