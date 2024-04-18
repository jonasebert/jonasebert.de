<script>
    import { page } from '$app/stores';
    import "../app.css";
    let name = 'Jonas Ebert';
    let pronouns = 'xier/xies';
    let isResponsive = false //Zustand für das responsive Menü
  
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
    $: pageTitle = activeRoute === '/home' ? 'Home - ' + name :
                    activeRoute === '/blog' ? 'Aktuelles - ' + name :
                    activeRoute === '/about' ? 'Über mich - ' + name :
                    activeRoute === '/contact' ? 'Kontakt - ' + name :
                    'Willkommen';
  </script>

<svelte:head>
    <title>{pageTitle}</title>
</svelte:head>
  
<body class="font-primary">
    <header>
        <div class="{isResponsive ? "header responsive" : "header"}" id="respHeader">
            <a href="/home" class="logo">
                <img src="/logo/logo_500x100.png" alt="Logo von {name}">
            </a>
            <a href="#none" class="icon" on:click={toggleMenu}>
                {isResponsive ? '✕' : '☰'} <!-- Ändert das Icon basierend auf dem Zustand -->
            </a>
            <div class="header-right">
            <a class="{activeRoute === '/home' ? 'active' : 'inactive'}" href="/home" on:click={closeMenu}>Home</a>
            <a class="{activeRoute === '/blog' ? 'active' : 'inactive'}" href="/blog" on:click={closeMenu}>Aktuelles</a>
            <a class="{activeRoute === '/about' ? 'active' : 'inactive'}" href="/about" on:click={closeMenu}>Über mich</a>
            <a class="{activeRoute === '/contact' ? 'active' : 'inactive'}" href="/contact" on:click={closeMenu}>Kontakt</a>
            </div>
        </div>
    </header>
</body>

<slot />

<body class="font-primary">
    <footer>
        <p>HIER IST DER FOOTER 🥳</p>
    </footer>
</body>