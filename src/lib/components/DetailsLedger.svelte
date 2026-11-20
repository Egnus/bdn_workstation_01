<script lang="ts">
	import { ArrowUpRight, Info } from '@lucide/svelte';
	import { FORM_URL, PROVISIONAL_DETAILS } from '#lib/data/workation';
</script>

<!-- Dark Obsidian Sticky Curtain opening over the daylight section -->
<div class="relative z-20 -mt-10 rounded-t-[28px] bg-obsidian text-daylight sm:-mt-14 sm:rounded-t-[44px]">
	<section
		id="details"
		aria-labelledby="details-heading"
		class="scroll-mt-24 py-20 sm:scroll-mt-28 sm:py-28"
	>
		<div class="mx-auto max-w-[1320px] px-4 sm:px-6 lg:px-10">
			<div class="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-12">
				<div class="lg:col-span-5 lg:sticky lg:top-28 lg:self-start">
					<h2
						id="details-heading"
						class="text-[clamp(2.4rem,4.8vw,3.9rem)] leading-[0.98] font-bold tracking-[-0.04em] text-balance text-daylight"
					>
						The Details, open &amp; provisional.
					</h2>

					<p class="mt-5 max-w-[42ch] text-base leading-relaxed text-mist">
						Dates, group size, and room pricing below come directly from BDN's interest survey.
						Nothing is locked until enough community members raise their hand.
					</p>

					<div class="mt-7 rounded-2xl border border-white/15 bg-obsidian-elevated p-5">
						<div class="flex items-start gap-3">
							<Info class="mt-0.5 size-4 shrink-0 text-coral" aria-hidden="true" />
							<div class="text-sm leading-relaxed">
								<p class="font-semibold text-daylight">No bookings or deposits yet</p>
								<p class="mt-1 text-mist">
									This site only directs you to the 3-minute interest survey. Confirmed spots and
									the €100 refundable deposit option come later once the trip is greenlit.
								</p>
							</div>
						</div>
					</div>

					<div class="mt-7">
						<a
							href={FORM_URL}
							target="_blank"
							rel="noopener noreferrer"
							class="inline-flex min-h-[48px] w-full items-center justify-center gap-2 rounded-full border border-white/25 px-6 py-3 font-mono text-xs font-medium tracking-[0.06em] text-daylight uppercase transition-colors hover:border-coral hover:bg-coral hover:text-obsidian sm:w-auto"
						>
							<span>Share Your Preferences</span>
							<ArrowUpRight class="size-4" aria-hidden="true" />
						</a>
					</div>
				</div>

				<div class="lg:col-span-7">
					<dl class="divide-y divide-white/15 border-y border-white/15">
						{#each PROVISIONAL_DETAILS as row (row.label)}
							<div class="grid grid-cols-1 gap-2 py-6 sm:grid-cols-12 sm:gap-6">
								<dt class="font-mono text-xs tracking-[0.06em] text-mist uppercase sm:col-span-4 sm:pt-1">
									{row.label}
								</dt>
								<dd class="sm:col-span-8">
									<p class="text-2xl font-semibold tracking-[-0.025em] text-daylight tabular-nums sm:text-3xl">
										{row.value}
									</p>
									<p class="mt-1.5 text-sm leading-relaxed text-mist">
										{row.note}
									</p>
								</dd>
							</div>
						{/each}
					</dl>
				</div>
			</div>
		</div>
	</section>
</div>
