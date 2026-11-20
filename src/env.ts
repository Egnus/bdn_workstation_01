import { defineEnvVars } from '@sveltejs/kit/env';

const optionalString = (value: string | undefined) => value?.trim() || undefined;

export const variables = defineEnvVars({
	PUBLIC_SITE_URL: { public: true, schema: optionalString },
	SITE_URL: { schema: optionalString },
	URL: { schema: optionalString },
	DEPLOY_PRIME_URL: { schema: optionalString },
	CONTEXT: { schema: optionalString },
	VERCEL_ENV: { schema: optionalString },
	VERCEL_PROJECT_PRODUCTION_URL: { schema: optionalString },
	VERCEL_URL: { schema: optionalString }
});
