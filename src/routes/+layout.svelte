<script>
	// Importe
	import SocialMediaIcons from './socialmediaicons.svelte';
	import { contextMenuAction } from './store';
	import '../app.css';

	// Initialisierung Variabeln
	import { name, logo_clear, uri} from './store';
	let isResponsive = false;
	let currentYear = new Date().getFullYear();

	// Links
	let menuLinks = [
		{ title: 'Home', href: '/home'},
		//{ title: 'Aktuelles', href: '/blog'},
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
		activeRoute === '/home' ? 'Home - ' + name
		: activeRoute === '/blog' ? 'Aktuelles - ' + name
		: activeRoute === '/about' ? 'Über mich - ' + name
		: activeRoute === '/contact' ? 'Kontakt - ' + name
		: activeRoute === '/legal/privacy' ? 'Datenschutzerklärung - ' + name
		: activeRoute === '/legal/imprint' ? 'Impressum - ' + name
			: 'Willkommen';
</script>

<svelte:head>
	<title>{pageTitle}</title>
</svelte:head>

<header>
	<div class={isResponsive ? 'header responsive' : 'header'} id="respHeader">
		<a href="/home" class="logo">
			<img src={logo_clear} alt="Logo von {name}" use:contextMenuAction />
		</a>
		<a href="#none" class="icon" on:click={toggleMenu}>
			{isResponsive ? '✕' : '☰'}
			<!-- Ändert das Icon basierend auf dem Zustand -->
		</a>
		<div class="header-right">
			{#each menuLinks as link }
				<a class={activeRoute === link.href ? 'active' : 'inactive'} href={link.href} on:click={closeMenu}> {link.title} </a>
			{/each}
		</div>
	</div>
</header>

<slot />

<footer>
	<div class="footer-top">
		<div>
			<a href="/home" class="logo">
				<img src={logo_clear} alt="Logo von {name}" use:contextMenuAction/>
			</a>
		</div>
		<div>
			<h5>{name}</h5>
			{#each menuLinks as link}
				<a href={link.href}> {link.title} </a>
			{/each}
		</div>
		<div>
			<h5>Rechtliches</h5>
			{#each legalLinks as link}
				<a class="legal" href={link.href}> {link.title} </a>
			{/each}
		</div>
		<div>
			<h5>Links</h5>
			{#each footerLinks as link}
				<a href={link.href} target="_blank"> {link.title} </a>
			{/each}
		</div>
	</div>
	<div class="footer-bottom">
		<SocialMediaIcons />
		<div>
			<p>&copy; 2023 - {currentYear} {name}</p>
			<p>
				Made with <a href="https://kit.svelte.dev/" target="_blank">SvelteKit</a>,
				<a href="https://tailwindcss.com/" target="_blank">TailwindCSS</a>
				hosted on <a href="https://ionos.de/" target="_blank">IONOS</a>
			</p>
		</div>
	</div>
</footer>
