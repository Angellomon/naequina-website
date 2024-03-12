<script>
	import { onMount } from 'svelte';

	var exampleCallback = function () {
		console.log('Pedido completo');
	};

	onMount(() => {
		window.EBWidgets.createWidget({
			// Required
			widgetType: 'checkout',
			eventId: '861021718137',
			iframeContainerId: 'eventbrite-widget-container-861021718137',

			// Optional
			iframeContainerHeight: 425, // Widget height in pixels. Defaults to a minimum of 425px if not provided
			onOrderComplete: exampleCallback // Method called when an order has successfully completed
		});
	});
</script>

<svelte:head>
	<script src="https://www.eventbrite.com.mx/static/widgets/eb_widgets.js"></script>
</svelte:head>

<section class="">
	<div id="eventbrite-widget-container-861021718137"></div>
</section>

<style>
	section {
		min-height: 50vh;
	}
</style>
