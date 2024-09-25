import { apiDomain, apiSecret } from '$lib/store.js';

export async function load({ params, fetch }) {

  // Abrufen der Blog-Posts
  const postsRes = await fetch(`https://api.jonasebert.de?type=blog&itemtype=all&maxitems=5`, {
    method: 'GET',
    headers: {
        'Content-Type': 'application/json',
        'x-vercel-protection-bypass': `${apiSecret}`
    }
  });
  let posts = [];
  if (postsRes.ok) {
    const postsData = await postsRes.json();
    posts = postsData.data;
    console.log(posts);
  } else {
    console.error('Fehler beim Abrufen der Posts:', postsRes.status, postsRes.statusText);
  }

  // Abrufen der Veranstaltungen
  const eventsRes = await fetch(`https://api.jonasebert.de?type=calendar&maxitems=5`, {
    method: 'GET',
    headers: {
        'Content-Type': 'application/json',
        'x-vercel-protection-bypass': `${apiSecret}`
    }
  });
  let events = [];
  if (eventsRes.ok) {
    const eventsData = await eventsRes.json();
    events = eventsData.data;
    console.log(events);
  } else {
    console.error('Fehler beim Abrufen der Veranstaltungen:', eventsRes.status, eventsRes.statusText);
  }

  return {
    posts,
    events
  };
}