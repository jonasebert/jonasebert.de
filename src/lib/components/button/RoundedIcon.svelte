<script>
    import Fa from "svelte-fa";

    export let href = "";
    export let target = "";
    export let icon;
    export let hoverBGColor = "";
</script>

<a {href} class="inline-flex items-center justify-center p-3 rounded-full bg-transparent hover:text-je-sand hover:bg-{hoverBGColor} transition-transform duration-400 hover:scale-110" title={icon.iconName} target={target}>
    <div class="w-5 h-5 flex justify-center">
        <Fa {icon} size="lg" />
    </div>
</a>