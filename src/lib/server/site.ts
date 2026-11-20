import {
	SITE_URL,
	VERCEL_ENV,
	VERCEL_PROJECT_PRODUCTION_URL,
	VERCEL_URL
} from '$app/env/private';
import { PUBLIC_SITE_URL } from '$app/env/public';
import { resolveSiteOrigin } from '#lib/seo';

export function getSiteContext(url: URL) {
	const siteOrigin = resolveSiteOrigin(url, {
		PUBLIC_SITE_URL,
		SITE_URL,
		VERCEL_ENV,
		VERCEL_PROJECT_PRODUCTION_URL,
		VERCEL_URL
	});

	return {
		siteOrigin,
		isPreview: VERCEL_ENV === 'preview'
	};
}
