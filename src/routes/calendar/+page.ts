import { apiDomain } from '$lib/store.js';

export async function load({ params, fetch }) {

    // Abrufen der Veranstaltungen
    const eventsRes = await fetch(`https://${apiDomain}?type=calendar`);
    let events = [];
    if (eventsRes.ok) {
        const eventsData = await eventsRes.json();
        events = eventsData.data;
    } else {
        console.error('Fehler beim Abrufen der Veranstaltungen:', eventsRes.status, eventsRes.statusText);
    }

    return {
        events
    };
}