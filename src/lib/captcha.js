let error = '';

export const handleCaptchaError = () => {
	error = 'Recaptcha error. Please reload the page';
};

export const resetCaptcha = () => {
	// @ts-ignore
	window.grecaptcha?.reset();
};



export const handleOnSubmit = () => {
	const recaptchaSiteKey = import.meta.env.VITE_RECAPTCHA_SITE_KEY;
	console.log('handleOnSubmit');
	// reset any errors
	error = '';

	// tell recaptcha to process a request
	// @ts-ignore
	// window.grecaptcha.execute();
	grecaptcha.ready(function () {
		console.log('hmmm');
		// @ts-ignore
		grecaptcha.execute(recaptchaSiteKey, { action: 'submit' }).then(function (token) {
			// Add your logic to submit to your backend server here.
		});
	});
};
