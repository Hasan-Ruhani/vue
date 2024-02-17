<template>
  <h1>{{first_name}}</h1>

  <h3>{{date}}</h3>
  
  <button @click="getFullName">click</button>
</template>

<script>

  const date = new Date()

  export default{
    data(){
      return{
        first_name: "Bill",
        last_name: "Gates",
        age: 65,
        getFullName: ()=>{
          alert("Bill Gates");
        }
      }
    }
  }
</script>

<style scoped>

</style>

