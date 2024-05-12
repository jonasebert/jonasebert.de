<script>
	import { page } from '$app/stores';
</script>

<div>
	<h1 class="font-poppins">{$page.status}</h1>
	<h2 class="font-poppins">{$page.error.message}</h2>
</div>
