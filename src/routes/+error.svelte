<script lang="ts">
	import { page } from '$app/stores';
</script>

<div class="flex flex-col items-center justify-center p-5 min-h-[85vh] relative z-10">
	<div class="container mx-auto w-[100%] md:w-[60%]">
		<div class="bg-je-mystical-nachtblau-900 rounded-lg overflow-hidden flex flex-col lg:flex-row shadow-lg relative">
			<div class="p-8 font-poppins flex-1 justify-start md:justify-start lg:justify-center flex flex-col text-left lg:text-left relative overflow-hidden">
				<div class="size-fit md:size-80">
					<h2 class="text-2xl font-semibold text-je-luminous-nebellicht">{$page.error.message}</h2>
					<h1 class="text-5xl font-bold text-je-sand mt-2 mb-2">{$page.status}</h1>
				</div>
				<div class="absolute top-0 right-0 size-16 md:size-32 bg-je-magical-korallenriff rounded-full transform translate-x-1/2 -translate-y-1/2"></div>
				<div class="absolute bottom-0 left-0 size-24 md:size-8/12 bg-je-mystical-waldtiefe-700 rounded-full transform -translate-x-1/2 translate-y-1/2"></div>
				<div class="absolute bottom-0 right-0 size-56 md:size-80 lg:size-[140%] bg-je-magical-sonnenglanz rounded-full transform translate-x-1/2 translate-y-1/2"></div>
			</div>
		</div>
	</div>
</div>