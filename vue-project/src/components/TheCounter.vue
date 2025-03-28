<script setup lang="ts">
import { ref } from 'vue';

const counter = ref<number>(0);
</script>

<template>
  <p>Número: {{ counter }}</p>
  <button @click="counter++" v-if="counter < 10">Incrementar</button>
  <p v-if="counter >= 10">No se permite incrementar a números mayores que 10</p>
  <button @click="counter--" v-if="counter > 0">Decrementar</button>
  <p v-if="counter <= 0">No se permite decrementar a números negativos</p>
</template>

<style scoped>
</style>