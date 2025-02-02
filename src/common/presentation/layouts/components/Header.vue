<script setup lang="ts">
import Button from '@/common/presentation/components/Button.vue';
import Icon from '@/common/presentation/components/Icon.vue';
import Logo from '@/common/presentation/components/Logo.vue';
</script>

<template>
  <header>
    <Logo />
    <Button>
      <Icon
        v-slot="{ size }"
        :size="48"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          :height="`${size}px`"
          viewBox="0 -960 960 960"
          :width="`${size}px`"
        >
          <path
            d="M120-240v-60h720v60H120Zm0-210v-60h720v60H120Zm0-210v-60h720v60H120Z"
          />
        </svg>
      </Icon>
    </Button>
  </header>
</template>

<style scoped lang="scss">
header {
  align-items: center;
  background-color: transparent;
  display: flex;
  inset-inline: 0;
  justify-content: space-between;
  padding: calc(var(--space-m) * 2) calc(var(--space-m) * 1.25);
  position: fixed;
  top: 0;
}
</style>
