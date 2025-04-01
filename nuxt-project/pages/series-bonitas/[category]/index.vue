<script setup lang="ts">
const route = useRoute();
const params = route.params;


const category = params.category;
const title='episodio 1 de Spiderman'
</script>

<template>
  <p>Categoría: {{ category }}</p>
    <NuxtLink :to="`/series-bonitas/${category}/${title}`">Episodio 1 de Spiderman</NuxtLink>
</template>

<style scoped>
</style>