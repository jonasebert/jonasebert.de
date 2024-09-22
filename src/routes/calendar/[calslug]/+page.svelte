<script lang="ts">
    import InfoMessage from '$lib/components/blocks/InfoMessage.svelte';
import { name } from '$lib/store';
	import { FormatDate } from '$lib/util/date';

    export let data;
    const event = data.event[0];

    function teaserImage() {
        if (event.teaserImage.url) {
            console.log(event.teaserImage);
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
    <div class="bg-black bg-opacity-50 p-5">
        <div class="container mx-auto text-justify py-10">
            <div class="text-white text-center font-poppins mb-10">
                <h1 class="text-4xl font-bold my-2">
                    {#if event.state === 'CANCELLED'}
                        [ABGESAGT]
                    {/if}
                    {event.summary}</h1>
            </div>
            <div class="flex gap-5 bg-gray-700 rounded-lg shadow-lg">
                <div class="container mx-auto p-5 text-balance font-montserrat flex justify-start items-center">
                    <div>
                        {#if event.description}
                            {event.description}
                        {:else}
                            Es konnte keine Beschreibung gefunden werden🫠
                        {/if}
                    </div>
                </div>
                <div class={event.now == true ? 'container p-5 text-justify rounded-lg bg-gray-800 w-fit animate-pulse' : 'container p-5 text-justify rounded-lg bg-gray-800 w-fit'}>
                    <div class="flex flex-col justify-center items-start gap-2 font-montserrat">
                        {#if event.state == 'CANCELLED'}
                            <InfoMessage message='Veranstaltung wurde abgesagt!' />
                        {/if}
                        {#if teaserImage().copyright.url && teaserImage().copyright.text}
                            <p class="text-lg">
                                {#if teaserImage().copyright.text && teaserImage().copyright.url}
                                    📸 <a href={teaserImage().copyright.url} target="_blank">
                                        {teaserImage().copyright.text}
                                    </a>
                                {:else}
                                    📸 {teaserImage().copyright.text}
                                {/if}
                            </p>
                        {/if}
                        <div class="text-lg text-nowrap">
                            <div class="flex flex-row justify-start items-center">
                                <div>🗓️</div>
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
                        {#if event.url}
                            <div class="text-lg text-nowrap">
                                📍{event.location}
                            </div>
                        {/if}
                        {#if event.url}
                            <div class="text-lg text-nowrap">
                                🔗<a href={event.url} target="_blank">Zur Veranstaltungsseite</a>
                            </div>
                        {/if}
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>