<script lang="ts">
export interface IButtonProps extends /* @vue-ignore */ ButtonHTMLAttributes {}
</script>

<script setup lang="ts">
import type { ButtonHTMLAttributes } from 'vue';

defineProps<IButtonProps>();
</script>

<template>
  <button
    :type="type"
    class="c-button"
  >
    <slot />
  </button>
</template>

<style scoped lang="scss">
.c-button {
  align-items: center;
  background-color: transparent;
  border: none;
  cursor: pointer;
  display: inline-flex;
  justify-content: center;
}
</style>
