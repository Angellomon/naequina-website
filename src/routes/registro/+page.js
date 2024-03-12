export let prerender = true;

export const load = async ({ params, url }) => {
	let mode = url.searchParams.get('mode');
	return { mode };
};
