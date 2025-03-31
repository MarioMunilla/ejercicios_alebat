<script setup lang="ts">
import { ref, computed } from 'vue';

const counter = ref<number>(0);
const activeClass = 'active';
const errorClass = 'error';

const doubledCounter = computed(() => counter.value * 2);

</script>

<template>
  <p>Número: {{ counter }}</p>
  <p>Doble del número: {{ doubledCounter }}</p>
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