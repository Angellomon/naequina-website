<script>
	import { OnMount } from 'fractils';
	import { fade } from 'svelte/transition';
	import { es, en } from '$lib/langs';
	import { getContext } from 'svelte';

	/** @type {(en | es)} */
	const lang = getContext('lang');
</script>

<OnMount>
	<div
		transition:fade={{
			duration: 500,
			delay: 800
		}}
		class="my-1 flex flex-col gap-2 justify-start items-start text-white"
	>
		<p class="bold font-bold text-xl leading-3 tracking-wide">
			{lang.eventAnnouncement.rightConferenceText.firstText}
		</p>
		{#if lang.lang === 'es'}
			<p class="text-4xl leading-6">{lang.eventAnnouncement.rightConferenceText.secondText}</p>

			<p class="bold font-bold text-sm tracking-wide">
				{lang.eventAnnouncement.rightConferenceText.thirdText}
			</p>
		{:else}
			<p class="text-5xl leading-7">{lang.eventAnnouncement.rightConferenceText.secondText}</p>

			<p class="bold font-bold text-xs tracking-wide">
				{lang.eventAnnouncement.rightConferenceText.thirdText}
			</p>
		{/if}
	</div>
</OnMount>

<style lang="postcss">
	* {
		font-family: 'Montserrat Light';
	}

	p.bold {
		font-family: 'Montserrat Regular';
		font-weight: bolder;
	}
</style>
