const programsStyle = `<style>strong {
	font-family: 'Montserrat Bold' !important;
}</style>`;

const cvStyle = `
	<style lang="postcss">
		ul {
			list-style: square;
		}

		a {
			color: rgb(255 34 34);
			&:hover {
			color: white;

			}
		}

		p {
			padding-top: 1rem;
			padding-bottom: 1rem;
		}

		strong {
			font-family: "Montserrat Bold"!important;
		}
	</style>
`;

export const es = {
	speakersPath: '/ponentes',
	index: '/',
	cvText: 'VER CV',
	availableTicketsText: 'lugares disponibles',
	eventBriteBtnText: 'REGISTROS FINALIZADOS',
	eventLinkText: 'DA CLIC PARA CONECTARTE AL EVENTO',
	lang: 'es',
	flagUrl: '/img/BANDERA-EUA.png',
	switchText: 'Switch to English',
	header: {
		contactButton: 'CONTACTO',
		programsText: 'PROGRAMA',
		speakersText: 'PONENTES'
	},
	timezoneText: 'HORARIO CDMX',
	jumbotron: {
		videoTitles: {
			conferences: 'CONFERENCIAS',
			roundTables: 'MESA REDONDA',
			ceremonies: 'CEREMONIAS'
		},
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
			flagUrl: '/img/BANDERA-MEXICO.png',
			cv: `${cvStyle}
				<ul>
					<li>Médico Veterinario Zootecnista por la UNAM (1968-1972). </li>
					<li>Reconocida trayectoria en Latino América en nutrición animal.</li>
					<li>Co-fundador y Presidente del Consejo de Administración Nutec.</li>
					<li>Director Científico de Grupo Nutec.</li>
					<li>Homenajeado por AMVEC Nacional (2017)</li>
				</ul>
			`
		},
		{
			id: 'wendy-pearson',
			name: 'WENDY PEARSON',
			pre: 'DRA',
			description: 'Universidad de Guelph',
			flagUrl: '/img/BANDERA-CANADA.png',
			cv: `${cvStyle}
			<p>La Dra. Wendy Pearson es Profesora Asociada del Departamento de Biociencia
			Animal de la Universidad de Guelph, Canadá.Realizó estudios de pregrado en
			Ciencia Animal, es Maestra en Ciencias en Toxicología Nutricional y Doctora en
			Toxicología Biomédica por la Universidad de Guelph, Canadá. La Dra. Pearson
			lleva a cabo investigación en nutracéuticos y farmacéuticos veterinarios;
			enfocándose en el tratamiento de la inflamación en los equinos con base en la
			nutrición clínica y manejo de la dieta. En el Milton Equine Hospital desarrolla
			estrategias nutricionales y dietarias para mejorar la salud de los caballos, así
			como pruebas clínicas con caballos que padecen artritis, alteración común que
			se presentan a temprana edad en los caballos de carreras. Actualmente, realiza
			investigación in vitro en intervención dietaria basada en plantas para tratar los
			problemas de inflamación articular. También lleva a cabo investigación en
			remedios antiinflamatorios a base de plantas para ser utilizados en la tráquea y
			el estómago.</p>

			<p>Para el desarrollo de sus proyectos de investigación recibe fondos
			del Ministerio de Agricultura, Alimentos y Asuntos Rurales de Ontario,
			la Asociación de la Industria de Caballos de Carreras de Ontario, la
			Fundación Canadiense de Investigación de Gingseng, la Fundación
			Howard Webster y el Consejo Nacional de Investigación. Es primera
			autora de varios artículos publicados en revistas indexadas.
			La Dra. Pearson colabora en la graduación de sus estudiantes
			apoyando sus proyectos, animándolos a trabajar en equipo,
			desarrollar nuevas habilidades y su capacidad de liderazgo.</p>
			`
		},
		{
			id: 'kathleen-crandell',
			name: 'KATHLEEN CRANDELL',
			pre: 'DRA',
			description: 'Kentucky Equine Research, USA',
			flagUrl: '/img/BANDERA-EUA.png',
			cv: `${cvStyle}
			<p>La Dra. Kathleen Crandell, realizó sus estudios de Maestría en el área de Nutrición Equina y
	index: "/",
	Fisiología del Ejercicio en el Instituto Politécnico de Virginia; sus estudios de Doctorado los
			realizó en el área de Nutrición y Reproducción Equina en el Instituto Politécnico de Virginia.
			Fue asesor en el centro de Extensión e Investigación de Agricultura en “Virginia Tech
			Middleburg”, donde formó el centro de investigación y programa de reproducción, teniendo
			a su cargo más de 100 caballos de raza Pura Sangre Inglés; así mismo junto con su esposo
			inició un programa de reproducción de Caballos Pura Sangre Inglés y Árabes por su cuenta.
			Ha sido consultor formando parte del staff de Kentucky Equine Research (KER) durante 20
			años, siendo responsable del soporte nutricional nacional e internacional con los socios
			comerciales asociados a KER en formulación de dietas, dando soporte a la producción de
			empaques para alimentos para caballos, teniendo a su cargo personal para ventas de los
			productos de la Institución. Es asesora profesional en programas individuales de nutrición en
			caballos y granjas, teniendo como clientes al top de competidores dentro de los Estados
			Unidos. Dra. Krandell ha sido conferencista en diversos seminarios tanto propietarios como
			para la comunidad científica alrededor del mundo. Durante los años que ha formado parte
			de KER ha publicado diversos artículos en nutrición de equinos en: equinews.com (página
			especializada en nutrición de equinos). Ha sido autora de capítulos de libros, revistas
			científicas y revistas populares.</p>

			<p>Actualmente también pertenece como instructor en la
			Universidad de Gelph, Ontario Canadá, brindando conferencias en el área de
			Nutrición de Equinos: “Advanced Equine Health through Nutrition”, así como en
			temas relacionados a las enfermedades o desórdenes nutricionales. Ha sido
			galardonada 3 veces por H. Daniels Fellowships en la Librería Nacional del Deporte
			en Middleburg, Virginia USA por su esfuerzo en estudiar las perspectivas en la
			nutrición de equinos y la laminitis. Uno de sus hobbies favoritos es el montar a
			caballo, actividad que ha realizado durante más de 25 años compitiendo en
			Endurence; actualmente monta a sus 4 caballos Árabes.</p>
			`
		},
		{
			id: 'adriana-yolanda-diaz-archundia',
			name: 'ADRIANA YOLANDA DÍAZ ARCHUNDIA',
			pre: 'DRA',
			description: 'UAEMEX',
			flagUrl: '/img/BANDERA-MEXICO.png',
			cv: `${cvStyle}
			<p><strong>Datos Académicos</strong></p>
			<ul>
				<li>Certificación Profesional CONCERVET Área Equinos</li>
				<li>Maestría en Ciencias Agropecuarias y Recursos Naturales. Línea de Investigación Salud Animal, Área: Equinos FMVZ-UAEM </li>
				<li>Especialidad en Medicina y Cirugía en Équidos Periodo 2008-2009 FMVZ-UNAM</li>
				<li>Licenciatura: Médico Veterinario Zootecnista Periodo 1997-2004 FMVZ-UAEM</li>
			</ul>
			
			<p><strong>Experiencia Laboral</strong></p>
			<ul>
				<li>Clínica Privada Medicina en Equinos Periodo 2004 a la fecha</li>
				<li>Profesor de tiempo completo (PTC-B) FMVZ-UAEM Periodo 2011 a la fecha</li>
				<li>Miembro del Comité Certificador Área de Equinos CONCERVET Periodo 2014 a la fecha</li>
				<li>Responsable del Área de Cirugía de la FMVZ-UAEM Periodo 2020 a la fecha</li>
				<li>Clínico-Responsable del área de Medicina Interna en Equinos Hospital Veterinario Grandes Especies FMVZ-UAEM Periodo 2011-2020</li>
				<li>Delegado de la Asociación Mexicana de Médicos Veterinarios Especialistas en Equinos (AMMVEE), Delegación del Estado de México Abril 2012-2017</li>
				<li>Médico Residente y Anestesista Unidad Médica Equina, Santo Tomas, Ajusco D.F. Periodo 2009-2011</li>
				<li>Diferentes Estancias en Medicina y Cirugía para Équidos</li>
				<li>Hospital de Équidos FMVZ-UNAM Méx.</li>
				<li>Hospital la Silla, Monterrey, N.L.</li>
				<li>Hospital los Alamitos, Zapopan, Jalisco Periodo Febrero 2008- Agosto 2008</li>
				<li>Agrupamiento de Montados y Caninos, Dirección de Seguridad Pública y Tránsito, Periodo Marzo-Septiembre 2003</li>
				<li>Responsable del Área Clínica Equina Periodo 2004-2008 Rancho la Trinidad, Escuela de monta Instructora de Equitación e Instructora de Equinoterapia Periodo 1997-2008 Rancho la Trinidad, Escuela de monta</li>
			</ul>

			<p><strong>Publicaciones</strong></p>

			<p>Effects of Jejunal Manipulation During Surgical Laparotomy Techniques and Its
			Evaluation Using Physical, Clinical, and Echographic Parameters In Horses. Journal of Equine Veterinary Science (JVES) November 2017 Volume 58,
			Pages 40-46</p>
			`
		},
		{
			id: 'alfredo-julian-paredes',
			name: 'ALFREDO JULIÁN PAREDES',
			pre: 'DR',
			description: 'Consultor Indepediente en México',
			flagUrl: '/img/BANDERA-MEXICO.png',
			cv: `${cvStyle}
			<ul>
				<li>1996 Médico Veterinario Zootecnista egresado de la Universidad Nacional Autónoma de México.</li>
				<li>2000 Especialidad en Producción Animal por la Facultad de Medicina Veterinaria y Zootecnia de la UNAM.</li>
				<li>1995-1997 Auxiliar Veterinario en el Hospital para caballos Vetequi en el Hipódromo de las Américas.</li>
				<li>2000-2002 Veterinario Oficial Hipódromo de las Américas.</li>
				<li>2000-Actual Asesor en criaderos y cuadras de caballos de carreras Pura Sangre Inglés y Cuarto de Milla.</li>
				<li>2005-2023 Jefe de Servicio Técnico Caballos, Coordinador Ventas Especialidades en Malta Texo de México SA de CV.</li>
				<li>2010-Actual Colaborador Externo e Identificador de la Asociación Mexicana de Criadores y Caballistas de Caballos Cuarto de Milla.</li>
				<li>2023-Actual Asesor Externo Industrial Pecuaria de los Altos Árbitro en el Comité Mexicano de Arbitraje y Vigilancia de Carreras de Caballos y Galgos AC </li>
			</ul>
			`
		},
		{
			id: 'ana-celia-gomez-campos',
			name: 'ANA CELIA GÓMEZ CAMPOS',
			pre: 'DRA',
			description: 'GRUPO NUTEC',
			flagUrl: '/img/BANDERA-MEXICO.png',
			cv: `${cvStyle}
			<ul>
				<li>Estudios de licenciatura en la Unidad Académica de Medicina, Veterinaria y Zootecnia de la Universidad Autónoma de Zacatecas.</li>
				<li>Cursó estadía Profesionalizante en el Hospital del Depto. de Medicina, Cirugía y Zootecnia para Équidos en la Facultad de Medicina Veterinaria y Zootecnia de la Universidad Nacional Autónoma de México. </li>
				<li>Estadía profesionalizante en clínica privada para equinos DITEQ.</li>
				<li>Estadía profesionalizante en el Hipódromo de las Américas.</li>
				<li>Estancia Profesional en The Donkey Sanctuary, World Horse Welfare, Universidad Nacional Autónoma de México. DS-WHW-UNAM. CLÍNICAS AMBULATORIAS.</li>
				<li>Cursó estudios de Especialidad en Medicina y Cirugía para Équidos, en la Facultad de Medicina Veterinaria y Zootecnia de la Universidad Nacional Autónoma de México.</li>
				<li>2006 al presente: Miembro de la Asociación Mexicana de Médicos Veterinarios Especialistas en Equinos (AMMVEE).</li>
				<li>Febrero de 2009 a Junio de 2011: Tesis: Efecto de la suplementación nutricional de manzarina sobre par[ámetros ruminales de vacas holstein en producción.</li>
				<li>Enero de 2010: Estancia Profesional en The Donkey Sanctuary, World Horse Welfare, Universidad Nacional Autónoma de México. DS-WHW-UNAM. CLÍNICAS AMBULATORIAS.</li>
				<li>Agosto del 2009 a Febrero del 2010: Estancia Profesional en el Departamento de Medicina, Cirugía y Zootecnia para Équidos de la Facultad de Veterinaria de la Universidad de la UNAM.</li>
				<li>Marzo del 2010 a Julio del 2010: Estancia Profesional en Clínica Privada para equinos DITEQ. MVZ, MSc, PhD, cert ACVIM María Masri Daba. Estancia Profesional en el Hipódromo de las Américas.</li>
				<li>Julio del 2010 a Octubre del 2010: Prestador de Servicios Profesionales en SAGARPA, delegación Zacatecas.</li>
				<li>Octubre del 2011: Participación en el equipo de M.V.Z. Oficial en Juegos Panamericanos Guadalajara 2011.</li>
				<li>2011-2013: Estudiante de Especialidad en Medicina y Cirugía para Équidos, en la Facultad de Medicina Veterinaria y Zootecnia de la Universidad Nacional Autónoma de México. Obteniendo el grado en el año 2013.</li>
				<li>2012-2013: Rotaciones profesionales de especialidad realizadas con diferentes clínicos especialistas en el área como ranchos de reproducción, clínica privada para equinos en ranchos, lienzos charros, hípicos, etc.</li>
				<li>Agosto 2013: Participación en el curso taller, “Primeros Auxilios en Lesiones de la charrería”, realizado en las instalaciones del Monumental Lienzo Charro Zacatecas, Zac.</li>
				<li>Octubre 2013: Colaboración durante la sesión científica del Congreso Anual Asociación Mexicana de Médicos Veterinarios Especialistas en Equinos, A.C. presentando el tema: “Atresia Coli Equino” bajo la modalidad de Cartel.</li>
				<li>Enero 2014 a Mayo 2015: Trabajo en clínica y medicina deportiva privada en San Antonio, Tx. USA. </li>
				<li>Mayo 2015 a Septiembre 2015: Clínica privada en el estado de Zacatecas, Zac. Mex.</li>
				<li>Septiembre 2015 al presente: Responsable del área Clínica-Médica y nutrición equina en la ganadería de Yeguada Villa Gely, Campeche, Mex.</li>
			</ul>
			`
		},
		{
			id: 'bernardo-aguado-medina',
			name: 'BERNARDO AGUADO MEDINA',
			pre: 'MVZ',
			description: 'Agribrands Purina México',
			flagUrl: '/img/BANDERA-MEXICO.png',
			cv: `${cvStyle}
			<ul>
				<li>Médico Veterinario Zootecnista con 16 años de experiencia en industria de alimento
				balanceado, Con enfoque en innovación y desarrollo de soluciones nutricionales para
				equinos en Agribrands Purina México.</li>
			</ul>

			<p><strong>EDUCACIÓN</strong></p>
			<ul>
				<li>Jul 01 2002- Jul 01 2007 Medicina Veterinaria y Zootecnia. Universidad La Salle Bajío. León Guanajuato México.</li>
			</ul>

			<p><strong>EXPERIENCIA</strong></p>
			<ul>
				<li>May 2020 - Presente. Gerente de Portafolio Equinos México. Agribrands Purina México (Cargill).</li>
				<li>Ene 2019 - May 2020. Líder de Especie Estratégica Equinos (Coordinación de Servicios técnicos). Agribrands Purina México (Cargill).</li>
				<li>Jun 2017 - Ene 2019. Gerente especialista en equinos. Norte y Centro. Agribrands Purina México (Cargill).</li>
				<li>Jul 2008 - Jun 2017. Gerente especialista en equinos. Norte. Agribrands Purina México (Cargill).</li>
				<li>Ago 2007 - Jul 2008. Comercialización de alimento balanceado. Asesoría Nutricional especializada en equinos.</li>
			</ul>
			`
		},
		{
			id: 'bernardo-monroy-hernandez',
			name: 'BERNARDO MONROY HERNÁNDEZ',
			pre: 'DR',
			description: 'Director Comercial Platinum Performance, México',
			flagUrl: '/img/BANDERA-MEXICO.png',
			cv: `${cvStyle}
			<ul>
				<li>Médico Veterinario Zootecnista por la Universidad Nacional Autónoma de México. Generación 2001.</li>
				<li>Miembro de AMMVEE.</li>
				<li>Ha realizado estudios de actualización en nutrición equina en Estados Unidos y Europa.</li>
				<li>Participado como ponente en congresos para veterinarios.</li>
				<li>Participación como colaborador en publicaciones científicas en temas de parasitología y suplementación de equinos.</li>
				<li>Presentado trabajos en congresos internacionales.</li>
			</ul>
			<p><strong>Experiencia Profesional</strong></p>
			<ul>
				<li>Gerente especialista de la línea de caballos en México y Latinoamérica para Cargill Purina durante 14 años (2005-2019).</li>
				<li>Gerente nacional de ventas del segmento equino para Boehringer-Ingelheim por 2 años (2019-2021).</li>
				<li>Actualmente. Director Comercial de Platinum Performance México.</li>
			</ul>
			`
		},
		{
			id: 'chris-rogers',
			name: 'CHRIS ROGERS',
			pre: 'DR',
			description: 'Massey University',
			flagUrl: '/img/BANDERA-AUS.png',
			cv: `${cvStyle}
			<p>
				Chris Rogers es el líder del programa de equinos y
				es el jefe de los grupos preclínicos en la Escuela de Ciencias
				Veterinarias. Chris tiene un nombramiento dual tanto en la
				Escuela de Ciencias Veterinarias como en la Escuela de Agricultura
				y Medio Ambiente de la Universidad Massey. Los intereses de
				investigación del Profesor Rogers incluyen la biomecánica equina,
				la fisiología y nutrición del ejercicio equino, la epidemiología de
				la industria equina y el deporte ecuestre. Su prog rama de
				investigación y enseñanza ha sido fundamental para proporcionar
				el conocimiento necesario para describir y mejorar la producción
				equina en Nueva Zelanda e internacionalmente
			</p>
			`
		},
		{
			id: 'elias-velazquez-canton',
			name: 'ELÍAS VELÁZQUEZ CANTÓN',
			pre: 'DR',
			description: 'GRUPO NUTEC',
			flagUrl: '/img/BANDERA-MEXICO.png',
			cv: `${cvStyle}
			<p>
				Dr. Elías Velázquez Cantón, realizó sus estudios en la Licenciatura de
				Medicina Veterinaria y Zootecnia en la Universidad Autónoma Metropolitana
				unidad Xochimilco obteniendo el título en el año del 2003. En el año del
				2007 obtiene el grado de Maestro en Ciencias de la Producción y Salud
				Animal en el área de Endocrinología y Fisiología de la Reproducción en
				Equinos en el Departamento de Reproducción de la FMVZ-UNAM. En el 2013
				comienza sus estudios de Doctorado en Ciencias de la Producción y de la
				Salud Animal en la FMVZ-UNAM en el ÁREA DE NUTRICIÓN DE EQUINOS
				obteniendo el grado en septiembre del 2018. Su tema doctoral se basó en el
				sistema oxidante/antioxidante de los equinos. Sus estudios de Doctorado le
				han permitido participar como conferencista bajo los siguientes temas:
			</p>

			<ul>
				<li>BSS (British Society of Animal Science) Universidad de Chester, Inglaterra. Sala: “Advances in Equine Science A” Tema: “Effect of supplementation with selenium and vitamin E on serum malondialdehyde creatine phosphokinase concentrations in horses under moderate exercise” Abril, 2015.</li>
				<li>ASAS, ADSA: The American Dairy Science Association and American Society of Animal Science Join Annual Meeting; Orlando, Florida. Sala: “Nonruminant nutrition” Tema: “Effect of selenium and vitamin E supplementation on muscular damage enzymes in horses under moderate exercise” Julio, 2015.</li>
				<li>EEAP; European Federation of Animal Science; Warsaw, Polonia. Sala: “Equine production, management and welfare” Tema: “Effect of selenium and Vitamin E supplementation on serum cortisol in horses under moderate exercise” Agosto, 2015.</li>
				<li>AVEF 2015 Association Veterinaire Equine Francaise; París, Francia Tema 1: “Effect of selenium and vitamin E supplementation on erythrocyte glutathione peroxidase of moderately exercised horses” Noviembre 2015 Tema 2: “Effect of selenium and vitamin E supplementation on lactatemia in horses under moderate exercise” Noviembre 2015.</li>
				<li>BSAS (British Society of Animal Science) Universidad de Chester, Inglaterra. Sala: “Sport Medicine” Tema: “Effect of selenium and vitamin E supplements on blood lactate and serum lactate dehydrogenase activity in horses under moderate exercise” Abril 2016.</li>
				<li>ASAS, The American Dairy Science Association and American Society of Animal Science Salt Lake City-UTAH, USA. Sala: “Horse species”. Tema: “Effect of selenium and vitamin E supplementation on blood glutathione peroxidase activity and selenium in moderately exercised horses” Julio 2016. </li>
				<li>EEAP (European Federation of Animal Science), Irlanda del Norte. Sala: “Animal behaviour and nutritional requirements” Tema: “Effect of antioxidant supplementation on serum α-tocopheryl in horses undergoing moderate exercise” Agosto 31 2016.</li>
				<li>SAS (British Society of Animal Science) Universidad de Chester, InglaterraTema: “Serum cortisol concentrations in horses supplemented with selenium and vitamin E undergoing moderate exercise in an ozone polluted environment” Abril 2017.</li>
				<li>ASAS, The American Dairy Science Association and American Society of Animal Science, Vancouver, Canadá Tema: “Effect of selenium and vitamin E supplementation on erythrocyte super oxide dismutase activity and blood concentrations of zinc and copper in moderately exercise” 12 Julio 2018.</li>
				<li>EEAP, European Federation of Animal Science Gante Bélgica Tema: “Serum malondialdehyde in horses supplemented with selenium and vitamin E, moderately exercised in a polluted environment” Agosto 2019 Junto con la Dra. Aurora Hilda Ramírez Pérez son los fundadores del Ciclo Internacional de Conferencias en Nutrición y Alimentación de Equinos, desde el 2017. </li>
			</ul>

			<p>
				Fue profesor de asignatura durante 2 años en la FMVZ-UNAM
				adscrito al Departamento de Nutrición Animal y
				Bioquímica de la FMVZ-UNAM impartiendo la clase de
				Nutrición Animal. Actualmente es Co-asesor en tesis de
				Licenciatura en el área de Nutrición de Equinos y Fisiología del
				Ejercicio en la FMVZ-UNAM CDMX.
			</p>
			`
		},
		{
			id: 'gulsah-kaya-karasu',
			name: 'GULSAH KAYA KARASU',
			pre: 'DRA',
			description: 'Van Hall Larenstein University of Applied Sciences',
			flagUrl: '/img/BANDERA-TURK.png',
			cv: `${cvStyle}
				<p>
					La Dra. Gulsah Kaya Karasu obtuvo su Doctorado en 2009 de la Universidad
					Veterinaria de Viena en Austria, especializándose en "factores de riesgo
					de cólico en caballos". La carrera de la Dra. Gulsah la llevó por todo el
					mundo, incluyendo estancias en la Universidad de Glasgow en Escocia, el
					Hospital Equino Blueridge en Estados Unidos, y educación continua en
					medicina equina en la Universidad de Liverpool en el Reino Unido. En 2011,
					se convirtió en Profesora Asociada en la Universidad de Aydın en Estambul.
					Su dedicación a la salud equina la llevó al Programa de Residencia del
					ECVCN-European College Veterinary Comparative Nutrition. Es una veterinaria
					de renombre en nutrición equina que ha brindado consultoría técnica para
					importantes empresas de alimentos para caballos. Sus artículos perspicaces
					han aparecido en varias publicaciones ecuestres. La Dra. Gulsah vive en los
					Países Bajos y trabaja como profesora e investigadora equina en la
					Universidad de Ciencias Aplicadas Van Hall Larenstein. También fundó AGG
					Equine Nutrition Consultancy, que ha brindado servicios de consultoría
					internacional por más de una década.
				</p>
			`
		},
		{
			id: 'lucia-perez-manrique',
			name: 'LUCIA PÉREZ MANRIQUE',
			pre: 'DRA',
			description: 'FMVZ-UNAM',
			flagUrl: '/img/BANDERA-MEXICO.png',
			cv: `${cvStyle}
			<ul>
				<li>2005- titulación licenciatura MVZ x FMVZ-UNAM.</li>
				<li>2008- titulación con honores de M en C de la salud y producción animal x FMVZ-UNAM.</li>
				<li>2005-2015 prof. Imagenología vet en FMVZ-UNAM.</li>
				<li>2003-2005 y 2008-2013 honorario y residente en dmcze FMVZ-UNAM.</li>
				<li>2008-2009 internado en Etología clínica en FMVZ-UNAM.</li>
				<li>2009-fecha clínico académico en hospital de fauna silvestre y etiología clínica en FMVZ-UNAM.</li>
				<li>2014-fecha estudiante de doctorado en ciencias de la salud y producción animal en colaboración con instituciones de Ins Biomédicas (tema: ontogenia del temperamento en Caballos).</li>
				<li>Temas de interés: etiología clínica y aplicada en pequeñas especies y caballos, bienestar animal.</li>
				<li>Ponente en pláticas/congresos.</li>
				<li>Módulos de diplomados</li>
				<li>temas: Etología clínica de pequeñas especies, bienestar animal (Caballos), odontología (Caballos).</li>
				<li>Estancias en extranjero: Elgin Veterinaria Clínic (Horse Division), Cornell Veterinary College (Behavior Clinic).</li>
				<li>Doctora en Ciencias de la Producción y de la Salud Animal por la FMVZ-UNAM.</li>
			</ul>
			`
		},
		{
			id: 'maria-esther-ortega-cerrilla',
			name: 'MARÍA ESTHER ORTEGA CERRILLA',
			pre: 'DRA',
			description: 'Colegio de Postgraduados',
			flagUrl: '/img/BANDERA-MEXICO.png',
			cv: `${cvStyle}
			<p><strong>SISTEMA NACIONAL DE INVESTIGADORES: Investigador Nacional Nivel II</strong></p>

			<p><strong>FORMACIÓN ACADÉMICA:</strong></p>

			<ul>
				<li>Médico Veterinario Zootecnista: Facultad de Medicina Veterinaria y Zootecnia, UNAM.</li>
				<li>Master of Science:University of Wisconsin, E.U.</li>
				<li>Doctor of Philoshophy: University of Newcastle Upon Tyne, Inglaterra.</li>
				<li>Estancia sabática: University of Hull, Inglaterra(Conducta y Bienestar Animal).</li>
				<li>Certificación en Bienestar Equino: University of Guelph, Canada.</li>
				<li>Área: Zootecnia.</li>
				<li>Especialidad : Nutrición de Rumiantes, Conducta y Bienestar Animal.</li>
				<li>ARTÍCULOS PUBLICADOS EN REVISTAS INDIZADAS: 75.</li>
			</ul>

			<p><strong>ARTÍCULOS</strong></p>

			<ul>
				<li>JCR (2019-2021): Larios, C.S., Ramírez, V.R., Aranda, O.G., Ortega, C.M.E.,García. O.J.C. 2019.Indicadores de estrés en bovinos por el uso de prácticas de manejo en el embarque, transporte y desembarque. Rev. Mex. Cienc. Pecu. 10:885-902.</li>
				<li>Álvarez, V.P., Guerrero, R.J.D., García de los S.G.,Ortega, C.M.E., Mendoza,P.S.I., Joaquín, C.S. 2020. Acumulación de forraje Lotus corniculatus L., en función de diferentes estrategias de cosecha. Rev. Mex. Cienc. Pecu. 11:1087-1100.</li>
				<li>Valdez, A.L.P., Ortega, C.M.E., Fraire, C.S., Arreola, E.J., Crosby, G.M.M., Cruz,T.A.A., Ramírez, M.M. 2020. Physicochemical and preference evaluation of silages from Curcubita argyrosperma Huber residues and its effect on the production and composition of milk from dual-purpose cows in Campeche, Mexico: pilot study.2020. Sustainability 12, 7757; doi:10.3390/su12187757</li>
				<li>Kawas, J.R., García, M.J.F., Fimbres, D.H., Ortega, C.M.E. 2020. Effects of rumen-protected choline on growth performance, carcass characteristics and blood lipid metabolites of feedlot lambs. Animals 10, 1580; doi:10.3390/ani10091580</li>
				</ul>
				
			<p><strong>ARTÍCULOS EN CONACYT (2019-2020)</strong></p>
				
			<ul>
				<li>Rosas, V.U., Ortega, C.M.E., Ayala, R.J.M., Aranda, O.G., Sánchez, T.E.M.T. 2019. Producción de ganado productor de carne con bienestar animal. Agroproductividad 12(10):41-46.</li>
				<li>Vera, H.I.Y., Ortega, C.M.E., Herrera, H.J.G., Huerta, J.M. 2019. Bienestar en ovinos y su evaluación. Agroproductividad 12(9): 67-72</li>
				<li>Wilson, G.C.Y., López, Z.N.E., Álvarez, V.P., Ortega, C.M.E., Venegas, A.M.I. 2020. Acumulación de forraje, composición morfológica e intercepción luminosa en Triticale 118 (X Triticosecale Wittmack). Rev. Mex. Cienc. Agric. 24: 221-229.</li>
				<li>Luna, G.M.J., López, C.C., Quero, C.A.R., Herrera, H.J.G., Ortega, C.M.E., Martínez, H.P.A. 2020. Relaciones hídricas e intercambio gaseoso en alfalfa bajo condiciones de sequía. Rev. Mex. Cienc. Agric. 24: 81-92.</li>
				<li>Hernández, V.Y.G., Herrera, H.J.G., Crosby, G.M.M., Ortega, C.M.E., Bautista,M.Y., Godinez, C.B. 2020. Risk factors associated with mastitis and raw milk quality in small farms of Texcoco, Mexico. Agroproductividad 13(9): 39-44.</li>
				<li>Castro de J.J.,Ortega, C.M.E.,Herrera, H.J.G., Hernández, C.A.,Ayala, R.J.M.2021. Animal welfare during transport and slaughter of beef cattle. Agroproductividad (Aceptado para su publicación) </li>
			</ul>

			<p><strong>RESÚMENES PUBLICADOS EN MEMORIAS NACIONALES E INTERNACIONALES: 145</strong></p>

			<p><strong>TESIS DIRIGIDAS:</strong></p>

			<ul>
				<li>15 Doctorado</li>
				<li>27 Maestría</li>
				<li>24 Licenciatura</li>
			</ul>

			<p><strong>DISTINCIONES:</strong></p>

			<ul>
				<li>Beca otorgada por el Committee of Vice-Chancelors and Principals of the Universities of the United Kingdom (Overseas Research Student Award) para realizar estudios de doctorado (1988-1990).</li>
				<li>Miembro de la Mesa Directiva de la Asociación Mexicana de Especialistas en Nutrición Animal (1992-1993; 1998-1999).</li>
				<li>Reconocimiento como Registered Nutritionist por The Nutrition Society de Inglaterra, de 2000 a la fecha. Miembro de la Academia Veterinaria Mexicana, 2002 a la fecha.</li>
			</ul>

			<p><strong>CONFERENCIAS POR INVITACIÓN: 60</strong></p>
			`
		},
		{
			id: 'maria-masri-daba',
			name: 'MARÍA MASRI DABA',
			pre: 'DRA',
			description: 'FMVZ-UNAM',
			flagUrl: '/img/BANDERA-MEXICO.png',
			cv: `${cvStyle}
			<ul>
				<li>MVZ en FMVZ, UNAM México</li>
				<li>MSc Gastroenterología en U of Fl</li>
				<li>Residencia en Medicina Interna LSU</li>
				<li>MSc Fisiología del ejercicio LSU</li>
				<li>Board ACVIM</li>
				<li>PhD Ingeniería de Tejidos y Cartílago</li>
				<li>Profesor FMVZ, UNAM</li>
			</ul>

			<p><strong>Experiencia</strong></p>
			<ul>
				<li>Asesor de la Clínica del Hipodromo: Hipódromo de las Américas noviembre de 2013-actualidad (4 años 4 meses).</li>
				<li>Profesor FMVZ, UNAM 1991-actualidad (27 años) Nombramiento: Profesor Titular C Tiempo Completo Definitivo.</li>
			</ul>

			<p><strong>Educación</strong></p>
			<ul>
				<li>University of Florida, LSU</li>
				<li>INTERNADO, EQUINOS INTERNADO, EQUINOS 1983-1985</li>
				<li>FACULTAD DE MEDICINA VETERINARIA Y ZOOTECNIA, CU, UNAM MVZ</li>
				<li>MEDICINA INTERNA, MEDICINA REGENERATIVA, INTERÉS ESPECIAL EN MEDICINA DEPORTIVA MVZ, 1978-1982</li>
			</ul>
			`
		},
		{
			id: 'mariano-hernandez-gil',
			name: 'MARIANO HERNÁNDEZ GIL',
			pre: 'DR',
			description: 'FMVZ-UNAM',
			flagUrl: '/img/BANDERA-MEXICO.png',
			cv: `${cvStyle}
			<ul>
				<li>Nació en la Ciudad de México el 8 de diciembre de 1974, aunque pasó la mayor parte de su infancia y adolescencia en los estados de Veracruz e Hidalgo, donde estuvo en contacto con animales de granja, desarrollando un interés especial por los équidos.</li>
				<li>Estudió en la Facultad de Medicina Veterinaria y Zootecnia de la UNAM, por la que obtuvo el grado de Médico Veterinario Zootecnista en el año 2000; para dos años más tarde obtener el grado de Maestro en Ciencias, con Opción en Nutrición Animal, por la Universidad Autónoma de Yucatán. En 2008 obtiene la Certificación en Equinos por el CONCERVET, certificándose de nuevo en 2014.</li>
				<li>En octubre de 2002 se integró al Programa conformado por las fundaciones británicas The Donkey Sanctuary y World Horse Welfare, junto con la Universidad Nacional Autónoma de México, como Responsable del Proyecto "Equine Nutrition and Management", áreas en las que se ha mantenido como consultor. De hecho, dirigiendo dicho Programa, ha desarrollado proyectos para identificar condiciones que ponen en riesgo el bienestar equino, colaborando con instituciones nacionales e internacionales en la implementación de actividades en apoyo del desarrollo profesional y el avance de los estándares de práctica de médicos veterinarios trabajando con équidos. </li>
				<li>Académico de la Facultad de Medicina Veterinaria y Zootecnia de la UNAM desde 2002, donde actualmente es Profesor Asociado C de Tiempo Completo y Jefe del Departamento de Medicina, Cirugía y Zootecnia para Équidos, impartiendo materias a nivel licenciatura y posgrado, además de ser asesor en servicio social, trabajo profesional, estancias de investigación, tesis de licenciatura, internado, especialidad y maestría de estudiantes tanto de la UNAM, como de otras universidades nacionales e internacionales.</li>
				<li>Entre los eventos en los que ha participado como ponente e instructor destacan: el Congreso Anual AMMVEE (2003 a 2014), el Seminario Anual de The International League for the Protection of Horses (2005), la Reunión Anual de The American Association of Equine Practitioners (2009 y 2015), The International Colloquium on Working Equids (2006, 2010 y 2014), The Equitarian Workshop (2010 a 2014), The FAO-Brooke Expert Meeting on Welfare of Working Animals (2011), el Congreso de The World Equine Veterinary Association (2015) y la Reunión de la Asociación Latinoamericana de Producción Animal (2016); publicando artículos en memorias de congresos y revistas arbitradas en temas de bienestar, nutrición, odontología y enfermedades en équidos. </li>
				<li>Es así mismo miembro del Comité de Salud y Producción Equina del CONASA, miembro del Comité Técnico de Certificación en Equinos del CONCERVET y Presidente de la Asociación Mexicana de Médicos Veterinarios Especialistas en Equinos.</li>
				<li>En su práctica privada se ha desempeñado en Nutrición Equina y Odontología Equina; prestando también servicios como consultor de empresas del ramo de la alimentación animal, así como de criaderos y cuadras particulares.</li>
				<li>Involucrado en academia, práctica privada, extensión y educación continua, durante su carrera Mariano ha mantenido el equilibrio entre la teoría y la práctica para promover la calidad de vida y el desempeño eficiente de los équidos. Siempre convencido de la importancia de mantener las buenas prácticas tradicionales para procurar el bienestar animal, al tiempo que se incorporan los avances de la ciencia y la tecnología.</li>
			</ul>
			`
		},
		{
			id: 'meriel-moore-colyer',
			name: 'MERIEL MOORE-COLYER',
			pre: 'DRA',
			description: 'Consultora Independiente en el Reino Unido',
			flagUrl: '/img/BANDERA-UK.png',
			cv: `${cvStyle}
			<p><strong>TÍTULOS Y CALIFICACIONES PROFESIONALES</strong></p>
			<p>
				2015 Profesor de Ciencias Equinas (cátedra personal) 2013 R. Anim. Sci (Instituto de
				Biología) 1995-2000 PhD en Nutrición Equina (Universidad de Edimburgo) Título:
				Estudios sobre la cinética de degradación de
				alimentos fibrosos botánicamente diversos y
				su digestibilidad aparente y tasa de paso cuando se alimentan a ponis.
			</p>

			<p>
				1996 Módulos de Licencia del Ministerio del Interior 1, 2, 3, 4 y 5. 1994 Calificaciones de
				Entrenador y Evaluador BTEC, D32 y D33 1984 Instructor Intermedio de la Sociedad
				Británica de Caballos 1980-1984 BSc (Hons) en Agricultura, University College of Wales
				Aberystwyth
			</p>

			<p><strong>TRAYECTORIA LABORAL</strong></p>
			<ul>
				<li>2016 Director de Investigación e Intercambio de Conocimientos, Universidad Agrícola Real.</li>
				<li>2014-2016 Decano de la Escuela de Gestión y Ciencias Equinas de la Universidad Agrícola Real.</li>
				<li>2006 Profesor Principal, Real Colegio Agrícola, Cirencester (a tiempo parcial)</li>
				<li>2007-2013 Subdecano de Estudios Abiertos de Ciencias Equinas, Bury St Edmonds.</li>
				<li>2004-2006 Consultor en Nutrición Equina e Investigación</li>
				<li>1995-2004 Profesor en Ciencias Equinas y Animales (tiempo completo) Universidad de Gales.</li>
				<li>1993-1995 Profesor en Ciencias Equinas (tiempo completo) Colegio Agrícola de Gales.</li>
				<li>1989-1993 Profesor en Ciencias Equinas (a tiempo parcial) Universidad de Gales Aberystwyth.</li>
			</ul>

			<p><strong>ÁREAS PRINCIPALES DE INVESTIGACIÓN</strong></p>
			<ul>
				<li>Alimentos y sistemas de alimentación novedosos para ganado joven.</li>
				<li>Alergenos respiratorios: identificación y sistemas para tratar el forraje.</li>
				<li>Perfil microbiano del forraje y contenido de nutrientes en relación con la salud intestinal, la salud respiratoria, el ambiente estable y sistemas de mitigación.</li>
				<li>Sistemas de alimentación y comportamiento y bienestar equino.</li>
				<li>Fisiología digestiva y salud intestinal.</li>
				<li>Requerimientos energéticos de los caballos en ejercicio.</li>
			</ul>

			<p class="uppercase"><strong>MEMBRESÍSA EN SOCIEDADES ACADÉMICAS NACIONALES</strong></p>
			<ul>
				<li>Miembro de BSAS.</li>
				<li>Comité organizador de las Conferencias de Ciencia Equina Emergente (2003) y de Aplicación de Ciencia Equina (2005)</li>
				<li>Miembro de la Sociedad para el Avance de la Excelencia en Ciencia Equina.</li>
				<li>Evaluador de acreditación para la Sociedad de Biología.</li>
			</ul>

			<p>
				Editor de las siguientes publicaciones: Ciencia Equina Emergente 2004;
				Ciencia Equina Aplicada, 2006; El Rol de la Ciencia y los Negocios en la Salud y
				Bienestar del Caballo, Conferencia Alltech UWE Hartpury 2013; Cómo obtener el máximo
				rendimiento de su alimentación. Conferencia Alltech UWE Hartpury sobre Fisiología
				del Ejercicio, 2011; Sociedad Europea de Nutrición Veterinaria y Clínica 2017; Taller Europeo de Nutrición
				Equina 2017 en adelante.
			</p>

			<p><strong>ENSEÑANZA Y GESTIÓN</strong></p>
			<ul>
				<li>Enseñanza de pregrado: Amplia experiencia impartiendo conferencias y clases prácticas en niveles de HND y BSc. Las materias enseñadas incluyen Diseño y Análisis Experimental, Ciencia Animal, Nutrición de Rumiantes y Equinos, Fisiología del Ejercicio Equino, Bioquímica Nutricional (orgánica), Anatomía Equina e Industria Equina. Además, coordina y supervisa las disertaciones de BSc.</li>
				<li>Enseñanza de posgrado: La enseñanza de MSc incluye Diseño y Análisis Experimental, Nutrición Equina y Anatomía Equina. También es coordinadora y supervisora de disertaciones. Además, supervisó a estudiantes de MScR y PhD.</li>
			</ul>

			<p><strong>HABILIDADES PRÁCTICAS PASATIEMPOS E INTERESES</strong></p>
			<ul>
				<li>Instructor Intermedio de la Sociedad Británica de Equitación</li>
				<li>Montar y competir en doma</li>
				<li>Nivel Small Tour Buzo avanzado certificado por PADI y SSI</li>
				<li>Lectura</li>
				<li>Música clásica</li>
			</ul>

			<p><strong>LISTA DE PUBLICACIONES</strong></p>
			<ul>
				<li>35. Auger, E.J. and Moore-Colyer, M.J.S. (2017) The effect of management regime on airborne respirable dust concentrations in 2 different types of horse stable design Journal of Equine Veterinary Science. 51:105-109</li>
				<li>34. Kirsty Roberts, Andrew J. Hemmings, Meriel Moore-Colyer, Matthew O. Parker and Sebastian D. McBride (2016) Neural modulators of temperament: A multivariate approach to personality trait identification in the horse. Physiology & Behaviour: 167: 125–131</li>
				<li>33. Moore-Colyer, M.J.S. Taylor, J. and James, R. (2016) The effect of steaming</li>
				<li>and soaking on the respirable particle, bacteria, mould and nutrient content in</li>
				<li>hay for horses. Journal of Equine Veterinary Science. 39: 62-68. (DOI: 10.1016/j.jevs.2015.09.006)</li>

				<li>32. Moore-Colyer, M.J.S., Hemmings, A and Hewer, N. (2016) A preliminary investigation into the effect of ad libitum or restricted hay with or without Horslyx on the intake and switching behaviour of normal and crib-biting horses. Livestock Science.186: 59-62 (http://dx.doc.org/10.1016/j.lisci.2015.07.021)</li>
				<li>31. Roberts, K.; Hemmings, A. and Moore-Colyer, M.J.S. Hale, C. (2015) Cognitive differences in horses performing locomotory versus oral stereotypic behaviour. Applied Animal Behaviour Science. 168:37-44 (Doi:10.1016/j.applanim.2015.04.015)</li>
				<li>30. Moore-Colyer, M.J.S., Lumbis, K., Longland, A.C. and Harris, P.A. (2014) The effect of five different wetting treatments on the nutrient content and microbial concentration in hay for horses PLOS One – November 26.</li>
				<li>29. Murray, J.M.D., Moore-Colyer, M.J.S. and Dunnett, C. and Longland. A.C. (2014) The effect of feeding a low or high starch diet on equine faecal parameters. Livestock Science.159: 67-70</li>
				<li>28. Moore-Colyer, M.J.S., O’Gorman, D. and Wakefield, K. (2013) An in vitro investigation into the effects of a marine-derived multi-mineral supplement in simulated equine stomach and hindgut environments. Journal of Equine Veterinary Science. 34(3): 391-397. DOI: 10.1016/j.jevs.2013.07.016</li>
				<li>27. Ince, J., Longland, A.C., Moore-Colyer, M.J.S. and Harris, P.A. (2013) In vitro degradation of grass fructan by equid gastrointestinal digesta. Grass and Forage Science. 69(3): 514-523. DOI: 1111/gfs.12061</li>
				<li>26. S.A. Brown; Moore-Colyer, M.J.S; Hannant ,D. (2013) Phenotypic analyses support investigations of phylogeny in the Skyrian pony and other breeds. Bioscience Horizons 2013 6: hzt010-hzt010</li>
				<li>25. Moore-Colyer, M.J.S. and Fillery, B.G. (2012) The effect of three different treatments on the respirable particle content, total viable count and mould concentrations in hay for horses. In: Forages and grazing in horse nutrition. EAAP publication No. 132. Ed. M.Saastamoinen, M.J. Fradinho, A.S. Santos and N. Miraglia. Pp 101-107</li>
				<li>24. Murray, J.M.D., Dunnett, C., Moore-Colyer, M.J.S. and Longland, A.C. (2012) In vitro assessment of three fibrolytic enzyme preparations as potential feed additives in equine diets. Animal Feed Science and Technology. 171: 192-204.</li>
				<li>23. James, R and Moore-Colyer, M.J.S (2010) Determination of the microbial contamination in dry and steamed hay. European Workshop for Equine Nutrition, Cirencester, Sept 2010. The Impact of nutrition on the health and welfare of horses. EAAP publication No. 128. Ed A. Ellis, AC. Longland, M. Coenen, and N. Miraglia. p 128-132 </li>

				<li>22. Murray, J.M.D., Bice, R.K.T and Moore-Colyer, M.J.S. (2010) The effect of particle size on the in vitro fermentation of different ratios of high-temperature dried Lucerne and sugar beet pulp incubated with equine faecal inocula. Animal Feed Science and Technology. 162: 47-57.</li>
				<li>21. Murray, J.M.D., Sanderson, R., Longland, A., Moore-Colyer, M.J.S., Hastie, P. and Dunnett, C. (2009) Assessment of mathematical models to describe the rate of passage of enzyme-treated or sugar beet pulp-substituted Lucerne silage in equids Animal Feed Science and Technology. Vol 154: 228-240.</li>
				<li>20. Moore-Colyer, M.J.S. (2009) laminitis – A nutritionist’s perspective. National Equine Student, Issue 15. Journal of Equine Studies. 8: 29-30.</li>
				<li>19. Johnson, J.L. and Moore-Colyer, M.J.S. (2009) The relationship between range of motion of lumbosacral flexion-extension and canter velocity of horses on a treadmill. Equine Veterinary Journal. 41: 301-303</li>
				<li>18. Murray, J.M.D., Longland, A.C., Hastie, PM., Moore-Colyer, M.J.S. and Dunnett, C. (2008) The nutritive value of sugar beet pulp-substituted Lucerne for equids. Animal Feed Science and Technology. 140: 110-124 ANIFEE11705</li>
				<li>17. Murray, J.M.D., Moore-Colyer, M.J.S., Longland, A.C. and Dunnett, C. (2008) The effect of yeast supplementation on the in vitro fermentation of high-temperature dried Lucerne. Animal Feed Science and Technology. 146: 149-159.</li>
				<li>16. Hale C.E., Moore-Colyer M.J.S. and Hemmings A.J. (2007). Feeding with Welfare in Mind: the role of alternative forages in meeting energy demands of domesticated horses. Animal Welfare. 16 (supp): 170.</li>
				<li>15. Murray, J.M.D., Longland, A.C., Davies, D.R., Hastie, P.M., Moore-Colyer, M.J.S. and Dunnett, C. (2007) The effect of enzyme treatment on the nutritive value of Lucerne for equids. Livestock Science. 112: 52-62. LIVSCI-00409</li>
				<li>14. Murray, J.M.D., Longland, A.C., Moore-Colyer, M.J.S. and Dunnett, C. (2006) The effect of feeding a low starch diet on the in vitro fermentative capacity of equine faecal inocula. Animal Science. 82: 627-636 (DOI 10.1079/ASC200683)</li>
				<li>13. Murray, J.M.D., Longland, A.C., Moore-Colyer, M.J.S. (2006) In vitro fermentation of different ratios of high-temperature dried Lucerne and sugar beet pulp incubated with an equine faecal inoculum. Animal Feed Science and Technology. 129: 89-98 (DOI10.1016/J.annifeedsci.2005.12.001)</li>
				<li>12. Murray, J.M.D., Longland, A.C., Moore-Colyer, M.J.S. and Dunnett, C. (2005). T he effect of enzyme treatment on the nutritive value of high-temperature dries Lucerne for ponies. Pferdeheilkunde. 21: 41-42.</li>
				<li>11. Murray, J.M.D., Longland, A.C., Moore-Colyer, M.J.S. and Dunnett, C. (2005) The effect of enzyme treatment on the in vitro fermentation of Lucerne incubated with equine faecal inocula. British Journal of Nutrition. 83: 771-782 (DOI: 10.1079/BJN20051561)</li>

				<li>10. Yanez, D., Moore-Colyer, M.J.S., Longland, A.C., Walsh, C., Bakewell, E., Kirk, A., Grime, E., Northover, A., Davies, D. R., Griffith, G. Newbold, C.J. (2004). Microbial counts in different sites of the gastro-intestinal tract of the horse. Reproduction, Nutrition Development, Supplement 1 S 12. Concerns and responses to food safety, health and environmental issues. 4th Joint INRA-RRI Symposium on Gut Microbiology, 21-24 June 2004, Clermont-Ferrand, France.</li>
				<li>9. Moore-Colyer, M.J.S. Longland, A.C.(2004) Exploiting dietary fibre in equid diets. Emerging Equine Science. BSAS publication no 32. Ed: J. Alliston, S. Chadd, A.Ede, A. Hemmings, J. Hyslop, A. Longland, H. Moreton and M. Moore-Colyer. Nottingham University Press. Pp 113-129.</li>
				<li>8. Moore-Colyer, M.J.S.; Morrow, H.J. and Longland, A.C. (2003) Mathematical modelling of digesta passage rate, mean retention time and in vivo apparent digestibility of two different lengths of hay and big bale grass silage in ponies. British Journal of Nutrition. 90: 109-118. (DOI 10.1079/BJN2003869)</li>
				<li>7. Moore-Colyer, M.J.S.; Hyslop, J.J.; Longland, A.C. and Cuddeford, D. (2002) The mobile bag technique as a method for determining the degradation of four botanically diverse fibrous feedstuffs in the small intestine and total digestive tract of ponies. British Journal of Nutrition. 88: 729-740. (DOI 1079/BJN2002734)</li>
				<li>6. Murray J., Longland, A.C. and Moore-Colyer, M. (2001) Chemical characterization and in vitro fermentation of high temperature dried alfalfa and grass hay. In Recent Advances in Equine Nutrition Ed Pagan and R.J.M Geor Kentucky Equine Research, 115-117</li>
				<li>5. Moore-Colyer, M. J. (2000) Dietary fibre for the performance horse, In Horserace Betting Levy Board: a report from a workshop on equine nutrition Equine Veterinary Education. 12(4):187-194</li>
				<li>4. Moore-Colyer, M.J.S. and Longland, A.C.L. (2000) Intakes and in vivo apparent digestibilities of four types of conserved grass forage by ponies. Animal Science. 71: 527-535. (ISSN number 1357-7298)</li>
				<li>3. Moore-Colyer, M.J.S.; Longland,A.C.; Hyslop,J. and Cuddeford, D.(2000) Intra-caecal fermentation parameters in ponies fed botanically diverse fibre feeds. Animal Feed Science and Technology. 84: 183-197. (ISSN number 0377-8401)</li>
				<li>2. Blackman, M. and Moore-Colyer, M.J.S. (1998) Hay for horses: the effects of three different wetting treatments on dust and mineral content. Animal Science. 66: 745-750. (ISSN number 1357-7298)</li>
				<li>1. Moore-Colyer, M.J.S. (1996) The effects of soaking hay fodder for horses on dust and mineral content. Animal Science. 63: 337-342. (ISSN number 1357-7298)</li>
			</ul>

			<p><strong>CONFERENCE PAPERS</strong></p>
			<ul>
				<li>Moore-Colyer, M.J.S., Longland, A.C., Hyslop, J.J. and Cuddeford, D. (1997) Degradation of four dietary fibre sources by ponies as measured by the mobile bag technique. Proceedings of Equine Nutrition and Physiology Society. Fort Worth Texas. May 1997</li>
				<li>Longland, A.C., Moore-Colyer, M.J.S., Hyslop, J.J., Dhanoa, M.S. and Cuddeford, D. (1997) Comparison of the in sacco degradation of the non-starch polysaccharide and neutral detergent fibre fractions of four sources of dietary fibre by ponies. Proceedings of Equine Nutrition and Physiology Society. Fort Worth Texas. May 1997</li>
				<li>Moore-Colyer, M.J.S. The degradation of organic matter and crude protein of four botanically diverse feedstuffs in the fore gut of ponies as measured by the mobile bag technique. Proceedings of British Society of Animal Science. Scarborough. March 1997.</li>
				<li>Moore-Colyer, M.J.S.; Longland,A.C., Hyslop,J. and Cuddeford, D. Degradation of protein and NSP from four botanically diverse fibres by ponies as measured by the mobile bag technique. Proceedings of British Society of Animal Science. Reading July 1997.</li>
				<li>Moore-Colyer, M.J.S. Dietary fibre in equine nutrition. Proceedings of British Society of Animal Science. Scarborough March 1998.</li>
				<li>Moore-Colyer, M.J.S. Dietary fibre in performance horse diets. H.B.L.B. Workshop in Equine Nutrition London. September 1998.</li>
				<li>Moore-Colyer, M.J.S., Longland, A.C., Hyslop,J. and Cuddeford, D In vivo apparent digestibility of proximate constituents and non-starch polysaccharides in ponies offered botanically diverse fibre-based diets. Proceedings of the British Society of Animal Science March 1999.</li>
				<li>Hyslop,J., McLean, B.M.L., Moore-Colyer, M.J.S.; Longland,A.C.;. and Cuddeford, D and Hollands, T. Measurement of caecal outflow rate in ponies using Chromium mordant feeds. Proceedings of the British Society of Animal Science March 1999.</li>
				<li>Morrow, H.J., Moore-Colyer, M.J.S. and Longland, A.C.L. The apparent digestibilities and rates of passage of two chop lengths of big-baled silage and hay in ponies. Proceedings of the British Society of Animal Science March 1999.</li>
				<li>Moore-Colyer, M.J.S and A.C. Longland (2001) The in vitro digestion of mature grass hay in the presence or absence of added nitrogen and sugar beet pulp by an equine faecal inoculum using the pressure transducer technique. Proceedings of the British Society of Animal Science March 2001.</li>
				<li>Moore-Colyer, M.J.S. and Longland, A.C. (2001) The effect of plain sugar beet pulp on the in vitro gas production and in vivo apparent digestibility of hay when offered to ponies. Proceedings of Equine Nutrition and Physiology Society. Lexington, Kentucky. June 2001</li>

				<li>Hale, C.E and Moore-Colyer, M.J.S. (2001) Voluntary food intakes and apparent digestibilities of hay, big-bale grass silage and red clover silage by ponies. Proceedings of Equine Nutrition and Physiology Society. Lexington, Kentucky. June 2001.</li>
				<li>Murray, J.M.D., Moore-Colyer, M.J.S., Longland, A.C. and Dunnett, C. (2002) The effect of sugar beet pulp on the nutritive value of high-temperature dried alfalfa for ponies. Proceedings of the British Society of Animal Science March 2002.</li>
				<li>Moore-Colyer, M.J.S., Longland, A.C. and Murray, J. (2003) Microbial activity and degradation capacity in 9 regions of the equid gut using the gas production technique. Proceedings of Equine Nutrition and Physiology Society Michigan June 2003.  </li>
				<li>Murray, J.M.D., Longland, A.C.L., Moore-Colyer, M.J.S. and Dunnett, C. (2003)The effect of diet and donor animal on the fermentative capacity of equine faecal inocula for use in in vitro digestibility determinations. Proceedings of the Equine Nutrition and Physiology Society Symposium. Michigan USA. June 2003.</li>
				<li>Hyslop, J.J McLean. B.L.M, and Moore-Colyer, M.J.S. (2003) Relationship between water holding capacity and fibre concentration in equine feeds. Proceedings of the Emerging Equine Science Conference, Cirencester, UK Sept 2003.</li>
				<li>Bice, R.K.T and Moore-Colyer, M.J.S. (2003) The effect of particle size on volatile fatty acid profiles obtained from an alfalfa and unmolassed sugar beet pulp diet following in vitro incubation with equine faeces. Proceedings of the Emerging Equine Science Conference, Cirencester, UK Sept 2003.</li>
				<li>Moore-Colyer, M.J.S. (2003) Exploiting dietary fibre in equine diets. Proceedings of the Emerging Equine Science Conference, Cirencester, UK Sept 2003.pp 20-22</li>
				<li>Ince, J., Longland, A.C., Cairns, A., Moore-Colyer, M.J.S. Characterisation of the WSC fraction of six species of temperate pasture grasses. Proceedings of the Emerging Equine Science Conference, Cirencester, UK Sept 2003.</li>
				<li>Moore-Colyer, M.J.S., Clercq, T., Julliand, V. and Drogoul, C. (2005) In vivo foregut digestion of starch based concentrate feeds in horses using the mobile bag technique. Proceedings of the Applying Equine Science Conference, Cirencester, Sept 2005.</li>
				<li>Moore-Colyer, M.J.S., Drogoul, C and Julliand, V. (2005) In vivo foregut digestion of protein from 6 fibre feeds in horses using the mobile bag technique. Proceedings of the Applying Equine Science Conference, Cirencester, Sept 2005.</li>
				<li>Ince, J.C., Longland, A.C., Moore-Colyer, M.J.S. and Harris, P. (2005) Effect of high or low water soluble carbohydrate perennial ryegrass (Lolium perenne) on lactate and pH when incubated in vitro with an equine hind-gut microbial inoculum. Proceedings of the Equine Science Society, Tuscon, Arizona, June 2005.</li>

				<li>Ince, J.C., Longland, A.C., Moore-Colyer, M.J.S. and Harris, P. (2005) Effect of inoculum source on fermentation parameters in vitro: incubation of perennial rye grass varieties (Lolium perenne) with microbial inocula from the caecum, right ventral colon or faeces of ponies. Proceedings of the Equine Science Society, Tuscon, Arizona, June 2005.</li>
				<li>Ince, J.C., Longland, A.C., Moore-Colyer, M.J.S. and Harris, P. (2005) In vitro fermentation of three species of fresh grass differing in water-soluble carbohydrate content with an equine faecal inoculum Proceedings of ENUCO Hannover, Germany, Sept 2005.</li>
				<li>Murray, J.M.D., Longland, A.C., Moore-Colyer, M.J.S. and Dunnett, C. (2005) The effect of enzyme treatment on the nutritive value of high-temperature dried Lucerne for ponies. Proceedings of ENUCO Hannover, Germany. Sept 2005.</li>
				<li>Murray, J.M.D., Longland, A.C., Moore-Colyer, M.J.S. and Dunnet, C. (2005) The effect of enzyme treatment on the nutritive value of high-temperature dried Lucerne for ponies. Pferdeheilkunde 21 41-42  </li>
				<li>Murray, J.M.D., Sanderson, R., Longland, A.C., Moore-Colyer, M.J.S. Hastie, P. and Dunnett, C. (2007) The application of mathematical models to assess the effect of enzyme treatment or sugar beet pulp on the rate of passage of ensiled lucerne in equids. Proceedings of ENUCO 2007.  </li>
				<li>Moore-Colyer, M.J.S. (2008) ‘Laminitis: the nutritionist’s perspective’ Proceedings of the Open College of equine Studies Equine Science Conference, Bury St Edmonds, UK Nov 2009.11-14.  </li>
				<li>Moore-Colyer, M.J.S. (2010) The importance of identifying and eliminating spores when dealing with the problem of poor performance in the race horse. Irish Thoroughbred Breeders Symposium, Kildare, Ireland, Jan 2010.</li>
				<li>Moore-Colyer, M.J.S. (2010) Lungs and gut: The dilemma of feeding hay to horses. Proceedings of the Open College of Equine Studies Conference, Bury St Edmonds, UK, March 2010.</li>
				<li>Pocock, L and Moore-Colyer, M.J.S. (2010) Conformation and its effect on laterality in the Thoroughbred racehorse. Proceedings of the British Society of Animal Science Conference, Belfast April 2010.</li>
				<li>Moore-Colyer, M.J.S. (2010) Investigation of the buffering action and fermentation activity of Aquacid, when incubated in vitro with fibre and concentrate diets European Workshop for Equine Nutrition, Cirencester, Sept 2010. The Impact of nutrition on the health and welfare of horses. EAAP publication No. 128. Ed Ellis, A., Longland, A.C., Coenen, M and Miraglia, N. p193-195</li>
				<li>Stockdale, C and Moore-Colyer, M.J.S (2010) Steaming hay for horses: The effect of three different treatments on the respirable particle numbers in hay treated in the Haygain steamer. European Workshop for Equine Nutrition, Cirencester, Sept 2010. The Impact of nutrition on the health and welfare of horses. EAAP publication No. 128. Ed Ellis, A., Longland, A.C., Coenen, M and Miraglia, N. p136-138</li>

				<li>Pocock, L and Moore-Colyer, M.J.S. (2010) Conformation and its effect on laterality in the Thoroughbred racehorse. Proceedings of the British Society of Animal Science Conference, Belfast April 2010.</li>
				<li>Moore-Colyer, M.J.S. (2011) Getting the most out of your feed. Proceedings of the Alltech International Conference on Exercise Physiology, Hartpury April 2011.</li>
				<li>Moore-Colyer, M.J.S. (2012) The nutritive value of fibre for racehorses. Irish Thoroughbred Breeders Expo. Leopardstown, Dublin, Ireland.</li>
				<li>Moore-Colyer, M.J.S. (2012) The benefits of quality fibre for racehorses. Irish Thoroughbred Breeders Expo. Leopardstown, Dublin, Ireland.</li>
				<li>Moore-Colyer, M.J.S and Payne, V. (2012) Palatability and ingestion behaviour of 6 polo ponies offered a choice of dry, soaked and steamed hay for 1 hour on three separate occasions. Proceedings of the British Society of Animal Science. Nottingham UK, April 2012.</li>
				<li>Longland, A.C., Ince, J.C., Moore-Colyer, M.J.S. and Harris, P.A. (2012) Degradation of grass and grass fructan by equine gastrointestinal digesta in vitro. In: Forages and grazing in horse nutrition. EAAP publication No. 132. Ed. M.Saastamoinen, M.J. Fradinho, A.S. Santos and N. Miraglia. Pp 107-109.</li>
				<li>Taylor, J. and Moore-Colyer, M.J.S. (2013) The effect of 5 different wetting treatments on the bacteria and mould concentrations in hay for horses. Proceedings of European Equine Health and Nutrition Congress, Ghent. Feb 2013</li>
				<li>Lewendon, L and Moore-Colyer, M.J.S. (2013). The effect of two short-term calming supplements on stress parameters in travelling horses. Proceedings of the Alltech UWE Hartpury Conference on The Role of Science and Business in Horse Health and Welfare, Hartpury March 2013.</li>
				<li>James, R., and Moore-Colyer, M.J.S. (2013) Hay for Horses: The Nutrient content of hay before and after steam treatment in a commercial hay steamer. Proceedings of the British Society of Animal Science. Nottingham UK, April 2013.</li>
				<li>Leggatt, P., and Moore-Colyer, M.J.S (2013) The effect of steam treatment on the bacteria, yeast and mould concentrations in haylage for horses. Proceedings of the British Society of Animal Science. Nottingham UK, April 2013.</li>
				<li>Stephenson, B. Hemmings, A. and Moore-Colyer, M.J.S. (2014). The use of eye blink rate and changes in behaviour as potential early indicators of pituitary par intermedia dysfunction in the horse. Proceedings of BSAS Annual Conference. Advances in Animal Biosciences: Science into Practice: Planning for Intensification. Nottingham April 2014 p 72.</li>
				<li>Longland A, Ince J, Newbold JC, Barfoot C, Moore-Colyer MJS, Kumbis K & Harris P (2014) Practical methods to reduce non-structural carbohydrate (NSC) intake in horses and ponies. Proceedings of Australasian Equine Society Symposium. Vol 5 p 7-8 </li>

				<li>Leggatt, P., and Moore-Colyer, M.J.S (2013) The effect of steam treatment on the bacteria, yeast and mould concentrations in haylage for horses. Proceedings of the British Society of Animal Science. Nottingham UK, April 2013.</li>
				<li>Moore-Colyer, M.J.S. and Taylor, J. (2014) Forage in the Stable – Techniques for reducing the respirable challenge and microbial content in hay. Proceedings of the Dorothy Russel Havemeyer Foundation IAD Workshop, Cabourg, France October 2014.</li>
				<li>Moore-Colyer. M.J.S. and Auger, E.J. (2014) The effect of stable design and management regime on the respirable particle concentrations in 2 different types of horse stabling. Proceedings of Equi-meeting Infrastructures Conference. Lion D’Angers. France October 2014.</li>
				<li>Moore-Colyer, M.J.S.; Hemmings, A and Hewer, N. (2014) The effect of ad libitum or restricted hay with or without Horslyx on the intake and switching behaviour of normal and crib biting horses. Proceedings of the 7th European Workshop on Equine Nutrition. Impact of nutrition on metabolism. Leipzig September 2014.</li>
				<li>Moore-Colyer, M.J.S.; Lumbis, K., Longland, A.C.and Harris, P.A. (2014) The effect of five different wetting treatments on the water soluble carbohydrate content and microbial concentration in hay for horses. Proceedings of the 7th European Workshop on Equine Nutrition. Impact of nutrition on metabolism. Leipzig September 2014.</li>
				<li>Moore-Colyer, M.J.S.; Muirhead, V. (2015) Managing the stable environment for the equine athlete – improving the hygienic quality of straw bedding. European Equine Health and Nutrition Congress, Bruges, Belgium March 2015.</li>
				<li>Moore-Colyer, M.J.S. A better way to feed the performance horse. Key note paper British Society of Animal Science . April 2015.</li>
				<li>Moore-Colyer, MJS A better way to feed the performance horse. Horses Inside Out Conference, Cirencester February 2016</li>
				<li>Williams, A., Moore-Colyer, MJS. Harris, PA. The effect of soaking on the populations of acidic bacteria found on UK meadow hay – possible implication for equine gastric ulceration Proceedings of the 8th European Workshop on Equine Nutrition, Dijon June 2016.</li>
				<li>Moore-Colyer, MJS, Crosthwaite, SK and Harris, PA. The effect of soaking on the bacterial profile of UK meadow and perennial rye grass (Lolium perenne) hay for horses Proceedings of the 8th European Workshop on Equine Nutrition, Dijon June 2016.</li>
				<li>Moore-Colyer, MJS and Jiang, C. Preliminary development of a dynamic gastric in vitro model for horses Proceedings of the 8th European Workshop on Equine Nutrition, Dijon June 2016.</li>

				<li>White S Moore-Colyer M, Coüetil L, Hannant D, Richard E, Marti E and Alcocer M. (2017) Development of a Multiple Protein Extract Microarray for Profiling AllergenSpecific Immunoglobulin E in Horses with Severe Asthma. Proceedings of the World Equine Airway Symposium, Copenhagen, July 2017.</li>
				<li>Moore-Colyer, MJS. (2017) Techniques for reducing the respirable challenge in hay. World Equine Airway Symposium, Copenhagen, July 2017. TEXT BOOKS</li>
				<li>Moore-Colyer, M.J.S. (2009) Equine Sports Nutrition. The Open College of Equine Studies. Bury St Edmonds, UK.</li>
				<li>Moore-Colyer, M.J.S. (2010) Advances in Equine Nutrition. The Open College of Equine Studies. Bury St Edmonds, UK.</li>
				<li>Moore-Colyer, M.J.S. (2011) Equine Locomotion. International Equine Institute, University of Limerick, Ireland.</li>
				<li>Moore-Colyer, M.J.S. (2012) Foundations of Equine Performance. International Equine Institute, University of Limerick, Ireland.</li>
				<li>Moore-Colyer, M.J.S (2015) Feeding for Performance In Williams J, and Evans D (editors) Training for Equestrian performance. Wageningen Academic Publishers. ISBN 978-90-8686-258-0. Pp221- 243.</li>
			</ul>
			`
		},
		{
			id: 'pamela-thomson-morales',
			name: 'PAMELA THOMSON MORALES',
			pre: 'DRA',
			description: 'Universidad Andrés Bello, Santiago de Chile',
			flagUrl: '/img/BANDERA-CHILE.png',
			cv: `${cvStyle}
			<p><strong>Prof. PAMELA THOMSON MORALES.</strong>
			<br>Médico Veterinario. Magíster en Ciencias Biológicas, Mención Microbiología. Doctora
			en Ciencias Biomédicas. La Dra. Thomson se tituló de Médico Veterinario en el año
			2002 y comenzó su especialización en Microbiología y Micología realizando un
			Magister en la Universidad de Chile, luego se trasladó a España para continuar con un
			Doctorado en Biomedicina, en la Universitat Rovira i Virgili. Extendió sus actividades de
			investigación realizando un post doctorado en la Universidad Católica de Chile,
			enfocando su trabajo en el microbioma intestinal humano. Perfeccionó estos
			conocimientos con una pasantía en Valencia en la fundación para el Fomento de la
			Investigación Sanitaria y Biomédica (FISABIO). Desde el año 2020, se incorporó a la
			Universidad Andrés Bello, donde participa como docente en asignaturas de pregrado
			como Agresión y Defensa Orgánica, Zoonosis y Seminario de Título. Coordina
			asignaturas de Microbiología Clínica, Inocuidad Alimentaria e Impacto en Una Salud
			en Medicina Veterinaria. Participa como docente de post grado, formando parte del
			cuerpo académico del Doctorado de Medicina de la Conservación. Es la fundadora y
			actual directora del laboratorio de Microbiología Clínica y Microbioma, ubicado en
			sede “Avda. Lo Pinto, Chicureo Colina” donde se llevan a cabo actividades de docencia,
			investigación y diagnóstico microbiológico, trabajando directamente con el hospital
			clínico veterinario.Es miembro de la Sociedad de Microbiología de Chile,
			miembro de la Sociedad Internacional de Microbiota. Editora en Frontiers
			Veterinary Science, en la sección Animal Nutrition and Metabolism y
			Editora en Frontiers in Microbiology, en la sección Microorganisms in
			Vertebrate Digestive Systems, entre otras. Recientemente comenzó a
			colaborar con Sporotrichosis group of the Mycotic Diseases Branch Teams
			of the Centers for Disease Control and Prevention (CDC) USA</p>

			<p><strong>ÁREAS DE INVESTIGACIÓN</strong>
			<br>Microbiología Clínica Veterinaria, Microbioma Animal, Resistencia a Antibióticos </p>

			<p><strong>PROYECTOS</strong></p>
			<ul>
				<li>Fondecyt Iniciación #11231174 2023 Metagenomic characterization of the antibiotic resistome and microbiome from samples obtained in healthy dogs and cats. Investigadora Responsable</li>
				<li>Evaluación del cambio en la composición, función y expresión génica del microbioma intestinal en perros, generados por el uso de diferentes grupos de antibióticos. Proyecto en ejecución: PAI #77190070. Investigadora Responsable.</li>
				<li>Detección del estado de portación de esporotricosis en garras de felinos provenientes de la ciudad de Santiago, Valdivia y Punta Arenas (IR: Pamela Fondos Científicos Purina 2023.Investigadora Responsable. (Co investigador: alumna Leslie Camila del Río)</li>
				<li>Caracterización genotípica de complejos clonales de Staphylococcuss pp. resistente a meticilina aislados de perros, gatos y humanos. Proyecto en ejecución: Fondos Científicos Purina 2022. Investigadora Responsable</li>
				<li>Detección de cepas de Staphylococcuss pp. resistentes a la meticilina provenientes de perros, gatos y humanos. Proyecto finalizado: Fondos Científicos Purina 2021. Investigadora Responsable.</li>
				<li>Evaluación del efecto de la sucralosa sobre la composición y función del microbioma intestinal en sujetos sanos. Proyecto finalizado: Fondecyt #3170609. Investigadora responsable <br>VER PUBLICACIONES CIENTÍFICAS Y PERFIL EN: <a href="https://researchers.unab.cl/es/persons/pamela-evelyn-thomson-morales">Portal de Investigadores Universidad Andrés Bello</a></li>
			</ul>

			<p><strong>PUBLICACIONES CIENTÍFICAS</strong></p>
			<ul>
				<li>Thomson, P. ,Carreño, N. & Núñez, A., 2023, Main mites associated with dermato pathiespresent in dogs and other members of the Canidae family: Open Veterinary Journal. 13, 2, p.131-14212 p.</li>
				<li>Thomson, P.,González, C.,Blank, O.,Ramírez, V.,Río, C.D.,Santibáñez, S.&Pena, P., feb.2023, Sporotrichosis Outbreak Due to Sporothrix brasiliensis in Domestic Cats in Magallanes, Chile: A One-Health-Approach Study: Journal of Fungi.9,2, 226.</li>
				<li>Núñez, A. H.,Hidalgo, F. G.,Morales, P. C.,Silva, V. E.,Thomson, P. E.&Castro, R.A.,2022, Antifungal susceptibility of Malassezia pachydermatis isolated from the external auditive conduct from dogs, in central Chile: Open Veterinary Journal. 12, 1, p.99-1046 p. </li>
				<li>Lara, F.,Castro, R. & Thomson, P.,2022, Changes in the gut microbiome and colic inhorses: Are they causes or consequences? : Open Veterinary Journal. 12, 2, p.242-2498p.</li>
				<li>Thomson P, Santibáñez R, Rodríguez-Salas C, Flores- Yañez C, Garrido D. Differences in the composition and predicted functions of the intestinal microbiome of obese and normal weight adult dogs. PeerJ. 2022 16;10: e12695.</li>
				<li>Lara F, Castro R, Thomson P.Changes in the gut microbiome and colic in horses: Are they causes or consequences? Open Vet J. 2022;12(2):242-249.</li>
				<li>Thomson P, García P, Miles J, Isla D, Yáñez C, Santibáñez R, Núñez A, Flores-Yáñez C, DelRío C, Cuadra F. Isolation and Identification of Staphylococcus Species Obtained fromHealthy Companion Animals and Humans. Vet Sci. 2022; 13;9(2):79.</li>
				<li>Santibáñez R, Lara F, Barros TM, Mardones E, Cuadra F, Thomson P. Ocular Microbiome in aGroup of Clinically Healthy Horses. Animals (Basel). 2022 7;12(8):943.</li>
				<li>Núñez F P, Quera R, Bay C, Thomson P. Fecal microbiota transplant, its usefulness beyondClostridioides difficile in gastrointestinal diseases. Gastroenterol Hepatol. 2022;45(3):223-230.</li>
				<li>Núñez AH, Hidalgo FG, Morales PC, Silva VE, Thomson P E, Castro RA. Antifungalsusceptibility of Malassezia pachydermatis isolated from the external auditive conduct from dogs, in central Chile. Open Vet J. 2022;12(1):99-104.</li>
				<li>Santibáñez R, Rodríguez-Salas C, Flores-Yáñez C, Garrido D, Thomson P. Assessment ofChanges in the Oral Microbiome That Occur in Dogs with Periodontal Disease. Vet Sci. 202127;8(12):291</li>
				<li>Thomson P, Núñez P, Quera R,Bay C. Gastrointestinal microbiome, what is behind faecalmicrobiota transplantation? New Microbes New Infect. 2021 13; 42:100898.</li>
				<li>Thomson P, Lara P, Maier L, Ledesma P, López O, Moreira R. Detección de Helicobacter sppen la mucosa gástrica de felinos domésticos clínicamente sanos mediante la prueba rápida de ureasa e histopatología. RIVEP 2020 31, 4, e19039.</li>
				<li>Medina DA, Li T, Thomson P, Artacho A, Pérez-Brocal V, Moya A. Cross-Regional View ofFunctional and Taxonomic Microbiota Composition in Obesity and Postobesity. TreatmentShows Country Specific Microbial Contribution. Front Microbiol. 2019. 17; 10:2346.</li>
				<li>Thomson P, Santibáñez R, Aguirre C, Galgani J, Garrido D. Short-Term Impact of Sucralose Consumption on the Metabolic Response and Gut Microbiome of Healthy Adults. 2019 Br J Nutr. 28;122(8):856-862</li>
				<li>Ruiz A, Medina DA, Maier L, Thomson P. Dermatophytosis in domestic cats (Felis catus)positive to retrovirus. Rev RIVEP. 2019. 30; 2: 902-907.</li>
				<li>Pérez- Cantero A, Thomson P, Paredes K, Guarro J, CapillaJ. Antifungal susceptibility of Saccharomyces cerevisiae and therapy in a murine model of disseminated infection. RevIberoam Micol. 2019; 36 (1):37-40 </li>

				<li>Thomson P, Medina D. A., Ortuzar V, Gotteland M, Garrido G. Anti-inflammatory effect ofmicrobial consortia during the consumption of dietary polysaccharides. Food Research Inter.2018; 109: 14-23.</li>
				<li>Thomson P. Monsalves P, Maier L, Rojas M. Dermatophyte colonization in rabbits kept in petstores of Santiago of Chile. Rev. MVZ Córdoba. 2017; 22 (3):6334-6338.</li>
				<li>Medina DA, Pinto F, Ovalle A, Thomson P,Garrido D. Prebiotics Mediate MicrobialInteractions in a Consortium of the Infant Gut Microbiome. Int J Mol Sci. 2017; 4;18 (10).</li>
				<li>Thomson P, Medina DA, Garrido D. Human milk oligosaccharides and infant gutBifidobacteria: Molecular strategies for their utilization. Food Microbiol (2018), doi:10.1016/j.fm.2017.09.001</li>
				<li>Thomson P, López-Fernández L, Guarro J, Capilla J. Virulence and antifungal therapy ofmurine disseminated infection by Rhodotorula mucilaginosa. Diagn Microbiol Infect Dis. 2017;89(1):47-51.</li>
				<li>Thomson P, Mayayo E, López-Fernández L, Guarro J, Capilla J. Combined antifungaltherapy against systemic murine infections by rare Cryptococcus species. Mycoses. 2017;60(2):112-117.</li>
				<li>Siqueira JPZ, SuttonDA, García D, Thomson P, Wiederhold N, Guarro J. Species diversity of Aspergillus section versicolores in clinical samples and antifungal susceptibility. Fungal Biol.2016;120 (11):1458-1467</li>
				<li>Thomson P, Guarro J, Mayayo E, Capilla J. Efficacy of posaconazole in a murine model of systemic infection by Saprochaete capitate. Antimicrob Agents Chemother. 2015; 59: 7477-7482.</li>
				<li>Thomson P, Monsalves P, Maier L, Silva V. Dermatophyte colonization on guinea pigs (Caviaporcellus) kept in pet stores. First report from Santiago, Chile. Rev Iberoam Micol. 2015; 32:103-105.</li>
				<li>Thomson P, Martínez M. Clostridium difficile: un patógeno emergente en MedicinaVeterinaria. REDVET. 2012; 13: 3 11</li>
				<li>Thomson P, Anticevic S, Rodríguez H, Silva V. Actividad antifúngica y perfil de seguridad del producto natural derivado del aceite de maravilla ozonizado (AMO3) en dermatofitos. Rev. Chil. Infectol. 2011; 28: 512-519.</li>
				<li>Thomson P, Miranda Gabriel, Silva Víctor. Linfadenitis canina producida por Cryptococcusneoformans. Primer caso en Chile. Rev Iberoam Micol. 2006; 23: 238-240.–Silva V, Thomson P, Maier L, Anticevic S. Infección y colonización por dermatofitos encánidos del área Sur de Santiago, Chile. Rev Iberoam Micol. 2003; 20: 145-148 </li>

			</ul>

			<p><strong>CAPÍTULOS DE LIBRO</strong></p>
			<ul>
				<li>Pamela Thomson, Daniel Garrido. Chapter 5: Human milk oligosaccharides and healthpromotion through the gut microbiome. EN: Dairy in Human Health and Disease across theLifespan. Editors Ronald Ross Watson, Robert J Collier, Victor Preedy. USA. 2017.</li>
				<li>Pamela Thomson. Micosis subcutáneas y profundas. EN: Tópicos de dermatología en pequeños animales. Autores: Liliana Maier y María Calderón. Ediciones Universidad Santo</li>
			</ul>
			`
		},
		{
			id: 'peter-huntington',
			name: 'PETER HUNTINGTON',
			pre: 'DR',
			description: 'Kentucky Equine Research, Australia',
			flagUrl: '/img/BANDERA-AUS.png',
			cv: `${cvStyle}
			<ul>
				<li>El Dr. Peter Huntington obtuvo su título de veterinario en la Universidad de Melbourne en 1981 y luego trabajó en práctica equina en Berwick, Victoria. Se unió al Departamento de Agricultura (Victoria) como el oficial veterinario especializado en caballos. Mientras estuvo en el Departamento de Agricultura, realizó investigaciones sobre la nutrición de los caballos.</li>
				<li>El Dr. Huntington es profesor externo y examinador en el programa de Ciencias Veterinarias de la Universidad de Melbourne, y ocupa numerosos cargos en la industria equina. Fue presidente y editor de la Asociación Veterinaria Equina Australiana y ha sido miembro del Consejo de la Industria Equina Australiana durante varios años. En 1993 se unió a Rhone-Poulenc Animal Nutrition (RPAN) como Director de Nutrición Equina para liderar su división de nutrición equina. Esto inició una relación con Kentucky Equine Research, que proporcionó servicios de consultoría a RPAN. En 1999, Kentucky Equine Research estableció una operación en Australasia con el Dr. Huntington como Director de Nutrición Equina.</li>
				<li>El Dr. Huntington viaja ampliamente para asesorar a propietarios y administradores de caballos sobre nutrición equina y para dar conferencias sobre el tema. Es autor del popular libro "Horse Sense - The Guide to Horse Care in Australia and New Zealand” (segunda edición publicada en 2005) y es un respetado autor de numerosos artículos y trabajos sobre diversos temas relacionados con la nutrición equina.</li>
			</ul>
			`
		},
		{
			id: 'ramiro-calderon-villa',
			name: 'RAMIRO CALDERÓN VILLA',
			pre: 'DR',
			description: 'FMVZ-UNAM',
			flagUrl: '/img/BANDERA-MEXICO.png',
			cv: `${cvStyle}
			<p>Ramiro Calderón Villa realizó sus estudios en la Facultad de Medicina Veterinaria y
			Zootecnia (FMVZ) de la UNAM. Tiene 42 años de experiencia en las áreas de cirugía,
			nutrición y comportamiento equino. Desde hace 37 años, es docente en el
			Departamento de Equinos de la FMVZ-UNAM y del cual fue jefe en el periodo 1996-2001.
			Imparte las asignaturas del Ciclo Profesional de la licenciatura en MVZ de Práctica de
			Medicina y Zootecnia para Équidos I y Práctica de Cirugía y Anestesia en Équidos. El Dr.
			Ramiro Calderón Villa presidió la Asociación Mexicana de Médicos Veterinarios
			Especialistas en Equinos A.C. en el bienio 2012-2013. Participa como tutor de tesis de
			licenciatura y especialidad. Ha organizado aproximadamente 400 cursos relacionados
			con las Ciencias Equinas, además de participar como ponente en foros nacionales e
			internacionales</p>
			`
		},
		{
			id: 'santiago-garcia-pasquel',
			name: 'SANTIAGO GARCÍA PASQUEL',
			pre: 'DR',
			description: 'Universidad del Valle de México',
			flagUrl: '/img/BANDERA-MEXICO.png',
			cv: `${cvStyle}
			<p><strong>DR. SANTIAGO GARCÍA PASQUEL</strong></p>

			<p><strong>EDUCACIÓN</strong></p>
			<ul>
				<li>Licenciatura en Medicina Veterinaria y Zootecnia por la FMVZ-UNAM.</li>
				<li>Internado en Medicina y Cirugía de Équidos en el Hospital de Equinos de Chino Valley en California 2007.</li>
				<li>Maestría en Ciencias por la Universidad del Estado de Michigan en el 2012.</li>
				<li>Entrenamiento en cuidado crítico y emergencias en équidos por la Universidad de Pennsylvania en el 2012.</li>
				<li>Director del Hospital de Équidos de la UVM.</li>
			</ul>

			<p><strong>EXPERIENCIA PROFESIONAL</strong></p>
			<ul>
				<li>Jefe del Departamento de Tecnologías de la Educación, docente y clínico del Hospital del Équidos para la UNAM en el 2014. </li>
				<li>Ha desarrollado varios proyectos para la aplicación de nuevas tecnologías a la medicina animal.</li>
				<li>Ponente en diversos congresos.</li>
				<li>Actualmente es el Coordinador de la Carrera de Medicina.</li>
				<li>Veterinaria y Zootecnia de la Universidad del Valle de México Campus.</li>
				<li>Sur Sede Coyoacán de la CDMX.</li>
			</ul>

			<p><strong>PUBLICACIONES RECIENTES</strong></p>
			<ul>
				<li>Autor del libro: “Manual de Neonatología Equina” publicado por la editorial Intermedia (Argentina) </li>
			</ul>
			`
		},
		{
			id: 'silvia-elena-buntinx-dios',
			name: 'SILVIA ELENA BUNTINX DIOS',
			pre: 'DRA',
			description: 'FMVZ-UNAM',
			flagUrl: '/img/BANDERA-MEXICO.png',
			cv: `${cvStyle}
			<p>Dra. Silvia Elena Buntinx Dios es Médico Veterinario Zootecnista por la Facultad
			de Medicina Veterinaria y Zootecnia (FMVZ) de la UNAM y obtuvo los grados de
			M.Sc. y Ph.D. en Nutrición de North Carolina State University. La Dra. Buntinx
			tiene 23 años de antigüedad académica en la UNAM, en la Facultad de Medicina
			Veterinaria y Zootecnia, donde labora en el Departamento de Nutrición Animal y
			Bioquímica. Es Profesor Titular “A”, tiempo completo, definitivo; ha impartido las
			cátedras a nivel de licenciatura de Nutrición y Alimentos y Alimentación Animal
			(materia que actualmente coordina) y a nivel de posgrado, de Fisiología Digestiva
			de los Animales, Fisiología Gastrointestinal de los Rumiantes, Metabolismo
			Energético y de Compuestos Nitrogenados y Temas Selectos de Alimentación.
			Fue Secretaria General de la FMVZ durante el periodo de marzo 2005-abril 2009 y
			Jefa del Departamento de Publicaciones y Directora de la revista Veterinaria
			México OA durante el periodo abril 2012-abril 2016. En mayo de 2016 recibió el
			Premio “Manuel Chavarría Chavarría” como mejor profesora de tiempo completo
			del ciclo intermedio de la carrera durante el periodo escolar de 2015.</p>
			`
		},
		{
			id: 'tamara-tadich-gallo',
			name: 'TAMARA TADICH GALLO',
			pre: 'DRA',
			description: 'Universidad Austral de Chile',
			flagUrl: '/img/BANDERA-CHILE.png',
			cv: `${cvStyle}
			<p>Tamara Tadich Gallo es académica del Instituto de Ciencia Animal de la
			Universidad Austral de Chile. Tamara es Médico Veterinario con un Master of
			Science in Equine Science de la Universidad de Edimburgo, Escocia; y un
			Doctorado en Ciencias Veterinarias de la Universidad Austral de Chile. Realiza
			docencia de pre y postgrado en los temas de bienestar animal y conducta
			aplicada en équidos, áreas en las que también realiza su investigación y que han
			resultado en más de 40 publicaciones científicas y 10 capítulos de libros.
			Pertenece al comité de bienestar equino tanto de la Asociación Chilena de
			Veterinaria Equina y de la Federación Iberoamericana de Asociaciones de
			Veterinarios de Équidos (FIAVE). Además, es co-fundadora de la fundación para
			la promoción del bienestar de equinos de trabajo Equi-Par.</p>
			`
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
					contents: `
						<p>PRESENTADOR: <strong>IA OSCAR MARTÍNEZ GUAJARDO</strong>
							<br>GRUPO NUTEC
							<br>
						</p>`,
					cols: 1,
					startHour: '',
					endHour: '',
					extraContent: ``
				},
				{
					contents: `
						<p>PALABRAS DEL <strong>DR. GONZALO VILLAR PATIÑO</strong>
							<br>DIRECTOR DE INVESTIGACIÓN, GRUPO NUTEC.
						</p>
						${programsStyle}`,
					cols: 1,
					startHour: '08:50',
					endHour: '08:55',
					extraContent: ``
				},
				{
					contents: `<p>PALABRAS DEL <strong>ING. JÉRÉMIE LARCHER</strong>
						<br>CEO, GRUPO NUTEC.</p>`,
					cols: 1,
					startHour: '08:55',
					endHour: '09:00',
					extraContent: ``
				},
				{
					contents: `<p>PALABRAS DEL <strong>MVZ CERT ROBERTO SOLÍS JAQUEZ</strong>
						<br>PRESIDENTE DE LA ASOCIACIÓN MEXICANA DE MÉDICOS VETERINARIOS
						<br>ESPECIALISTAS EN EQUINOS A.C.</p>`,
					cols: 1,
					startHour: '09:00',
					endHour: '09:10',
					extraContent: ``
				},
				{
					contents: `<p>PALABRAS DE LA <strong>DRA. GABRIELA GIOCONDA REZA BORJA</strong>
						<br>RECTORA DE LA UNIVERSIDAD DEL VALLE DE MÉXICO, CAMPUS SUR, CDMX.</p>`,
					cols: 1,
					startHour: '09:10',
					endHour: '09:20',
					extraContent: ``
				},
				{
					contents: `<p>PALABRAS DEL <strong>DR. CARLOS GUILLERMO GUTIÉRREZ AGUILAR</strong>
						<br>DIRECTOR DE LA FACULTAD DE MEDICINA VETERINARIA Y ZOOTECNIA
						<br><strong>INAUGURACIÓN</strong></p>`,
					cols: 1,
					startHour: '09:20',
					endHour: '09:30',
					extraContent: ``
				},
				{
					contents: `
						<p>
							<strong>SESIÓN 1: APARATO DIGESTIVO: EVOLUCIÓN, MICROBIOMA Y DESÓRDENES DIGESTIVOS</strong>
							<br>
							<br><p>MODERADORA: <strong>DRA. MARÍA MASRI DABA</strong>
							<br>DEPARTAMENTO DE MEDICINA, CIRUGÍA Y ZOOTECNIA PARA
							<br>ÉQUIDOS, FMVZ-UNAM
						</p>`,
					cols: 1,
					startHour: '',
					endHour: '',
					extraContent: ``
				},
				{
					contents: `
						
						<p>
							<strong>DR. MARIANO HERNÁNDEZ GIL</strong>
							<br>DEPTO. MEDICINA, CIRUGÍA Y ZOOTECNIA DE
							<br>ÉQUIDOS. FMVZ-UNAM
						</p>`,
					cols: 2,
					extraContent: '<p>NUTRICIÓN EVOLUTIVA DEL CABALLO</p>',
					startHour: '09:45',
					endHour: '10:30'
				},
				{
					contents: `<p><strong>DRA. WENDY PEARSON</strong>
						<br>DEPTO. BIOCIENCIA ANIMAL. UNIVERSIDAD
						<br>
						<br>DE GUELPH. ONTARIO CANADÁ</p>`,
					cols: 2,
					extraContent: `<p>INFLUENCIA DE LA NUTRICIÓN EN EL SÍNDROME DEL INTESTINO PERMEABLE</p>`,
					startHour: '10:30',
					endHour: '11:15'
				},
				{
					contents: `<p><strong>RECESO</strong></p>`,
					cols: 1,
					startHour: '11:15',
					endHour: '11:25'
				},
				{
					contents: `<p><strong>DRA. PAMELA THOMSON</strong>
						<br>LABORATORIO DE MICROBIOLOGÍA CLÍNICA Y
						<br>MICROBIOMA, ESCUELA DE MEDICINA
						<br>VETERINARIA, FACULTAD DE CIENCIAS DE LA VIDA,
						<br>UNIVERSIDAD ANDRÉS BELLO, SANTIAGO, CHILE</p>`,
					cols: 2,
					extraContent: `<p>CAMBIOS EN EL MICROBIOMA: ¿CAUSA O CONSECUENCIA DE LOS CÓLICOS?</p>`,
					startHour: '11:25',
					endHour: '12:10'
				},
				{
					contents: `<p><strong>DRA. GULSAH KAYA KARASU</strong>
						<br>UNIVERSIDAD DE CIENCIAS APLICADAS VAN
						<br>HALL LARENSTEIN. VELP, PAÍSES BAJOS</p>`,
					cols: 2,
					extraContent: `<p>TRANSICIONES DIETÉTICAS HACIA UNA ALIMENTACIÓN SOSTENIBLE PARA CABALLOS</p>`,
					startHour: '12:10',
					endHour: '12:55'
				},
				{
					contents: `<p><strong>PREGUNTAS Y RESPUESTAS</strong>`,
					cols: 1,
					extraContent: '',
					startHour: '12:55',
					endHour: '13:15'
				},
				{
					contents: `
						<p>
							<strong>SESIÓN 2: ALIMENTOS Y NECESIDADES DE NUTRIENTES</strong>
							<br>
							<br>MODERADORA: <strong>DRA. MYRIAM BOETA ACOSTA</strong>
							<br>DEPARTAMENTO DE REPRODUCCIÓN. FMVZ-UNAM</p>
						</p>`,
					cols: 1,
					extraContent: ``,
					startHour: '',
					endHour: ''
				},
				{
					contents: `<p><strong>DRA. MERIEL JEAN MOORE-COLYER</strong>
						<br>CONSULTORA INDEPENDIENTE. REINO UNIDO</p>`,
					cols: 2,
					extraContent: `<p>FORRAJE: DEL HENOBIOMA A LA SALUD DEL CABALLO</p>`,
					startHour: '13:15',
					endHour: '14:00'
				},
				{
					contents: `<p><strong>DR. ELÍAS VELÁZQUEZ CANTÓN</strong>
						<br>GRUPO NUTEC</p>`,
					cols: 2,
					extraContent: `<p>EL AGUA ES UN NUTRIENTE ESENCIAL</p>`,
					startHour: '14:00',
					endHour: '14:45'
				},
				{
					contents: `<p><strong>PREGUNTAS Y RESPUESTAS</strong></p>`,
					cols: 1,
					extraContent: ``,
					startHour: '14:45',
					endHour: '15:05'
				},
				{
					contents: `<p><strong>RECESO</strong>`,
					cols: 1,
					extraContent: '',
					startHour: '15:05',
					endHour: '16:00'
				},
				{
					contents: `
						<p>
							<strong>SESIÓN 3: ALIMENTACIÓN PARA LA VIDA: LA YEGUA Y SU POTRO</strong>
							<br>
							<br>MODERADORA: <strong>DRA. ANA CELIA GÓMEZ CAMPOS</strong>
							<br>GRUPO NUTEC</p>
						</p>`,
					cols: 1,
					extraContent: '',
					startHour: '',
					endHour: ''
				},
				{
					contents: `
						<p>
							<strong>DR. RAMIRO CALDERÓN VILLA</strong>
							<br>DEPTO. MEDICINA, CIRUGÍA Y ZOOTECNIA
							<br>DE ÉQUIDOS. FMVZ-UNAM
						</p>`,
					cols: 2,
					extraContent: `<p>ALIMENTACIÓN Y DESÓRDENES DIGESTIVOS</p>`,
					startHour: '16:00',
					endHour: '16:50'
				},
				{
					contents: `<p><strong>DR PETER HUNTINGTON</strong>
						<br>KENTUCKY EQUINE RESEARCH, AUSTRALIA</p>`,
					cols: 2,
					extraContent: `<p>LA ALIMENTACIÓN DE LA YEGUA GESTANTE Y LACTANTE</p>`,
					startHour: '16:50',
					endHour: '17:40'
				},
				{
					contents: `<p><strong>PREGUNTAS Y RESPUESTAS</strong></p>`,
					cols: 1,
					extraContent: '',
					startHour: '17:40',
					endHour: '18:00'
				}
			]
		},
		{
			date: `<p><strong>VIERNES 26</strong> DE ABRIL</p>`,
			events: [
				{
					contents: `
						<p>
							<strong>SESIÓN 4: ALIMENTACIÓN DEL POTRO</strong>
							<br>
							<br>MODERADORA: <strong>DRA. GABRIELA QUIJANO MONTOYA</strong>
							<br>REPRODUCCIÓN EQUINA VILLARAÑA
						</p>
					`,
					cols: 1,
					extraContent: '',
					startHour: '',
					endHour: ''
				},
				{
					contents: `
						<p>
							<strong>DR. CHRIS ROGERS</strong>
							<br>ESCUELA DE VETERINARIA, UNIVERSIDAD
							<br>DE MASSEY, NUEVA ZELANDA
						</p>`,
					cols: 2,
					startHour: '08:15',
					endHour: '09:00',
					extraContent: `<p>RESILIENCIA DE LA MICROBIOTA FECAL EN CABALLOS PURA SANGRE ESTABULADOS DESPUÉS DE UNA TRANSICIÓN ALIMENTARIA ABRUPTA DE PASTOS RECIÉN CORTADOS A TRES DIETAS A BASE DE FORRAJES</p>`
				},
				{
					contents: `<p><strong>DR. SANTIAGO GARCÍA PASQUEL</strong></p>`,
					cols: 2,
					startHour: '09:00',
					endHour: '09:45',
					extraContent: `<p>MADURACIÓN DEL SISTEMA DIGESTIVO DEL NEONATO</p>`
				},
				{
					contents: `<p><strong>DRA. ADRIANA YOLANDA DÍAZ ARCHUNDIA</strong>
						<br>FACULTAD DE MEDICINA VETERINARIA Y
						<br>ZOOTECNIA, UAEMEX</p>`,
					cols: 2,
					startHour: '09:45',
					endHour: '10:30',
					extraContent: `PROBLEMAS NUTRICIONALES EN LOS POTROS DESTETADOS Y HASTA EL AÑO DE EDAD`
				},
				{
					contents: `<p><strong>DRA. KATHLEEN CRANDELL</strong>
						<br>KENTUCKY EQUINE RESEARCH, E.U.</p>`,
					cols: 2,
					startHour: '10:30',
					endHour: '11:15',
					extraContent: `NECESIDADES NUTRIMENTALES Y PRÁCTICAS DE ALIMENTACIÓN PARA UN DESTETE Y CRECIMIENTO EXITOSOS`
				},
				{
					contents: `<p><strong>PREGUNTAS Y RESPUESTAS</strong></p>`,
					cols: 1,
					startHour: '11:15',
					endHour: '11:35',
					extraContent: ``
				},
				{
					contents: `<p><strong>RECESO</strong></p>`,
					cols: 1,
					extraContent: '',
					startHour: '11:35',
					endHour: '11:45'
				},
				{
					contents: `
						<p>
							<strong>SESIÓN 5: BIENESTAR ANIMAL, LA BUENA ALIMENTACIÓN</strong>
							<br>
							<br>MODERADORA: <strong>DRA. MARÍA FERNANDA VÁZQUEZ CARRILLO</strong>
							<br>DEPARTAMENTO DE NUTRICIÓN ANIMAL Y BIOQUÍMICA. FMVZ-UNAM
						</p>`,
					cols: 1,
					startHour: '',
					endHour: '',
					extraContent: ``
				},
				{
					contents: `<p><strong>DRA. TAMARA TADICH</strong>
						<br>INSTITUTO DE CIENCIA ANIMAL.
						<br>UNIVERSIDAD AUSTRAL DE CHILE.</p>`,
					cols: 2,
					extraContent: `<p>CÓMO VALORAR EL BIENESTAR EN LOS CABALLOS, CONFINAMIENTO VS PASTOREO</p>`,
					startHour: '11:45',
					endHour: '12:30'
				},
				{
					contents: `<p><strong>DRA. LUCÍA PÉREZ MANRIQUE</strong>
						<br>DEPTO. ETOLOGÍA, FAUNA SILVESTRE Y
						<br>ANIMALES DE LABORATORIO</p>`,
					cols: 2,
					extraContent: `<p>EFECTO DE LA ALIMENTACIÓN EN EL BIENESTAR DEL CABALLO</p>`,
					startHour: '12:30',
					endHour: '13:15'
				},
				{
					contents: `<p><strong>DRA. MARÍA ESTHER ORTEGA CERRILLA</strong>
						<br>COLEGIO DE POSTGRADUADOS,
						<br>MONTECILLO MÉXICO</p>`,
					cols: 2,
					extraContent: `<p>USO DE ACEITES ESENCIALES EN CABALLOS</p>`,
					startHour: '13:15',
					endHour: '14:00'
				},
				{
					contents: `<p><strong>PREGUNTAS Y RESPUESTAS</strong></p>`,
					cols: 1,
					extraContent: ``,
					startHour: '14:00',
					endHour: '14:20'
				},
				{
					contents: `<p><strong>RECESO</strong></p>`,
					cols: 1,
					extraContent: '',
					startHour: '14:20',
					endHour: '15:30'
				},
				{
					contents: `
					<p>
						<strong>SESIÓN 6: A SIETE AÑOS DEL NAEQUINA</strong>
						<br>
						<br>MODERADORA: <strong>DRA. AURORA H. RAMÍREZ PÉREZ</strong>
						<br>DEPARTAMENTO DE NUTRICIÓN ANIMAL Y BIOQUÍMICA. FMVZ-UNAM.
					</p>`,
					cols: 1,
					extraContent: '',
					startHour: '',
					endHour: ''
				},
				{
					contents: `<p><strong>DRA. SILVIA E. BUNTINX DIOS</strong>
						<br>DEPARTAMENTO DE NUTRICIÓN ANIMAL
						<br>Y BIOQUÍMICA. FMVZ-UNAM</p>`,
					cols: 2,
					extraContent: `<p>RELACIÓN EQUINO-ALIMENTO</p>`,
					startHour: '15:30',
					endHour: '16:15'
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
	index: '/en',
	speakersPath: '/en/speakers',
	cvText: 'VIEW CV',
	availableTicketsText: 'places available',
	eventBriteBtnText: 'REGISTRATION CLOSED',
	eventLinkText: 'CLICK TO CONNECT TO THE EVENT',
	timezoneText: 'CDMX ZONE',
	lang: 'en',
	switchText: 'Cambiar a Español',
	flagUrl: '/img/BANDERA-MEXICO.png',
	header: {
		contactButton: 'CONTACT',
		programsText: 'PROGRAM',
		speakersText: 'SPEAKERS'
	},
	jumbotron: {
		videoTitles: {
			conferences: 'CONFERENCES',
			roundTables: 'ROUND TABLE',
			ceremonies: 'CEREMONIES'
		},
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
			description: 'Scientific Director of Grupo Nutec',
			flagUrl: '/img/BANDERA-MEXICO.png',
			cv: `${cvStyle}
				<ul>
					<li>Veterinary Zootechnician from UNAM (1968-1972).</li>
					<li>Recognized career in Latin America in animal nutrition.</li>
					<li>Co-founder and President of the Nutec Board of Directors.</li>
					<li>Scientific Director of Nutec Group.</li>
					<li>Honored by AMVEC National (2017).</li>
				</ul>
			`
		},
		{
			id: 'wendy-pearson',
			name: 'WENDY PEARSON',
			pre: 'DR',
			description: 'University of Guelph',
			flagUrl: '/img/BANDERA-CANADA.png',
			cv: `${cvStyle}
			<p>
				Dr. Wendy Pearson is an Associate Professor in the Department of Animal
				Biosciences at the University of Guelph, Canada.
				She completed her undergraduate studies in Animal Science, holds a Master of
				Science in Nutritional Toxicology, and a Doctorate in Biomedical Toxicology from
				the University of Guelph, Canada.
				Dr. Pearson conducts research on veterinary nutraceuticals and
				pharmaceuticals, focusing on the treatment of inflammation in horses through clinical
				nutrition and dietary management.
				At the Milton Equine Hospital, she develops nutritional and dietary strategies to
				improve horse health, as well as clinical trials with
				horses suffering from arthritis, a
				common condition that occurs at an early age in racehorses.
				Currently, she is conducting in vitro research on plant-based dietary interventions
				to address joint inflammation issues. She also conducts research on plant-based
				anti-inflammatory remedies for use in the trachea and stomach.
			</p>

			<p>
				For her research projects, she receives funding from the Ontario Ministry of
				Agriculture, Food and Rural Affairs, the Ontario Racing Industry Association, the
				Canadian Ginseng Research Foundation, the Howard Webster Foundation, and
				the National Research Council.
				She is the first author of several articles published in indexed journals.
				Dr. Pearson collaborates in mentoring her students, supporting their projects,
				encouraging teamwork, developing new skills, and enhancing their leadership abilities.
			</p>
			`
		},
		{
			id: 'kathleen-crandell',
			name: 'KATHLEEN CRANDELL',
			pre: 'DR',
			description: 'Kentucky Equine Research, USA',
			flagUrl: '/img/BANDERA-EUA.png',
			cv: `${cvStyle}
			<p>
				Dr. Kathleen Crandell completed her master’s studies in Equine Nutrition and
				Exercise Physiology at Virginia Polytechnic Institute; she pursued her doctoral
				studies in Equine Nutrition and Reproduction at Virginia Polytechnic Institute. She served as an
				advisor at the Agriculture Research and Extension Center at "Virginia Tech Middleburg," where she established
				the research center and reproduction program, overseeing more than 100 Thoroughbred horses. Additionally,
				along with her husband, she started a Thoroughbred and Arabian horse breeding program independently.
			</p>

			<p>
				She has been a consultant and part of the staff at Kentucky Equine Research
				(KER) for 20 years, where she was responsible for national and international
				nutritional support for KER's commercial partners in diet formulation, supporting
				horse feed packaging production, and managing sales staff for KER products. She
				is a professional advisor in individual horse and farm nutrition programs, catering to
				top competitors in the United States.
			</p>

			<p>
				Dr. Crandell has been a speaker at various seminars for both owners and the
				scientific community worldwide. During her time at KER, she has published
				numerous articles on equine nutrition on equinews.com (a specialized horse
				nutrition website), authored chapters in books, scientific journals, and popular
				magazines.
			</p>

			<p>
				Currently, she is also an instructor at the University of Guelph, Ontario, Canada,
				delivering lectures in Equine Nutrition: "Advanced Equine Health through Nutrition,"
				as well as topics related to diseases or nutritional disorders. She has been
				awarded three times by H. Daniels Fellowships at the National Sporting Library in
				Middleburg, Virginia, USA, for her efforts in studying perspectives on equine
				nutrition and laminitis. One of her favorite hobbies is horseback riding, an activity
				she has been engaged in for over 25 years, competing in Endurance; she currently
				rides her 4 Arabian horses.
			</p>
			`
		},
		{
			id: 'adriana-yolanda-diaz-archundia',
			name: 'ADRIANA YOLANDA DÍAZ ARCHUNDIA',
			pre: 'DR',
			description: 'UAEMEX',
			flagUrl: '/img/BANDERA-MEXICO.png',
			cv: `${cvStyle}
			<p><strong>Academic Information</strong></p>
			<ul>
				<li>Professional Certification CONCERVET Equine Area.</li>
				<li>Master's Degree in Agricultural Sciences and Natural Resources. Research Line: Animal Health, Area: Equines FMVZ-UAEM.</li>
				<li>Specialization in Medicine and Surgery in Equids Period 2008-2009 FMVZ-UNAM.</li>
				<li>Bachelor's Degree: Veterinary Medicine and Animal Husbandry Period 1997-2004 FMVZ-UAEM.</li>
			</ul>
			
			<p><strong>Work Experience</strong></p>
			<ul>
				<li>Private Equine Medicine Clinic Period 2004-present.</li>
				<li>Full-time Professor (PTC-B) FMVZ-UAEM Period 2011-present.</li>
				<li>Member of the Equine Area Certification Committee CONCERVET Period 2014-present.</li>
				<li>Head of Surgery Area FMVZ UAEMex Period 2020-present.</li>
				<li>Clinical-Responsible for Internal Medicine Area in Equines at Veterinary Hospital Grandes Especies FMVZ UAEM Period 2011-2020.</li>
				<li>Delegate of the Mexican Association of Veterinary Specialists in Equines (AMMVEE), State of Mexico Delegation April 2012-2017.</li>
				<li>Resident Physician and Anesthetist Equine Medical Unit, Santo Tomas, Ajusco D.F. Period 2009-2011.</li>
				<li>Various Stays in Medicine and Surgery for Equids.</li>
				<li>Hospital de Équidos FMVZ-UNAM Mex.</li>
				<li>Hospital la Silla, Monterrey, N.L.</li>
				<li>Hospital los Alamitos, Zapopan, Jalisco Period February 2008- August 2008.</li>
				<li>Grouping of Mounted and Canines, Directorate of Public Safety and Traffic Period MarchSeptember 2003.</li>
				<li>Responsible for Equine Clinical Area Period 2004–2008 Rancho la Trinidad, Riding School Equitation Instructor and Equine Therapy Instructor Period 1997–2008 Rancho la Trinidad, Riding School.</li>
			</ul>

			<p><strong>Publications</strong></p>

			<p>Effects of Jejunal Manipulation During Surgical Laparotomy Techniques and Its
			Evaluation Using Physical, Clinical, and Echographic Parameters In Horses. Journal of Equine Veterinary Science (JVES) November 2017 Volume 58,
			Pages 40-46</p>
			`
		},
		{
			id: 'alfredo-julian-paredes',
			name: 'ALFREDO JULIÁN PAREDES',
			pre: 'DR',
			description: 'Independent Consultant in Mexico',
			flagUrl: '/img/BANDERA-MEXICO.png',
			cv: `${cvStyle}
			<ul>
				<li>1996 Veterinary Zootechnician graduated from the Universidad Nacional Autónoma de México.</li>
				<li>2000 Specialization in Animal Production from the Faculty of Veterinary Medicine and Zootechnics of UNAM</li>
				<li>1995-1997 Veterinary Assistant at the Vetequi Hospital for Horses at the Hipódromo de las Américas</li>
				<li>2000-2002 Official Veterinarian at the Hipódromo de las Américas</li>
				<li>2000-Present Consultant in breeding farms and racing horse stables, specializing in Thoroughbreds and Quarter Horses.</li>
				<li>2005-2023 Head of Technical Service for Horses, Sales Coordinator for Specialties at Malta Texo de México SA de CV</li>
				<li>2010-Present External Collaborator and Identifier for the Mexican Association of Breeders and Horsemen of Quarter Horses</li>
				<li>2023-Present External Advisor for Livestock Industry of the Highlands Arbiter in the Comité Mexicano de Arbitraje y Vigilancia de Carreras de Caballos y Galgos AC.</li>
			</ul>
			`
		},
		{
			id: 'ana-celia-gomez-campos',
			name: 'ANA CELIA GÓMEZ CAMPOS',
			pre: 'DR',
			description: 'GRUPO NUTEC',
			flagUrl: '/img/BANDERA-MEXICO.png',
			cv: `${cvStyle}
			<ul>
				<li>Bachelor's studies at the Academic Unit of Medicine, Veterinary Medicine, and Zootechnics of the Autonomous University of Zacatecas.</li>
				<li>Completed Professional Internship at the Hospital of the Department of Medicine, Surgery, and Zootechnics for Equines at the Faculty of Veterinary Medicine and Zootechnics of the UNAM.</li>
				<li>Professional Internship at a private equine clinic DITEQ.</li>
				<li>Professional Internship at the Hipódromo de las Américas.</li>
				<li>Professional Internship at The Donkey Sanctuary, World Horse Welfare, UNAM. DSWHW-UNAM. AMBULATORY CLINICS.</li>
				<li>Specialization studies in Medicine and Surgery for Equines at the Faculty of Veterinary Medicine and Zootechnics of the National Autonomous University of Mexico.</li>
				<li>2006 to present: Member of the Mexican Association of Veterinary Specialists in Equines (AMMVEE).</li>
				<li>February 2009 to June 2011: Thesis: Effect of nutritional supplementation of manzarina on ruminal parameters of Holstein cows in production.</li>
				<li>January 2010: Professional Internship at The Donkey Sanctuary, World Horse Welfare, National Autonomous University of Mexico. DS-WHW-UNAM. AMBULATORY CLINICS.</li>
				<li>August 2009 to February 2010: Professional Internship at the Department of Medicine, Surgery, and Zootechnics for Equines of the Faculty of Veterinary Medicine of the UNAM.</li>
				<li>March 2010 to July 2010: Professional Internship at a private equine clinic DITEQ. MVZ, MSc, PhD, cert ACVIM María Masri Daba. Professional Internship at the Hipódromo de las Américas.</li>
				<li>July 2010 to October 2010: Professional Services Provider at SAGARPA, Zacatecas delegation.</li>
				<li>October 2011: Participation in the team of Official Vets at the Pan American Games Guadalajara 2011.</li>
				<li>2011-2013: Specialization student in Medicine and Surgery for Equines at the Faculty of Veterinary Medicine and Zootechnics of the National Autonomous University of Mexico. Obtaining the degree in 2013.</li>
				<li>2012-2013: Professional rotations in the area with different specialist clinicians such as reproduction ranches, private equine clinics on ranches, charro arenas, equestrian centers, etc. August 2013: Participation in the workshop "First Aid in Charrería Injuries," held at the Monumental Lienzo Charro Zacatecas, Zac.</li>
				<li>October 2013: Collaboration during the scientific session of the Annual Congress of the Mexican Association of Veterinary Specialists in Equines, presenting the topic: "Equine Coli Atresia" under the Poster format.</li>
				<li>January 2014 to May 2015: Work in private clinic and sports medicine in San Antonio, TX, USA.</li>
				<li>May 2015 to September 2015: Private clinic in Zacatecas state, Zac, Mex.</li>
				<li>September 2015 to present: Responsible for the Clinical-Medical and Equine Nutrition area at Yeguada Villa Gely livestock, Campeche, Mex</li>
			</ul>
			`
		},
		{
			id: 'bernardo-aguado-medina',
			name: 'BERNARDO AGUADO MEDINA',
			pre: 'MVZ',
			description: 'Agribrands Purina México',
			flagUrl: '/img/BANDERA-MEXICO.png',
			cv: `${cvStyle}
			<ul>
				<li>Veterinary Zootechnician with 16 years of experience in the balanced feed industry, focusing on innovation and development of nutritional solutions for equines at Agribrands Purina Mexico.</li>
			</ul>

			<p><strong>EDUCATION</strong></p>
			<ul>
				<li>Jul 01 2002 - Jul 01 2007 Veterinary Medicine and Zootechnics. La Salle Bajío University. León Guanajuato México.</li>
			</ul>

			<p><strong>EXPERIENCE</strong></p>
			<ul>
				<li>May 2020 - Present Equine Portfolio Manager North. Agribrands Purina México (Cargill) Monterrey Nuevo León.</li>
				<li>Jan 2019 - May 2020 Strategic Equine Species Leader. North (Technical Services Coordination). Agribrands Purina México (Cargill) Monterrey Nuevo León.</li>
				<li>Jun 2017 - Jan 2019 Specialist Manager in Equines North and Central. Agribrands Purina México (Cargill) Monterrey Nuevo León.</li>
				<li>Jul 2008 - Jun 2017 Specialist Manager in Equines North. Agribrands Purina México (Cargill) Monterrey Nuevo León.</li>
				<li>Aug 2007 - Jul 2008 Balanced feed commercialization. Specialized Nutritional Consulting for Equines. León Guanajuato.</li>
			</ul>
			`
		},
		{
			id: 'bernardo-monroy-hernandez',
			name: 'BERNARDO MONROY HERNÁNDEZ',
			pre: 'DR',
			description: 'Commercial Director Platinum Performance México',
			flagUrl: '/img/BANDERA-MEXICO.png',
			cv: `${cvStyle}
			<ul>
				<li>Veterinary Zootechnician from Universidad Nacional Autónoma de México. Generation 2001.</li>
				<li>Member of AMMVEE.</li>
				<li>Has completed further studies in equine nutrition in the United States and Europe.</li>
				<li>Participated as a speaker at veterinary congresses.</li>
				<li>Contributed as a collaborator in scientific publications on parasitology and equine supplementation topics.</li>
				<li>Presented works at international congresses.</li>
			</ul>
			<p><strong>Professional Experience</strong></p>
			<ul>
				<li>Specialist Manager for the equine line in Mexico and Latin America at Cargill Purina for 14 years (2005-2019).</li>
				<li>National Sales Manager for the equine segment at BoehringerIngelheim for two years (2019-2021).</li>
				<li>Currently, Commercial Director at Platinum Performance Mexico.</li>
			</ul>
			`
		},
		{
			id: 'chris-rogers',
			name: 'CHRIS ROGERS',
			pre: 'DR',
			description: 'Massey University',
			flagUrl: '/img/BANDERA-AUS.png',
			cv: `${cvStyle}
			<p>
				Chris Rogers is the programme leader for the equine programme
				and is head of the pre-clinical groups in the School of Veterinary
				Science. Chris has a dual appointment in both the School of
				Veterinary Science and the School of Agriculture and Environment
				at Massey University. Professor Rogers’ research interests include
				equine biomechanics, equine exercise physiology & nutritiony,
				equine industry epidemiology, and equestrian sport. His
				programme of research and teaching has been pivotal in providing
				the background knowledge needed to describe and improve
				equine production in New Zealand and internationally.
			</p>
			`
		},
		{
			id: 'elias-velazquez-canton',
			name: 'ELÍAS VELÁZQUEZ CANTÓN',
			pre: 'DR',
			description: 'GRUPO NUTEC',
			flagUrl: '/img/BANDERA-MEXICO.png',
			cv: `${cvStyle}
			<p>
				Dr. Elías Velázquez Cantón completed his studies in Veterinary
				Medicine and Zootechnics at the Universidad Autónoma Metropolitana,
				Xochimilco campus, obtaining his degree in 2003. In 2007, he earned
				a Master's degree in Animal Production and Health Sciences with a
				specialization in Endocrinology and Reproductive Physiology in Equines
				from the Department of Reproduction at the FMVZ - UNAM. In 2013, he
				began his doctoral studies in Animal Production and Health Sciences
				at the FMVZ - UNAM, focusing on Equin e Nutrition, and obtained his
				Ph.D. in September 2018. His doctoral thesis was based on the
				oxidative/antioxidant system of equines. His doctoral studies have
				allowed him to participate as a speaker in the following conferences:
			</p>

			<ul>
				<li>BSS (British Society of Animal Science) at the University of Chester, England. Session: "Advances in Equine Science A" Topic: "Effect of supplementation with selenium and vitamin E on serum malondialdehyde creatine phosphokinase concentrations in horses under moderate exercise" April 2015.</li>
				<li>ASAS, ADSA: The American Dairy Science Association and American Society of Animal Science Join Annual Meeting; Orlando, Florida. Sala: “Nonruminant nutrition” Tema: “Effect of selenium and vitamin E supplementation on muscular damage enzymes in horses under moderate exercise” July 2015.</li>
				<li>EEAP; European Federation of Animal Science; Warsaw, Polonia. Sala: “Equine production, management and welfare” Tema: “Effect of selenium and Vitamin E supplementation on serum cortisol in horses under moderate exercise” August 2015.</li>
				<li>AVEF 2015 Association Veterinaire Equine Francaise; París, Francia Tema 1: “Effect of selenium and vitamin E supplementation on erythrocyte glutathione peroxidase of moderately exercised horses” Noviembre 2015 Tema 2: “Effect of selenium and vitamin E supplementation on lactatemia in horses under moderate exercise” November 2015.</li>
				<li>BSAS (British Society of Animal Science) Universidad de Chester, Inglaterra. Sala: “Sport Medicine” Tema: “Effect of selenium and vitamin E supplements on blood lactate and serum lactate dehydrogenase activity in horses under moderate exercise” April 2016.</li>
				<li>ASAS, The American Dairy Science Association and American Society of Animal Science Salt Lake City-UTAH, USA. Sala: “Horse species”. Tema: “Effect of selenium and vitamin E supplementation on blood glutathione peroxidase activity and selenium in moderately exercised horses” July 2016. </li>
				<li>EEAP (European Federation of Animal Science), Irlanda del Norte. Sala: “Animal behaviour and nutritional requirements” Tema: “Effect of antioxidant supplementation on serum α-tocopheryl in horses undergoing moderate exercise” August 31 2016.</li>
				<li>SAS (British Society of Animal Science) Universidad de Chester, InglaterraTema: “Serum cortisol concentrations in horses supplemented with selenium and vitamin E undergoing moderate exercise in an ozone polluted environment” April 2017.</li>
				<li>ASAS, The American Dairy Science Association and American Society of Animal Science, Vancouver, Canadá Tema: “Effect of selenium and vitamin E supplementation on erythrocyte super oxide dismutase activity and blood concentrations of zinc and copper in moderately exercise” July 12 2018.</li>
				<li>EEAP, European Federation of Animal Science, Ghent, Belgium. Topic: "Serum malondialdehyde in horses supplemented with selenium and vitamin E, moderately exercised in a polluted environment" August 2019 Together with Dr. Aurora Hilda Ramírez Pérez, he is the co-founder of the International Conference Cycle on Equine Nutrition and Feeding, since 2017.</li>
			</ul>

			<p>
				He was a lecturer for 2 years at the FMVZ-UNAM, affiliated with the Department
				of Animal Nutrition and Biochemistry of the FMVZ-UNAM, teaching Animal Nutrition.
				Currently, he is a Co-advisor for undergraduate thesis in the area of Equine
				Nutrition and Exercise Physiology at the FMVZ-UNAM CDMX.
			</p>
			`
		},
		{
			id: 'gulsah-kaya-karasu',
			name: 'GULSAH KAYA KARASU',
			pre: 'DR',
			description: 'Van Hall Larenstein University of Applied Sciences',
			flagUrl: '/img/BANDERA-TURK.png',
			cv: `${cvStyle}
				<p>
				Dr. Gulsah Kaya Karasu is a veterinarian who received her Doctorate
				Degree in 2009 from Vienna Veterinary University in Austria,
				specializing in "colic risk factors in horses." Dr. Gulsah's career took
				her all over the world, including fellowships at Glasgow University in
				Scotland, Blueridge Equine Hospital in the United States, and continues
				education in equine medicine at Liverpool University in the United
				Kingdom. In 2011, she became an Associate Professor at Istanbul Aydın
				University. Her dedication to equine health led her to the ECVCN
				European College Veterinary Comparative Nutrition Residency
				Programme. She is a well-known equine nutrition veterinarian who has
				done technical consulting for major horse feed companies. Her
				insightful articles have appeared in a number of equestrian publications.
				Dr. Gulsah lives in the Netherlands and works as a senior lecturer and
				equine researcher at Van Hall Larenstein University of Applied
				Sciences. She also founded AGG Equine Nutrition Consultancy, which
				has been providing international consultation services for over a decade.
				</p>
			`
		},
		{
			id: 'lucia-perez-manrique',
			name: 'LUCIA PÉREZ MANRIQUE',
			pre: 'DR',
			description: 'FMVZ-UNAM',
			flagUrl: '/img/BANDERA-MEXICO.png',
			cv: `${cvStyle}
			<ul>
				<li>2005 Bachelor's degree in Veterinary Medicine and Zootechnics from FMVZ-UNAM</li>
				<li>2008 Honors Master's degree in Animal Health and Production from FMVZ-UNAM</li>
				<li>2005-2015 Veterinary Imaging Professor at FMVZ-UNAM.</li>
				<li>2003-2005 and 2008-2013 Honorary and Resident at DMCZE FMVZ-UNAM.</li>
				<li>2008-2009 Clinical Internship in Clinical Ethology at FMVZ-UNAM.</li>
				<li>2009-present Academic clinician at the Wildlife Hospital and Clinical Ethology at FMVZ-UNAM.</li>
				<li>2014-present Doctoral student in Animal Health and Production Sciences in collaboration with Biomedical Institutions (topic: ontogeny of temperament in horses).</li>
				<li>Areas of interest: Clinical and applied ethology in small animals and horses, animal welfare.</li>
				<li>Speaker at talks/congresses.</li>
				<li>Diploma modules: topics include Clinical Ethology of Small Animals, Animal Welfare (Horses), Equine Dentistry.</li>
				<li>International stays: Elgin Veterinary Clinic (Horse Division), Cornell Veterinary College (Behavior Clinic).</li>
				<li>Ph.D. in Animal Health and Production Sciences from FMVZ-UNAM.</li>
			</ul>
			`
		},
		{
			id: 'maria-esther-ortega-cerrilla',
			name: 'MARÍA ESTHER ORTEGA CERRILLA',
			pre: 'DR',
			description: 'Colegio de Postgraduados',
			flagUrl: '/img/BANDERA-MEXICO.png',
			cv: `${cvStyle}
			<p><strong>NATIONAL RESEARCHERS SYSTEM: National Researcher Level II</strong></p>

			<p><strong>ACADEMIC BACKGROUND:</strong></p>

			<ul>
				<li>Veterinary Medicine and Zootechnics: Faculty of Veterinary Medicine and Zootechnics, UNAM.</li>
				<li>Master of Science: University of Wisconsin, USA.</li>
				<li>Doctor of Philosophy: University of Newcastle Upon Tyne, England.</li>
				<li>Sabbatical stay: University of Hull, England (Animal Behavior and Welfare).</li>
				<li>Certification in Equine Welfare: University of Guelph, Canada.</li>
				<li>Area: Zootechnics.</li>
				<li>Specialty: Ruminant Nutrition, Animal Behavior, and Welfare.</li>
				<li>PUBLISHED ARTICLES IN INDEXED JOURNALS: 75.</li>
			</ul>

			<p><strong>ARTICLES</strong></p>

			<ul>
				<li>JCR (2019-2021): Larios, C.S., Ramírez, V.R., Aranda, O.G., Ortega, C.M.E., García. O.J.C. 2019. Stress indicators in cattle due to handling practices during loading, transportation, and unloading. Rev. Mex. Cienc. Pecu. 10:885-902.</li>
				<li>Álvarez, V.P., Guerrero, R.J.D., García de los S.G., Ortega, C.M.E., Mendoza, P.S.I., Joaquín, C.S. 2020. Lotus corniculatus L. forage accumulation based on different harvest strategies. Rev. Mex. Cienc. Pecu. 11:1087-1100.</li>
				<li>Valdez, A.L.P., Ortega, C.M.E., Fraire, C.S., Arreola, E.J., Crosby, G.M.M., Cruz, T.A.A., Ramírez, M.M. 2020. Physicochemical and preference evaluation of Curcubita argyrosperma Huber residue silages and their effect on milk production and composition of dual-purpose cows in Campeche, Mexico: pilot study. Sustainability 12, 7757; doi:10.3390/su12187757</li>
				<li>Kawas, J.R., García, M.J.F., Fimbres, D.H., Ortega, C.M.E. 2020. Effects of rumen-protected choline on growth performance, carcass characteristics, and blood lipid metabolites of feedlot lambs. Animals 10, 1580; doi:10.3390/ani10091580</li>
			</ul>

			<p><strong>ARTICLES IN CONACYT (2019-2020)</strong></p>
				
			<ul>
				<li>Rosas, V.U., Ortega, C.M.E., Ayala, R.J.M., Aranda, O.G., Sánchez, T.E.M.T. 2019. Beef cattle production with animal welfare. Agroproductividad 12(10):41-46.</li>
				<li>Vera, H.I.Y., Ortega, C.M.E., Herrera, H.J.G., Huerta, J.M. 2019. Welfare in sheep and its assessment. Agroproductividad 12(9): 67-72</li>
				<li>Wilson, G.C.Y., López, Z.N.E., Álvarez, V.P., Ortega, C.M.E., Venegas, A.M.I. 2020. Forage accumulation, morphological composition, and light interception in Triticale 118 (X Triticosecale Wittmack). Rev. Mex. Cienc. Agric. 24: 221-229.</li>
				<li>Luna, G.M.J., López, C.C., Quero, C.A.R., Herrera, H.J.G., Ortega, C.M.E., Martínez, H.P.A. 2020. Water relations and gas exchange in alfalfa under drought conditions. Rev. Mex. Cienc. Agric. 24: 81-92.</li>
				<li>Hernández, V.Y.G., Herrera, H.J.G., Crosby, G.M.M., Ortega, C.M.E., Bautista, M.Y., Godinez, C.B. 2020. Risk factors associated with mastitis and raw milk quality in small farms in Texcoco, Mexico. Agroproductividad 13(9): 39-44.</li>
				<li>Castro de J.J., Ortega, C.M.E., Herrera, H.J.G., Hernández, C.A., Ayala, R.J.M. 2021. Animal welfare during transport and slaughter of beef cattle. Agroproductividad (Accepted for publication)</li>
			</ul>

			<p><strong>ABSTRACTS PUBLISHED IN NATIONAL AND INTERNATIONAL MEMORANDA: 145</strong></p>

			<p><strong>SUPERVISED THESES:</strong></p>

			<ul>
				<li>15 Doctorate</li>
				<li>27 Master's</li>
				<li>24 Bachelor's</li>
			</ul>

			<p><strong>DISTINCTIONS:</strong></p>

			<ul>
				<li>Scholarship awarded by the Committee of Vice-Chancellors and Principals of the Universities of the United Kingdom (Overseas Research Student Award) for doctoral studies (1988-1990).</li>
				<li>Member of the Board of Directors of the Mexican Association of Specialists in Animal Nutrition (1992-1993; 1998-1999).</li>
				<li>Recognition as a Registered Nutritionist by The Nutrition Society of England, from 2000 to date. Member of the Mexican Veterinary Academy, from 2002 to date.</li>
			</ul>

			<p><strong>INVITED CONFERENCES: 60</strong></p>
			`
		},
		{
			id: 'maria-masri-daba',
			name: 'MARÍA MASRI DABA',
			pre: 'DR',
			description: 'FMVZ-UNAM',
			flagUrl: '/img/BANDERA-MEXICO.png',
			cv: `${cvStyle}
			<ul>
				<li>Veterinary Doctor at FMVZ, UNAM Mexico</li>
				<li>MSc in Gastroenterology at U of Fl</li>
				<li>Internal Medicine Residency at LSU</li>
				<li>MSc in Exercise Physiology at LSU</li>
				<li>ACVIM Board Certified</li>
				<li>PhD in Tissue and Cartilage Engineering</li>
				<li>Professor at FMVZ, UNAM</li>
			</ul>

			<p><strong>Experience</strong></p>
			<ul>
				<li>Advisor at the Racetrack Clinic: Hipódromo de las América since November 2013.</li>
				<li>Professor at FMVZ, UNAM since 1991. Appointment: Full-Time Permanent Professor C.</li>
			</ul>

			<p><strong>Education</strong></p>
			<ul>
				<li>University of Florida, LSU</li>
				<li>Equine Internship, Equine Internship 1983-1985</li>
				<li>Faculty of Veterinary Medicine and Zootechnics, CU, UNAM MVZ</li>
				<li>Internal Medicine, Regenerative Medicine, Special Interest in Sports Medicine MVZ, 1978-1982</li>
			</ul>
			`
		},
		{
			id: 'mariano-hernandez-gil',
			name: 'MARIANO HERNÁNDEZ GIL',
			pre: 'DR',
			description: 'FMVZ-UNAM',
			flagUrl: '/img/BANDERA-MEXICO.png',
			cv: `${cvStyle}
			<ul>
				<li>He was born in Mexico City on December 8, 1974, although he spent most of his childhood and adolescence in the states of Veracruz and Hidalgo, where he was in contact with farm animals, developing a special interest in equines.</li>
				<li>Studied at the Faculty of Veterinary Medicine and Zootechnics at UNAM, where he obtained the degree of Veterinary Doctor in 2000; two years later, he earned a Master of Science, with a specialization in Animal Nutrition, from the Autonomous University of Yucatán. In 2008, he obtained Equine Certification from CONCERVET, recertifying in 2014.</li>
				<li>In October 2002, he joined the program formed by the British foundations The Donkey Sanctuary and World Horse Welfare, along with the National Autonomous University of Mexico, as the Project Manager for "Equine Nutrition and Management," areas in which he has continued as a consultant. In fact, leading this program, he has developed projects to identify conditions that jeopardize equine welfare, collaborating with national and international institutions in implementing activities to support professional development and the advancement of veterinary practice standards working with equines.</li>
				<li>An academic at the Faculty of Veterinary Medicine and Zootechnics at UNAM since 2002, where he is currently an Associate Professor C Full-Time and Head of the Department of Equine Medicine, Surgery, and Zootechnics, teaching undergraduate and postgraduate courses, as well as advising on social service, professional work, research internships, undergraduate theses, internships, specializations, and master's degrees for students from UNAM and other national and international universities.</li>
				<li>Among the events in which he has participated as a speaker and instructor are: the Annual AMMVEE Congress (2003 to 2014), the Annual Seminar of The International League for the Protection of Horses (2005), the Annual Meeting of The American Association of Equine Practitioners (2009 and 2015), The International Colloquium on Working Equids (2006, 2010, and 2014), The Equitarian Workshop (2010 to 2014), The FAO-Brooke Expert Meeting on Welfare of Working Animals (2011), the Congress of The World Equine Veterinary Association (2015), and the Meeting of the Latin American Animal Production Association (2016); publishing articles in congress proceedings and peer-reviewed journals on welfare, nutrition, dentistry, and diseases in equines.</li>
				<li>He is also a member of the Equine Health and Production Committee of CONASA, a member of the Equine Certification Technical Committee of CONCERVET, and President of the Mexican Association of Veterinary Doctors Specializing in Equines.</li>
				<li>In his private practice, he has worked in Equine Nutrition and Equine Dentistry; also providing consulting services to companies in the animal feed industry, as well as to breeding farms and private stables.</li>
				<li>Involved in academia, private practice, extension, and continuing education, throughout his career Mariano has maintained a balance between theory and practice to promote the quality of life and efficient performance of equines. Always convinced of the importance of maintaining good traditional practices to ensure animal welfare, while incorporating advances in science and technology.</li>
			</ul>
			`
		},
		{
			id: 'meriel-moore-colyer',
			name: 'MERIEL MOORE-COLYER',
			pre: 'DR',
			description: 'Independent Consultant in the United Kingdom',
			flagUrl: '/img/BANDERA-UK.png',
			cv: `${cvStyle}
			<p><strong>DEGREES AND PROFESSIONAL QUALIFICATIONS</strong></p>
			<p>
				2015 Professor of Equine Science (personal chair)
				<br>2013 R. Anim. Sci (Institute of Biology)
				<br>1995-2000 PhD Equine Nutrition (University of Edinburgh)
				<br>Title: Studies on the degradation kinetics of botanically diverse fibrous feeds and their apparent digestibility and rate of passage when fed to ponies.
				<br><br>1996 Home Office Licence Modules 1, 2, 3, 4, and 5.
				<br>1994 BTEC Training and Assessor qualifications, D32 and D33
				<br>1984 British Horse Society Intermediate Instructor
				<br>1980-1984 BSc (Hons) in Agriculture University College of Wales Aberystwyth
			</p>

			<p><strong>EMPLOYMENT</strong></p>
			<ul>
				<li>2016 Director of Research and Knowledge Exchange, Royal Agricultural University.</li>
				<li>2014-2016 Dean of School of Equine Management and Science Royal Agricultural University.</li>
				<li>2006 Principal lecturer, Royal Agricultural College, Cirencester (part-time).</li>
				<li>2007-2013 Sub-Dean for The Open College of Equine Studies, Bury St Edmonds.</li>
				<li>2004-2006 Consultant in Equine Nutrition and Research.</li>
				<li>1995-2004 Lecturer in Equine and Animal Science (Full-time) University of Wales.</li>
				<li>1993-1995 Lecturer in Equine Science (Full-time) Welsh Agricultural College.</li>
				<li>1989-1993 Lecturer in Equine Science (Part-time) University of Wales Aberystwyth.</li>
			</ul>

			<p><strong>MAIN RESEARCH AREAS</strong></p>
			<ul>
				<li>Novel feeds and feeding systems for young stock</li>
				<li>Respiratory allergens, identification and systems for treating forage</li>
				<li>Forage microbial profile and nutrient content in relation to gut health, respiratory health, stable environment and systems for mitigation</li>
				<li>Feeding systems and equine behavior and welfare</li>
				<li>Digestive physiology and gut health</li>
				<li>Energy requirements of exercising horses </li>
			</ul>

			<p class="uppercase"><strong>Membership of National Academic Societies</strong></p>
			<ul>
				<li>Member BSAS</li>
				<li>Organizing committee for Emerging Equine Science (2003) and Applying Equine Science Conferences (2005)</li>
				<li>Member of Advancing Equine Science Excellence Society</li>
				<li>Accreditation assessor for Society of Biology</li>
			</ul>

			<p>Editorships: Emerging Equine Science 2004; Applying Equine Science, 2006; The Role
			of Science and Business in Horse Health and Welfare, Alltech UWE Hartpury
			Conference 2013; Getting the most out of your feed. Alltech UWE Hartpury
			conference on Exercise Physiology, 2011. European Society of Veterinary and Clinical
			Nutrition 2017. European Workshop for Equine Nutrition 2017 onwards</p>

			<p><strong>TEACHING AND MANAGEMENT</strong></p>
			<ul>
				<li>Undergraduate teaching: Wide range of experience delivering lectures and practical classes at HND and BSc levels. Subjects taught include Experimental Design and Analyses, Animal Science, Ruminant and Equine Nutrition, Equine Exercise Physiology, Nutritional Biochemistry (organic), Equine Anatomy and Equine Industry. BSc dissertation co-ordinator and supervisor.  </li>
				<li>Post-graduate teaching: MSc teaching includes, Experimental Design and Analyses; Equine Nutrition; Equine Anatomy. Dissertation co-ordinator and supervisor. MScR and PhD supervisor. </li>
			</ul>

			<p><strong>PRACTICAL SKILLS HOBBIES AND INTERESTS</strong></p>
			<ul>
			<li>British Horse Society Intermediate Instructor</li>
			<li>Riding and competing in dressage-Small Tour level</li>
			<li>PADI and SSI Advanced Scuba diver</li>
			<li>Reading</li>
			<li>Classical music </li>
			</ul>

			<p><strong>LIST OF PUBLICATIONS</strong></p>
			<ul>
				<li>35. Auger, E.J. and Moore-Colyer, M.J.S. (2017) The effect of management regime on airborne respirable dust concentrations in 2 different types of horse stable design Journal of Equine Veterinary Science. 51:105-109</li>
				<li>34. Kirsty Roberts, Andrew J. Hemmings, Meriel Moore-Colyer, Matthew O. Parker and Sebastian D. McBride (2016) Neural modulators of temperament: A multivariate approach to personality trait identification in the horse. Physiology & Behaviour: 167: 125–131</li>
				<li>33. Moore-Colyer, M.J.S. Taylor, J. and James, R. (2016) The effect of steaming</li>
				<li>and soaking on the respirable particle, bacteria, mould and nutrient content in</li>
				<li>hay for horses. Journal of Equine Veterinary Science. 39: 62-68. (DOI: 10.1016/j.jevs.2015.09.006)</li>

				<li>32. Moore-Colyer, M.J.S., Hemmings, A and Hewer, N. (2016) A preliminary investigation into the effect of ad libitum or restricted hay with or without Horslyx on the intake and switching behaviour of normal and crib-biting horses. Livestock Science.186: 59-62 (http://dx.doc.org/10.1016/j.lisci.2015.07.021)</li>
				<li>31. Roberts, K.; Hemmings, A. and Moore-Colyer, M.J.S. Hale, C. (2015) Cognitive differences in horses performing locomotory versus oral stereotypic behaviour. Applied Animal Behaviour Science. 168:37-44 (Doi:10.1016/j.applanim.2015.04.015)</li>
				<li>30. Moore-Colyer, M.J.S., Lumbis, K., Longland, A.C. and Harris, P.A. (2014) The effect of five different wetting treatments on the nutrient content and microbial concentration in hay for horses PLOS One – November 26.</li>
				<li>29. Murray, J.M.D., Moore-Colyer, M.J.S. and Dunnett, C. and Longland. A.C. (2014) The effect of feeding a low or high starch diet on equine faecal parameters. Livestock Science.159: 67-70</li>
				<li>28. Moore-Colyer, M.J.S., O’Gorman, D. and Wakefield, K. (2013) An in vitro investigation into the effects of a marine-derived multi-mineral supplement in simulated equine stomach and hindgut environments. Journal of Equine Veterinary Science. 34(3): 391-397. DOI: 10.1016/j.jevs.2013.07.016</li>
				<li>27. Ince, J., Longland, A.C., Moore-Colyer, M.J.S. and Harris, P.A. (2013) In vitro degradation of grass fructan by equid gastrointestinal digesta. Grass and Forage Science. 69(3): 514-523. DOI: 1111/gfs.12061</li>
				<li>26. S.A. Brown; Moore-Colyer, M.J.S; Hannant ,D. (2013) Phenotypic analyses support investigations of phylogeny in the Skyrian pony and other breeds. Bioscience Horizons 2013 6: hzt010-hzt010</li>
				<li>25. Moore-Colyer, M.J.S. and Fillery, B.G. (2012) The effect of three different treatments on the respirable particle content, total viable count and mould concentrations in hay for horses. In: Forages and grazing in horse nutrition. EAAP publication No. 132. Ed. M.Saastamoinen, M.J. Fradinho, A.S. Santos and N. Miraglia. Pp 101-107</li>
				<li>24. Murray, J.M.D., Dunnett, C., Moore-Colyer, M.J.S. and Longland, A.C. (2012) In vitro assessment of three fibrolytic enzyme preparations as potential feed additives in equine diets. Animal Feed Science and Technology. 171: 192-204.</li>
				<li>23. James, R and Moore-Colyer, M.J.S (2010) Determination of the microbial contamination in dry and steamed hay. European Workshop for Equine Nutrition, Cirencester, Sept 2010. The Impact of nutrition on the health and welfare of horses. EAAP publication No. 128. Ed A. Ellis, AC. Longland, M. Coenen, and N. Miraglia. p 128-132 </li>

				<li>22. Murray, J.M.D., Bice, R.K.T and Moore-Colyer, M.J.S. (2010) The effect of particle size on the in vitro fermentation of different ratios of high-temperature dried Lucerne and sugar beet pulp incubated with equine faecal inocula. Animal Feed Science and Technology. 162: 47-57.</li>
				<li>21. Murray, J.M.D., Sanderson, R., Longland, A., Moore-Colyer, M.J.S., Hastie, P. and Dunnett, C. (2009) Assessment of mathematical models to describe the rate of passage of enzyme-treated or sugar beet pulp-substituted Lucerne silage in equids Animal Feed Science and Technology. Vol 154: 228-240.</li>
				<li>20. Moore-Colyer, M.J.S. (2009) laminitis – A nutritionist’s perspective. National Equine Student, Issue 15. Journal of Equine Studies. 8: 29-30.</li>
				<li>19. Johnson, J.L. and Moore-Colyer, M.J.S. (2009) The relationship between range of motion of lumbosacral flexion-extension and canter velocity of horses on a treadmill. Equine Veterinary Journal. 41: 301-303</li>
				<li>18. Murray, J.M.D., Longland, A.C., Hastie, PM., Moore-Colyer, M.J.S. and Dunnett, C. (2008) The nutritive value of sugar beet pulp-substituted Lucerne for equids. Animal Feed Science and Technology. 140: 110-124 ANIFEE11705</li>
				<li>17. Murray, J.M.D., Moore-Colyer, M.J.S., Longland, A.C. and Dunnett, C. (2008) The effect of yeast supplementation on the in vitro fermentation of high-temperature dried Lucerne. Animal Feed Science and Technology. 146: 149-159.</li>
				<li>16. Hale C.E., Moore-Colyer M.J.S. and Hemmings A.J. (2007). Feeding with Welfare in Mind: the role of alternative forages in meeting energy demands of domesticated horses. Animal Welfare. 16 (supp): 170.</li>
				<li>15. Murray, J.M.D., Longland, A.C., Davies, D.R., Hastie, P.M., Moore-Colyer, M.J.S. and Dunnett, C. (2007) The effect of enzyme treatment on the nutritive value of Lucerne for equids. Livestock Science. 112: 52-62. LIVSCI-00409</li>
				<li>14. Murray, J.M.D., Longland, A.C., Moore-Colyer, M.J.S. and Dunnett, C. (2006) The effect of feeding a low starch diet on the in vitro fermentative capacity of equine faecal inocula. Animal Science. 82: 627-636 (DOI 10.1079/ASC200683)</li>
				<li>13. Murray, J.M.D., Longland, A.C., Moore-Colyer, M.J.S. (2006) In vitro fermentation of different ratios of high-temperature dried Lucerne and sugar beet pulp incubated with an equine faecal inoculum. Animal Feed Science and Technology. 129: 89-98 (DOI10.1016/J.annifeedsci.2005.12.001)</li>
				<li>12. Murray, J.M.D., Longland, A.C., Moore-Colyer, M.J.S. and Dunnett, C. (2005). T he effect of enzyme treatment on the nutritive value of high-temperature dries Lucerne for ponies. Pferdeheilkunde. 21: 41-42.</li>
				<li>11. Murray, J.M.D., Longland, A.C., Moore-Colyer, M.J.S. and Dunnett, C. (2005) The effect of enzyme treatment on the in vitro fermentation of Lucerne incubated with equine faecal inocula. British Journal of Nutrition. 83: 771-782 (DOI: 10.1079/BJN20051561)</li>

				<li>10. Yanez, D., Moore-Colyer, M.J.S., Longland, A.C., Walsh, C., Bakewell, E., Kirk, A., Grime, E., Northover, A., Davies, D. R., Griffith, G. Newbold, C.J. (2004). Microbial counts in different sites of the gastro-intestinal tract of the horse. Reproduction, Nutrition Development, Supplement 1 S 12. Concerns and responses to food safety, health and environmental issues. 4th Joint INRA-RRI Symposium on Gut Microbiology, 21-24 June 2004, Clermont-Ferrand, France.</li>
				<li>9. Moore-Colyer, M.J.S. Longland, A.C.(2004) Exploiting dietary fibre in equid diets. Emerging Equine Science. BSAS publication no 32. Ed: J. Alliston, S. Chadd, A.Ede, A. Hemmings, J. Hyslop, A. Longland, H. Moreton and M. Moore-Colyer. Nottingham University Press. Pp 113-129.</li>
				<li>8. Moore-Colyer, M.J.S.; Morrow, H.J. and Longland, A.C. (2003) Mathematical modelling of digesta passage rate, mean retention time and in vivo apparent digestibility of two different lengths of hay and big bale grass silage in ponies. British Journal of Nutrition. 90: 109-118. (DOI 10.1079/BJN2003869)</li>
				<li>7. Moore-Colyer, M.J.S.; Hyslop, J.J.; Longland, A.C. and Cuddeford, D. (2002) The mobile bag technique as a method for determining the degradation of four botanically diverse fibrous feedstuffs in the small intestine and total digestive tract of ponies. British Journal of Nutrition. 88: 729-740. (DOI 1079/BJN2002734)</li>
				<li>6. Murray J., Longland, A.C. and Moore-Colyer, M. (2001) Chemical characterization and in vitro fermentation of high temperature dried alfalfa and grass hay. In Recent Advances in Equine Nutrition Ed Pagan and R.J.M Geor Kentucky Equine Research, 115-117</li>
				<li>5. Moore-Colyer, M. J. (2000) Dietary fibre for the performance horse, In Horserace Betting Levy Board: a report from a workshop on equine nutrition Equine Veterinary Education. 12(4):187-194</li>
				<li>4. Moore-Colyer, M.J.S. and Longland, A.C.L. (2000) Intakes and in vivo apparent digestibilities of four types of conserved grass forage by ponies. Animal Science. 71: 527-535. (ISSN number 1357-7298)</li>
				<li>3. Moore-Colyer, M.J.S.; Longland,A.C.; Hyslop,J. and Cuddeford, D.(2000) Intra-caecal fermentation parameters in ponies fed botanically diverse fibre feeds. Animal Feed Science and Technology. 84: 183-197. (ISSN number 0377-8401)</li>
				<li>2. Blackman, M. and Moore-Colyer, M.J.S. (1998) Hay for horses: the effects of three different wetting treatments on dust and mineral content. Animal Science. 66: 745-750. (ISSN number 1357-7298)</li>
				<li>1. Moore-Colyer, M.J.S. (1996) The effects of soaking hay fodder for horses on dust and mineral content. Animal Science. 63: 337-342. (ISSN number 1357-7298)</li>
			</ul>

			<p><strong>CONFERENCE PAPERS</strong></p>
			<ul>
				<li>Moore-Colyer, M.J.S., Longland, A.C., Hyslop, J.J. and Cuddeford, D. (1997) Degradation of four dietary fibre sources by ponies as measured by the mobile bag technique. Proceedings of Equine Nutrition and Physiology Society. Fort Worth Texas. May 1997</li>
				<li>Longland, A.C., Moore-Colyer, M.J.S., Hyslop, J.J., Dhanoa, M.S. and Cuddeford, D. (1997) Comparison of the in sacco degradation of the non-starch polysaccharide and neutral detergent fibre fractions of four sources of dietary fibre by ponies. Proceedings of Equine Nutrition and Physiology Society. Fort Worth Texas. May 1997</li>
				<li>Moore-Colyer, M.J.S. The degradation of organic matter and crude protein of four botanically diverse feedstuffs in the fore gut of ponies as measured by the mobile bag technique. Proceedings of British Society of Animal Science. Scarborough. March 1997.</li>
				<li>Moore-Colyer, M.J.S.; Longland,A.C., Hyslop,J. and Cuddeford, D. Degradation of protein and NSP from four botanically diverse fibres by ponies as measured by the mobile bag technique. Proceedings of British Society of Animal Science. Reading July 1997.</li>
				<li>Moore-Colyer, M.J.S. Dietary fibre in equine nutrition. Proceedings of British Society of Animal Science. Scarborough March 1998.</li>
				<li>Moore-Colyer, M.J.S. Dietary fibre in performance horse diets. H.B.L.B. Workshop in Equine Nutrition London. September 1998.</li>
				<li>Moore-Colyer, M.J.S., Longland, A.C., Hyslop,J. and Cuddeford, D In vivo apparent digestibility of proximate constituents and non-starch polysaccharides in ponies offered botanically diverse fibre-based diets. Proceedings of the British Society of Animal Science March 1999.</li>
				<li>Hyslop,J., McLean, B.M.L., Moore-Colyer, M.J.S.; Longland,A.C.;. and Cuddeford, D and Hollands, T. Measurement of caecal outflow rate in ponies using Chromium mordant feeds. Proceedings of the British Society of Animal Science March 1999.</li>
				<li>Morrow, H.J., Moore-Colyer, M.J.S. and Longland, A.C.L. The apparent digestibilities and rates of passage of two chop lengths of big-baled silage and hay in ponies. Proceedings of the British Society of Animal Science March 1999.</li>
				<li>Moore-Colyer, M.J.S and A.C. Longland (2001) The in vitro digestion of mature grass hay in the presence or absence of added nitrogen and sugar beet pulp by an equine faecal inoculum using the pressure transducer technique. Proceedings of the British Society of Animal Science March 2001.</li>
				<li>Moore-Colyer, M.J.S. and Longland, A.C. (2001) The effect of plain sugar beet pulp on the in vitro gas production and in vivo apparent digestibility of hay when offered to ponies. Proceedings of Equine Nutrition and Physiology Society. Lexington, Kentucky. June 2001</li>

				<li>Hale, C.E and Moore-Colyer, M.J.S. (2001) Voluntary food intakes and apparent digestibilities of hay, big-bale grass silage and red clover silage by ponies. Proceedings of Equine Nutrition and Physiology Society. Lexington, Kentucky. June 2001.</li>
				<li>Murray, J.M.D., Moore-Colyer, M.J.S., Longland, A.C. and Dunnett, C. (2002) The effect of sugar beet pulp on the nutritive value of high-temperature dried alfalfa for ponies. Proceedings of the British Society of Animal Science March 2002.</li>
				<li>Moore-Colyer, M.J.S., Longland, A.C. and Murray, J. (2003) Microbial activity and degradation capacity in 9 regions of the equid gut using the gas production technique. Proceedings of Equine Nutrition and Physiology Society Michigan June 2003.  </li>
				<li>Murray, J.M.D., Longland, A.C.L., Moore-Colyer, M.J.S. and Dunnett, C. (2003)The effect of diet and donor animal on the fermentative capacity of equine faecal inocula for use in in vitro digestibility determinations. Proceedings of the Equine Nutrition and Physiology Society Symposium. Michigan USA. June 2003.</li>
				<li>Hyslop, J.J McLean. B.L.M, and Moore-Colyer, M.J.S. (2003) Relationship between water holding capacity and fibre concentration in equine feeds. Proceedings of the Emerging Equine Science Conference, Cirencester, UK Sept 2003.</li>
				<li>Bice, R.K.T and Moore-Colyer, M.J.S. (2003) The effect of particle size on volatile fatty acid profiles obtained from an alfalfa and unmolassed sugar beet pulp diet following in vitro incubation with equine faeces. Proceedings of the Emerging Equine Science Conference, Cirencester, UK Sept 2003.</li>
				<li>Moore-Colyer, M.J.S. (2003) Exploiting dietary fibre in equine diets. Proceedings of the Emerging Equine Science Conference, Cirencester, UK Sept 2003.pp 20-22</li>
				<li>Ince, J., Longland, A.C., Cairns, A., Moore-Colyer, M.J.S. Characterisation of the WSC fraction of six species of temperate pasture grasses. Proceedings of the Emerging Equine Science Conference, Cirencester, UK Sept 2003.</li>
				<li>Moore-Colyer, M.J.S., Clercq, T., Julliand, V. and Drogoul, C. (2005) In vivo foregut digestion of starch based concentrate feeds in horses using the mobile bag technique. Proceedings of the Applying Equine Science Conference, Cirencester, Sept 2005.</li>
				<li>Moore-Colyer, M.J.S., Drogoul, C and Julliand, V. (2005) In vivo foregut digestion of protein from 6 fibre feeds in horses using the mobile bag technique. Proceedings of the Applying Equine Science Conference, Cirencester, Sept 2005.</li>
				<li>Ince, J.C., Longland, A.C., Moore-Colyer, M.J.S. and Harris, P. (2005) Effect of high or low water soluble carbohydrate perennial ryegrass (Lolium perenne) on lactate and pH when incubated in vitro with an equine hind-gut microbial inoculum. Proceedings of the Equine Science Society, Tuscon, Arizona, June 2005.</li>

				<li>Ince, J.C., Longland, A.C., Moore-Colyer, M.J.S. and Harris, P. (2005) Effect of inoculum source on fermentation parameters in vitro: incubation of perennial rye grass varieties (Lolium perenne) with microbial inocula from the caecum, right ventral colon or faeces of ponies. Proceedings of the Equine Science Society, Tuscon, Arizona, June 2005.</li>
				<li>Ince, J.C., Longland, A.C., Moore-Colyer, M.J.S. and Harris, P. (2005) In vitro fermentation of three species of fresh grass differing in water-soluble carbohydrate content with an equine faecal inoculum Proceedings of ENUCO Hannover, Germany, Sept 2005.</li>
				<li>Murray, J.M.D., Longland, A.C., Moore-Colyer, M.J.S. and Dunnett, C. (2005) The effect of enzyme treatment on the nutritive value of high-temperature dried Lucerne for ponies. Proceedings of ENUCO Hannover, Germany. Sept 2005.</li>
				<li>Murray, J.M.D., Longland, A.C., Moore-Colyer, M.J.S. and Dunnet, C. (2005) The effect of enzyme treatment on the nutritive value of high-temperature dried Lucerne for ponies. Pferdeheilkunde 21 41-42  </li>
				<li>Murray, J.M.D., Sanderson, R., Longland, A.C., Moore-Colyer, M.J.S. Hastie, P. and Dunnett, C. (2007) The application of mathematical models to assess the effect of enzyme treatment or sugar beet pulp on the rate of passage of ensiled lucerne in equids. Proceedings of ENUCO 2007.  </li>
				<li>Moore-Colyer, M.J.S. (2008) ‘Laminitis: the nutritionist’s perspective’ Proceedings of the Open College of equine Studies Equine Science Conference, Bury St Edmonds, UK Nov 2009.11-14.  </li>
				<li>Moore-Colyer, M.J.S. (2010) The importance of identifying and eliminating spores when dealing with the problem of poor performance in the race horse. Irish Thoroughbred Breeders Symposium, Kildare, Ireland, Jan 2010.</li>
				<li>Moore-Colyer, M.J.S. (2010) Lungs and gut: The dilemma of feeding hay to horses. Proceedings of the Open College of Equine Studies Conference, Bury St Edmonds, UK, March 2010.</li>
				<li>Pocock, L and Moore-Colyer, M.J.S. (2010) Conformation and its effect on laterality in the Thoroughbred racehorse. Proceedings of the British Society of Animal Science Conference, Belfast April 2010.</li>
				<li>Moore-Colyer, M.J.S. (2010) Investigation of the buffering action and fermentation activity of Aquacid, when incubated in vitro with fibre and concentrate diets European Workshop for Equine Nutrition, Cirencester, Sept 2010. The Impact of nutrition on the health and welfare of horses. EAAP publication No. 128. Ed Ellis, A., Longland, A.C., Coenen, M and Miraglia, N. p193-195</li>
				<li>Stockdale, C and Moore-Colyer, M.J.S (2010) Steaming hay for horses: The effect of three different treatments on the respirable particle numbers in hay treated in the Haygain steamer. European Workshop for Equine Nutrition, Cirencester, Sept 2010. The Impact of nutrition on the health and welfare of horses. EAAP publication No. 128. Ed Ellis, A., Longland, A.C., Coenen, M and Miraglia, N. p136-138</li>

				<li>Pocock, L and Moore-Colyer, M.J.S. (2010) Conformation and its effect on laterality in the Thoroughbred racehorse. Proceedings of the British Society of Animal Science Conference, Belfast April 2010.</li>
				<li>Moore-Colyer, M.J.S. (2011) Getting the most out of your feed. Proceedings of the Alltech International Conference on Exercise Physiology, Hartpury April 2011.</li>
				<li>Moore-Colyer, M.J.S. (2012) The nutritive value of fibre for racehorses. Irish Thoroughbred Breeders Expo. Leopardstown, Dublin, Ireland.</li>
				<li>Moore-Colyer, M.J.S. (2012) The benefits of quality fibre for racehorses. Irish Thoroughbred Breeders Expo. Leopardstown, Dublin, Ireland.</li>
				<li>Moore-Colyer, M.J.S and Payne, V. (2012) Palatability and ingestion behaviour of 6 polo ponies offered a choice of dry, soaked and steamed hay for 1 hour on three separate occasions. Proceedings of the British Society of Animal Science. Nottingham UK, April 2012.</li>
				<li>Longland, A.C., Ince, J.C., Moore-Colyer, M.J.S. and Harris, P.A. (2012) Degradation of grass and grass fructan by equine gastrointestinal digesta in vitro. In: Forages and grazing in horse nutrition. EAAP publication No. 132. Ed. M.Saastamoinen, M.J. Fradinho, A.S. Santos and N. Miraglia. Pp 107-109.</li>
				<li>Taylor, J. and Moore-Colyer, M.J.S. (2013) The effect of 5 different wetting treatments on the bacteria and mould concentrations in hay for horses. Proceedings of European Equine Health and Nutrition Congress, Ghent. Feb 2013</li>
				<li>Lewendon, L and Moore-Colyer, M.J.S. (2013). The effect of two short-term calming supplements on stress parameters in travelling horses. Proceedings of the Alltech UWE Hartpury Conference on The Role of Science and Business in Horse Health and Welfare, Hartpury March 2013.</li>
				<li>James, R., and Moore-Colyer, M.J.S. (2013) Hay for Horses: The Nutrient content of hay before and after steam treatment in a commercial hay steamer. Proceedings of the British Society of Animal Science. Nottingham UK, April 2013.</li>
				<li>Leggatt, P., and Moore-Colyer, M.J.S (2013) The effect of steam treatment on the bacteria, yeast and mould concentrations in haylage for horses. Proceedings of the British Society of Animal Science. Nottingham UK, April 2013.</li>
				<li>Stephenson, B. Hemmings, A. and Moore-Colyer, M.J.S. (2014). The use of eye blink rate and changes in behaviour as potential early indicators of pituitary par intermedia dysfunction in the horse. Proceedings of BSAS Annual Conference. Advances in Animal Biosciences: Science into Practice: Planning for Intensification. Nottingham April 2014 p 72.</li>
				<li>Longland A, Ince J, Newbold JC, Barfoot C, Moore-Colyer MJS, Kumbis K & Harris P (2014) Practical methods to reduce non-structural carbohydrate (NSC) intake in horses and ponies. Proceedings of Australasian Equine Society Symposium. Vol 5 p 7-8 </li>

				<li>Leggatt, P., and Moore-Colyer, M.J.S (2013) The effect of steam treatment on the bacteria, yeast and mould concentrations in haylage for horses. Proceedings of the British Society of Animal Science. Nottingham UK, April 2013.</li>
				<li>Moore-Colyer, M.J.S. and Taylor, J. (2014) Forage in the Stable – Techniques for reducing the respirable challenge and microbial content in hay. Proceedings of the Dorothy Russel Havemeyer Foundation IAD Workshop, Cabourg, France October 2014.</li>
				<li>Moore-Colyer. M.J.S. and Auger, E.J. (2014) The effect of stable design and management regime on the respirable particle concentrations in 2 different types of horse stabling. Proceedings of Equi-meeting Infrastructures Conference. Lion D’Angers. France October 2014.</li>
				<li>Moore-Colyer, M.J.S.; Hemmings, A and Hewer, N. (2014) The effect of ad libitum or restricted hay with or without Horslyx on the intake and switching behaviour of normal and crib biting horses. Proceedings of the 7th European Workshop on Equine Nutrition. Impact of nutrition on metabolism. Leipzig September 2014.</li>
				<li>Moore-Colyer, M.J.S.; Lumbis, K., Longland, A.C.and Harris, P.A. (2014) The effect of five different wetting treatments on the water soluble carbohydrate content and microbial concentration in hay for horses. Proceedings of the 7th European Workshop on Equine Nutrition. Impact of nutrition on metabolism. Leipzig September 2014.</li>
				<li>Moore-Colyer, M.J.S.; Muirhead, V. (2015) Managing the stable environment for the equine athlete – improving the hygienic quality of straw bedding. European Equine Health and Nutrition Congress, Bruges, Belgium March 2015.</li>
				<li>Moore-Colyer, M.J.S. A better way to feed the performance horse. Key note paper British Society of Animal Science . April 2015.</li>
				<li>Moore-Colyer, MJS A better way to feed the performance horse. Horses Inside Out Conference, Cirencester February 2016</li>
				<li>Williams, A., Moore-Colyer, MJS. Harris, PA. The effect of soaking on the populations of acidic bacteria found on UK meadow hay – possible implication for equine gastric ulceration Proceedings of the 8th European Workshop on Equine Nutrition, Dijon June 2016.</li>
				<li>Moore-Colyer, MJS, Crosthwaite, SK and Harris, PA. The effect of soaking on the bacterial profile of UK meadow and perennial rye grass (Lolium perenne) hay for horses Proceedings of the 8th European Workshop on Equine Nutrition, Dijon June 2016.</li>
				<li>Moore-Colyer, MJS and Jiang, C. Preliminary development of a dynamic gastric in vitro model for horses Proceedings of the 8th European Workshop on Equine Nutrition, Dijon June 2016.</li>

				<li>White S Moore-Colyer M, Coüetil L, Hannant D, Richard E, Marti E and Alcocer M. (2017) Development of a Multiple Protein Extract Microarray for Profiling AllergenSpecific Immunoglobulin E in Horses with Severe Asthma. Proceedings of the World Equine Airway Symposium, Copenhagen, July 2017.</li>
				<li>Moore-Colyer, MJS. (2017) Techniques for reducing the respirable challenge in hay. World Equine Airway Symposium, Copenhagen, July 2017. TEXT BOOKS</li>
				<li>Moore-Colyer, M.J.S. (2009) Equine Sports Nutrition. The Open College of Equine Studies. Bury St Edmonds, UK.</li>
				<li>Moore-Colyer, M.J.S. (2010) Advances in Equine Nutrition. The Open College of Equine Studies. Bury St Edmonds, UK.</li>
				<li>Moore-Colyer, M.J.S. (2011) Equine Locomotion. International Equine Institute, University of Limerick, Ireland.</li>
				<li>Moore-Colyer, M.J.S. (2012) Foundations of Equine Performance. International Equine Institute, University of Limerick, Ireland.</li>
				<li>Moore-Colyer, M.J.S (2015) Feeding for Performance In Williams J, and Evans D (editors) Training for Equestrian performance. Wageningen Academic Publishers. ISBN 978-90-8686-258-0. Pp221- 243.</li>
			</ul>
			`
		},
		{
			id: 'pamela-thomson-morales',
			name: 'PAMELA THOMSON MORALES',
			pre: 'DR',
			description: 'Universidad Andrés Bello, Santiago de Chile',
			flagUrl: '/img/BANDERA-CHILE.png',
			cv: `${cvStyle}
			<p><strong>Prof. PAMELA THOMSON MORALES.</strong></p>
			<p>
				Veterinarian. Master of Biological Sciences, with
				a specialization in Microbiology. Doctor of Biomedical Sciences. Dr. Thomson graduated
				as a Veterinarian in 2002 and began specializing in Microbiology and Mycology with a
				Master's degree from the University of Chile. She then moved to Spain to pursue a
				Doctorate in Biomedicine at the Universitat Rovira i Virgili. She expanded her research
				activities by completing a postdoctoral fellowship at the Catholic University of Chile,
				focusing her work on the human intestinal microbiome. She further honed these skills with
				an internship in Valencia at the Foundation for the Promotion of Health and Biomedical
				Research (FISABIO). Since 2020, she has been part of the Universidad Andrés Bello,
				where she teaches undergraduate courses such as Organism Aggression and Defense,
				Zoonoses, and Thesis Seminar. She coordinates Clinical Microbiology, Food Safety, and
				One Health Impact courses in Veterinary Medicine. She also teaches postgraduate courses
				as part of the academic faculty of the Conservation Medicine Ph.D. program. She is the
				founder and current director of the Clinical Microbiology and Microbiome laboratory,
				located at "Avda. Lo Pinto, Chicureo Colina," where teaching, research, and
				microbiological diagnosis activities are carried out, working directly with the veterinary
				clinical hospital. She is a member of the Chilean Society of Microbiology and the
				International Microbiota Society. Dr. Thomson serves as an editor for Frontiers Veterinary
				Science, in the Animal Nutrition and Metabolism section, and Frontiers in Microbiology, in
				the Microorganisms in Vertebrate Digestive Systems section, among others. Recently, she
				began collaborating with the Sporotrichosis group of the Mycotic Diseases Branch Teams
				at the Centers for Disease Control and Prevention (CDC) USA.	of the Centers for Disease Control and Prevention (CDC) USA
			</p>

			<p><strong>AREAS OF RESEARCH</strong>
			<br>Veterinary Clinical Microbiology, Animal Microbiome, Antibiotic Resistance.</p>

			<p><strong>PROJECTS</strong></p>
			<ul>
				<li>Fondecyt Initiation #11231174 2023 Metagenomic characterization of the antibiotic resistome and microbiome from samples obtained in healthy dogs and cats. Principal Investigator</li>
				<li>Evaluation of changes in the composition, function, and gene expression of the intestinal microbiome in dogs, generated using different groups of antibiotics. Project in progress: PAI #77190070. Principal Investigator.</li>
				<li>Detection of the carrier state of sporotrichosis in feline claws from the cities of Santiago, Valdivia, and Punta Arenas (IR: Pamela Purina Scientific Funds 2023. Principal Investigator. (Co-investigator: student Leslie Camila del Río)</li>
				<li>Genotypic characterization of methicillin-resistant Staphylococcuss pp. clonal complexes isolated from dogs, cats, and humans. Project in progress: Purina Scientific Funds 2022. Principal Investigator</li>
				<li>Detection of methicillin-resistant Staphylococcus spp. strains from dogs, cats, and humans. Completed project: Purina Scientific Funds 2021. Principal Investigator.</li>
				<li>Evaluation of the effect of sucralose on the composition and function of the intestinal microbiome in healthy subjects. Completed project: Fondecyt #3170609. Principal Investigator</li>
			</ul>

			<p><strong>SCIENTIFIC PUBLICATIONS</strong></p>
			<ul>
				<li>Thomson, P. ,Carreño, N. & Núñez, A., 2023, Main mites associated with dermato pathiespresent in dogs and other members of the Canidae family: Open Veterinary Journal. 13, 2, p.131-14212 p.</li>
				<li>Thomson, P.,González, C.,Blank, O.,Ramírez, V.,Río, C.D.,Santibáñez, S.&Pena, P., feb.2023, Sporotrichosis Outbreak Due to Sporothrix brasiliensis in Domestic Cats in Magallanes, Chile: A One-Health-Approach Study: Journal of Fungi.9,2, 226.</li>
				<li>Núñez, A. H.,Hidalgo, F. G.,Morales, P. C.,Silva, V. E.,Thomson, P. E.&Castro, R.A.,2022, Antifungal susceptibility of Malassezia pachydermatis isolated from the external auditive conduct from dogs, in central Chile: Open Veterinary Journal. 12, 1, p.99-1046 p. </li>
				<li>Lara, F.,Castro, R. & Thomson, P.,2022, Changes in the gut microbiome and colic inhorses: Are they causes or consequences? : Open Veterinary Journal. 12, 2, p.242-2498p.</li>
				<li>Thomson P, Santibáñez R, Rodríguez-Salas C, Flores- Yañez C, Garrido D. Differences in the composition and predicted functions of the intestinal microbiome of obese and normal weight adult dogs. PeerJ. 2022 16;10: e12695.</li>
				<li>Lara F, Castro R, Thomson P.Changes in the gut microbiome and colic in horses: Are they causes or consequences? Open Vet J. 2022;12(2):242-249.</li>
				<li>Thomson P, García P, Miles J, Isla D, Yáñez C, Santibáñez R, Núñez A, Flores-Yáñez C, DelRío C, Cuadra F. Isolation and Identification of Staphylococcus Species Obtained fromHealthy Companion Animals and Humans. Vet Sci. 2022; 13;9(2):79.</li>
				<li>Santibáñez R, Lara F, Barros TM, Mardones E, Cuadra F, Thomson P. Ocular Microbiome in aGroup of Clinically Healthy Horses. Animals (Basel). 2022 7;12(8):943.</li>
				<li>Núñez F P, Quera R, Bay C, Thomson P. Fecal microbiota transplant, its usefulness beyondClostridioides difficile in gastrointestinal diseases. Gastroenterol Hepatol. 2022;45(3):223-230.</li>
				<li>Núñez AH, Hidalgo FG, Morales PC, Silva VE, Thomson P E, Castro RA. Antifungalsusceptibility of Malassezia pachydermatis isolated from the external auditive conduct from dogs, in central Chile. Open Vet J. 2022;12(1):99-104.</li>
				<li>Santibáñez R, Rodríguez-Salas C, Flores-Yáñez C, Garrido D, Thomson P. Assessment ofChanges in the Oral Microbiome That Occur in Dogs with Periodontal Disease. Vet Sci. 202127;8(12):291</li>
				<li>Thomson P, Núñez P, Quera R,Bay C. Gastrointestinal microbiome, what is behind faecalmicrobiota transplantation? New Microbes New Infect. 2021 13; 42:100898.</li>
				<li>Thomson P, Lara P, Maier L, Ledesma P, López O, Moreira R. Detección de Helicobacter sppen la mucosa gástrica de felinos domésticos clínicamente sanos mediante la prueba rápida de ureasa e histopatología. RIVEP 2020 31, 4, e19039.</li>
				<li>Medina DA, Li T, Thomson P, Artacho A, Pérez-Brocal V, Moya A. Cross-Regional View ofFunctional and Taxonomic Microbiota Composition in Obesity and Postobesity. TreatmentShows Country Specific Microbial Contribution. Front Microbiol. 2019. 17; 10:2346.</li>
				<li>Thomson P, Santibáñez R, Aguirre C, Galgani J, Garrido D. Short-Term Impact of Sucralose Consumption on the Metabolic Response and Gut Microbiome of Healthy Adults. 2019 Br J Nutr. 28;122(8):856-862</li>
				<li>Ruiz A, Medina DA, Maier L, Thomson P. Dermatophytosis in domestic cats (Felis catus)positive to retrovirus. Rev RIVEP. 2019. 30; 2: 902-907.</li>
				<li>Pérez- Cantero A, Thomson P, Paredes K, Guarro J, CapillaJ. Antifungal susceptibility of Saccharomyces cerevisiae and therapy in a murine model of disseminated infection. RevIberoam Micol. 2019; 36 (1):37-40 </li>

				<li>Thomson P, Medina D. A., Ortuzar V, Gotteland M, Garrido G. Anti-inflammatory effect ofmicrobial consortia during the consumption of dietary polysaccharides. Food Research Inter.2018; 109: 14-23.</li>
				<li>Thomson P. Monsalves P, Maier L, Rojas M. Dermatophyte colonization in rabbits kept in petstores of Santiago of Chile. Rev. MVZ Córdoba. 2017; 22 (3):6334-6338.</li>
				<li>Medina DA, Pinto F, Ovalle A, Thomson P,Garrido D. Prebiotics Mediate MicrobialInteractions in a Consortium of the Infant Gut Microbiome. Int J Mol Sci. 2017; 4;18 (10).</li>
				<li>Thomson P, Medina DA, Garrido D. Human milk oligosaccharides and infant gutBifidobacteria: Molecular strategies for their utilization. Food Microbiol (2018), doi:10.1016/j.fm.2017.09.001</li>
				<li>Thomson P, López-Fernández L, Guarro J, Capilla J. Virulence and antifungal therapy ofmurine disseminated infection by Rhodotorula mucilaginosa. Diagn Microbiol Infect Dis. 2017;89(1):47-51.</li>
				<li>Thomson P, Mayayo E, López-Fernández L, Guarro J, Capilla J. Combined antifungaltherapy against systemic murine infections by rare Cryptococcus species. Mycoses. 2017;60(2):112-117.</li>
				<li>Siqueira JPZ, SuttonDA, García D, Thomson P, Wiederhold N, Guarro J. Species diversity of Aspergillus section versicolores in clinical samples and antifungal susceptibility. Fungal Biol.2016;120 (11):1458-1467</li>
				<li>Thomson P, Guarro J, Mayayo E, Capilla J. Efficacy of posaconazole in a murine model of systemic infection by Saprochaete capitate. Antimicrob Agents Chemother. 2015; 59: 7477-7482.</li>
				<li>Thomson P, Monsalves P, Maier L, Silva V. Dermatophyte colonization on guinea pigs (Caviaporcellus) kept in pet stores. First report from Santiago, Chile. Rev Iberoam Micol. 2015; 32:103-105.</li>
				<li>Thomson P, Martínez M. Clostridium difficile: un patógeno emergente en MedicinaVeterinaria. REDVET. 2012; 13: 3 11</li>
				<li>Thomson P, Anticevic S, Rodríguez H, Silva V. Actividad antifúngica y perfil de seguridad del producto natural derivado del aceite de maravilla ozonizado (AMO3) en dermatofitos. Rev. Chil. Infectol. 2011; 28: 512-519.</li>
				<li>Thomson P, Miranda Gabriel, Silva Víctor. Linfadenitis canina producida por Cryptococcusneoformans. Primer caso en Chile. Rev Iberoam Micol. 2006; 23: 238-240.–Silva V, Thomson P, Maier L, Anticevic S. Infección y colonización por dermatofitos encánidos del área Sur de Santiago, Chile. Rev Iberoam Micol. 2003; 20: 145-148 </li>

			</ul>

			<p><strong>CAPÍTULOS DE LIBRO</strong></p>
			<ul>
				<li>Pamela Thomson, Daniel Garrido. Chapter 5: Human milk oligosaccharides and healthpromotion through the gut microbiome. EN: Dairy in Human Health and Disease across theLifespan. Editors Ronald Ross Watson, Robert J Collier, Victor Preedy. USA. 2017.</li>
				<li>Pamela Thomson. Micosis subcutáneas y profundas. EN: Tópicos de dermatología en pequeños animales. Autores: Liliana Maier y María Calderón. Ediciones Universidad Santo</li>
			</ul>
			`
		},
		{
			id: 'peter-huntington',
			name: 'PETER HUNTINGTON',
			pre: 'DR',
			description: 'Kentucky Equine Research, Australia',
			flagUrl: '/img/BANDERA-AUS.png',
			cv: `${cvStyle}
			<ul>
				<li>Dr. Peter Huntington received a veterinary degree from the University of Melbourne in 1981 and then worked in equine practice in Berwick, Victoria. He joined the Department of Agriculture(Victoria) as the horse specialist veterinary officer. While with the Department of Agriculture, he conducted research and investigation into the nutrition of horses. </li>
				<li>Dr. Huntington is an external lecturer and examiner at the University of Melbourne Veterinary Science program and holds numerous other appointments in the horse industry. He is a past president and editor of the Australian Equine VeterinaryAssociation and has been a Trustee of the Australian Horse Industry Council for a number of years. In 1993 he joined Rhone-Poulenc Animal Nutrition (RPAN) as Director of EquineNutrition to spearhead their horse nutrition division. This commenced a relationship with Kentucky Equine Research, who provided consultancy services to RPAN. In 1999, Kentucky Equine Research established an Australasian operation with Dr. Huntington as Director of Equine Nutrition. </li>
				<li>Dr. Huntington travels widely to consult with horse owners and managers on equine nutrition and to lecture on the subject. Dr. Huntington is the author of the popular book Horse Sense-The Guide to Horse Care in Australia and New Zealand 2nd edition published in 2005 and is a respected author of many articles and papers on a variety of topics relating to equine nutrition.</li>
			</ul>
			`
		},
		{
			id: 'ramiro-calderon-villa',
			name: 'RAMIRO CALDERÓN VILLA',
			pre: 'DR',
			description: 'FMVZ-UNAM',
			flagUrl: '/img/BANDERA-MEXICO.png',
			cv: `${cvStyle}
			<p>
				Dr.Ramiro Calderón Villa completed his studies at the Faculty of Veterinary Medicine
				and Animal Husbandry (FMVZ) of UNAM. He has 42 years of experience in the areas of
				equine surgery, nutrition, and behavior. For the past 37 years, he has been a lecturer
				in the Equine Department of FMVZ-UNAM, where he also served as department head from
				1996 to 2001. He teaches courses in the Professional Cycle of the Veterinary Medicine
				and Animal Husbandry degree program on Equine Medicine and Animal Husbandry Practice I,
				as well as Equine Surgery and Anesthesia Practice. Dr. Ramiro Calderón Villa served as
				the President of the Mexican Association of Veterinary Specialists in Equines A.C.
				during the 2012-2013 term. He actsas a thesis advisor for undergraduate and specialty degrees.
				He has organized approximately 400 courses related to Equine Sciences and has participated as a speaker in
				national and international forums.
			</p>
			`
		},
		{
			id: 'santiago-garcia-pasquel',
			name: 'SANTIAGO GARCÍA PASQUEL',
			pre: 'DR',
			description: 'Universidad del Valle de México',
			flagUrl: '/img/BANDERA-MEXICO.png',
			cv: `${cvStyle}
			<p><strong>DR. SANTIAGO GARCÍA PASQUEL</strong></p>

			<p><strong>EDUCATION</strong></p>
			<ul>
				<li>Bachelor's degree in Veterinary Medicine and Animal Science from FMVZ-UNAM.</li>
				<li>Internship in Equine Medicine and Surgery at Chino Valley Equine Hospital in California in 2007.</li>
				<li>Master of Science from Michigan State University in 2012.</li>
				<li>Training in critical care and emergency medicine for equines at the University of Pennsylvania in 2012.</li>
				<li>Director of the Equine Hospital at UVM.</li>
			</ul>

			<p><strong>PROFESSIONAL EXPERIENCE</strong></p>
			<ul>
				<li>Head of the Department of Education Technologies, teacher, and clinician at the Equine Hospital for UNAM in 2014.</li>
				<li>Developed several projects for the application of new technologies in animal medicine.</li>
				<li>Speaker at various conferences.</li>
				<li>Currently the Coordinator of the Veterinary Medicine and Animal Science Career at the University of Valle de México Campus Sur, Coyoacán Headquarters in Mexico City.</li>
			</ul>

			<p><strong>RECENT PUBLICATIONS</strong></p>
			<ul>
				<li>Author of the book "Manual of Equine Neonatology" published by Intermedia (Argentina)</li>
			</ul>
			`
		},
		{
			id: 'silvia-elena-buntinx-dios',
			name: 'SILVIA ELENA BUNTINX DIOS',
			pre: 'DR',
			description: 'FMVZ-UNAM',
			flagUrl: '/img/BANDERA-MEXICO.png',
			cv: `${cvStyle}
			<p>
				Dr. Silvia Elena Buntinx Dios is a Veterinary Zootechnician from the Faculty of Veterinary
				Medicine and Animal Science (FMVZ) at UNAM and obtained M.Sc. and Ph.D. degrees in
				Nutrition from North Carolina State University.
				Dr. Buntinx has 23 years of academic experience at UNAM, in the Faculty of Veterinary
				Medicine and Animal Science, where she works in the Department of Animal Nutrition and
				Biochemistry. She is a Full Professor, definitive, and has taught undergraduate courses
				in Nutrition and Foods and Animal Feeding (which she currently coordinates) and graduate courses in
				Animal Digestive Physiology, Ruminant Gastrointestinal Physiology, Energy and
				Nitrogenous Compound Metabolism, and Selected Feeding Topics.
				She served as Secretary General of FMVZ from March 2005 to April 2009 and Head of the
				Publications Department and Director of the Veterinary Mexico OA journal from April
				2012 to April 2016.
				In May 2016, she received the "Manuel Chavarría Chavarría" Award for best full-time
				professor in the intermediate cycle of the career during the 2015 academic year.
			</p>
			`
		},
		{
			id: 'tamara-tadich-gallo',
			name: 'TAMARA TADICH GALLO',
			pre: 'DR',
			description: 'Universidad Austral de Chile',
			flagUrl: '/img/BANDERA-CHILE.png',
			cv: `${cvStyle}
			<p>
				Tamara Tadich Gallo is an academic at the Animal Science Institute of the Universidad
				Austral de Chile. Tamara is a Veterinarian with a Master of Science in Equine Science from
				the University of Edinburgh, Scotland; and a Doctorate in Veterinary Sciences from the
				Universidad Austral de Chile.
				She teaches undergraduate and postgraduate courses in animal welfare and applied
				behavior in equines, areas in which she also conducts research, resulting in more than 40
				scientific publications and 10 book chapters.
				She is a member of the equine welfare committee of both the Chilean Equine Veterinary
				Association and the Ibero-American Federation of Equine Veterinary Associations
				(FIAVE). Additionally, she is a co-founder of the Equi-Par foundation for the promotion of working
				equine welfare.
			</p>
			`
		}
	],
	speakersText: {
		title: 'SPEAKERS'
	},
	programsText: 'PROGRAM',
	conferenciaText: 'CONFERENCE',
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
					startHour: '',
					endHour: '',
					extraContent: ``
				},
				{
					contents: `<p>REMARKS BY <strong>DR. GONZALO VILLAR PATIÑO</strong>
							<br>DIRECTOR OF RESEARCH, GRUPO NUTEC</p>`,
					cols: 1,
					startHour: '08:50',
					endHour: '08:55',
					extraContent: ``
				},
				{
					contents: `<p>REMARKS BY <strong>ING. JÉRÉMIE LARCHER</strong>
						<br>CEO, GRUPO NUTEC.</p>`,
					cols: 1,
					startHour: '08:55',
					endHour: '09:00',
					extraContent: ``
				},
				{
					contents: `<p>REMARKS BY <strong>MVZ CERT ROBERTO SOLÍS JAQUEZ</strong>
						<br>PRESIDENT OF ASOCIACIÓN MEXICANA DE MEDICOS VETERINARIOS
						<br>ESPECIALISTAS EN EQUINOS A.C.</p>`,
					cols: 1,
					startHour: '09:00',
					endHour: '09:10',
					extraContent: ``
				},
				{
					contents: `<p>REMARKS BY <strong>DR. GABRIELA GIOCONDA REZA BORJA</strong>
						<br>RECTOR OF UNIVERSIDAD DEL VALLE DE MÉXICO, SOUTH CAMPUS, CDMX.</p>`,
					cols: 1,
					startHour: '09:10',
					endHour: '09:20',
					extraContent: ``
				},
				{
					contents: `<p>REMARKS BY <strong>DR. CARLOS GUILLERMO GUTIÉRREZ AGUILAR</strong>
						<br>DIRECTOR OF FACULTAD DE MEDICINA VETERINARIA Y ZOOTECNIA
						<br><strong>INAUGURATION</strong></p>`,
					cols: 1,
					startHour: '09:20',
					endHour: '09:30',
					extraContent: ``
				},
				{
					contents: `
						<p>
							<strong>SESSION 1: DIGESTIVE SYSTEM: EVOLUTION, MICROBIOME AND DIGESTIVE DISORDERS</strong>
							<br>
							<br><p>MODERATOR: <strong>DR. MARÍA MASRI DABA</strong>
							<br>MEDICINE, SURGERY, AND ANIMAL HUSBANDRY FOR EQUINES DEPT. FMVZ-UNAM
						</p>`,
					cols: 1,
					startHour: '',
					endHour: '',
					extraContent: ``
				},
				{
					contents: `<p><strong>DR. MARIANO HERNÁNDEZ GIL</strong>
						<br>EQUINE MEDICINE, SURGERY AND ANIMAL
						<br>HUSBANDRY DEPT.</p>`,
					cols: 2,
					extraContent: '<p>EVOLUTIONARY HORSE NUTRITION</p>',
					startHour: '09:45',
					endHour: '10:30'
				},
				{
					contents: `<p><strong>DR. WENDY PEARSON</strong>
						<br>ANIMAL BIOSCIENCE UNIVERSITY OF
						<br>
						<br>GUELPH DEPT. ONTARIO</p>`,
					cols: 2,
					extraContent: `<p>INFLUENCE OF NUTRITION IN LEAKY GUT SYNDROME</p>`,
					startHour: '10:30',
					endHour: '11:15'
				},
				{
					contents: `<p><strong>BREAK</strong></p>`,
					cols: 1,
					startHour: '11:15',
					endHour: '11:25'
				},
				{
					contents: `<p><strong>DR. PAMELA THOMSON</strong>
						<br>CLINICAL MICROBIOLOGY AND MICROBIOME
						<br>LABORATORY, SCHOOL OF VETERINARY
						<br>MEDICINE, FACULTY OF LIFE SCIENCES,
						<br>UNIVERSIDAD ANDRES BELLO, SANTIAGO, CHILE</p>`,
					cols: 2,
					extraContent: `<p>CHANGES IN THE GUT MICROBIOME: CAUSE OR CONSEQUENCE OF COLIC?</p>`,
					startHour: '11:25',
					endHour: '12:10'
				},
				{
					contents: `<p><strong>DR. GULSAH KAYA KARASU</strong>
						<br>VAN HALL LARENSTEIN UNIVERSITY OF
						<br>APPLIED SCIENCES. VELP, NETHERLANDS</p>`,
					cols: 2,
					extraContent: `<p>DIETARY TRANSITIONS TOWARDS SUSTAINABLE HORSE NUTRITION</p>`,
					startHour: '12:10',
					endHour: '12:55'
				},
				{
					contents: `<p><strong>QUESTIONS & ANSWERS</strong></p>`,
					cols: 1,
					extraContent: '',
					startHour: '12:55',
					endHour: '13:15'
				},
				{
					contents: `
						<p>
							<strong>SESSION 2: FEEDING AND NUTRIENT REQUIREMENTS</strong>
							<br>
							<br>MODERATOR: <strong>DR. MYRIAM BOETA ACOSTA</strong>
							<br>REPRODUCTION DEPT. FMVZ-UNAM.
						</p>`,
					cols: 1,
					extraContent: ``,
					startHour: '',
					endHour: ''
				},
				{
					contents: `<p><strong>DR. MERIEL JEAN MOORE-COLYER</strong>
						<br>INDEPENDENT CONSULTANT. UNITED KINGDOM</p>`,
					cols: 2,
					extraContent: `<p>FORAGE: FROM THE HAYBIOME TO HORSE HEALTH</p>`,
					startHour: '13:15',
					endHour: '14:00'
				},
				{
					contents: `<p><strong>DR. ELÍAS VELÁZQUEZ CANTÓN</strong>
						<br>GRUPO NUTEC</p>`,
					cols: 2,
					extraContent: `<p>WATER IS AN ESSENTIAL NUTRIENT</p>`,
					startHour: '14:00',
					endHour: '14:45'
				},
				{
					contents: `<p><strong>QUESTIONS & ANSWERS</strong></p>`,
					cols: 1,
					extraContent: ``,
					startHour: '14:45',
					endHour: '15:05'
				},
				{
					contents: `<p><strong>BREAK</strong></p>`,
					cols: 1,
					extraContent: '',
					startHour: '15:05',
					endHour: '16:00'
				},
				{
					contents: `
						<p>
							<strong>SESSION 3: FEEDING FOR LIFE</strong>
								<br>
								<br>MODERATOR: <strong>DR. ANA CELIA GÓMEZ CAMPOS</strong>
								<br>GRUPO NUTEC
						</p>`,
					cols: 1,
					extraContent: ``,
					startHour: '',
					endHour: ''
				},
				{
					contents: `<p><strong>DR. RAMIRO CALDERÓN VILLA</strong>
						<br>EQUINE MEDICINE, SURGERY, AND ANIMAL
						<br>HUSBANDRY DEPT.</p>`,
					cols: 2,
					extraContent: `<p>FEEDING AND DIGESTIVE DISORDERS</p>`,
					startHour: '16:00',
					endHour: '16:50'
				},
				{
					contents: `<p><strong>DR PETER HUNTINGTON</strong>
						<br>KENTUCKY EQUINE RESEARCH, AUSTRALIA</p>`,
					cols: 2,
					extraContent: `<p>FEEDING OF THE PREGNANT AND LACTATING MARE</p>`,
					startHour: '16:50',
					endHour: '17:40'
				},
				{
					contents: `<p><strong>QUESTIONS & ANSWERS`,
					cols: 1,
					extraContent: '',
					startHour: '17:40',
					endHour: '18:00'
				}
			]
		},
		{
			date: `<p>Friday<strong>, April 26<sup>th<sup></strong></p>`,
			events: [
				{
					contents: `
						<p>
							<br><strong>SESSION 4: FOAL FEEDING</strong>
							<br>
							<br>MODERATOR: <strong>DR. GABRIELA QUIJANO MONTOYA</strong>
							<br>REPRODUCCIÓN EQUINA VILLARAÑA
						</p>`,
					cols: 1,
					startHour: '',
					endHour: '',
					extraContent: ``
				},
				{
					contents: `
						<p>
							<strong>DR. CHRIS ROGERS</strong>
							<br>VETERINARY SCHOOL, MASSEY UNIVERSITY,
							<br>NEW ZEALAND
						</p>`,
					cols: 2,
					startHour: '08:15',
					endHour: '09:00',
					extraContent: `<p>RESILIENCE OF FECAL MICROBIOTA IN STABLED THOROUGHBRED HORSES FOLLOWING ABRUPT DIETARY TRANSITION BETWEEN FRESHLY CUT PASTURE AND THREE FORAGE BASED DIETS</p>`
				},
				{
					contents: `<p><strong>DR. SANTIAGO GARCÍA PASQUEL</strong></p>`,
					cols: 2,
					startHour: '09:00',
					endHour: '09:45',
					extraContent: `<p>MATURATION OF THE NEONATAL DIGESTIVE SYSTEM</p>`
				},
				{
					contents: `<p><strong>DR. ADRIANA YOLANDA DÍAZ ARCHUNDIA</strong>
						<br>FACULTY OF VETERINARY MEDICINE AND
						<br>ANIMAL HUSBANDRY, UAEMEX</p>`,
					cols: 2,
					startHour: '09:45',
					endHour: '10:30',
					extraContent: `<p>NUTRITIONAL PROBLEMS IN THE FOAL FROM WEANING TO THE FIRST YEAR OF LIFE</p>`
				},
				{
					contents: `<p><strong>DR. KATHLEEN CRANDELL</strong>
						<br>KENTUCKY EQUINE RESEARCH, E.U.</p>`,
					cols: 2,
					startHour: '10:30',
					endHour: '11:15',
					extraContent: `NUTRIENT REQUIREMENTS AND FEEDING PRACTICES FOR A SUCCESSFUL WEANING AND GROWTH`
				},
				{
					contents: `<p><strong>QUESTIONS & ANSWERS</strong></p>`,
					cols: 1,
					startHour: '11:15',
					endHour: '11:35',
					extraContent: ``
				},
				{
					contents: `<p><strong>BREAK</strong></p>`,
					cols: 1,
					extraContent: '',
					startHour: '11:35',
					endHour: '11:45'
				},
				{
					contents: `
						<p>
							<strong>SESSION 5: ANIMAL WELFARE: GOOD FEEDING PRACTICES</strong>
							<br>
							<br>MODERATOR: <strong>DR. MARÍA FERNANDA VÁZQUEZ CARRILLO</strong>
							<br>ANIMAL NUTRITION AND BIOCHEMISTRY DEPT. FMVZ-UNAM.
						</p>`,
					cols: 1,
					startHour: '',
					endHour: '',
					extraContent: ``
				},
				{
					contents: `<p><strong>DR. TAMARA TADICH</strong>
						<br>ANIMAL SCIENCE INSTITUTE, UNIVERSIDAD
						<br>AUSTRAL DE CHILE.</p>`,
					cols: 2,
					extraContent: `<p>HOW TO MEASURE WELFARE IN HORSES: CONFINEMENT VS GRAZING</p>`,
					startHour: '11:45',
					endHour: '12:30'
				},
				{
					contents: `<p><strong>DR. LUCÍA PÉREZ MANRIQUE</strong>
						<br>ETHOLOGY, WILDLIFE, AND LABORATORY
						<br>ANIMALS DEPT.</p>`,
					cols: 2,
					extraContent: `<p>EFFECT OF FEEDING ON HORSE WELFARE</p>`,
					startHour: '12:30',
					endHour: '13:15'
				},
				{
					contents: `<p><strong>DR. MARÍA ESTHER ORTEGA CERRILLA</strong>
						<br>COLLEGE OF POSTGRADUATE STUDIES,
						<br>MONTECILLO MEXICO</p>`,
					cols: 2,
					extraContent: `<p>USE OF ESSENTIAL OILS IN HORSES</p>`,
					startHour: '13:15',
					endHour: '14:00'
				},
				{
					contents: `<p><strong>QUESTIONS & ANSWERS</strong></p>`,
					cols: 1,
					extraContent: ``,
					startHour: '14:00',
					endHour: '14:20'
				},
				{
					contents: `<p><strong>BREAK</strong>
						<br>
						<br></p>`,
					cols: 1,
					extraContent: '',
					startHour: '14:20',
					endHour: '15:30'
				},
				{
					contents: `<p>
						<strong>SESSION 6: SEVEN YEARS AFTER NAEQUINA</strong>
						<br>
						<br>MODERATOR: <strong>DR. AURORA H. RAMÍREZ PÉREZ</strong>
						<br>ANIMAL NUTRITION AND BIOCHEMISTRY DEPT. FMVZ-UNAM.
					</p>`,
					cols: 1,
					extraContent: ``,
					startHour: '',
					endHour: ''
				},
				{
					contents: `<p><strong>DR. SILVIA E. BUNTINX DIOS</strong>
						<br>ANIMAL NUTRITION AND BIOCHEMISTRY
						<br>DEPT. FMVZ- UNAM.</p>`,
					cols: 2,
					extraContent: `<p>EQUINE-FEED RELATIONSHIP</p>`,
					startHour: '15:30',
					endHour: '16:15'
				},
				{
					contents: `<p><strong>QUESTIONS & ANSWERS</strong></p>`,
					cols: 1,
					extraContent: ``,
					startHour: '16:15',
					endHour: '16:20'
				},
				{
					contents: `<p>ROUND-TABLE DISCUSSION: SEVEN YEARS AFTER NAEQUINA
					<br><strong>MODERATOR: DR. SILVIA E. BUNTINX DIOS. FMVZ-UNAM</strong>
					<br>
						<br><strong>DR. MARÍA MASRI DABA</strong>
						<br>EQUINE MEDICINE, SURGERY AND ANIMAL HUSBANDRY DEPT. FMVZ, UNAM
						<br><strong>DR. BERNARDO AGUADO MEDINA</strong>
						<br>AGRIBRANDS PURINA MEXICO
						<br><strong>DR. ANA CELIA GÓMEZ CAMPOS</strong>
						<br>GRUPO NUTEC
						<br><strong>DR. BERNARDO MONROY HERNÁNDEZ</strong>
						<br>PLATINUM MÉXICO
						<br><strong>DR. ALFREDO JULIÁN PAREDES</strong>
						<br>PRIVATE PRACTICE
						<br>
						<br><strong>CLOSING</strong></p>`,
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
