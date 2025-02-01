<script lang="ts">
export interface IButtonProps extends /* @vue-ignore */ ButtonHTMLAttributes {}
</script>

<script setup lang="ts">
import type { ButtonHTMLAttributes } from 'vue';

const { type = 'button' } = defineProps<IButtonProps>();
</script>

<template>
  <button :type="type">
    <slot />
  </button>
</template>

<style scoped lang="scss">
button {
  align-items: center;
  text-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  color: var(--color-text);
  cursor: pointer;
  display: inline-flex;
  justify-content: center;
  background-color: transparent;
  border: none;
}
</style>
