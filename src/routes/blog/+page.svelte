<script>
  export let data;
  import BlogTiles from '$lib/components/blog_tiles.svelte';
</script>
  
<div class="container mx-auto px-4">
  <h1 class="text-5xl font-bold text-je-sand my-2 py-10 font-poppins">Blog</h1>
  <BlogTiles items={data}/>
</div>
