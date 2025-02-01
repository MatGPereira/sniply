// function useRipple(event: MouseEvent) {
//   const target = <HTMLElement>event.currentTarget;

//   const ripple = document.createElement('span');
//   ripple.classList.add('ripple');

//   const rect = target.getBoundingClientRect();
//   const size = Math.max(rect.width, rect.height);

//   ripple.style.width = ripple.style.height = `${size}px`;

//   const x = event.clientX - rect.left - size / 2;
//   const y = event.clientY - rect.top - size / 2;

//   ripple.style.left = `${x}px`;
//   ripple.style.top = `${y}px`;

//   target.appendChild(ripple);

//   setTimeout(() => ripple.remove(), 600);
// }

// export { useRipple };
