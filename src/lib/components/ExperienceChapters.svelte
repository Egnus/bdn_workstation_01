<script lang="ts">
	import roqueNubloPhoto from '#lib/assets/photos/roque-nublo.jpg?enhanced';
	import tamadabaCliffsPhoto from '#lib/assets/photos/tamadaba-cliffs.jpg?enhanced';
	import tejedaSunsetPhoto from '#lib/assets/photos/tejeda-sunset.jpg?enhanced';
	import { hairline } from '#lib/actions/reveal';
	import { EXPERIENCE_CHAPTERS } from '#lib/data/workation';

	const [workChapter, exploreChapter, memoriesChapter] = EXPERIENCE_CHAPTERS;
	let activeChapter = $state(workChapter.id);

	function jumpToChapter(id: string) {
		activeChapter = id;
		document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
	}
</script>

<section
	id="experience"
	aria-labelledby="experience-heading"
	class="scroll-mt-16 bg-paper py-16 sm:py-24"
>
	<div class="mx-auto max-w-[1360px] px-4 sm:px-8 lg:px-12">
		<div use:hairline class="hairline-rule mb-12 h-px w-full bg-sand sm:mb-16" aria-hidden="true"></div>

		<div class="grid grid-cols-1 gap-8 pb-10 sm:pb-14 lg:grid-cols-12 lg:items-end">
			<div class="lg:col-span-7">
				<h2
					id="experience-heading"
					class="font-display text-[clamp(2.4rem,4.8vw,4rem)] leading-[1.02] tracking-[-0.02em] text-balance text-charcoal"
				>
					Seven days, shaped around three rhythms.
				</h2>
			</div>
			<div class="lg:col-span-5">
				<p class="max-w-[44ch] text-base leading-relaxed text-charcoal-muted">
					The week is deliberately uncrowded—clear focus hours when you need to ship, open
					afternoons for the island, and evenings that stay social without feeling scripted.
				</p>

				<div
					role="group"
					aria-label="Jump to experience chapter"
					class="mt-6 flex flex-wrap gap-2 border-t border-sand pt-4"
				>
					{#each EXPERIENCE_CHAPTERS as chapter (chapter.id)}
						<button
							type="button"
							onclick={() => jumpToChapter(chapter.id)}
							aria-pressed={activeChapter === chapter.id}
							class={[
								'min-h-[44px] border px-3.5 py-2 font-mono text-[11px] tracking-[0.06em] uppercase transition-colors',
								activeChapter === chapter.id
									? 'border-charcoal bg-charcoal text-paper'
									: 'border-sand bg-transparent text-charcoal-muted hover:border-charcoal hover:text-charcoal'
							]}
						>
							{chapter.numeral} · {chapter.title.replace('.', '')}
						</button>
					{/each}
				</div>
			</div>
		</div>

		<!-- Chapter I: Work together -->
		<article
			id={workChapter.id}
			class="grid scroll-mt-20 grid-cols-1 gap-8 border-t border-sand py-12 sm:py-16 lg:grid-cols-12 lg:gap-12"
		>
			<div class="hidden lg:col-span-2 lg:block">
				<span class="font-mono text-xs tracking-[0.08em] text-volcanic-deep uppercase">
					Chapter {workChapter.numeral}
				</span>
			</div>

			<div class="lg:col-span-5">
				<h3 class="font-display text-[clamp(2rem,3.4vw,3rem)] leading-[1.04] tracking-[-0.015em] text-charcoal">
					{workChapter.title}
				</h3>
				<p class="mt-2 font-mono text-xs tracking-[0.08em] text-volcanic-deep uppercase lg:hidden">
					Chapter {workChapter.numeral}
				</p>
				<p class="mt-4 max-w-[46ch] text-lg leading-relaxed text-charcoal">
					{workChapter.lead}
				</p>
				<p class="mt-4 max-w-[52ch] text-base leading-[1.7] text-charcoal-muted">
					{workChapter.body}
				</p>
			</div>

			<div class="flex flex-col justify-between border border-sand bg-paper-elevated p-6 sm:p-8 lg:col-span-5">
				<div>
					<p class="font-mono text-[11px] tracking-[0.08em] text-volcanic-deep uppercase">
						Coworking Direction (Interest Survey)
					</p>
					<ul class="mt-5 divide-y divide-sand/80">
						{#each workChapter.rhythmItems as item (item)}
							<li class="py-3.5 text-sm leading-relaxed text-charcoal first:pt-0 last:pb-0">
								{item}
							</li>
						{/each}
					</ul>
				</div>

				<p class="mt-6 border-t border-sand pt-4 font-mono text-[11px] leading-relaxed text-charcoal-muted">
					Placeholder notice: interior coworking photos and bandwidth tests will be added once a
					property is confirmed.
				</p>
			</div>
		</article>

		<!-- Chapter II: Explore together -->
		<article
			id={exploreChapter.id}
			class="grid scroll-mt-20 grid-cols-1 gap-8 border-t border-sand py-12 sm:py-16 lg:grid-cols-12 lg:gap-12"
		>
			<div class="hidden lg:col-span-2 lg:block">
				<span class="font-mono text-xs tracking-[0.08em] text-volcanic-deep uppercase">
					Chapter {exploreChapter.numeral}
				</span>
			</div>

			<div class="lg:col-span-4">
				<h3 class="font-display text-[clamp(2rem,3.4vw,3rem)] leading-[1.04] tracking-[-0.015em] text-charcoal">
					{exploreChapter.title}
				</h3>
				<p class="mt-2 font-mono text-xs tracking-[0.08em] text-volcanic-deep uppercase lg:hidden">
					Chapter {exploreChapter.numeral}
				</p>
				<p class="mt-4 max-w-[42ch] text-lg leading-relaxed text-charcoal">
					{exploreChapter.lead}
				</p>
				<p class="mt-4 max-w-[46ch] text-base leading-[1.7] text-charcoal-muted">
					{exploreChapter.body}
				</p>
				<ul class="mt-6 space-y-2.5 border-t border-sand pt-5 font-mono text-xs text-charcoal-muted">
					{#each exploreChapter.rhythmItems as item (item)}
						<li>— {item}</li>
					{/each}
				</ul>
			</div>

			<div class="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:col-span-6">
				<figure>
					<div class="aspect-[4/3] overflow-hidden bg-paper-inset">
						<enhanced:img
							src={roqueNubloPhoto}
							alt="Volcanic rock monoliths of Roque Nublo rising above Canary pine forest in Gran Canaria"
							sizes="(min-width: 1024px) 24vw, (min-width: 640px) 45vw, 94vw"
							loading="lazy"
							class="h-full w-full object-cover transition-transform duration-700 hover:scale-[1.02]"
						/>
					</div>
					<figcaption class="mt-2.5 font-mono text-[11px] tracking-[0.04em] text-charcoal-muted">
						Roque Nublo highlands · Gran Canaria
					</figcaption>
				</figure>

				<figure class="sm:mt-10">
					<div class="aspect-[4/3] overflow-hidden bg-paper-inset">
						<enhanced:img
							src={tamadabaCliffsPhoto}
							alt="Steep volcanic cliffs of Tamadaba dropping directly into the Atlantic Ocean"
							sizes="(min-width: 1024px) 24vw, (min-width: 640px) 45vw, 94vw"
							loading="lazy"
							class="h-full w-full object-cover transition-transform duration-700 hover:scale-[1.02]"
						/>
					</div>
					<figcaption class="mt-2.5 font-mono text-[11px] tracking-[0.04em] text-charcoal-muted">
						Tamadaba sea cliffs · Northwest coast
					</figcaption>
				</figure>
			</div>
		</article>

		<!-- Chapter III: Make memories together -->
		<article
			id={memoriesChapter.id}
			class="grid scroll-mt-20 grid-cols-1 gap-8 border-t border-sand pt-12 sm:pt-16 lg:grid-cols-12 lg:gap-12"
		>
			<div class="hidden lg:col-span-2 lg:block">
				<span class="font-mono text-xs tracking-[0.08em] text-volcanic-deep uppercase">
					Chapter {memoriesChapter.numeral}
				</span>
			</div>

			<div class="order-2 lg:order-2 lg:col-span-5">
				<figure>
					<div class="aspect-[3/2] overflow-hidden bg-charcoal">
						<enhanced:img
							src={tejedaSunsetPhoto}
							alt="Amber and clay sunset sky above the Caldera de Tejeda mountain ridges in Gran Canaria"
							sizes="(min-width: 1024px) 38vw, 94vw"
							loading="lazy"
							class="h-full w-full object-cover transition-transform duration-700 hover:scale-[1.02]"
						/>
					</div>
					<figcaption class="mt-2.5 font-mono text-[11px] tracking-[0.04em] text-charcoal-muted">
						Dusk over Caldera de Tejeda · Gran Canaria
					</figcaption>
				</figure>
			</div>

			<div class="order-1 lg:order-3 lg:col-span-5">
				<h3 class="font-display text-[clamp(2rem,3.4vw,3rem)] leading-[1.04] tracking-[-0.015em] text-charcoal">
					{memoriesChapter.title}
				</h3>
				<p class="mt-2 font-mono text-xs tracking-[0.08em] text-volcanic-deep uppercase lg:hidden">
					Chapter {memoriesChapter.numeral}
				</p>
				<p class="mt-4 max-w-[44ch] text-lg leading-relaxed text-charcoal">
					{memoriesChapter.lead}
				</p>
				<p class="mt-4 max-w-[48ch] text-base leading-[1.7] text-charcoal-muted">
					{memoriesChapter.body}
				</p>
				<ul class="mt-6 space-y-2.5 border-t border-sand pt-5 font-mono text-xs text-charcoal-muted">
					{#each memoriesChapter.rhythmItems as item (item)}
						<li>— {item}</li>
					{/each}
				</ul>
			</div>
		</article>
	</div>
</section>
