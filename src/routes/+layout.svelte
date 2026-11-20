<script lang="ts">
	import '@fontsource-variable/onest';
	import '@fontsource/jetbrains-mono/400.css';
	import '@fontsource/jetbrains-mono/500.css';
	import './layout.css';
	import { SITE_SHORT_NAME } from '#lib/seo';
	import type { LayoutProps } from './$types';

	let { children, data }: LayoutProps = $props();
</script>

<svelte:head>
	<link rel="icon" href="/favicon.ico" sizes="48x48" />
	<link rel="icon" href="/favicon.svg" type="image/svg+xml" />
	<link rel="icon" type="image/png" sizes="48x48" href="/favicon-48x48.png" />
	<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
	<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
	<link rel="icon" type="image/png" sizes="192x192" href="/icon-192.png" />
	<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
	<link rel="manifest" href="/site.webmanifest" />
	<meta name="application-name" content={SITE_SHORT_NAME} />
	<meta name="apple-mobile-web-app-title" content="BDN Workation" />
	<meta name="format-detection" content="telephone=no" />
	<meta
		name="robots"
		content={data.isPreview
			? 'noindex, nofollow'
			: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1'}
	/>
</svelte:head>

<a
	href="#main-content"
	class="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:rounded-full focus:bg-coral focus:px-5 focus:py-3 focus:font-mono focus:text-xs focus:font-medium focus:tracking-widest focus:text-obsidian focus:uppercase"
>
	Skip to main content
</a>

{@render children()}
