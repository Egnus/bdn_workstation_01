import { buildAbsoluteUrl } from '#lib/seo';
import { getSiteContext } from '#lib/server/site';
import type { RequestHandler } from './$types';

export const GET: RequestHandler = ({ url }) => {
	const { siteOrigin, isPreview } = getSiteContext(url);

	const lines = isPreview
		? ['User-agent: *', 'Disallow: /']
		: ['User-agent: *', 'Allow: /', '', `Sitemap: ${buildAbsoluteUrl(siteOrigin, '/sitemap.xml')}`];

	return new Response(`${lines.join('\n')}\n`, {
		headers: {
			'content-type': 'text/plain; charset=utf-8',
			'cache-control': isPreview
				? 'no-store'
				: 'public, max-age=0, s-maxage=3600, stale-while-revalidate=86400'
		}
	});
};
