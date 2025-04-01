<script setup lang="ts">
import TheCounter from '@/components/TheCounter.vue';
import TheTitle from '@/components/TheTitle.vue';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';

</script>

<template>
    <TheTitle>
        Página Home
        <FontAwesomeIcon :icon="faFacebook" class="icon" />
        <FontAwesomeIcon :icon="faTwitter" class="icon" />
        <FontAwesomeIcon :icon="faInstagram" class="icon" />
    </TheTitle>

    <TheTitle>Multiply x2</TheTitle>
    <TheCounter></TheCounter>
    <RouterLink to="/catalog">Catálogo</RouterLink>


</template>

<style scoped>
.footer {
    display: flex;
    justify-content: center;
    margin-top: 10px;
}

.icon {
    margin: 0 10px;
    font-size: 1.5rem;
    color: var(--secondary-color);
}
</style>