<script>
	export let white = false;
	export let allMayus = true;
	export let extraLarge = false;
	export let right = false;
</script>

<h1
	class:text-white={white}
	class:text-right={right}
	class:uppercase={allMayus}
	class:extra-large={extraLarge}
	class:text-7xl={extraLarge}
	class:max-sm:text-4xl={extraLarge}
	class:font-extrabold={extraLarge}
	class="text-amaranth font-['Montserrat Bold'] text-4xl max-sm:text-xl font-bold"
>
	<slot />
</h1>

<style lang="postcss">
	.extra-large {
		font-family: 'Montserrat Bold';
	}
</style>
