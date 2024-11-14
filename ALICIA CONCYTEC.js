{
	"translatorID": "bf1def78-e3c6-4df5-9710-e9677f9a6d52",
	"label": "ALICIA CONCYTEC",
	"creator": "Eduardo Oros",
	"target": "^https?://(www\\\\.)?alicia.concytec.gob.pe/",
	"minVersion": "5.0",
	"maxVersion": "",
	"priority": 100,
	"inRepository": true,
	"translatorType": 4,
	"browserSupport": "gcsibv",
	"lastUpdated": "2024-04-20 14:17:27"
}

function detectWeb(doc, url) {
	const docTable = doc.querySelector("table.main-detail");
	const itemType = text(docTable, "td", 1);
	if (itemType === "tesis de grado" || itemType === "tesis de maestría" || itemType === "tesis doctoral") {
		return "thesis";
	}
	
	return false;
}

async function doWeb(doc, url) {
	const item = new Zotero.Item("thesis");
	const docTable = doc.querySelector("table.main-detail");

	// title
	item.title = attr(doc, "meta[name='DC.title']", "content");

	// creators
	const creators = Array.from(doc.querySelectorAll("meta[name='DC.creator']"));
	item.creators = creators.map(creator => {
		const [lastName, firstName] = creator.getAttribute("content").split(", ");
		return {"type": "author", "firstName": firstName, "lastName": lastName}
	});

	// abstract
	item.abstractNote = text(doc, "div.tab-pane.active.description-tab td");

	// thesis type
	const itemType = text(docTable, "span", 1);
	item.thesisType = itemType === "tesis de grado" ? "bachelorThesis" : itemType === "tesis de maestría" ? "masterThesis" : "doctoralThesis";

	// university
	item.university = text(docTable, "td", 3);

	// place (todo)

	// date
	item.date = text(docTable, "td", 2);

	// # pages (todo)

	// language
	item.language = text(docTable, "td", 5) === "español" ? "es" : text(docTable, "td", 5) === "ingles" ? "en" : "";

	// url
	item.url = text(docTable, "td", 7);

	// archive
	item.archive = text(docTable, "td", 4);

	item.complete();
}/** BEGIN TEST CASES **/
var testCases = [
	{
		"type": "web",
		"url": "https://alicia.concytec.gob.pe/vufind/Record/UNAP_f38854b002a4005480d011d8265254df/Details#description",
		"items": [
			{
				"itemType": "thesis",
				"title": "Gestión administrativa en empresas agropecuarias",
				"creators": [
					{
						"type": "author",
						"firstName": "Ángel Custodio",
						"lastName": "Ruiz Romero"
					}
				],
				"date": "2003",
				"archive": "UNAPIquitos-Institucional",
				"language": "es",
				"libraryCatalog": "ALICIA CONCYTEC",
				"thesisType": "bachelorThesis",
				"abstract": "Proporciona un informe técnico descriptivo de las experiencias de gestión a toda la comunidad en general. Difunde la excelencia de la teoría con la práctica en el manejo gerencial de las Empresas Agropecuarias. Contribuye con elementos de consulta dentro del proceso Enseñanza Aprendizaje para estudiantes de las diferentes facultades y personas interesadas en el tema. Concluye que existe poca disponibilidad de pasturas cultivadas, con poca capacidad de carga y sometida sobre pastoreo extremo, para poder aumentar la población ganadera en Loreto; en lo que se refiere a la agricultura, tampoco existe explotación de parcelas por los limitantes en la promoción de actividades productivas diversos con financiamiento del Estado y Privado Nacional e Internacional. La actividad agropecuaria en la actualidad constituye una buena alternativa de ocupación e ingreso económico para un gran porcentaje de peruanos que se enfrentan en una Urbe que no ofrece opciones de empleo, por sus propias características. En la Región Loreto todavía no existe la cultura de la tierra por lo que casi la totalidad de pequeños agricultores y campesinos todavía se dedican a la recolección de productos de la naturaleza.",
				"university": "Universidad Nacional De La Amazonía Peruana",
				"url": "http://repositorio.unapiquitos.edu.pe/handle/20.500.12737/4188",
				"attachments": [],
				"tags": [],
				"notes": [],
				"seeAlso": []
			}
		]
	},
	{
		"type": "web",
		"url": "https://alicia.concytec.gob.pe/vufind/Record/UCVV_a36c12cc0d404707defd30beba7580ea",
		"items": [
			{
				"itemType": "thesis",
				"title": "Gestión administrativa para calidad del servicio en una instancia de gestión administrativa - Lambayeque",
				"creators": [
					{
						"type": "author",
						"firstName": "Heberth Casimiro",
						"lastName": "Zamora Caballero"
					}
				],
				"date": "2022",
				"archive": "UCV-Institucional",
				"language": "es",
				"libraryCatalog": "ALICIA CONCYTEC",
				"thesisType": "masterThesis",
				"abstractNote": "El enfoque central de esta investigación se vincula y se establece entre la gestión administrativa, enfocada sobre la calidad en servicio de una entidad de gestión educativa en Lambayeque. Este análisis se basa en una revisión documental de las teorías de la gestión científica, la teoría de la motivación en el trabajo y las expectativas. Este estudio adopta un enfoque descriptivo y correlacional, y se basa en un diseño no experimental. Se tomó una muestra de 32 empleados de una Gerencia Regional de Educación. Los datos correspondientes a las variables dependientes e independientes se obtuvieron a través de un instrumento de medición utilizando la escala Likert, y se procedió a evaluar la Evaluación de la solidez del instrumento a través del coeficiente de confiabilidad alfa de Cronbach y la revisión llevada a cabo por tres expertos. Los resultados del postest de la variable calidad en el servicio muestran que el 9,00% de los participantes se ubicaron en un nivel intermedio, mientras que el 91,00% obtuvo un nivel superior. En cuanto a la dimensión de fiabilidad, el 6,00% se situó en el nivel intermedio, y el 94,00% alcanzó el nivel superior. En lo que respecta a la capacidad de respuesta, el 13,00% obtuvo un nivel intermedio, mientras que el 87,00% alcanzó el nivel superior. En la dimensión de flexibilidad, el 13,00% se situó en el nivel medio, y el 87,00% obtuvo el nivel superior. Estos resultados reflejan mejoras notables en las puntuaciones, lo que indica un aumento significativo en la calidad del servicio. Además, los resultados estadísticos revelan, Asimismo, los resultados estadísticos muestran un valor p (Sig.) Con un valor p (Sig.) de 0,000, el cual está por debajo del Con un Al tener un nivel de significancia fijado en α = 0,05, se concluye de que la hipótesis nula (Ho) debe ser La hipótesis nula es descartada en respaldo de la hipótesis alternativa. (H1).. Asimismo, el coeficiente Rho es igual a 0,976, lo que indica que la gestión administrativa tiene un efecto significativamente positivo en la calidad del servicio en la Gerencia Regional de Educación en Lambayeque.",
				"university": "Universidad Cesar Vallejo",
				"url": "https://hdl.handle.net/20.500.12692/130522",
				"attachments": [],
				"tags": [],
				"notes": [],
				"seeAlso": []
			}
		]
	},
	{
		"type": "web",
		"url": "https://alicia.concytec.gob.pe/vufind/Record/UNAC_644412a08ab09e575e555dc9287ad457",
		"items": [
			{
				"itemType": "thesis",
				"title": "Habilidades gerenciales y gestión administrativa en los equipos de gestión administrativa en los equipos de gestión de la Red de Salud Ventanilla, Callao, 2019",
				"creators": [
					{
						"type": "author",
						"firstName": "Luis Jesus",
						"lastName": "Gutiérrez Campos"
					}
				],
				"date": "2020",
				"archive": "UNAC-Institucional",
				"language": "es",
				"libraryCatalog": "ALICIA CONCYTEC",
				"thesisType": "doctoralThesis",
				"abstractNote": "La tesis tuvo como objetivo determinar la relación entre las Habilidades gerenciales y la gestión administrativa de los equipos de gestión de los establecimientos de salud de la Red de Salud Ventanilla. El método empleado fue hipotético deductivo, de tipo básico, de nivel descriptivo - correlacional, de enfoque cuantitativo; de diseño no experimental y con corte transversal. Su total poblacional estuvo formada por los 60 profesionales de salud que conforman el equipo básico de gestión de los establecimientos de salud de la Red de Salud Ventanilla, la muestra fue conformada por el total de profesionales (15 médicos, 15 enfermeras, 15 obstetras y 15 odontólogos) de cada establecimiento de salud. La técnica empleada para recolectar información fue la encuesta siendo los instrumentos cuestionarios debidamente validados por un juicio de expertos y determinando su confiabilidad mediante el estadístico de fiabilidad Alfa de Cronbach cuyo valor fue de 0,913 para la variable habilidades gerenciales y 0,976 para la variable gestión administrativa. Respecto a los equipos de gestión de los establecimientos de salud de la Red de Salud Ventanilla, se concluyó: (a) Existe una relación entre habilidades gerenciales y gestión administrativa de “0,526”, con un valor de significancia de “0,00” pudiéndose afirmar que las mejores habilidades gerenciales se asocian con la mayor eficiencia en la gestión administrativa. (b) Existe una fuerte relación entre habilidades gerenciales y planeación de “0,57”, con un valor de significancia de “0,00”. (c) Existe una relación entre habilidades gerenciales y organización “0,51”, con un valor de significancia de “0,00” (d) Existe una relación entre habilidades gerenciales y dirección “0,52”, con un valor de significancia de “0,00” e) Existe una relación entre habilidades gerenciales y el control “0,49”, con un valor de significancia de “0,00”.",
				"university": "Universidad Nacional del Callao",
				"url": "https://hdl.handle.net/20.500.12952/5323",
				"attachments": [],
				"tags": [],
				"notes": [],
				"seeAlso": []
			}
		]
	}
]
/** END TEST CASES **/
