<script lang="ts">
	import '@fontsource/instrument-serif/400.css';
	import '@fontsource/instrument-serif/400-italic.css';
	import '@fontsource-variable/manrope';
	import '@fontsource/ibm-plex-mono/400.css';
	import '@fontsource/ibm-plex-mono/500.css';
	import './layout.css';
	import favicon from '#lib/assets/favicon.svg';
	import type { LayoutProps } from './$types';

	let { children }: LayoutProps = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<a
	href="#main-content"
	class="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:bg-charcoal focus:px-4 focus:py-3 focus:font-mono focus:text-xs focus:tracking-widest focus:text-paper focus:uppercase"
>
	Skip to main content
</a>

{@render children()}
