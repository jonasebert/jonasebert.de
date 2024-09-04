<script lang="ts">
    export let slice;
</script>

<div>
    {#if slice.type === 'list-item'}
        <ul class="list-disc"><li>{slice.text}</li></ul>
    {:else if slice.type === 'o-list-item'}
        <ol class="list-decimal"><li>{slice.text}</li></ol>
    {:else}
        <pre class="text-red-700">Keine Liste gefunden!</pre>
    {/if}
</div>