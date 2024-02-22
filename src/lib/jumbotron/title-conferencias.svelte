<script>
	/** @type {number} */
	export let numConf;

	/** @type {number}*/
	export let year;
</script>

<div class="my-1 flex flex-row gap-2 justify-center text-white">
	<div class="flex flex-col text-xs sm:text-base">
		<p class="leading-5">{numConf}° CICLO INTERNACIONAL DE</p>
		<p class="text-2xl sm:text-3xl leading-5">CONFERENCIAS</p>
	</div>
	<p class="text-4xl sm:text-6xl">/</p>
	<p class="text-4xl sm:text-6xl font-bold">{year}</p>
</div>

<style>
	* {
		font-family: 'Montserrat Light';
	}
</style>
