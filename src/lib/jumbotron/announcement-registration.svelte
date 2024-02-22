<script>
	/** @type{string}*/
	export let month;

	/** @type{number}*/
	export let day;

	/** @type{string}*/
	export let startHour;
</script>

<div class="flex flex-col justify-center items-center">
	<p class="text-amaranth text-md sm:text-lg font-bold uppercase pb-1">INICIO DE INSCRIPCIONES</p>

	<p class="text-white text-3xl leading-5">{day} <span>DE</span> {month}</p>

	<p class="text-white text-md leading-5"><span>DESDE LAS</span> {startHour} HRS</p>
</div>

<style>
	p {
		font-family: 'Montserrat Bold';
	}

	p span {
		font-family: 'Montserrat Light';
	}
</style>
