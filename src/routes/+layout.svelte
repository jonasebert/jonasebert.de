<script lang="ts">
	// Importe
	import Social from '$lib/components/blocks/Social.svelte';
	import '../app.css';

	//Vercel Speed Insights
	import { injectSpeedInsights } from '@vercel/speed-insights/sveltekit';
	injectSpeedInsights();

	// Vercel Analytics
	import { dev } from '$app/environment';
	import { inject } from '@vercel/analytics';
	inject({ mode: dev ? 'development' : 'production' });

	// Initialisierung Variabeln
	import { name, logo_clear, uri, pronouns, job} from '$lib/store';
	import Image from '$lib/components/image.svelte';
	let isResponsive = false;
	let currentYear = new Date().getFullYear();

	// Links
	let menuLinks = [
		{ title: 'Home', href: '/'},
		{ title: 'Termine', href: '/calendar'},
		{ title: 'Aktuelles', href: '/blog'},
		{ title: 'Über mich', href: '/about'},
		{ title: 'Kontakt', href: '/contact'}
	];
	let legalLinks = [
		{ title: 'Impressum', href: '/legal/imprint'},
		{ title: 'Datenschutzerklärung', href: '/legal/privacy'}
	];
	let footerLinks = [
		{ title: 'B\'90/DIE GRÜNEN Braunschweig', href: 'https://gruene-braunschweig.de/'},
		{ title: 'Grüne Ratsfraktion Braunschweig', href: 'https://gruene-braunschweig-ratsfraktion.de/'}
	];

	// Reactive statement, das auf Änderungen der aktuellen Route reagiert
	$: activeRoute = $uri.url.pathname;
	$: pageTitle =
		activeRoute === '/' ? name + ' (' + pronouns +') - ' + job
		: activeRoute === '/blog' ? 'Aktuelles - ' + name + ' (' + pronouns +') - ' + job
		: activeRoute === '/about' ? 'Über mich - ' + name + ' (' + pronouns +') - ' + job
		: activeRoute === '/calendar' ? 'Termine - ' + name + ' (' + pronouns +') - ' + job
		: activeRoute === '/contact' ? 'Kontakt - ' + name + ' (' + pronouns +') - ' + job
		: activeRoute === '/legal/privacy' ? 'Datenschutzerklärung - ' + name + ' (' + pronouns +') - ' + job
		: activeRoute === '/legal/imprint' ? 'Impressum - ' + name + ' (' + pronouns +') - ' + job
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

<header class="bg-je-green-500 font-poppins text-je-sand p-5 sticky top-0 w-full shadow-lg z-50">
	<div class={isResponsive ? 'flex flex-col items-start w-full' : 'flex justify-between items-center w-full'} id="respHeader">
		<div class="flex flex-row">
			<div>
				<a href="/" class={isResponsive ? 'flex items-center justify-start w-1/2 flex-shrink-0' : 'flex items-center justify-start w-1/2'}>
					<Image src={logo_clear} alt="Logo von {name}" classNames="h-auto w-auto duration-500 ease-in-out transition-transform transform hover:scale-105"/>
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

<div class="flex flex-col flex-grow min-h-screen">
	<main class="flex-grow">
		<slot />
		{#if isVisible}
			<div class="z-40 fixed bottom-4 right-4">
				<button class="bg-je-green-500 hover:bg-je-green-700 text-white font-bold py-3 px-3 rounded-full transition-transform duration-400 hover:scale-110 shadow-xl" on:click={scrollToTop}>
					<Image src="/icons/arrow_up.svg" alt="Icon Pfeil nach oben" classNames="w-auto h-7"/>
				</button>
			</div>
		{/if}
	</main>

	<footer class="bg-je-gray-700">
		<div class="flex flex-wrap justify-center items-center text-center py-6 px-5">
			<div class="w-full sm:w-auto flex justify-center p-2">
				<a href="/" class="logo">
					<Image src={logo_clear} alt="Logo von {name}" classNames="max-w-xs h-auto duration-500 ease-in-out transition-transform transform hover:scale-105"/>
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
				<Social hoverBGColor="je-green-700" />
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
</div>
