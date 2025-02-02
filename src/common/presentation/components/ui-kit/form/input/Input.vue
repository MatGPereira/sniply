<script setup lang="ts">
import type { IInputProps } from './input';

const { type = 'text' } = defineProps<IInputProps>();
</script>

<template>
  <input :type="type" />
</template>

<style scoped lang="scss">
input {
  width: 100%;
}
</style>
