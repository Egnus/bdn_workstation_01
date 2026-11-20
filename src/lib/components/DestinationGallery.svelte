<script lang="ts">
	import { Compass, MapPin } from '@lucide/svelte';
	import poolsAerialImg from '#lib/assets/photos/venue/agaete-coastal-pools-aerial.jpg?enhanced&w=1440;960;600';
	import fishermanHouseImg from '#lib/assets/photos/venue/puerto-nieves-fisherman-house.jpg?enhanced&w=1080;720;480';
	import valleyYogaImg from '#lib/assets/photos/venue/rooftop-sunrise-yoga.jpg?enhanced&w=960;720;480';
	import villageSunsetImg from '#lib/assets/photos/venue/agaete-village-sunset.jpg?enhanced&w=1440;960;600';
	import { scrollToAnchor } from '#lib/actions/reveal';
	import { NEIGHBORHOOD_DISTANCES } from '#lib/data/workation';

	const spots = [
		{
			id: 'pools',
			label: 'Las Salinas Pools',
			title: 'Las Salinas Natural Pools & Tamadaba Cliffs',
			meta: 'Puerto de las Nieves · 2 min walk · 22°C',
			note: 'Volcanic ocean pools carved into the northwest coast right below the dramatic Tamadaba massif.'
		},
		{
			id: 'port',
			label: 'Fishing Port',
			title: 'Puerto de las Nieves Fishing Port',
			meta: 'Agaete Coast · 4 min walk',
			note: 'Whitewashed maritime architecture, fresh catch restaurants by the old pier, and salty Atlantic air.'
		},
		{
			id: 'valley',
			label: 'Agaete Valley',
			title: 'Agaete Valley & Cliffside Mornings',
			meta: 'Agaete Valley · 10 min drive',
			note: "Lush sub-tropical valley famous for Europe's historic coffee plantations, volcanic vineyards, and mountain trails."
		},
		{
			id: 'sunset',
			label: 'Atlantic Sunset',
			title: 'Golden Hour Over the Atlantic',
			meta: 'Northwest Horizon · Sunset',
			note: "Unobstructed west-facing sunsets from the village promenade and rooftop terrace, looking toward Tenerife's Mount Teide on clear days."
		}
	] as const;

	let activeSpot = $state<string>('pools');

	function focusSpot(id: string) {
		activeSpot = id;
		scrollToAnchor(`#spot-${id}`);
	}
</script>

<section
	id="destination"
	aria-labelledby="destination-heading"
	class="scroll-mt-24 bg-daylight py-20 pb-28 text-ink sm:scroll-mt-28 sm:py-28 sm:pb-36"
