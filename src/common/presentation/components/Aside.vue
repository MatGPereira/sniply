<script setup lang="ts">
import Icon from './Icon.vue';
import { faBars } from '@fortawesome/free-solid-svg-icons';
</script>

<template>
  <aside>
    <button type="button">
      <Icon
        class="c-icon"
        :icon="faBars"
        size="3x"
      />
    </button>
  </aside>
</template>

<style scoped lang="scss">
aside {
  align-items: center;
  background-color: var(--color-lighten-light-dark);
  border-radius: var(--radius-default) var(--radius-default) 0 0;
  bottom: 0;
  box-shadow: 0 2px 16px var(--color-shadow);
  display: inline-flex;
  inset-inline: 0;
  justify-content: center;
  padding: var(--space-1);
  position: fixed;
  z-index: var(--z-index-above);

  .c-icon {
    color: var(--color-dark-light);
  }
}
</style>
