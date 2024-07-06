<script>
    import * as ph from '@prismicio/helpers';
    import Image from '../image.svelte';

    export let slice;
</script>

<div>
    <Image src={ph.asImageSrc(slice)} alt={slice.alt} classNames="h-auto w-80 rounded-lg" />
</div>