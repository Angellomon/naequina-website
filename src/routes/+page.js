export const prerender = true;

export let load = ({ url }) => {
	return {
		url: url.pathname
	};
};
