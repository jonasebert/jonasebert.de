export async function load({ params, fetch }) {
  const api = process.env.JONAS_EBERT_API_URL;
  const res = await fetch(`https://api.jonasebert.de/api?type=blog&itemtype=all&maxitems=5`);

  console.log(res.body);

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