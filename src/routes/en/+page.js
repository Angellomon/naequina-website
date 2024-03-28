export let prerender = true;
export let trailingSlash = 'always';

export let load = ({ url }) => {
	return {
		url: url.pathname
	};
};
