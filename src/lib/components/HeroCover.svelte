<script lang="ts">
	import { ArrowUpRight } from '@lucide/svelte';
	import agaetePhoto from '#lib/assets/photos/agaete-gran-canaria.jpg?enhanced';
	import { FORM_URL, WORKATION_META } from '#lib/data/workation';
</script>

<section
	id="top"
	aria-labelledby="hero-heading"
	class="relative flex min-h-[100svh] items-end overflow-hidden bg-obsidian pt-24 pb-8 text-daylight sm:pb-12"
>
	<div
		data-scroll
		data-scroll-css-progress
		class="loco-hero-media pointer-events-none absolute inset-0"
	>
		<enhanced:img
			src={agaetePhoto}
			alt="Sunlit whitewashed village of Agaete nestled below green volcanic peaks in Gran Canaria"
			sizes="100vw"
			fetchpriority="high"
			class="h-full w-full object-cover object-[50%_42%]"
		/>
		<div
			class="absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/70 to-obsidian/35"
			aria-hidden="true"
		></div>
	</div>

	<div class="relative z-10 mx-auto w-full max-w-[1320px] px-4 sm:px-6 lg:px-10">
		<div class="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-end">
			<div class="lg:col-span-7">
				<h1
					id="hero-heading"
					class="text-[clamp(2.9rem,7.2vw,6rem)] leading-[0.94] font-bold tracking-[-0.04em] text-balance text-daylight"
				>
					Work somewhere else. Connect differently.
				</h1>

				<p class="mt-5 max-w-[46ch] text-base leading-relaxed text-daylight sm:text-lg">
					Seven days in Puerto de las Nieves (Agaete, Gran Canaria) with Barcelona Digital
					Nomads—focused coastal coworking, volcanic island afternoons, and unhurried evenings
					together.
				</p>
			</div>

			<div class="lg:col-span-5">
				<div class="rounded-2xl border border-white/15 bg-obsidian/78 p-5 backdrop-blur-md sm:p-6">
					<dl class="grid grid-cols-2 gap-x-5 gap-y-4 border-b border-white/15 pb-5">
						<div>
							<dt class="font-mono text-[11px] tracking-[0.06em] text-mist uppercase">
								Edition &amp; Place
							</dt>
							<dd class="mt-1 text-sm font-medium text-daylight">
								{WORKATION_META.code} · Agaete, GC
							</dd>
						</div>
						<div>
							<dt class="font-mono text-[11px] tracking-[0.06em] text-mist uppercase">
								Proposed Dates
							</dt>
							<dd class="mt-1 font-mono text-sm font-medium text-daylight tabular-nums">
								{WORKATION_META.dates}
							</dd>
						</div>
						<div>
							<dt class="font-mono text-[11px] tracking-[0.06em] text-mist uppercase">
								Duration
							</dt>
							<dd class="mt-1 text-sm font-medium text-daylight">
								{WORKATION_META.duration}
							</dd>
						</div>
						<div>
							<dt class="font-mono text-[11px] tracking-[0.06em] text-mist uppercase">
								Group Size
							</dt>
							<dd class="mt-1 text-sm font-medium text-daylight">
								~40 people <span class="text-xs text-mist">(provisional)</span>
							</dd>
						</div>
					</dl>

					<div class="mt-5 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
						<a
							href={FORM_URL}
							target="_blank"
							rel="noopener noreferrer"
							class="inline-flex min-h-[48px] w-full items-center justify-center gap-2 rounded-full bg-coral px-6 py-3 font-mono text-xs font-medium tracking-[0.06em] text-obsidian uppercase transition-colors hover:bg-coral-hover sm:w-auto"
						>
							<span>Express Your Interest</span>
							<ArrowUpRight class="size-4" aria-hidden="true" />
						</a>
						<span class="font-mono text-[11px] text-mist">
							No booking or deposit now
						</span>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>
