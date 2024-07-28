export async function load({ params, fetch }) {
  const apiUrl = 'https://api.jonasebert.de/api';

  // Abrufen der Blog-Posts
  const postsRes = await fetch(`${apiUrl}?type=blog&itemtype=all&maxitems=5`);
  let posts = [];
  if (postsRes.ok) {
    const postsData = await postsRes.json();
    posts = postsData.data;
  } else {
    console.error('Fehler beim Abrufen der Posts:', postsRes.status, postsRes.statusText);
  }

  // Abrufen der Veranstaltungen
  const eventsRes = await fetch(`${apiUrl}?type=calendar&maxitems=5`);
  let events = [];
  if (eventsRes.ok) {
    const eventsData = await eventsRes.json();
    events = eventsData.data;
  } else {
    console.error('Fehler beim Abrufen der Veranstaltungen:', eventsRes.status, eventsRes.statusText);
  }

  return {
    posts,
    events
  };
}