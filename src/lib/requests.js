import { resetCaptcha } from './captcha';

/**
 *
 * @param {{
 *    correo: string;
 *    nombre: string;
 *    mensaje: string;
 *    recaptchaToken: string;
 * }} data Data
 */
export const sendMessage = async (data) => {
	const { correo, mensaje, nombre, recaptchaToken } = data;

	const emailUrl = import.meta.env.VITE_EMAIL_URL;
	const mode = import.meta.env.VITE_MODE;

	/** @type RequestInit */
	let options = {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify({
			correo,
			mensaje,
			nombre,
			recaptchaToken
		})
	};

	if (mode === 'DEV') options = { ...options, mode: 'no-cors' };

	await fetch(emailUrl, options);

	// reset recaptcha for future requests
	resetCaptcha();
};
