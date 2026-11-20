import { getSiteContext } from '#lib/server/site';
import type { LayoutServerLoad } from './$types';

export const load: LayoutServerLoad = ({ url, setHeaders }) => {
	const { siteOrigin, isPreview } = getSiteContext(url);

	setHeaders({
		'cache-control': isPreview
			? 'no-store'
			: 'public, max-age=0, s-maxage=3600, stale-while-revalidate=86400',
		'x-content-type-options': 'nosniff',
		'referrer-policy': 'strict-origin-when-cross-origin'
	});

	return {
		siteOrigin,
		isPreview
	};
};
