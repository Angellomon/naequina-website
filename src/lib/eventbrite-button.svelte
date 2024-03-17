<script>
	import { getContext, onMount } from 'svelte';
	import { en, es } from '$lib/langs';

	var exampleCallback = function () {
		console.log('Pedido completo');
	};

	/** @type {(en | es)} */
	const lang = getContext('lang');

	onMount(() => {
		window.EBWidgets.createWidget({
			widgetType: 'checkout',
			eventId: '861021718137',
			modal: true,
			modalTriggerElementId: 'eventbrite-widget-modal-trigger-861021718137',
			onOrderComplete: exampleCallback
		});
	});
</script>

<svelte:head>
	<script src="https://www.eventbrite.com.mx/static/widgets/eb_widgets.js"></script>

	<!-- Contenido Noscript para SEO adicional -->
	<noscript
		><a
			href="https://www.eventbrite.com.mx/e/naequina-2024-tickets-861021718137"
			rel="noopener noreferrer"
			target="_blank">{lang.eventBriteBtnText}</a
		></noscript
	>
</svelte:head>
<!-- Puedes personalizar este botón como quieras -->
<!-- bg-gradient-to-r from-torch-red to-black hover:from-70% -->
<button
	class="font-bold bg-torch-red absolute text-white px-5 py-2 bottom-9 left-5 sm:left-1/4 xl:left-1/3 hover:underline"
	id="eventbrite-widget-modal-trigger-861021718137"
	type="button">{lang.eventBriteBtnText}</button
>

<style>
	button {
		transition: all ease-in-out 800ms;

		/* font-family: 'Montserrat Bold'; */
	}
</style>
