// src/routes/blog/category/[category]/+page.ts
export const load = async ({ fetch, params }) => {
    const { category } = params;
    const response = await fetch(`/api/posts`);
    const allPosts = await response.json();
    const posts = allPosts.filter((post) =>
        Array.isArray(post.meta.categories) && 
        post.meta.categories.map(cat => cat.toLowerCase()).includes(category.toLowerCase())
    );

    return { category, posts: posts.length > 0 ? posts : 'Keine Beiträge in dieser Kategorie.' };
};
