<script>
	/** @type {{
	 *    id: string;
	 *    name: string;
	 *    pre: string;
	 *    description: string;
	 *    flagUrl: string;
	 * }} */
	export let speaker;

	export let white = false;
</script>

<div
	class="flex flex-row justify-center gap-5 w-full h-[250px] sm:h-[200px]"
	class:bg-white={!white}
	class:bg-torch-red={white}
>
	<div
		class="relative w-[200px]"
		style={`background: no-repeat center/cover url("/img/ponentes/${speaker.id}.png");`}
	>
		<!-- <img
			src={`/img/ponentes/${speaker.id}.png`}
			alt={speaker.name}
			style="height: 100%; width: 100%; object-fit: contain"
			class:big={bigPhoto}
		/> -->

		<img src={speaker.flagUrl} alt={speaker.flagUrl} class="absolute bottom-1 right-2 w-[50px]" />
	</div>

	<div
		class="flex flex-col px-7 py-3 flex-1 min-w-48"
		class:bg-white={white}
		class:bg-torch-red={!white}
	>
		<h2 class="text-2xl max-w-44 leading-7 mb-2" class:text-white={!white} class:text-black={white}>
			{#if speaker.pre}
				{speaker.pre}. {speaker.name}
			{:else}
				{speaker.name}
			{/if}
		</h2>

		<p class="text-md max-w-[250px] leading-5" class:text-white={!white} class:text-black={white}>
			{speaker.description}
		</p>
	</div>
</div>

<style>
	h2 {
		font-family: 'Montserrat Bold';
	}

	.big {
		width: 300px;
	}
</style>
