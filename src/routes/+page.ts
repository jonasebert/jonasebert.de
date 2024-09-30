import { apiDomain } from '$lib/store';

export async function load({ params, fetch }) {
  // Fetch posts
  let posts = [];

  try {
    const postsRes = await fetch(`https://${apiDomain}/api?type=blog&itemtype=all&maxitems=5`);

    if (postsRes.ok) {
      const postsData = await postsRes.json();
      posts = postsData.data;
    } else {
      console.error('Error fetching posts:', postsRes.statusText);
    }
  } catch (error) {
    console.error('Error fetching posts:', error);
  }

  // Fetch events
  let events = [];

  try {
    const eventsRes = await fetch(`https://${apiDomain}/api?type=calendar&itemtype=all&maxitems=5`);

    if (eventsRes.ok) {
      const eventsData = await eventsRes.json();
      events = eventsData.data;
    } else {
      console.error('Error fetching events:', eventsRes.statusText);
    }
  } catch (error) {
    console.error('Error fetching events:', error);
  }

  return {
    posts: posts,
    events: events
  };
}