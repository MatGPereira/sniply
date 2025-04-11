import { onMounted, onBeforeUnmount } from 'vue';

function useSetScrollbarWidthFromTag(
  tag: keyof HTMLElementTagNameMap = 'html'
): void {
  function calculateScrollbarWidth() {
    const element = document.querySelector(tag);
    if (!element) return;

    const scrollbarWidth = window.innerWidth - element.clientWidth;
    document.documentElement.style.setProperty(
      '--scrollbar-width',
      `${scrollbarWidth}px`
    );
  }

  function waitForElement() {
    const interval = setInterval(() => {
      const el = document.querySelector(tag);
      const hasLayout = el?.clientWidth && el.clientWidth > 0;

      if (el && hasLayout) {
        calculateScrollbarWidth();
        clearInterval(interval);
      }
    }, 50);
  }

  function handleResize() {
    calculateScrollbarWidth();
  }

  onMounted(() => {
    waitForElement();
    window.addEventListener('resize', handleResize);
  });

  onBeforeUnmount(() => {
    window.removeEventListener('resize', handleResize);
  });
}

export { useSetScrollbarWidthFromTag };
