<script setup lang="ts"></script>

<template>
  <div class="l-common">
    <slot />
  </div>
</template>

<style scoped lang="scss">
.l-common {
  max-width: var(--max-viewport-width);
  min-height: var(--max-viewport-height);
  overflow-x: hidden;
  padding-inline: calc(var(--space-m) * 2);
}
</style>
