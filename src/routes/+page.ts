import { base } from "$app/paths";

export async function load({ params, fetch }) {
  const res = await fetch(`${base}/api/blog`, {
    headers: {
      'X-Blog-Type': 'all',
      'X-Blog-MaxItems': '5'
    }
  });
  if (res.ok) {
    const data = await res.json();
    return {
      posts: data.posts,
    };
  } else {
    // Fehlerbehandlung
    return {
      posts: [],
    };
  }
}