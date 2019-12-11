const request = require("request-promise");
const cheerio = require("cheerio");
var fs = require("fs");

(async () => {

	let itemList = [];

	const weisserUrl = "https://www.weissersportcentrum.cz/rezervace/";

	const response = await request(weisserUrl);

	const $ = cheerio.load(response);

	let courses = [];

	$("div[class='lesson_name']").each(function(){
		let course = {}
		course.name = $(this).text().trim()
		courses.push(course)
	});

	let day = $("td[class='ott-tooltip-date']").text().trim();
	$("td[class='ott-tooltip-date']").each(function(i){
		let course = courses[i];
		course.day = $(this).text().trim()
	});

	let start = $("td[class='ott-tooltip-date']").text().trim();
	$("td[class='ott-tooltip-date']").each(function(i){
		let course = courses[i];
		course.start = $(this).text().trim()
	});

	let end = $("div[class='time end']").text().trim();
	$("div[class='time end']").each(function(i){
		let course = courses[i];
		course.end = $(this).text().trim()
	});

	let availability = $("div[class='availability']").text().trim();
	$("div[class='availability']").each(function(i){
		let course = courses[i];
		course.availability = $(this).text().trim()
	});

	/*let price = $("div[class='price']").text().trim();
	$("div[class='price']").each(function(i){
		let course = courses[i];
		course.price = $(this).text().trim()
	});*/

	itemList.push({
		weisser: {
		 courses
		}
	  });

	fs.writeFile("./weisser.json", JSON.stringify(itemList, null, 4).replace(/\\n/g,""), (err) => {

		if (err) {
			console.error(err);
			return;
		};
		console.log("File has been created");
	});

}
)();