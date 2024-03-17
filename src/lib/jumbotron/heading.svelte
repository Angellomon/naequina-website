<script>
	import { es, en } from '$lib/langs';
	import { getContext } from 'svelte';
	import { OnMount } from 'fractils';

	import Title from './title.svelte';
	import TitleConferencias from './title-conferencias.svelte';
	import Message from './message.svelte';
	import Horse from './horse.svelte';
	import Events_2Days from './events-2-days.svelte';
	import AnnouncementRegistration from './announcement-registration.svelte';
	import { fly } from 'svelte/transition';
	import EventbriteButton from '$lib/eventbrite-button.svelte';

	/** @type {(es | en)} */
	const lang = getContext('lang');
</script>

<div class="relative w-full">
	<div class="relative py-28 bg-black flex flex-row md:min-h-[550px]">
		<div
			class="principal extra-large pl-20 sm:pl-36 md:pl-64 xl:pl-80 2xl:pl-[23rem] w-3/4 xl:w-3/5"
		>
			<OnMount>
				<div
					transition:fly={{
						duration: 1000,
						x: -300,
						delay: 100
					}}
					class="flex flex-col justify-start align-top w-full mb-5"
				>
					<Title>{lang.jumbotron.mainTitle.first}</Title>
					<Title white extraLarge>{lang.jumbotron.mainTitle.second}</Title>
				</div>

				<div
					transition:fly={{
						duration: 1000,
						x: 300,
						delay: 400
					}}
					class="flex flex-col justify-end align-bottom min-w-[35vw]"
				>
					<Title right>{lang.jumbotron.mainTitle.third}</Title>
					<Title white right>{lang.jumbotron.mainTitle.fourth}</Title>
				</div>
			</OnMount>
		</div>

		<EventbriteButton />
	</div>
	<div
		class="extra-large 2xl:pl-[20rem] pl-10 sm:pl-20 w-full min-h-20 flex flex-col flex-start xl:flex-row justify-center md:justify-start items-start gap-20 py-8 bg-torch-red bg-gradient-to-r from-torch-red to-black to-80%"
	>
		<TitleConferencias year={2024} />
		<Message />
	</div>

	<div
		class="extra-large pl-10 sm:pl-[9rem] 2xl:pl-[28rem] w-full min-h-20 flex flex-col flex-start xl:flex-row justify-center sm:justify-start items-start gap-20 md:gap-10 py-8 bg-black"
	>
		<Events_2Days day1={25} day2={26} startHour="08:15" endHour="06:00" />
		<AnnouncementRegistration />
	</div>

	<Horse />
</div>

<style>
	@media screen and (max-width: 640px) {
		.principal {
			width: 90%;
		}
	}

	@media screen and (min-width: 2200px) {
		.extra-large {
			padding-left: 30vw !important;
		}

		.principal {
			padding-left: 30rem;
		}
	}

	@media (max-width: 2200px) {
		.principal {
			padding-left: 24rem;
		}
	}

	@media screen and (max-width: 768px) {
		.extra-large {
			padding-left: 3rem;
		}
	}
</style>
