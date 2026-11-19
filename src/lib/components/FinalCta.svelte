<script lang="ts">
	import { ArrowUpRight } from '@lucide/svelte';
	import { FORM_URL, NAV_LINKS } from '#lib/data/workation';

	let scrollY = $state(0);
	let finalCtaInView = $state(false);
	let finalSection: HTMLElement | undefined = $state();
	let showMobileBar = $derived(scrollY > 420 && !finalCtaInView);

	$effect(() => {
		if (!finalSection) return;

		const observer = new IntersectionObserver(
			(entries) => {
				for (const entry of entries) {
					finalCtaInView = entry.isIntersecting;
				}
			},
			{ threshold: 0.05 }
		);

		observer.observe(finalSection);
		return () => observer.disconnect();
	});
</script>

<svelte:window bind:scrollY />

<div bind:this={finalSection}>
<section
	aria-labelledby="final-cta-heading"
	class="bg-charcoal py-20 text-paper sm:py-28"
>
	<div class="mx-auto max-w-[1360px] px-4 sm:px-8 lg:px-12">
		<div class="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-end">
			<div class="lg:col-span-8">
				<h2
					id="final-cta-heading"
					class="font-display text-[clamp(2.85rem,6vw,5.25rem)] leading-[0.98] tracking-[-0.025em] text-balance text-paper"
				>
					Good people. New places.<br />
					<span class="italic text-clay">Different perspectives.</span>
				</h2>
			</div>

			<div class="lg:col-span-4">
				<p class="max-w-[38ch] text-base leading-relaxed text-sand">
					Tell us whether late January in Gran Canaria works for you, which room setup you prefer,
					and what would make the week worth joining.
				</p>

				<div class="mt-7">
					<a
						href={FORM_URL}
						target="_blank"
						rel="noopener noreferrer"
						class="inline-flex min-h-[52px] w-full items-center justify-center gap-2 bg-clay px-7 py-3.5 font-mono text-xs font-medium tracking-[0.08em] text-charcoal uppercase transition-colors hover:bg-clay-hover sm:w-auto"
					>
						<span>Join the Interest List</span>
						<ArrowUpRight class="size-4" aria-hidden="true" />
					</a>
					<p class="mt-3 font-mono text-[11px] tracking-[0.04em] text-sand">
						Opens the official BDN Workation interest form
					</p>
				</div>
			</div>
		</div>
	</div>
</section>

<footer class="border-t border-sand/20 bg-charcoal pb-12 text-sand">
	<div class="mx-auto max-w-[1360px] px-4 pt-10 sm:px-8 lg:px-12">
		<div class="flex flex-col justify-between gap-6 border-b border-sand/20 pb-8 md:flex-row md:items-center">
			<div>
				<p class="font-display text-2xl text-paper">Barcelona Digital Nomads</p>
				<p class="mt-1 font-mono text-xs tracking-[0.06em] text-sand uppercase">
					BDN Workation 001 · Gran Canaria · Proposed 24–30 January 2027
				</p>
			</div>

			<nav aria-label="Footer navigation" class="flex flex-wrap gap-x-6 gap-y-2">
				{#each NAV_LINKS as item (item.href)}
					<a
						href={item.href}
						class="inline-flex min-h-[44px] items-center text-sm text-sand transition-colors hover:text-paper"
					>
						{item.label}
					</a>
				{/each}
			</nav>
		</div>

		<div class="mt-6 flex flex-col justify-between gap-3 font-mono text-[11px] leading-relaxed text-sand/85 sm:flex-row">
			<p>
				Expression-of-interest campaign only. Dates, capacity (~40), and €599 / €749 pricing are
				provisional.
			</p>
			<p>
				Destination imagery: BDN Survey Reference &amp; Wikimedia Commons (CC BY / CC BY-SA).
			</p>
		</div>
	</div>
</footer>
</div>

{#if showMobileBar}
	<div
		class="fixed inset-x-0 bottom-0 z-30 border-t border-sand bg-paper/95 px-4 py-3 backdrop-blur-sm md:hidden"
	>
		<a
			href={FORM_URL}
			target="_blank"
			rel="noopener noreferrer"
			class="flex min-h-[48px] w-full items-center justify-center gap-2 bg-clay px-5 py-3 font-mono text-xs font-medium tracking-[0.08em] text-charcoal uppercase"
		>
			<span>Join the Interest List</span>
			<ArrowUpRight class="size-4" aria-hidden="true" />
		</a>
	</div>
{/if}
