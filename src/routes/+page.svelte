<!-- src/App.svelte -->
<script>
    import { Router, Route } from 'svelte-routing';
    import Home from './home/+page.svelte';
    import About from './about/+page.svelte';
	import Error from './+error.svelte';
</script>
  
<Router>
    <div>
        <Route path="/about" component={About} />
        <Route path="/home" component={Home} />
        <Route path="/" />
        <Route path="*" component={Error} />
    </div>
</Router>

<meta http-equiv="refresh" content="0; URL=/home" />