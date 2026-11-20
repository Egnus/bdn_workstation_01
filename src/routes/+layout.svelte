<script lang="ts">
	import '@fontsource-variable/onest';
	import '@fontsource/jetbrains-mono/400.css';
	import '@fontsource/jetbrains-mono/500.css';
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
	class="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:rounded-full focus:bg-coral focus:px-5 focus:py-3 focus:font-mono focus:text-xs focus:font-medium focus:tracking-widest focus:text-obsidian focus:uppercase"
>
	Skip to main content
</a>

{@render children()}
