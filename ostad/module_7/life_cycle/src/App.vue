<script setup>
  import {ref, onBeforeMount, onMounted, onUnmounted, onUpdated} from 'vue';

  const items = ref([
    'https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg?size=626&ext=jpg&ga=GA1.1.1700460183.1710028800&semt=ais',
    'https://img.freepik.com/premium-photo/glacier-mountain-landscape-with-flowers-lake-beautiful-sunset-with-full-moon_713888-1322.jpg',
    'https://png.pngtree.com/thumb_back/fh260/background/20230527/pngtree-8-best-free-mountain-background-images-4k-wallpapers-image_2670051.jpg',
    'https://img.freepik.com/premium-photo/glacier-mountain-landscape-with-flowers-lake-beautiful-sunset-with-full-moon_713888-1322.jpg',
    'https://img.freepik.com/premium-photo/starry-night-lake_68067-618.jpg'
  ]);

  let carousel = null;

  onMounted(() => {
    carousel = new Flickity('#carousel')
  });



  const status = ref([]);
  const apiResponse = ref(null);

  onMounted(() => {
    status.value.push('on mounted');
  });

  //..........................................if you call onBeforeMount it work before all of this function

  onBeforeMount(() => {
    status.value.push('before mount');

    fetch('https://jsonplaceholder.typicode.com/todos/2')    // if you call an api in onBeforeMount then it work when you want
      .then(response => response.json())
      .then(json => {
        apiResponse.value = json;
      });
  });

  


  

</script>



<template>
  <section>
    <div class="container">
      <div class="row">

        <div class="mx-auto items" id="carousel">
          <div :style="`background-image:url(${item})`" class="item" v-for="item, index in items" :key="item">
            {{ index + 1 }}
          </div>
        </div>

        <p>{{ status }}</p>
        <p>{{ apiResponse }}</p>
      </div>
    </div>
  </section>
</template>

<style scoped>

</style>
