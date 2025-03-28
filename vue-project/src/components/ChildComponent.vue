<script setup lang="ts">
import { inject } from 'vue';

const saludo = inject<() => void>('saludo');

defineExpose({
  saludo
});
</script>

<template>
  <button @click="saludo">Saluda</button>
</template>

<style scoped>
</style>
