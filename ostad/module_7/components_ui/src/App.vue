<script setup>
  import ButtonCounter from './components/ButtonCounter.vue';
  import Location from './components/Location.vue';

  const data = [
    {
      image:"https://static-01.daraz.com.bd/p/b60462ad3204dfd6bda71897787e40b1.jpg_750x400.jpg_.webp",
      location:"Korea",
      title:"This is a Korean Watch",
      reating:5,
      price:512,
      add_to_cart:"www.facebook.com"

    },

    {
      image:"https://static-01.daraz.com.bd/p/b60462ad3204dfd6bda71897787e40b1.jpg_750x400.jpg_.webp",
      location:"Korea",
      title:"This is a Korean Watch",
      reating:4,
      price:512,
      add_to_cart:"www.facebook.com"

    }
  ]
</script>

<template>

<Location v-for="item in data" :key="item" :title="item.title" :image="item.image" :location="item.location" :price="item.price" :add_to_cart="item.add_to_cart" :reating="item.reating"></Location>

<br/>

  <ButtonCounter :start="16"/> <br/><br/>     <!-- if you pass a number value so variable should be binding like(:start) -->
  <button-counter/> <br/><br/>           <!-- ButtonCounter & button-counter is same at vue -->

</template>

<style scoped>

</style>
