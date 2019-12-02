const request = require("request-promise");
const cheerio = require("cheerio");
var fs = require("fs");

(async () => {

	let itemList = [];

	const yogaHouseUrl = "https://yogahouse.isportsystem.cz/";

	const response = await request(yogaHouseUrl);

	const $ = cheerio.load(response);

	let courses = [];

	$("span[class='ui-dialog-title']").each(function(){
		let course = {}
		course.name = $(this).text().trim()
		courses.push(course)
	});

	let day = $("p[class='actDesc']").text().trim();
	$("p[class='actDesc']").each(function(i){
		let course = courses[i];
		course.day = $(this).text().trim()
	});

	let start = $("span[class='time']").text().trim();
	$("span[class='time']").each(function(i){
		let course = courses[i];
		course.start = $(this).text().trim()
	});

	let availability = $("span[class='capacity']").text().trim();
	$("span[class='capacity']").each(function(i){
		let course = courses[i];
		course.availability = $(this).text().trim()
	});



	/*let price = $("div[class='price']").text().trim();
	$("div[class='price']").each(function(i){
		let course = courses[i];
		course.price = $(this).text().trim()
	});*/

	itemList.push({
		yogaHouse: {
		 courses
		}
	  });



	fs.writeFile("./yogaHouse.json", JSON.stringify(itemList, null, 4).replace(/\\n/g,""), (err) => {

		if (err) {
			console.error(err);
			return;
		};
		console.log("File has been created");
	});

}
)();
