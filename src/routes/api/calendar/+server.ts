import pkg_ical from 'node-ical';
import pkg_rrule from 'rrule';
import { json } from '@sveltejs/kit';
import fetch from 'node-fetch';
import moment from 'moment-timezone';

const { RRule, RRuleSet, rrulestr } = pkg_rrule;
const { parseICS } = pkg_ical;

export async function GET({ query }) {
    const webCalUrl = process.env.JONAS_EBERT_WEBCAL_URL;

    moment.tz.setDefault('Europe/Berlin');
    const now = moment().toDate();
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
            // Extrahieren der Teaserbild-ID aus der Beschreibung
            const teaserImageMatch = event.description?.match(/^teaserimage:\s*(\S+)/);
            const teaserImageId = teaserImageMatch ? teaserImageMatch[1] : null;
            const teaserImageUrl = teaserImageId ? `https://cloud.jonasebert.de/index.php/apps/files_sharing/publicpreview/${teaserImageId}?x=3440&y=1440&a=true` : null;

            // Return to client
            return {
                start: event.start ? event.start : null,
                end: event.end ? event.end : null,
                datetype: event.datetype ? event.datetype : null,
                summary: event.summary ? event.summary : null,
                location: event.location ? event.location : null,
                description: event.description ? event.description.replace(/^teaserimage:\s*\S+\n?/, '') : null,
                state: event.status ? event.status : null,
                teaserImage: teaserImageUrl,
            }
        });

        return json({ events });
    } catch (error) {
        return json({ error: error.message }, { status: 500 });
    }
}
