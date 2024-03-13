<script setup>
  import ButtonCounter from './components/ButtonCounter.vue';
</script>

<template>

  <ButtonCounter :start="16"/> <br/><br/>     <!-- if you pass a number value so variable should be binding like(:start) -->
  <button-counter/> <br/><br/>           <!-- ButtonCounter & button-counter is same at vue -->

</template>

<style scoped>

</style>
