import { base } from "$app/paths";

export async function load({ params, fetch }) {
  const res = await fetch(`${base}/api/blog?type=category&category=${params.slug}`);
  if (res.ok) {
    const data = await res.json();
    return {
      posts: data.posts,
      category: params.slug,
    };
  } else {
    // Return empty posts
    return {
      posts: [],
      category: params.slug,
    };
  }
}