<script setup lang="ts">
import HeroImage from '@/common/presentation/components/HeroImage.vue';
import Button from '@/common/presentation/components/Button.vue';
</script>

<template>
  <section>
    <div class="c-hero-image">
      <HeroImage />
    </div>
    <div class="section-content">
      <h1>More than just shorter links</h1>
      <p>
        Build your brand's recognition and get detailed insight on how your
        links are performing.
      </p>
      <Button>Get started</Button>
    </div>
  </section>
</template>

<style scoped lang="scss">
section {
  margin-bottom: var(--space-5);

  .c-hero-image {
    text-align: center;
  }

  .section-content {
    text-align: center;

    h1 {
      padding-top: var(--space-2);
    }

    p {
      color: var(--color-gray);
      padding-block: var(--space-1);
    }
  }
}
</style>
