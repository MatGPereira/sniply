<script setup lang="ts"></script>

<template>
  <div>
    <slot />
  </div>
</template>

<style scoped lang="scss">
div {
  max-width: var(--viewport-max-width, 100vw);
  min-height: var(--viewport-min-height, 100vh);
}
</style>
