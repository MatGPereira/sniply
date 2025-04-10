<script setup lang="ts">
import { faBars } from '@fortawesome/free-solid-svg-icons';
import Icon from './Icon.vue';
import Button from './Button.vue';
</script>

<template>
  <aside>
    <button type="button">
      <Icon
        class="c-icon"
        :icon="faBars"
        size="3x"
      />
    </button>
    <div>
      <Button>Sign up</Button>
      <Button class="transparent-button">Sign in</Button>
    </div>
  </aside>
</template>

<style scoped lang="scss">
aside {
  align-items: center;
  background-color: var(--color-lighten-light-dark);
  border-radius: var(--radius-default) var(--radius-default) 0 0;
  bottom: 0;
  box-shadow: 0 2px 16px var(--color-shadow);
  display: inline-flex;
  inset-inline: 0;
  justify-content: center;
  overflow-y: hidden;
  padding: var(--space-1);
  position: fixed;
  z-index: var(--z-index-above);

  .c-icon {
    color: var(--color-dark-light);
  }

  div {
    background-color: var(--color-lighten-light-dark);
    border-radius: var(--radius-default) var(--radius-default) 0 0;
    bottom: -50%;
    display: flex;
    flex-direction: column;
    inset-inline: 0;
    padding: var(--space-1);
    position: fixed;
    row-gap: calc(var(--space-1) / 2);
    z-index: var(--z-index-below);
    transition: bottom var(--transition-duration-exit) linear;

    .transparent-button {
      background-color: transparent;
      border: 1px solid var(--color-brand);
      color: var(--color-brand);
    }
  }
}
</style>
