<script lang="ts">
export interface IIconProps {
  size?: number;
}
</script>

<script setup lang="ts">
const { size = 24 } = defineProps<IIconProps>();
</script>

<template>
  <span
    :style="{ width: `${size}px`, height: `${size}px` }"
    class="c-icon"
  >
    <slot :size="size" />
  </span>
</template>

<style scoped lang="scss">
.c-icon {
  svg {
    fill: light-dark(var(--color-black), var(--color-white));
  }
}
</style>
