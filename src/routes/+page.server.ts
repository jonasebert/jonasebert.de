import type { PageServerLoad } from './$types';

export const load = (async () => {
    return {};
}) satisfies PageServerLoad;

// This can be false if you're using a fallback (i.e. SPA mode)
export const prerender = false;