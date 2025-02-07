<script lang="ts">
import type { FontAwesomeIconProps } from '@fortawesome/vue-fontawesome';

interface IIconProps extends FontAwesomeIconProps {}
</script>

<script setup lang="ts">
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

defineProps<IIconProps>();
</script>

<template>
  <FontAwesomeIcon
    :icon="icon"
    :size="size"
  />
</template>

<style scoped lang="scss"></style>
