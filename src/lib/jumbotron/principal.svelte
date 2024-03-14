<script>
	import { fade } from 'svelte/transition';
	import { OnMount } from 'fractils';
	import { scrollRef } from 'svelte-scrolling';
	import { fly } from 'svelte/transition';
	import Title from './title.svelte';
	import TitleConferencias from './title-conferencias.svelte';
	import Message from './message.svelte';
	import Horse from './horse.svelte';
	import Events_2Days from './events-2-days.svelte';
	import AnnouncementRegistration from './announcement-registration.svelte';

	import { getContext } from 'svelte';

	import { en, es } from '$lib/langs';
	import ContactForm from '$lib/contact-form.svelte';
	import ContactoInfo from '$lib/contacto-info.svelte';

	/** @type {(en | es)} */
	const lang = getContext('lang');
</script>

<OnMount>
	<div class="relative w-full">
		<div class="py-28 bg-black flex flex-row">
			<div
				class="principal extra-large pl-20 sm:pl-36 md:pl-64 xl:pl-80 2xl:pl-[23rem] w-3/4 xl:w-3/5"
			>
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
			</div>
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
			<Events_2Days day1={25} day2={26} startHour="08:50" endHour="06:00" />
			<AnnouncementRegistration />
		</div>

		<Horse />
	</div>
	<div
		class="px-14 flex flex-col sm:flex-row justify-center items-center gap-10 py-7 w-full bg-torch-red bg-gradient-to-r from-torch-red to-black to-80%"
	>
		<div class="flex flex-col items-start">
			<h2 class="upper bg-black text-white text-2xl px-3 py-3 mb-4">{lang.eventContent.title}</h2>
			<ul class="list-disc text-white ml-5">
				<li>
					<strong>{lang.eventContent.firstElement[0]}:</strong>
					<p>{lang.eventContent.firstElement[1]}</p>
				</li>

				<li>
					<p>
						<strong>{lang.eventContent.secondElement[0]}</strong>
						{lang.eventContent.secondElement[1]}
						<strong>{lang.eventContent.secondElement[2]}</strong>
					</p>
				</li>

				<li>
					<p>
						<strong>{lang.eventContent.thirdElement[0]}</strong>
						{lang.eventContent.thirdElement[1]}
					</p>
				</li>

				<li>
					<p>
						<strong>{lang.eventContent.fourthElement[0]}</strong>
						{lang.eventContent.fourthElement[1]}
					</p>
				</li>

				<li>
					<p>
						<strong>{lang.eventContent.fifthElement[0]}</strong>
						{lang.eventContent.fifthElement[1]}
					</p>
				</li>
			</ul>
		</div>

		<div class="flex flex-col justify-center items-center sm:w-1/3">
			<h2 class="text-right text-3xl text-white w-80">
				{lang.eventContent.rightText}
			</h2>
		</div>
	</div>

	<!-- <div class="w-full h-10 bg-black"></div> -->
	<div
		class="flex flex-col justify-center items-center bg-black py-3 text-2xl sm:text-3xl text-center"
	>
		{#if lang.lang == 'es'}
			<p class="text-white">
				{lang.jumbotron.eventDescription[0]}
				<strong class="text-torch-red">{lang.jumbotron.eventDescription[1]}</strong>
			</p>
			<p class="text-white">
				<strong class="text-white">{lang.jumbotron.eventDescription[2]}</strong>
				{lang.jumbotron.eventDescription[3]}
				<strong class="text-white">{lang.jumbotron.eventDescription[4]}</strong>
			</p>
		{:else}
			<p class="text-white">
				{lang.jumbotron.eventDescription[0]}
				<strong class="text-torch-red">{lang.jumbotron.eventDescription[1]}</strong>
			</p>
			<p class="text-white">
				{lang.jumbotron.eventDescription[2]}
			</p>
		{/if}
	</div>
</OnMount>
<div
	id="contacto"
	use:scrollRef={'contacto'}
	class="extra-large-right sm:pl-[7rem] md:pl-[11rem] pr-10 sm:pr-[7rem] md:pr-[8rem] lg:pr-[14rem] 2xl:pr-[28rem] px-14 flex flex-col-reverse md:flex-row justify-between items-center gap-10 py-7 w-full bg-torch-red bg-gradient-to-l from-torch-red to-black to-80%"
>
	<ContactoInfo />
</div>
<div class="w-full h-10 bg-black"></div>

<div
	class="contacto px-14 flex flex-col sm:flex-row justify-center items-center gap-10 py-7 bg-torch-red bg-gradient-to-r from-torch-red to-black to-80%"
>
	<ContactForm />
	<div class="spacer flex flex-col"></div>
</div>

<style>
	h2 {
		font-family: 'Montserrat Bold';
	}

	@media screen and (max-width: 640px) {
		.principal {
			width: 90%;
		}
	}

	@media screen and (min-width: 1024px) {
		.extra-large-right {
			padding-left: 15vw !important;
		}
	}

	@media screen and (min-width: 1440px) {
		.extra-large-right {
			padding-left: 20vw !important;
		}
	}

	@media screen and (min-width: 2200px) {
		.extra-large {
			padding-left: 30vw !important;
		}

		.extra-large-right {
			padding-left: 30vw !important;
			padding-right: 30vw;
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

		.spacer {
			display: none;
		}
	}

	.spacer {
		width: 31%;
	}
</style>
