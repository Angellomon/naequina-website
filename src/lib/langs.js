const programsStyle = `<style>strong {
	font-family: 'Montserrat Bold' !important;
}</style>`;

export const es = {
	lang: 'es',
	flagUrl: '/img/BANDERA-EUA.png',
	switchText: 'Switch to English',
	header: {
		contactButton: 'CONTACTO'
	},
	jumbotron: {
		eventDescription: [
			'EL EVENTO DE',
			'NUTRICIÓN ANIMAL EQUINA',
			'MÁS IMPORTANTE',
			'DE',
			'HISPANOAMÉRICA'
		],
		mainTitle: {
			first: 'SIETE AÑOS DE',
			second: 'NAEQUINA,',
			third: 'UNA MIRADA',
			fourth: 'RETROSPECTIVA'
		}
	},
	eventAnnouncement: {
		leftConferenceText: {
			conferenceNumber: '7°.',
			firstText: 'CICLO INTERNACIONAL DE',
			secondText: 'CONFERENCIAS'
		},
		rightConferenceText: {
			firstText: 'EVENTO VIRTUAL',
			secondText: 'GRATUITO',
			thirdText: 'CON VALOR CURRICULAR'
		}
	},
	eventDates: {
		leftEvent: {
			sep: 'Y',
			month: 'ABR',
			from: 'DE',
			to: 'A'
		},
		rightEvent: {
			title: 'INICIO DE INSCRIPCIONES',
			date: '18 DE MARZO',
			hour: '00:00 H',
			from: 'DESDE LAS'
		}
	},
	eventContent: {
		title: 'CONTENIDO TEMÁTICO',
		firstElement: ['APARATO DIGESTIVO', 'EVOLUCIÓN, MICROBIOMA Y DESÓRDENES DIGESTIVOS'],
		secondElement: ['ALIMENTOS', 'Y NECESIDADES DE', 'NUTRIENTES'],
		thirdElement: ['ALIMENTACIÓN', 'PARA LA VIDA'],
		fourthElement: ['ALIMENTACIÓN', 'DEL POTRO'],
		fifthElement: ['BIENESTAR ANIMAL,', 'LA BUENA ALIMENTACIÓN'],
		rightText: 'MESA REDONDA CON EXPERTOS EN ALIMENTACIÓN Y SALUD EQUINA'
	},
	eventContactInfo: {
		title: 'INFORMES Y COORDINADORES',
		doctrsList: [
			{
				name: 'DRA. SILVIA ELENA BUNTINX DIOS',
				email: ''
			},
			{
				name: 'DR. SANTIAGO GARCÍA PASQUEL',
				email: 'santiago.garcia@uvmnet.edu'
			},
			{
				name: 'DR. MARIANO HERNÁNDEZ GIL',
				email: ''
			},
			{
				name: 'DR. EDUARDO MORONES',
				email: 'lalovaquero@yahoo.com.mx'
			},
			{
				name: 'DRA. AURORA HILDA RAMÍREZ PÉREZ',
				email: 'rpereza@unam.mx'
			},
			{
				name: 'DR. ELÍAS VELÁZQUEZ CANTÓN',
				email: 'evelazquez@gponutec.com'
			}
		]
	},
	eventContact: {
		title: 'CONTÁCTANOS',
		namePlaceholder: 'Nombre',
		emailPlaceholder: 'Correo',
		messagePlaceholder: 'Comentarios',
		submitText: 'ENVIAR',
		successMessage: '¡Solicitud enviada con éxito!'
	},
	title: 'NAEQUINA | NUTRICIÓN Y ALIMENTACIÓN EQUINA',
	speakers: [
		{
			id: 'alberto-casarin-valverde',
			name: 'ALBERTO CASARÍN VALVERDE',
			pre: 'DR',
			description: 'Director Científico de Grupo Nutec',
			flagUrl: '/img/BANDERA-MEXICO.png'
		},
		{
			id: 'wendy-pearson',
			name: 'WENDY PEARSON',
			pre: 'DRA',
			description: 'Universidad de Guelph',
			flagUrl: '/img/BANDERA-CANADA.png'
		},
		{
			id: 'kathleen-crandell',
			name: 'KATHLEEN CRANDELL',
			pre: 'DRA',
			description: 'Kentucky Equine Research, USA',
			flagUrl: '/img/BANDERA-EUA.png'
		},
		{
			id: 'adriana-yolanda-diaz-archundia',
			name: 'ADRIANA YOLANDA DÍAZ ARCHUNDIA',
			pre: 'DRA',
			description: 'UAEMEX',
			flagUrl: '/img/BANDERA-MEXICO.png'
		},
		{
			id: 'alfredo-julian-paredes',
			name: 'ALFREDO JULIÁN PAREDES',
			pre: 'DR',
			description: 'Consultor Indepediente en México',
			flagUrl: '/img/BANDERA-MEXICO.png'
		},
		{
			id: 'ana-cecilia-gomez-campos',
			name: 'ANA CECILIA GÓMEZ CAMPOS',
			pre: 'DRA',
			description: 'GRUPO NUTEC',
			flagUrl: '/img/BANDERA-MEXICO.png'
		},
		{
			id: 'bernardo-aguado-medina',
			name: 'BERNARDO AGUADO MEDINA',
			pre: 'MVZ',
			description: 'Agribrands Purina México',
			flagUrl: '/img/BANDERA-MEXICO.png'
		},
		{
			id: 'bernardo-monroy-hernandez',
			name: 'BERNARDO MONROY HERNÁNDEZ',
			pre: 'DR',
			description: 'Director Comercial Platinum Performance, México',
			flagUrl: '/img/BANDERA-MEXICO.png'
		},
		{
			id: 'chris-rogers',
			name: 'CHRIS ROGERS',
			pre: 'DR',
			description: 'Massey University',
			flagUrl: '/img/BANDERA-AUS.png'
		},
		{
			id: 'elias-velazquez-canton',
			name: 'ELÍAS VELÁZQUEZ CANTÓN',
			pre: 'DR',
			description: 'GRUPO NUTEC',
			flagUrl: '/img/BANDERA-MEXICO.png'
		},
		{
			id: 'gulsah-kaya-karasu',
			name: 'GULSAH KAYA KARASU',
			pre: 'DR',
			description: 'Van Hall Larenstein University of Applied Sciences',
			flagUrl: '/img/BANDERA-TURK.png'
		},
		{
			id: 'lucia-perez-manrique',
			name: 'LUCIA PÉREZ MANRIQUE',
			pre: 'DRA',
			description: 'FMVZ-UNAM',
			flagUrl: '/img/BANDERA-MEXICO.png'
		},
		{
			id: 'maria-esther-ortega-cerrilla',
			name: 'MARÍA ESTHER ORTEGA CERRILLA',
			pre: 'DRA',
			description: 'Colegio de Postgraduados',
			flagUrl: '/img/BANDERA-MEXICO.png'
		},
		{
			id: 'maria-masri-daba',
			name: 'MARÍA MASRI DABA',
			pre: 'DRA',
			description: 'FMVZ-UNAM',
			flagUrl: '/img/BANDERA-MEXICO.png'
		},
		{
			id: 'mariano-hernandez-gil',
			name: 'MARIANO HERNÁNDEZ GIL',
			pre: 'DR',
			description: 'FMVZ-UNAM',
			flagUrl: '/img/BANDERA-MEXICO.png'
		},
		{
			id: 'meriel-moore-colyer',
			name: 'MERIEL MOORE-COLYER',
			pre: 'DRA',
			description: 'Consultoral Independiente en el Reino Unido',
			flagUrl: '/img/BANDERA-UK.png'
		},
		{
			id: 'pamela-thomson-morales',
			name: 'PAMELA THOMSON MORALES',
			pre: 'DRA',
			description: 'Universidad Andrés Bello, Santiago de Chile',
			flagUrl: '/img/BANDERA-CHILE.png'
		},
		{
			id: 'peter-huntington',
			name: 'PETER HUNTINGTON',
			pre: 'DR',
			description: 'Kentucky Equine Research, Australia',
			flagUrl: '/img/BANDERA-AUS.png'
		},
		{
			id: 'ramiro-calderon-villa',
			name: 'RAMIRO CALDERÓN VILLA',
			pre: 'DR',
			description: 'FMVZ-UNAM',
			flagUrl: '/img/BANDERA-MEXICO.png'
		},
		{
			id: 'santiago-garcia-pasquel',
			name: 'SANTIAGO GARCÍA PASQUEL',
			pre: 'DR',
			description: 'Universidad del Valle de México',
			flagUrl: '/img/BANDERA-MEXICO.png'
		},
		{
			id: 'silvia-elena-buntinx-dios',
			name: 'SILVIA ELENA BUNTINX DIOS',
			pre: 'DRA',
			description: 'FMVZ UNAM',
			flagUrl: '/img/BANDERA-MEXICO.png'
		},
		{
			id: 'tamara-tadich-gallo',
			name: 'TAMARA TADICH GALLO',
			pre: 'DRA',
			description: 'Universidad Austral de Chile',
			flagUrl: '/img/BANDERA-CHILE.png'
		}
	],
	speakersText: {
		title: 'PONENTES'
	},
	programsText: 'PROGRAMA',
	conferenciaText: 'CONFERENCIA',
	programs: [
		{
			date: `<p><strong>JUEVES 25</strong> DE ABRIL</p>`,
			events: [
				{
					contents: `<p>PRESENTADOR: <strong>IA OSCAR MARTÍNEZ GUAJARDO</strong>
						<br>GRUPO NUTEC
						<br></p>
						${programsStyle}`, // * defines the style of ALL elements (do not remove)
					cols: 1,
					startHour: '08:50',
					endHour: '08:55',
					extraContent: ``
				},
				{
					contents: `<p>PALABRAS DEL <strong>DR. GONZALO VILLAR PATIÑO</strong>
							<br>DIRECTOR DE INVESTIGACIÓN, GRUPO NUTEC.</p>`,
					cols: 1,
					startHour: '08:55',
					endHour: '09:00',
					extraContent: ``
				},
				{
					contents: `<p>PALABRAS DEL <strong>ING. JÉRÉMIE LARCHER</strong>
						<br>CEO, GRUPO NUTEC.</p>`,
					cols: 1,
					startHour: '09:00',
					endHour: '09:10',
					extraContent: ``
				},
				{
					contents: `<p>PALABRAS DEL <strong>MVZ CERT ROBERTO SOLÍS JAQUEZ</strong>
						<br>PRESIDENTE DE LA ASOCIACIÓN MEXICANA DE MÉDICOS VETERINARIOS
						<br>ESPECIALISTAS EN EQUINOS A.C.</p>`,
					cols: 1,
					startHour: '09:10',
					endHour: '09:20',
					extraContent: ``
				},
				{
					contents: `<p>PALABRAS DE LA <strong>DRA. GABRIELA GIOCONDA REZA BORJA</strong>
						<br>RECTORA DE LA UNIVERSIDAD DEL VALLE DE MÉXICO, CAMPUS SUR, CDMX.</p>`,
					cols: 1,
					startHour: '09:20',
					endHour: '09:30',
					extraContent: ``
				},
				{
					contents: `<p>PALABRAS DEL <strong>DR. CARLOS GUILLERMO GUTIÉRREZ AGUILAR</strong>
						<br>DIRECTOR DE LA FACULTAD DE MEDICINA VETERINARIA Y ZOOTECNIA
						<br><strong>INAUGURACIÓN</strong>
						<br>
						<br><strong>SESIÓN 1: APARATO DIGESTIVO: EVOLUCIÓN, MICROBIOMA Y DESÓRDENES DIGESTIVOS</strong>
						<br>
						<br><p>MODERADORA: <strong>DRA. MARÍA MASRI DABA</strong>
						<br>DEPARTAMENTO DE MEDICINA, CIRUGÍA Y ZOOTECNIA PARA
						<br>ÉQUIDOS, FMVZ-UNAM</p>`,
					cols: 1,
					startHour: '09:45',
					endHour: '10:30',
					extraContent: ``
				},
				{
					contents: `<p><strong>DR. MARIANO HERNÁNDEZ GIL</strong>
						<br>DEPTO. MEDICINA CIRUGÍA Y ZOOTECNIA DE
						<br>ÉQUIDOS. FMVZ-UNAM</p>`,
					cols: 2,
					extraContent: '<p>NUTRICIÓN EVOLUTIVA DEL CABALLO</p>',
					startHour: '10:30',
					endHour: '11:15'
				},
				{
					contents: `<p><strong>DRA. WENDY PEARSON</strong>
						<br>DEPTO. BIOCIENCIA ANIMAL. UNIVERSIDAD
						<br>
						<br>DE GUELPH. ONTARIO CANADÁ</p>`,
					cols: 2,
					extraContent: `<p>INFLUENCIA DE LA NUTRICIÓN EN EL SÍNDROME DEL INTESTINO PERMEABLE</p>`,
					startHour: '11:15',
					endHour: '11:25'
				},
				{
					contents: `<p><strong>RECESO</strong></p>`,
					cols: 1,
					startHour: '11:25',
					endHour: '12:10'
				},
				{
					contents: `<p><strong>DRA. PAMELA THOMSON</strong>
						<br>LABORATORIO DE MICROBIOLOGÍA CLÍNICA Y
						<br>MICROBIOMA, ESCUELA DE MEDICINA
						<br>VETERINARIA, FACULTAD DE CIENCIAS DE LA VIDA,
						<br>UNIVERSIDAD ANDRÉS BELLO, SANTIAGO, CHILE</p>`,
					cols: 2,
					extraContent: `<p>CAMBIOS EN EL MICROBIOMA: ¿CAUSA O CONSECUENCIA DE LOS CÓLICOS?</p>`,
					startHour: '12:10',
					endHour: '12:55'
				},
				{
					contents: `<p><strong>DRA. GULSAH KAYA KARASU</strong>
						<br>UNIVERSIDAD DE CIENCIAS APLICADAS VAN
						<br>HALL LARENSTEIN. VELP, PAÍSES BAJOS</p>`,
					cols: 2,
					extraContent: `<p>TRANSICIONES DIETÉTICAS HACIA UNA ALIMENTACIÓN SOSTENIBLE PARA CABALLOS</p>`,
					startHour: '12:55',
					endHour: '13:15'
				},
				{
					contents: `<p><strong>PREGUNTAS Y RESPUESTAS</strong>
						<br>
						<br>SESIÓN 2: ALIMENTOS Y NECESIDADES DE NUTRIENTES
						<br>
						<br>MODERADORA: <strong>DRA. MYRIAM BOETA ACOSTA</strong>
						<br>DEPARTAMENTO DE REPRODUCCIÓN. FMVZ-UNAM</p>`,
					cols: 1,
					extraContent: '',
					startHour: '13:15',
					endHour: '14:00'
				},
				{
					contents: `<p><strong>DRA. MERIEL JEAN MOORE-COLYER</strong>
						<br>CONSULTORA INDEPENDIENTE. REINO UNIDO</p>`,
					cols: 2,
					extraContent: `<p>FORRAJE: DEL HENOBIOMA A LA SALUD DEL CABALLO</p>`,
					startHour: '14:00',
					endHour: '14:45'
				},
				{
					contents: `<p><strong>DR. ELÍAS VELÁZQUEZ CANTÓN</strong>
						<br>GRUPO NUTEC</p>`,
					cols: 2,
					extraContent: `<p>EL AGUA ES UN NUTRIENTE ESENCIAL</p>`,
					startHour: '14:45',
					endHour: '15:05'
				},
				{
					contents: `<p><strong>PREGUNTAS Y RESPUESTAS</strong></p>`,
					cols: 1,
					extraContent: ``,
					startHour: '15:05',
					endHour: '16:00'
				},
				{
					contents: `<p><strong>PREGUNTAS Y RESPUESTAS
						<br>
						<br>SESIÓN 3: ALIMENTACIÓN PARA LA VIDA: LA YEGUA Y SU POTRO</strong>
						<br>
						<br>MODERADORA: <strong>DRA. ANA CELIA GÓMEZ CAMPOS</strong>
						<br>GRUPO NUTEC</p>`,
					cols: 1,
					extraContent: '',
					startHour: '16:00',
					endHour: '16:50'
				},
				{
					contents: `<p><strong>DR. RAMIRO CALDERÓN VILLA</strong>
						<br>DEPTO. MEDICINA CIRUGÍA Y ZOOTECNIA
						<br>DE ÉQUIDOS. FMVZ-UNAM</p>`,
					cols: 2,
					extraContent: `<p>ALIMENTACIÓN Y DESÓRDENES DIGESTIVOS</p>`,
					startHour: '16:50',
					endHour: '17:40'
				},
				{
					contents: `<p><strong>DR PETER HUNTINGTON</strong>
						<br>KENTUCKY EQUINE RESEARCH, AUSTRALIA</p>`,
					cols: 2,
					extraContent: `<p>LA ALIMENTACIÓN DE LA YEGUA GESTANTE Y LACTANTE</p>`,
					startHour: '17:40',
					endHour: '18:00'
				}
			]
		},
		{
			date: ['VIERNES 26', 'DE ABRIL'],
			events: [
				{
					contents: `<p><strong>PREGUNTAS Y RESPUESTAS</strong>
						<br>
						<br><strong>SESIÓN 4: ALIMENTACIÓN DEL POTRO</strong>
						<br>
						<br>MODERADORA: <strong>DRA. GABRIELA QUIJANO MONTOYA</strong>
						<br>REPRODUCCIÓN EQUINA VILLARAÑA</p>`,
					cols: 1,
					startHour: '08:15',
					endHour: '09:00',
					extraContent: ``
				},
				{
					contents: `<p><strong>DR. CHRIS ROGERS</strong>
							<br>ESCUELA DE VETERINARIA, UNIVERSIDAD
							<br>DE MASSEY, NUEVA ZELANDA</p>`,
					cols: 2,
					startHour: '09:00',
					endHour: '09:45',
					extraContent: `<p>RESILIENCIA DE LA MICROBIOTA FECAL EN CABALLOS PURA SANGRE ESTABULADOS DESPUÉS DE UNA TRANSICIÓN ALIMENTARIA ABRUPTA DE PASTOS RECIÉN CORTADOS A TRES DIETAS A BASE DE FORRAJES</p>`
				},
				{
					contents: `<p><strong>DR. SANTIAGO GARCÍA PASQUEL</strong></p>`,
					cols: 2,
					startHour: '09:45',
					endHour: '10:30',
					extraContent: `<p>MADURACIÓN DEL SISTEMA DIGESTIVO DEL NEONATO</p>`
				},
				{
					contents: `<p><strong>DRA. ADRIANA YOLANDA DÍAZ ARCHUNDIA</strong>
						<br>FACULTAD DE MEDICINA VETERINARIA Y
						<br>ZOOTECNIA, UAEMEX</p>`,
					cols: 2,
					startHour: '10:30',
					endHour: '11:15',
					extraContent: `PROBLEMAS NUTRICIONALES EN LOS POTROS DESTETADOS Y HASTA EL AÑO DE EDAD`
				},
				{
					contents: `<p><strong>DRA. KATHLEEN CRANDELL</strong>
						<br>KENTUCKY EQUINE RESEARCH, E.U.</p>`,
					cols: 2,
					startHour: '11:15',
					endHour: '11:35',
					extraContent: `NECESIDADES NUTRIMENTALES Y PRÁCTICAS DE ALIMENTACIÓN PARA UN DESTETE Y CRECIMIENTO EXITOSOS`
				},
				{
					contents: `<p><strong>PREGUNTAS Y RESPUESTAS</strong></p>`,
					cols: 1,
					startHour: '11:35',
					endHour: '11:45',
					extraContent: ``
				},
				{
					contents: `<p><strong>RECESO</strong>
						<br>
						<br><strong>SESIÓN 5: BIENESTAR ANIMAL, LA BUENA ALIMENTACIÓN</strong>
						<br>
						<br>MODERADORA: <strong>DRA. MARÍA FERNANDA VÁZQUEZ CARRILLO</strong>
						<br>DEPARTAMENTO DE NUTRICIÓN ANIMAL Y BIOQUÍMICA. FMVZ- UNAM</p>`,
					cols: 2,
					extraContent: '<p>NUTRICIÓN EVOLUTIVA DEL CABALLO</p>',
					startHour: '11:45',
					endHour: '12:30'
				},
				{
					contents: `<p><strong>DRA. TAMARA TADICH</strong>
						<br>INSTITUTO DE CIENCIA ANIMAL.
						<br>UNIVERSIDAD AUSTRAL DE CHILE.</p>`,
					cols: 2,
					extraContent: `<p>CÓMO VALORAR EL BIENESTAR EN LOS CABALLOS, CONFINAMIENTO VS PASTOREO</p>`,
					startHour: '12:30',
					endHour: '13:15'
				},
				{
					contents: `<p><strong>DRA. LUCÍA PÉREZ MANRIQUE</strong>
						<br>DEPTO. ETOLOGÍA, FAUNA SILVESTRE Y
						<br>ANIMALES DE LABORATORIO</p>`,
					cols: 2,
					extraContent: `<p>EFECTO DE LA ALIMENTACIÓN EN EL BIENESTAR DEL CABALLO</p>`,
					startHour: '13:15',
					endHour: '14:00'
				},
				{
					contents: `<p><strong>DRA. MARÍA ESTHER ORTEGA CERRILLA</strong>
						<br>COLEGIO DE POSTGRADUADOS,
						<br>MONTECILLO MÉXICO</p>`,
					cols: 2,
					extraContent: `<p>USO DE ACEITES ESENCIALES EN CABALLOS</p>`,
					startHour: '14:00',
					endHour: '14:20'
				},
				{
					contents: `<p><strong>PREGUNTAS Y RESPUESTAS</strong></p>`,
					cols: 1,
					extraContent: ``,
					startHour: '14:20',
					endHour: '15:30'
				},
				{
					contents: `<p><strong>RECESO</strong>
						<br>
						<br>SESIÓN 6: A SIETE AÑOS DEL NAEQUINA
						<br>
						<br>MODERADORA: <strong>DRA. AURORA H. RAMÍREZ PÉREZ</strong>
						<br>DEPARTAMENTO DE NUTRICIÓN ANIMAL Y BIOQUÍMICA. FMVZ- UNAM.</p>`,
					cols: 1,
					extraContent: '',
					startHour: '15:30',
					endHour: '16:15'
				},
				{
					contents: `<p><strong>DRA. SILVIA E. BUNTINX DIOS</strong>
						<br>DEPARTAMENTO DE NUTRICIÓN ANIMAL
						<br>Y BIOQUÍMICA. FMVZ- UNAM</p>`,
					cols: 2,
					extraContent: `<p>RELACIÓN EQUINO – ALIMENTO</p>`,
					startHour: '16:15',
					endHour: '16:20'
				},
				{
					contents: `<p><strong>PREGUNTAS Y RESPUESTAS</strong></p>`,
					cols: 1,
					extraContent: ``,
					startHour: '16:15',
					endHour: '16:20'
				},
				{
					contents: `<p>MESA REDONDA: SIETE AÑOS DE NAEQUINA.
						<br>
						<br>CONDUCE DRA. SILVIA E. BUNTINX DIOS. FMVZ-UNAM</strong>
						<br><strong>DRA. MARIA MASRI DABA</strong>
						<br>DEPTO. MEDICINA, CIRUGÍA Y ZOOTECNIA PARA ÉQUIDOS. FMVZ, UNAM
						<br><strong>DR. BERNARDO AGUADO MEDINA</strong>
						<br>AGRIBRANDS PURINA MÉXICO
						<br><strong>DRA. ANA CELIA GÓMEZ CAMPOS</strong>
						<br>GRUPO NUTEC
						<br><strong>DR. BERNARDO MONROY HERNÁNDEZ</strong>
						<br>PLATINUM MÉXICO
						<br><strong>DR. ALFREDO JULIÁN PAREDES</strong>
						<br>PRÁCTICA PRIVADA
						<br>
						<br><strong>CLAUSURA</strong></p>`,
					cols: 1,
					extraContent: '',
					startHour: '16:20',
					endHour: '17:30'
				}
			]
		}
	],
	programsStyle: `<style>strong {
		font-family: 'Montserrat Bold' !important;
	}</style>`
};

