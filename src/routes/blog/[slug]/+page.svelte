<script>
	import { name } from '$lib/store.js';
    import * as ph from '@prismicio/helpers';
    import { FormatDate } from '$lib/util/date';

	export let data;
    let { post } = data;

	function teaserImage() {
		if (ph.asImageSrc(post.data.teaser_image[0].image)) {
			return ph.asImageSrc(post.data.teaser_image[0].image);
		} else {
			return '/home/teaser.webp';
		}
	}
</script>

<svelte:head>
	<title>{ph.asText(post.data.title)} - {name}</title>
	<meta property="og:title" content={ph.asText(post.data.title)} />
	<meta property="og:image" content={teaserImage()} />
</svelte:head>

<div class="relative bg-fixed bg-no-repeat bg-center bg-cover" style="background-image: url({teaserImage()});">
	<div class="bg-black bg-opacity-50 p-5">
		<article class="container mx-auto text-justify py-10">
			<div class="text-white text-center font-poppins">
				<h1 class="text-4xl font-bold text-white my-2">{ph.asText(post.data.title)}</h1>
			</div>
		</article>
	</div>
</div>

<div class="container mx-auto p-5 text-pretty text-justify bg-je-gray-800">
	<div class="flex flex-wrap justify-center items-center gap-2 font-montserrat">
		{#if post.data.teaser_image[0].copyright}
			<p class="text-lg md:mr-40">📸 {post.data.teaser_image[0].copyright}</p>
		{/if}
		<!-- <p class="text-lg md:mr-40">
            {#if post.data.overwrite_publish_date}
                Veröffentlicht am: {FormatDate(ph.asDate(post.data.overwrite_publish_date),'day')}. {FormatDate(ph.asDate(post.data.overwrite_publish_date),'monthshort')} {FormatDate(ph.asDate(post.data.overwrite_publish_date),'year')}
            {:else}
                Veröffentlicht am: {FormatDate(ph.asDate(post.first_publication_date),'day')}. {FormatDate(ph.asDate(post.first_publication_date),'monthshort')} {FormatDate(ph.asDate(post.first_publication_date),'year')}
            {/if}
        </p> -->
		<!-- <div class="flex flex-wrap gap-2">
			{#if post.tags[0]}
				{#each post.tags as category}
					<div class="text-sm rounded-lg bg-green-400 text-je-gray-500 py-1 px-2">
						<a href="/blog/category/{category}">
							{category}
						</a>
					</div>
				{/each}
			{/if}
		</div> -->
	</div>
</div>

<!-- <div class="container mx-auto p-5 text-pretty md:text-pretty" style="font-family: Montserrat">
	<div class="mt-8">
		<svelte:component this={data.content} />
	</div>
</div> -->