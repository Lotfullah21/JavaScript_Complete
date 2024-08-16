// Module function
function sub(a, b) {
	console.log(a - b);
}
const num1 = 10;
const num2 = 100;
sub(num1, num2);

// Immediately-Invoked function expression
(function () {
	const num4 = 100;
	const num5 = 200;
	console.log(num4 + num5);
})();

// passing arguments
(function (a, b) {
	console.log(a + b);
})(102, 1232);

// return/assigning
const summation = (function (a, b) {
	console.log("result", a + b);
	return a + b;
})(12, 12);

console.log(summation);
