<script setup lang="ts">
import fullLogo from '@/assets/images/logo-full.svg';
import shortLogo from '@/assets/images/logo-short.svg';
import { useResizeViewport } from '../composables/use-resize-viewport';

const { viewportWidth } = useResizeViewport();
</script>

<template>
  <img
    :src="viewportWidth > 600 ? fullLogo : shortLogo"
    alt="Sniply"
    title="Home"
    draggable="false"
  />
</template>

<style scoped lang="scss"></style>
