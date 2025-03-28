<script setup lang="ts">
import { ref } from 'vue';

const counter=ref<number>(0)


</script>
<template>

    <p>Número: {{ counter }}</p>
    <button @click="counter++">Incrementar</button>
    <button @click="counter--" v-if="counter>0">Decrementar</button>
    <p v-else>No se permite decrementar a números negativos</p>
  
</template>
<style scoped>

</style>