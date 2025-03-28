<script setup lang="ts">
import products from "../../data/mock";

</script>

<template>
    <li v-for="(product, index) in products" :key="index" class="product-card">
       
        <h2>{{ product.title }}</h2>
        <p>{{ product.description }}</p>
        <p>{{ product.price }}</p>
        <img :src="product.image" alt="Product Image" />
        <button @click="product.button">Click Me</button>

    </li>
</template>

<style>
.product-card {
    list-style: none;
    border: 1px solid #ccc;
    padding: 16px;
    margin: 16px;
    text-align: center;
}
</style>
