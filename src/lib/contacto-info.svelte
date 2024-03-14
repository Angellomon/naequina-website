<script>
	import { getContext } from 'svelte';

	import { en, es } from '$lib/langs';
	import { fade } from 'svelte/transition';

	/** @type {(en | es)} */
	const lang = getContext('lang');
</script>

<div class="flex flex-col">
	<div transition:fade class="text-white uppercase text-sm">
		<p>UNIVERSIDAD DEL VALLE DE MÉXICO</p>
		<p>CAMPUS SUR, SEDE COYOACÁN,</p>
		<p>ASOCIACIÓN MEXICANA DE MÉDICOS</p>
		<p>VETERINARIOS ESPECIALISTAS EN</p>
		<p>EQUINOS, A.C. (AMMVEE),</p>
		<p>DEPARTAMENTO DE NUTRICIÓN</p>
		<p>ANIMAL Y BIOQUÍMICA, FMVZ-UNAM</p>
	</div>
</div>

<div class="flex flex-col items-end">
	<h2 class="text-right upper bg-black text-white text-2xl px-3 py-3 mb-4">
		{lang.eventContactInfo.title}
	</h2>

	<ul class="text-white list-none text-right sm:pr-5">
		{#each lang.eventContactInfo.doctrsList as doc}
			<li>
				<strong>{doc.name}</strong>
			</li>
			{#if doc.email}
				<p><a href={'mailto:' + doc.email}>{doc.email}</a></p>
			{/if}
		{/each}
	</ul>
</div>

<style>
	h2,
	ul li strong,
	strong {
		font-family: 'Montserrat Bold';
	}

	ul li p {
		font-family: 'Montserrat Light';
	}
</style>
