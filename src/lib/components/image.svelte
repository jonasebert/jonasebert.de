<script lang="ts">
    import { contextMenuAction } from '$lib/store';
    export let src: string;
    export let alt: string = '';
    export let classNames: string = '';
</script>
  
<img {src} {alt} class={classNames} use:contextMenuAction decoding="async"/>  