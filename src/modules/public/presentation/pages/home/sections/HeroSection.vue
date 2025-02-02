<script setup lang="ts">
import { RouterLink } from 'vue-router';
import workingIllustration from '@/assets/images/working-illustration.svg';
</script>

<template>
  <section class="l-hero">
    <img
      :src="workingIllustration"
      alt=""
      draggable="false"
      aria-hidden="true"
    />
    <div>
      <h1>More than just shorter links</h1>
      <p class="l-hero__description">
        Build your brands recognition and get detailed insights on how your
        links are performing.
      </p>
      <RouterLink
        to="/sign-in"
        class="l-hero__cta"
        >Get started</RouterLink
      >
    </div>
  </section>
</template>

<style scoped lang="scss">
@use '@/assets/styles/components/button' as *;

.l-hero {
  text-align: center;

  img {
    margin-left: calc(var(--space-m) * 4);
  }

  & > div {
    margin-block: calc(var(--space-m) * 3);
  }

  &__description {
    font-size: var(--font-step-1);
    padding-inline: var(--space-m);
    margin-block: calc(var(--space-m) * 1.5);
    color: var(--color-gray);
    font-weight: 500;
  }

  &__cta {
    @extend .c-button, .c-button--pill, .c-button--primary, .c-button--lg;
    text-decoration: none;
    font-weight: 600;
  }
}
</style>
