// src/routes/calendar.js
import { google } from 'googleapis';
import { json } from '@sveltejs/kit';

export async function GET({ query }) {
    const calendarId = '9e2052781df09df47bf5e2cf2e7524f79b44641630b3aaf544cb9dee4fc23493@group.calendar.google.com';
    const apiKey = process.env.GOOGLE_CALENDAR_API_KEY;
    console.log(apiKey);

    const calendar = google.calendar({ version: 'v3', auth: apiKey });

    try {
        const response = await calendar.events.list({
            calendarId,
            timeMin: new Date().toISOString(), // Nur zukünftige Termine
            maxResults: 10, // Die Anzahl der Termine, die Sie abrufen möchten
            singleEvents: true,
            orderBy: 'startTime',
        });

        const events = response.data.items.map(event => {
            const teaserImageFirst = event.attachments?.[0] || null;

            return {
                start: event.start.dateTime || event.start.date,
                end: event.end.dateTime || event.end.date,
                summary: event.summary,
                location: event.location,
                status: event.description,
                teaserimage: teaserImageFirst,
            }
        });

        return json({ events });
    } catch (error) {
        return json({ error: error.message}, { status: 500 })
    }
}
