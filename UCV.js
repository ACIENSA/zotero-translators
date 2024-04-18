{
	"translatorID": "bf1def78-e3c6-4df5-9710-e9677f9a6d52",
	"label": "UCV",
	"creator": "Eduardo Oros",
	"target": "^https?://(www\\\\.)?repositorio.ucv.edu.pe/",
	"minVersion": "5.0",
	"maxVersion": "",
	"priority": 100,
	"inRepository": true,
	"translatorType": 4,
	"browserSupport": "gcsibv",
	"lastUpdated": "2024-04-17 13:07:55"
}

function detectWeb(doc, url) {
	return "thesis";
}

function doWeb(doc, url) {
	let itemType = detectWeb(doc, url);
	if (itemType === "thesis") {
		let translator = Zotero.loadTranslator("web");
		translator.setTranslator("951c027d-74ac-47d4-a107-9c3069ab7b48")
		translator.setDocument(doc);
		translator.setHandler("itemDone", function (obj, item) {
			item.itemType = "thesis";
			item.complete();
		})

		translator.getTranslatorObject(function (trans) {
			trans.doWeb(doc, url);
		});
	}
}/** BEGIN TEST CASES **/
var testCases = [
]
/** END TEST CASES **/
