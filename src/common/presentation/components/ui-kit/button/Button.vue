<script setup lang="ts">
import { ref } from 'vue';

import type { IButtonProps, TButtonClasses } from './button';
import Spinner from '../spinner/Spinner.vue';

const {
  size = 'md',
  variant = 'primary',
  loading = false,
} = defineProps<IButtonProps>();

const buttonClass = ref<TButtonClasses[]>([
  `c-button--${size}`,
  `c-button--${variant}`,
]);
</script>

<template>
  <button
    class="c-button"
    :class="buttonClass"
    :disabled="loading"
    :aria-disabled="loading"
  >
    <template v-if="loading">
      <Spinner />
      <span class="backdrop" />
    </template>
    <span>
      <slot />
    </span>
  </button>
</template>

<style scoped lang="scss">
@use '@/assets/styles/components/button' as *;

button {
  align-items: center;
  border-radius: 4px;
  border: 1px solid var(--color-brand);
  color: var(--color-white);
  cursor: pointer;
  display: inline-flex;
  font-weight: 700;
  justify-content: center;
  min-width: min-content;
  overflow: hidden;
  position: relative;
  column-gap: calc(var(--space-m) / 2);

  & .backdrop {
    background-color: var(--color-white-transparent);
    inset: 0;
    position: absolute;
    z-index: 10;
  }

  & span:last-child {
    margin-top: 3px;
  }
}
</style>
