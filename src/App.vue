<script setup lang="ts">
import { RouterView } from 'vue-router';

import DefaultLayout from './common/presentation/layouts/DefaultLayout.vue';
import { useSetScrollbarWidthFromTag } from './common/presentation/composables/use-get-scrollbar-width';

useSetScrollbarWidthFromTag('main');
</script>

<template>
  <component :is="DefaultLayout">
    <RouterView />
  </component>
</template>
