import { base } from "$app/paths";

export async function load({ params, fetch, data }) {
  const res = await fetch(`${base}/api/blog?type=all`);
  const posts = await res.json();
  return {
    posts: posts,
  };
}