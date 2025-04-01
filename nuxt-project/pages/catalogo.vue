<template>
    <div>
      
      <h1>Página de catálogo</h1>
    
      <button @click="goHome">Go to Home</button>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref } from 'vue';
  import { useRouter } from 'vue-router';
  import RecipeCard from '@/components/RecipeCard.vue';
  
  const router = useRouter();
  
  
  const goHome = () => {
    router.push('/home');
  };
  </script>