<script>
	// Importe
	import SocialMediaIcons from '$lib/socialmediaicons.svelte';
	import '../app.css';

	//Vercel Speed Insights
	import { injectSpeedInsights } from '@vercel/speed-insights/sveltekit';
	injectSpeedInsights();

	// Initialisierung Variabeln
	import { name, logo_clear, uri, pronouns, job} from '$lib/store';
	import Image from '$lib/components/image.svelte';
	let isResponsive = false;
	let currentYear = new Date().getFullYear();

	// Links
	let menuLinks = [
		{ title: 'Home', href: '/'},
		{ title: 'Aktuelles', href: '/blog'},
		{ title: 'Über mich', href: '/about'},
		{ title: 'Kontakt', href: '/contact'}
	];
	let legalLinks = [
		{ title: 'Impressum', href: '/legal/imprint'},
		{ title: 'Datenschutzerklärung', href: '/legal/privacy'}
	];
	let footerLinks = [
		{ title: 'B\'90/DIE GRÜNEN Braunschweig', href: 'https://gruene-braunschweig.de/'}
	];

	// Reactive statement, das auf Änderungen der aktuellen Route reagiert
	$: activeRoute = $uri.url.pathname;
	$: pageTitle =
		activeRoute === '/' ? name + ' (' + pronouns +') - ' + job
		: activeRoute === '/blog' ? 'Aktuelles - ' + name
		: activeRoute === '/about' ? 'Über mich - ' + name
		: activeRoute === '/contact' ? 'Kontakt - ' + name
		: activeRoute === '/legal/privacy' ? 'Datenschutzerklärung - ' + name
		: activeRoute === '/legal/imprint' ? 'Impressum - ' + name
			: name + ' (' + pronouns +') - ' + job;

	// Funktion zum Umschalten des responsiven Headers
	function toggleMenu() {
		isResponsive = !isResponsive;
	}
	// Funktion zum Einklappen des Menüs nach der Navigation
	function closeMenu() {
		isResponsive = false;
	}

	// Funktion, um zum Seitenanfang zu scrollen
	function scrollToTop() {
    	window.scrollTo({ top: 0, behavior: 'smooth' });
	}
	import { onMount } from 'svelte';
	let isVisible = false;
	onMount(() => {
		window.addEventListener('scroll', () => {
			isVisible = window.scrollY > 100;
		});
	});
</script>

<svelte:head>
	<title>{pageTitle}</title>
</svelte:head>

<header class="bg-je-green-500 font-poppins text-je-sand p-5 sticky top-0 w-full z-10 shadow-lg">
	<div class={isResponsive ? 'flex flex-col items-start w-full' : 'flex justify-between items-center w-full'} id="respHeader">
		<div class="flex flex-row">
			<div>
				<a href="/" class={isResponsive ? 'flex items-center justify-start w-1/2 flex-shrink-0' : 'flex items-center justify-start w-1/2'}>
					<Image src={logo_clear} alt="Logo von {name}" classNames="h-auto w-auto"/>
				</a>
			</div>
			<div class="flex items-center">
				<a href="#none" class="md:hidden text-3x1 cursor-pointer z-50" on:click={toggleMenu}>
					{isResponsive ? '✕' : '☰'}
				</a>
			</div>
		</div>
		<div class={isResponsive ? 'flex flex-col items-left w-full pl-4 pt-4' : 'hidden md:flex md:items-center md:justify-end'}>
			{#each menuLinks as link}
		  		<a class={activeRoute === link.href ? 'font-bold p-2 rounded-md text-lg hover:font-bold' : 'p-2 rounded-md text-lg hover:font-bold'} href={link.href} on:click={closeMenu}> {link.title} </a>
			{/each}
	  	</div>
	</div>
</header>

<main>
	<slot />
	{#if isVisible}
		<div>
			<button class="fixed bottom-4 right-4 bg-je-green-500 hover:bg-je-green-700 text-white font-bold py-3 px-3 rounded-full transition-transform duration-400 hover:scale-110 shadow-xl" on:click={scrollToTop}>
				<img src="/icons/arrow_up.svg" alt="Icon Pfeil nach oben" class="w-auto h-7">
			</button>
		</div>
	{/if}
</main>

<footer class="pt-10">
	<div class="bg-je-gray-700 flex flex-wrap justify-center items-center text-center py-6 px-5">
		<div class="w-full sm:w-auto flex justify-center p-2">
			<a href="/" class="logo">
				<Image src={logo_clear} alt="Logo von {name}" classNames="max-w-xs h-auto"/>
			</a>
		</div>
		<div class="flex-1 p-2">
			<h3 class="uppercase text-je-gray-100 font-poppins text-xl font-semibold">{name}</h3>
			{#each menuLinks as link}
				<a href={link.href} class="block mt-1 font-montserrat"> {link.title} </a>
			{/each}
		</div>
		<div class="flex-1 p-2">
			<h3 class="uppercase text-je-gray-100 font-poppins text-xl font-semibold">Rechtliches</h3>
			{#each legalLinks as link}
				<a class="block mt-1 font-montserrat" href={link.href}> {link.title} </a>
			{/each}
		</div>
		<div class="flex-1 p-2">
			<h3 class="uppercase text-je-gray-100 font-poppins text-xl font-semibold">Links</h3>
			{#each footerLinks as link}
				<a href={link.href} target="_blank" class="block mt-1 font-montserrat"> {link.title} </a>
			{/each}
		</div>
	</div>
	<div class="bg-je-gray-900 flex flex-col justify-center items-center text-center gap-5 py-6 px-5">
		<div>
			<SocialMediaIcons />
		</div>
		<div class="font-montserrat">
			<p>&copy; 2023 - {currentYear} {name}</p>
			<p>
				Made with <a href="https://kit.svelte.dev/" target="_blank">SvelteKit</a>,
				<a href="https://tailwindcss.com/" target="_blank">TailwindCSS</a>
				hosted on <a href="https://vercel.com/" target="_blank">Vercel</a>
			</p>
		</div>
	</div>
</footer>
