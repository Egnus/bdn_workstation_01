<script lang="ts">
	import coworkingDeskImg from '#lib/assets/photos/venue/coworking-open-desk.jpg?enhanced&w=1280;860;540';
	import coworkingWorkshopImg from '#lib/assets/photos/venue/coworking-workshop-session.jpg?enhanced&w=720;480;320';
	import explorePoolsImg from '#lib/assets/photos/venue/agaete-natural-pools-group.jpg?enhanced&w=1280;860;540';
	import exploreCoffeeImg from '#lib/assets/photos/venue/agaete-coffee-plantation.jpg?enhanced&w=720;480;320';
	import memoriesSunsetImg from '#lib/assets/photos/venue/rooftop-sunset-session.jpg?enhanced&w=1280;860;540';
	import memoriesDinnerImg from '#lib/assets/photos/venue/coliving-group-dinner.jpg?enhanced&w=720;480;320';
	import { scrollToAnchor, scrollToPosition } from '#lib/actions/reveal';
	import { EXPERIENCE_CHAPTERS } from '#lib/data/workation';

	const [workChapter, exploreChapter, memoriesChapter] = EXPERIENCE_CHAPTERS;

	let activeIndex = $state(0);
	let trackProgress = $state(0);
	let trackHostEl = $state<HTMLElement | null>(null);
	let chipRailEl = $state<HTMLElement | null>(null);

	const chapterNames = ['Work together', 'Explore together', 'Make memories together'];

	function getChipFill(idx: number, progress: number): number {
		const start = idx / 3;
		const end = (idx + 1) / 3;
		if (progress <= start) return 0;
		if (progress >= end) return 1;
		return (progress - start) / (end - start);
	}

	$effect(() => {
		const el = chipRailEl;
		const current = activeIndex;
		if (!el || typeof window === 'undefined' || window.innerWidth >= 768) return;
		const btn = el.querySelector<HTMLElement>(`[data-chip-index="${current}"]`);
		if (!btn) return;
		const targetLeft = btn.offsetLeft - el.clientWidth / 2 + btn.clientWidth / 2;
		el.scrollTo({ left: Math.max(0, targetLeft), behavior: 'smooth' });
	});

	$effect(() => {
		if (!trackHostEl) return;

		let rafId = 0;

		const computeScrollState = () => {
			rafId = 0;
			if (!trackHostEl) return;
			if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

			const rect = trackHostEl.getBoundingClientRect();
			const vh = window.innerHeight || 800;
			const stickyOffset = window.innerWidth < 640 ? 68 : 88;
			const scrollableDistance = Math.max(1, rect.height - (vh - stickyOffset));
			const traveled = stickyOffset - rect.top;
			const clamped = Math.min(1, Math.max(0, traveled / scrollableDistance));

			trackProgress = clamped;
			activeIndex = clamped < 0.34 ? 0 : clamped < 0.68 ? 1 : 2;
		};

		const onScrollOrResize = () => {
			if (!rafId) {
				rafId = requestAnimationFrame(computeScrollState);
			}
		};

		computeScrollState();
		window.addEventListener('scroll', onScrollOrResize, { passive: true });
		window.addEventListener('resize', onScrollOrResize, { passive: true });
		return () => {
			window.removeEventListener('scroll', onScrollOrResize);
			window.removeEventListener('resize', onScrollOrResize);
			if (rafId) cancelAnimationFrame(rafId);
		};
	});

	function selectChapter(idx: number) {
		activeIndex = idx;
		const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
		if (reducedMotion) {
			scrollToAnchor(`#exp-card-${idx}`);
			return;
		}
		if (!trackHostEl) return;
		const rect = trackHostEl.getBoundingClientRect();
		const elTop = window.scrollY + rect.top;
		const vh = window.innerHeight || 800;
		const stickyOffset = window.innerWidth < 640 ? 68 : 88;
		const scrollableDistance = Math.max(1, rect.height - (vh - stickyOffset));
		const targetRatio = [0.02, 0.5, 0.98][idx] ?? 0;
		const targetScrollY = elTop - stickyOffset + targetRatio * scrollableDistance;
		scrollToPosition(targetScrollY);
	}
</script>

<section
	id="experience"
	aria-labelledby="experience-heading"
	class="relative scroll-mt-24 bg-daylight-subtle pt-16 pb-14 text-ink sm:scroll-mt-28 sm:pt-24 sm:pb-20"
