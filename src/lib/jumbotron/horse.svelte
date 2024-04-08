<script>
	import { fade } from 'svelte/transition';
	import { OnMount } from 'fractils';

	export let bottom = false;

	let horseStyle =
		'z-5 absolute bottom-0 right-0 min-w-[120px] md:min-w-[350px] xl:min-w-[450px] 2xl:min-w-[550px] w-1/6';

	if (!bottom) horseStyle = `${horseStyle} md:bottom-48 xl:bottom-32`;
</script>

<OnMount>
	<div
		transition:fade={{
			duration: 1000,
			delay: 500
		}}
		class={horseStyle}
	>
		<div class="horse relative">
			<img class="filter brightness-75" src="/img/CABALLO-NAEQUINA-1.png" alt="caballo" />
		</div>
	</div>
</OnMount>

<style>
	img {
		z-index: 10;
	}

	.horse::after {
		content: '';

		position: absolute;
		width: 100%;
		height: 100%;

		background: linear-gradient(0deg, black 0%, transparent 40%);

		z-index: 15;

		top: 0;
		left: 0;
	}
</style>
