<script>
	import Title from './title.svelte';
	import TitleConferencias from './title-conferencias.svelte';
	import Message from './message.svelte';
	import Horse from './horse.svelte';
	import Events_2Days from './events-2-days.svelte';
	import AnnouncementRegistration from './announcement-registration.svelte';
</script>

<div class="relative w-full">
	<div class="py-28 xl:py-40 bg-black flex flex-row">
		<div class="px-36 max-md:px-10 m w-3/4 xl:w-1/2">
			<div class="flex flex-col justify-start align-top w-full mb-5">
				<Title>SIETE AÑOS DE</Title>
				<Title white extraLarge>NAEQUINA</Title>
			</div>

			<div class="flex flex-col justify-end align-bottom w-full">
				<Title right>UNA MIRADA</Title>
				<Title white right>RETROSPECTIVA</Title>
			</div>
		</div>
	</div>
	<div
		class="w-full min-h-20 flex flex-col flex-start xl:flex-row justify-center md:justify-start items-start gap-20 px-10 py-8 bg-amaranth bg-gradient-to-r from-amaranth-500 to-black to-80%"
	>
		<TitleConferencias numConf={7} year={2024} />
		<Message />
	</div>

	<div
		class="w-full min-h-20 flex flex-col flex-start xl:flex-row justify-center md:justify-start items-start gap-20 md:gap-10 px-10 py-8 bg-black"
	>
		<Events_2Days day1={25} day2={26} month="abr" startHour="08:50" endHour="18:00" />
		<AnnouncementRegistration day={18} month="MARZO" startHour="00:00" />
	</div>

	<Horse />
</div>
