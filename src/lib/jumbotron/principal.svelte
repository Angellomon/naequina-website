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
			<div class="extra-large pl-20 sm:pl-36 md:pl-64 xl:pl-80 2xl:pl-[30rem] w-3/4 xl:w-3/5">
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
			class="extra-large 2xl:pl-[20rem] pl-10 sm:pl-20 w-full min-h-20 flex flex-col flex-start xl:flex-row justify-center md:justify-start items-start gap-20 py-8 bg-torch-red bg-gradient-to-r from-torch-red to-black to-80%"
		>
			<TitleConferencias numConf={7} year={2024} />
			<Message />
		</div>

		<div
			class="extra-large pl-10 sm:pl-[9rem] 2xl:pl-[28rem] w-full min-h-20 flex flex-col flex-start xl:flex-row justify-center sm:justify-start items-start gap-20 md:gap-10 py-8 bg-black"
		>
			<Events_2Days day1={25} day2={26} month="abr" startHour="08:50" endHour="18:00" />
			<AnnouncementRegistration day={18} month="MARZO" startHour="00:00" />
		</div>

		<Horse />
	</div>
	<div
		class="px-14 flex flex-col sm:flex-row justify-center items-center gap-10 py-7 w-full bg-torch-red bg-gradient-to-r from-torch-red to-black to-80%"
	>
		<div class="flex flex-col items-start">
			<h2 class="upper bg-black text-white text-2xl px-3 py-3 mb-4">CONTENIDO TEMÁTICO</h2>
			<ul class="list-disc text-white ml-5">
				<li>
					<strong>APARATO DIGESTIVO:</strong>
					<p>EVOLUCIÓN, MICROBIOMA Y DESÓRDENES DIGESTIVOS</p>
				</li>

				<li>
					<p><strong>ALIMENTOS</strong> Y NECESIDADES DE <strong>NUTRIENTES</strong></p>
				</li>

				<li>
					<p><strong>ALIMENTACIÓN</strong> PARA LA VIDA</p>
				</li>

				<li>
					<p><strong>ALIMENTACIÓN</strong> PARA EL POTRO</p>
				</li>

				<li>
					<p><strong>BIENESTAR ANIMAL</strong>, LA BUENA ALIMENTACIÓN</p>
				</li>
			</ul>
		</div>

		<div class="flex flex-col justify-center items-center sm:w-1/3">
			<h2 class="text-center text-3xl text-white w-auto">
				MESA REDONDA CON EXPERTOS EN ALIMENTACIÓN Y SALUD EQUINA
			</h2>
		</div>
	</div>

	<div class="w-full h-10 bg-black"></div>

	<div
		class="extra-large-right pr-10 sm:pr-[14rem] 2xl:pr-[28rem] px-14 flex flex-row justify-end items-center gap-10 py-7 w-full bg-torch-red bg-gradient-to-l from-torch-red to-black to-80%"
	>
		<div class="flex flex-col items-end">
			<h2 class="text-right upper bg-black text-white text-2xl px-3 py-3 mb-4">
				INFORMES Y COORDINADORES
			</h2>

			<ul class="text-white list-none text-right sm:pr-5">
				<li>
					<strong>DRA.SILVIA ELENA BUNTINX DIOS</strong>
				</li>

				<li>
					<strong>DR. SANTIAGO GARCÍA PASQUEL</strong>
					<p><a href="mailto:santiago.garcia@uvmnet.edu">santiago.garcia@uvmnet.edu</a></p>
				</li>

				<li>
					<strong>DR. MARIANO HERNÁNDEZ GIL</strong>
				</li>

				<li>
					<strong>DR. EDUARDO MORONES</strong>
					<p><a href="lalovaquero@yahoo.com.mx">lalovaquero@yahoo.com.mx</a></p>
				</li>

				<li>
					<strong>DRA. AURORA HILDA RAMÍREZ PÉREZ</strong>
					<p><a href="rpereza@unam.mx">rpereza@unam.mx</a></p>
				</li>

				<li>
					<strong>DR. ELÍAS VELÁZQUEZ CANTÓN</strong>
					<p><a href="evelazquez@gponutec.com">evelazquez@gponutec.com</a></p>
				</li>
			</ul>
		</div>
	</div>
</OnMount>

<style>
	h2,
	ul li strong {
		font-family: 'Montserrat Bold';
	}

	ul li p {
		font-family: 'Montserrat Light';
	}

	@media screen and (min-width: 2200px) {
		.extra-large {
			padding-left: 30vw;
		}

		.extra-large-right {
			padding-right: 30vw;
		}
	}
</style>
