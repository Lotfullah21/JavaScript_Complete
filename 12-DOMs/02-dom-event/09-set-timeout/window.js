function hello() {
	console.log("Salam");
}

setTimeout(hello, 50);

// function with arguments

function complete(subject, time) {
	console.log(`Hello Ahmad ${subject} can take ${time} days`);
}

let firstID = setTimeout(complete, 2000, "Machine learning", 64);
let secondID = setTimeout(complete, 3000, "JavaScript", 30);
let thirdID = setTimeout(complete, 1000, "Python", 50);

console.log("first id =", firstID);
console.log("second id =", secondID);
console.log("third id =", thirdID);

// Prevent the first function from running.
clearTimeout(firstID);

function interval() {
	console.log("Hello, I am from SetInterval");
}

const firstIn = setInterval(interval, 2000);
console.log("first Time interval", firstIn);
// Stop executing the first interval
clearInterval(firstIn);
