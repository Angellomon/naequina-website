<script>
	import { OnMount } from 'fractils';
	import { fade } from 'svelte/transition';
	import { es, en } from '$lib/lang';

	/** @type {number}*/
	export let day1;

	/** @type {number}*/
	export let day2;

	/** @type {string}*/
	export let startHour;

	/** @type {string}*/
	export let endHour;

	/** @type {string}*/
	export let month;

	/** @type {(en | es)} */
	export let lang;
</script>

<OnMount>
	<div
		transition:fade={{
			duration: 500,
			delay: 1000
		}}
		class="my-1 flex flex-col justify-center items-center text-white min-w-[300px]"
	>
		<div class="flex flex-row justify-center items-end border-b border-torch-red w-full text-3xl">
			{#if lang.lang == 'en'}
				{lang.eventDates.leftEvent.month}
			{/if}

			<div class="text-torch-red items-end text-5xl mx-2">
				{day1}
			</div>
			{lang.eventDates.leftEvent.sep}
			<div class="text-torch-red text-5xl mx-2">
				{day2}
			</div>

			{#if lang.lang == 'es'}
				{lang.eventDates.leftEvent.month}
			{/if}
		</div>
		<div class="flex flex-row justify-center items-end text-sm sm:text-md">
			{lang.eventDates.leftEvent.from} <span class="text-3xl sm:text-4xl mx-1">{startHour}</span>
			A.M. {lang.eventDates.leftEvent.to}
			<span class="text-3xl sm:text-4xl mx-1">{endHour}</span> P.M.
		</div>
	</div>
</OnMount>
