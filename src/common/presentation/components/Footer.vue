<script setup lang="ts">
import Icon from './Icon.vue';
import { faBars } from '@fortawesome/free-solid-svg-icons';
</script>

<template>
  <footer>
    <button type="button">
      <Icon
        :icon="faBars"
        size="3x"
      />
    </button>
  </footer>
</template>

<style scoped lang="scss">
footer {
  align-items: center;
  border-radius: var(--radius-default) var(--radius-default) 0 0;
  bottom: 0;
  box-shadow: 0 2px 16px #1a1a1a40;
  display: inline-flex;
  inset-inline: 0;
  justify-content: center;
  padding: var(--space-4);
  position: fixed;
  z-index: var(--z-index-above);
}
</style>
