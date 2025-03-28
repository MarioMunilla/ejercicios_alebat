<script setup lang="ts">
 defineProps<{
  titleProp:string
}>();
</script>
<template>
    <h2 class="title">{{ titleProp }}</h2>
  </template>
  
  <style scoped>
  .title {
    font-size: 2rem;
    color: var(--primary-color);
    text-align: center;
    margin: 20px 0;
  }
  </style>