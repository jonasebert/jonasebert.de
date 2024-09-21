import { apiDomain, apiSecret } from '$lib/store.js';

export async function load({ params, fetch}) {
    // Fetch events
    const eventRes = await fetch(`https://${apiDomain}?type=calendar&itemtype=single&id=${params.calslug}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'x-vercel-protection-bypass': `${apiSecret}`
        }
    });
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