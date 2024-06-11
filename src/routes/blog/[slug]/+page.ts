// src/routes/blog/[slug]/+page.ts
export async function load({ params, fetch }) {
    const post = await import(`../${params.slug}.md`);
    // const { title, date, teaserimage } = post.metadata;
    const content = post.default;

    // return { content, title, date, teaserimage };

    // API Call
    const response = await fetch(`/api/posts`);
    if (!response.ok) {
        throw new Error(`Fehler beim Laden der Posts: ${response.statusText}`);
    }
    const posts = await response.json();

    // Filtern, um den spezifischen Post zu finden
    const meta = posts.find(p => p.path === `/blog/${params.slug}`);
    if (!post) {
        throw new Error(`Blogbeitrag mit dem Slug '${params.slug}' nicht gefunden.`);
    }

    // console.log(meta);

    return { meta, content };
}