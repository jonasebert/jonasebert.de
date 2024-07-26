// src/routes/blog/+page.ts
export const load = async ({ fetch }) => {
    const apiUrl = 'https://api.jonasebert.de/api';
    const res = await fetch(`${apiUrl}?type=calendar`);
    if (res.ok) {
        const { data } = await res.json();

        // Format Date
        const foramttedEvents = data.map(event => {
            return {
                ...event,
                start: formatDate(event.start),
                end: formatDate(event.end),
                startday: formatDate(event.start, `day`),
                endday: formatDate(event.end, `day`),
                startmonth: formatDate(event.start, `month`),
                endmonth: formatDate(event.end, `month`),
                startyear: formatDate(event.start, `year`),
                endyear: formatDate(event.end, `year`),
                starttime: formatDate(event.start, `time`),
                endtime: formatDate(event.end, `time`),
                startdate: formatDate(event.start, `date`),
                enddate: formatDate(event.end, `date`),
            };
        });

        return {
            events: foramttedEvents
        };

        function formatDate(isoString, type) {
            const months = ['Jan', 'Feb', 'März', 'Apr', 'Mai', 'Juni', 'Juli', 'Aug', 'Sept', 'Okt', 'Nov', 'Dez'];
            const date = new Date(isoString);
            const day = date.getDate().toString().padStart(2, '0');
            const monthIndex = date.getMonth();
            const year = date.getFullYear();
            const hours = date.getHours().toString().padStart(2, '0');
            const minutes = date.getMinutes().toString().padStart(2, '0');

            switch (type) {
                case `day`: return `${day}`;
                case `month`: return `${months[monthIndex]}`;
                case `year`: return `${year}`;
                case `time`: return `${hours}:${minutes}`;
                case `date`: return `${day}. ${months[monthIndex]} ${year}`;

                default: return `${day}. ${months[monthIndex]} ${year} - ${hours}:${minutes}`;
            }
        }
    } else {
        // Error handling
        console.error('Fehler beim Abrufen der Veranstaltungen:', res.status, res.statusText);
        return {
            events: [],
        };
    }
}
