<script>
	import { tooltip } from '@svelte-plugins/tooltips';
	import { scrollTo } from 'svelte-scrolling';

	import { en, es } from '$lib/lang';

	/** @type {(en | es)} */
	export let lang;

	export let contactoId = 'contacto';
	export let langUrl = '/en';
</script>

<header
	class="relative w-full px-5 sm:px-20 py-4 flex flex-row min-h-20 bg-torch-red bg-gradient-to-r from-torch-red-500 from-15% to-black"
>
	<a href="/">
		<img class="h-16 sm:h-24" src="/logo.png" alt="logo NAEQUINA" />
	</a>

	<div class="flex flex-row items-center absolute z-50 right-4 sm:right-10 top-1/3">
		<!-- svelte-ignore a11y-missing-attribute -->
		<a use:scrollTo={contactoId} class="text-white px-5 py-2 contact hover:underline"
			>{lang.header.contactButton}</a
		>

		<a
			use:tooltip={{
				position: 'bottom',
				content: 'Switch to English',
				action: 'hover',
				arrow: true,
				animation: 'slide'
			}}
			href={langUrl}
			class="w-[30px]"
		>
			<img src="/img/BANDERA-EUA.png" alt="USA" />
		</a>
	</div>
</header>