>
	<div class="mx-auto max-w-[1320px] px-4 sm:px-6 lg:px-10">
		<div class="grid grid-cols-1 gap-4 pb-4 lg:grid-cols-12 lg:items-end lg:pb-6">
			<div class="lg:col-span-7">
				<h2
					id="experience-heading"
					class="text-[clamp(2.25rem,5vw,4.25rem)] leading-[0.96] font-bold tracking-[-0.04em] text-balance text-ink"
				>
					Seven days, three shared rhythms.
				</h2>
			</div>
			<div class="lg:col-span-5">
				<p class="text-sm leading-relaxed text-ink-muted sm:text-base">
					Scroll down to glide sideways across the week—40-seat seafront coworking mornings,
					volcanic island afternoons, and rooftop dinners built around the community.
				</p>
			</div>
		</div>
	</div>

	<!-- Locomotive Scroll Horizontal Track (Desktop & Mobile) -->
	<div
		bind:this={trackHostEl}
		data-scroll
		data-scroll-css-progress
		style:--chapter-progress={trackProgress}
		class="loco-sticky-host relative h-[265vh] sm:h-[240vh] lg:h-[225vh]"
	>
		<div class="loco-sticky-frame sticky top-16 flex flex-col justify-center overflow-hidden py-3 sm:top-20 sm:py-5">
			<!-- Sticky Illuminated Chapter Chips + Progress Bar -->
			<div class="relative z-20 mx-auto mb-3 w-full max-w-[1320px] px-4 sm:mb-5 sm:px-6 lg:px-10">
				<div class="flex flex-col gap-2.5 sm:flex-row sm:items-center sm:justify-between">
					<div
						bind:this={chipRailEl}
						role="group"
						aria-label="Select experience chapter"
						class="no-scrollbar flex items-center gap-2 overflow-x-auto py-1 sm:flex-wrap sm:overflow-visible"
					>
						{#each chapterNames as name, idx (name)}
							{@const isActive = activeIndex === idx}
							{@const isPassed = activeIndex > idx}
							{@const fill = getChipFill(idx, trackProgress)}
							<button
								type="button"
								data-chip-index={idx}
								onclick={() => selectChapter(idx)}
								aria-pressed={isActive}
								class={[
									'exp-chip relative inline-flex min-h-[40px] shrink-0 items-center gap-2 overflow-hidden rounded-full border px-3.5 py-1.5 font-mono text-[11px] font-medium tracking-[0.04em] uppercase transition-all duration-300 sm:min-h-[44px] sm:px-4 sm:py-2',
									isActive
										? 'scale-[1.03] border-coral bg-obsidian text-daylight shadow-[0_0_24px_-4px_rgba(255,90,38,0.65)]'
										: isPassed
											? 'border-ink/30 bg-daylight-card text-ink'
											: 'border-line-dark bg-daylight-card/85 text-ink-muted hover:border-ink hover:text-ink'
								]}
							>
								<!-- Scroll-driven internal illumination bar -->
								<span
									class={[
										'pointer-events-none absolute inset-y-0 left-0 origin-left transition-transform duration-150',
										isActive ? 'bg-coral/22' : 'bg-coral/10'
									]}
									style="width: 100%; transform: scaleX({fill})"
									aria-hidden="true"
								></span>

								<!-- Bottom active laser line -->
								<span
									class="pointer-events-none absolute inset-x-0 bottom-0 h-[2.5px] origin-left bg-coral transition-transform duration-150"
									style="transform: scaleX({fill})"
									aria-hidden="true"
								></span>

								<!-- Glowing status dot -->
								<span
									class={[
										'relative z-10 size-2 shrink-0 rounded-full transition-all duration-300',
										isActive
											? 'bg-coral shadow-[0_0_10px_2px_rgba(255,90,38,0.9)]'
											: isPassed
												? 'bg-coral/60'
												: 'bg-ink/25'
									]}
									aria-hidden="true"
								></span>

								<span class="relative z-10 whitespace-nowrap">
									<span class={isActive ? 'text-coral' : 'opacity-70'}>0{idx + 1}</span>
									<span class="mx-1 opacity-50">·</span>
									<span>{name}</span>
								</span>
							</button>
						{/each}
					</div>

					<!-- Live scroll progress telemetry pill -->
					<div class="hidden items-center gap-3 sm:flex">
						<span class="font-mono text-[11px] tracking-[0.06em] text-ink-muted uppercase tabular-nums">
							0{activeIndex + 1} / 03
						</span>
						<div class="h-1.5 w-24 overflow-hidden rounded-full bg-ink/10" aria-hidden="true">
							<div
								class="h-full origin-left bg-coral transition-transform duration-100"
								style="transform: scaleX({Math.max(0.06, trackProgress)})"
							></div>
						</div>
					</div>
				</div>
			</div>

			<!-- Background kinetic watermark -->
			<div
				class="pointer-events-none absolute inset-x-0 top-1/2 -translate-y-1/2 select-none overflow-hidden whitespace-nowrap font-bold text-[16vw] leading-none tracking-[-0.04em] text-ink/[0.045] uppercase lg:text-[12vw]"
				aria-hidden="true"
			>
				WORK · EXPLORE · MEMORIES · AGAETE ·
			</div>

			<!-- Horizontal Cards Track (Mobile + Desktop) -->
			<div class="loco-horizontal-track relative z-10 flex items-stretch gap-4 px-4 sm:gap-6 sm:px-6 lg:gap-8 lg:px-10">
				<!-- Card 1: Work together -->
				<article
					id="exp-card-0"
					class={[
						'exp-horizontal-card grid w-[86vw] max-w-[370px] shrink-0 grid-cols-1 gap-4 rounded-3xl border bg-daylight-card p-5 transition-all duration-300 sm:w-[580px] sm:max-w-none sm:p-7 lg:w-[840px] lg:grid-cols-12 lg:gap-8 lg:p-10',
						activeIndex === 0
							? 'border-coral shadow-[0_20px_50px_-18px_rgba(255,90,38,0.28)]'
							: 'border-line-dark opacity-85 lg:scale-[0.985]'
					]}
				>
					<div class="flex flex-col justify-between lg:col-span-6">
						<div>
							<div class="flex items-center justify-between gap-2">
								<h3 class="text-2xl font-bold tracking-[-0.03em] text-ink sm:text-3xl lg:text-4xl">
									{workChapter.title}
								</h3>
								<span
									class={[
										'rounded-full px-2.5 py-1 font-mono text-[10px] font-medium tracking-[0.05em] uppercase transition-colors sm:text-xs',
										activeIndex === 0 ? 'bg-coral text-obsidian' : 'bg-daylight-subtle text-ink-muted'
									]}
								>
									01 / WORK
								</span>
							</div>
							<p class="mt-2.5 text-sm leading-snug font-medium text-ink sm:mt-4 sm:text-base lg:mt-5 lg:text-lg lg:leading-relaxed">
								{workChapter.lead}
							</p>
							<p class="mt-2 line-clamp-3 text-xs leading-relaxed text-ink-muted sm:line-clamp-none sm:text-sm">
								{workChapter.body}
							</p>
						</div>

						<div class="mt-3 space-y-2 border-t border-line-dark pt-3 sm:mt-5 sm:space-y-3 sm:pt-4">
							<ul class="space-y-1 font-mono text-[11px] text-ink sm:space-y-1.5 sm:text-xs">
								{#each workChapter.rhythmItems as item (item)}
									<li class="truncate sm:whitespace-normal">— {item}</li>
								{/each}
							</ul>
							<p class="hidden rounded-xl border border-line-dark bg-daylight px-3.5 py-2 font-mono text-[11px] font-medium text-ink sm:block">
								40-seat seafront coworking hub + private desk in all 31 bedrooms
							</p>
						</div>
					</div>

					<figure class="flex flex-col justify-between lg:col-span-6">
						<div class="relative pb-3 sm:pb-5">
							<div class="aspect-[16/9] overflow-hidden rounded-2xl bg-daylight-subtle sm:aspect-[16/10] lg:aspect-[4/4.2]">
								<enhanced:img
									src={coworkingDeskImg}
									alt="Sunlit remote workstation inside the dedicated seafront coworking space in Agaete"
									sizes="(min-width: 1024px) 580px, (min-width: 640px) 520px, 84vw"
									loading="lazy"
									decoding="async"
									class="exp-card-img h-full w-full object-cover"
								/>
							</div>
							<div class="exp-inset-img absolute right-2 bottom-0 w-28 overflow-hidden rounded-xl border-2 border-daylight-card bg-obsidian sm:right-3 sm:w-40 lg:w-44">
								<div class="aspect-[3/2]">
									<enhanced:img
										src={coworkingWorkshopImg}
										alt="Group workshop and talk inside the seafront coworking space"
										sizes="(min-width: 1024px) 260px, 36vw"
										loading="lazy"
										decoding="async"
										class="h-full w-full object-cover"
									/>
								</div>
							</div>
						</div>
						<figcaption class="mt-1.5 font-mono text-[10px] text-ink-muted sm:text-[11px]">
							Seafront coworking desks &amp; 40-person workshop room · Agaete
						</figcaption>
					</figure>
				</article>

				<!-- Card 2: Explore together -->
				<article
					id="exp-card-1"
					class={[
						'exp-horizontal-card grid w-[86vw] max-w-[370px] shrink-0 grid-cols-1 gap-4 rounded-3xl border bg-obsidian p-5 text-daylight transition-all duration-300 sm:w-[580px] sm:max-w-none sm:p-7 lg:w-[840px] lg:grid-cols-12 lg:gap-8 lg:p-10',
						activeIndex === 1
							? 'border-coral shadow-[0_20px_50px_-18px_rgba(255,90,38,0.35)]'
							: 'border-white/10 opacity-85 lg:scale-[0.985]'
					]}
				>
					<div class="flex flex-col justify-between lg:col-span-6">
						<div>
							<div class="flex items-center justify-between gap-2">
								<h3 class="text-2xl font-bold tracking-[-0.03em] text-daylight sm:text-3xl lg:text-4xl">
									{exploreChapter.title}
								</h3>
								<span
									class={[
										'rounded-full px-2.5 py-1 font-mono text-[10px] font-medium tracking-[0.05em] uppercase transition-colors sm:text-xs',
										activeIndex === 1 ? 'bg-coral text-obsidian' : 'bg-white/10 text-mist'
									]}
								>
									02 / ISLAND
								</span>
							</div>
							<p class="mt-2.5 text-sm leading-snug text-daylight/95 sm:mt-4 sm:text-base lg:mt-5 lg:text-lg lg:leading-relaxed">
								{exploreChapter.lead}
							</p>
							<p class="mt-2 line-clamp-3 text-xs leading-relaxed text-mist sm:line-clamp-none sm:text-sm">
								{exploreChapter.body}
							</p>
						</div>

						<ul class="mt-3 space-y-1 border-t border-white/15 pt-3 font-mono text-[11px] text-mist sm:mt-5 sm:space-y-1.5 sm:pt-4 sm:text-xs">
							{#each exploreChapter.rhythmItems as item (item)}
								<li class="truncate sm:whitespace-normal">— {item}</li>
							{/each}
						</ul>
					</div>

					<figure class="flex flex-col justify-between lg:col-span-6">
						<div class="relative pb-3 sm:pb-5">
							<div class="aspect-[16/9] overflow-hidden rounded-2xl bg-obsidian-elevated sm:aspect-[16/10] lg:aspect-[4/4.2]">
								<enhanced:img
									src={explorePoolsImg}
									alt="Group cooling off in the Las Salinas volcanic natural pools in Agaete"
									sizes="(min-width: 1024px) 580px, (min-width: 640px) 520px, 84vw"
									loading="lazy"
									decoding="async"
									class="exp-card-img h-full w-full object-cover"
								/>
							</div>
							<div class="exp-inset-img absolute right-2 bottom-0 w-28 overflow-hidden rounded-xl border-2 border-obsidian bg-obsidian-elevated sm:right-3 sm:w-36 lg:w-40">
								<div class="aspect-[4/3]">
									<enhanced:img
										src={exploreCoffeeImg}
										alt="Artisanal coffee tasting at a historic plantation in the Agaete Valley"
										sizes="(min-width: 1024px) 260px, 36vw"
										loading="lazy"
										decoding="async"
										class="h-full w-full object-cover"
									/>
								</div>
							</div>
						</div>
						<figcaption class="mt-1.5 font-mono text-[10px] text-mist sm:text-[11px]">
							Las Salinas natural pools (2 min walk) &amp; Agaete Valley coffee tasting
						</figcaption>
					</figure>
				</article>

				<!-- Card 3: Make memories together -->
				<article
					id="exp-card-2"
					class={[
						'exp-horizontal-card grid w-[86vw] max-w-[370px] shrink-0 grid-cols-1 gap-4 rounded-3xl border bg-daylight-card p-5 transition-all duration-300 sm:w-[580px] sm:max-w-none sm:p-7 lg:w-[840px] lg:grid-cols-12 lg:gap-8 lg:p-10',
						activeIndex === 2
							? 'border-coral shadow-[0_20px_50px_-18px_rgba(255,90,38,0.28)]'
							: 'border-line-dark opacity-85 lg:scale-[0.985]'
					]}
				>
					<div class="flex flex-col justify-between lg:order-2 lg:col-span-6">
						<div>
							<div class="flex items-center justify-between gap-2">
								<h3 class="text-2xl font-bold tracking-[-0.03em] text-ink sm:text-3xl lg:text-4xl">
									{memoriesChapter.title}
								</h3>
								<span
									class={[
										'rounded-full px-2.5 py-1 font-mono text-[10px] font-medium tracking-[0.05em] uppercase transition-colors sm:text-xs',
										activeIndex === 2 ? 'bg-coral text-obsidian' : 'bg-daylight-subtle text-ink-muted'
									]}
								>
									03 / EVENINGS
								</span>
							</div>
							<p class="mt-2.5 text-sm leading-snug font-medium text-ink sm:mt-4 sm:text-base lg:mt-5 lg:text-lg lg:leading-relaxed">
								{memoriesChapter.lead}
							</p>
							<p class="mt-2 line-clamp-3 text-xs leading-relaxed text-ink-muted sm:line-clamp-none sm:text-sm">
								{memoriesChapter.body}
							</p>
						</div>

						<ul class="mt-3 space-y-1 border-t border-line-dark pt-3 font-mono text-[11px] text-ink-muted sm:mt-5 sm:space-y-1.5 sm:pt-4 sm:text-xs">
							{#each memoriesChapter.rhythmItems as item (item)}
								<li class="truncate sm:whitespace-normal">— {item}</li>
							{/each}
						</ul>
					</div>

					<figure class="flex flex-col justify-between lg:order-1 lg:col-span-6">
						<div class="relative pb-3 sm:pb-5">
							<div class="aspect-[16/9] overflow-hidden rounded-2xl bg-obsidian sm:aspect-[16/10] lg:aspect-[4/4.2]">
								<enhanced:img
									src={memoriesSunsetImg}
									alt="Golden-hour music and sunset drinks on the coliving rooftop terrace"
									sizes="(min-width: 1024px) 580px, (min-width: 640px) 520px, 84vw"
									loading="lazy"
									decoding="async"
									class="exp-card-img h-full w-full object-cover"
								/>
							</div>
							<div class="exp-inset-img absolute right-2 bottom-0 w-28 overflow-hidden rounded-xl border-2 border-daylight-card bg-daylight-subtle sm:right-3 sm:w-36 lg:w-40">
								<div class="aspect-[4/3]">
									<enhanced:img
										src={memoriesDinnerImg}
										alt="Participants dining together around a long table inside the coliving"
										sizes="(min-width: 1024px) 260px, 36vw"
										loading="lazy"
										decoding="async"
										class="h-full w-full object-cover"
									/>
								</div>
							</div>
						</div>
						<figcaption class="mt-1.5 font-mono text-[10px] text-ink-muted sm:text-[11px]">
							Rooftop sunset sessions &amp; communal dinners · Puerto de las Nieves
						</figcaption>
					</figure>
				</article>
			</div>
		</div>
	</div>
</section>

<style>
	.no-scrollbar::-webkit-scrollbar {
		display: none;
	}
	.no-scrollbar {
		-ms-overflow-style: none;
		scrollbar-width: none;
	}

	.exp-card-img {
		transform: scale(calc(1.06 - var(--chapter-progress, 0) * 0.06));
		will-change: transform;
	}

	.exp-inset-img {
		transform: translate3d(0, calc((0.5 - var(--chapter-progress, 0.5)) * 10px), 0);
		will-change: transform;
	}

	@media (prefers-reduced-motion: reduce) {
		.exp-card-img,
		.exp-inset-img {
			transform: none !important;
			will-change: auto;
		}
	}
</style>
