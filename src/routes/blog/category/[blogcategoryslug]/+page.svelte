<script lang="ts">
    import { name } from '$lib/store';
    import BlogTiles from '$lib/components/tiles/Blog.svelte';

    export let data;
    let { posts } = data;
</script>

<svelte:head>
	<title>{data.category} - {name}</title>
	<meta property="og:title" content={data.category} />
</svelte:head>

<div class="container mx-auto px-4 pb-12">
    <h1 class="text-5xl font-poppins font-bold text-je-sand my-2 py-10">Blog</h1>
    <h2 class="text-3xl font-poppins pb-10">Kategorie: {data.category}</h2>
        {#if posts[0]}
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 place-items-baseline">
                {#each posts as post}
                    <BlogTiles item={post} />
                {/each}
            </div>
        {:else}
            <div class="text-center py-8 font-montserrat">
                Es konnten keine Beiträge gefunden werden!
            </div>
        {/if}
</div>