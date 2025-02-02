<script setup lang="ts">
import { ref } from 'vue';
import type { ISpinnerProps, TSpinnerClasses } from './spinner';

const { size = 'sm' } = defineProps<ISpinnerProps>();
const spinnerClass = ref<readonly TSpinnerClasses[]>([
  `c-spinner--${size}`,
] as const);
</script>

<template>
  <span :class="spinnerClass" />
</template>

<style scoped lang="scss">
@use '@/assets/styles/components/spinner' as *;

span {
  animation: rotation 1s linear infinite;
  border-radius: 50%;
  border: 2px solid var(--color-white);
  border-bottom-color: transparent;
  box-sizing: border-box;
  display: inline-block;
  line-height: 0;
}

@keyframes rotation {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
