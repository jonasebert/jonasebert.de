<script>
	import { name } from '$lib/store.js';
    import { contextMenuAction } from '$lib/store';

    export let data;
</script>

<svelte:head>
	<title>{data.category} - {name}</title>
	<meta property="og:title" content={data.category} />
</svelte:head>

<div class="container mx-auto px-4">
    <h1>Blog</h1>
    <h2>Kategorie: { data.category }</h2>
  
    {#if data.posts}
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {#each data.posts as post}
          <div class="bg-gray-700 rounded-lg overflow-hidden shadow-lg">
            {#if post.meta.teaserimage}
              <a href={post.path}>
                <img class="w-full transition-transform duration-500 hover:scale-105" src="/blog/{post.meta.teaserimage}" alt="Teaser Blog" use:contextMenuAction>
              </a>
            {:else}
            <img class="w-full transition-transform duration-500 hover:scale-105" src="/home/teaser.webp" alt="Teaser Blog" use:contextMenuAction>
            {/if}
            <div class="p-4">
              <h2 class="text-xl font-semibold mb-2">
                <a href={post.path}>
                  {post.meta.title}
                </a>
              </h2>
              <p class="text-gray-300 text-sm mb-4">
                Veröffentlicht am {post.meta.date}
              </p>
              <div class="flex flex-row flex-wrap gap-2">
                {#if post.meta.categories}
                  {#each post.meta.categories as postcategory}
                    <div class="text-sm rounded-lg bg-green-400 text-je-gray-500 py-1 px-2 mr-2">
                      <a href="/blog/category/{postcategory}">
                        {postcategory}
                      </a>
                    </div>
                  {/each}
                {/if}
              </div>
            </div>
          </div>
        {/each}
      </div>
    {:else}
      <div class="text-center py-8">
        Es konnten keine Beiträge gefunden werden!
      </div>
    {/if}
  </div>
  