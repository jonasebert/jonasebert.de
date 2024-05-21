<script>
    import CalendarTiles from '$lib/components/calendar_tiles.svelte';
    export let data;
</script>
    
<div class="container mx-auto px-4">
    <h1 class="text-5xl font-bold text-je-sand mt-2 pt-10 font-poppins">Termine</h1>
    <h2 class="text-4xl font-semibold text-je-sand mb-2 pb-10">Hier kannst du mich treffen!</h2>
    <CalendarTiles items={data}></CalendarTiles>
</div>
