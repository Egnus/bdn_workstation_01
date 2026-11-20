<script lang="ts">
	import { ArrowDown, ArrowUpRight, Menu, X } from '@lucide/svelte';
	import { scrollToAnchor } from '#lib/actions/reveal';
	import { FORM_URL, NAV_LINKS } from '#lib/data/workation';

	let scrollY = $state(0);
	let mobileOpen = $state(false);
	let scrolled = $derived(scrollY > 40);
	let activeSection = $state<string>('');

	$effect(() => {
		const ids = NAV_LINKS.map((item) => item.href.replace('#', ''));

		const syncActiveSection = () => {
			const cutoff = window.innerHeight * 0.42;
			let current = '';
			for (const id of ids) {
				const el = document.getElementById(id);
				if (el && el.getBoundingClientRect().top <= cutoff) {
					current = `#${id}`;
				}
			}
			activeSection = current;
		};

		syncActiveSection();
		window.addEventListener('scroll', syncActiveSection, { passive: true });
		window.addEventListener('resize', syncActiveSection, { passive: true });
		return () => {
			window.removeEventListener('scroll', syncActiveSection);
			window.removeEventListener('resize', syncActiveSection);
		};
	});

	function handleNav(event: MouseEvent, href: string) {
		event.preventDefault();
		mobileOpen = false;
		scrollToAnchor(href);
	}

	function onKeydown(event: KeyboardEvent) {
		if (event.key === 'Escape' && mobileOpen) {
			mobileOpen = false;
		}
	}
</script>

<svelte:window bind:scrollY onkeydown={onKeydown} />

<header class="pointer-events-none fixed inset-x-0 top-3 z-50 px-3 sm:top-5 sm:px-6 lg:px-10">
	<div
		class={[
			'pointer-events-auto mx-auto flex max-w-[1320px] items-center justify-between rounded-full border px-4 py-2 transition-all duration-300 sm:px-5',
			scrolled
				? 'border-white/15 bg-obsidian/92 text-daylight backdrop-blur-md'
				: 'border-white/20 bg-obsidian/75 text-daylight backdrop-blur-md'
		]}
	>
		<a
			href="#top"
			onclick={(e) => handleNav(e, '#top')}
			class="inline-flex min-h-[44px] shrink-0 items-center gap-2.5 text-daylight no-underline transition-opacity hover:opacity-80"
		>
			<span class="inline-flex size-7 shrink-0 items-center justify-center rounded-full bg-coral font-mono text-[11px] font-medium text-obsidian">
				01
			</span>
			<span class="whitespace-nowrap text-sm font-semibold tracking-[-0.02em] xl:hidden">
				BDN Workation
			</span>
			<span class="hidden whitespace-nowrap text-sm font-semibold tracking-[-0.02em] xl:inline xl:text-base">
				Barcelona Digital Nomads
			</span>
		</a>

		<nav aria-label="Primary navigation" class="hidden shrink-0 items-center gap-0.5 md:flex lg:gap-1">
			{#each NAV_LINKS as item (item.href)}
				<a
					href={item.href}
					onclick={(e) => handleNav(e, item.href)}
					aria-current={activeSection === item.href ? 'true' : undefined}
					class={[
						'inline-flex min-h-[44px] shrink-0 items-center gap-1.5 rounded-full px-2.5 text-sm font-medium whitespace-nowrap transition-colors lg:gap-2 lg:px-3.5',
						activeSection === item.href
							? 'bg-white/12 text-daylight'
							: 'text-mist hover:text-daylight'
					]}
				>
					{#if activeSection === item.href}
						<span class="size-1.5 shrink-0 rounded-full bg-coral" aria-hidden="true"></span>
					{/if}
					<span>{item.label}</span>
				</a>
			{/each}
		</nav>

		<div class="flex shrink-0 items-center gap-2">
			<a
				href={FORM_URL}
				target="_blank"
				rel="noopener noreferrer"
				class="inline-flex min-h-[44px] shrink-0 items-center gap-1.5 rounded-full bg-coral px-3.5 py-2 font-mono text-xs font-medium tracking-[0.04em] whitespace-nowrap text-obsidian uppercase transition-colors hover:bg-coral-hover lg:px-5"
			>
				<span class="hidden md:inline">Express Interest</span>
				<span class="md:hidden">Interest</span>
				<ArrowUpRight class="size-3.5 shrink-0" aria-hidden="true" />
			</a>

			<button
				type="button"
				onclick={() => (mobileOpen = !mobileOpen)}
				aria-expanded={mobileOpen}
				aria-controls="mobile-nav-drawer"
				aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
				class="inline-flex size-[44px] items-center justify-center rounded-full border border-white/20 text-daylight transition-colors hover:border-white/40 md:hidden"
			>
				{#if mobileOpen}
					<X class="size-4" aria-hidden="true" />
				{:else}
					<Menu class="size-4" aria-hidden="true" />
				{/if}
			</button>
		</div>
	</div>

	{#if mobileOpen}
		<nav
			id="mobile-nav-drawer"
			aria-label="Mobile navigation"
			class="pointer-events-auto mx-auto mt-2 max-w-[1320px] rounded-3xl border border-white/15 bg-obsidian/95 p-5 text-daylight backdrop-blur-md md:hidden"
		>
			<ul class="flex flex-col divide-y divide-white/10">
				{#each NAV_LINKS as item (item.href)}
					<li>
						<a
							href={item.href}
							onclick={(e) => handleNav(e, item.href)}
							class="flex min-h-[48px] items-center justify-between text-xl font-semibold tracking-[-0.02em] text-daylight"
						>
							<span>{item.label}</span>
							<ArrowDown class="size-4 text-mist" aria-hidden="true" />
						</a>
					</li>
				{/each}
			</ul>
			<div class="mt-4 pt-3">
				<a
					href={FORM_URL}
					target="_blank"
					rel="noopener noreferrer"
					onclick={() => (mobileOpen = false)}
					class="flex min-h-[48px] w-full items-center justify-center gap-2 rounded-full bg-coral px-5 py-3 font-mono text-xs font-medium tracking-[0.06em] text-obsidian uppercase"
				>
					<span>Express Your Interest</span>
					<ArrowUpRight class="size-4" aria-hidden="true" />
				</a>
			</div>
		</nav>
	{/if}
</header>
