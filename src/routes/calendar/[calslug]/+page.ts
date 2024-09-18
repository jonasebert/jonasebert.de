import { apiURI } from '$lib/store.js';

export async function load({ params, fetch}) {
    // Fetch events
    const eventRes = await fetch(`${apiURI}?type=calendar&itemtype=single&id=${params.calslug}`);
    let event = [];

    if (eventRes.ok) {
        const eventData = await eventRes.json();
        event = eventData.data;
    } else {
        console.error('Fehler beim Abrufen der Veranstaltung:', eventRes.status, eventRes.statusText);
    }

    return {
        event
    };
}