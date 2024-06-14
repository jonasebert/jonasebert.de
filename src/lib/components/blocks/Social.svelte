<script>
    import RoundedIcon from "$lib/components/button/RoundedIcon.svelte"
    import { faInstagram, faThreads, faBluesky, faYoutube, faTiktok } from "@fortawesome/free-brands-svg-icons";

    export let hoverBGColor = "";
</script>

<div class="space-y-2">
    <RoundedIcon href="https://www.instagram.com/jonas_ebert" icon={faInstagram} target="_blank" hoverBGColor={hoverBGColor} />
    <RoundedIcon href="https://www.threads.net/@jonas_ebert" icon={faThreads} target="_blank" hoverBGColor={hoverBGColor} />
    <RoundedIcon href="https://bsky.app/profile/jonasebert.bsky.social" icon={faBluesky} target="_blank" hoverBGColor={hoverBGColor} />
    <RoundedIcon href="https://www.youtube.com/@jonas_ebert" icon={faYoutube} target="_blank" hoverBGColor={hoverBGColor} />
    <RoundedIcon href="https://www.tiktok.com/@jonas.ebert3" icon={faTiktok} target="_blank" hoverBGColor={hoverBGColor} />
</div>