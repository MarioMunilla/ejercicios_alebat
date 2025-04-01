
<script setup lang="ts">
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
</script>

<template>
  <h2 class="title"><slot></slot></h2>

</template>

<style scoped>
.title {
  font-size: 2rem;
  color: var(--primary-color);
  text-align: center;
  margin: 20px 0;
}

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
