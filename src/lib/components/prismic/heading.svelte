<script lang="ts">
    export let slice;
</script>

<div>
    {#if slice.type === 'heading1'}
        <h1 class="text-5xl font-bold text-je-magical-fata_morgana my-2 py-5">{slice.text}</h1>
    {:else if slice.type === 'heading2'}
        <h2 class="text-4xl font-semibold text-je-magical-fata_morgana my-2 py-5">{slice.text}</h2>
    {:else if slice.type === 'heading3'}
        <h3 class="text-3xl font-semibold text-je-magical-fata_morgana my-2 py-5">{slice.text}</h3>
    {:else if slice.type === 'heading4'}
        <h4 class="text-2xl font-semibold my-2 py-5">{slice.text}</h4>
    {:else if slice.type === 'heading5'}
        <h5>{slice.text}</h5>
    {:else if slice.type === 'heading6'}
        <h6>{slice.text}</h6>
    {:else}
        <pre class="text-red-700">Heading not found!</pre>
    {/if}
</div>