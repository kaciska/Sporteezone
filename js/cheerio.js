const request = require("request-promise");
const cheerio = require("cheerio");
var fs = require("fs");

(async () => {

	let itemList = [];

	const afitUrl = "http://rezervace.afit.cz:18080/timeline/week;jsessionid=74FCCE689D632791A8093D2DE527EAD8?criteriaTimestamp&resetFilter=true#timelineCalendar";

	const response = await request(afitUrl);

	const $ = cheerio.load(response);

	let courses = [];

	$("div[class='lesson_name']").each(function(){
		let course = {}
		course.name = $(this).text().trim()
		courses.push(course)
	});

	let day = $("span[class='day']").text().trim();
	$("span[class='day']").each(function(i){
		let course = courses[i];
		course.day = $(this).text().trim()
	});

	let start = $("div[class='time start']").text().trim();
	$("div[class='time start']").each(function(i){
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

	let price = $("div[class='price']").text().trim();
	$("div[class='price']").each(function(i){
		let course = courses[i];
		course.price = $(this).text().trim()
	});

	itemList.push({
		afit: {
		 courses
		}
	  });

	fs.writeFile("./afit.json", JSON.stringify(itemList, null, 4).replace(/\\n/g,""), (err) => {

		if (err) {
			console.error(err);
			return;
		};
		console.log("File has been created");
	});

}
)();


(async () => {

	let itemList = [];

	const befitUrl = "https://rezervace.befitbrno.cz/timeline/week?criteriaTimestamp&resetFilter=true#timelineCalendar";

	const response = await request(befitUrl);

	const $ = cheerio.load(response);

	let courses = [];

	$("div[class='lesson_name']").each(function(){
		let course = {}
		course.name = $(this).text().trim()
		courses.push(course)
	});

	let day = $("span[class='day']").text().trim();
	$("span[class='day']").each(function(i){
		let course = courses[i];
		course.day = $(this).text().trim()
	});

	let start = $("div[class='time start']").text().trim();
	$("div[class='time start']").each(function(i){
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

	let price = $("div[class='price']").text().trim();
	$("div[class='price']").each(function(i){
		let course = courses[i];
		course.price = $(this).text().trim()
	});

	itemList.push({
		befit: {
		 courses
		}
	  });

	fs.writeFile("./befit.json", JSON.stringify(itemList, null, 4).replace(/\\n/g,""), (err) => {

		if (err) {
			console.error(err);
			return;
		};
		console.log("File has been created");
	});

}
)();
