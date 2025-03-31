<script setup lang="ts">
import { ref, computed, watch } from 'vue';

const counter = ref<number>(0);
const activeClass = 'active';
const errorClass = 'error';

const doubledCounter = computed(() => counter.value * 2);

const message = ref<string>('');

watch(counter, (newCounter) => {
  if (newCounter === 0) {
    message.value = 'Estás en el valor mínimo';
  } else if (newCounter === 10) {
    message.value = 'Estás en el valor máximo';
  } else {
    message.value = 'Estás en los parámetros adecuados';
  }
});
</script>

<template>
  <p>Número: {{ counter }}</p>
  <p>Doble del número: {{ doubledCounter }}</p>
  <p>{{ message }}</p>
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