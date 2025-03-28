<script setup lang="ts">
import { provide, ref } from 'vue';
import childComponent from './ChildComponent.vue';

const saludo = ref(() => {
  console.log('Hola desde el componente padre!!');
});

provide('saludo', saludo);
</script>

<template>
  <childComponent />
</template>

<style scoped></style>