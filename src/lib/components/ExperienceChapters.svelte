<script lang="ts">
	import roqueNubloPhoto from '#lib/assets/photos/roque-nublo.jpg?enhanced';
	import tejedaSunsetPhoto from '#lib/assets/photos/tejeda-sunset.jpg?enhanced';
	import { scrollToAnchor, scrollToPosition } from '#lib/actions/reveal';
	import { EXPERIENCE_CHAPTERS } from '#lib/data/workation';

	const [workChapter, exploreChapter, memoriesChapter] = EXPERIENCE_CHAPTERS;
	let activeIndex = $state(0);
	let trackHostEl = $state<HTMLElement | null>(null);

	const chapterNames = ['Work together', 'Explore together', 'Make memories together'];

	$effect(() => {
		const syncChapterOnScroll = () => {
			if (!trackHostEl || window.innerWidth < 1024) return;
			if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

			const rect = trackHostEl.getBoundingClientRect();
			const vh = window.innerHeight;
			const rawProgress = (vh - rect.top) / (vh + rect.height);
			if (rawProgress < 0.28 || rawProgress > 0.85) return;

			const clamped = Math.min(1, Math.max(0, (rawProgress - 0.28) / 0.44));
			activeIndex = clamped < 0.33 ? 0 : clamped < 0.67 ? 1 : 2;
		};

		window.addEventListener('scroll', syncChapterOnScroll, { passive: true });
		return () => window.removeEventListener('scroll', syncChapterOnScroll);
	});

	function selectChapter(idx: number) {
		activeIndex = idx;
		const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
		if (window.innerWidth < 1024) {
			scrollToAnchor(`#exp-card-mobile-${idx}`);
			return;
		}
		if (reducedMotion) {
			scrollToAnchor(`#exp-card-desktop-${idx}`);
			return;
		}
		if (!trackHostEl) return;
		const rect = trackHostEl.getBoundingClientRect();
		const elTop = window.scrollY + rect.top;
		const vh = window.innerHeight;
		const targetProgress = [0.29, 0.505, 0.72][idx] ?? 0.29;
		const targetScrollY = elTop - vh + targetProgress * (vh + rect.height);
		scrollToPosition(targetScrollY);
	}
</script>

<section
	id="experience"
	aria-labelledby="experience-heading"
	class="relative scroll-mt-24 bg-daylight-subtle py-20 text-ink sm:scroll-mt-28 sm:py-24"
