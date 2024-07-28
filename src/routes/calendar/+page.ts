export async function load({ params, fetch }) {
    const apiUrl = 'https://api.jonasebert.de/api';

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
        events
    };
}