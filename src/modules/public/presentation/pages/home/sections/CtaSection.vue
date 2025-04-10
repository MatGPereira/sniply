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
  --_scroll-width-correction: 15px;
  --_margin-inline-correction: calc((-50dvw + (var(--scrollbar-width, var(--_scroll-width-correction)) / 2)) + 50%);

  background: #3b3054 url('@/assets/images/mobile-background-detail.png') repeat
    center center / cover;
  margin-bottom: var(--space-3);
  margin-inline: var(--_margin-inline-correction);

  .section-wrapper {
    display: flex;
    flex-direction: column;
    padding: var(--space-6) var(--space-1);
    row-gap: var(--space-1);
    text-align: center;

    h2 {
      color: var(--color-white);
    }
  }
}

@media screen and (375px <= width <= 1280px) {
  section {
    --_scroll-width-correction: 0px
  }
}
</style>
