export async function load({ params, fetch }) {
  const apiUrl = 'https://api.jonasebert.de/api';

  // Abrufen der Blog-Posts
  const postsRes = await fetch(`${apiUrl}?type=blog&itemtype=all`);
  let posts = [];
  if (postsRes.ok) {
    const postsData = await postsRes.json();
    posts = postsData.data;
  } else {
    console.error('Fehler beim Abrufen der Posts:', postsRes.status, postsRes.statusText);
  }

  return {
    posts
  };
}