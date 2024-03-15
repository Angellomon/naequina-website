<script>
	import { getContext } from 'svelte';
	import { en, es } from '$lib/langs';

	/** @type {(en | es)} */
	const lang = getContext('lang');
</script>

<div class="flex justify-center py-3 bg-torch-red bg-gradient-to-r from-torch-red to-black to-80%">
	<h2 class="text-center text-white text-4xl sm:text-5xl">{lang.programsTitle}</h2>
</div>

<div class="bg-black w-full flex flex-col justify-center items-center gap-4 pt-4">
	{#each lang.programs as program}
		<p class="text-center text-white text-4xl sm:text-5xl">
			{#if lang.lang === 'es'}
				<strong>{program.date[0]}</strong>
				{program.date[1]}
			{:else}
				{program.date[0]}
				<strong>{program.date[1]}</strong>
			{/if}
		</p>

		<div class="flex flex-col border border-solid border-torch-red px-3 py-2 w-1/2">
			{#each program.events as event}
				<div class="relative py-10 px-3 border-b border-solid border-torch-red">
					{#if event.cols == 1}
						<div class="html w-full text-white">
							{@html (lang.programsStyle, event.contents)}
						</div>
					{:else}
						<div class="flex flex-row">
							<div class="html w-2/3 text-white">
								{@html (lang.programsStyle, event.contents)}
							</div>
							<div class="html right-2 top-10 text-white w-1/3 text-right">
								{@html (lang.programsStyle, event.extraContent)}
							</div>
						</div>
					{/if}

					<div class="absolute left-0 bottom-0 bg-torch-red text-white">
						{event.startHour} - {event.endHour}
					</div>
				</div>
			{/each}
		</div>
	{/each}
</div>

<style>
	h2,
	strong {
		font-family: 'Montserrat Bold' !important;
	}
</style>
