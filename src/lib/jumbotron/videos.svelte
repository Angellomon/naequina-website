<script>
	import { scrollRef } from 'svelte-scrolling';
	import { en, es } from '$lib/langs';
	import { getContext } from 'svelte';
	import Video from './video.svelte';

	/** @type {(es | en)} */
	const { jumbotron } = getContext('lang');

	export let videoIDs = [
		'AI47V9_qaEc',
		'rNfXh8XB22o',
		'4qWChK2W8kk',
		'3nyhRIkMuJM',
		'5fxEjhIgdTY',
		'iiQyJhlx-2E',
		'vcAsx0V3t_A',
		'evCt-OvYbY0',
		'PL-CY6743Vg',
		'pbN-nhj6brQ',
		'OmN5qdyQHy0',
		'w2YTsPXG3ck',
		'E0Xkfn6sVrI',
		'eXtXdlar2-M'
	];

	/** @type {string} */
	export let title;

	const roundTablesVideIDs = ['6DoSiMElVjg'];

	const ceremoniesVideoIDs = ['IIpv55-hgpk', 'qe6EAXEyJY4'];
</script>

<div id="ponentes" use:scrollRef={'conferences-videos'} class="bg-black flex flex-col gap-3">
	<div
		class="flex justify-center py-3 bg-torch-red bg-gradient-to-r from-torch-red to-black to-80%"
	>
		<h2 class="text-center text-white text-4xl sm:text-5xl">{title}</h2>
	</div>

	<div class="flex flex-row flex-wrap justify-center">
		{#each videoIDs as videoID}
			<Video {videoID} />
		{/each}
	</div>
</div>

<style>
	h2 {
		font-family: 'Montserrat Bold';
	}
</style>
