<script lang="ts">
	import { ArrowRight, MapPin } from '@lucide/svelte';
	import poolGroupImg from '#lib/assets/photos/venue/agaete-natural-pools-group.jpg?enhanced&w=640;384;240';
	import rooftopCliffsImg from '#lib/assets/photos/venue/rooftop-cliffs-sunbeds.jpg?enhanced&w=640;384;240';
	import groupDinnerImg from '#lib/assets/photos/venue/coliving-group-dinner.jpg?enhanced&w=640;384;240';
	import sunsetHikeImg from '#lib/assets/photos/venue/agaete-cliff-sunset-hike.jpg?enhanced&w=640;384;240';
	import { scrollToAnchor } from '#lib/actions/reveal';

	const constellations = [
		{
			tag: '01 · Natural Pools',
			caption: 'Las Salinas volcanic pools, 2 min walk',
			alt: 'Group relaxing beside the Las Salinas volcanic natural pools near Puerto de las Nieves, Agaete',
			img: poolGroupImg,
			aspect: 'aspect-square',
			speed: '-0.09',
			desktopClass: 'lg:top-0 lg:left-0 lg:w-36 xl:w-44'
		},
		{
			tag: '02 · Rooftop View',
			caption: 'Sunbeds facing the Tamadaba cliffs',
			alt: 'Rooftop terrace sun loungers overlooking the Tamadaba sea cliffs and Agaete harbor',
			img: rooftopCliffsImg,
			aspect: 'aspect-[4/3]',
			speed: '0.11',
			desktopClass: 'lg:top-2 lg:right-2 lg:w-40 xl:w-48'
		},
		{
			tag: '03 · Shared Table',
			caption: 'Long-table dinners inside the coliving',
			alt: 'Remote workers sharing a long-table communal dinner inside the coliving dining room',
			img: groupDinnerImg,
			aspect: 'aspect-[4/5]',
			speed: '0.09',
			desktopClass: 'lg:bottom-2 lg:left-4 lg:w-36 xl:w-44'
		},
		{
			tag: '04 · Coastal Trails',
			caption: 'Sunset hikes along the volcanic coast',
			alt: 'Group taking in golden-hour Atlantic views during a coastal sunset hike from Puerto de las Nieves',
			img: sunsetHikeImg,
			aspect: 'aspect-[4/3]',
			speed: '-0.11',
			desktopClass: 'lg:bottom-4 lg:right-0 lg:w-40 xl:w-48'
		}
	] as const;

	const venuePills = [
		'31 Private-Bath Rooms',
		'31 In-Room Desks',
		'40-Seat Seafront Coworking',
		'Cliff-View Rooftop & BBQ'
	] as const;

	function goToVenue(event: MouseEvent) {
		event.preventDefault();
		scrollToAnchor('#venue');
	}
</script>

<section
	id="idea"
	aria-labelledby="idea-heading"
	class="relative scroll-mt-24 overflow-hidden bg-daylight py-20 text-ink sm:scroll-mt-28 sm:py-28 lg:py-36"
