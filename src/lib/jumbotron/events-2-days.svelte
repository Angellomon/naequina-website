<script>
	import { OnMount } from 'fractils';
	import { fade } from 'svelte/transition';

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
</script>

<OnMount>
	<div
		transition:fade={{
			duration: 500,
			delay: 1000
		}}
		class="my-1 flex flex-col justify-center items-center text-white min-w-[300px]"
	>
		<div class="flex flex-row justify-center items-end border-b border-amaranth w-full text-3xl">
			<div class="text-amaranth items-end text-5xl mx-2">
				{day1}
			</div>
			Y
			<div class="text-amaranth text-5xl mx-2">
				{day2}
			</div>

			{month.toLocaleUpperCase()}
		</div>
		<div class="flex flex-row justify-center items-end text-sm sm:text-md">
			DE <span class="text-4xl mx-1">{startHour}</span>
			HRS A
			<span class="text-4xl mx-1">{endHour}</span>
			HRS
		</div>
		<!-- <button
			class="transition duration-500 ease-in-out bg-blue-600 hover:bg-red-600 transform hover:-translate-y-1 hover:scale-110 ..."
		>
			Hover me
		</button> -->
	</div>
</OnMount>
