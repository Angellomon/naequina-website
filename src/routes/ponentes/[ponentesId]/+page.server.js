import { es } from '$lib/langs';
import { error } from '@sveltejs/kit';

export let prerender = true;
export let trailingSlash = 'always';
const { speakers } = es;

export function entries() {
	return [
		{ ponentesId: 'alberto-casarin-valverde' },
		{ ponentesId: 'wendy-pearson' },
		{ ponentesId: 'kathleen-crandell' },
		{ ponentesId: 'adriana-yolanda-diaz-archundia' },
		{ ponentesId: 'alfredo-julian-paredes' },
		{ ponentesId: 'ana-celia-gomez-campos' },
		{ ponentesId: 'bernardo-aguado-medina' },
		{ ponentesId: 'bernardo-monroy-hernandez' },
		{ ponentesId: 'chris-rogers' },
		{ ponentesId: 'elias-velazquez-canton' },
		{ ponentesId: 'gulsah-kaya-karasu' },
		{ ponentesId: 'lucia-perez-manrique' },
		{ ponentesId: 'maria-esther-ortega-cerrilla' },
		{ ponentesId: 'maria-masri-daba' },
		{ ponentesId: 'mariano-hernandez-gil' },
		{ ponentesId: 'meriel-moore-colyer' },
		{ ponentesId: 'pamela-thomson-morales' },
		{ ponentesId: 'peter-huntington' },
		{ ponentesId: 'ramiro-calderon-villa' },
		{ ponentesId: 'santiago-garcia-pasquel' },
		{ ponentesId: 'silvia-elena-buntinx-dios' },
		{ ponentesId: 'tamara-tadich-gallo' }
	];
}

export let load = ({ params, url }) => {
	const speaker = speakers.find((s) => s.id === params.ponentesId);

	if (!speaker) {
		throw error(404, params.ponentesId);
	}

	return {
		speaker,
		url: url.pathname
	};
};
