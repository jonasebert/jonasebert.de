<!-- src/routes/[slug]/+page.svelte -->
<script>
	import { name } from '$lib/store.js';

	export let data;
</script>

<svelte:head>
	<title>{data.meta.meta.title} - {name}</title>
	<meta property="og:title" content={data.meta.meta.title} />
	<meta property="og:image" content='/blog/{data.meta.meta.teaserimage}' />
</svelte:head>

<div class="relative bg-fixed bg-no-repeat bg-center bg-cover" style="background-image: url('/blog/{data.meta.meta.teaserimage}');">
	<div class="bg-black bg-opacity-50 p-5">
		<article class="container mx-auto text-justify pt-10 pb-10">
			<div class="text-white text-center">
				<h1 class="text-4xl font-bold mb-4">{data.meta.meta.title}</h1>
			</div>
		</article>
	</div>
</div>

<div class="container mx-auto p-5 text-pretty text-justify bg-je-gray-800">
	<div class="flex flex-wrap justify-center items-center gap-2">
		{#if data.meta.meta.teaserimagecop}
			<p class="text-lg md:mr-40">📸 {data.meta.meta.teaserimagecop}</p>
		{/if}
		<p class="text-lg md:mr-40">Veröffentlicht am: {data.meta.meta.date}</p>
		{#if data.meta.meta.categories}
			{#each data.meta.meta.categories as postcategory}
				<div class="text-sm rounded-lg bg-green-400 text-je-gray-500 py-1 px-2">
					<a href="/blog/category/{postcategory}">
						{postcategory}
					</a>
				</div>
			{/each}
		{/if}
	</div>
</div>

<div class="container mx-auto p-5 text-pretty md:text-justify">
	<div class="mt-8">
		<svelte:component this={data.content} />
	</div>
</div>