>
	<div class="mx-auto max-w-[1320px] px-4 sm:px-6 lg:px-10">
		<div class="grid grid-cols-1 gap-8 border-b border-line-dark pb-10 lg:grid-cols-12 lg:items-end">
			<div class="lg:col-span-7">
				<h2
					id="destination-heading"
					class="text-[clamp(2.4rem,5vw,4.25rem)] leading-[0.96] font-bold tracking-[-0.04em] text-balance text-ink"
				>
					Puerto de las Nieves, built for January sun and Atlantic cliffs.
				</h2>
			</div>
			<div class="lg:col-span-5">
				<p class="text-base leading-relaxed text-ink-muted">
					Based in the northwest fishing port of Agaete: sheltered volcanic natural pools two
					minutes on foot, coffee valleys inland, and uninterrupted western sunsets.
				</p>

				<div role="group" aria-label="Focus destination scene" class="mt-5 flex flex-wrap gap-2">
					{#each spots as spot (spot.id)}
						<button
							type="button"
							onclick={() => focusSpot(spot.id)}
							aria-pressed={activeSpot === spot.id}
							class={[
								'min-h-[44px] rounded-full border px-3.5 py-2 font-mono text-[11px] font-medium uppercase transition-colors',
								activeSpot === spot.id
									? 'border-obsidian bg-obsidian text-daylight'
									: 'border-line-dark bg-transparent text-ink-muted hover:border-ink hover:text-ink'
							]}
						>
							{spot.label}
						</button>
					{/each}
				</div>
			</div>
		</div>

		<!-- Editorial 2-Row Bento (7 + 5, then 5 + 7) -->
		<div class="mt-10 grid grid-cols-1 gap-6 md:grid-cols-12">
			<figure
				id="spot-pools"
				data-scroll
				data-scroll-speed="0.05"
				class="scroll-mt-24 sm:scroll-mt-28 md:col-span-7"
			>
				<div
					data-scroll
					data-scroll-css-progress
					class={[
						'aspect-[16/10] overflow-hidden rounded-2xl border bg-daylight-subtle transition-colors duration-300 md:h-[400px] lg:h-[440px] md:aspect-auto',
						activeSpot === 'pools' ? 'border-coral' : 'border-transparent'
					]}
				>
					<enhanced:img
						src={poolsAerialImg}
						alt="Aerial view of Las Salinas volcanic natural pools, Puerto de las Nieves and Tamadaba sea cliffs"
						sizes="(min-width: 768px) 55vw, 94vw"
						loading="lazy"
						decoding="async"
						class="loco-scale-img h-full w-full object-cover"
					/>
				</div>
				<figcaption class="mt-3 border-t border-line-dark pt-2.5">
					<div class="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-4">
						<span class="font-mono text-xs font-medium text-ink uppercase">
							{spots[0].title}
						</span>
						<span class="font-mono text-[11px] text-coral uppercase">{spots[0].meta}</span>
					</div>
					<p class="mt-1 text-xs leading-relaxed text-ink-muted">{spots[0].note}</p>
				</figcaption>
			</figure>

			<figure
				id="spot-port"
				data-scroll
				data-scroll-speed="0.08"
				class="scroll-mt-24 sm:scroll-mt-28 md:col-span-5"
			>
				<div
					data-scroll
					data-scroll-css-progress
					class={[
						'aspect-[4/3] overflow-hidden rounded-2xl border bg-daylight-subtle transition-colors duration-300 md:h-[400px] lg:h-[440px] md:aspect-auto',
						activeSpot === 'port' ? 'border-coral' : 'border-transparent'
					]}
				>
					<enhanced:img
						src={fishermanHouseImg}
						alt="Traditional blue and white maritime house along the seafront in Puerto de las Nieves"
						sizes="(min-width: 768px) 38vw, 94vw"
						loading="lazy"
						decoding="async"
						class="loco-scale-img h-full w-full object-cover"
					/>
				</div>
				<figcaption class="mt-3 border-t border-line-dark pt-2.5">
					<div class="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-4">
						<span class="font-mono text-xs font-medium text-ink uppercase">
							{spots[1].title}
						</span>
						<span class="font-mono text-[11px] text-coral uppercase">{spots[1].meta}</span>
					</div>
					<p class="mt-1 text-xs leading-relaxed text-ink-muted">{spots[1].note}</p>
				</figcaption>
			</figure>

			<figure
				id="spot-valley"
				data-scroll
				data-scroll-speed="0.03"
				class="scroll-mt-24 sm:scroll-mt-28 md:col-span-5"
			>
				<div
					class={[
						'aspect-[16/10] overflow-hidden rounded-2xl border bg-daylight-subtle transition-colors duration-300 md:h-[360px] lg:h-[400px] md:aspect-auto',
						activeSpot === 'valley' ? 'border-coral' : 'border-transparent'
					]}
				>
					<enhanced:img
						src={valleyYogaImg}
						alt="Morning yoga session overlooking the green ridges of the Agaete Valley"
						sizes="(min-width: 768px) 38vw, 94vw"
						loading="lazy"
						decoding="async"
						class="h-full w-full object-cover"
					/>
				</div>
				<figcaption class="mt-3 border-t border-line-dark pt-2.5">
					<div class="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-4">
						<span class="font-mono text-xs font-medium text-ink uppercase">
							{spots[2].title}
						</span>
						<span class="font-mono text-[11px] text-coral uppercase">{spots[2].meta}</span>
					</div>
					<p class="mt-1 text-xs leading-relaxed text-ink-muted">{spots[2].note}</p>
				</figcaption>
			</figure>

			<figure
				id="spot-sunset"
				data-scroll
				data-scroll-speed="0.06"
				class="scroll-mt-24 sm:scroll-mt-28 md:col-span-7"
			>
				<div
					data-scroll
					data-scroll-css-progress
					class={[
						'aspect-[16/10] overflow-hidden rounded-2xl border bg-daylight-subtle transition-colors duration-300 md:h-[360px] lg:h-[400px] md:aspect-auto',
						activeSpot === 'sunset' ? 'border-coral' : 'border-transparent'
					]}
				>
					<enhanced:img
						src={villageSunsetImg}
						alt="Golden Atlantic sunset glowing over the whitewashed houses of Agaete harbor"
						sizes="(min-width: 768px) 55vw, 94vw"
						loading="lazy"
						decoding="async"
						class="loco-scale-img h-full w-full object-cover"
					/>
				</div>
				<figcaption class="mt-3 border-t border-line-dark pt-2.5">
					<div class="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-4">
						<span class="font-mono text-xs font-medium text-ink uppercase">
							{spots[3].title}
						</span>
						<span class="font-mono text-[11px] text-coral uppercase">{spots[3].meta}</span>
					</div>
					<p class="mt-1 text-xs leading-relaxed text-ink-muted">{spots[3].note}</p>
				</figcaption>
			</figure>
		</div>

		<!-- Around the Neighborhood · Walking & Island Distances -->
		<div class="mt-12 rounded-2xl border border-line-dark bg-daylight-card p-6 sm:p-8">
			<div class="flex flex-col gap-2 border-b border-line-dark pb-4 sm:flex-row sm:items-center sm:justify-between">
				<div class="flex items-center gap-2">
					<Compass class="size-4 text-coral" aria-hidden="true" />
					<h3 class="font-mono text-xs font-medium tracking-[0.06em] text-ink uppercase">
						Around the neighborhood · Walking &amp; island distances
					</h3>
				</div>
				<span class="inline-flex items-center gap-1.5 font-mono text-[11px] text-ink-muted">
					<MapPin class="size-3.5 text-coral" aria-hidden="true" />
					Puerto de las Nieves · Agaete
				</span>
			</div>

			<div class="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
				{#each NEIGHBORHOOD_DISTANCES as spot (spot.place)}
					<div class="rounded-xl border border-line-dark bg-daylight p-4">
						<div class="flex items-center justify-between gap-2">
							<span class="text-sm font-semibold text-ink">{spot.place}</span>
							<span class="shrink-0 rounded-full bg-obsidian px-2.5 py-1 font-mono text-[10px] font-medium text-daylight uppercase tabular-nums">
								{spot.distance}
							</span>
						</div>
						<p class="mt-1.5 text-xs leading-relaxed text-ink-muted">{spot.note}</p>
					</div>
				{/each}
			</div>
		</div>
	</div>
</section>
