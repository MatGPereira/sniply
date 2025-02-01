<script setup lang="ts">
import { RouterView } from 'vue-router';

import DefaultLayout from './common/presentation/layouts/DefaultLayout.vue';
</script>

<template>
  <component :is="DefaultLayout">
    <RouterView />
  </component>
</template>

<style scoped lang="scss"></style>
