<script>
    import Image from '$lib/components/image.svelte';
    import { FormatDate } from '$lib/util/date';
    import * as ph from "@prismicio/helpers";
    export let item;
</script>

<div class="bg-gray-700 rounded-lg overflow-hidden shadow-lg">
    <div class="relative z-20 transition-transform duration-500 hover:scale-105">
        <a href={item.url}>
        {#if item.data.teaser_image[0]}
                <Image src={ph.asImageSrc(item.data.teaser_image[0].image)} alt="Teaser Blog {ph.asText(item.title)}" classNames="w-full"/>
        {:else}
            <Image src="/home/teaser.webp" alt="Teaser Blog {ph.asText(item.title)}" classNames="w-full"/>
        {/if}
        </a>
    </div>
    <div class="p-4 relative z-30 bg-gray-700">
        <h2 class="text-xl font-semibold mb-2 font-poppins text-je-sand break-words hyphens-auto">
            <a href={item.url}>
                {ph.asText(item.data.title)}
            </a>
        </h2>
        <p class="text-gray-300 text-sm mb-4 font-montserrat">
            {#if item.data.overwrite_publish_date}
                Veröffentlicht am {FormatDate(ph.asDate(item.data.overwrite_publish_date),'day')}. {FormatDate(ph.asDate(item.data.overwrite_publish_date),'monthshort')} {FormatDate(ph.asDate(item.data.overwrite_publish_date),'year')}
            {:else}
                Veröffentlicht am {FormatDate(ph.asDate(item.first_publication_date),'day')}. {FormatDate(ph.asDate(item.first_publication_date),'monthshort')} {FormatDate(ph.asDate(item.first_publication_date),'year')}
            {/if}
        </p>
        <div class="flex flex-row flex-wrap gap-2 font-montserrat">
            {#if item.tags[0]}
            {#each item.tags as category}
                <div class="text-sm rounded-lg bg-green-500 text-je-gray-500 py-1 px-2 mr-2 transition-transform duration-500 hover:scale-110 break-words hyphens-auto">
                    <a href="/blog/category/{category}" target="_self" class="hover:text-je-gray-500">
                        {category}
                    </a>
                </div>
            {/each}
            {/if}
        </div>
    </div>
</div>