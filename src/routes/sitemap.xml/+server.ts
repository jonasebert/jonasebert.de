// Imports
import { apiDomain } from '$lib/store.js';

const site = 'https://jonasebert.de';

// 
const pages = [
    'calendar',
    'blog',
    'about',
    'contact',
    'legal/imprint',
    'legal/privacy'
];

// Fetch posts
let posts: string[] = [];

try {
  const postsRes = await fetch(`https://${apiDomain}/api?type=blog&itemtype=all&maxitems=5`);

  if (postsRes.ok) {
    const postsData = await postsRes.json();
    posts = postsData.data;
  } else {
    console.error('Error fetching posts:', postsRes.statusText);
  }
} catch (error) {
  console.error('Error fetching posts:', error);
}

function blog_publish_date (post) {
    if (post.data.overwrite_publish_date) {
        return post.data.overwrite_publish_date + 'T01:00:00+0000';
    } else {
        return post.first_publication_date;
    }
}

// Building sitemap
export async function GET({ url }) {
    const body = sitemap(pages, posts);
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
                    <loc>${site}${post.url}</loc>
                    <changefreq>weekly</changefreq>
                    <lastmod>${blog_publish_date(post)}</lastmod>
                    <priority>0.5</priority>
                </url>
            `
        )
        .join('')
    }
</urlset>`
