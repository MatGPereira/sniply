<script setup lang="ts">
import Button from '@/common/presentation/components/Button.vue';
import Input from '@/common/presentation/components/Input.vue';
import FeatureCard from '../components/FeatureCard.vue';
</script>

<template>
  <section>
    <div class="section-wrapper">
      <form action="post">
        <Input
          placeholder="Shorten a link here..."
          for="public-shortener"
          type="url"
        />
        <Button>Shorten it!</Button>
      </form>
      <div class="section-content">
        <h2>Advanced statistics</h2>
        <p>
          Track how your links are performing across the web our advanced
          statistic dashboard
        </p>
        <FeatureCard />
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
section {
  background-color: var(--color-lighten-light-dark);
  box-shadow: inset 0 50px var(--color-light-dark);
  margin-inline: calc(-50dvw + 50%);

  .section-wrapper {
    padding-inline: var(--space-1);

    form {
      background: #3b3054 url('@/assets/images/mobile-background-detail.png')
        repeat center center / cover;
      border-radius: var(--radius-large);
      display: flex;
      flex-direction: column;
      margin-bottom: var(--space-5);
      padding: var(--space-1);
      row-gap: calc(var(--space-1) / 2);
    }

    .section-content {
      text-align: center;

      p {
        color: var(--color-gray);
        padding-block: var(--space-1);
      }
    }
  }
}
</style>
