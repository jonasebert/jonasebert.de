export async function load({ params, fetch }) {
  const apiUrl = 'https://api.jonasebert.de/api';
  const res = await fetch(`${apiUrl}?type=blog&itemtype=all`);
  if (res.ok) {
    const posts = await res.json();
    return {
      posts: posts.data,
    };
  } else {
    // Error handling
    console.error('Fehler beim Abrufen der Posts:', res.status, res.statusText);
    return {
      posts: [],
    };
  }
}