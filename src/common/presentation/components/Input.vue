<script lang="ts">
import type { InputHTMLAttributes, InputTypeHTMLAttribute } from 'vue';

interface IInputProps extends /* @vue-ignore */ InputHTMLAttributes {
  for: string;
  placeholder: string;
  type: InputTypeHTMLAttribute;
}
</script>

<script setup lang="ts">
const props = defineProps<IInputProps>();
</script>

<template>
  <div>
    <input
      :type="props.type"
      :id="props.for"
      :aria-labelledby="`input-label-${props.for}`"
    />
    <label
      :for="props.for"
      :id="`input-label-${props.for}`"
    >
      {{ props.placeholder }}
    </label>
  </div>
</template>

<style scoped lang="scss">
div {
  position: relative;

  input {
    background-color: var(--color-lighten-light-dark);
    border-radius: var(--radius-default);
    border: none;
    color: var(--color-dark-light);
    padding: calc((var(--space-1) / 2) + 2px) var(--space-1);
    width: 100%;

    &:focus-visible + label {
      color: var(--color-dark-light);
      font-size: var(--font-step--2);
      translate: 0 calc(-1 * var(--space-2));
    }
  }

  label {
    background-color: var(--color-lighten-light-dark);
    border-radius: var(--radius-small) var(--radius-small) 0 0;
    bottom: 0%;
    color: var(--color-gray);
    cursor: text;
    display: inline-block;
    left: 0;
    padding: 0 calc(var(--space-1) / 4);
    position: absolute;
    transition: all var(--transition-duration-default)
      var(--transition-function-elastic);
    translate: var(--space-1) calc(-1 * ((var(--space-1) / 2) + 1px));
    user-select: none;
    width: max-content;
  }
}
</style>
