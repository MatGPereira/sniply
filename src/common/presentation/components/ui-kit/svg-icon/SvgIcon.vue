<script setup lang="ts">
import type { ISvgIconProps } from './svg-icon';

const { size = 24 } = defineProps<ISvgIconProps>();
</script>

<template>
  <slot
    :size="size"
    class="svg-icon"
  />
</template>

<style scoped lang="scss">
.svg-icon {
  align-items: center;
  display: inline-flex;
  justify-content: space-between;
  line-height: 0;

  * {
    line-height: 0;
    margin-top: 3px;
  }
}
</style>
