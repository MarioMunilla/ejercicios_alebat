<script setup lang="ts">
const route = useRoute();
const params = route.params;

const category = params.category;
const title = params.title;

console.log(route);
</script>

<template>
    <p>Categoria: {{ category }}</p>
    <p>{{ title }}</p>
</template>

<style scoped></style>
