<script lang="ts">
	import veguetaPhoto from '#lib/assets/photos/vegueta-arch.jpg?enhanced';
	import agaetePhoto from '#lib/assets/photos/agaete-gran-canaria.jpg?enhanced';
	import lasCanterasPhoto from '#lib/assets/photos/las-canteras.jpg?enhanced';
	import { hairline } from '#lib/actions/reveal';

	const plates = [
		{
			id: 'architecture',
			label: '01 Architecture · Vegueta',
			summary: 'Carved basalt stone portals, shaded wooden balconies, and quiet neighborhood plazas.'
		},
		{
			id: 'landscape',
			label: '02 Landscape · Agaete Valley',
			summary: 'Whitewashed villages tucked below emerald volcanic walls—our destination mood.'
		},
		{
			id: 'atmosphere',
			label: '03 Atmosphere · Atlantic Horizon',
			summary: 'Late-afternoon walks by the water after closing the laptop for the day.'
		}
	] as const;

	let selectedPlate = $state<string>('architecture');
</script>

<section
	id="destination"
	aria-labelledby="destination-heading"
	class="scroll-mt-16 bg-paper-inset py-16 sm:py-24"
>
	<div class="mx-auto max-w-[1360px] px-4 sm:px-8 lg:px-12">
		<div use:hairline class="hairline-rule mb-12 h-px w-full bg-sand sm:mb-16" aria-hidden="true"></div>

		<div class="grid grid-cols-1 gap-8 pb-12 lg:grid-cols-12 lg:items-end">
			<div class="lg:col-span-6">
				<h2
					id="destination-heading"
					class="font-display text-[clamp(2.4rem,4.8vw,4rem)] leading-[1.02] tracking-[-0.02em] text-balance text-charcoal"
				>
					Gran Canaria, a winter refuge of stone, sea, and sun.
				</h2>
			</div>

			<div class="lg:col-span-5 lg:col-start-8">
				<p class="max-w-[48ch] text-base leading-[1.7] text-charcoal-muted">
					While northern Europe and mainland Spain sit deep in January cold, Gran Canaria holds mild
					daylight, volcanic mountain trails, historic stone neighborhoods, and an Atlantic coast
					that resets the pace of a workweek.
				</p>

				<div
					role="group"
					aria-label="Highlight destination plate"
					class="mt-6 flex flex-wrap gap-2 border-t border-sand pt-4"
				>
					{#each plates as plate (plate.id)}
						<button
							type="button"
							onclick={() => (selectedPlate = plate.id)}
							aria-pressed={selectedPlate === plate.id}
							class={[
								'min-h-[44px] border px-3 py-2 font-mono text-[11px] tracking-[0.05em] uppercase transition-colors',
								selectedPlate === plate.id
									? 'border-charcoal bg-charcoal text-paper'
									: 'border-sand bg-paper/60 text-charcoal-muted hover:border-charcoal hover:text-charcoal'
							]}
						>
							{plate.label}
						</button>
					{/each}
				</div>
			</div>
		</div>

		<div class="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-start">
			<figure
				class={[
					'transition-opacity duration-300 lg:col-span-4',
					selectedPlate === 'architecture' ? 'opacity-100' : 'opacity-80 hover:opacity-100'
				]}
			>
				<div
					class={[
						'aspect-[3/4] overflow-hidden border bg-paper transition-colors duration-300',
						selectedPlate === 'architecture' ? 'border-clay' : 'border-transparent'
					]}
				>
					<enhanced:img
						src={veguetaPhoto}
						alt="Historic carved volcanic stone doorway and timber balcony in Vegueta, Las Palmas de Gran Canaria"
						sizes="(min-width: 1024px) 30vw, 94vw"
						loading="lazy"
						class="h-full w-full object-cover"
					/>
				</div>
				<figcaption class="mt-3 border-t border-sand pt-2.5">
					<span class="block font-mono text-[11px] font-medium tracking-[0.06em] text-charcoal uppercase">
						Architecture · Vegueta, Las Palmas
					</span>
					<span class="mt-1 block text-sm leading-relaxed text-charcoal-muted">
						{plates[0].summary}
					</span>
				</figcaption>
			</figure>

			<div class="grid grid-cols-1 gap-8 lg:col-span-8">
				<figure
					class={[
						'transition-opacity duration-300',
						selectedPlate === 'landscape' ? 'opacity-100' : 'opacity-80 hover:opacity-100'
					]}
				>
					<div
						class={[
							'aspect-[16/10] overflow-hidden border bg-paper transition-colors duration-300',
							selectedPlate === 'landscape' ? 'border-clay' : 'border-transparent'
						]}
					>
						<enhanced:img
							src={agaetePhoto}
							alt="Whitewashed coastal houses in Agaete beneath steep green volcanic mountains"
							sizes="(min-width: 1024px) 62vw, 94vw"
							loading="lazy"
							class="h-full w-full object-cover object-center"
						/>
					</div>
					<figcaption class="mt-3 flex flex-col justify-between gap-2 border-t border-sand pt-2.5 sm:flex-row sm:items-baseline">
						<span class="font-mono text-[11px] font-medium tracking-[0.06em] text-charcoal uppercase">
							Landscape · Agaete Valley
						</span>
						<span class="text-sm text-charcoal-muted">
							{plates[1].summary}
						</span>
					</figcaption>
				</figure>

				<figure
					class={[
						'transition-opacity duration-300',
						selectedPlate === 'atmosphere' ? 'opacity-100' : 'opacity-80 hover:opacity-100'
					]}
				>
					<div
						class={[
							'aspect-[16/9] overflow-hidden border bg-charcoal transition-colors duration-300',
							selectedPlate === 'atmosphere' ? 'border-clay' : 'border-transparent'
						]}
					>
						<enhanced:img
							src={lasCanterasPhoto}
							alt="Warm sunset horizon over calm ocean water at Las Canteras beach in Gran Canaria"
							sizes="(min-width: 1024px) 62vw, 94vw"
							loading="lazy"
							class="h-full w-full object-cover"
						/>
					</div>
					<figcaption class="mt-3 flex flex-col justify-between gap-2 border-t border-sand pt-2.5 sm:flex-row sm:items-baseline">
						<span class="font-mono text-[11px] font-medium tracking-[0.06em] text-charcoal uppercase">
							Atmosphere · Atlantic Horizon
						</span>
						<span class="text-sm text-charcoal-muted">
							{plates[2].summary}
						</span>
					</figcaption>
				</figure>
			</div>
		</div>
	</div>
</section>
