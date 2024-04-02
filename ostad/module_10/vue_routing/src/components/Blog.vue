<script setup>
    import {ref, watch, computed} from 'vue';
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

</script>

<template>

    <div class="my-5">
        {{ tag }}
    </div>

    <article class="mb-10">
        <h1 class="text-xl mb-2">Hello World Post</h1>
        <p>
        <img src="https://source.unsplash.com/random/300x200?1" alt="">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore, esse id. Dolorum delectus quas eos dolores amet cupiditate sed fugiat, facere quisquam deserunt suscipit culpa animi neque, modi inventore officiis omnis nam.
        </p>
    </article>

    <article class="mb-10">
        <h1 class="text-xl mb-2">Hello World Post</h1>
        <p>
        <img src="https://source.unsplash.com/random/300x200?2" alt="">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore, esse id. Dolorum delectus quas eos dolores amet cupiditate sed fugiat, facere quisquam deserunt suscipit culpa animi neque, modi inventore officiis omnis nam.
        </p>
    </article>
    
</template>

<style scoped>

</style>