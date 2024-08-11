/*
setTimeout: runs a function once for a specific duration
setInterval: it works same, but it executes the reference fuction repeatedly after the given interval.
 */

function hello() {
  console.log("Salam");
}

setTimeout(hello, 2000);

// function with arguments

function complete(subject, time) {
  console.log(`Hello Ahmad ${subject} can take ${time} days`);
}

let firstID = setTimeout(complete, 2000, "Machine learning", 64);
let secondID = setTimeout(complete, 3000, "JavaScript", 30);
let thirdID = setTimeout(complete, 1000, "Python", 50);
console.log(firstID);
console.log(secondID);
console.log(thirdID);

// prevent the timeout function from running
// do not execute the function with firstID
clearTimeout(firstID);

function interval() {
  console.log("Hello, I am from SetInterval");
}

const firstIn = setInterval(interval, 2000);
// stop executing this interval
clearInterval(firstIn);
