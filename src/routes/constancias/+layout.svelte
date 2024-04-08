<script>
	import Footer from '$lib/footer.svelte';
	import TitleConferencias from '$lib/jumbotron/title-conferencias.svelte';
	import { es } from '$lib/langs';
	import { setContext } from 'svelte';

	setContext('lang', es);
</script>

<main class="flex flex-col bg-black">
	<header class="flex flex-row justify-around text-white bg-transparent py-3">
		<div class="logo h-16 w-16 sm:h-26 sm:w-48 bg-transparent"></div>

		<div class="mt-1">
			<TitleConferencias year={2024} small />
		</div>
	</header>

	<slot />

	<Footer />
</main>

<style>
	.logo {
		background-image: url('/logo.png');
		background-size: 100%;
		background-repeat: no-repeat;
	}

	@media screen and (max-width: 640px) {
		.logo {
			background-repeat: no-repeat;
			background-image: url('/logo-caballo.png');
			background-size: contain;
		}
	}
</style>
