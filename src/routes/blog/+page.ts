export async function load({ params, fetch }) {
  const res = await fetch(`https://api.jonasebert.de/api?type=blog&itemtype=all`);
  if (res.ok) {
    const posts = await res.json();
    return {
      posts: posts.data,
    };
  } else {
    // Error handling
    return {
      posts: [],
    };
  }
}