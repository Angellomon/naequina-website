<script>
	export let white = false;
	export let allMayus = true;
	export let extraLarge = false;
	export let right = false;
</script>

<h1
	class:white
	class:right
	class:all-mayus={allMayus}
	class:extra-large={extraLarge}
	class="text-amaranth font-['Montserrat Bold'] text-4xl font-bold"
>
	<slot />
</h1>

<style lang="postcss">
	.white {
		@apply text-white;
	}

	.right {
		@apply text-right;
	}

	.all-mayus {
		@apply uppercase;
	}

	.extra-large {
		@apply text-7xl font-extrabold;

		font-family: 'Montserrat Bold';
	}
</style>
