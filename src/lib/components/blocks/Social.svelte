<script lang="ts">
    import RoundedIcon from "$lib/components/button/RoundedIcon.svelte"
    import { faInstagram, faThreads, faYoutube, faTiktok, faLinkedinIn, faGithub } from "@fortawesome/free-brands-svg-icons"; // For new Icons: https://fontawesome.com/search

    export let hoverBGColor = "";
</script>

<div class="space-y-2">
    <RoundedIcon href="https://www.instagram.com/jonas_ebert" icon={faInstagram} target="_blank" hoverBGColor={hoverBGColor} />
    <RoundedIcon href="https://www.threads.net/@jonas_ebert" icon={faThreads} target="_blank" hoverBGColor={hoverBGColor} />
    <RoundedIcon href="https://www.youtube.com/@jonas_ebert" icon={faYoutube} target="_blank" hoverBGColor={hoverBGColor} />
    <RoundedIcon href="https://www.tiktok.com/@jonas.ebert3" icon={faTiktok} target="_blank" hoverBGColor={hoverBGColor} />
    <RoundedIcon href="https://www.linkedin.com/in/jonasebert" icon={faLinkedinIn} target="_blank" hoverBGColor={hoverBGColor} />
    <RoundedIcon href="https://github.com/jonasebert/" icon={faGithub} target="_blank" hoverBGColor={hoverBGColor} />
</div>