<script>
import defineNuxtRouteMiddleware from '@/middleware/redirectIndex'
definePageMeta({
    middleware:[defineNuxtRouteMiddleware]
})

console.log('He entrado!!!')
</script>

<template>

</template>

<style scoped></style>
