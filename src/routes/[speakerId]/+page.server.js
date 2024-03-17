import { es } from '$lib/langs';
import { error } from '@sveltejs/kit';

export let prerender = true;
const { speakers } = es;

export function entries() {
	return [
		{ speakerId: 'alberto-casarin-valverde' },
		{ speakerId: 'wendy-pearson' },
		{ speakerId: 'kathleen-crandell' },
		{ speakerId: 'adriana-yolanda-diaz-archundia' },
		{ speakerId: 'alfredo-julian-paredes' },
		{ speakerId: 'ana-cecilia-gomez-campos' },
		{ speakerId: 'bernardo-aguado-medina' },
		{ speakerId: 'bernardo-monroy-hernandez' },
		{ speakerId: 'chris-rogers' },
		{ speakerId: 'elias-velazquez-canton' },
		{ speakerId: 'gulsah-kaya-karasu' },
		{ speakerId: 'lucia-perez-manrique' },
		{ speakerId: 'maria-esther-ortega-cerrilla' },
		{ speakerId: 'maria-masri-daba' },
		{ speakerId: 'mariano-hernandez-gil' },
		{ speakerId: 'meriel-moore-colyer' },
		{ speakerId: 'pamela-thomson-morales' },
		{ speakerId: 'peter-huntington' },
		{ speakerId: 'ramiro-calderon-villa' },
		{ speakerId: 'santiago-garcia-pasquel' },
		{ speakerId: 'silvia-elena-buntinx-dios' },
		{ speakerId: 'tamara-tadich-gallo' }
	];
}

export let load = ({ params }) => {
	const speaker = speakers.find((s) => s.id === params.speakerId);

	if (!speaker) {
		throw error(404, params.speakerId);
	}

	return {
		speaker
	};
};
