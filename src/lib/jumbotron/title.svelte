<script>
	export let white = false;
	export let allMayus = true;
	export let extraLarge = false;
	export let right = false;
</script>

<h1
	class="text-amaranth font-['Montserrat Bold'] text-4xl max-sm:text-xl font-bold"
	class:text-white={white}
	class:text-right={right}
	class:uppercase={allMayus}
	class:extra-large={extraLarge}
	class:sm:text-7xl={extraLarge}
>
	<slot />
</h1>

<style lang="postcss">
	.extra-large {
		font-family: 'Montserrat Bold';
		font-size: 3rem;
	}

	@media screen and (min-width: 640px) {
		.extra-large {
			font-size: 5rem;
		}
	}
</style>
