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
  background-color: hsl(180, 66%, 49%);
  cursor: pointer;
  border-radius: 4px;
  border: 1px solid hsl(180, 66%, 49%);
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  padding: 0.7rem 1.5rem;
  color: white;
  font-weight: 900;
  transition: background-color linear 150ms;

  &:hover {
    background-color: transparent;
    color: black;
  }
}
</style>
