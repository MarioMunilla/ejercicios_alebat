<script setup lang="ts">
import TheCounter from '@/components/TheCounter.vue';
import TheTitle from '@/components/TheTitle.vue';
</script>

<template>
    <TheTitle>Página Home</TheTitle>
    <TheTitle>Multiply x2</TheTitle>
    <TheCounter></TheCounter>
    <RouterLink to="/catalog">Catálogo</RouterLink>
</template>

<style></style>