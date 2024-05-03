<script>
	import Horse from '$lib/jumbotron/horse.svelte';
	import { downloadCertificatePDF } from '$lib/requests';

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

<section class="bg-black min-h-[60vh] sm:min-h-[65vh] relative">
	<div class="text-white sm:w-3/5 flex flex-col justify-center items-center">
		<div class="flex flex-col justify-center items-center w-4/5">
			<p class="uppercase text-4xl pt-10 pb-5">CORREO ELECTRÓNICO</p>
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
				on:click={handleOnSubmit}
			>
				{#if loading}
					CARGANDO
				{:else}
					ENVIAR
				{/if}
			</button>

			{#if invalidEmail}
				<div class="text-white">Tu correo no es válido</div>
			{/if}

			{#if emailNotFound}
				<div class="mt-2 uppercase text-white text-xs">
					Según nuestros registros, no cumpliste con el tiempo mínimo requerido para obtener la
					constancia de participación.
				</div>
			{/if}

			<p class="uppercase message text-center lg:w-4/6 py-5 text-2xl">
				INGRESA EL CORREO ELECTRÓNICO CON EL CUAL <span class="text-torch-red"
					>TE REGISTRASTE AL EVENTO</span
				>
			</p>
			<p class="uppercase message text-center text-md z-10">
				Para poder obtener la constancia, debes haber cubierto el requerimiento mínimo de asistencia
				el cual fue de <strong>75%</strong> del tiempo de conexión durante los dos días.
			</p>
			<p class="italic uppercase message text-center text-xs z-10 mt-5">
				El tiempo de conexión no incluye los recesos, sólo la conexión de ponencias.
			</p>

			<div class="h-[20vh]"></div>
		</div>
		<Horse bottom />
	</div>
</section>

<style>
	.title {
		font-family: 'Montserrat Bold';
	}

	.message span,
	.message strong {
		font-family: 'Montserrat Bold';
	}
</style>
