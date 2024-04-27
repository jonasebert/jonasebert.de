<script>
    export let data;
</script>

<div class="container">
    <h1>Kategorie {data.category}</h1>

    <ul>
        {#each data.posts as post }
            <li>
                <h2>
                    <a href={post.path}>
                        {post.meta.title}
                    </a>
                </h2>
                Published {post.meta.date}
                <div class="flex flex-row flex-wrap">
                    {#each post.meta.categories as postcategory}
                        <div class="text-sm rounded-lg bg-je-green-300 text-je-gray-500 py-1 px-1 mr-2 mb-1">{postcategory}</div>
                    {/each}
                </div>
            </li>
        {/each}
    </ul>
</div>