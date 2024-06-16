import { json } from '@sveltejs/kit';
import createClient from "$lib/content/prismic";

export async function GET({ url, fetch }) {
    const client = createClient(fetch);
    const type = url.searchParams.get('type');

    try {
        let posts;
        
        let maxItems = url.searchParams.get('maxItems');
        if (!maxItems) {
            maxItems = 30;
        }

        switch (type) {
            case 'all':
                // Get all posts
                posts = await client.getByType('article', { orderings: { field: 'document.first_publication_date', direction: 'desc' }, pageSize: maxItems});
                break;
            case 'category':
                // Get all posts from one category
                const category = url.searchParams.get('category');
                posts = await client.getByTag(category, { orderings: { field: 'document.first_publication_date', direction: 'desc' }});
                break;
            default:
                return new Response(undefined, { status: 400, statusText: 'Ungültiger Typ-Parameter'});
        }

        if (posts && posts.results_size > 0) {
            return json({ posts: posts.results });
        } else {
            return new Response(undefined, { status: 404, statusText: 'Keine Posts gefunden' });
        }
    } catch (error) {
        console.error(error);
        return new Response(undefined, { status: 500, statusText: 'Server-Fehler' });
    }
}