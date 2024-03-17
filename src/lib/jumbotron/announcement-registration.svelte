<script>
	import { OnMount } from 'fractils';
	import { fade } from 'svelte/transition';
	import { en, es } from '$lib/langs';
	import { getContext } from 'svelte';

	/** @type {(en | es)} */
	const lang = getContext('lang');
</script>

<OnMount>
	<div
		transition:fade={{
			duration: 500,
			delay: 1200
		}}
		class=" z-50 flex flex-col justify-center items-center"
	>
		<p
			class="shadow-xl bg-transparent text-torch-red sm:text-2xl font-bold uppercase pl-1 sm:px-5 mb-3"
		>
			{lang.eventDates.rightEvent.title}
		</p>

		<p class="shadow-xl text-white text-3xl leading-5">{lang.eventDates.rightEvent.date}</p>

		<p class="shadow-xl text-white text-md leading-5">
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
