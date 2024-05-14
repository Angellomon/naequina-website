<script>
	import { scrollRef } from 'svelte-scrolling';
	import { en, es } from '$lib/langs';
	import { getContext } from 'svelte';

	import ContactForm from '$lib/contact-form.svelte';
	import ContactoInfo from '$lib/contacto-info.svelte';
	import Heading from './heading.svelte';
	import Spacer from '$lib/spacer.svelte';
	import EventContent from './event-content.svelte';
	import Speakers from '$lib/speakers.svelte';
	import Programs from '$lib/programs.svelte';
	import Videos from './videos.svelte';

	/** @type {(es | en)} */
	const { jumbotron } = getContext('lang');

	const conferencesVideIDs = [
		'AI47V9_qaEc',
		'rNfXh8XB22o',
		'4qWChK2W8kk',
		'3nyhRIkMuJM',
		'5fxEjhIgdTY',
		'iiQyJhlx-2E',
		'vcAsx0V3t_A',
		'evCt-OvYbY0',
		'PL-CY6743Vg',
		'pbN-nhj6brQ',
		'OmN5qdyQHy0',
		'w2YTsPXG3ck',
		'E0Xkfn6sVrI',
		'eXtXdlar2-M'
	];

	const roundTablesVideIDs = ['6DoSiMElVjg'];

	const ceremoniesVideoIDs = ['IIpv55-hgpk', 'qe6EAXEyJY4'];
</script>

<Heading />

<EventContent />

<Videos title={jumbotron.videoTitles.conferences} videoIDs={conferencesVideIDs} />

<Videos title={jumbotron.videoTitles.roundTables} videoIDs={roundTablesVideIDs} />

<Videos title={jumbotron.videoTitles.ceremonies} videoIDs={ceremoniesVideoIDs} />

<Speakers />

<div class="w-full h-10 bg-black"></div>

<Programs />

<div class="w-full h-10 bg-black"></div>

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
	<Spacer />
</div>

<style>
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
		.extra-large-right {
			padding-left: 30vw !important;
			padding-right: 30vw;
		}
	}
</style>
