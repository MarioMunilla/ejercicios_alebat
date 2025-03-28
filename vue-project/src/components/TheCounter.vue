<script setup lang="ts">
import { ref } from 'vue';

const counter = ref<number>(0);
const activeClass = 'active';
const errorClass = 'error';

</script>

<template>
  <p>Número: {{ counter }}</p>
  <button @click="counter++" v-if="counter < 10">Incrementar</button>
  <p v-if="counter >= 10" :class="counter >= 10 ? activeClass : errorClass">No se permite incrementar a números mayores que 10</p>
  <button @click="counter--" v-if="counter > 0">Decrementar</button>
  <p v-if="counter <= 0">No se permite decrementar a números negativos</p>
</template>

<style scoped>
.active {
  color: green;
}
</style>