export const en = {
	lang: 'en',
	switchText: 'Cambiar a Español',
	flagUrl: '/img/BANDERA-MEXICO.png',
	header: {
		contactButton: 'CONTACT'
	},
	jumbotron: {
		eventDescription: ['THE MOST IMPORTANT', 'EQUINE ANIMAL NUTRITION', 'EVENT IN LATIN AMERICA'],
		mainTitle: {
			first: 'SEVEN YEARS OF',
			second: 'NAEQUINA,',
			third: 'A RETROSPECTIVE',
			fourth: 'LOOK'
		}
	},
	eventAnnouncement: {
		leftConferenceText: {
			conferenceNumber: '7TH.',
			firstText: 'INTERNATIONAL',
			secondText: 'CONFERENCE SERIES'
		},
		rightConferenceText: {
			firstText: 'FREE VIRTUAL',
			secondText: 'EVENT',
			thirdText: 'WITH CURRICULAR VALUE'
		}
	},
	eventDates: {
		leftEvent: {
			sep: 'AND',
			month: 'APR',
			from: 'FROM',
			to: 'TO'
		},
		rightEvent: {
			title: 'REGISTRATION STARTS ON',
			date: 'MARCH 18',
			hour: '12:00 A.M.',
			from: 'AT'
		}
	},
	eventContent: {
		title: 'THEME CONTENT',
		firstElement: ['DIGESTIVE SYSTEM', 'EVOLUTION, MICROBIOME, AND DIGESTIVE DISORDERS'],
		secondElement: ['FOODS', 'AND NUTRIENT', 'REQUIREMENTS'],
		thirdElement: ['NOURISHMENT', 'FOR LIFE'],
		fourthElement: ['DIET', 'OF THE FOAL'],
		fifthElement: ['ANIMAL WELFARE,', 'GOOD NUTRITION'],
		rightText: 'ROUND TABLE WITH EXPERTS IN EQUINE NUTRITION AND HEALTH'
	},
	eventContactInfo: {
		title: 'INQUIRIES AND COORDINATORS',
		doctrsList: [
			{
				name: 'DR. SILVIA ELENA BUNTINX DIOS',
				email: ''
			},
			{
				name: 'DR. SANTIAGO GARCÍA PASQUEL',
				email: 'santiago.garcia@uvmnet.edu'
			},
			{
				name: 'DR. MARIANO HERNÁNDEZ GIL',
				email: ''
			},
			{
				name: 'DR. EDUARDO MORONES',
				email: 'lalovaquero@yahoo.com.mx'
			},
			{
				name: 'DR. AURORA HILDA RAMÍREZ PÉREZ',
				email: 'rpereza@unam.mx'
			},
			{
				name: 'DR. ELÍAS VELÁZQUEZ CANTÓN',
				email: 'evelazquez@gponutec.com'
			}
		]
	},
	eventContact: {
		title: 'CONTACT US',
		namePlaceholder: 'Name',
		emailPlaceholder: 'Email',
		messagePlaceholder: 'Message',
		submitText: 'SEND',
		successMessage: 'Request successfully sent!'
	},
	title: 'NAEQUINA | EQUINE ANIMAL NUTRITION AND FEEDING',
	speakers: [
		{
			id: 'alberto-casarin-valverde',
			name: 'ALBERTO CASARÍN VALVERDE',
			pre: 'DR',
			description: 'Director Científico de Grupo Nutec',
			flagUrl: '/img/BANDERA-MEXICO.png'
		},
		{
			id: 'wendy-pearson',
			name: 'WENDY PEARSON',
			pre: 'DRA',
			description: 'Universidad de Guelph',
			flagUrl: '/img/BANDERA-CANADA.png'
		},
		{
			id: 'kathleen-crandell',
			name: 'KATHLEEN CRANDELL',
			pre: 'DRA',
			description: 'Kentucky Equine Research, USA',
			flagUrl: '/img/BANDERA-EUA.png'
		},
		{
			id: 'adriana-yolanda-diaz-archundia',
			name: 'ADRIANA YOLANDA DÍAZ ARCHUNDIA',
			pre: 'DRA',
			description: 'UAEMEX',
			flagUrl: '/img/BANDERA-MEXICO.png'
		},
		{
			id: 'alfredo-julian-paredes',
			name: 'ALFREDO JULIÁN PAREDES',
			pre: 'DR',
			description: 'Consultor Indepediente en México',
			flagUrl: '/img/BANDERA-MEXICO.png'
		},
		{
			id: 'ana-cecilia-gomez-campos',
			name: 'ANA CECILIA GÓMEZ CAMPOS',
			pre: 'DRA',
			description: 'GRUPO NUTEC',
			flagUrl: '/img/BANDERA-MEXICO.png'
		},
		{
			id: 'bernardo-aguado-medina',
			name: 'BERNARDO AGUADO MEDINA',
			pre: 'MVZ',
			description: 'Agribrands Purina México',
			flagUrl: '/img/BANDERA-MEXICO.png'
		},
		{
			id: 'bernardo-monroy-hernandez',
			name: 'BERNARDO MONROY HERNÁNDEZ',
			pre: 'DR',
			description: 'Director Comercial Platinum Performance, México',
			flagUrl: '/img/BANDERA-MEXICO.png'
		},
		{
			id: 'chris-rogers',
			name: 'CHRIS ROGERS',
			pre: 'DR',
			description: 'Massey University',
			flagUrl: '/img/BANDERA-AUS.png'
		},
		{
			id: 'elias-velazquez-canton',
			name: 'ELÍAS VELÁZQUEZ CANTÓN',
			pre: 'DR',
			description: 'GRUPO NUTEC',
			flagUrl: '/img/BANDERA-MEXICO.png'
		},
		{
			id: 'gulsah-kaya-karasu',
			name: 'GULSAH KAYA KARASU',
			pre: 'DR',
			description: 'Van Hall Larenstein University of Applied Sciences',
			flagUrl: '/img/BANDERA-TURK.png'
		},
		{
			id: 'lucia-perez-manrique',
			name: 'LUCIA PÉREZ MANRIQUE',
			pre: 'DRA',
			description: 'FMVZ-UNAM',
			flagUrl: '/img/BANDERA-MEXICO.png'
		},
		{
			id: 'maria-esther-ortega-cerrilla',
			name: 'MARÍA ESTHER ORTEGA CERRILLA',
			pre: 'DRA',
			description: 'Colegio de Postgraduados',
			flagUrl: '/img/BANDERA-MEXICO.png'
		},
		{
			id: 'maria-masri-daba',
			name: 'MARÍA MASRI DABA',
			pre: 'DRA',
			description: 'FMVZ-UNAM',
			flagUrl: '/img/BANDERA-MEXICO.png'
		},
		{
			id: 'mariano-hernandez-gil',
			name: 'MARIANO HERNÁNDEZ GIL',
			pre: 'DR',
			description: 'FMVZ-UNAM',
			flagUrl: '/img/BANDERA-MEXICO.png'
		},
		{
			id: 'meriel-moore-colyer',
			name: 'MERIEL MOORE-COLYER',
			pre: 'DRA',
			description: 'Consultoral Independiente en el Reino Unido',
			flagUrl: '/img/BANDERA-UK.png'
		},
		{
			id: 'pamela-thomson-morales',
			name: 'PAMELA THOMSON MORALES',
			pre: 'DRA',
			description: 'Universidad Andrés Bello, Santiago de Chile',
			flagUrl: '/img/BANDERA-CHILE.png'
		},
		{
			id: 'peter-huntington',
			name: 'PETER HUNTINGTON',
			pre: 'DR',
			description: 'Kentucky Equine Research, Australia',
			flagUrl: '/img/BANDERA-AUS.png'
		},
		{
			id: 'ramiro-calderon-villa',
			name: 'RAMIRO CALDERÓN VILLA',
			pre: 'DR',
			description: 'FMVZ-UNAM',
			flagUrl: '/img/BANDERA-MEXICO.png'
		},
		{
			id: 'santiago-garcia-pasquel',
			name: 'SANTIAGO GARCÍA PASQUEL',
			pre: 'DR',
			description: 'Universidad del Valle de México',
			flagUrl: '/img/BANDERA-MEXICO.png'
		},
		{
			id: 'silvia-elena-buntinx-dios',
			name: 'SILVIA ELENA BUNTINX DIOS',
			pre: 'DRA',
			description: 'FMVZ UNAM',
			flagUrl: '/img/BANDERA-MEXICO.png'
		},
		{
			id: 'tamara-tadich-gallo',
			name: 'TAMARA TADICH GALLO',
			pre: 'DRA',
			description: 'Universidad Austral de Chile',
			flagUrl: '/img/BANDERA-CHILE.png'
		}
	],
	speakersText: {
		title: 'SPEAKERS'
	},
	programsText: 'PROGRAM',
	conferenciaText: 'CONFERENCIA',
	programs: [
		{
			date: `<p>Thursday<strong>, April 25<sup>th<sup></strong></p>`,
			events: [
				{
					contents: `<p>PRESENTER: <strong>IA OSCAR MARTÍNEZ GUAJARDO</strong>
						<br>GRUPO NUTEC
						<br></p>
						${programsStyle}`,
					cols: 1,
					startHour: '08:50',
					endHour: '08:55',
					extraContent: ``
				},
				{
					contents: `<p>REMARKS BY <strong>DR. GONZALO VILLAR PATIÑO</strong>
							<br>DIRECTOR OF RESEARCH, GRUPO NUTEC</p>`,
					cols: 1,
					startHour: '08:55',
					endHour: '09:00',
					extraContent: ``
				},
				{
					contents: `<p>REMARKS BY <strong>ING. JÉRÉMIE LARCHER</strong>
						<br>CEO, GRUPO NUTEC.</p>`,
					cols: 1,
					startHour: '09:00',
					endHour: '09:10',
					extraContent: ``
				},
				{
					contents: `<p>REMARKS BY <strong>MVZ CERT ROBERTO SOLÍS JAQUEZ</strong>
						<br>PRESIDENT OF ASOCIACIÓN MEXICANA DE MEDICOS VETERINARIOS
						<br>ESPECIALISTAS EN EQUINOS A.C.</p>`,
					cols: 1,
					startHour: '09:10',
					endHour: '09:20',
					extraContent: ``
				},
				{
					contents: `<p>PALABRAS DE LA <strong>DR. GABRIELA GIOCONDA REZA BORJA</strong>
						<br>RECTOR OF UNIVERSIDAD DEL VALLE DE MÉXICO, SOUTH CAMPUS, CDMX.</p>`,
					cols: 1,
					startHour: '09:20',
					endHour: '09:30',
					extraContent: ``
				},
				{
					contents: `<p>REMARKS BY <strong>DR. CARLOS GUILLERMO GUTIÉRREZ AGUILAR</strong>
						<br>DIRECTOR OF FACULTAD DE MEDICINA VETERINARIA Y ZOOTECNIA
						<br><strong>INAUGURATION</strong>
						<br>
						<br><strong>SESSION 1: DIGESTIVE SYSTEM: EVOLUTION, MICROBIOME AND DIGESTIVE DISORDERS</strong>
						<br>
						<br><p>MODERATOR: <strong>DR. MARÍA MASRI DABA</strong>
						<br>MEDICINE, SURGERY, AND ANIMAL HUSBANDRY FOR EQUINES DEPT. FMVZ-UNAM</p>`,
					cols: 1,
					startHour: '09:45',
					endHour: '10:30',
					extraContent: ``
				},
				{
					contents: `<p><strong>DR. MARIANO HERNÁNDEZ GIL</strong>
						<br>EQUINE MEDICINE, SURGERY AND ANIMAL
						<br>HUSBANDRY DEPT.</p>`,
					cols: 2,
					extraContent: '<p>EVOLUTIONARY HORSE NUTRITION</p>',
					startHour: '10:30',
					endHour: '11:15'
				},
				{
					contents: `<p><strong>DR. WENDY PEARSON</strong>
						<br>ANIMAL BIOSCIENCE UNIVERSITY OF
						<br>
						<br>GUELPH DEPT. ONTARIO</p>`,
					cols: 2,
					extraContent: `<p>INFLUENCE OF NUTRITION IN LEAKY GUT SYNDROME</p>`,
					startHour: '11:15',
					endHour: '11:25'
				},
				{
					contents: `<p><strong>RECESO</strong></p>`,
					cols: 1,
					startHour: '11:25',
					endHour: '12:10'
				},
				{
					contents: `<p><strong>DR. PAMELA THOMSON</strong>
						<br>LABORATORIO DE MICROBIOLOGÍA CLÍNICA Y
						<br>MICROBIOMA, ESCUELA DE MEDICINA
						<br>VETERINARIA, FACULTAD DE CIENCIAS DE LA VIDA,
						<br>UNIVERSIDAD ANDRÉS BELLO, SANTIAGO, CHILE</p>`,
					cols: 2,
					extraContent: `<p>CAMBIOS EN EL MICROBIOMA: ¿CAUSA O CONSECUENCIA DE LOS CÓLICOS?</p>`,
					startHour: '12:10',
					endHour: '12:55'
				},
				{
					contents: `<p><strong>DR. GULSAH KAYA KARASU</strong>
						<br>UNIVERSIDAD DE CIENCIAS APLICADAS VAN
						<br>HALL LARENSTEIN. VELP, PAÍSES BAJOS</p>`,
					cols: 2,
					extraContent: `<p>TRANSICIONES DIETÉTICAS HACIA UNA ALIMENTACIÓN SOSTENIBLE PARA CABALLOS</p>`,
					startHour: '12:55',
					endHour: '13:15'
				},
				{
					contents: `<p><strong>PREGUNTAS Y RESPUESTAS</strong>
						<br>
						<br>SESIÓN 2: ALIMENTOS Y NECESIDADES DE NUTRIENTES
						<br>
						<br>MODERATOR: <strong>DR. MYRIAM BOETA ACOSTA</strong>
						<br>DEPARTAMENTO DE REPRODUCCIÓN. FMVZ-UNAM</p>`,
					cols: 1,
					extraContent: '',
					startHour: '13:15',
					endHour: '14:00'
				},
				{
					contents: `<p><strong>DR. MERIEL JEAN MOORE-COLYER</strong>
						<br>CONSULTORA INDEPENDIENTE. REINO UNIDO</p>`,
					cols: 2,
					extraContent: `<p>FORRAJE: DEL HENOBIOMA A LA SALUD DEL CABALLO</p>`,
					startHour: '14:00',
					endHour: '14:45'
				},
				{
					contents: `<p><strong>DR. ELÍAS VELÁZQUEZ CANTÓN</strong>
						<br>GRUPO NUTEC</p>`,
					cols: 2,
					extraContent: `<p>EL AGUA ES UN NUTRIENTE ESENCIAL</p>`,
					startHour: '14:45',
					endHour: '15:05'
				},
				{
					contents: `<p><strong>PREGUNTAS Y RESPUESTAS</strong></p>`,
					cols: 1,
					extraContent: ``,
					startHour: '15:05',
					endHour: '16:00'
				},
				{
					contents: `<p><strong>PREGUNTAS Y RESPUESTAS
						<br>
						<br>SESIÓN 3: ALIMENTACIÓN PARA LA VIDA: LA YEGUA Y SU POTRO</strong>
						<br>
						<br>MODERATOR: <strong>DR. ANA CELIA GÓMEZ CAMPOS</strong>
						<br>GRUPO NUTEC</p>`,
					cols: 1,
					extraContent: '',
					startHour: '16:00',
					endHour: '16:50'
				},
				{
					contents: `<p><strong>DR. RAMIRO CALDERÓN VILLA</strong>
						<br>DEPTO. MEDICINA CIRUGÍA Y ZOOTECNIA
						<br>DE ÉQUIDOS. FMVZ-UNAM</p>`,
					cols: 2,
					extraContent: `<p>ALIMENTACIÓN Y DESÓRDENES DIGESTIVOS</p>`,
					startHour: '16:50',
					endHour: '17:40'
				},
				{
					contents: `<p><strong>DR PETER HUNTINGTON</strong>
						<br>KENTUCKY EQUINE RESEARCH, AUSTRALIA</p>`,
					cols: 2,
					extraContent: `<p>LA ALIMENTACIÓN DE LA YEGUA GESTANTE Y LACTANTE</p>`,
					startHour: '17:40',
					endHour: '18:00'
				}
			]
		},
		{
			date: ['VIERNES 26', 'DE ABRIL'],
			events: [
				{
					contents: `<p><strong>PREGUNTAS Y RESPUESTAS</strong>
						<br>
						<br><strong>SESIÓN 4: ALIMENTACIÓN DEL POTRO</strong>
						<br>
						<br>MODERATOR: <strong>DR. GABRIELA QUIJANO MONTOYA</strong>
						<br>REPRODUCCIÓN EQUINA VILLARAÑA</p>`,
					cols: 1,
					startHour: '08:15',
					endHour: '09:00',
					extraContent: ``
				},
				{
					contents: `<p><strong>DR. CHRIS ROGERS</strong>
							<br>ESCUELA DE VETERINARIA, UNIVERSIDAD
							<br>DE MASSEY, NUEVA ZELANDA</p>`,
					cols: 2,
					startHour: '09:00',
					endHour: '09:45',
					extraContent: `<p>RESILIENCIA DE LA MICROBIOTA FECAL EN CABALLOS PURA SANGRE ESTABULADOS DESPUÉS DE UNA TRANSICIÓN ALIMENTARIA ABRUPTA DE PASTOS RECIÉN CORTADOS A TRES DIETAS A BASE DE FORRAJES</p>`
				},
				{
					contents: `<p><strong>DR. SANTIAGO GARCÍA PASQUEL</strong></p>`,
					cols: 2,
					startHour: '09:45',
					endHour: '10:30',
					extraContent: `<p>MADURACIÓN DEL SISTEMA DIGESTIVO DEL NEONATO</p>`
				},
				{
					contents: `<p><strong>DR. ADRIANA YOLANDA DÍAZ ARCHUNDIA</strong>
						<br>FACULTAD DE MEDICINA VETERINARIA Y
						<br>ZOOTECNIA, UAEMEX</p>`,
					cols: 2,
					startHour: '10:30',
					endHour: '11:15',
					extraContent: `PROBLEMAS NUTRICIONALES EN LOS POTROS DESTETADOS Y HASTA EL AÑO DE EDAD`
				},
				{
					contents: `<p><strong>DR. KATHLEEN CRANDELL</strong>
						<br>KENTUCKY EQUINE RESEARCH, E.U.</p>`,
					cols: 2,
					startHour: '11:15',
					endHour: '11:35',
					extraContent: `NECESIDADES NUTRIMENTALES Y PRÁCTICAS DE ALIMENTACIÓN PARA UN DESTETE Y CRECIMIENTO EXITOSOS`
				},
				{
					contents: `<p><strong>PREGUNTAS Y RESPUESTAS</strong></p>`,
					cols: 1,
					startHour: '11:35',
					endHour: '11:45',
					extraContent: ``
				},
				{
					contents: `<p><strong>RECESO</strong>
						<br>
						<br><strong>SESIÓN 5: BIENESTAR ANIMAL, LA BUENA ALIMENTACIÓN</strong>
						<br>
						<br>MODERATOR: <strong>DR. MARÍA FERNANDA VÁZQUEZ CARRILLO</strong>
						<br>DEPARTAMENTO DE NUTRICIÓN ANIMAL Y BIOQUÍMICA. FMVZ- UNAM</p>`,
					cols: 2,
					extraContent: '<p>NUTRICIÓN EVOLUTIVA DEL CABALLO</p>',
					startHour: '11:45',
					endHour: '12:30'
				},
				{
					contents: `<p><strong>DR. TAMARA TADICH</strong>
						<br>INSTITUTO DE CIENCIA ANIMAL.
						<br>UNIVERSIDAD AUSTRAL DE CHILE.</p>`,
					cols: 2,
					extraContent: `<p>CÓMO VALORAR EL BIENESTAR EN LOS CABALLOS, CONFINAMIENTO VS PASTOREO</p>`,
					startHour: '12:30',
					endHour: '13:15'
				},
				{
					contents: `<p><strong>DR. LUCÍA PÉREZ MANRIQUE</strong>
						<br>DEPTO. ETOLOGÍA, FAUNA SILVESTRE Y
						<br>ANIMALES DE LABORATORIO</p>`,
					cols: 2,
					extraContent: `<p>EFECTO DE LA ALIMENTACIÓN EN EL BIENESTAR DEL CABALLO</p>`,
					startHour: '13:15',
					endHour: '14:00'
				},
				{
					contents: `<p><strong>DR. MARÍA ESTHER ORTEGA CERRILLA</strong>
						<br>COLEGIO DE POSTGRADUADOS,
						<br>MONTECILLO MÉXICO</p>`,
					cols: 2,
					extraContent: `<p>USO DE ACEITES ESENCIALES EN CABALLOS</p>`,
					startHour: '14:00',
					endHour: '14:20'
				},
				{
					contents: `<p><strong>PREGUNTAS Y RESPUESTAS</strong></p>`,
					cols: 1,
					extraContent: ``,
					startHour: '14:20',
					endHour: '15:30'
				},
				{
					contents: `<p><strong>RECESO</strong>
						<br>
						<br>SESIÓN 6: A SIETE AÑOS DEL NAEQUINA
						<br>
						<br>MODERATOR: <strong>DR. AURORA H. RAMÍREZ PÉREZ</strong>
						<br>DEPARTAMENTO DE NUTRICIÓN ANIMAL Y BIOQUÍMICA. FMVZ- UNAM.</p>`,
					cols: 1,
					extraContent: '',
					startHour: '15:30',
					endHour: '16:15'
				},
				{
					contents: `<p><strong>DR. SILVIA E. BUNTINX DIOS</strong>
						<br>DEPARTAMENTO DE NUTRICIÓN ANIMAL
						<br>Y BIOQUÍMICA. FMVZ- UNAM</p>`,
					cols: 2,
					extraContent: `<p>RELACIÓN EQUINO – ALIMENTO</p>`,
					startHour: '16:15',
					endHour: '16:20'
				},
				{
					contents: `<p><strong>PREGUNTAS Y RESPUESTAS</strong></p>`,
					cols: 1,
					extraContent: ``,
					startHour: '16:15',
					endHour: '16:20'
				},
				{
					contents: `<p>MESA REDONDA: SIETE AÑOS DE NAEQUINA.
						<br>
						<br>CONDUCE DR. SILVIA E. BUNTINX DIOS. FMVZ-UNAM</strong>
						<br><strong>DR. MARIA MASRI DABA</strong>
						<br>DEPTO. MEDICINA, CIRUGÍA Y ZOOTECNIA PARA ÉQUIDOS. FMVZ, UNAM
						<br><strong>DR. BERNARDO AGUADO MEDINA</strong>
						<br>AGRIBRANDS PURINA MÉXICO
						<br><strong>DR. ANA CELIA GÓMEZ CAMPOS</strong>
						<br>GRUPO NUTEC
						<br><strong>DR. BERNARDO MONROY HERNÁNDEZ</strong>
						<br>PLATINUM MÉXICO
						<br><strong>DR. ALFREDO JULIÁN PAREDES</strong>
						<br>PRÁCTICA PRIVADA
						<br>
						<br><strong>CLAUSURA</strong></p>`,
					cols: 1,
					extraContent: '',
					startHour: '16:20',
					endHour: '17:30'
				}
			]
		}
	],
	programsStyle: `<style>strong {
		font-family: 'Montserrat Bold' !important;
	}</style>`
};
