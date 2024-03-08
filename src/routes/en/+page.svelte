<script>
	import { tooltip } from '@svelte-plugins/tooltips';
	import Jumbotron from '$lib/jumbotron/principal.svelte';
	import { scrollTo } from 'svelte-scrolling';
	import { en as lang } from '$lib/lang';

	const logos = [
		{
			logo: 'logo-galope',
			link: ''
		},
		{
			logo: 'logo-equitonik',
			link: ''
		},
		{
			logo: 'logo-galotec',
			link: ''
		},
		{
			logo: 'logo-grupo-nutec',
			link: 'https://www.gponutec.com/'
		},
		{
			logo: 'logo-asociacion-mexicana-vet',
			link: 'https://ammvee.org.mx/'
		},
		{
			logo: 'logo-uvm',
			link: 'https://uvm.mx'
		}
	];
	// padding for list py-7
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

<header
	class="relative w-full px-5 sm:px-20 py-4 flex flex-row min-h-20 bg-torch-red bg-gradient-to-r from-torch-red-500 from-15% to-black"
>
	<a href="/">
		<img class="h-16 sm:h-24" src="/logo.png" alt="logo NAEQUINA" />
	</a>

	<div class="flex flex-row items-center absolute z-50 right-4 sm:right-10 top-1/3">
		<!-- svelte-ignore a11y-missing-attribute -->
		<a use:scrollTo={'contacto'} class="text-white px-5 py-2 contact hover:underline"
			>{lang.header.contactButton}</a
		>

		<a
			use:tooltip={{
				position: 'bottom',
				content: 'Cambiar a Español',
				action: 'hover',
				arrow: true,
				animation: 'slide'
			}}
			href="/"
			class="w-[30px]"
		>
			<img src="/img/BANDERA-MEXICO.png" alt="USA" />
		</a>
	</div>
</header>

<Jumbotron {lang} />

<footer class="flex flex-row flex-wrap justify-evenly items-center bg-[#121212]">
	{#each logos as logo}
		{#if logo.link}
			<a href={logo.link}
				><img class="max-h-[100px]" src={`/img/${logo.logo}.png`} alt={logo.logo} /></a
			>
		{:else}
			<img class="max-h-[100px]" src={`/img/${logo.logo}.png`} alt={logo.logo} />
		{/if}
	{/each}
</footer>
