<script setup lang="ts">
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';
import Layout from './components/Layout.vue';
</script>

<template>
  <Layout class="l-default">
    <Header />
    <main>
      <slot />
    </main>
    <Footer />
  </Layout>
</template>

<style scoped lang="scss">
.l-default {
  display: flex;
  flex-direction: column;
  position: relative;
  padding-block-start: 114px;

  main {
    flex: 1;
  }
}
</style>
