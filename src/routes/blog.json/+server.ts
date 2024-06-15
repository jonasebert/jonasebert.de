import { json } from '@sveltejs/kit';
import createClient from "$lib/content/prismic";


// @type {import('@sveltejs/kit').RequestHandler}
export async function GET({ fetch, params }) {
    const client = createClient(fetch)
    const posts = await client.getByType('article', { orderings: { field: 'document.first_publication_date', direction: 'desc' } })
    if (posts) {
        return json({ posts })
    }
    return new Response(undefined, { status: 404 })
}