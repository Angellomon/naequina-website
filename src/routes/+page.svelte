<script>
	import Jumbotron from '$lib/jumbotron/principal.svelte';
	import { es } from '$lib/langs';
	import Footer from '$lib/footer.svelte';
	import Header from '$lib/header.svelte';
	import { setContext } from 'svelte';
	import { onNavigate } from '$app/navigation';

	export let data;

	setContext('lang', es);

	onNavigate((navigation) => {
		// @ts-ignore
		if (!document.startViewTransition) return;

		return new Promise((resolve) => {
			// @ts-ignore
			document.startViewTransition(async () => {
				resolve();
				await navigation.complete;
			});
		});
	});
</script>

<svelte:head>
	<title>NAEQUINA | NUTRICIÓN Y ALIMENTACIÓN EQUINA</title>
	<meta
		name="description"
		content="El evento de Nutrición Animal Equina más importante en Latinoamérica"
	/>

	<meta property="og:title" content="NAEQUINA 2024" />
	<meta
		property="og:description"
		content="El evento de Nutrición Animal Equina más importante en Latinoamérica"
	/>
	<meta property="og:locale" content="es_MX" />
	<meta property="og:site_name" content="NAEQUINA" />
	<meta property="og:image" content="https://naequina.com/logo-caballo.png" />
	<meta property="og:url" content="https://naequina.com/" />

	<script type="application/ld+json">
		{
			"@context": "https://schema.org/",
			"@type": "Event",
			"name": "NAEQUINA 2024",
			"description": "El evento de nutrición animal equina más importante en Latinoamérica.",
			"event": [
				{
					"@type": "Event",
					"name": "Inicio de Inscripciones",
					"startDate": "2024-03-18T00:00-06:00",
					"location": {
						"@type": "Place",
						"address": {
							"@type": "PostalAddress",
							"addressLocality": "Mexico City, Mexico"
						}
					}
				}
			],
			"eventAttendanceMode": "https://schema.org/OnlineEventAttendanceMode",
			"eventStatus": "https://schema.org/EventScheduled",
			"image": ["logo-caballo.png"],
			"startDate": "2024-04-25T08:50-06:00",
			"endDate": "2024-04-26T18:00-06:00",
			"location": {
				"@type": "Place",
				"address": {
					"@type": "PostalAddress",
					"addressLocality": "Mexico City, Mexico"
				}
			}
		}
	</script>
</svelte:head>

{#key data.url}
	<Header />

	<Jumbotron />

	<Footer />
{/key}
