import { apiDomain } from '$lib/store';

export async function load({ params, fetch }) {
  // Fetch posts
  let posts = [];

  try {
    const postsRes = await fetch(`https://${apiDomain}/api?type=blog&itemtype=all`);

    if (postsRes.ok) {
      const postsData = await postsRes.json();
      posts = postsData.data;
    } else {
      console.error('Error fetching posts:', postsRes.statusText);
    }
  } catch (error) {
    console.error('Error fetching posts:', error);
  }

  return {
    posts: posts
  };
}