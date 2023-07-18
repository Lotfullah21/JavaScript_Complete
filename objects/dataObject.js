/*
it is a global object which we can use anywhere in our project like math object.
Date object will not give us the name of the month or day of the week, and it indexes starting from 0.
for instance sunday and Januray are indexed at 0.
*/

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
  "Saturday",
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
];
const date = new Date();
console.log("full date", date);

const month = date.getMonth();
console.log("Month", months[month]);
const day = date.getDay();
console.log("Day", days[day]);
const today = date.getDate();
console.log(today);
const year = date.getFullYear();
console.log(year);
const hour = date.getHours();
const minute = date.getMinutes();
const fullDate = `${days[day]} ${today} ${months[month]} ${year} ${hour} ${minute}`;
console.log(fullDate);
