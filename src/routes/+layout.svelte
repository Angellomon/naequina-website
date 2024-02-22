<script>
	const logos = [
		'logo-galope',
		'logo-equitonik',
		'logo-galotec',
		'logo-grupo-nutec',
		'logo-asociacion-mexicana-vet',
		'logo-uvm'
	];
</script>

<header
	class="w-full px-20 flex flex-row h-20 bg-amaranth bg-gradient-to-r from-amaranth-500 from-15% to-black"
>
	<a href="/">
		<img class="h-full" src="/logo.png" alt="logo NAEQUINA" />
	</a>
</header>

<slot />

<footer class="flex flex-row flex-wrap justify-center items-center bg-[#0a0a0a]">
	{#each logos as logo}
		<img class="max-h-[100px]" src={`/img/${logo}.png`} alt={logo} />
	{/each}
</footer>
