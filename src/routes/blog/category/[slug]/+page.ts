export async function load({ params, fetch }) {
  const apiUrl = 'https://api.jonasebert.de/api';
  const res = await fetch(`${apiUrl}?type=blog&itemtype=category&category=${params.slug}`);
  if (res.ok) {
    const posts = await res.json();
    return {
      posts: posts.data,
      category: params.slug
    };
  } else {
    // Error handling
    console.error('Fehler beim Abrufen des Posts:', res.status, res.statusText);
    return {
      posts: [],
      category: params.slug
    };
  }
}