<script>
	import Image from '$lib/components/image.svelte';
	import { name } from '$lib/store';
	import { FormatDate } from '$lib/util/date';
    import * as ph from '@prismicio/helpers';

	export let data;
    let { posts } = data;

	function teaserImage() {
		if (ph.asImageSrc(posts.data.teaser_image[0].image)) {
			return ph.asImageSrc(posts.data.teaser_image[0].image);
		} else {
			return '/home/teaser.webp';
		}
	}
</script>

<svelte:head>
	<title>{ph.asText(posts.data.title)} - {name}</title>
	<meta property="og:title" content={ph.asText(posts.data.title)} />
	<meta property="og:image" content={teaserImage()} />
</svelte:head>

<div class="relative bg-fixed bg-no-repeat bg-center bg-cover" style="background-image: url({teaserImage()});">
	<div class="bg-black bg-opacity-50 p-5">
		<article class="container mx-auto text-justify py-10">
			<div class="text-white text-center font-poppins">
				<h1 class="text-4xl font-bold text-white my-2">{ph.asText(posts.data.title)}</h1>
			</div>
		</article>
	</div>
</div>

<div class="container mx-auto p-5 text-pretty text-justify bg-je-gray-800">
	<div class="flex flex-wrap justify-center items-center gap-2 font-montserrat">
		{#if posts.data.teaser_image[0].image.copyright}
			<p class="text-lg md:mr-40">
				{#if posts.data.teaser_image[0].copyright_link}
					📸 <a href={posts.data.teaser_image[0].copyright_link.url} target={posts.data.teaser_image[0].copyright_link.target}>
						{posts.data.teaser_image[0].image.copyright}
					</a>
				{:else}
					📸 {posts.data.teaser_image[0].image.copyright}
				{/if}
			</p>
		{/if}
		<p class="text-lg md:mr-40">
            {#if posts.data.overwrite_publish_date}
                Veröffentlicht am: {FormatDate(ph.asDate(posts.data.overwrite_publish_date),'day')}. {FormatDate(ph.asDate(posts.data.overwrite_publish_date),'monthshort')} {FormatDate(ph.asDate(posts.data.overwrite_publish_date),'year')}
            {:else}
                Veröffentlicht am: {FormatDate(ph.asDate(posts.first_publication_date),'day')}. {FormatDate(ph.asDate(posts.first_publication_date),'monthshort')} {FormatDate(ph.asDate(posts.first_publication_date),'year')}
            {/if}
        </p>
		<div class="flex flex-wrap gap-2">
			{#if posts.tags[0]}
				{#each posts.tags as category}
					<div class="text-sm rounded-lg bg-green-400 text-je-gray-500 py-1 px-2">
						<a href="/blog/category/{category}">
							{category}
						</a>
					</div>
				{/each}
			{/if}
		</div>
	</div>
</div>

<div class="container mx-auto p-5 text-pretty md:text-pretty" style="font-family: Montserrat">
	<div class="mt-8">
		<article>
			{#each posts.data.body as contentBlock}
				{#if contentBlock.type === 'paragraph'}
					<p>{contentBlock.text}</p>
				{:else if contentBlock.type === 'heading1'}
					<h1 class="text-5xl font-bold text-je-sand my-2 py-10">{contentBlock.text}</h1>
				{:else if contentBlock.type === 'heading2'}
					<h2 class="text-4xl font-semibold text-je-sand my-2 py-10">{contentBlock.text}</h2>
				{:else if contentBlock.type === 'heading3'}
					<h3 class="text-3xl font-semibold text-je-sand my-2 py-10">{contentBlock.text}</h3>
				{:else if contentBlock.type === 'heading4'}
					<h4 class="text-2xl font-semibold my-2 py-10">{contentBlock.text}</h4>
				{:else if contentBlock.type === 'heading5'}
					<h5>{contentBlock.text}</h5>
				{:else if contentBlock.type === 'heading6'}
					<h6>{contentBlock.text}</h6>
				{:else if contentBlock.type === 'hyperlink'}
					<a href={contentBlock.url} target={contentBlock.target}>{contentBlock.text}</a>
				{:else if contentBlock.type === 'image'}
					<Image src={ph.asImageSrc(contentBlock)} alt={contentBlock.alt} classNames="h-auto w-80 rounded-lg" />
				{:else if contentBlock.type === 'list-item'}
					<ul class="list-disc"><li>{contentBlock.text}</li></ul>
				{:else if contentBlock.type === 'o-list-item'}
					<ol class="list-decimal"><li>{contentBlock.text}</li></ol>
				{:else if contentBlock.type === 'preformatted'}
					<code>{contentBlock.text}</code>
				{:else if contentBlock.type === 'embed'}
					<div class="iframe-wrapper rounded-xl overflow-hidden h-52 w-52">
						<div class="iframe-container">
							{@html contentBlock.oembed.html}
						</div>
					</div>
				{/if}
			{/each}
		</article>
	</div>
</div>