>
	<div class="mx-auto max-w-[1320px] px-4 sm:px-6 lg:px-10">
		<!-- Locomotive Scroll Photo Galaxy (desktop parallax stage) -->
		<div class="relative flex flex-col justify-center py-8 lg:min-h-[500px] lg:py-24">
			{#each constellations as card (card.tag)}
				<figure
					data-scroll
					data-scroll-speed={card.speed}
					class={[
						'pointer-events-none hidden lg:block lg:absolute',
						card.desktopClass
					]}
				>
					<div class={['overflow-hidden rounded-2xl border border-line-dark bg-daylight-card', card.aspect]}>
						<enhanced:img
							src={card.img}
							alt={card.alt}
							sizes="(min-width: 1024px) 192px, 46vw"
							loading="lazy"
							decoding="async"
							class="h-full w-full object-cover"
						/>
					</div>
					<figcaption class="mt-2 font-mono text-[10px] leading-tight tracking-[0.04em] text-ink-muted">
						<span class="block font-medium text-ink uppercase">{card.tag}</span>
						<span>{card.caption}</span>
					</figcaption>
				</figure>
			{/each}

			<div class="relative z-10 mx-auto max-w-[600px] text-center">
				<h2
					id="idea-heading"
					class="text-[clamp(2.35rem,4.6vw,4rem)] leading-[0.98] font-bold tracking-[-0.04em] text-balance text-ink"
				>
					Taking Barcelona Digital Nomads on the road for seven unhurried days.
				</h2>

				<p class="mx-auto mt-6 max-w-[52ch] text-base leading-relaxed text-ink-muted sm:text-lg">
					Built by our community—not an anonymous commercial tour. Familiar faces from Barcelona
					meetups alongside new members looking for focused coastal workdays and genuine island
					time in Puerto de las Nieves.
				</p>
			</div>

			<!-- Mobile 2x2 photo mosaic -->
			<div class="mt-10 grid grid-cols-2 gap-3 lg:hidden">
				{#each constellations as card (card.tag)}
					<figure class="overflow-hidden rounded-xl border border-line-dark bg-daylight-card">
						<div class="aspect-[4/3] overflow-hidden">
							<enhanced:img
								src={card.img}
								alt={card.alt}
								sizes="(min-width: 1024px) 192px, 46vw"
								loading="lazy"
								decoding="async"
								class="h-full w-full object-cover"
							/>
						</div>
						<figcaption class="p-2.5">
							<span class="block font-mono text-[10px] font-medium tracking-[0.04em] text-ink uppercase">
								{card.tag}
							</span>
							<span class="mt-0.5 block text-[11px] leading-snug text-ink-muted">
								{card.caption}
							</span>
						</figcaption>
					</figure>
				{/each}
			</div>
		</div>

		<!-- Narrative + Seafront Coliving & Workspace Takeover Overview -->
		<div class="mt-12 grid grid-cols-1 gap-8 border-t border-line-dark pt-12 lg:mt-24 lg:grid-cols-12 lg:gap-12">
			<div class="lg:col-span-6">
				<p class="max-w-[54ch] text-lg leading-relaxed font-medium text-ink">
					Most remote workweeks blur into the same café tables and Slack threads. BDN Workation 001
					trades January routine in Barcelona for one seafront coliving base in Puerto de las
					Nieves, Agaete.
				</p>
				<p class="mt-4 max-w-[54ch] text-base leading-relaxed text-ink-muted">
					We are gauging community interest first to confirm group size and room preferences. Once
					enough people raise their hand in the survey, we will run an online info session and open
					a dedicated WhatsApp group to lock in dates and exact property details together.
				</p>
			</div>

			<div class="lg:col-span-6">
				<aside
					aria-label="Retreat venue overview"
					class="rounded-2xl border border-line-dark bg-daylight-card p-6 sm:p-8"
				>
					<div class="flex flex-wrap items-center justify-between gap-2">
						<span class="inline-flex items-center gap-1.5 font-mono text-[11px] font-medium tracking-[0.06em] text-ink uppercase">
							<MapPin class="size-3.5 text-coral" aria-hidden="true" />
							Full-Building Retreat Venue · Puerto de las Nieves, Agaete
						</span>
						<span class="inline-flex items-center gap-1.5 rounded-full bg-obsidian px-3 py-1 font-mono text-[11px] text-daylight">
							<span class="size-1.5 rounded-full bg-coral" aria-hidden="true"></span>
							Northwest Coast
						</span>
					</div>

					<p class="mt-3 text-sm leading-relaxed text-ink-muted">
						Set in a quiet white-and-blue fishing port steps from natural volcanic pools, paired
						with a dedicated 40-seat seafront coworking hub. Exact property name and street address
						are shared privately with confirmed participants.
					</p>

					<ul class="mt-5 flex flex-wrap gap-2">
						{#each venuePills as pill (pill)}
							<li class="rounded-full border border-line-dark bg-daylight px-3 py-1.5 font-mono text-[11px] font-medium text-ink">
								{pill}
							</li>
						{/each}
					</ul>

					<div class="mt-5 border-t border-line-dark pt-4">
						<a
							href="#venue"
							onclick={goToVenue}
							class="inline-flex min-h-[44px] items-center gap-2 font-mono text-xs font-medium tracking-[0.04em] text-ink uppercase transition-colors hover:text-coral-hover"
						>
							<span>Explore the rooms &amp; spaces</span>
							<ArrowRight class="size-4" aria-hidden="true" />
						</a>
					</div>
				</aside>
			</div>
		</div>
	</div>
</section>
