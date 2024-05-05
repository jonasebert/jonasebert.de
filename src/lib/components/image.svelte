<!-- src/lib/components/Image.svelte -->
<script>
    import { contextMenuAction } from '$lib/store';
    export let src;
    export let alt = '';
    export let classNames = '';
</script>
  
<img {src} {alt} class="{classNames}" use:contextMenuAction />  