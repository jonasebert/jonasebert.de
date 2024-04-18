<!-- src/App.svelte -->
<script>
	import { Router, Route } from 'svelte-routing';
	import Error from './+error.svelte';
	import Home from './home/+page.svelte';
	import About from './about/+page.svelte';
	import Privacy from './legal/privacy/+page.svelte';
	import Imprint from './legal/imprint/+page.svelte';
</script>

<Router>
	<div>
		<Route path="/about" component={About} />
		<Route path="/home" component={Home} />
		<Route path="/legal/imprint" component={Imprint} />
		<Route path="/legal/privacy" component={Privacy} />
		<Route path="/" />
		<Route path="*" component={Error} />
	</div>
</Router>

<meta http-equiv="refresh" content="0; URL=/home" />
