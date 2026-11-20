<script lang="ts">
	import roqueNubloPhoto from '#lib/assets/photos/roque-nublo.jpg?enhanced';
	import tamadabaCliffsPhoto from '#lib/assets/photos/tamadaba-cliffs.jpg?enhanced';
	import tejedaSunsetPhoto from '#lib/assets/photos/tejeda-sunset.jpg?enhanced';
	import veguetaPhoto from '#lib/assets/photos/vegueta-arch.jpg?enhanced';
</script>

<section
	id="idea"
	aria-labelledby="idea-heading"
	class="relative scroll-mt-24 overflow-hidden bg-daylight py-20 text-ink sm:scroll-mt-28 sm:py-28 lg:py-36"
>
	<div class="mx-auto max-w-[1320px] px-4 sm:px-6 lg:px-10">
		<!-- Locomotive Scroll Photo Galaxy (desktop parallax stage) -->
		<div class="relative flex flex-col justify-center py-8 lg:min-h-[480px] lg:py-24">
			<div
				data-scroll
				data-scroll-speed="-0.09"
				class="pointer-events-none hidden lg:block lg:absolute lg:top-0 lg:left-0 lg:w-36 xl:w-44"
			>
				<div class="aspect-square overflow-hidden rounded-2xl">
					<enhanced:img
						src={roqueNubloPhoto}
						alt="Roque Nublo volcanic peaks and Canary pine forest"
						sizes="180px"
						loading="lazy"
						class="h-full w-full object-cover"
					/>
				</div>
			</div>

			<div
				data-scroll
				data-scroll-speed="0.11"
				class="pointer-events-none hidden lg:block lg:absolute lg:top-2 lg:right-4 lg:w-36 xl:w-44"
			>
				<div class="aspect-[4/5] overflow-hidden rounded-2xl">
					<enhanced:img
						src={veguetaPhoto}
						alt="Carved volcanic stone architecture in Vegueta, Gran Canaria"
						sizes="180px"
						loading="lazy"
						class="h-full w-full object-cover"
					/>
				</div>
			</div>

			<div
				data-scroll
				data-scroll-speed="0.09"
				class="pointer-events-none hidden lg:block lg:absolute lg:bottom-2 lg:left-6 lg:w-40 xl:w-48"
			>
				<div class="aspect-[4/3] overflow-hidden rounded-2xl">
					<enhanced:img
						src={tamadabaCliffsPhoto}
						alt="Tamadaba Atlantic sea cliffs in Gran Canaria"
						sizes="200px"
						loading="lazy"
						class="h-full w-full object-cover"
					/>
				</div>
			</div>

			<div
				data-scroll
				data-scroll-speed="-0.11"
				class="pointer-events-none hidden lg:block lg:absolute lg:bottom-4 lg:right-0 lg:w-36 xl:w-44"
			>
				<div class="aspect-square overflow-hidden rounded-2xl">
					<enhanced:img
						src={tejedaSunsetPhoto}
						alt="Caldera de Tejeda sunset over Gran Canaria"
						sizes="180px"
						loading="lazy"
						class="h-full w-full object-cover"
					/>
				</div>
			</div>

			<div class="relative z-10 mx-auto max-w-[620px] text-center">
				<h2
					id="idea-heading"
					class="text-[clamp(2.35rem,4.6vw,4rem)] leading-[0.98] font-bold tracking-[-0.04em] text-balance text-ink"
				>
					Taking Barcelona Digital Nomads on the road for seven unhurried days.
				</h2>

				<p class="mx-auto mt-6 max-w-[52ch] text-base leading-relaxed text-ink-muted sm:text-lg">
					Built by our community—not a commercial coliving chain. Familiar faces from Barcelona
					meetups alongside new members looking for focused workdays and genuine island time.
				</p>
			</div>

			<!-- Mobile compact photo mosaic -->
			<div class="mt-8 grid grid-cols-2 gap-3 lg:hidden">
				<div class="aspect-[4/3] overflow-hidden rounded-xl">
					<enhanced:img
						src={roqueNubloPhoto}
						alt="Roque Nublo volcanic peaks"
						sizes="46vw"
						loading="lazy"
						class="h-full w-full object-cover"
					/>
				</div>
				<div class="aspect-[4/3] overflow-hidden rounded-xl">
					<enhanced:img
						src={tamadabaCliffsPhoto}
						alt="Tamadaba Atlantic sea cliffs"
						sizes="46vw"
						loading="lazy"
						class="h-full w-full object-cover"
					/>
				</div>
			</div>
		</div>

		<!-- Narrative + Explicit Villa Scouting Placeholder -->
		<div class="mt-12 grid grid-cols-1 gap-8 border-t border-line-dark pt-12 lg:mt-24 lg:grid-cols-12 lg:gap-12">
			<div class="lg:col-span-6">
				<p class="max-w-[54ch] text-lg leading-relaxed font-medium text-ink">
					Most remote workweeks blur into the same café tables and Slack threads. BDN Workation 001
					trades January routine in Barcelona for one shared villa in Gran Canaria.
				</p>
				<p class="mt-4 max-w-[54ch] text-base leading-relaxed text-ink-muted">
					We are gauging interest first before committing a property. Once enough people raise their
					hand in the survey, we will run an online info session and open a dedicated WhatsApp
					group to lock in the details together.
				</p>
			</div>

			<div class="lg:col-span-6">
				<aside
					aria-label="Villa confirmation placeholder"
					class="rounded-2xl border border-dashed border-ink/25 bg-daylight-card p-6 sm:p-8"
				>
					<div class="flex flex-wrap items-center justify-between gap-2">
						<span class="font-mono text-[11px] font-medium tracking-[0.06em] text-ink uppercase">
							Placeholder · Villa Media &amp; Specs Pending
						</span>
						<span class="inline-flex items-center gap-1.5 rounded-full bg-daylight-subtle px-3 py-1 font-mono text-[11px] text-ink">
							<span class="size-1.5 rounded-full bg-coral" aria-hidden="true"></span>
							Scouting
						</span>
					</div>
					<p class="mt-3 text-sm leading-relaxed text-ink-muted">
						Exact villa photography, property address, workstation layout, and Wi-Fi bandwidth tests
						are intentionally omitted until demand is confirmed and a specific villa is reserved.
					</p>
				</aside>
			</div>
		</div>
	</div>
</section>
