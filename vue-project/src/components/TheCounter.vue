
<script setup lang="ts">
import { useCounterStore } from '@/stores/counterStore';
import { ref, watch, toRefs } from 'vue';

const activeClass = 'active';
const errorClass = 'error';

const counterStore = useCounterStore();
const { count, doubleCount, increment, decrement } = toRefs(counterStore);

const message = ref<string>('');

watch(count, (newCounter: number) => {
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
  <p>Número: {{ count }}</p>
  <p>Doble del número: {{ doubleCount }}</p>
  <p>{{ message }}</p>
  <button @click="increment" v-if="count < 10">Incrementar</button>
  <p v-if="count >= 10" :class="count >= 10 ? activeClass : errorClass">No se permite incrementar a números mayores que 10</p>
  <button @click="decrement" v-if="count > 0">Decrementar</button>
  <p v-if="count <= 0">No se permite decrementar a números negativos</p>
</template>

<style scoped>
.active {
  color: green;
}
</style>
