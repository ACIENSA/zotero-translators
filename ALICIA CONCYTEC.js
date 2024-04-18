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
	"lastUpdated": "2024-04-17 14:14:31"
}

function detectWeb(doc, url) {
	const docTable = doc.querySelector("table.main-detail");
	const itemType = text(docTable, "span", 1);
	if (itemType === "tesis de grado" || itemType === "tesis de maestría" || itemType === "tesis doctoral") {
		return "thesis";
	} else if (itemType === "artículo") {
		return "journalArticle";
	} else if (itemType === "libro") {
		return "book";
	}

	return false;
}

function doWeb(doc, url) {
	const itemType = detectWeb(doc, url);
	if (itemType === "thesis") {
		const item = new Zotero.Item(itemType);
		item.title = attr(doc, "meta[name='DC.title']", "content");
		const creators = [];
		attr(doc, "meta[name='DC.creator']", "content");
		item.creators = []
		item.complete();
	}
}/** BEGIN TEST CASES **/
var testCases = [
]
/** END TEST CASES **/
