<script>
    import * as ph from '@prismicio/helpers';

    export let slice;

    let html = slice.oembed.html
      .replace(/width="\d+"/, `class="w-full aspect-video my-8 rounded-xl border-2 border-je-green-300"`)
      .replace(/height="\d+"/, "");
</script>

<div class="flex">
    <div
        class="lg:w-[75%] w-full"
        data-oembed={slice.oembed.embed_url}
        data-oembed-type={slice.oembed.type}
        data-oembed-proviver={slice.oembed.provider_name}
    >
        {@html html}
    </div>
</div>