>
	<div class="mx-auto max-w-[1320px] px-4 sm:px-6 lg:px-10">
		<div class="grid grid-cols-1 gap-6 pb-10 lg:grid-cols-12 lg:items-end">
			<div class="lg:col-span-7">
				<h2
					id="experience-heading"
					class="text-[clamp(2.4rem,5vw,4.25rem)] leading-[0.96] font-bold tracking-[-0.04em] text-balance text-ink"
				>
					Seven days, three shared rhythms.
				</h2>
			</div>
			<div class="lg:col-span-5">
				<p class="hidden text-base leading-relaxed text-ink-muted lg:block">
					Scroll sideways across the week—focused remote hours, volcanic island afternoons, and
					communal evenings built around the community.
				</p>
				<p class="text-base leading-relaxed text-ink-muted lg:hidden">
					Three shared rhythms across the week—focused remote hours, volcanic island afternoons,
					and communal evenings built around the community.
				</p>

				<div role="group" aria-label="Select experience chapter" class="mt-5 flex flex-wrap gap-2">
					{#each chapterNames as name, idx (name)}
						<button
							type="button"
							onclick={() => selectChapter(idx)}
							aria-pressed={activeIndex === idx}
							class={[
								'min-h-[44px] rounded-full border px-4 py-2 font-mono text-[11px] font-medium tracking-[0.04em] uppercase transition-colors',
								activeIndex === idx
									? 'border-obsidian bg-obsidian text-daylight'
									: 'border-line-dark bg-daylight-card text-ink-muted hover:border-ink hover:text-ink'
							]}
						>
							0{idx + 1} · {name}
						</button>
					{/each}
				</div>
			</div>
		</div>
	</div>

	<!-- Desktop Locomotive CSS-Progress Horizontal Track -->
	<div
		bind:this={trackHostEl}
		data-scroll
		data-scroll-css-progress
		class="loco-sticky-host hidden lg:block lg:h-[185vh]"
	>
		<div class="loco-sticky-frame sticky top-24 overflow-hidden py-4">
			<div class="pointer-events-none absolute inset-x-0 top-1/2 -translate-y-1/2 select-none overflow-hidden whitespace-nowrap font-bold text-[12vw] leading-none tracking-[-0.04em] text-ink/[0.045] uppercase" aria-hidden="true">
				WORK · EXPLORE · MEMORIES · GRAN CANARIA ·
			</div>

			<div class="loco-horizontal-track relative z-10 flex gap-8 px-10">
				<!-- Card 1: Work together -->
				<article
					id="exp-card-desktop-0"
					class={[
						'flex w-[740px] shrink-0 flex-col justify-between rounded-3xl border bg-daylight-card p-10 transition-colors duration-300',
						activeIndex === 0 ? 'border-coral' : 'border-line-dark'
					]}
				>
					<div>
						<div class="flex items-center justify-between">
							<h3 class="text-4xl font-bold tracking-[-0.03em] text-ink">{workChapter.title}</h3>
							<span class="font-mono text-xs text-ink-muted">01 / WORK</span>
						</div>
						<p class="mt-5 text-lg leading-relaxed font-medium text-ink">
							{workChapter.lead}
						</p>
						<p class="mt-3 text-base leading-relaxed text-ink-muted">
							{workChapter.body}
						</p>
					</div>

					<div class="mt-8 grid grid-cols-1 gap-4 border-t border-line-dark pt-6">
						<ul class="space-y-2 font-mono text-xs text-ink">
							{#each workChapter.rhythmItems as item (item)}
								<li>— {item}</li>
							{/each}
						</ul>
						<p class="rounded-xl border border-dashed border-ink/25 bg-daylight px-4 py-3 font-mono text-[11px] text-ink-muted">
							Placeholder: interior coworking photos &amp; Wi-Fi specs will be shared once the
							villa is confirmed.
						</p>
					</div>
				</article>

				<!-- Card 2: Explore together -->
				<article
					id="exp-card-desktop-1"
					class={[
						'grid w-[820px] shrink-0 grid-cols-12 gap-8 rounded-3xl border bg-obsidian p-10 text-daylight transition-colors duration-300',
						activeIndex === 1 ? 'border-coral' : 'border-white/10'
					]}
				>
					<div class="col-span-6 flex flex-col justify-between">
						<div>
							<div class="flex items-center justify-between">
								<h3 class="text-4xl font-bold tracking-[-0.03em] text-daylight">
									{exploreChapter.title}
								</h3>
								<span class="font-mono text-xs text-mist">02 / ISLAND</span>
							</div>
							<p class="mt-5 text-lg leading-relaxed text-daylight/95">
								{exploreChapter.lead}
							</p>
							<p class="mt-3 text-sm leading-relaxed text-mist">
								{exploreChapter.body}
							</p>
						</div>

						<ul class="mt-6 space-y-2 border-t border-white/15 pt-5 font-mono text-xs text-mist">
							{#each exploreChapter.rhythmItems as item (item)}
								<li>— {item}</li>
							{/each}
						</ul>
					</div>

					<figure class="col-span-6 flex flex-col justify-between">
						<div class="aspect-[4/5] overflow-hidden rounded-2xl bg-obsidian-elevated">
							<enhanced:img
								src={roqueNubloPhoto}
								alt="Volcanic rock monoliths of Roque Nublo rising above Canary pine forest"
								sizes="400px"
								loading="lazy"
								class="h-full w-full object-cover"
							/>
						</div>
						<figcaption class="mt-3 font-mono text-[11px] text-mist">
							Roque Nublo highlands · Gran Canaria
						</figcaption>
					</figure>
				</article>

				<!-- Card 3: Make memories together -->
				<article
					id="exp-card-desktop-2"
					class={[
						'grid w-[820px] shrink-0 grid-cols-12 gap-8 rounded-3xl border bg-daylight-card p-10 transition-colors duration-300',
						activeIndex === 2 ? 'border-coral' : 'border-line-dark'
					]}
				>
					<figure class="col-span-6 flex flex-col justify-between">
						<div class="aspect-[4/5] overflow-hidden rounded-2xl bg-obsidian">
							<enhanced:img
								src={tejedaSunsetPhoto}
								alt="Amber sunset across Caldera de Tejeda mountain ridges in Gran Canaria"
								sizes="400px"
								loading="lazy"
								class="h-full w-full object-cover"
							/>
						</div>
						<figcaption class="mt-3 font-mono text-[11px] text-ink-muted">
							Dusk over Caldera de Tejeda · Gran Canaria
						</figcaption>
					</figure>

					<div class="col-span-6 flex flex-col justify-between">
						<div>
							<div class="flex items-center justify-between">
								<h3 class="text-4xl font-bold tracking-[-0.03em] text-ink">
									{memoriesChapter.title}
								</h3>
								<span class="font-mono text-xs text-ink-muted">03 / EVENINGS</span>
							</div>
							<p class="mt-5 text-lg leading-relaxed font-medium text-ink">
								{memoriesChapter.lead}
							</p>
							<p class="mt-3 text-sm leading-relaxed text-ink-muted">
								{memoriesChapter.body}
							</p>
						</div>

						<ul class="mt-6 space-y-2 border-t border-line-dark pt-5 font-mono text-xs text-ink-muted">
							{#each memoriesChapter.rhythmItems as item (item)}
								<li>— {item}</li>
							{/each}
						</ul>
					</div>
				</article>
			</div>
		</div>
	</div>

	<!-- Mobile Vertical Stack (<lg) -->
	<div class="mx-auto max-w-[1320px] space-y-6 px-4 sm:px-6 lg:hidden">
		<article id="exp-card-mobile-0" class="scroll-mt-24 rounded-2xl border border-line-dark bg-daylight-card p-6">
			<h3 class="text-2xl font-bold tracking-[-0.03em] text-ink">{workChapter.title}</h3>
			<p class="mt-1 font-mono text-[11px] text-ink-muted uppercase">01 / Work</p>
			<p class="mt-4 text-base leading-relaxed font-medium text-ink">{workChapter.lead}</p>
			<p class="mt-2 text-sm leading-relaxed text-ink-muted">{workChapter.body}</p>
			<ul class="mt-4 space-y-1.5 border-t border-line-dark pt-4 font-mono text-xs text-ink">
				{#each workChapter.rhythmItems as item (item)}
					<li>— {item}</li>
				{/each}
			</ul>
			<p class="mt-4 rounded-xl border border-dashed border-ink/25 bg-daylight px-4 py-3 font-mono text-[11px] text-ink-muted">
				Placeholder: interior coworking photos &amp; Wi-Fi specs will be shared once the villa is
				confirmed.
			</p>
		</article>

		<article id="exp-card-mobile-1" class="scroll-mt-24 rounded-2xl bg-obsidian p-6 text-daylight">
			<h3 class="text-2xl font-bold tracking-[-0.03em] text-daylight">{exploreChapter.title}</h3>
			<p class="mt-1 font-mono text-[11px] text-mist uppercase">02 / Island</p>
			<figure class="mt-4">
				<div class="aspect-[4/3] overflow-hidden rounded-xl">
					<enhanced:img
						src={roqueNubloPhoto}
						alt="Volcanic rock monoliths of Roque Nublo rising above Canary pine forest"
						sizes="92vw"
						loading="lazy"
						class="h-full w-full object-cover"
					/>
				</div>
				<figcaption class="mt-2 font-mono text-[11px] text-mist">
					Roque Nublo highlands · Gran Canaria
				</figcaption>
			</figure>
			<p class="mt-4 text-base leading-relaxed text-daylight">{exploreChapter.lead}</p>
			<p class="mt-2 text-sm leading-relaxed text-mist">{exploreChapter.body}</p>
			<ul class="mt-4 space-y-1.5 border-t border-white/15 pt-4 font-mono text-xs text-mist">
				{#each exploreChapter.rhythmItems as item (item)}
					<li>— {item}</li>
				{/each}
			</ul>
		</article>

		<article id="exp-card-mobile-2" class="scroll-mt-24 rounded-2xl border border-line-dark bg-daylight-card p-6">
			<h3 class="text-2xl font-bold tracking-[-0.03em] text-ink">{memoriesChapter.title}</h3>
			<p class="mt-1 font-mono text-[11px] text-ink-muted uppercase">03 / Evenings</p>
			<figure class="mt-4">
				<div class="aspect-[4/3] overflow-hidden rounded-xl">
					<enhanced:img
						src={tejedaSunsetPhoto}
						alt="Amber sunset across Caldera de Tejeda mountain ridges in Gran Canaria"
						sizes="92vw"
						loading="lazy"
						class="h-full w-full object-cover"
					/>
				</div>
				<figcaption class="mt-2 font-mono text-[11px] text-ink-muted">
					Dusk over Caldera de Tejeda · Gran Canaria
				</figcaption>
			</figure>
			<p class="mt-4 text-base leading-relaxed font-medium text-ink">{memoriesChapter.lead}</p>
			<p class="mt-2 text-sm leading-relaxed text-ink-muted">{memoriesChapter.body}</p>
			<ul class="mt-4 space-y-1.5 border-t border-line-dark pt-4 font-mono text-xs text-ink-muted">
				{#each memoriesChapter.rhythmItems as item (item)}
					<li>— {item}</li>
				{/each}
			</ul>
		</article>
	</div>
</section>
