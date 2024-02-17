<template>
  <h1>{{message}}</h1>
  <h3>{{getDate()}}</h3>

  <button @click="date">click</button>
</template>

<script setup>

  function date(){
    alert (new Date())
  }

  const message = "Welcome get ready to master Vue.js 3 with Ostad"
  function getDate(){
    return "10th July, 2023"
  }
</script>

<style scoped>

</style>

