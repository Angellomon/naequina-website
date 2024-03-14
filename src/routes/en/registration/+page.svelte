<script>
	import Header from '$lib/header.svelte';
	import { en } from '$lib/langs';

	import Footer from '$lib/footer.svelte';
	import EventbriteCheckout from '$lib/eventbrite-checkout.svelte';
	import { setContext } from 'svelte';

	setContext('lang', en);
</script>

<svelte:head>
	<title>NAEQUINA | EQUINE ANIMAL NUTRITION AND FEEDING</title>
	<meta
		name="description"
		content="THE MOST IMPORTANT EQUINE ANIMAL NUTRITION EVENT IN LATIN AMERICA"
	/>

	<meta property="og:title" content="NAEQUINA 2024" />
	<meta
		property="og:description"
		content="THE MOST IMPORTANT EQUINE ANIMAL NUTRITION EVENT IN LATIN AMERICA"
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
			"description": "THE MOST IMPORTANT EQUINE ANIMAL NUTRITION EVENT IN LATIN AMERICA.",
			"event": [
				{
					"@type": "Event"
					"name": "REGISTRATION STARTS ON",
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

<Header langUrl="/registro" />

<EventbriteCheckout />

<Footer />
