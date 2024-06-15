import { base } from "$app/paths";

// @type {import('./$types').PageLoad}
export async function load({ params, fetch, data }) {
  const res = await fetch(`${base}/blog.json`);
  const posts = await res.json();
  return {
    posts: posts.posts,
  };
}