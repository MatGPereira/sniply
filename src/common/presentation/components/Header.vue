<script setup lang="ts">
import { RouterLink } from 'vue-router';
import Logo from './Logo.vue';
</script>

<template>
  <header>
    <RouterLink to="/">
      <Logo />
    </RouterLink>
  </header>
</template>

<style scoped lang="scss">
header {
  background-color: var(--color-lighten-light-dark);
  border-radius: 0 0 var(--radius-default) var(--radius-default);
  box-shadow: 0 2px 16px #1a1a1a40;
  inset-inline: 0;
  padding: var(--space-1);
  position: fixed;
  top: 0;
}
</style>
