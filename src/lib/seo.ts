export const SITE_NAME = 'Barcelona Digital Nomads';
export const SITE_SHORT_NAME = 'BDN Workation 001';
export const SITE_TITLE = 'BDN Workation 001 — Gran Canaria | Barcelona Digital Nomads';
export const SITE_DESCRIPTION =
	'Seven days in Gran Canaria (24–30 January 2027) with Barcelona Digital Nomads—shared villa coworking, island exploration, and community. Express your interest.';
export const SITE_KEYWORDS =
	'Barcelona Digital Nomads, BDN Workation, Gran Canaria workation, digital nomad retreat Spain, remote work Gran Canaria, coliving workation January 2027';

export const OG_IMAGE_PATH = '/og-image.jpg';
export const OG_IMAGE_WIDTH = 1200;
export const OG_IMAGE_HEIGHT = 630;
export const OG_IMAGE_ALT =
	'BDN Workation 001 in Agaete, Gran Canaria — 24–30 January 2027 with Barcelona Digital Nomads';

export function resolveSiteOrigin(
	url: URL,
	env: Record<string, string | undefined> = {}
): string {
	const explicit = (env.PUBLIC_SITE_URL || env.SITE_URL || '').trim();
	if (explicit) {
		return explicit.replace(/\/+$/, '');
	}

	if (env.VERCEL_ENV === 'production' && env.VERCEL_PROJECT_PRODUCTION_URL) {
		const prodHost = env.VERCEL_PROJECT_PRODUCTION_URL.replace(/^https?:\/\//, '').replace(/\/+$/, '');
		return `https://${prodHost}`;
	}

	if (env.VERCEL_ENV === 'preview' && env.VERCEL_URL) {
		const previewHost = env.VERCEL_URL.replace(/^https?:\/\//, '').replace(/\/+$/, '');
		return `https://${previewHost}`;
	}

	if (url.origin && url.origin !== 'null' && !url.origin.includes('sveltekit-prerender')) {
		return url.origin.replace(/\/+$/, '');
	}

	return '';
}

export function buildAbsoluteUrl(origin: string, path = '/'): string {
	const normalizedPath = path.startsWith('/') ? path : `/${path}`;
	return origin ? `${origin}${normalizedPath}` : normalizedPath;
}

export function buildStructuredDataJson(origin: string): string {
	const pageUrl = buildAbsoluteUrl(origin, '/');
	const logoUrl = buildAbsoluteUrl(origin, '/icon-512.png');
	const ogImageUrl = buildAbsoluteUrl(origin, OG_IMAGE_PATH);

	const graph = {
		'@context': 'https://schema.org',
		'@graph': [
			{
				'@type': 'Organization',
				'@id': `${pageUrl}#organization`,
				name: SITE_NAME,
				alternateName: 'BDN',
				url: pageUrl,
				logo: {
					'@type': 'ImageObject',
					'@id': `${pageUrl}#logo`,
					url: logoUrl,
					contentUrl: logoUrl,
					width: 512,
					height: 512,
					caption: 'Barcelona Digital Nomads (BDN) logo'
				}
			},
			{
				'@type': 'WebSite',
				'@id': `${pageUrl}#website`,
				name: 'BDN Workation 001 — Gran Canaria',
				url: pageUrl,
				inLanguage: 'en',
				publisher: {
					'@id': `${pageUrl}#organization`
				}
			},
			{
				'@type': 'WebPage',
				'@id': `${pageUrl}#webpage`,
				url: pageUrl,
				name: SITE_TITLE,
				description: SITE_DESCRIPTION,
				isPartOf: {
					'@id': `${pageUrl}#website`
				},
				about: {
					'@id': `${pageUrl}#event`
				},
				primaryImageOfPage: {
					'@type': 'ImageObject',
					'@id': `${pageUrl}#primaryimage`,
					url: ogImageUrl,
					contentUrl: ogImageUrl,
					width: OG_IMAGE_WIDTH,
					height: OG_IMAGE_HEIGHT,
					caption: OG_IMAGE_ALT
				},
				inLanguage: 'en'
			},
			{
				'@type': 'Event',
				'@id': `${pageUrl}#event`,
				name: 'BDN Workation 001 — Gran Canaria',
				description: SITE_DESCRIPTION,
				url: pageUrl,
				startDate: '2027-01-24',
				endDate: '2027-01-30',
				eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
				location: {
					'@type': 'Place',
					name: 'Gran Canaria',
					address: {
						'@type': 'PostalAddress',
						addressLocality: 'Gran Canaria',
						addressRegion: 'Las Palmas',
						addressCountry: 'ES'
					}
				},
				image: [ogImageUrl],
				organizer: {
					'@id': `${pageUrl}#organization`
				},
				maximumAttendeeCapacity: 40,
				mainEntityOfPage: {
					'@id': `${pageUrl}#webpage`
				}
			}
		]
	};

	return JSON.stringify(graph).replace(/</g, '\\u003c');
}
