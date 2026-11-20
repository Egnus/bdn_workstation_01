<script lang="ts">
	import { ArrowUpRight, Bus, Car, Info, Ship } from '@lucide/svelte';
	import { FORM_URL, PROVISIONAL_DETAILS, TRANSPORT_ROUTES } from '#lib/data/workation';
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
						Dates, Puerto de las Nieves coliving capacity, and room pricing below match BDN's
						interest survey. Nothing is locked until enough community members raise their hand.
					</p>

					<div class="mt-7 rounded-2xl border border-white/15 bg-obsidian-elevated p-5">
						<div class="flex items-start gap-3">
							<Info class="mt-0.5 size-4 shrink-0 text-coral" aria-hidden="true" />
							<div class="text-sm leading-relaxed">
								<p class="font-semibold text-daylight">No bookings or deposits yet</p>
								<p class="mt-1 text-mist">
									This site only directs you to the 3-minute interest survey. Exact property address,
									confirmed spots, and the €100 refundable deposit option come later once the trip is
									greenlit.
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

			<!-- Getting to Puerto de las Nieves (Agaete) from LPA Airport & Ferry -->
			<div class="mt-16 border-t border-white/15 pt-14">
				<div class="flex flex-col gap-3 pb-8 lg:flex-row lg:items-end lg:justify-between">
					<div>
						<h3 class="text-2xl font-bold tracking-[-0.03em] text-daylight sm:text-3xl">
							Getting to Puerto de las Nieves (Agaete)
						</h3>
						<p class="mt-2 max-w-[60ch] text-sm leading-relaxed text-mist sm:text-base">
							Direct routes and indicative fares from Gran Canaria Airport (LPA) and the
							inter-island ferry pier—all arriving in Puerto de las Nieves harbor (exact building
							address shared upon confirmation).
						</p>
					</div>
					<span class="inline-flex w-fit shrink-0 rounded-full border border-white/15 bg-obsidian-elevated px-3.5 py-1.5 font-mono text-[11px] tracking-[0.05em] text-coral uppercase">
						40–120 min from LPA Airport
					</span>
				</div>

				<div class="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
					{#each TRANSPORT_ROUTES as item, i (item.mode)}
						<article class="flex flex-col justify-between rounded-2xl border border-white/15 bg-obsidian-elevated p-5">
							<div>
								<div class="flex items-center justify-between gap-2">
									<span class="inline-flex size-9 items-center justify-center rounded-full border border-white/15 bg-obsidian text-coral">
										{#if i === 0}
											<Car class="size-4" aria-hidden="true" />
										{:else if i === 3}
											<Ship class="size-4" aria-hidden="true" />
										{:else}
											<Bus class="size-4" aria-hidden="true" />
										{/if}
									</span>
									<span class="font-mono text-xs font-medium text-daylight tabular-nums">
										{item.duration}
									</span>
								</div>

								<h4 class="mt-4 text-lg font-bold tracking-[-0.02em] text-daylight">
									{item.mode}
								</h4>

								<p class="mt-1 font-mono text-sm font-semibold text-coral tabular-nums">
									{item.fare}
								</p>

								<p class="mt-3 text-xs leading-relaxed font-medium text-daylight/90">
									{item.route}
								</p>
							</div>

							<p class="mt-4 border-t border-white/10 pt-3 text-xs leading-relaxed text-mist">
								{item.tip}
							</p>
						</article>
					{/each}
				</div>
			</div>
		</div>
	</section>
</div>
