<script>
	import { onMount } from 'svelte';

	var exampleCallback = function () {
		console.log('Pedido completo');
	};

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
			target="_blank">Comprar boletos en Eventbrite</a
		></noscript
	>
</svelte:head>
<!-- Puedes personalizar este botón como quieras -->
<button
	class="bg-torch-red text-white px-5- py-3 w-full"
	id="eventbrite-widget-modal-trigger-861021718137"
	type="button">Comprar boletos</button
>
