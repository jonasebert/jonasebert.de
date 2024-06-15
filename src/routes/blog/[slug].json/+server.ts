import { json } from '@sveltejs/kit';
import createClient from "$lib/content/prismic";

// @type {import('@sveltejs/kit').RequestHandler}
export async function GET({ fetch, params }) {
    const client = createClient(fetch)
    const { slug } = params
    try {
        const post = await client.getByUID('article', slug,)

        if (post) {
            return json({ post })
        }
    }
    catch{
        //catch 500 error
    }
    return new Response(undefined, { status: 404 })
}