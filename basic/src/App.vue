<script setup>

  const img = 'https://www.publicdomainpictures.net/pictures/320000/nahled/background-image.png'
  const title = 'The Image is so beautiful'
  const link = 'https://www.publicdomainpictures.net/en/view-image.php?image=316756&picture=background-image'


                      // ............array section............
  const images = [{
  image: 'https://www.publicdomainpictures.net/pictures/320000/nahled/background-image.png',
  head_line: 'Thsi flower is so beautiful',
  address: 'https://www.publicdomainpictures.net/en/view-image.php?image=316756&picture=background-image'
  }]

  function date(){
    alert (new Date())
  }
  // const message = "Welcome get ready to master Vue.js 3 with Ostad"
  // function getDate(){
  //   return "10th July, 2023"
  // }
</script>



<template>
  <!-- <h1>{{message}}</h1>
  <h3>{{getDate()}}</h3> -->

  <section class="...">
    <h1 class="...">Data Project</h1>
    <section class="...">
      <div class="...">
        <img :title="title" :src="img" alt="">
        <h2 class="..."> {{ title }} </h2>
        <a target="_blank" :href="link">
          Image Source
        </a>
      </div>
    </section>
  </section>

  <!-- ...................array section...................... -->

  <section class="...">
    <h1 class="...">Data Project</h1>
    <section class="...">
      <div class="...">
        <img :title=" images[0].head_line " :src=" images[0].image ">
        <h2 class="..."> {{ images[0].head_line }} </h2>
        <a target="_blank" :href="images[0].address">
          Image Source
        </a>
      </div>
    </section>
  </section>

  <button @click="date">click</button>
</template>

<style scoped>

</style>

