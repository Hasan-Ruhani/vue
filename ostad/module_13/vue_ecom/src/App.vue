<script setup>
  import Sidebar from './components/Sidebar.vue';
  import { authStore } from './store/store';
  const auth = authStore;

</script>

<template>

   <header class="bg-black border-b-light-100 border-b h-20 text-white items-center flex p-5 text-2xl">A Wonderful Blog <span v-if="auth.name">&nbsp;({{ auth.user?.name }})</span></header>    <!-- "auth.user?.name" here 'user?' mean if any have inside the user to return this data, otherwise return null -->
        <section class="flex">
          <aside class="w-[450px] bg-black ">
            <Sidebar/>
          </aside>
          <main class="w-full min-h-screen p-5">
            <!-- <RouterView/>  -->            <!-- same <RouterView/> & <router-iew></router-iew> almost same -->
            <router-view></router-view>
          </main>
          <router-view name="right"></router-view>     <!-- for load only right sidebar -->
        </section>
        
</template>

<style scoped>

</style>
