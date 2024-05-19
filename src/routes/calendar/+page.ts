// src/routes/blog/+page.ts
export const load = async ({ fetch }) => {
    const response = await fetch(`/api/calendar`);
    if (!response.ok) {
        throw new Error(`Fehler beim Laden der Termine: ${response.statusText}`);
    }
    const events = await response.json();

    // console.log(await posts);

    return {
        events
    };
};
