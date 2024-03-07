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

	import { name, email, message } from '$lib/store';
	import { handleCaptchaError, resetCaptcha } from '$lib/captcha';
	import { sendMessage } from '$lib/requests';
	import { onMount } from 'svelte';

	import { en, es } from '$lib/lang';

	const recaptchaSiteKey = import.meta.env.VITE_RECAPTCHA_SITE_KEY;

	/** @type {(en | es)} */
	export let lang;

	export const handleOnSubmit = () => {
		// @ts-ignore
		grecaptcha.ready(function () {
			// @ts-ignore
			grecaptcha.execute(recaptchaSiteKey, { action: 'submit' }).then(function (token) {
				// Add your logic to submit to your backend server here.
				handleCaptchaCallback(token);
			});
		});
	};

	/**
	 * @param {string} token
	 */
	const handleCaptchaCallback = async (token) => {
		await sendMessage({
			correo: $email,
			mensaje: $message,
			nombre: $name,
			recaptchaToken: token
		});
	};

	onMount(() => {
		window.handleCaptchaCallback = handleCaptchaCallback;
		window.handleCaptchaError = handleCaptchaError;
		window.resetCaptcha = resetCaptcha;
	});
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
			<TitleConferencias {lang} year={2024} />
			<Message {lang} />
		</div>

		<div
			class="extra-large pl-10 sm:pl-[9rem] 2xl:pl-[28rem] w-full min-h-20 flex flex-col flex-start xl:flex-row justify-center sm:justify-start items-start gap-20 md:gap-10 py-8 bg-black"
		>
			<Events_2Days {lang} day1={25} day2={26} month="abr" startHour="08:50" endHour="06:00" />
			<AnnouncementRegistration {lang} day={18} month="MARZO" startHour="00:00" />
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
					<p>{lang.eventContent.fifthElement[1]}</p>
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

	<div class="w-full h-10 bg-black"></div>

	<div
		id="contacto"
		use:scrollRef={'contacto'}
		class="extra-large-right sm:pl-[7rem] md:pl-[11rem] pr-10 sm:pr-[7rem] md:pr-[8rem] lg:pr-[14rem] 2xl:pr-[28rem] px-14 flex flex-col-reverse md:flex-row justify-between items-center gap-10 py-7 w-full bg-torch-red bg-gradient-to-l from-torch-red to-black to-80%"
	>
		<div class="flex flex-col">
			<div transition:fade class="text-white uppercase text-sm">
				<p>UNIVERSIDAD DEL VALLE DE MÉXICO</p>
				<p>CAMPUS SUR, SEDE COYOACÁN,</p>
				<p>ASOCIACIÓN MEXICANA DE MÉDICOS</p>
				<p>VETERINARIOS ESPECIALISTAS EN</p>
				<p>EQUINOS, A.C. (AMMVEE),</p>
				<p>DEPARTAMENTO DE NUTRICIÓN</p>
				<p>ANIMAL Y BIOQUÍMICA, FMVZ-UNAM</p>
			</div>
		</div>

		<div class="flex flex-col items-end">
			<h2 class="text-right upper bg-black text-white text-2xl px-3 py-3 mb-4">
				{lang.eventContactInfo.title}
			</h2>

			<ul class="text-white list-none text-right sm:pr-5">
				{#each lang.eventContactInfo.doctrsList as doc}
					<li>
						<strong>{doc.name}</strong>
					</li>
					{#if doc.email}
						<p><a href={'mailto:' + doc.email}>santiago.garcia@uvmnet.edu</a></p>
					{/if}
				{/each}
			</ul>
		</div>
	</div>
</OnMount>
<div class="w-full h-10 bg-black"></div>

<div
	class="contacto px-14 flex flex-col sm:flex-row justify-center items-center gap-10 py-7 bg-torch-red bg-gradient-to-r from-torch-red to-black to-80%"
>
	<div class="flex flex-col">
		<h2 class="w-min min-w-[12rem] text-right upper bg-black text-white text-2xl px-3 py-3 mb-4">
			{lang.eventContact.title}
		</h2>

		<form class="flex flex-col gap-5 relative" on:submit|preventDefault={handleOnSubmit}>
			<div class="flex flex-col sm:flex-row gap-5">
				<input
					class="rounded-md py-2 px-3"
					type="text"
					placeholder={lang.eventContact.namePlaceholder}
					name="nombre"
					id="nombre"
					required
					bind:value={$name}
				/>
				<input
					class="rounded-md py-2 px-3"
					type="email"
					placeholder={lang.eventContact.emailPlaceholder}
					name="correo"
					id="correo"
					required
					bind:value={$email}
				/>
			</div>

			<div class="flex flex-col">
				<textarea
					class="rounded-md py-2 px-3"
					name="mensaje"
					id="mensaje"
					cols="30"
					rows="6"
					placeholder={lang.eventContact.messagePlaceholder}
					required
					bind:value={$message}
				></textarea>
			</div>

			<input
				class="g-recaptcha w-min static transition-all ease-in-out right-5 bottom-5 text-right upper bg-transparent hover:bg-black hover:cursor-pointer text-white text-2xl px-3 py-3 mb-4"
				type="submit"
				value={lang.eventContact.submitText}
			/>
		</form>
	</div>
	<div class="spacer flex flex-col"></div>
</div>

<style>
	h2,
	ul li strong {
		font-family: 'Montserrat Bold';
	}

	form {
		font-family: 'Montserrat Regular';
		font-weight: bold;
	}

	ul li p {
		font-family: 'Montserrat Light';
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
