<script lang="ts">
	import { ArrowUpRight } from '@lucide/svelte';
	import agaetePhoto from '#lib/assets/photos/agaete-gran-canaria.jpg?enhanced';
	import { FORM_URL, WORKATION_META } from '#lib/data/workation';
</script>

<section id="top" aria-labelledby="hero-heading" class="relative bg-paper pb-16 sm:pb-24">
	<div class="relative h-[46svh] min-h-[300px] w-full overflow-hidden bg-charcoal sm:h-[58svh] sm:min-h-[420px]">
		<enhanced:img
			src={agaetePhoto}
			alt="Sunlit whitewashed village of Agaete nestled below green volcanic peaks in Gran Canaria"
			sizes="100vw"
			fetchpriority="high"
			class="h-full w-full object-cover object-[50%_45%]"
		/>
		<div
			class="pointer-events-none absolute inset-0 bg-gradient-to-b from-charcoal/10 via-transparent to-charcoal/35"
			aria-hidden="true"
		></div>
		<p
			class="absolute right-4 bottom-24 hidden bg-charcoal/80 px-2.5 py-1 font-mono text-[11px] tracking-[0.06em] text-paper uppercase sm:right-8 sm:bottom-28 sm:block lg:right-12"
		>
			Agaete Valley, Gran Canaria · BDN Survey Reference
		</p>
	</div>

	<div class="mx-auto max-w-[1360px] px-4 sm:px-8 lg:px-12">
		<div
			class="relative z-10 -mt-16 border border-sand bg-paper px-5 pt-7 pb-8 sm:-mt-24 sm:px-10 sm:pt-11 sm:pb-12 lg:grid lg:grid-cols-12 lg:gap-10"
		>
			<div class="lg:col-span-8">
				<h1
					id="hero-heading"
					class="font-display text-[clamp(2.85rem,6.3vw,5.4rem)] leading-[0.96] tracking-[-0.025em] text-balance text-charcoal"
				>
					Work somewhere else.<br />
					<span class="italic">Connect differently.</span>
				</h1>
			</div>

			<div class="mt-6 flex flex-col justify-between gap-6 lg:col-span-4 lg:mt-1">
				<p class="max-w-[38ch] text-base leading-relaxed text-charcoal-muted">
					Seven days with the Barcelona Digital Nomads community in Gran Canaria—focused remote
					workdays, island exploration, and unhurried evenings together.
				</p>

				<div>
					<a
						href={FORM_URL}
						target="_blank"
						rel="noopener noreferrer"
						class="inline-flex min-h-[48px] w-full items-center justify-center gap-2 bg-clay px-6 py-3.5 font-mono text-xs font-medium tracking-[0.08em] text-charcoal uppercase transition-colors hover:bg-clay-hover sm:w-auto"
					>
						<span>Express Your Interest</span>
						<ArrowUpRight class="size-4" aria-hidden="true" />
					</a>
					<p class="mt-2.5 font-mono text-[11px] tracking-[0.03em] text-charcoal-muted">
						3-minute interest survey · No booking or deposit required
					</p>
				</div>
			</div>

			<dl
				class="mt-8 grid grid-cols-2 gap-x-6 gap-y-4 border-t border-sand pt-5 sm:grid-cols-5 lg:col-span-12"
			>
				<div>
					<dt class="font-mono text-[11px] tracking-[0.08em] text-charcoal-muted uppercase">
						Edition
					</dt>
					<dd class="mt-1 font-mono text-xs font-medium text-charcoal sm:text-sm">
						{WORKATION_META.code}
					</dd>
				</div>
				<div>
					<dt class="font-mono text-[11px] tracking-[0.08em] text-charcoal-muted uppercase">
						Destination
					</dt>
					<dd class="mt-1 font-mono text-xs font-medium text-charcoal sm:text-sm">
						{WORKATION_META.destination}
					</dd>
				</div>
				<div>
					<dt class="font-mono text-[11px] tracking-[0.08em] text-charcoal-muted uppercase">
						Proposed Dates
					</dt>
					<dd class="mt-1 font-mono text-xs font-medium text-charcoal tabular-nums sm:text-sm">
						{WORKATION_META.dates}
					</dd>
				</div>
				<div>
					<dt class="font-mono text-[11px] tracking-[0.08em] text-charcoal-muted uppercase">
						Duration
					</dt>
					<dd class="mt-1 font-mono text-xs font-medium text-charcoal sm:text-sm">
						{WORKATION_META.duration}
					</dd>
				</div>
				<div class="col-span-2 sm:col-span-1">
					<dt class="font-mono text-[11px] tracking-[0.08em] text-charcoal-muted uppercase">
						Group Size
					</dt>
					<dd class="mt-1 font-mono text-xs font-medium text-charcoal sm:text-sm">
						~40 people <span class="text-charcoal-muted">(provisional)</span>
					</dd>
				</div>
			</dl>
		</div>
	</div>
</section>
