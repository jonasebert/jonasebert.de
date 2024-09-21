import { apiDomain, apiSecret } from '$lib/store.js';

export async function load({ params, fetch }) {

  // Abrufen der Blog-Posts
  const postsRes = await fetch(`https://${apiDomain}?type=blog&itemtype=category&category=${params.slug}`, {
    method: 'GET',
    headers: {
        'Content-Type': 'application/json',
        'x-vercel-protection-bypass': `${apiSecret}`
    }
  });
  let posts = [];
  let category = '';
  if (postsRes.ok) {
    const postsData = await postsRes.json();
    posts = postsData.data;
    category = params.slug;
  } else {
    console.error('Fehler beim Abrufen der Posts:', postsRes.status, postsRes.statusText);
  }

  return {
    posts,
    category
  };
}