<script>
	import { page } from '$app/stores';
	import { Icon } from 'svelte-icons-pack';
	import {
		AiOutlineInstagram,
		AiOutlineYoutube
	} from 'svelte-icons-pack/ai'; /* New Icons from https://leshak.github.io/svelte-icons-pack/ */
	import { BsThreads } from 'svelte-icons-pack/bs';
	import '../app.css';
	let name = 'Jonas Ebert';
	let pronouns = 'xier/xies';
	let logo = '/logo/logo_500x100.png';
	let logo_clear = '/logo/logo_500x100_clear.png';
	let logo_small = '/logo/logo_500x500.png';
	let logo_small_clear = '/logo/logo_500x500_clear.png';
	let isResponsive = false;
	let isHovered = false;
	let socialcolor = '';
	let currentYear = new Date().getFullYear();

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
	
	// Ändert die Farbe von Social Media Icons beim Mouseover ab
	$: socialcolor =
		isHovered === true ? '#efe9ce'
		: isHovered === false ? '#abb2bf'
			: '#abb2bf';
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
				<a class={activeRoute === '/home' ? 'active' : 'inactive'} href="/home" on:click={closeMenu}
					>Home</a
				>
				<a class={activeRoute === '/blog' ? 'active' : 'inactive'} href="/blog" on:click={closeMenu}
					>Aktuelles</a
				>
				<a
					class={activeRoute === '/about' ? 'active' : 'inactive'}
					href="/about"
					on:click={closeMenu}>Über mich</a
				>
				<a
					class={activeRoute === '/contact' ? 'active' : 'inactive'}
					href="/contact"
					on:click={closeMenu}>Kontakt</a
				>
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
				<h5>Rechtliches</h5>
				<div class="legal"><a href="/legal/imprint">Impressum</a></div>
				<div class="legal"><a href="/legal/privacy">Datenschutzerklärung</a></div>
			</div>
			<div>
				<p>Spalte 3 Inhalt</p>
			</div>
		</div>
		<div class="footer-bottom">
			<div class="social-media">
				<a
					on:mouseover={() => isHovered = true}
					on:focus={() => isHovered = true}
					on:mouseout={() => isHovered = false}
					on:blur={() => isHovered = false}
					href="https://www.instagram.com/jonas_ebert/"
					target="_blank">
					<Icon src={AiOutlineInstagram} size="32" color={socialcolor} viewBox="0 0 1024 1024" title="Instagram"></Icon>
				</a>
				<a
					on:mouseover={() => isHovered = true}
					on:focus={() => isHovered = true}
					on:mouseout={() => isHovered = false}
					on:blur={() => isHovered = false}	
					href="https://www.threads.net/@jonas_ebert/"
					target="_blank">
					<Icon src={BsThreads} size="25" color={socialcolor} viewBox="0 0 1024 1024" title="Threads"></Icon>
				</a>
				<a
					on:mouseover={() => isHovered = true}
					on:focus={() => isHovered = true}
					on:mouseout={() => isHovered = false}
					on:blur={() => isHovered = false}	
					href="https://www.youtube.com/@jonas_ebert/"
					target="_blank">
					<Icon src={AiOutlineYoutube} size="32" color={socialcolor} viewBox="0 0 1024 1024" title="YouTube"></Icon>
				</a>
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
