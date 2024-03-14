<script>
	import { en, es } from '$lib/langs';
	import { getContext } from 'svelte';

	/** @type {(en | es)} */
	const lang = getContext('lang');
</script>

<div
	class="px-14 flex flex-col sm:flex-row justify-center items-center gap-10 py-7 w-full bg-torch-red bg-gradient-to-r from-torch-red to-black to-80%"
>
	<div class="flex flex-col items-start">
		<h2 class="upper bg-black text-white text-2xl px-3 py-3 mb-4">{lang.eventContent.title}</h2>
		<ul class="list-disc text-white ml-5">
			<li>
				<strong>{lang.eventContent.firstElement[0]}:</strong>
				<p>{lang.eventContent.firstElement[1]}</p>
			</li>

			<li>
				<p>
					<strong>{lang.eventContent.secondElement[0]}</strong>
					{lang.eventContent.secondElement[1]}
					<strong>{lang.eventContent.secondElement[2]}</strong>
				</p>
			</li>

			<li>
				<p>
					<strong>{lang.eventContent.thirdElement[0]}</strong>
					{lang.eventContent.thirdElement[1]}
				</p>
			</li>

			<li>
				<p>
					<strong>{lang.eventContent.fourthElement[0]}</strong>
					{lang.eventContent.fourthElement[1]}
				</p>
			</li>

			<li>
				<p>
					<strong>{lang.eventContent.fifthElement[0]}</strong>
					{lang.eventContent.fifthElement[1]}
				</p>
			</li>
		</ul>
	</div>

	<div class="flex flex-col justify-center items-center sm:w-1/3">
		<h2 class="text-right text-3xl text-white w-80">
			{lang.eventContent.rightText}
		</h2>
	</div>
</div>

<!-- <div class="w-full h-10 bg-black"></div> -->
<div
	class="flex flex-col justify-center items-center bg-black py-3 text-2xl sm:text-3xl text-center"
>
	{#if lang.lang == 'es'}
		<p class="text-white">
			{lang.jumbotron.eventDescription[0]}
			<strong class="text-torch-red">{lang.jumbotron.eventDescription[1]}</strong>
		</p>
		<p class="text-white">
			<strong class="text-white">{lang.jumbotron.eventDescription[2]}</strong>
			{lang.jumbotron.eventDescription[3]}
			<strong class="text-white">{lang.jumbotron.eventDescription[4]}</strong>
		</p>
	{:else}
		<p class="text-white">
			{lang.jumbotron.eventDescription[0]}
			<strong class="text-torch-red">{lang.jumbotron.eventDescription[1]}</strong>
		</p>
		<p class="text-white">
			{lang.jumbotron.eventDescription[2]}
		</p>
	{/if}
</div>

<style>
	h2 {
		font-family: 'Montserrat Bold';
	}
</style>
