<script>
	import Title from './title.svelte';
	import TitleConferencias from './title-conferencias.svelte';
	import Message from './message.svelte';
	import Horse from './horse.svelte';
</script>

<div class="relative">
	<div class="py-10 bg-black">
		<div class="px-36 w-1/2">
			<div class="flex flex-col justify-start align-top">
				<Title>SIETE AÑOS DE</Title>
				<Title white extraLarge>NAEQUINA</Title>
			</div>

			<div class="flex flex-col justify-end align-bottom">
				<Title right>UNA MIRADA</Title>
				<Title white right>RETROSPECTIVA</Title>
			</div>
		</div>
	</div>
	<div
		class="w-full min-h-20 flex flex-start gap-20 px-10 py-8 bg-amaranth bg-gradient-to-r from-amaranth-500 to-black to-80%"
	>
		<TitleConferencias numConf={7} year={2024} />
		<Message />
	</div>

	<Horse />
</div>
