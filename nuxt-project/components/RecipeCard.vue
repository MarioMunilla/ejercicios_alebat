<template>
  <div class="recipe-card">
    <h3>{{ name }}</h3>
    <p>Duración: {{ totalTime }}</p>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  id:number,
  name: string;
  totalTime: string;
  instructions:string;
  imageUrl:string;
  userId:number
}>();
</script>

<style scoped>
.recipe-card {
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 8px;
  background-color: #f9f9f9;
}

h3 {
  font-size: 1.2em;
  margin-bottom: 10px;
}

p {
  font-size: 1em;
  color: #666;
}
</style>
