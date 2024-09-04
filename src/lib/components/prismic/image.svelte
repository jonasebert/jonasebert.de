<script lang="ts">
    import * as ph from '@prismicio/helpers';
    import Image from '../image.svelte';

    export let slice;
</script>

<div>
    <Image src={ph.asImageSrc(slice)} alt={slice.alt} classNames="h-auto w-80 rounded-lg" />
    {#if slice.copyright}
        {#if slice.linkTo}
            <div>
                <p>📸 <a href={slice.linkTo.url} target={slice.linkTo.target}>{slice.copyright}</a></p>
            </div>
        {:else}
            <div>
                <p>📸 {slice.copyright}</p>
            </div>
        {/if}
    {/if}
</div>