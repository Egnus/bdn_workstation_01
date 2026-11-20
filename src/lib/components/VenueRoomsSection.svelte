<script lang="ts">
	import {
		ArrowRight,
		Check,
		ChevronLeft,
		ChevronRight,
		Compass,
		MapPin,
		Sparkles
	} from '@lucide/svelte';
	import type { Picture } from '@sveltejs/enhanced-img';
	import roomSharedTwinImg from '#lib/assets/photos/venue/room-shared-twin.jpg?enhanced&w=1360;900;560;320';
	import roomPrivateDoubleImg from '#lib/assets/photos/venue/room-private-double.jpg?enhanced&w=1360;900;560;320';
	import roomBathroomImg from '#lib/assets/photos/venue/room-private-bathroom.jpg?enhanced&w=1360;900;560;320';
	import rooftopCliffsImg from '#lib/assets/photos/venue/rooftop-cliffs-sunbeds.jpg?enhanced&w=1360;900;560;320';
	import rooftopPergolaImg from '#lib/assets/photos/venue/rooftop-pergola-chillout.jpg?enhanced&w=1360;900;560;320';
	import rooftopBbqImg from '#lib/assets/photos/venue/rooftop-bbq-grill.jpg?enhanced&w=1360;900;560;320';
	import colivingKitchenImg from '#lib/assets/photos/venue/coliving-communal-kitchen.jpg?enhanced&w=1360;900;560;320';
	import colivingLoungeImg from '#lib/assets/photos/venue/coliving-living-lounge.jpg?enhanced&w=1360;900;560;320';
	import coworkingWorkshopImg from '#lib/assets/photos/venue/coworking-workshop-session.jpg?enhanced&w=1360;900;560;320';
	import coworkingDeskImg from '#lib/assets/photos/venue/coworking-open-desk.jpg?enhanced&w=1360;900;560;320';
	import coworkingMeetingImg from '#lib/assets/photos/venue/coworking-meeting-room.jpg?enhanced&w=1360;900;560;320';
	import { scrollToAnchor } from '#lib/actions/reveal';
	import { INCLUDED_SERVICES, VENUE_STATS } from '#lib/data/workation';

	interface MediaFrame {
		src: Picture;
		label: string;
		alt: string;
		caption: string;
	}

	interface SpaceMode {
		id: string;
		index: string;
		tabLabel: string;
		priceTag: string;
		title: string;
		tagline: string;
		description: string;
		specs: string[];
		gallery: MediaFrame[];
	}

	const spaces: SpaceMode[] = [
		{
			id: 'shared-twin',
			index: '01',
			tabLabel: 'Shared Twin',
			priceTag: '€599 indicative',
			title: 'Shared Twin Room',
			tagline: 'Sociable comfort with your own private workspace',
			description:
				'Share a twin room with one fellow BDN member while keeping a comfortable single bed, natural light or balcony access, a dedicated desk and chair inside the room, and your own private en-suite bathroom.',
			specs: [
				'2 Single Beds',
				'Private En-Suite Bathroom',
				'Personal Desk & Chair',
				'Balcony / Natural Daylight',
				'Weekly Cleaning, Linen & Towels'
			],
			gallery: [
				{
					src: roomSharedTwinImg,
					label: 'Twin Beds & Desk',
					alt: 'Bright shared twin bedroom with two single beds, personal desk and coastal balcony light',
					caption: 'Two single beds paired with a personal in-room workstation & natural light'
				},
				{
					src: roomBathroomImg,
					label: 'En-Suite Bathroom',
					alt: 'Clean modern private en-suite bathroom with glass-enclosed walk-in shower',
					caption: 'Private en-suite bathroom with walk-in shower included in all 31 bedrooms'
				},
				{
					src: rooftopPergolaImg,
					label: 'Rooftop Pergolas',
					alt: 'Shaded wooden pergola chill-out beds on the coliving rooftop terrace',
					caption: 'Open upstairs access to shaded rooftop daybeds & golden-hour loungers'
				}
			]
		},
		{
			id: 'private-double',
			index: '02',
			tabLabel: 'Private Double',
			priceTag: '€749 indicative',
			title: 'Private Double Room',
			tagline: 'Full solo privacy when you want to recharge completely',
			description:
				'Close your own door whenever you want quiet call privacy or an early night—equipped with a double bed for single occupancy, exterior or courtyard daylight, a personal in-room desk, and an en-suite bathroom.',
			specs: [
				'1 Double Bed (Solo Use)',
				'Private En-Suite Bathroom',
				'Personal Desk & Chair',
				'Exterior / Patio View',
				'Weekly Cleaning, Linen & Towels'
			],
			gallery: [
				{
					src: roomPrivateDoubleImg,
					label: 'Private Double Bed',
					alt: 'Private double bedroom with coastal blue headboard and bright exterior windows',
					caption: 'Private solo-occupancy double bedroom with tranquil daylight & storage'
				},
				{
					src: roomBathroomImg,
					label: 'En-Suite Bathroom',
					alt: 'Modern private bathroom with glass shower inside the bedroom suite',
					caption: 'Private en-suite bathroom—no queue for morning showers before standups'
				},
				{
					src: colivingLoungeImg,
					label: 'Living Lounge',
					alt: 'Indoor coliving lounge with communal sofas for casual chats',
					caption: 'Quiet bedroom upstairs, friendly shared lounge downstairs whenever you want company'
				}
			]
		},
		{
			id: 'rooftop-commons',
			index: '03',
			tabLabel: 'Rooftop & Commons',
			priceTag: 'All residents',
			title: 'Rooftop & Common Spaces',
			tagline: 'Sun-drenched rooftop facing Tamadaba, open kitchen & dining halls',
			description:
				'Spanning panoramic sea-cliff rooftop loungers, shaded wooden pergolas, a rooftop barbecue zone, an open dual-oven communal kitchen, and cozy indoor sofas—designed so spontaneous dinners feel effortless.',
			specs: [
				'Panoramic Cliff & Harbor Rooftop',
				'Shaded Daybeds & Pergolas',
				'Rooftop Barbecue & Outdoor Dining',
				'Fully Equipped Communal Kitchen',
				'Indoor Living Lounge & Group Dining Table'
			],
			gallery: [
				{
					src: rooftopCliffsImg,
					label: 'Cliff & Harbor Rooftop',
					alt: 'Rooftop terrace sunbeds facing the dramatic Tamadaba cliffs and Agaete port',
					caption: 'Expansive rooftop loungers overlooking the Tamadaba cliffs and fishing port'
				},
				{
					src: rooftopPergolaImg,
					label: 'Shaded Pergola',
					alt: 'Wooden shaded pergola lounge with outdoor cushioned beds on the rooftop',
					caption: 'Shaded pergola beds for casual afternoon laptop hours or sunset wind-downs'
				},
				{
					src: colivingKitchenImg,
					label: 'Communal Kitchen',
					alt: 'Spacious open communal kitchen equipped with dual ovens and prep counters',
					caption: 'Fully equipped open kitchen built for breakfast routines & group cooking nights'
				},
				{
					src: rooftopBbqImg,
					label: 'Rooftop BBQ',
					alt: 'Friends grilling dinner around the rooftop barbecue as evening settles',
					caption: 'Rooftop barbecue terrace for Friday sunset grilling under Atlantic skies'
				}
			]
		},
		{
			id: 'seafront-coworking',
			index: '04',
			tabLabel: 'Seafront Coworking',
			priceTag: 'Up to 40 seats',
			title: 'Dedicated Seafront Coworking',
			tagline: 'Built for deep remote focus, group workshops & ocean-breeze calls',
			description:
				'Steps from the coliving, our dedicated coastal coworking space hosts up to 40 remote workers across bright desk zones, a closed 10-seat acoustic meeting room, a podcast room, an indoor pallet lounge, and a covered terrace by the ocean.',
			specs: [
				'Open Space for up to 40 People',
				'10-Seat Private Meeting Room',
				'Dedicated Podcast Room',
				'Covered Seafront Outdoor Terrace',
				'High-Speed Fiber Wi-Fi & Specialty Coffee'
			],
			gallery: [
				{
					src: coworkingWorkshopImg,
					label: '40-Seat Main Hub',
					alt: 'Bright seafront coworking space hosting a remote founder talk and workshop',
					caption: 'Spacious seafront coworking room built for deep focus, skill-shares & talks'
				},
				{
					src: coworkingDeskImg,
					label: 'Desks & Pallet Lounge',
					alt: 'Focused desk area with yellow pallet sofa chill zone in the background',
					caption: 'Ergonomic work tables paired with an indoor yellow pallet sofa break zone'
				},
				{
					src: coworkingMeetingImg,
					label: '10-Seat Meeting Room',
					alt: 'Glass-walled 10-seat acoustic meeting room decorated with coastal photography',
					caption: 'Dedicated 10-seat enclosed meeting room for client workshops & syncs'
				}
			]
		}
	];

	const roomComparisons = [
		{
			id: 'shared-twin' as const,
			name: 'Shared Twin Room',
			price: '€599',
			period: '7 days · indicative',
			occupancy: '2 participants · 2 single beds',
			summary: 'Best if you want to lower trip cost and share a coastal base with one fellow BDN member.',
			highlights: [
				'Personal desk & chair in-room',
				'Private en-suite bathroom',
				'Full seafront coworking access'
			]
		},
		{
			id: 'private-double' as const,
			name: 'Private Double Room',
			price: '€749',
			period: '7 days · indicative',
			occupancy: 'Solo occupancy · 1 double bed',
			summary: 'Best if you take frequent late/early calls or simply love shutting your own door at night.',
			highlights: [
				'Private solo double bedroom',
				'Private en-suite bathroom + desk',
				'Full seafront coworking access'
			]
		}
	];

	let activeSpaceIdx = $state(0);
	let activeMediaIdx = $state(0);
	let preferredTier = $state<'shared-twin' | 'private-double'>('shared-twin');
	let sectionEl = $state<HTMLElement | null>(null);
	let scrollProgress = $state(0.35);
	let touchStartX = $state<number | null>(null);

	let activeSpace = $derived(spaces[activeSpaceIdx]);
	let activeMedia = $derived(activeSpace.gallery[activeMediaIdx] ?? activeSpace.gallery[0]);

	function selectSpace(idx: number) {
		const clamped = (idx + spaces.length) % spaces.length;
		activeSpaceIdx = clamped;
		activeMediaIdx = 0;
		const id = spaces[clamped]?.id;
		if (id === 'shared-twin' || id === 'private-double') {
			preferredTier = id;
		}
	}

	function stepSpace(delta: number) {
		selectSpace(activeSpaceIdx + delta);
	}

	function chooseRoomPreference(tier: 'shared-twin' | 'private-double') {
		preferredTier = tier;
		const spaceIndex = spaces.findIndex((s) => s.id === tier);
		if (spaceIndex !== -1) {
			activeSpaceIdx = spaceIndex;
			activeMediaIdx = 0;
		}
	}

	function jumpToInterest(event: MouseEvent, tier: 'shared-twin' | 'private-double') {
		event.preventDefault();
		chooseRoomPreference(tier);
		scrollToAnchor('#interest');
	}

	function handleStageTouchStart(event: TouchEvent) {
		touchStartX = event.changedTouches[0]?.clientX ?? null;
	}

	function handleStageTouchEnd(event: TouchEvent) {
		if (touchStartX === null) return;
		const endX = event.changedTouches[0]?.clientX ?? touchStartX;
		const diff = endX - touchStartX;
		touchStartX = null;
		if (Math.abs(diff) < 42) return;
		if (diff < 0) {
			stepSpace(1);
		} else {
			stepSpace(-1);
		}
	}

	$effect(() => {
		if (!sectionEl) return;
		const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
		if (reducedMotion) {
			scrollProgress = 0.5;
			return;
		}

		let frameId = 0;
		const updateProgress = () => {
			frameId = 0;
			if (!sectionEl) return;
			const rect = sectionEl.getBoundingClientRect();
			const vh = window.innerHeight || 800;
			const raw = (vh - rect.top) / (vh + rect.height);
			scrollProgress = Math.min(1, Math.max(0, raw));
		};

		const onScrollOrResize = () => {
			if (!frameId) {
				frameId = requestAnimationFrame(updateProgress);
			}
		};

		updateProgress();
		window.addEventListener('scroll', onScrollOrResize, { passive: true });
		window.addEventListener('resize', onScrollOrResize, { passive: true });
		return () => {
			window.removeEventListener('scroll', onScrollOrResize);
			window.removeEventListener('resize', onScrollOrResize);
			if (frameId) cancelAnimationFrame(frameId);
		};
	});
