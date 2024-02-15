<template>
  <h1>{{first_name}}</h1>
  <button @click="getFullName">click</button>
</template>

<script>
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