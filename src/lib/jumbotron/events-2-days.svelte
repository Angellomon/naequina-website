<script>
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

<div class="my-1 flex flex-col justify-center items-center text-white min-w-[300px]">
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
	<div class="flex flex-row justify-center items-end">
		DE <span class="text-4xl mx-1">{startHour}</span>
		HRS A
		<span class="text-4xl mx-1">{endHour}</span>
		HRS
	</div>
</div>
