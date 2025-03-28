<script setup lang="ts">
import TheCounter from './components/TheCounter.vue';
import TheTitle from './components/TheTitle.vue';
import ProductCard from './components/ProductCard.vue';
import ParentComponent from './components/ParentComponent.vue';
import ChildComponent from './components/ChildComponent.vue';

</script>

<template>
  <div id="app">
    <TheTitle>Mi título estático</TheTitle>
    <TheCounter/>
    <ProductCard/>  
    <ParentComponent/>
  </div>
</template>



<style>

</style>
