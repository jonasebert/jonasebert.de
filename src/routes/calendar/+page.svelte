<script lang="ts">
    import InfoMessage from '$lib/components/blocks/InfoMessage.svelte';
    import CalendarTiles from '$lib/components/tiles/Calendar.svelte';
    export let data;

    const { events } = data;
</script>
    
<div class="container mx-auto px-4">
    <h1 class="text-5xl font-bold text-je-sand mt-2 pt-10 font-poppins">Termine</h1>
    <h2 class="text-4xl font-semibold text-je-sand mb-2 pb-10">Hier kannst du mich treffen!</h2>
    {#if data.events[0]}
        <CalendarTiles items={events}></CalendarTiles>
    {:else}
        <div class="text-center py-8 font-montserrat">
            <InfoMessage message="Es konnten aktuell keine Veranstaltungen gefunden werden!"></InfoMessage>
        </div>
    {/if}
</div>
