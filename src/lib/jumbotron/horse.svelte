<script>
</script>

<div
	class="z-5 absolute bottom-0 md:bottom-48 xl:bottom-32 right-0 min-w-[120px] md:min-w-[350px] xl:min-w-[450px] w-1/6"
>
	<div class="horse relative">
		<img class="filter brightness-75" src="/img/CABALLO-NAEQUINA-1.png" alt="caballo" />
	</div>
</div>

<style>
	/*img::after {
		position: absolute;
		width: 100%;
		height: 100%;
		content: '';
		background-image: linear-gradient(0deg, black 0%, transparent 100%);
		z-index: 5;
	}*/

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
