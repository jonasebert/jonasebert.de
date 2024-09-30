<script lang="ts">
	export let count: number = 1;

	if (count == 0) {
		count = 1;
	} else if (count > 3) {
		count = 3;
	}
</script>

<div class="align-center justify-center">
	{#each Array(count) as _, i}
		<div class="chevron before:bg-je-sand after:bg-je-sand"></div>
	{/each}
</div>

<style>
	.chevron {
		position: absolute;
		width: 2.1rem;
		height: 0.48rem;
		opacity: 0;
		bottom: 8rem;
		transform: scale(0.3);
		z-index: 0;
		animation: move-chevron 3s ease-out infinite;
	}
	.chevron:first-child {
		animation: move-chevron 3s ease-out 1s infinite;
	}
	.chevron:nth-child(2) {
		animation: move-chevron 3s ease-out 2s infinite;
	}
	.chevron:after,
	.chevron:before {
		content: '';
		position: absolute;
		top: 0;
		height: 100%;
		width: 50%;
		/* background: #546a80; */
	}
	.chevron:before {
		left: 0;
		transform: skewY(30deg);
	}
	.chevron:after {
		right: 0;
		width: 50%;
		transform: skewY(-30deg);
	}
	@keyframes move-chevron {
		25% {
			opacity: 1;
		}
		33.3% {
			opacity: 1;
			transform: translateY(2.28rem);
		}
		66.6% {
			opacity: 1;
			transform: translateY(3.12rem);
		}
		to {
			opacity: 0;
			transform: translateY(4.8rem) scale(0.5);
		}
	}
</style>
