<script lang="ts">
	import LocomotiveScroll from 'locomotive-scroll';
	import SiteHeader from '#lib/components/SiteHeader.svelte';
	import HeroCover from '#lib/components/HeroCover.svelte';
	import IdeaSection from '#lib/components/IdeaSection.svelte';
	import ExperienceChapters from '#lib/components/ExperienceChapters.svelte';
	import DestinationGallery from '#lib/components/DestinationGallery.svelte';
	import DetailsLedger from '#lib/components/DetailsLedger.svelte';
	import FinalCta from '#lib/components/FinalCta.svelte';
	import { setLocomotiveInstance } from '#lib/actions/reveal';
	import ogPreview from '#lib/assets/photos/agaete-gran-canaria.jpg';

	const title = 'BDN Workation 001 — Gran Canaria (24–30 January 2027)';
	const description =
		'Seven days of remote work, volcanic island exploration, and community with Barcelona Digital Nomads in Gran Canaria. Express your interest for January 2027.';

	$effect(() => {
		if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
			return;
		}

		const locomotiveScroll = new LocomotiveScroll({
			lenisOptions: {
				lerp: 0.09,
				smoothWheel: true
			},
			triggerRootMargin: '-10% 0px -10% 0px'
		});

		setLocomotiveInstance(locomotiveScroll);

		return () => {
			setLocomotiveInstance(null);
			locomotiveScroll.destroy();
		};
	});
</script>

<svelte:head>
	<title>{title}</title>
	<meta name="description" content={description} />
	<meta property="og:type" content="website" />
	<meta property="og:title" content={title} />
	<meta property="og:description" content={description} />
	<meta property="og:image" content={ogPreview} />
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content={title} />
	<meta name="twitter:description" content={description} />
	<meta name="twitter:image" content={ogPreview} />
</svelte:head>

<SiteHeader />

<main id="main-content">
	<HeroCover />
	<IdeaSection />
	<ExperienceChapters />
	<DestinationGallery />
	<DetailsLedger />
	<FinalCta />
</main>
