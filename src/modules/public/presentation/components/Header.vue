<script setup lang="ts">
import ButtonIcon from '@/common/presentation/components/Button/ButtonIcon.vue';
import Logo from '@/common/presentation/components/Logo.vue';
</script>

<template>
  <header>
    <Logo />
    <ButtonIcon>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="48px"
        viewBox="0 -960 960 960"
        width="48px"
        style="color: var(--color-white)"
      >
        <path
          d="M120-240v-60h720v60H120Zm0-210v-60h720v60H120Zm0-210v-60h720v60H120Z"
        />
      </svg>
    </ButtonIcon>
  </header>
</template>

<style scoped lang="scss">
header {
  background-color: transparent;
  inset-inline: 0;
  padding: calc(var(--space-m) * 2) var(--space-m);
  position: fixed;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
</style>
