<script setup lang="ts">
import HeroImage from '@/common/presentation/components/HeroImage.vue';
import Button from '@/common/presentation/components/Button.vue';
</script>

<template>
  <section>
    <HeroImage />
    <div>
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
  div {
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
