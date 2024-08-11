const months = [
	"January",
	"February",
	"March",
	"April",
	"May",
	"June",
	"July",
	"August",
	"September",
	"October",
	"November",
	"December",
];

const days = [
	"Sunday",
	"Monday",
	"Tuesday",
	"Wednesday",
	"Thursday",
	"Friday",
	"Saturday",
];
const date = new Date();
console.log("full date =", date);

// Formatted date
const formDate = date.toISOString();
console.log(formDate);

// Parsing date to the Date object
const dateString = "2024-08-07T12:34:56Z";
const parsedDate = new Date(dateString);
console.log("Parsed date:", parsedDate);

const month = date.getMonth();
console.log("Month =", months[month]);
const day = date.getDay();
console.log("Week Day =", days[day]);
const today = date.getDate();
console.log("todays date =", today);
const year = date.getFullYear();
console.log("year =", year);
const hour = date.getHours();
const minute = date.getMinutes();
const fullDate = `${days[day]} ${today} ${months[month]} ${year} ${hour} ${minute}`;
console.log(fullDate);
