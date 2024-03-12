<script>
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
</script>

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
