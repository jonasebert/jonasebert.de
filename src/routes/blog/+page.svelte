<script>
    import BlogTiles from '$lib/components/tiles/Blog.svelte';
    import InfoMessage from '$lib/components/blocks/InfoMessage.svelte';

    export let data;
    let { posts } = data;
</script>

<div class="container mx-auto px-4">
    <h1 class="text-5xl font-poppins font-bold text-je-sand my-2 py-10">Blog</h1>
        {#if posts[0]}
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
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