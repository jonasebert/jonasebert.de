<script>
	// Importe
	import { page } from '$app/stores';
	import { Icon } from 'svelte-icons-pack';
	import { AiOutlineInstagram, AiOutlineYoutube } from 'svelte-icons-pack/ai'; /* New Icons from https://leshak.github.io/svelte-icons-pack/ */
	import { BsThreads } from 'svelte-icons-pack/bs';
	import '../app.css';
	import { link } from 'svelte-routing';

	// This can be false if you're using a fallback (i.e. SPA mode)
	export const prerender = true;

	// Initialisierung Variabeln
	let name = 'Jonas Ebert';
	let pronouns = 'xier/xies';
	let logo = '/logo/logo_500x100.png';
	let logo_clear = '/logo/logo_500x100_clear.png';
	let logo_small = '/logo/logo_500x500.png';
	let logo_small_clear = '/logo/logo_500x500_clear.png';
	let isResponsive = false;
	let currentYear = new Date().getFullYear();

	// Icons für Soziale Netzwerke
	let icons = [
		{ id: 'instagram', component: AiOutlineInstagram, href: 'https://www.instagram.com/jonas_ebert/', size: '32' },
		{ id: 'threads', component: BsThreads, href: 'https://www.threads.net/@jonas_ebert/', size: '25' },
		{ id: 'youtube', component: AiOutlineYoutube, href: 'https://www.youtube.com/@jonas_ebert/', size: '32' }
  	];
	let hoveredIconId = '';

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
		{ title: 'B\'90/Die Grünen Braunschweig', href: 'https://gruene-braunschweig.de/'}
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
	$: activeRoute = $page.url.pathname;
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

<body class="font-primary">
	<header>
		<div class={isResponsive ? 'header responsive' : 'header'} id="respHeader">
			<a href="/home" class="logo">
				<img src={logo_clear} alt="Logo von {name}" />
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
</body>

<slot />

<body class="font-primary">
	<footer>
		<div class="footer-top">
			<div>
				<a href="/home" class="logo">
					<img src={logo_clear} alt="Logo von {name}" />
				</a>
			</div>
			<div>
				<h5>Jonas Ebert</h5>
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
			<div class="social-media">
				{#each icons as icon}
					<a
						href={icon.href}
						target="_blank">
					<Icon src={icon.component} size={icon.size} color={hoveredIconId === icon.id ? '#efe9ce' : '#abb2bf'} viewBox="0 0 1024 1024" title={icon.id}></Icon>
					</a>
				{/each}
			</div>
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
</body>
