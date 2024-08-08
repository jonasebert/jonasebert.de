<script>
    import Image from '$lib/components/image.svelte';
    import { FormatDate } from '$lib/util/date';
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
            {#if event.url}
                <div class="transition-transform duration-500 hover:scale-105">
                    <a href={event.url} target="_blank">
                        {#if event.teaserImage}
                            <Image src={event.teaserImage} alt={`Teaser Bild ${event.summary}`} className="w-full"/>
                        {:else}
                            <Image src="/home/teaser.webp" alt={`Teaser Bild ${event.summary}`} className="w-full"/>
                        {/if}
                    </a>
                </div>
            {:else}
                <div>
                    {#if event.teaserImage}
                        <Image src={event.teaserImage} alt={`Teaser Bild ${event.summary}`} className="w-full"/>
                    {:else}
                        <Image src="/home/teaser.webp" alt={`Teaser Bild ${event.summary}`} className="w-full"/>
                    {/if}
                </div>
            {/if}   
            <div class="p-4">
                <h2 class="text-xl font-semibold mb-2 font-poppins text-je-sand">
                    {#if event.url}
                        <a href={event.url} target="_blank">
                            {#if event.state === 'CANCELLED'}
                                [ABGESAGT]
                            {/if}
                            {event.summary}
                        </a>
                    {:else}
                        {#if event.state === 'CANCELLED'}
                            [ABGESAGT]
                        {/if}
                        {event.summary}
                    {/if}
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
                        <div class="text-sm rounded-lg bg-green-500 text-je-gray-500 py-1 px-2 mr-2">
                            {event.location}
                        </div>
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