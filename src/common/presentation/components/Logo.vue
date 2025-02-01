<script setup lang="ts">
import { computed } from 'vue';
import { useResizeViewport } from '../composables/use-resize-viewport';
import logoFull from '@/assets/images/logo-full.svg';
import logoShort from '@/assets/images/logo-short.svg';

const { viewportWidth } = useResizeViewport();

const logoUrlToApply = computed(() =>
  viewportWidth.value > 600 ? logoFull : logoShort
);
</script>

<template>
  <img
    :src="logoUrlToApply"
    alt="Sniply"
    draggable="false"
    class="c-logo"
  />
</template>

<style scoped lang="scss">
.c-logo {
  max-width: 200px;
  min-width: 65px;
}
</style>
