<script lang="ts">
	import { ArrowUpRight, Info } from '@lucide/svelte';
	import { hairline } from '#lib/actions/reveal';
	import { FORM_URL, PROVISIONAL_DETAILS } from '#lib/data/workation';
</script>

<section
	id="details"
	aria-labelledby="details-heading"
	class="scroll-mt-16 bg-paper py-16 sm:py-24"
>
	<div class="mx-auto max-w-[1360px] px-4 sm:px-8 lg:px-12">
		<div use:hairline class="hairline-rule mb-12 h-px w-full bg-sand sm:mb-16" aria-hidden="true"></div>

		<div class="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-12">
			<div class="lg:col-span-4">
				<h2
					id="details-heading"
					class="font-display text-[clamp(2.4rem,4.4vw,3.6rem)] leading-[1.02] tracking-[-0.02em] text-balance text-charcoal"
				>
					The Details, as they stand today.
				</h2>

				<p class="mt-5 max-w-[38ch] text-base leading-relaxed text-charcoal-muted">
					Everything below is an indicative framework from our interest survey. Final capacity,
					exact property location, and what is included will be confirmed once interest is
					validated.
				</p>

				<div class="mt-7 border border-volcanic bg-volcanic/10 p-5">
					<div class="flex items-start gap-3">
						<Info class="mt-0.5 size-4 shrink-0 text-volcanic-deep" aria-hidden="true" />
						<div class="text-sm leading-relaxed text-charcoal">
							<p class="font-medium">Provisional &amp; non-binding</p>
							<p class="mt-1 text-charcoal-muted">
								No bookings or deposits are open yet. Filling out the survey simply helps BDN
								gauge demand and shape the final programme.
							</p>
						</div>
					</div>
				</div>

				<div class="mt-7">
					<a
						href={FORM_URL}
						target="_blank"
						rel="noopener noreferrer"
						class="inline-flex min-h-[48px] w-full items-center justify-center gap-2 border border-charcoal bg-transparent px-5 py-3 font-mono text-xs font-medium tracking-[0.08em] text-charcoal uppercase transition-colors hover:bg-charcoal hover:text-paper sm:w-auto"
					>
						<span>Share Your Preferences</span>
						<ArrowUpRight class="size-4" aria-hidden="true" />
					</a>
				</div>
			</div>

			<div class="lg:col-span-8">
				<dl class="divide-y divide-sand border-y border-sand">
					{#each PROVISIONAL_DETAILS as row (row.label)}
						<div class="grid grid-cols-1 gap-2 py-5 sm:grid-cols-12 sm:gap-6 sm:py-6">
							<dt class="font-mono text-xs tracking-[0.06em] text-charcoal-muted uppercase sm:col-span-4 sm:pt-1">
								{row.label}
							</dt>
							<dd class="sm:col-span-8">
								<p class="font-display text-2xl leading-tight text-charcoal tabular-nums sm:text-[1.75rem]">
									{row.value}
								</p>
								<p class="mt-1.5 max-w-[56ch] text-sm leading-relaxed text-charcoal-muted">
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
