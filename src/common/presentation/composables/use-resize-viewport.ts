import { onMounted, onUnmounted, ref } from 'vue';

function useResizeViewport() {
  const viewportWidth = ref<number>(window.innerWidth);

  function setViewportWidth() {
    viewportWidth.value = window.innerWidth;
  }

  onMounted(() => window.addEventListener('resize', setViewportWidth));
  onUnmounted(() => window.removeEventListener('resize', setViewportWidth));

  return { viewportWidth };
}

export { useResizeViewport };
