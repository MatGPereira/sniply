<script lang="ts">
import type { ButtonHTMLAttributes } from 'vue';

interface IButtonProps extends /* @vue-ignore */ ButtonHTMLAttributes {}
</script>

<script setup lang="ts">
const props = defineProps<IButtonProps>();
</script>

<template>
  <button
    :type="props.type"
    v-bind="$attrs"
  >
    <slot />
  </button>
</template>

<style scoped lang="scss">
button {
  background-color: var(--color-brand);
  border-radius: var(--radius-default);
  box-shadow: 0 2px 16px var(--color-shadow);
  color: var(--color-white);
  font-weight: 500;
  padding: calc((var(--space-1) / 2) + 2px);
  transition: background-color var(--transition-duration-exit)
    var(--transition-function-ease-in-expo);
  width: 100%;

  &:hover {
    background-color: var(--color-darken-brand);
  }
}
</style>
