<script setup lang="ts">
import workingIllustration from '@/assets/images/working-illustration.svg';
import Button from '@/common/presentation/components/Button.vue';
</script>

<template>
  <section class="c-hero-section">
    <div class="c-hero-section__image">
      <img
        :src="workingIllustration"
        alt=""
        aria-hidden="true"
      />
    </div>
    <div class="c-hero-section__content">
      <h1 class="c-hero-section__title">More than just shorter links</h1>
      <p class="c-hero-section__description">
        Build your brand's recognition and get detailed insights on how your
        links are performing.
      </p>
      <Button
        type="button"
        class="c-hero-section__action"
      >
        Get started
      </Button>
    </div>
  </section>
</template>

<style scoped lang="scss">
.c-hero-section {
  &__image {
    display: grid;
    margin-left: calc(-50vw + 50%);
    margin-right: calc(-50vw + 50%);
    padding-block: 1rem;
    place-items: center;
    padding-inline: 1rem;
  }

  &__content {
    text-align: center;
  }

  &__title {
    font-weight: 900;
  }

  &__description {
    font-size: var(--font-step-3);
    font-weight: 500;
    color: var(--color-gray);
  }

  &__action {
    background-color: var(--color-brand);
    border-radius: 50px;
    color: var(--color-white);
    font-weight: 900;
    padding: 0.625rem 1.875rem;
    border: 1px solid var(--color-brand);
    transition: all var(--transition-duration-exit)
      var(--transition-function-ease-in-expo);

    &:hover {
      background-color: transparent;
      color: var(--color-text);
    }
  }
}
</style>
