<script>
	import { handleCaptchaError, resetCaptcha } from '$lib/captcha';
	import Horse from '$lib/jumbotron/horse.svelte';

	/** @type {string} */
	let email;

	const recaptchaSiteKey = import.meta.env.VITE_RECAPTCHA_SITE_KEY;

	const handleOnSubmit = () => {
		// @ts-ignore
		grecaptcha.ready(function () {
			// @ts-ignore
			grecaptcha.execute(recaptchaSiteKey, { action: 'submit' }).then(function (token) {
				// Add your logic to submit to your backend server here.
				handleEmail(token);
			});
		});
	};

	/** @param token {string} */
	async function handleEmail(token) {
		/** @type RequestInit */
		let options = {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				email,
				recaptchaToken: token
			})
		};

		const res = await fetch('/certificate-pdf', options);

		console.log(res);
	}
</script>

<div
	class="title flex flex-row justify-start pl-5 py-10 sm:py-16 sm:pl-16 bg-gradient-to-r from-torch-red to-black uppercase text-white text-4xl sm:text-[4rem]"
>
	CONSTANCIAS
</div>

<section class="bg-black h-[60vh] sm:min-h-[65vh] relative">
	<div class="text-white sm:w-3/5 flex flex-col justify-center items-center">
		<div class="flex flex-col justify-center items-center w-4/5">
			<p class="uppercase text-3xl pt-10 pb-5">CORREO ELECTRÓNICO</p>
			<input
				bind:value={email}
				required
				type="email"
				name="email"
				id="email"
				placeholder="Ingresa tu correo"
				class="bg-black text-white border border-solid border-torch-red px-4 py-2 text-xl w-full"
			/>
			<button
				class="bg-torch-red text-white px-6 py-2 self-end cursor-pointer hover:underline"
				on:click={handleOnSubmit}>ENVIAR</button
			>

			<p class="uppercase message text-center w-4/6 py-5 lg:w-1/2">
				INGRESA EL CORREO ELECTRÓNICO CON EL CUAL <span class="text-torch-red">TE REGISTRASTE</span>
			</p>
		</div>
		<Horse bottom />
	</div>
</section>

<style>
	.title {
		font-family: 'Montserrat Bold';
	}

	.message span {
		font-family: 'Montserrat Bold';
	}
</style>
