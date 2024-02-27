<script>
	export let white = false;
	export let allMayus = true;
	export let extraLarge = false;
	export let right = false;
</script>

<h1
	class="text-torch-red font-['Montserrat Bold'] text-3xl sm:text-5xl font-bold"
	class:text-white={white}
	class:text-right={right}
	class:uppercase={allMayus}
	class:extra-large={extraLarge}
>
	<slot />
</h1>

<style lang="postcss">
	.extra-large {
		font-family: 'Montserrat Bold';
		font-size: 3.8rem;
	}

	@media screen and (max-width: 640px) {
		.extra-large {
			font-size: 3.4rem;
		}
	}

	@media screen and (min-width: 640px) {
		.extra-large {
			font-size: 6rem;
		}
	}

	@media screen and (min-width: 768px) {
		.extra-large {
			font-size: 5rem;
		}
	}

	@media screen and (min-width: 1536px) {
		.extra-large {
			font-size: 7rem;
		}
	}
</style>
