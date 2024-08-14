const days = [
	"Sunday",
	"Monday",
	"Tuesday",
	"Wednesday",
	"Thursday",
	"Friday",
	"Saturday",
];

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

const giftText = document.querySelector(".course-deadline");
const deadline = document.querySelector(".deadline");
const counters = document.querySelectorAll(".deadline-format h4");

console.log("counters =", counters);

const currentDate = new Date();
const tempYear = currentDate.getFullYear();
const tempMonth = currentDate.getMonth();
const tempDay = currentDate.getDate();

// new Date(year, month, day, hr, mins, secs)
let comingDate = new Date(tempYear, tempMonth, tempDay + 10, 16, 15, 0);
// let comingDate = new Date(2023, 6, 27, 16, 15, 0);
const year = comingDate.getFullYear();
let month = comingDate.getMonth();
// day of the month
const day = comingDate.getDate();
// day of the week from 0-6
let weekDay = comingDate.getDay();
const hours = comingDate.getHours();
const minutes = comingDate.getMinutes();

month = months[month];
weekDay = days[weekDay];
console.log(month);
giftText.textContent = `Free Course registeration ends on ${weekDay}, ${day} ${month} ${year} ${hours}:${minutes}am`;

/* *********************** Future Date *******************************
get the milliseconds of future date and current date and subtract them.
*/

// time in ms
// getTime returns the total milliseconds, how much ms is left
const timeInMs = comingDate.getTime();
console.log("Future ms", timeInMs);

// get the difference
function remainingTime() {
	// put the dates inside the function so that every time we have different value while calling setInterval()
	const today = new Date();
	const todayInMs = today.getTime();
	console.log("today ms", todayInMs);
	const timeDiff = timeInMs - todayInMs;

	const oneDay = 24 * 60 * 60 * 1000;
	const oneHour = 60 * 60 * 1000;
	const oneMinute = 60 * 1000;
	const oneSecond = 1000;

	// Get the remaining day by dividing the time diff by total number of milliseconds in one day.
	let days = timeDiff / oneDay;
	days = Math.floor(days);

	console.log(days);
	// converting back to whole numbers
	// Get the remainder of one and divide by hour, it does not make sense to display the hours of a full day.
	const hours = Math.floor((timeDiff % oneDay) / oneHour);
	// Get the remainder minutes of one full hour, it does not make sense to keep the minuets of one full hour
	const minutes = Math.floor((timeDiff % oneHour) / oneMinute);
	const seconds = Math.floor((timeDiff % oneMinute) / oneSecond);

	// get the remaining time
	values = [days, hours, minutes, seconds];
	// format the values if they are less than 10
	function format(item) {
		if (item < 10) {
			return (item = `0${item}`);
		}
		return item;
	}
	// set the remaining time to each counter using forEach() method, we have access to indices as well
	// These indices will be form counters, but they are matching with values array.
	counters.forEach(function (counter, index) {
		counter.textContent = format(values[index]);
	});

	if (timeDiff < 0) {
		clearInterval(countDown);
		deadline.innerHTML = `<h4>The deadline has finished</h4>`;
	}
}
// how many time we want to call our remaining function to avoid every time refreshing the page to see the remaining time,here we are calling the function after every seconds.
let countDown = setInterval(remainingTime, 1000);
remainingTime();
