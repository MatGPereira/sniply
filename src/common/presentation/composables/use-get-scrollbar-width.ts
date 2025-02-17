import { onMounted } from 'vue';

function useSetScrollbarWidthFromTag(
  tag: keyof HTMLElementTagNameMap = 'html'
): void {
  onMounted(() => {
    const scrollbarWidth =
      window.innerWidth - (document.querySelector(tag)?.clientWidth || 15);

    document.documentElement.style.setProperty(
      '--scrollbar-width',
      `${scrollbarWidth}px`
    );

    console.log(scrollbarWidth);
  });
}

export { useSetScrollbarWidthFromTag };
