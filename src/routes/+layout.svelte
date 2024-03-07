<script>
	import '../app.css';
	const recaptchaSiteKey = import.meta.env.VITE_RECAPTCHA_SITE_KEY;
</script>

<svelte:head>
	<!-- Google tag (gtag.js) -->
	<script async src="https://www.googletagmanager.com/gtag/js?id=G-MFR4TLDGTS"></script>
	<script>
		window.dataLayer = window.dataLayer || [];
		function gtag() {
			dataLayer.push(arguments);
		}
		gtag('js', new Date());
		gtag('config', 'G-MFR4TLDGTS');
	</script>
	<script src={'https://www.google.com/recaptcha/api.js?render=' + recaptchaSiteKey}></script>
</svelte:head>

<slot />
