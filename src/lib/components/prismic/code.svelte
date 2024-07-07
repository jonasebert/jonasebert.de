<script>
    import * as ph from '@prismicio/helpers';
    import { HighlightAuto } from "svelte-highlight";
    import { githubDarkDimmed } from "svelte-highlight/styles";
    
    export let slice;
</script>

<svelte:head>
    {@html githubDarkDimmed}
</svelte:head>

<div>
    <div>
        <HighlightAuto code={slice.text}/>
    </div>
</div>