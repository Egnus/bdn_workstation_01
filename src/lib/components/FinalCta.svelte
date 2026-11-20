<script lang="ts">
	import { ArrowUpRight } from '@lucide/svelte';
	import bdnLogo from '#lib/assets/bdn-logo.png';
	import { scrollToAnchor } from '#lib/actions/reveal';
	import { FORM_URL, NAV_LINKS } from '#lib/data/workation';

	let scrollY = $state(0);
	let closingVisible = $state(false);
	let closingWrapper: HTMLElement | undefined = $state();
	let showMobileBar = $derived(scrollY > 460 && !closingVisible);

	$effect(() => {
		if (!closingWrapper) return;

		const observer = new IntersectionObserver(
			(entries) => {
				for (const entry of entries) {
					closingVisible = entry.isIntersecting;
				}
			},
			{ threshold: 0.05 }
		);

		observer.observe(closingWrapper);
		return () => observer.disconnect();
	});

	function handleFooterNav(event: MouseEvent, href: string) {
		event.preventDefault();
		scrollToAnchor(href);
	}
</script>

<svelte:window bind:scrollY />

<div bind:this={closingWrapper} class="relative z-20 bg-obsidian text-daylight">
	<section
		id="interest"
		aria-labelledby="final-cta-heading"
		class="scroll-mt-24 border-t border-white/15 py-20 sm:scroll-mt-28 sm:py-28"
	>
		<div class="mx-auto max-w-[1320px] px-4 sm:px-6 lg:px-10">
			<div class="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-end">
				<div class="lg:col-span-8">
					<h2
						id="final-cta-heading"
						class="text-[clamp(2.85rem,6.5vw,5.4rem)] leading-[0.94] font-bold tracking-[-0.04em] text-balance text-daylight"
					>
						Good people.<br />
						New places.<br />
						<span class="text-coral">Different perspectives.</span>
					</h2>
				</div>

				<div class="lg:col-span-4">
					<p class="text-base leading-relaxed text-mist">
						Let us know if late January 2027 works for you, which room setup you prefer, and what
						would make the week genuinely worth joining.
					</p>

					<div class="mt-7">
						<a
							href={FORM_URL}
							target="_blank"
							rel="noopener noreferrer"
							class="inline-flex min-h-[52px] w-full items-center justify-center gap-2 rounded-full bg-coral px-7 py-3.5 font-mono text-xs font-medium tracking-[0.06em] text-obsidian uppercase transition-colors hover:bg-coral-hover sm:w-auto"
						>
							<span>Join the Interest List</span>
							<ArrowUpRight class="size-4" aria-hidden="true" />
						</a>
						<p class="mt-3 font-mono text-[11px] text-mist">
							Opens the official BDN Workation interest form
						</p>
					</div>
				</div>
			</div>
		</div>
	</section>

	<footer class="border-t border-white/15 pb-12 text-mist">
		<div class="mx-auto max-w-[1320px] px-4 pt-10 sm:px-6 lg:px-10">
			<div class="flex flex-col justify-between gap-6 border-b border-white/15 pb-8 md:flex-row md:items-center">
				<div class="flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:gap-5">
					<a
						href="#top"
						onclick={(e) => handleFooterNav(e, '#top')}
						class="inline-flex min-h-[44px] shrink-0 items-center transition-opacity hover:opacity-80"
					>
						<img
							src={bdnLogo}
							alt="Barcelona Digital Nomads — Back to top"
							width="426"
							height="210"
							loading="lazy"
							decoding="async"
							class="h-11 w-auto sm:h-12"
						/>
					</a>
					<div class="sm:border-l sm:border-white/15 sm:pl-5">
						<p class="text-lg font-semibold tracking-[-0.02em] text-daylight sm:text-xl">
							Barcelona Digital Nomads
						</p>
						<p class="mt-0.5 font-mono text-xs tracking-[0.05em] text-mist uppercase">
							BDN Workation 001 · Gran Canaria · Proposed 24–30 January 2027
						</p>
					</div>
				</div>

				<nav aria-label="Footer navigation" class="flex flex-wrap gap-x-6 gap-y-2">
					{#each NAV_LINKS as item (item.href)}
						<a
							href={item.href}
							onclick={(e) => handleFooterNav(e, item.href)}
							class="inline-flex min-h-[44px] items-center text-sm text-mist transition-colors hover:text-daylight"
						>
							{item.label}
						</a>
					{/each}
				</nav>
			</div>

			<div class="mt-6 flex flex-col justify-between gap-3 font-mono text-[11px] leading-relaxed text-mist/85 sm:flex-row">
				<p>
					Expression-of-interest campaign only. Dates, capacity (~40), and €599 / €749 pricing are
					provisional.
				</p>
				<p>
					Destination &amp; venue photography: Puerto de las Nieves / Agaete partner dossier &amp; Gran Canaria archive.
				</p>
			</div>
		</div>
	</footer>
</div>

{#if showMobileBar}
	<div class="fixed inset-x-3 bottom-3 z-40 md:hidden">
		<a
			href={FORM_URL}
			target="_blank"
			rel="noopener noreferrer"
			class="flex min-h-[48px] w-full items-center justify-center gap-2 rounded-full bg-coral px-5 py-3 font-mono text-xs font-medium tracking-[0.06em] text-obsidian uppercase"
		>
			<span>Join the Interest List</span>
			<ArrowUpRight class="size-4" aria-hidden="true" />
		</a>
	</div>
{/if}
