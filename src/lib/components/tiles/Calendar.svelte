<script lang="ts">
    import Image from '$lib/components/image.svelte';
    import { FormatDate } from '$lib/util/date';
	import Tags from '$lib/components/blocks/Tags.svelte';
    export let items;

    const events = items.map(event => {
        return {
            ...event,
            start: FormatDate(event.start, ''),
            end: FormatDate(event.end, ''),
            startday: FormatDate(event.start, 'day'),
            endday: FormatDate(event.end, 'day'),
            startmonth: FormatDate(event.start, 'month'),
            endmonth: FormatDate(event.end, 'month'),
            startyear: FormatDate(event.start, 'year'),
            endyear: FormatDate(event.end, 'year'),
            starttime: FormatDate(event.start, 'time'),
            endtime: FormatDate(event.end, 'time'),
            startdate: FormatDate(event.start, 'date'),
            enddate: FormatDate(event.end, 'date'),
        };
    });
</script>

{#if events}
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
        {#each events as event}
        <div class={event.now == true ? 'bg-gray-700 rounded-lg overflow-hidden shadow-lg animate-pulse' : 'bg-gray-700 rounded-lg overflow-hidden shadow-lg'}>
            <div class="relative z-20 transition-transform duration-500 hover:scale-105">
                <a href="/calendar/{event.id}">
                    {#if event.teaserImage.url && event.teaserImage.url != null}
                        <Image src={event.teaserImage.url} alt={`Teaser Bild ${event.summary}`} className="w-full"/>
                    {:else}
                        <Image src="/home/teaser.webp" alt={`Teaser Bild ${event.summary}`} className="w-full"/>
                    {/if}
                </a>
            </div>
            <div class="p-4 relative z-30 bg-gray-700">
                <h2 class="text-xl font-semibold mb-2 font-poppins text-je-sand hyphens-auto break-words">
                    <a href="/calendar/{event.id}">
                        {#if event.state === 'CANCELLED'}
                            [ABGESAGT]
                        {/if}
                        {event.summary}
                    </a>
                </h2>
                <div class="flex flex-row items-end gap-6 mb-2">
                    {#if event.datetype === 'date'}
                        <p class="text-lg">
                            {event.startdate} - {event.enddate}
                        </p>
                        <p class="text-lg">
                            Ganztägig
                        </p>
                    {:else if event.startdate === event.enddate && event.datetype === 'date-time'}
                        <p class="text-lg">
                            {event.startdate}
                        </p>
                        <p class="text-lg">
                            {event.starttime} - {event.endtime}
                        </p>
                    {:else}
                        <p class="text-lg">
                            {event.startdate} {event.starttime} - {event.enddate} {event.endtime}
                        </p>
                    {/if}
                </div>
                <div class="flex flex-row flex-wrap gap-2 font-montserrat">
                    {#if event.location}
                        <Tags text={event.location} clickable={true} link="https://www.google.de/maps/place/{event.location}" />
                    {/if}
                </div>
            </div>
        </div>
        {/each}
    </div>
    {:else}
    <div class="text-center py-8 font-montserrat">
        Es konnten keine Termine gefunden werden!
    </div>
{/if}