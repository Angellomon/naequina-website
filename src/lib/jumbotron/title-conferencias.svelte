<script>
	import { OnMount } from 'fractils';
	import { fade } from 'svelte/transition';

	import { en, es } from '$lib/langs';
	import { getContext } from 'svelte';

	/** @type {number}*/
	export let year;

	export let small = false;

	/** @type {(en | es)} */
	const lang = getContext('lang');

	const generalTextStyle = small ? 'text-[0.6rem] sm:text-xs' : 'text-xs sm:text-base';
	const slashTextStyle = small ? 'text-[1.9rem] sm:text-5xl' : 'text-4xl sm:text-6xl';
	const yearTextStyle = small ? 'text-4xl sm:text-5xl' : 'text-4xl sm:text-6xl';
	const conferenceTextStyle = small ? 'text-lg sm:text-xl' : 'text-2xl sm:text-3xl';
</script>

<OnMount>
	<div
		transition:fade={{
			duration: 500,
			delay: 500
		}}
		class="my-1 flex flex-row gap-2 justify-center text-white"
	>
		<div class={`flex flex-col ${generalTextStyle}`}>
			<p class="leading-5">
				{lang.eventAnnouncement.leftConferenceText.conferenceNumber}
				{lang.eventAnnouncement.leftConferenceText.firstText}
			</p>
			<p class={`leading-5 ${conferenceTextStyle}`}>
				{lang.eventAnnouncement.leftConferenceText.secondText}
			</p>
		</div>
		<p class={`${slashTextStyle}`}>/</p>
		<p class={`font-bold ${yearTextStyle}`}>{year}</p>
	</div>
</OnMount>

<style>
	* {
		font-family: 'Montserrat Light';
	}
</style>
