<script>
  import BlogTiles from '$lib/components/blog_tiles.svelte';
  import { name } from '$lib/store';
  export let data;
</script>

<svelte:head>
	<title>{data.category} - {name}</title>
	<meta property="og:title" content={data.category} />
</svelte:head>

<div class="container mx-auto px-4">
    <h1 class="text-5xl font-bold text-je-sand my-2 pt-10 font-poppins">Blog</h1>
    <h2 class="pb-10 font-poppins">Kategorie: { data.category }</h2>
    <BlogTiles items={data}></BlogTiles>
  </div>
  