<script setup>
    import {ref} from 'vue'
    const props = defineProps([
        'modelValue'
    ]);
    const nameParts = props.modelValue.split(' ');
    const fname = ref(nameParts[0]);
    const lname = ref(nameParts[1]);

    const emit = defineEmits(['update:modelValue']);
    const updateName = () => {
        emit('update:modelValue', `${fname.value} ${lname.value}`);
    }
    
</script>

<template>
    <label>First Name</label><br/>
    <input type="text" v-model="fname" @input="updateName()" style="color: red;"> <br/>

    <label>Last Name</label><br/>
    <input type="text" v-model="lname" @input="updateName()" style="color: red;">
</template>

<style scoped>

</style>