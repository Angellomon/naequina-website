<script>
	import { scrollTo } from 'svelte-scrolling';

	const logos = [
		'logo-galope',
		'logo-equitonik',
		'logo-galotec',
		'logo-grupo-nutec',
		'logo-asociacion-mexicana-vet',
		'logo-uvm'
	];
	// padding for list py-7
</script>

<svelte:head>
	<title>NAEQUINA | NUTRICIÓN Y ALIMANTACIÓN EQUINA</title>

	<meta property="og:title" content="NAEQUINA 2024" />
	<meta
		property="og:description"
		content="El evento de Nutrición Animal Equina más importante en Latinoamérica"
	/>
	<meta property="og:locale" content="es_MX" />
	<meta property="og:site_name" content="NAEQUINA" />
	<meta property="og:image" content="https://naequina.com/logo-caballo-xl.png" />
	<meta property="og:url" content="https://naequina.com/" />

	<!-- Google tag (gtag.js) -->
	<script async src="https://www.googletagmanager.com/gtag/js?id=G-MFR4TLDGTS"></script>
	<script>
		window.dataLayer = window.dataLayer || [];
		function gtag() {
			dataLayer.push(arguments);
		}
		gtag('js', new Date());
		gtag('config', 'G-MFR4TLDGTS');
	</script>
</svelte:head>

<header
	class="relative w-full px-5 sm:px-20 py-4 flex flex-row min-h-20 bg-torch-red bg-gradient-to-r from-torch-red-500 from-15% to-black"
>
	<a href="/">
		<img class="h-24" src="/logo.png" alt="logo NAEQUINA" />
	</a>

	<!-- svelte-ignore a11y-missing-attribute -->
	<a
		use:scrollTo={'contacto'}
		class="absolute z-50 right-4 sm:right-10 top-1/3 text-white px-5 py-2 contact hover:underline"
		>CONTACTO</a
	>
</header>

<slot />

<footer class="flex flex-row flex-wrap justify-evenly items-center bg-[#121212]">
	{#each logos as logo}
		<img class="max-h-[100px]" src={`/img/${logo}.png`} alt={logo} />
	{/each}
</footer>
