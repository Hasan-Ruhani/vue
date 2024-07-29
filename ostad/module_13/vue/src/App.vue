<script setup>
  import Sidebar from './components/Sidebar.vue';
</script>

<template>
    <header class="bg-black border-b-light-100 border-b h-20 text-white items-center flex p-5 text-2xl">A Wonderful Blog</header>
    <section class="flex text-white bg-neutral-900">
      <aside class="w-[450px] bg-black ">
        <!-- <Sidebar/> -->
        <router-view name="LeftSideBar"></router-view>
      </aside>
      <main class="w-full min-h-screen p-5">
        <router-view></router-view>
      </main>
    </section>
    <footer></footer>
</template>

<style scoped>

</style>
