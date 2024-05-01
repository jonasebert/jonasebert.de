// src/routes/blog/+page.ts
export const load = async ({ fetch }) => {
    const response = await fetch(`/api/posts`);
    if (!response.ok) {
        throw new Error(`Fehler beim Laden der Posts: ${response.statusText}`);
    }
    const posts = await response.json();

    return {
        posts
    };
};