</script>

<section
	bind:this={sectionEl}
	id="venue"
	aria-labelledby="venue-heading"
	style:--venue-p={scrollProgress}
	class="relative z-10 scroll-mt-24 overflow-hidden rounded-t-[28px] bg-obsidian py-20 text-daylight sm:scroll-mt-28 sm:rounded-t-[44px] sm:py-28"
>
	<div class="mx-auto max-w-[1320px] px-4 sm:px-6 lg:px-10">
		<!-- Section Header -->
		<div class="grid grid-cols-1 gap-6 border-b border-white/15 pb-10 lg:grid-cols-12 lg:items-end">
			<div class="lg:col-span-7">
				<h2
					id="venue-heading"
					class="text-[clamp(2.4rem,5vw,4.25rem)] leading-[0.96] font-bold tracking-[-0.04em] text-balance text-daylight"
				>
					31 en-suite rooms. One seafront coworking hub.
				</h2>
			</div>

			<div class="lg:col-span-5">
				<div class="inline-flex items-center gap-2 rounded-full border border-white/15 bg-obsidian-elevated px-3.5 py-1.5 font-mono text-[11px] tracking-[0.05em] text-mist uppercase">
					<MapPin class="size-3.5 text-coral" aria-hidden="true" />
					<span>03B · Puerto de las Nieves, Agaete</span>
				</div>
				<p class="mt-3 text-base leading-relaxed text-mist">
					Full-building coastal coliving takeover paired with a dedicated 40-seat coworking space steps
					away. Explore the room setups, rooftop, and workspace interactively below.
				</p>
			</div>
		</div>

		<!-- Architectural 4-Stat Strip -->
		<dl class="mt-8 grid grid-cols-2 divide-y divide-white/10 overflow-hidden rounded-2xl border border-white/15 bg-obsidian-elevated sm:grid-cols-4 sm:divide-x sm:divide-y-0">
			{#each VENUE_STATS as stat (stat.label)}
				<div class="p-5 sm:p-6">
					<dt class="font-mono text-[11px] tracking-[0.06em] text-mist uppercase">
						{stat.label}
					</dt>
					<dd class="mt-1.5 flex items-baseline gap-2">
						<span class="text-3xl font-bold tracking-[-0.03em] text-daylight tabular-nums sm:text-4xl">
							{stat.value}
						</span>
					</dd>
					<p class="mt-1 text-xs text-mist">{stat.detail}</p>
				</div>
			{/each}
		</dl>

		<!-- Interactive Space Explorer (Desktop + Mobile Touch & Scroll-Reactive) -->
		<div class="mt-10 overflow-hidden rounded-3xl border border-white/15 bg-obsidian-elevated">
			<!-- Scroll-driven Coral Progress Hairline -->
			<div class="h-1 w-full bg-white/10" aria-hidden="true">
				<div
					class="venue-progress-fill h-full origin-left bg-coral"
					style="transform: scaleX({Math.max(0.08, scrollProgress)})"
				></div>
			</div>

			<!-- Space Mode Pill Bar + Prev/Next Controls -->
			<div class="flex flex-col gap-3 border-b border-white/15 px-4 py-4 sm:px-6 lg:flex-row lg:items-center lg:justify-between">
				<div
					role="tablist"
					aria-label="Explore coliving and coworking spaces"
					class="flex gap-2 overflow-x-auto pb-1 sm:flex-wrap sm:overflow-visible sm:pb-0"
				>
					{#each spaces as space, idx (space.id)}
						<button
							type="button"
							role="tab"
							aria-selected={activeSpaceIdx === idx}
							aria-controls="venue-space-panel"
							onclick={() => selectSpace(idx)}
							class={[
								'inline-flex min-h-[44px] shrink-0 items-center gap-2 rounded-full border px-4 py-2 font-mono text-[11px] font-medium tracking-[0.04em] uppercase transition-all',
								activeSpaceIdx === idx
									? 'border-coral bg-coral text-obsidian'
									: 'border-white/15 bg-obsidian text-mist hover:border-white/40 hover:text-daylight'
							]}
						>
							<span class="opacity-75">{space.index}</span>
							<span>{space.tabLabel}</span>
						</button>
					{/each}
				</div>

				<div class="flex items-center justify-between gap-3 lg:justify-end">
					<span class="font-mono text-[11px] tracking-[0.06em] text-mist uppercase tabular-nums">
						{activeSpace.index} / 0{spaces.length} · Swipe or tap
					</span>
					<div class="flex items-center gap-1.5">
						<button
							type="button"
							onclick={() => stepSpace(-1)}
							aria-label="Previous space"
							class="inline-flex size-[44px] items-center justify-center rounded-full border border-white/15 text-daylight transition-colors hover:border-coral hover:text-coral"
						>
							<ChevronLeft class="size-4" aria-hidden="true" />
						</button>
						<button
							type="button"
							onclick={() => stepSpace(1)}
							aria-label="Next space"
							class="inline-flex size-[44px] items-center justify-center rounded-full border border-white/15 text-daylight transition-colors hover:border-coral hover:text-coral"
						>
							<ChevronRight class="size-4" aria-hidden="true" />
						</button>
					</div>
				</div>
			</div>

			<!-- Active Space Panel -->
			<div
				id="venue-space-panel"
				role="tabpanel"
				tabindex={0}
				aria-label={activeSpace.title}
				ontouchstart={handleStageTouchStart}
				ontouchend={handleStageTouchEnd}
				class="grid grid-cols-1 gap-8 p-4 sm:p-6 lg:grid-cols-12 lg:gap-10 lg:p-8"
			>
				<!-- Interactive Photo Stage + Gallery Strip -->
				<div class="lg:col-span-7">
					<figure class="relative overflow-hidden rounded-2xl border border-white/10 bg-obsidian">
						{#key `${activeSpace.id}-${activeMediaIdx}`}
							<div class="venue-stage-frame aspect-[16/11] overflow-hidden sm:aspect-[16/10]">
								<enhanced:img
									src={activeMedia.src}
									alt={activeMedia.alt}
									sizes="(min-width: 1024px) 760px, 94vw"
									loading="lazy"
									decoding="async"
									class="venue-parallax-img h-full w-full object-cover"
								/>
							</div>
						{/key}

						<!-- Scroll-Driven Floating Corner Badges -->
						<div class="pointer-events-none absolute top-3 left-3 flex flex-wrap gap-2 sm:top-4 sm:left-4">
							<span class="venue-badge-float inline-flex items-center gap-1.5 rounded-full border border-white/20 bg-obsidian/85 px-3 py-1.5 font-mono text-[11px] font-medium tracking-[0.04em] text-daylight uppercase backdrop-blur-md">
								<span class="size-1.5 rounded-full bg-coral" aria-hidden="true"></span>
								{activeSpace.priceTag}
							</span>
						</div>

						<figcaption class="border-t border-white/10 bg-obsidian/90 px-4 py-3 font-mono text-[11px] text-mist">
							{activeMedia.caption}
						</figcaption>
					</figure>

					<!-- Interactive Thumbnail Switcher -->
					<div
						class="mt-3 grid grid-cols-3 gap-2.5 sm:grid-cols-4 sm:gap-3"
						role="group"
						aria-label="Switch space photograph"
					>
						{#each activeSpace.gallery as media, idx (media.label)}
							<button
								type="button"
								onclick={() => (activeMediaIdx = idx)}
								aria-pressed={activeMediaIdx === idx}
								class={[
									'group overflow-hidden rounded-xl border text-left transition-all',
									activeMediaIdx === idx
										? 'border-coral ring-1 ring-coral'
										: 'border-white/15 opacity-75 hover:border-white/40 hover:opacity-100'
								]}
							>
								<div class="aspect-[16/10] overflow-hidden bg-obsidian">
									<enhanced:img
										src={media.src}
										alt={media.label}
										sizes="(min-width: 1024px) 160px, 28vw"
										loading="lazy"
										decoding="async"
										class="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
									/>
								</div>
								<span class="block truncate bg-obsidian px-2.5 py-1.5 font-mono text-[10px] tracking-[0.03em] text-daylight uppercase">
									{media.label}
								</span>
							</button>
						{/each}
					</div>
				</div>

				<!-- Space Narrative & Verified Specs -->
				<div class="flex flex-col justify-between lg:col-span-5">
					<div>
						<div class="flex flex-wrap items-center justify-between gap-2">
							<span class="font-mono text-xs tracking-[0.06em] text-coral uppercase">
								{activeSpace.index} · {activeSpace.tabLabel}
							</span>
							<span class="font-mono text-xs text-mist">{activeSpace.priceTag}</span>
						</div>

						<h3 class="mt-3 text-3xl font-bold tracking-[-0.03em] text-daylight sm:text-4xl">
							{activeSpace.title}
						</h3>

						<p class="mt-2 text-base font-medium text-daylight/90">
							{activeSpace.tagline}
						</p>

						<p class="mt-4 text-sm leading-relaxed text-mist sm:text-base">
							{activeSpace.description}
						</p>

						<ul class="mt-6 space-y-2.5 border-t border-white/15 pt-5">
							{#each activeSpace.specs as spec (spec)}
								<li class="flex items-start gap-2.5 text-sm text-daylight">
									<span class="mt-0.5 inline-flex size-4 shrink-0 items-center justify-center rounded-full bg-coral/15 text-coral">
										<Check class="size-3" aria-hidden="true" />
									</span>
									<span>{spec}</span>
								</li>
							{/each}
						</ul>
					</div>

					<div class="mt-8 border-t border-white/15 pt-5">
						<a
							href="#interest"
							onclick={(e) =>
								jumpToInterest(
									e,
									activeSpace.id === 'private-double' ? 'private-double' : 'shared-twin'
								)}
							class="inline-flex min-h-[48px] w-full items-center justify-center gap-2 rounded-full bg-coral px-5 py-3 font-mono text-xs font-medium tracking-[0.06em] text-obsidian uppercase transition-colors hover:bg-coral-hover"
						>
							<span>Pre-select room preference</span>
							<ArrowRight class="size-4" aria-hidden="true" />
						</a>
					</div>
				</div>
			</div>
		</div>

		<!-- Side-by-Side Interactive Room Tier Comparator (€599 vs €749) -->
		<div class="mt-8 grid grid-cols-1 gap-4 md:grid-cols-2">
			{#each roomComparisons as tier (tier.id)}
				<div
					class={[
						'flex flex-col justify-between rounded-2xl border p-6 transition-colors',
						preferredTier === tier.id
							? 'border-coral bg-obsidian-elevated'
							: 'border-white/15 bg-obsidian-elevated/60 hover:border-white/30'
					]}
				>
					<div>
						<div class="flex flex-wrap items-baseline justify-between gap-2">
							<h3 class="text-xl font-bold tracking-[-0.025em] text-daylight sm:text-2xl">
								{tier.name}
							</h3>
							<span class="font-mono text-2xl font-bold text-coral tabular-nums">
								{tier.price}
							</span>
						</div>
						<p class="mt-1 font-mono text-[11px] tracking-[0.05em] text-mist uppercase">
							{tier.occupancy} · {tier.period}
						</p>
						<p class="mt-3 text-sm leading-relaxed text-mist">
							{tier.summary}
						</p>
						<ul class="mt-4 space-y-1.5 border-t border-white/10 pt-3 font-mono text-xs text-daylight/90">
							{#each tier.highlights as line (line)}
								<li>— {line}</li>
							{/each}
						</ul>
					</div>

					<div class="mt-5 flex flex-wrap gap-2.5 pt-2">
						<button
							type="button"
							onclick={() => chooseRoomPreference(tier.id)}
							aria-pressed={preferredTier === tier.id}
							class={[
								'min-h-[44px] rounded-full border px-4 py-2 font-mono text-[11px] font-medium tracking-[0.04em] uppercase transition-colors',
								preferredTier === tier.id
									? 'border-coral bg-coral text-obsidian'
									: 'border-white/20 text-daylight hover:border-white/40'
							]}
						>
							{preferredTier === tier.id ? 'Selected Preview' : 'Preview Room Photos'}
						</button>
						<a
							href="#interest"
							onclick={(e) => jumpToInterest(e, tier.id)}
							class="inline-flex min-h-[44px] items-center gap-1.5 rounded-full border border-white/15 px-4 py-2 font-mono text-[11px] font-medium tracking-[0.04em] text-mist uppercase transition-colors hover:border-coral hover:text-daylight"
						>
							<span>Go to survey CTA</span>
							<ArrowRight class="size-3.5" aria-hidden="true" />
						</a>
					</div>
				</div>
			{/each}
		</div>

		<!-- 10 Included Services & Anonymized Zone Note -->
		<div class="mt-8 rounded-2xl border border-white/15 bg-obsidian-elevated p-6 sm:p-8">
			<div class="flex flex-col gap-4 border-b border-white/10 pb-5 sm:flex-row sm:items-center sm:justify-between">
				<div class="flex items-center gap-2.5">
					<Sparkles class="size-4 text-coral" aria-hidden="true" />
					<h3 class="font-mono text-xs font-medium tracking-[0.06em] text-daylight uppercase">
						Included with every stay · 10 essentials ready on arrival
					</h3>
				</div>
				<span class="inline-flex items-center gap-1.5 font-mono text-[11px] text-mist">
					<Compass class="size-3.5 text-coral" aria-hidden="true" />
					Puerto de las Nieves · Agaete
				</span>
			</div>

			<ul class="mt-5 grid grid-cols-1 gap-2.5 sm:grid-cols-2 lg:grid-cols-5">
				{#each INCLUDED_SERVICES as service, i (service)}
					<li class="flex items-center gap-2.5 rounded-xl border border-white/10 bg-obsidian px-3.5 py-2.5 text-xs text-daylight">
						<span class="font-mono text-[10px] text-coral tabular-nums">
							{String(i + 1).padStart(2, '0')}
						</span>
						<span class="font-medium">{service}</span>
					</li>
				{/each}
			</ul>

			<p class="mt-5 font-mono text-[11px] leading-relaxed text-mist">
				Location privacy: situated in Puerto de las Nieves (Agaete, Gran Canaria) — exact building
				name and street address are shared privately with confirmed participants.
			</p>
		</div>
	</div>
</section>

<style>
	.venue-parallax-img {
		transform: scale(calc(1 + var(--venue-p, 0.35) * 0.045))
			translate3d(0, calc((var(--venue-p, 0.35) - 0.5) * -14px), 0);
		will-change: transform;
		transition: transform 140ms linear;
	}

	.venue-badge-float {
		transform: translate3d(0, calc((var(--venue-p, 0.35) - 0.5) * 10px), 0);
		transition: transform 160ms linear;
	}

	.venue-stage-frame {
		animation: venueFadeIn 320ms cubic-bezier(0.22, 1, 0.36, 1) both;
	}

	@keyframes venueFadeIn {
		from {
			opacity: 0.72;
			transform: scale(0.99);
		}
		to {
			opacity: 1;
			transform: scale(1);
		}
	}

	@media (prefers-reduced-motion: reduce) {
		.venue-parallax-img,
		.venue-badge-float,
		.venue-stage-frame {
			transform: none !important;
			animation: none !important;
			transition: none !important;
			will-change: auto;
		}
	}
</style>
