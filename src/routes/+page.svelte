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
	import {
		OG_IMAGE_ALT,
		OG_IMAGE_HEIGHT,
		OG_IMAGE_PATH,
		OG_IMAGE_WIDTH,
		SITE_DESCRIPTION,
		SITE_KEYWORDS,
		SITE_NAME,
		SITE_TITLE,
		buildAbsoluteUrl,
		buildStructuredDataJson
	} from '#lib/seo';
	import type { PageProps } from './$types';

	let { data }: PageProps = $props();

	let canonicalUrl = $derived(buildAbsoluteUrl(data.siteOrigin, '/'));
	let ogImageUrl = $derived(buildAbsoluteUrl(data.siteOrigin, OG_IMAGE_PATH));
	let jsonLdScript = $derived(
		`<script type="application/ld+json">${buildStructuredDataJson(data.siteOrigin)}</` + `script>`
	);

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
	<title>{SITE_TITLE}</title>
	<meta name="description" content={SITE_DESCRIPTION} />
	<meta name="keywords" content={SITE_KEYWORDS} />
	<meta name="author" content={SITE_NAME} />
	<link rel="canonical" href={canonicalUrl} />
	<link rel="alternate" hreflang="en" href={canonicalUrl} />
	<link rel="alternate" hreflang="x-default" href={canonicalUrl} />

	<meta property="og:type" content="website" />
	<meta property="og:site_name" content={SITE_NAME} />
	<meta property="og:locale" content="en_US" />
	<meta property="og:url" content={canonicalUrl} />
	<meta property="og:title" content={SITE_TITLE} />
	<meta property="og:description" content={SITE_DESCRIPTION} />
	<meta property="og:image" content={ogImageUrl} />
	{#if ogImageUrl.startsWith('https://')}
		<meta property="og:image:secure_url" content={ogImageUrl} />
	{/if}
	<meta property="og:image:type" content="image/jpeg" />
	<meta property="og:image:width" content={String(OG_IMAGE_WIDTH)} />
	<meta property="og:image:height" content={String(OG_IMAGE_HEIGHT)} />
	<meta property="og:image:alt" content={OG_IMAGE_ALT} />

	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:url" content={canonicalUrl} />
	<meta name="twitter:title" content={SITE_TITLE} />
	<meta name="twitter:description" content={SITE_DESCRIPTION} />
	<meta name="twitter:image" content={ogImageUrl} />
	<meta name="twitter:image:alt" content={OG_IMAGE_ALT} />

	{@html jsonLdScript}
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
