<script setup>
    import {authStore} from '../store/store'
    const auth = authStore;
</script>

<template>

<section class="mt-[40px] text-white p-5">
    <ul class="flex flex-col space-y-5">
    <li>
        <!-- <RouterLink to="/">Home</RouterLink> -->
        <RouterLink :to="{name: 'home'}">Home</RouterLink>
    </li>
    <li>
        <!-- <RouterLink to="/about">About</RouterLink> -->
        <RouterLink :to="{name: 'about'}">About</RouterLink>
    </li>
    <li>
        <RouterLink to="/contact">Contact</RouterLink>
    </li>
    <li>
        <RouterLink to="/blogs">Blogs</RouterLink>
    </li>
    <li>
        <RouterLink :to="{name: 'protected'}">Protected</RouterLink>
    </li>
    <li v-if="auth.user?.role == 'admin'">
        <RouterLink :to="{name: 'admin'}">Admin</RouterLink>
    </li>
    <li v-if="auth.user?.role == 'editor' || auth.user?.role == 'admin'">
        <RouterLink :to="{name: 'editor'}">Editor</RouterLink>
    </li>
    <li v-if="!auth.isAuthenticated">
        <RouterLink :to="{name: 'login'}">Login</RouterLink>
    </li>
    <li v-if="auth.isAuthenticated">
        <RouterLink @click="auth.logout()" :to="{name: 'logout'}">Logout</RouterLink>
    </li>
    </ul>
</section>
    
</template>

<style scoped>

</style>