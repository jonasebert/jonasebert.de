<script lang="ts">
    export let text: string = '';
    export let link: string = '';
    export let clickable: boolean = false;
    export let resize: number = 105;
</script>

{#if (clickable && link)}
    <a class="text-sm rounded-lg bg-green-500 text-je-gray-500 py-1 px-2 mr-2 hover:text-je-gray-500 hover:no-underline transition-transform duration-500 hover:scale-{resize}" href={link} target="_blank">
        <div>{text}</div>
    </a>
{:else}
    <div class="text-sm rounded-lg bg-green-500 text-je-gray-500 py-1 px-2 mr-2">{text}</div>
{/if}