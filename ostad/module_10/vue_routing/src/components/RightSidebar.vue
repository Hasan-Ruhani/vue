<script setup>

</script>

<template>
    
    <aside class="w-[450px] bg-black ">
        <section class="mt-[40px] text-white p-5">
            <h2 class="text-white mb-5 text-orange-400">Tags</h2>
            <ul class="flex flex-col space-y-5">
            <li>
                <router-link :to="{name: 'category', params:{tag: 'Travel'}}">Travel</router-link>
            </li>
            <li>
                <router-link :to="{name: 'category', params:{tag: 'Food'}}">Food</router-link>
            </li>
            <li>
                <router-link :to="{name: 'category', params:{tag: 'Lifestyle'}}">Lifestyle</router-link>
            </li>
            <li>
                <router-link :to="{name: 'category', params:{tag: 'Music'}}">Music</router-link>
            </li>
            </ul>
        </section>
    </aside>
    
</template>

<style scoped>

</style>