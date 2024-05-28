<script>
    import Image from '$lib/components/image.svelte';
    export let items;
</script>

{#if items.events}
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
        {#each items.events as event}
        <div class="bg-gray-700 rounded-lg overflow-hidden shadow-lg">
            <!-- <div class="transition-transform duration-500 hover:scale-105"> -->
            <div>
            <!-- <a href={event.summary}> -->
            {#if event.teaserImage}
                    <Image src={event.teaserImage} alt={`Teaser Bild ${event.summary}`} className="w-full"/>
            {:else}
                <Image src="/home/teaser.webp" alt={`Teaser Bild ${event.summary}`} className="w-full"/>
            {/if}
            <!-- </a> -->
            </div>
            <div class="p-4">
            <h2 class="text-xl font-semibold mb-2 font-poppins">
                <!-- <a href={event.summary}> -->
                {event.summary}
                <!-- </a> -->
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
                    <div class="text-sm rounded-lg bg-green-400 text-je-gray-500 py-1 px-2 mr-2">
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