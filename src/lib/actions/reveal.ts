/**
 * Subtle authored hairline motion: keeps all content visible by default and
 * smoothly settles the 1px Sand divider rule across the viewport width once.
 */
export function hairline(node: HTMLElement) {
	if (typeof window === 'undefined') {
		return;
	}

	const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
	if (prefersReduced || node.getBoundingClientRect().top < window.innerHeight * 0.96) {
		node.setAttribute('data-hairline', 'visible');
		return;
	}

	node.setAttribute('data-hairline', 'pending');

	let observer: IntersectionObserver | null = null;
	const show = () => {
		node.setAttribute('data-hairline', 'visible');
		observer?.disconnect();
		window.removeEventListener('scroll', checkPosition);
	};

	const checkPosition = () => {
		if (node.getBoundingClientRect().top < window.innerHeight * 0.96) {
			show();
		}
	};

	observer = new IntersectionObserver(
		(entries) => {
			for (const entry of entries) {
				if (entry.isIntersecting || entry.boundingClientRect.top < window.innerHeight) {
					show();
					break;
				}
			}
		},
		{ threshold: 0.05 }
	);

	observer.observe(node);
	window.addEventListener('scroll', checkPosition, { passive: true });

	return {
		destroy() {
			observer?.disconnect();
			window.removeEventListener('scroll', checkPosition);
		}
	};
}
