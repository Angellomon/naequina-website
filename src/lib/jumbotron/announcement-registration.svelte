<script>
	import { OnMount } from 'fractils';
	import { fade } from 'svelte/transition';

	/** @type{string}*/
	export let month;

	/** @type{number}*/
	export let day;

	/** @type{string}*/
	export let startHour;
</script>

<OnMount>
	<div
		transition:fade={{
			duration: 500,
			delay: 1200
		}}
		class="flex flex-col justify-center items-center"
	>
		<p class="bg-torch-red text-white sm:text-2xl font-bold uppercase px-5 py-1 mb-3">
			INICIO DE INSCRIPCIONES
		</p>

		<p class="text-white text-3xl leading-5">{day} <span>DE</span> {month}</p>

		<p class="text-white text-md leading-5"><span>DESDE LAS</span> {startHour}</p>
	</div>
</OnMount>

<style>
	p {
		font-family: 'Montserrat Bold';
	}

	p span {
		font-family: 'Montserrat Light';
	}
</style>
