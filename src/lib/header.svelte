<script>
	import { tooltip } from '@svelte-plugins/tooltips';
	import { scrollTo } from 'svelte-scrolling';
	import { OnMount } from 'fractils';

	import { en, es } from '$lib/langs';
	import { getContext } from 'svelte';
	import HamburgerMenu from './hamburger-menu.svelte';
	import XIcon from './x-icon.svelte';
	import { fade, fly } from 'svelte/transition';

	/** @type {(en | es)} */
	const lang = getContext('lang');

	export let contactoId = 'contacto';
	export let programaId = 'programa';
	export let ponentesId = 'ponentes';
	export let langUrl = '/en';

	let menuVisible = false;

	function toggle() {
		menuVisible = !menuVisible;
	}

	function showMenu() {
		menuVisible = true;
	}

	function hideMenu() {
		menuVisible = false;
	}
</script>

<header
	class="relative w-full px-5 sm:px-20 flex flex-row justify-between items-center min-h-20 bg-torch-red bg-gradient-to-r from-torch-red-500 from-15% to-black"
>
	<a href="/">
		<img class="h-16 sm:h-24" src="/logo.png" alt="logo NAEQUINA" />
	</a>

	<div class="flex flex-row items-center absolute z-50 right-4 sm:right-10 top-1/3">
		<div class="sm:flex flex-row" hidden>
			<div class="flex flex-col sm:flex-row">
				<!-- svelte-ignore a11y-missing-attribute -->
				<a use:scrollTo={ponentesId} class="text-white px-5 py-2 contact hover:underline"
					>{lang.header.speakersText}</a
				>
				<!-- svelte-ignore a11y-missing-attribute -->
				<a use:scrollTo={programaId} class="text-white px-5 py-2 contact hover:underline"
					>{lang.header.programsText}</a
				>
				<!-- svelte-ignore a11y-missing-attribute -->
				<a use:scrollTo={contactoId} class="text-white px-5 py-2 contact hover:underline"
					>{lang.header.contactButton}</a
				>
			</div>

			<a
				use:tooltip={{
					position: 'bottom',
					content: lang.switchText,
					action: 'hover',
					arrow: true,
					animation: 'slide'
				}}
				href={langUrl}
				class="w-[30px]"
			>
				<img src={lang.flagUrl} alt="USA" />
			</a>
		</div>

		<OnMount>
			{#if !menuVisible}
				<!-- svelte-ignore a11y-click-events-have-key-events -->
				<!-- svelte-ignore a11y-no-static-element-interactions -->
				<div
					in:fade={{ delay: 350 }}
					class="sm:hidden hb-manu text-white cursor-pointer pr-4 pt-2"
					on:click={showMenu}
				>
					<HamburgerMenu />
				</div>
			{/if}

			{#if menuVisible}
				<div
					transition:fly={{ x: 200, delay: 200, duration: 200 }}
					class="menu flex flex-row text-white gap-2 bg-gradient-to-r from-transparent to-black -mt-6 pt-6"
				>
					<div class="flex flex-col sm:flex-row">
						<!-- svelte-ignore a11y-missing-attribute -->
						<a use:scrollTo={ponentesId} class="text-white px-2 py-2 contact hover:underline"
							>{lang.header.speakersText}</a
						>
						<!-- svelte-ignore a11y-missing-attribute -->
						<a use:scrollTo={programaId} class="text-white px-2 py-2 contact hover:underline"
							>{lang.header.programsText}</a
						>
						<!-- svelte-ignore a11y-missing-attribute -->
						<a use:scrollTo={contactoId} class="text-white px-2 py-2 contact hover:underline"
							>{lang.header.contactButton}</a
						>
					</div>

					<a
						use:tooltip={{
							position: 'bottom',
							content: lang.switchText,
							action: 'hover',
							arrow: true,
							animation: 'slide'
						}}
						href={langUrl}
						class="w-[30px]"
					>
						<img src={lang.flagUrl} alt="flag" />
					</a>

					<!-- svelte-ignore a11y-click-events-have-key-events -->
					<!-- svelte-ignore a11y-no-static-element-interactions -->
					<div on:click={hideMenu}>
						<XIcon />
					</div>
				</div>
			{/if}
		</OnMount>
	</div>
</header>

<style>
	.menu {
		align-self: flex-start;
		justify-self: flex-start;
	}
</style>
