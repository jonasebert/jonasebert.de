import { allEnv, apiDomain, apiSecret } from '$lib/store.js';

export async function load({ params, fetch }) {
  console.log(allEnv);

  if ((apiDomain !== undefined && apiSecret !== undefined) && (apiDomain !== null && apiSecret !== null)) {
    // Abrufen der Blog-Posts
    const postsRes = await fetch(`https://${apiDomain}?type=blog&itemtype=all&maxitems=5`, {
      method: 'GET',
      headers: {
          'Content-Type': 'application/json',
          'Host': 'jonasebert.de',
          'x-vercel-protection-bypass': `${apiSecret}`
      }
    });
    let posts = [];
    if (postsRes.ok) {
      const postsData = await postsRes.json();
      posts = postsData.data;
    } else {
      console.log('Fehler beim Abrufen der Posts:', postsRes.status, postsRes.statusText);
    }

    // Abrufen der Veranstaltungen
    const eventsRes = await fetch(`https://${apiDomain}?type=calendar&maxitems=5`, {
      method: 'GET',
      headers: {
          'Content-Type': 'application/json',
          'Host': 'jonasebert.de',
          'x-vercel-protection-bypass': `${apiSecret}`
      }
    });
    let events = [];
    if (eventsRes.ok) {
      const eventsData = await eventsRes.json();
      events = eventsData.data;
    } else {
      console.log('Fehler beim Abrufen der Veranstaltungen:', eventsRes.status, eventsRes.statusText);
    }

    return {
      posts,
      events
    };
  } else {
    console.error('Fehler beim Abrufen der Umgebungsvariabeln:', {domain: apiDomain, secret: apiSecret})
    return {
      posts: [],
      events: []
    }
  }
}