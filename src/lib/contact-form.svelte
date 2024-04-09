<script>
	import { getContext, onMount } from 'svelte';
	import { en, es } from '$lib/langs';
	import { name, email, message } from '$lib/store';
	import { handleCaptchaError, resetCaptcha } from '$lib/captcha';
	import { sendMessage } from '$lib/requests';
	import { slide } from 'svelte/transition';

	const recaptchaSiteKey = import.meta.env.VITE_RECAPTCHA_SITE_KEY;

	/** @type {(en | es)} */
	const lang = getContext('lang');

	let success = false;

	const handleOnSubmit = () => {
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

		console.log('exito');

		success = true;

		$name = '';
		$email = '';
		$message = '';
	};

	onMount(() => {
		window.handleCaptchaCallback = handleCaptchaCallback;
		window.handleCaptchaError = handleCaptchaError;
		window.resetCaptcha = resetCaptcha;
	});
</script>

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

		<div class="flex flex-row items-baseline gap-4 static right-5 bottom-5">
			<input
				class="g-recaptcha w-min transition-all ease-in-out text-right upper bg-transparent hover:bg-black hover:cursor-pointer text-white text-2xl px-3 py-3 mb-4"
				type="submit"
				value={lang.eventContact.submitText}
			/>

			{#if success}
				<p class="text-white" transition:slide={{ axis: 'y' }}>
					{lang.eventContact.successMessage}
				</p>
			{/if}
		</div>
	</form>
</div>

<style>
	h2 {
		font-family: 'Montserrat Bold';
	}

	form {
		font-family: 'Montserrat Regular';
		font-weight: bold;
	}
</style>
