import type { Action } from 'svelte/action';

const reduced = () =>
	typeof window !== 'undefined' &&
	window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/**
 * Fades an element up the first time it enters the viewport.
 * `delay` staggers siblings, in milliseconds.
 */
export const reveal: Action<HTMLElement, number | undefined> = (node, delay = 0) => {
	node.classList.add('rv');

	if (reduced() || !('IntersectionObserver' in window)) {
		node.classList.add('in');
		return;
	}

	if (delay) node.style.transitionDelay = `${delay}ms`;

	const io = new IntersectionObserver(
		(entries) => {
			for (const e of entries) {
				if (e.isIntersecting) {
					node.classList.add('in');
					io.unobserve(node);
				}
			}
		},
		{ rootMargin: '0px 0px -10% 0px', threshold: 0.06 }
	);

	io.observe(node);
	return { destroy: () => io.disconnect() };
};

/**
 * Counts a number up from zero once it scrolls into view.
 */
export const countUp: Action<HTMLElement, { value: number; suffix?: string }> = (node, params) => {
	const { value, suffix = '' } = params;

	if (reduced() || !('IntersectionObserver' in window)) {
		node.textContent = `${value}${suffix}`;
		return;
	}

	node.textContent = `0${suffix}`;

	const io = new IntersectionObserver(
		(entries) => {
			for (const e of entries) {
				if (!e.isIntersecting) continue;
				io.unobserve(node);

				const start = performance.now();
				const dur = 1500;
				const tick = (now: number) => {
					const p = Math.min(1, (now - start) / dur);
					const eased = 1 - Math.pow(1 - p, 3);
					node.textContent = `${Math.round(value * eased)}${suffix}`;
					if (p < 1) requestAnimationFrame(tick);
				};
				requestAnimationFrame(tick);
			}
		},
		{ threshold: 0.5 }
	);

	io.observe(node);
	return { destroy: () => io.disconnect() };
};
