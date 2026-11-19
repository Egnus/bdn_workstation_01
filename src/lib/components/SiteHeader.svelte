<script lang="ts">
	import { ArrowUpRight, Menu, X } from '@lucide/svelte';
	import { FORM_URL, NAV_LINKS } from '#lib/data/workation';

	let scrollY = $state(0);
	let mobileOpen = $state(false);
	let activeSection = $state<string>('');
	let scrolled = $derived(scrollY > 36);

	$effect(() => {
		const ids = NAV_LINKS.map((item) => item.href.replace('#', ''));
		const elements = ids
			.map((id) => document.getElementById(id))
			.filter((el): el is HTMLElement => el !== null);

		if (elements.length === 0) return;

		const observer = new IntersectionObserver(
			(entries) => {
				for (const entry of entries) {
					if (entry.isIntersecting) {
						activeSection = `#${entry.target.id}`;
					}
				}
			},
			{
				rootMargin: '-25% 0px -60% 0px',
				threshold: 0
			}
		);

		for (const el of elements) observer.observe(el);

		return () => observer.disconnect();
	});

	function closeMobile() {
		mobileOpen = false;
	}

	function onKeydown(event: KeyboardEvent) {
		if (event.key === 'Escape' && mobileOpen) {
			mobileOpen = false;
		}
	}
</script>

<svelte:window bind:scrollY onkeydown={onKeydown} />

<header
	class={[
		'sticky top-0 z-40 transition-colors duration-300',
		scrolled
			? 'border-b border-sand bg-paper/95 backdrop-blur-sm'
			: 'border-b border-sand/60 bg-paper'
	]}
>
	<div class="mx-auto flex h-16 max-w-[1360px] items-center justify-between px-4 sm:px-8 lg:px-12">
		<a
			href="#top"
			class="inline-flex min-h-[44px] items-center gap-3 text-charcoal no-underline transition-opacity hover:opacity-75"
		>
			<span class="font-display text-xl tracking-[-0.01em] sm:text-2xl">
				Barcelona Digital Nomads
			</span>
			<span class="hidden font-mono text-[11px] tracking-[0.08em] text-charcoal-muted uppercase sm:inline">
				/ 001
			</span>
		</a>

		<nav aria-label="Primary navigation" class="hidden items-center gap-7 md:flex">
			{#each NAV_LINKS as item (item.href)}
				<a
					href={item.href}
					aria-current={activeSection === item.href ? 'true' : undefined}
					class={[
						'inline-flex min-h-[44px] items-center border-b-2 text-sm font-medium transition-colors',
						activeSection === item.href
							? 'border-clay text-charcoal'
							: 'border-transparent text-charcoal-muted hover:text-charcoal'
					]}
				>
					{item.label}
				</a>
			{/each}

			<a
				href={FORM_URL}
				target="_blank"
				rel="noopener noreferrer"
				class="inline-flex min-h-[44px] items-center gap-1.5 border border-charcoal bg-charcoal px-4 py-2 font-mono text-xs font-medium tracking-[0.06em] text-paper uppercase transition-colors hover:border-clay hover:bg-clay hover:text-charcoal"
			>
				<span>Express Interest</span>
				<ArrowUpRight class="size-3.5" aria-hidden="true" />
			</a>
		</nav>

		<div class="flex items-center gap-2 md:hidden">
			<a
				href={FORM_URL}
				target="_blank"
				rel="noopener noreferrer"
				class="inline-flex min-h-[44px] items-center gap-1 bg-clay px-3.5 py-2 font-mono text-[11px] font-medium tracking-[0.06em] text-charcoal uppercase"
			>
				<span>Interest</span>
				<ArrowUpRight class="size-3.5" aria-hidden="true" />
			</a>

			<button
				type="button"
				onclick={() => (mobileOpen = !mobileOpen)}
				aria-expanded={mobileOpen}
				aria-controls="mobile-nav-drawer"
				aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
				class="inline-flex size-[44px] items-center justify-center border border-sand text-charcoal transition-colors hover:border-charcoal"
			>
				{#if mobileOpen}
					<X class="size-5" aria-hidden="true" />
				{:else}
					<Menu class="size-5" aria-hidden="true" />
				{/if}
			</button>
		</div>
	</div>

	{#if mobileOpen}
		<nav
			id="mobile-nav-drawer"
			aria-label="Mobile navigation"
			class="border-t border-sand bg-paper px-4 py-5 md:hidden"
		>
			<ul class="flex flex-col divide-y divide-sand/70">
				{#each NAV_LINKS as item (item.href)}
					<li>
						<a
							href={item.href}
							onclick={closeMobile}
							class={[
								'flex min-h-[48px] items-center justify-between font-display text-2xl',
								activeSection === item.href ? 'text-charcoal underline decoration-clay underline-offset-4' : 'text-charcoal'
							]}
						>
							<span>{item.label}</span>
							<span class="font-mono text-xs text-charcoal-muted">↓</span>
						</a>
					</li>
				{/each}
			</ul>
			<div class="mt-5 border-t border-sand pt-4">
				<a
					href={FORM_URL}
					target="_blank"
					rel="noopener noreferrer"
					onclick={closeMobile}
					class="flex min-h-[48px] w-full items-center justify-center gap-2 bg-clay px-5 py-3 font-mono text-xs font-medium tracking-[0.08em] text-charcoal uppercase"
				>
					<span>Express Your Interest</span>
					<ArrowUpRight class="size-4" aria-hidden="true" />
				</a>
			</div>
		</nav>
	{/if}
</header>
