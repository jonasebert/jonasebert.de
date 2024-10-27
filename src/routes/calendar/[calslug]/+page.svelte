<script lang="ts">
    import InfoMessage from '$lib/components/blocks/InfoMessage.svelte';
    import { name } from '$lib/store';
	import { FormatDate } from '$lib/util/date';

    export let data;
    const event = data.event[0];

    function teaserImage() {
        if (event.teaserImage.url) {
            return event.teaserImage;
        } else {
            return {
                ...event.teaserImage,
                url: '/home/teaser.webp'
            };
        }
    };
</script>

<svelte:head>
    <title>{event.summary} - {FormatDate(event.start, 'date')} - {name}</title>
    <meta property="og:title" content="{event.summary} - {FormatDate(event.start, 'date')}" />
    <meta property="og:image" content={teaserImage().url} />
</svelte:head>

<div class="relative bg-fixed bg-no-repeat bg-center bg-cover" style="background-image: url({teaserImage().url});">
    <div class="bg-black bg-opacity-50 p-5 h-screen flex justify-center items-center">
        <div class="container mx-auto text-justify py-10">
            <div class="text-white text-center font-poppins mb-10 break-words hyphens-auto text-balance">
                <h1 class="text-4xl font-bold my-2">
                    {#if event.state === 'CANCELLED'}
                        [ABGESAGT]
                    {/if}
                    {event.summary}</h1>
            </div>
            <div class="flex flex-col sm:flex-row bg-gray-700 rounded-lg shadow-lg">
                <div class="container p-5 text-balance font-montserrat flex justify-center lg:justify-start items-center text-lg max-h-96 overflow-auto">
                    <div class="h-full">
                        {#if event.description}
                            <div class="py-4">
                                {@html event.description}
                            </div>
                        {:else}
                            <div class="py-4">
                                Es konnte keine Beschreibung gefunden werden🫠
                            </div>
                        {/if}
                    </div>
                </div>
                <div class='container p-5 text-justify rounded-lg bg-gray-800 w-fit content-center'>
                    <div class="flex flex-col justify-center items-start gap-2 font-montserrat">
                        {#if event.state == 'CANCELLED'}
                            <InfoMessage message='Veranstaltung wurde abgesagt!' />
                        {/if}
                        {#if teaserImage().copyright.url && teaserImage().copyright.text}
                            <div class="flex flex-row items-center">
                                <div class="text-lg pr-5">📸</div>
                                <p class="text-lg">
                                    {#if teaserImage().copyright.text && teaserImage().copyright.url}
                                        <a href={teaserImage().copyright.url} target="_blank">
                                            {teaserImage().copyright.text}
                                        </a>
                                    {:else}
                                        {teaserImage().copyright.text}
                                    {/if}
                                </p>
                            </div>
                        {/if}
                        <div class="text-lg text-nowrap">
                            <div class="flex flex-row justify-start items-center">
                                <div class="pr-5">🗓️</div>
                                <div>
                                    {#if event.datetype === 'date'}
                                        <p>{FormatDate(event.start, 'date')} - {FormatDate(event.end, 'date')}</p>
                                        <p>Ganztägig</p>
                                    {:else if FormatDate(event.start, 'date') === FormatDate(event.end, 'date') && event.datetype === 'date-time'}
                                        <p>{FormatDate(event.start, 'datelong')}</p>
                                        <p>{FormatDate(event.start, 'time')} - {FormatDate(event.end, 'time')}</p>
                                    {:else}
                                        <p>{FormatDate(event.start, 'date')} {FormatDate(event.start, 'time')} - {FormatDate(event.end, 'date')} {FormatDate(event.end, 'time')}</p>
                                    {/if}    
                                </div>
                            </div>
                        </div>
                        {#if event.location}
                            <div class="flex flex-row items-center">
                                <div class="text-lg text-nowrap pr-5">
                                    📍
                                </div>
                                <a class="text-lg text-balance" href="https://www.google.de/maps/place/{event.location}" target="_blank">
                                    {event.location}
                                </a>
                            </div>
                        {:else}
                        <div class="flex flex-row items-center">
                            <div class="text-lg text-nowrap pr-5">
                                📍
                            </div>
                            <div class="text-lg text-balance">
                                Kein Ort gefunden🙃
                            </div>
                        </div>
                        {/if}
                        {#if event.url}
                            <div class="flex flex-row items-center flex-nowrap">
                                <div class="text-lg text-nowrap pr-5">
                                    🔗
                                </div>
                                <button
                                    class="flex flex-row items-center bg-green-700 hover:bg-green-900 text-white hover:text-je-sand font-bold py-2 px-4 rounded-lg w-full sm:w-auto"
                                    on:click={() => window.open(event.url, '_blank')}
                                >
                                    <div class="text-lg text-nowrap">
                                        Zur Veranstaltungsseite
                                    </div>
                                </button>
                            </div>
                        {/if}
                        {#if event.id}
                            <div class="flex flex-row items-center flex-nowrap">
                                <div class="text-lg text-nowrap pr-5">
                                    📅
                                </div>
                                <button
                                    class="flex flex-row items-center bg-green-700 hover:bg-green-900 text-white hover:text-je-sand font-bold py-2 px-4 rounded-lg w-full sm:w-auto"
                                    on:click={async () => {
                                        try {
                                            const response = await fetch(`https://api.jonasebert.de/api?type=calendar&itemtype=single&id=${event.id}&download=true`);

                                            if (response.ok) {
                                                const blob = await response.blob();
                                                const url = window.URL.createObjectURL(blob);
                                                const a = document.createElement('a');
                                                a.style.display = 'none';
                                                a.href = url;
                                                a.download = `${event.summary}.ics`;
                                                document.body.appendChild(a);
                                                a.click();
                                                window.URL.revokeObjectURL(url);
                                            } else {
                                                console.error('Failed to download ICS file');
                                            }
                                        } catch (error) {
                                            console.error('Error:', error);
                                        }
                                    }}
                                >
                                    <div class="text-lg text-nowrap">
                                        Zum Kalender hinzufügen
                                    </div>
                                </button>
                            </div>
                        {/if}
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>