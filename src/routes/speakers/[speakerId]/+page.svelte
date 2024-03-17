<script>
	import Footer from '$lib/footer.svelte';

	export let data;

	const { speaker } = data;
</script>

<div class="bg-black min-h-screen flex flex-col justify-between">
	<div
		class="flex flex-row align-middle justify-between items-center w-full bg-gradient-to-r from-torch-red to-black px-5"
	>
		<a href="/"><img class="self-start max-w-52" src="/logo.png" alt="" /></a>
		<h1 class=" sm:text-[1.5rem] text-white text-right">
			{#if speaker.pre}
				{speaker.pre}.
			{/if}
			{speaker.name}
		</h1>
	</div>

	<div
		class="flex flex-col justify-start items-center bg-black p-10 sm:px-20 lg:px-30 2xl:px-80 gap-7 min-h-full"
	>
		<img src={`/img/ponentes/${speaker.id}_cv.png`} alt={speaker.name} />

		<div class="text-white text-justify">
			{@html speaker.cv}
		</div>
	</div>

	<div class="flex-0 flex flex-row justify-end relative w-100 h-56 bg-transparent -mt-20">
		<img class="w-100 h-56" src="/img/CABALLO-NAEQUINA-1.png" alt="CABALLO NAEQUINA" />
	</div>
	<Footer />
</div>

<style>
	h1 {
		font-family: 'Montserrat Bold';
	}
</style>
