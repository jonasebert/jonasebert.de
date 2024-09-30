import { apiDomain } from '$lib/store';

export async function load({ params, fetch }) {
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
    events: events
  };
}