export async function load({ params, fetch }) {
  const res = await fetch(`https://api.jonasebert.de/api?type=blog&itemtype=category&category=${params.slug}`);
  if (res.ok) {
    const posts = await res.json();
    return {
      posts: posts.data,
      category: params.slug
    };
  } else {
    // Error handling
    return {
      posts: [],
      category: params.slug
    };
  }
}