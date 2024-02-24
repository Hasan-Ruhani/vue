<script setup>

  const items = [
    "Karim",
    "Rahim",
    "Barkat",
    "Jabbar",
    "Salam"
  ]

  const tasks = [
    { id: 1, title: "Complete project proposal", status: "In Progress" },
    { id: 2, title: "Update website content", status: "Complete" },
    { id: 3, title: "Fix bug in user authentication", status: "In Progress" },
    { id: 4, title: "Prepare presentation slides", status: "Complete" },
    { id: 5, title: "Test new feature implementation", status: "Complete" }
  ];

  function getCompleteTask(){
    return tasks.filter(task => "Complete" == task.status)
  }
</script>

<template>
  <section class="mx-auto container flex items-center text-center flex-col space-y-2">

    <div class="p-5 border border-green-600" 
      :class="[task.id === 4 ? 'w-60' : 'w-40']" 
      v-for="(task, id) in getCompleteTask()" 
      :key="task.id">
      {{ task.id }}. {{ task.title }}
    </div>
    
    <!-- <div class="p-5 border border-green-600 w-40" :key="index"
      v-for="(item, index) in items">{{ index + 1 }}. {{ item }}</div>       -->    <!-- here index is number of column -->
      <!-- <div class="p-5 border border-green-600 w-40" v-for="(item) in items">{{ item }}</div>  -->

    <!-- <div class="p-5 border-green-600 w-40"> there are almost same!!</div>
    <div class="p-5 border border-green-600 w-40" v-for="n in 5">{{ n }}</div> -->
  </section>
</template>

<style scoped>

</style>
