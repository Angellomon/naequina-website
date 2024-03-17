<script>
	import { goto } from '$app/navigation';

	import { es, en } from '$lib/langs';
	import { getContext } from 'svelte';

	/** @type {{
	 *    id: string;
	 *    name: string;
	 *    pre: string;
	 *    description: string;
	 *    flagUrl: string;
	 * }} */
	export let speaker;

	export let white = false;

	let hovered = false;

	/** @type {(es | en)} */
	const lang = getContext('lang');

	/** @param {string} id  */
	function gotoSpeaker(id) {
		goto('/speakers/' + id, {});
	}
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-no-static-element-interactions -->
<div
	class="flex flex-row justify-center gap-5 bg-black border-2 w-full h-[250px] sm:h-[200px] hover:cursor-pointer"
	class:border-torch-red={!white}
	class:border-white={white}
	on:click={() => gotoSpeaker(speaker.id)}
	on:mouseenter={() => {
		hovered = true;
	}}
	on:mouseleave={() => {
		hovered = false;
	}}
>
	<div
		class="relative w-[200px] m-2"
		style={`background: no-repeat center/cover url("/img/ponentes/${speaker.id}.png");`}
	>
		<!-- <img
			src={`/img/ponentes/${speaker.id}.png`}
			alt={speaker.name}
			style="height: 100%; width: 100%; object-fit: contain"
			class:big={bigPhoto}
		/> -->

		<img
			src={speaker.flagUrl}
			alt={speaker.flagUrl}
			class="absolute bottom-1 -right-6 w-[50px] z-10 rounded-full border-2 border-solid border-white"
		/>
	</div>

	<div class="relative flex flex-col px-7 py-3 flex-1 min-w-48">
		<h2 class="text-2xl max-w-44 leading-7 mb-2 text-white" class:hovered>
			{#if speaker.pre}
				{speaker.pre}. {speaker.name}
			{:else}
				{speaker.name}
			{/if}
		</h2>

		<p class="text-md max-w-[250px] leading-5 text-white">
			{speaker.description}
		</p>

		<div class="absolute right-0 bottom-0 text-white px-3 py-2 bg-torch-red" class:hovered>
			<strong>{lang.cvText}</strong>
		</div>
	</div>
</div>

<style lang="postcss">
	h2 {
		font-family: 'Montserrat Bold';
	}

	.hovered {
		text-decoration: underline;
	}
</style>
