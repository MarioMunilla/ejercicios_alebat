<script setup lang="ts">
const route = useRoute();
const params = route.params;
const category = 'aventuras'; 
</script>

<template>
  <p>Estoy en series bonitas (/series-bonitas)</p>
  <NuxtLink :to="`/series-bonitas/${category}`">Ir a {{ category }}</NuxtLink>
</template>

<style scoped>
</style>