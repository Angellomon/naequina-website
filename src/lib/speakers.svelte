<script>
	import { goto } from '$app/navigation';
	import { en, es } from '$lib/langs';
	import { getContext } from 'svelte';
	import Speaker from './speaker.svelte';

	/** @type {(es | en)} */
	const { speakers, speakersText } = getContext('lang');

	const speakersSlice = speakers.slice(1);

	/** @type {[typeof speakersSlice[0], typeof speakersSlice[0]][]} */
	const speakersPairs = [];

	for (let i = 0; i <= speakersSlice.length; i += 2) {
		speakersPairs.push([speakersSlice[i], speakersSlice[i + 1]]);
	}
</script>

<div class="bg-black flex flex-col gap-3">
	<div
		class="flex justify-center py-3 bg-torch-red bg-gradient-to-r from-torch-red to-black to-80%"
	>
		<h2 class="text-center text-white text-4xl sm:text-5xl">{speakersText.title}</h2>
	</div>

	<div
		class="flex flex-row sm:px-32 lg:px-72 xl:px-[30vw] 2xl:px-[35vw] justify-center bg-black px-2"
	>
		<Speaker speaker={speakers[0]} />
	</div>

	<div class="bg-black flex flex-col gap-3 px-2">
		{#each speakersPairs as pair, i}
			<div class="flex flex-col md:flex-row gap-3" class:flex-col-reverse={i % 2 !== 0}>
				<Speaker speaker={pair[0]} white={i % 2 !== 0} />

				{#if pair[1]}
					<Speaker speaker={pair[1]} white={i % 2 === 0} />
				{:else}
					<div class="w-full"></div>
				{/if}
			</div>
		{/each}
	</div>
</div>

<style>
	h2 {
		font-family: 'Montserrat Bold';
	}
</style>
