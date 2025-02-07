<script setup lang="ts"></script>

<template>
  <div class="l-layout">
    <h1>h1</h1>
    <h2>h2</h2>
    <h3>h3</h3>
    <h4>h4</h4>
    <h5>h5</h5>
    <h6>h6</h6>
    <slot />
  </div>
</template>

<style scoped lang="scss">
.l-layout {
  overflow-x: hidden;
}
</style>
