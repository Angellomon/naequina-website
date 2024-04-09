import { saveAs } from 'file-saver';
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
	// resetCaptcha();
};

/**
 * Validates an email address.
 *
 * @param {string} email - the email address to validate
 * @return {boolean} true if the email is valid, false otherwise
 */
function validateEmail(email) {
	if (!email) return false;

	const re =
		/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	return re.test(String(email).toLowerCase());
}

/**
 *  @param email {string}
 *  @param token {string}
 */
export async function downloadCertificatePDF(email, token) {
	let validEmail = validateEmail(email);

	if (!validEmail)
		return {
			invalidEmail: true,
			notFound: false
		};

	/** @type RequestInit */
	let options = {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify({
			email,
			recaptchaToken: token
		})
	};

	const res = await fetch('/certificate-pdf', options);

	if (!res.ok || res.status == 404) {
		return {
			invalidEmail: false,
			notFound: true
		};
	}

	const blob = await res.blob();

	console.log(blob.size);

	if (blob.size <= 69) {
		return {
			invalidEmail: false,
			notFound: true
		};
	}

	saveAs(blob, 'certificate.pdf');

	return {
		invalidEmail: false,
		notFound: false
	};
}

/**
 *
 * @param {string} filename
 * @param {Blob} blob
 */
