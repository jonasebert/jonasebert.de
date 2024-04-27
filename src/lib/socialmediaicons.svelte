<script>
    // Importe
    import { Icon } from 'svelte-icons-pack';
	import { AiOutlineInstagram, AiOutlineYoutube } from 'svelte-icons-pack/ai'; /* New Icons from https://leshak.github.io/svelte-icons-pack/ */
	import { BsThreads } from 'svelte-icons-pack/bs';
	import { RiLogosBlueskyLine } from "svelte-icons-pack/ri";

    // Icons für Soziale Netzwerke
	let icons = [
		{ id: 'instagram', component: AiOutlineInstagram, href: 'https://www.instagram.com/jonas_ebert/', size: '32' },
		{ id: 'threads', component: BsThreads, href: 'https://www.threads.net/@jonas_ebert/', size: '25' },
		{ id: 'bluesky', component: RiLogosBlueskyLine, href: 'https://bsky.app/profile/jonasebert.bsky.social', size: '32' },
		{ id: 'youtube', component: AiOutlineYoutube, href: 'https://www.youtube.com/@jonas_ebert/', size: '32' },
  	];
	let hoveredIconId = '';
</script>

<div class="flex flex-row space-x-4 items-center">
    {#each icons as icon}
      <a href={icon.href} target="_blank">
        <Icon
          src={icon.component}
          size={icon.size}
          color={hoveredIconId === icon.id ? '#efe9ce' : '#abb2bf'}
          viewBox="0 0 1024 1024"
          title={icon.id}
        ></Icon>
      </a>
    {/each}
</div>