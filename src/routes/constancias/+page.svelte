<script>
	import Horse from '$lib/jumbotron/horse.svelte';
	import { downloadCertificatePDF } from '$lib/requests';
	import Spinner from '$lib/spinner.svelte';

	/** @type {string} */
	let email;

	let invalidEmail = false;
	let emailNotFound = false;
	let loading = false;

	const recaptchaSiteKey = import.meta.env.VITE_RECAPTCHA_SITE_KEY;

	const handleOnSubmit = () => {
		// @ts-ignore
		grecaptcha.ready(function () {
			// @ts-ignore
			grecaptcha.execute(recaptchaSiteKey, { action: 'submit' }).then(function (token) {
				// Add your logic to submit to your backend server here.
				loading = true;
				invalidEmail = false;
				emailNotFound = false;

				downloadCertificatePDF(email, token).then((errors) => {
					invalidEmail = errors.invalidEmail;
					emailNotFound = errors.notFound;
					loading = false;
				});
			});
		});
	};
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

			{#if invalidEmail}
				<div class="text-white">Tu correo no es válido</div>
			{/if}

			{#if emailNotFound}
				<div class="text-white">Tu correo no se encuentra en la base de datos</div>
			{/if}

			<!-- {#if loading}
				<div class="self-end">
					<Spinner />
				</div>
			{/if} -->

			<button
				class="bg-torch-red text-white px-6 py-2 self-end cursor-pointer hover:underline"
				on:click={handleOnSubmit}
			>
				{#if loading}
					CARGANDO
				{:else}
					ENVIAR
				{/if}
			</button>

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
