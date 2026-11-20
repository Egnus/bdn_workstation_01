import {
	CONTEXT,
	DEPLOY_PRIME_URL,
	SITE_URL,
	URL as NETLIFY_URL,
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
		URL: NETLIFY_URL,
		DEPLOY_PRIME_URL,
		CONTEXT,
		VERCEL_ENV,
		VERCEL_PROJECT_PRODUCTION_URL,
		VERCEL_URL
	});

	const isPreview =
		VERCEL_ENV === 'preview' || CONTEXT === 'deploy-preview' || CONTEXT === 'branch-deploy';

	return {
		siteOrigin,
		isPreview
	};
}
