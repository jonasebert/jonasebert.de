<script>
	import { page } from '$app/stores';
</script>

<div>
	<h1>{$page.status}</h1>
	<h2>{$page.error.message}</h2>
</div>
