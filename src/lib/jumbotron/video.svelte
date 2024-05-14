<script>
	/**
	 * @type {string}
	 */
	export let videoID;
</script>

<iframe
	class="py-5 px-3"
	src={`https://www.youtube.com/embed/${videoID}`}
	title="YouTube video player"
	frameborder="0"
	allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
	referrerpolicy="strict-origin-when-cross-origin"
	allowfullscreen
></iframe>

<style>
	iframe {
		height: 400px;
		width: 650px;
	}

	@media screen and (max-width: 640px) {
		iframe {
			height: 300px;
			width: 90%;
		}
	}

	@media screen and (min-width: 2200px) {
	}

	@media (max-width: 2200px) {
	}

	@media screen and (max-width: 768px) {
	}
</style>
