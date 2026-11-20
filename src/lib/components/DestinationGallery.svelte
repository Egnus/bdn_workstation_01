<script lang="ts">
	import veguetaPhoto from '#lib/assets/photos/vegueta-arch.jpg?enhanced';
	import agaetePhoto from '#lib/assets/photos/agaete-gran-canaria.jpg?enhanced';
	import lasCanterasPhoto from '#lib/assets/photos/las-canteras.jpg?enhanced';
	import tamadabaCliffsPhoto from '#lib/assets/photos/tamadaba-cliffs.jpg?enhanced';
	import { scrollToAnchor } from '#lib/actions/reveal';

	const spots = [
		{
			id: 'vegueta',
			label: 'Vegueta Stonework',
			note: 'Carved volcanic portals, timber balconies, and quiet neighborhood squares.'
		},
		{
			id: 'agaete',
			label: 'Agaete Valley',
			note: 'Whitewashed coastal homes below steep emerald ridges.'
		},
		{
			id: 'tamadaba',
			label: 'Tamadaba Cliffs',
			note: 'Volcanic ocean walls meeting the Atlantic swell.'
		},
		{
			id: 'canteras',
			label: 'Las Canteras Dusk',
			note: 'Warm January evenings along the ocean promenade.'
		}
	] as const;

	let activeSpot = $state<string>('agaete');

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
					Gran Canaria, built for January sun and mountain air.
				</h2>
			</div>
			<div class="lg:col-span-5">
				<p class="text-base leading-relaxed text-ink-muted">
					Mild Atlantic daylight, volcanic trails, and historic coastal neighborhoods—every frame
					below is real Gran Canaria photography.
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

		<div class="mt-10 grid grid-cols-1 gap-6 md:grid-cols-12">
			<figure
				id="spot-vegueta"
				data-scroll
				data-scroll-speed="0.08"
				class="scroll-mt-24 sm:scroll-mt-28 md:col-span-5"
			>
				<div
					data-scroll
					data-scroll-css-progress
					class={[
						'aspect-[3/4] overflow-hidden rounded-2xl border transition-colors duration-300',
						activeSpot === 'vegueta' ? 'border-coral' : 'border-transparent'
					]}
				>
					<enhanced:img
						src={veguetaPhoto}
						alt="Carved volcanic stone doorway and timber balcony in Vegueta, Las Palmas de Gran Canaria"
						sizes="(min-width: 768px) 38vw, 94vw"
						loading="lazy"
						class="loco-scale-img h-full w-full object-cover"
					/>
				</div>
				<figcaption class="mt-3 flex items-baseline justify-between gap-4 border-t border-line-dark pt-2.5">
					<span class="font-mono text-xs font-medium text-ink uppercase">Vegueta, Las Palmas</span>
					<span class="text-xs text-ink-muted">{spots[0].note}</span>
				</figcaption>
			</figure>

			<div class="grid grid-cols-1 gap-8 md:col-span-7">
				<figure id="spot-agaete" class="scroll-mt-24 sm:scroll-mt-28">
					<div
						data-scroll
						data-scroll-css-progress
						class={[
							'aspect-[16/10] overflow-hidden rounded-2xl border transition-colors duration-300',
							activeSpot === 'agaete' ? 'border-coral' : 'border-transparent'
						]}
					>
						<enhanced:img
							src={agaetePhoto}
							alt="Whitewashed coastal homes in Agaete framed by emerald volcanic peaks"
							sizes="(min-width: 768px) 54vw, 94vw"
							loading="lazy"
							class="loco-scale-img h-full w-full object-cover"
						/>
					</div>
					<figcaption class="mt-3 flex items-baseline justify-between gap-4 border-t border-line-dark pt-2.5 pb-2">
						<span class="font-mono text-xs font-medium text-ink uppercase">Agaete Valley</span>
						<span class="text-xs text-ink-muted">{spots[1].note}</span>
					</figcaption>
				</figure>

				<div class="grid grid-cols-1 gap-6 sm:grid-cols-2">
					<figure id="spot-tamadaba" data-scroll data-scroll-speed="0.03" class="scroll-mt-24 sm:scroll-mt-28">
						<div
							class={[
								'aspect-[4/3] overflow-hidden rounded-2xl border transition-colors duration-300',
								activeSpot === 'tamadaba' ? 'border-coral' : 'border-transparent'
							]}
						>
							<enhanced:img
								src={tamadabaCliffsPhoto}
								alt="Steep volcanic cliffs of Tamadaba dropping into the Atlantic Ocean"
								sizes="(min-width: 768px) 26vw, 94vw"
								loading="lazy"
								class="h-full w-full object-cover"
							/>
						</div>
						<figcaption class="mt-2.5 font-mono text-[11px] text-ink-muted">
							Tamadaba Sea Cliffs · Northwest Coast
						</figcaption>
					</figure>

					<figure id="spot-canteras" data-scroll data-scroll-speed="0.06" class="scroll-mt-24 sm:scroll-mt-28">
						<div
							class={[
								'aspect-[4/3] overflow-hidden rounded-2xl border transition-colors duration-300',
								activeSpot === 'canteras' ? 'border-coral' : 'border-transparent'
							]}
						>
							<enhanced:img
								src={lasCanterasPhoto}
								alt="Golden-hour Atlantic sunset at Las Canteras beach, Gran Canaria"
								sizes="(min-width: 768px) 26vw, 94vw"
								loading="lazy"
								class="h-full w-full object-cover"
							/>
						</div>
						<figcaption class="mt-2.5 font-mono text-[11px] text-ink-muted">
							Las Canteras Horizon · Atlantic Dusk
						</figcaption>
					</figure>
				</div>
			</div>
		</div>
	</div>
</section>
