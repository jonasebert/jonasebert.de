// Imports
const site = 'https://jonasebert.de';

const pages = [
    'about',
    'blog',
    'contact',
    'legal/imprint',
    'legal/privacy'
];
const posts = import.meta.glob('/src/routes/blog/*.md', {
    eager: true
});
const postArray: { slug: string; published: string }[] = [];
for (const post in posts) {
    const postMeta = posts[post].metadata;
    const slug = post.split('/').at(-1)?.replace('.md', '');
    const published = postMeta.date;
    postArray.push({ slug, published })
}

// @type {import('./$types').RequestHandler}
export async function GET({ url }) {
    const body = sitemap(pages, postArray);
    const response = new Response(body);
    response.headers.set('Cache-Control', 'max-age=0, s-maxage=3600');
    response.headers.set('Content-Type', 'application/xml');
    return response;
}

const sitemap = (pages: string[], posts: string[]) => `<?xml version="1.0" encoding="UTF-8" ?>
<urlset
    xmlns="https://www.sitemaps.org/schemas/sitemap/0.9"
    xmlns:news="https://www.google.com/schemas/sitemap-news/0.9"
    xmlns:xhtml="https://www.w3.org/1999/xhtml"
    xmlns:mobile="https://www.google.com/schemas/sitemap-mobile/1.0"
    xmlns:image="https://www.google.com/schemas/sitemap-image/1.1"
    xmlns:video="https://www.google.com/schemas/sitemap-video/1.1"
>
    ${pages
        .map(
            (page) => `
                <url>
                    <loc>${site}/${page}</loc>
                    <changefreq>daily</changefreq>
                    <priority>0.5</priority>
                </url>
            `
        )
        .join('')
    }
    ${posts
        .map(
            (post) => `
                <url>
                    <loc>${site}/blog/${post.slug}</loc>
                    <changefreq>weekly</changefreq>
                    <lastmod>${post.published}</lastmod>
                    <priority>0.5</priority>
                </url>
            `
        )
        .join('')
    }
</urlset>`
