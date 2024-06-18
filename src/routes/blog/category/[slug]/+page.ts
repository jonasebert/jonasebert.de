export async function load({ params, fetch }) {
  const res = await fetch(`/api/blog`, {
    headers: {
      'X-Blog-Type': 'category',
      'X-Blog-Category': params.slug
    }
  });
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