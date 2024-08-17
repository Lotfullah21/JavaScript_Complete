console.log("Hello I am first");
console.log("Hello I am second");
looping();
console.log("Hello I am after LOOPING");
ask();
console.log("Hello I am fourth");

function ask() {
	console.log("I AM FROM FUNCTION CALL");
}

function looping() {
	for (let i = 0; i < 1000000000; i++) {
		// console.log("move on");
	}
	console.log("Loop is finished");
}

console.log("I am the LAST one");
