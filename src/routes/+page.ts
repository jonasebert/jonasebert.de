import { apiDomain, apiSecret } from '$lib/store.js';

export async function load({ params, fetch }) {

  // Abrufen der Blog-Posts
  const postsRes = await fetch(`https://${apiDomain}?type=blog&itemtype=all&maxitems=5`, {
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
  } else {
    console.error('Fehler beim Abrufen der Posts:', postsRes.status, postsRes.statusText);
  }

  // Abrufen der Veranstaltungen
  const eventsRes = await fetch(`https://${apiDomain}?type=calendar&maxitems=5`, {
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
  } else {
    console.error('Fehler beim Abrufen der Veranstaltungen:', eventsRes.status, eventsRes.statusText);
  }

  return {
    posts,
    events
  };
}