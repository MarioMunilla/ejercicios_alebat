<script setup lang="ts">
import { useRouter } from 'vue-router';
import ProductCard from '@/components/ProductCard.vue';

const router = useRouter();
console.log(router)

function goToHome() {
  router.push('/');
}
</script>

<template>
  <div>
    <h1>Cátalogo de productos</h1>
    <ProductCard />
    <button @click="goToHome">Go to Home</button>
  </div>
</template>

<style></style>