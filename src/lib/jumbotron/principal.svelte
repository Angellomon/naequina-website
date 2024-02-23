<script>
	import { OnMount } from 'fractils';
	import { fly } from 'svelte/transition';
	import Title from './title.svelte';
	import TitleConferencias from './title-conferencias.svelte';
	import Message from './message.svelte';
	import Horse from './horse.svelte';
	import Events_2Days from './events-2-days.svelte';
	import AnnouncementRegistration from './announcement-registration.svelte';
</script>

<OnMount>
	<div class="relative w-full">
		<div class="py-28 bg-black flex flex-row">
			<div class="pl-20 sm:pl-36 md:pl-64 xl:pl-80 2xl:pl-[30rem] w-3/4 xl:w-3/5">
				<div
					transition:fly={{
						duration: 1000,
						x: -300,
						delay: 100
					}}
					class="flex flex-col justify-start align-top w-full mb-5"
				>
					<Title>SIETE AÑOS DE</Title>
					<Title white extraLarge>NAEQUINA</Title>
				</div>

				<div
					transition:fly={{
						duration: 1000,
						x: 300,
						delay: 400
					}}
					class="flex flex-col justify-end align-bottom w-full"
				>
					<Title right>UNA MIRADA</Title>
					<Title white right>RETROSPECTIVA</Title>
				</div>
			</div>
		</div>
		<div
			class="2xl:pl-[20rem] pl-10 sm:pl-20 w-full min-h-20 flex flex-col flex-start xl:flex-row justify-center md:justify-start items-start gap-20 py-8 bg-amaranth bg-gradient-to-r from-amaranth-500 to-black to-80%"
		>
			<TitleConferencias numConf={7} year={2024} />
			<Message />
		</div>

		<div
			class="pl-10 sm:pl-[9rem] 2xl:pl-[28rem] w-full min-h-20 flex flex-col flex-start xl:flex-row justify-center sm:justify-start items-start gap-20 md:gap-10 py-8 bg-black"
		>
			<Events_2Days day1={25} day2={26} month="abr" startHour="08:50" endHour="18:00" />
			<AnnouncementRegistration day={18} month="MARZO" startHour="00:00" />
		</div>

		<Horse />
	</div>
</OnMount>
