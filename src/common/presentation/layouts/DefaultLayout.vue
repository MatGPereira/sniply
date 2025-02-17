<script setup lang="ts">
import Base from './Base.vue';
import Aside from '../components/Aside.vue';
import Header from '../components/Header.vue';
</script>

<template>
  <Base class="l-layout">
    <Header />
    <main>
      <slot />
    </main>
    <Aside />
  </Base>
</template>

<style scoped lang="scss">
.l-layout {
  display: flex;
  flex-direction: column;
  position: relative;

  main {
    flex: 1;
    margin-top: 82px;
    max-height: calc(var(--viewport-min-height, 100vh) - 82px - 76.75px);
    max-width: var(--viewport-max-width, 100vw);
    overflow-y: auto;
    padding-inline: var(--space-1);
    padding-top: var(--space-2);
  }
}
</style>
