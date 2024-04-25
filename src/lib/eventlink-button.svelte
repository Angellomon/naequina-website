<script>
	import { getContext } from 'svelte';
	import { en, es } from '$lib/langs';

	/** @type {(en | es)} */
	const lang = getContext('lang');
</script>

<!-- Puedes personalizar este botón como quieras -->
<!-- bg-gradient-to-r from-torch-red to-black hover:from-70% -->
<div class="flex flex-row gap-3 absolute z-50 bottom-9 left-5 sm:left-1/4 2xl:left-1/3">
	<a href="https://us06web.zoom.us/webinar/register/WN_Hj2YM3jCSWW5H8hv_hZCIg" target="_blank">
		<button
			class="font-bold bg-torch-red text-xl sm:text-2xl text-white px-5 py-2 hover:underline"
			type="button">{lang.eventLinkText}</button
		>
	</a>
	<!-- <p class="text-white px-3 py-2">{availableTickets} {lang.availableTicketsText}</p> -->
</div>

<style>
	button {
		transition: all ease-in-out 800ms;
		cursor: pointer;
		/* font-family: 'Montserrat Bold'; */
	}
</style>
