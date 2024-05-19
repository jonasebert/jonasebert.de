<script>
    import Image from '$lib/components/image.svelte';
    export let data;
</script>
    
<div class="container mx-auto px-4">
    <h1 class="text-5xl font-bold text-je-sand mt-2 pt-10 font-poppins">Termine</h1>
    <h2 class="text-4xl font-semibold text-je-sand mb-2 pb-10">Hier kannst du mich treffen!</h2>
    {#if data.events.events}
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {#each data.events.events as event}
        <div class="bg-gray-700 rounded-lg overflow-hidden shadow-lg">
            <div class="transition-transform duration-500 hover:scale-105">
            <a href={event.summary}>
            {#if event.teaserimage}
                    <Image src={event.teaserimage.fileUrl} alt={`Teaser Bild ${event.summary}`} className="w-full"/>
            {:else}
                <Image src="/home/teaser.webp" alt={`Teaser Bild ${event.summary}`} className="w-full"/>
            {/if}
            </a>
            </div>
            <div class="p-4">
            <h2 class="text-xl font-semibold mb-2 font-poppins">
                <a href={event.summary}>
                {event.summary}
                </a>
            </h2>
            <p class="text-gray-300 text-sm mb-4 font-montserrat">
                Veröffentlicht am {event.start}
            </p>
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
</div>
