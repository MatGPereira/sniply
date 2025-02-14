<script setup lang="ts">
import Button from '@/common/presentation/components/Button.vue';
</script>

<template>
  <section>
    <div class="section-wrapper">
      <h2>Boost your links today</h2>
      <Button type="button">Get started</Button>
    </div>
  </section>
</template>

<style scoped lang="scss">
section {
  margin-inline: calc(-50dvw + 50%);
  background: #3b3054 url('@/assets/images/mobile-background-detail.png') repeat
    center center / cover;

  .section-wrapper {
    display: flex;
    flex-direction: column;
    padding: var(--space-6) var(--space-1);
    row-gap: var(--space-1);

    h2 {
      color: var(--color-white);
    }
  }
}
</style>
