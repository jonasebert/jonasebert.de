<script lang="ts">
	import { name } from '$lib/store';
	import { FormatDate } from '$lib/util/date';

    export let data;
    const event = data.event[0];

    function teaserImage() {
        if (event.teaserImage) {
            return event.teaserImage;
        } else {
            return '/home/teaser.webp';
        }
    }
</script>

<svelte:head>
    <title>{event.summary} - {FormatDate(event.start, 'date')} - {name}</title>
    <meta property="og:title" content="{event.summary} - {FormatDate(event.start, 'date')}" />
    <meta property="og:image" content={teaserImage().url} />
</svelte:head>

<div class="relative bg-fixed bg-no-repeat bg-center bg-cover" style="background-image: url({teaserImage().url});">
    <div class="bg-black bg-opacity-50 p-5">
        <div class="container mx-auto text-justify py-10">
            <div class="text-white text-center font-poppins">
                <h1 class="text-4xl font-bold my-2">{event.summary}</h1>
            </div>
        </div>
    </div>
</div>

<div class="container mx-auto p-5 text-pretty text-justify bg-je-gray-800">
    <div class="flex flex-wrap justify-center items-center gap-2 font-montserrat">
        {#if teaserImage().copyright.url && teaserImage().copyright.text}
            <p class="text-lg md:mr-40">
                {#if teaserImage().copyright.text && teaserImage().copyright.url}
                    📸 <a href={teaserImage().copyright.url} target="_blank">
                        {teaserImage().copyright.text}
                    </a>
                {:else}
                    📸 {teaserImage().copyright.text}
                {/if}
            </p>
        {/if}
        <div class="text-lg md:mr-40 flex flex-col">
            {#if event.datetype === 'date'}
                <p class="text-lg">
                    {FormatDate(event.start, 'date')} - {FormatDate(event.end, 'date')}
                </p>
                <p class="text-lg">
                    Ganztägig
                </p>
            {:else if FormatDate(event.start, 'date') === FormatDate(event.end, 'date') && event.datetype === 'date-time'}
                <p class="text-lg">
                    {FormatDate(event.start, 'datelong')}
                </p>
                <p class="text-lg">
                    {FormatDate(event.start, 'time')} - {FormatDate(event.end, 'time')}
                </p>
            {:else}
                <p class="text-lg">
                    {FormatDate(event.start, 'date')} {FormatDate(event.start, 'time')} - {FormatDate(event.end, 'date')} {FormatDate(event.end, 'time')}
                </p>
            {/if}
        </div>
    </div>
</div>

<div class="container mx-auto p-5 text-pretty font-montserrat">
    <div class="mt-8">
        <div>
            {event.description}
        </div>
    </div>
</div>