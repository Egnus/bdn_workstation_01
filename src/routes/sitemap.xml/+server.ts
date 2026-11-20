import { OG_IMAGE_ALT, OG_IMAGE_PATH, buildAbsoluteUrl } from '#lib/seo';
import { getSiteContext } from '#lib/server/site';
import type { RequestHandler } from './$types';

function escapeXml(value: string): string {
	return value
		.replace(/&/g, '&amp;')
		.replace(/</g, '&lt;')
		.replace(/>/g, '&gt;')
		.replace(/"/g, '&quot;')
		.replace(/'/g, '&apos;');
}

export const GET: RequestHandler = ({ url }) => {
	const { siteOrigin } = getSiteContext(url);
	const pageUrl = escapeXml(buildAbsoluteUrl(siteOrigin, '/'));
	const ogImageUrl = escapeXml(buildAbsoluteUrl(siteOrigin, OG_IMAGE_PATH));
	const logoUrl = escapeXml(buildAbsoluteUrl(siteOrigin, '/icon-512.png'));

	const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
  <url>
    <loc>${pageUrl}</loc>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
    <image:image>
      <image:loc>${ogImageUrl}</image:loc>
      <image:title>${escapeXml(OG_IMAGE_ALT)}</image:title>
    </image:image>
    <image:image>
      <image:loc>${logoUrl}</image:loc>
      <image:title>Barcelona Digital Nomads (BDN) logo</image:title>
    </image:image>
  </url>
</urlset>
`;

	return new Response(xml, {
		headers: {
			'content-type': 'application/xml; charset=utf-8',
			'cache-control': 'public, max-age=0, s-maxage=3600, stale-while-revalidate=86400'
		}
	});
};
