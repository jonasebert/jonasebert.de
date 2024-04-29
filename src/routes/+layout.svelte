<script>
	// Importe
	import SocialMediaIcons from '$lib/socialmediaicons.svelte';
	import { contextMenuAction, logo_small_clear } from '$lib/store';
	import '../app.css';

	// Initialisierung Variabeln
	import { name, logo_clear, uri} from '$lib/store';
	let isResponsive = false;
	let currentYear = new Date().getFullYear();

	// Links
	let menuLinks = [
		{ title: 'Home', href: '/'},
		{ title: 'Aktuelles', href: '/blog'},
		{ title: 'Über mich', href: '/about'},
		//{ title: 'Kontakt', href: '/contact'}
	];
	let legalLinks = [
		{ title: 'Impressum', href: '/legal/imprint'},
		{ title: 'Datenschutzerklärung', href: '/legal/privacy'}
	];
	let footerLinks = [
		{ title: 'B\'90/DIE GRÜNEN Braunschweig', href: 'https://gruene-braunschweig.de/'}
	];

	//Funktion zum Umschalten des responsiven Headers
	function toggleMenu() {
		isResponsive = !isResponsive;
	}
	// Funktion zum Einklappen des Menüs nach der Navigation
	function closeMenu() {
		isResponsive = false;
	}
	// Reactive statement, das auf Änderungen der aktuellen Route reagiert
	$: activeRoute = $uri.url.pathname;
	$: pageTitle =
		activeRoute === '/' ? 'Home - ' + name
		: activeRoute === '/blog' ? 'Aktuelles - ' + name
		: activeRoute === '/about' ? 'Über mich - ' + name
		: activeRoute === '/contact' ? 'Kontakt - ' + name
		: activeRoute === '/legal/privacy' ? 'Datenschutzerklärung - ' + name
		: activeRoute === '/legal/imprint' ? 'Impressum - ' + name
			: name;
</script>

<svelte:head>
	<title>{pageTitle}</title>
</svelte:head>

<header class="bg-je-green-500 text-je-sand p-5">
	<div class={isResponsive ? 'flex flex-col items-start w-full' : 'flex justify-between items-center w-full'} id="respHeader">
	  <a href="/" class={isResponsive ? 'flex items-center justify-start w-full flex-shrink-0' : 'flex items-center justify-center w-1/6'}>
		<img src={logo_clear} alt="Logo von {name}" class="h-auto w-auto" use:contextMenuAction />
	  </a>
	  <a href="#none" class="md:hidden fixed right-1 top-1 p-2.5 text-3x1 cursor-pointer z-50" on:click={toggleMenu}>
		{isResponsive ? '✕' : '☰'}
	  </a>
	  <div class={isResponsive ? 'flex flex-col items-left w-full' : 'hidden md:flex md:items-center md:justify-end md:w-1/2'}>
		{#each menuLinks as link}
		  <a class={activeRoute === link.href ? 'font-bold p-2 rounded-md text-lg hover:font-bold' : 'p-2 rounded-md text-lg hover:font-bold'} href={link.href} on:click={closeMenu}> {link.title} </a>
		{/each}
	  </div>
	</div>
</header>

<main>
	<slot />
</main>

<footer class="pt-10">
	<div class="bg-je-gray-700 flex flex-wrap justify-center items-center text-center pt-6 pb-6 pl-5 pr-5">
		<div class="w-full sm:w-auto flex justify-center p-2">
			<a href="/" class="logo">
				<img src={logo_clear} alt="Logo von {name}" class="max-w-xs h-auto" use:contextMenuAction />
			</a>
		</div>
		<div class="flex-1 p-2">
			<h5 class="uppercase">{name}</h5>
			{#each menuLinks as link}
				<a href={link.href} class="block mt-1"> {link.title} </a>
			{/each}
		</div>
		<div class="flex-1 p-2">
			<h5 class="uppercase">Rechtliches</h5>
			{#each legalLinks as link}
				<a class="legal block mt-1" href={link.href}> {link.title} </a>
			{/each}
		</div>
		<div class="flex-1 p-2">
			<h5 class="uppercase">Links</h5>
			{#each footerLinks as link}
				<a href={link.href} target="_blank" class="block mt-1"> {link.title} </a>
			{/each}
		</div>
	</div>
	<div class="bg-je-gray-900 flex flex-col justify-center items-center text-center gap-5 pt-6 pb-6 pl-5 pr-5">
		<div>
			<SocialMediaIcons />
		</div>
		<div>
			<p>&copy; 2023 - {currentYear} {name}</p>
			<p>
				Made with <a href="https://kit.svelte.dev/" target="_blank">SvelteKit</a>,
				<a href="https://tailwindcss.com/" target="_blank">TailwindCSS</a>
				hosted on <a href="https://vercel.com/" target="_blank">Vercel</a>
			</p>
		</div>
	</div>
</footer>
