<script setup lang="ts">
import Button from '@/common/presentation/components/ui-kit/button/Button.vue';
</script>

<template>
  <div>
    <Button
      size="pill"
      :loading="true"
    >
      Entrar
    </Button>
  </div>
</template>

<style scoped lang="scss">
div {
  display: grid;
  place-items: center;
  height: 100vh;
}
</style>
