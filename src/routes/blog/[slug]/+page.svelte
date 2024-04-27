<!-- src/routes/[slug]/+page.svelte -->
<script>
	import { name } from '$lib/store.js';

	export let data;
</script>

<svelte:head>
	<title>{data.title} - {name}</title>
	<meta property="og:title" content={data.title} />
</svelte:head>

<article class="container">
	<h1>{data.title}</h1>
	<p>Published: {data.date}</p>
	<svelte:component this={data.content} />
</article>