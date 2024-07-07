export function FormatDate(isoString: string, type: string) {
    const monthsshort = ['Jan.', 'Feb.', 'März', 'Apr.', 'Mai', 'Juni', 'Juli', 'Aug.', 'Sept.', 'Okt.', 'Nov.', 'Dez.'];
    const monthslong = ['Januar', 'Februar', 'März', 'April', 'Mai', 'Juni', 'Juli', 'August', 'September', 'Oktober', 'November', 'Dezember'];
    const date = new Date(isoString);
    const day = date.getDate().toString().padStart(2, '0');
    const monthIndex = date.getMonth();
    const year = date.getFullYear();
    const hours = date.getHours().toString().padStart(2, '0');
    const minutes = date.getMinutes().toString().padStart(2, '0');

    switch (type) {
        case `day`: return `${day}`;
        case `monthshort`: return `${monthsshort[monthIndex]}`;
        case `month`: return `${monthslong[monthIndex]}`;
        case `year`: return `${year}`;
        case `time`: return `${hours}:${minutes}`;
        case `date`: return `${day}. ${monthsshort[monthIndex]} ${year}`;

        default: return `${day}. ${monthsshort[monthIndex]} ${year} - ${hours}:${minutes}`;
    }
}