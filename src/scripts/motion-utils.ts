// Small shared helpers for the interactive scenes.

export const reduceMotion = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches;

export const clamp = (v: number, min = 0, max = 1) => Math.min(max, Math.max(min, v));
export const lerp = (a: number, b: number, t: number) => a + (b - a) * t;
export const easeOut = (t: number) => 1 - Math.pow(1 - t, 3);
export const easeInOut = (t: number) => (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2);
/** Progress of `p` between `from` and `to`, clamped to 0..1. */
export const span = (p: number, from: number, to: number) => clamp((p - from) / (to - from));

/** Await a Motion animation (they are thenable). */
export const done = (animation: { then: (cb: () => void) => unknown }) =>
  new Promise<void>((resolve) => animation.then(() => resolve()));

export const wait = (ms: number) => new Promise<void>((resolve) => setTimeout(resolve, ms));

/**
 * Mouse-only dragging. Touch is left alone on purpose so a finger on a draggable
 * thing still scrolls the page.
 */
export function mouseDrag(
  el: HTMLElement,
  onMove: (dx: number, dy: number) => void,
  opts: { onStart?: () => void; onEnd?: () => void; enabled?: () => boolean } = {},
) {
  let startX = 0;
  let startY = 0;
  let active = false;

  el.addEventListener('pointerdown', (e) => {
    if (e.pointerType !== 'mouse' || e.button !== 0) return;
    if (opts.enabled && !opts.enabled()) return;
    active = true;
    startX = e.clientX;
    startY = e.clientY;
    el.setPointerCapture(e.pointerId);
    opts.onStart?.();
    e.preventDefault();
  });

  el.addEventListener('pointermove', (e) => {
    if (!active) return;
    onMove(e.clientX - startX, e.clientY - startY);
    startX = e.clientX;
    startY = e.clientY;
  });

  const end = (e: PointerEvent) => {
    if (!active) return;
    active = false;
    if (el.hasPointerCapture(e.pointerId)) el.releasePointerCapture(e.pointerId);
    opts.onEnd?.();
  };
  el.addEventListener('pointerup', end);
  el.addEventListener('pointercancel', end);
}
