<script setup lang="ts">
import Logo from './Logo.vue';
import SvgIcon from './ui-kit/svg-icon/SvgIcon.vue';
import Button from './ui-kit/button/Button.vue';
</script>

<template>
  <header class="c-header">
    <Logo />
    <Button
      variant="none"
      class="c-header__hamburger"
    >
      <SvgIcon
        :size="34"
        v-slot="{ size }"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          :height="`${size}px`"
          viewBox="0 -960 960 960"
          :width="`${size}px`"
          fill="var(--color-text)"
        >
          <path
            d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z"
          />
        </svg>
      </SvgIcon>
    </Button>
  </header>
</template>

<style scoped lang="scss">
.c-header {
  align-items: center;
  display: flex;
  justify-content: space-between;
  padding: calc(var(--space-m) * 2) var(--space-m);

  @media screen and (width >= 62.5em) {
    &__hamburger {
      display: none;
    }
  }
}
</style>
