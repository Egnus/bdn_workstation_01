import type LocomotiveScroll from 'locomotive-scroll';

let activeScroll: LocomotiveScroll | null = null;

export function setLocomotiveInstance(instance: LocomotiveScroll | null) {
	activeScroll = instance;
}

export function scrollToAnchor(target: string) {
	if (typeof window === 'undefined') return;

	if (activeScroll) {
		activeScroll.scrollTo(target, {
			offset: -96,
			duration: 1.05
		});
		return;
	}

	const el = document.querySelector(target);
	el?.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

export function scrollToPosition(top: number) {
	if (typeof window === 'undefined') return;

	if (activeScroll) {
		activeScroll.scrollTo(Math.max(0, top), {
			duration: 0.9
		});
		return;
	}

	window.scrollTo({ top: Math.max(0, top), behavior: 'smooth' });
}
