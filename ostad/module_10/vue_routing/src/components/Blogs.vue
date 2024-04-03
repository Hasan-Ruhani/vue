<script setup>
    import {ref, reactive, onBeforeMount, watch, computed} from 'vue';
    import {useRoute} from 'vue-router';    // its import for tag dynamic
    const route = useRoute();

    const tag = ref();                                   // this method use only for when you return dynamic value to frontend and run any others api together
    watch(() => route.params.tag, (newValue) => {
        tag.value = newValue;
    });
    //...................2nd method
    // const tag = computed(() => {            // this method use only for return dynamci value to frontend
    //     return route.params.tag;
    // });

    const posts = ref([]);                        // call an API for viewing dummy data
    onBeforeMount(() => {
        fetch('https://dummyjson.com/posts/')
        .then(res => res.json())
        .then(data => {
            posts.value = data.posts;
        });
    });

</script>

<template>

    <div class="my-5">
        {{ tag }}
    </div>

    <article v-for="post in posts" :key="post.id" class="mb-10">
        <h1 class="text-xl mb-2">
            <router-link :to="{name: 'blog', params:{id: post.id}}">{{ post.title }}</router-link>
        </h1>
        <p>
            <img :src="`https://source.unsplash.com/random/300x200?${post.id}`" alt="">
            {{ post.body }}
        </p>
    </article>
    
</template>

<style scoped>

</style>