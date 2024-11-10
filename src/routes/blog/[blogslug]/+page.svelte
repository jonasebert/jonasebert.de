<script lang="ts">
	// import Image from '$lib/components/image.svelte';
	import { name } from '$lib/store';
	import { FormatDate } from '$lib/util/date';
    import * as ph from '@prismicio/helpers';
	import { SliceZone } from '@prismicio/svelte';
	import Tags from '$lib/components/blocks/Tags.svelte';

	import Paragraph from '$lib/components/prismic/paragraph.svelte';
	import Image from '$lib/components/prismic/image.svelte';
	import Heading from '$lib/components/prismic/heading.svelte';
	import Lists from '$lib/components/prismic/lists.svelte';
	import Embed from '$lib/components/prismic/embed.svelte';
	import Code from '$lib/components/prismic/code.svelte';
	import { text } from '@sveltejs/kit';
	
	export let data;
    let { post } = data;

	const components = {
		paragraph: Paragraph,
		image: Image,
		heading1: Heading,
		heading2: Heading,
		heading3: Heading,
		heading4: Heading,
		heading5: Heading,
		heading6: Heading,
		'list-item': Lists,
		'o-list-item': Lists,
		embed: Embed,
		preformatted: Code
	};

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

<div class="container mx-auto p-5 text-pretty text-justify bg-je-mystical-schwarzgruen-700">
	<div class="flex flex-wrap justify-center items-center gap-2 font-montserrat">
		{#if post.data.teaser_image[0].image.copyright}
			<p class="text-lg md:mr-40">
				{#if post.data.teaser_image[0].copyright_link}
					📸 <a href={post.data.teaser_image[0].copyright_link.url} target={post.data.teaser_image[0].copyright_link.target}>
						{post.data.teaser_image[0].image.copyright}
					</a>
				{:else}
					📸 {post.data.teaser_image[0].image.copyright}
				{/if}
			</p>
		{/if}
		<p class="text-lg md:mr-40">
            {#if post.data.overwrite_publish_date}
                Veröffentlicht am: {FormatDate(ph.asDate(post.data.overwrite_publish_date),'day')}. {FormatDate(ph.asDate(post.data.overwrite_publish_date),'monthshort')} {FormatDate(ph.asDate(post.data.overwrite_publish_date),'year')}
            {:else}
                Veröffentlicht am: {FormatDate(ph.asDate(post.first_publication_date),'day')}. {FormatDate(ph.asDate(post.first_publication_date),'monthshort')} {FormatDate(ph.asDate(post.first_publication_date),'year')}
            {/if}
        </p>
		<div class="flex flex-wrap gap-2">
			{#if post.tags[0]}
				{#each post.tags as category}
					<Tags text={category} clickable={true} link="/blog/category/{category}" resize={110} target="_self" />
				{/each}
			{/if}
		</div>
	</div>
</div>

<div class="container mx-auto p-5 pb-12 text-pretty md:text-pretty" style="font-family: Montserrat">
	<div class="mt-8">
		<article>
			<SliceZone slices={post.data.body} {components}/>
		</article>
	</div>
</div>