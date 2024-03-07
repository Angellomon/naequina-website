<script>
	import { OnMount } from 'fractils';
	import { fade } from 'svelte/transition';
	import { en, es } from '$lib/lang';

	/** @type {string}*/
	export let month;

	/** @type {number}*/
	export let day;

	/** @type {string}*/
	export let startHour;

	/** @type {(en | es)} */
	export let lang;
</script>

<OnMount>
	<div
		transition:fade={{
			duration: 500,
			delay: 1200
		}}
		class="flex flex-col justify-center items-center"
	>
		<p class="bg-transparent text-torch-red sm:text-2xl font-bold uppercase px-5 mb-3">
			{lang.eventDates.rightEvent.title}
		</p>

		<p class="text-white text-3xl leading-5">{lang.eventDates.rightEvent.date}</p>

		<p class="text-white text-md leading-5">
			<span>{lang.eventDates.rightEvent.from}</span>
			{lang.eventDates.rightEvent.hour}<span></span>
		</p>
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
