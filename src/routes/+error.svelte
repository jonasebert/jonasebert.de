<script>
	import { page } from '$app/stores';
</script>

<div class="flex flex-col items-center justify-center min-h-screen text-gray-700 font-poppins">
    <h1 class="text-6xl font-bold">{$page.status}</h1>
    <h2 class="text-2xl mt-2">{$page.error.message}</h2>
</div>
