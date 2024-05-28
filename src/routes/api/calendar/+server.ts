import pkg_ical from 'node-ical';
import pkg_rrule from 'rrule';
import { json } from '@sveltejs/kit';
import fetch from 'node-fetch';

const { RRule, RRuleSet, rrulestr } = pkg_rrule;
const { parseICS } = pkg_ical;

export async function GET({ query }) {
    const webCalUrl = process.env.JONAS_EBERT_WEBCAL_URL;
    const now = new Date();
    const twoMonthsLater = new Date(now.getFullYear(), now.getMonth() + 2, now.getDate());

    try {
        const response = await fetch(webCalUrl, {
            headers: {
                'User-Agent': 'Jonas Ebert/1.0'
            }
        });
        const text = await response.text();
        const data = parseICS(text);
        let events = [];

        for (const event of Object.values(data)) {
            if (event.type === 'VEVENT') {
                let occurrences = [];
                if (event.rrule) {
                    const rule = rrulestr(event.rrule.toString(), { dtstart: event.start });
                    occurrences = rule.between(now, twoMonthsLater, true).map(date => ({
                        ...event,
                        start: date,
                        end: new Date(date.getTime() + (event.end - event.start))
                    }));
                } else if (event.start >= now && event.start <= twoMonthsLater) {
                    occurrences.push(event);
                }
                events.push(...occurrences);
            }
        }

        // Sortieren der Events nach dem Startdatum
        events.sort((a, b) => new Date(a.start) - new Date(b.start));

        // Extrahieren der ersten 15 Events
        events = events.slice(0, 15).map(event => {
            return {
                start: event.start,
                end: event.end,
                datetype: event.datetype,
                summary: event.summary,
                location: event.location,
                description: event.description,
                status: event.status,
            }
        });

        return json({ events });
    } catch (error) {
        return json({ error: error.message }, { status: 500 });
    }
}
