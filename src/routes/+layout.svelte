<script>
	// import { OnMount } from 'fractils';
	// import { fade } from 'svelte/transition';

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

<header
	class="relative w-full px-5 sm:px-20 py-4 flex flex-row min-h-20 bg-torch-red bg-gradient-to-r from-torch-red-500 from-15% to-black"
>
	<a href="/">
		<img class="h-24" src="/logo.png" alt="logo NAEQUINA" />
	</a>

	<!-- <OnMount>
		<div
			transition:fade
			class="hidden sm:block absolute right-0 top-2 text-white uppercase text-sm"
		>
			<p>UNIVERSIDAD DEL VALLE DE MEXICO</p>
			<p>CAMPUS SUR, SEDE COYOACÁN,</p>
			<p>ASOCIACIÓN MEXICANA DE MÉDICOS</p>
			<p>VETERINARIOS ESPECIALISTAS EN</p>
			<p>EQUINOS, A.C. (AMMVEE),</p>
			<p>DEPARTAMENTO DE NUTRICIÓN</p>
			<p>ANIMAL Y BIOQUÍMICA, FMVZ-UNAM</p>
		</div>
	</OnMount> -->
</header>

<slot />

<footer class="flex flex-row flex-wrap justify-evenly items-center bg-[#121212]">
	{#each logos as logo}
		<img class="max-h-[100px]" src={`/img/${logo}.png`} alt={logo} />
	{/each}
</footer>
