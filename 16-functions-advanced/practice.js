// function sum(a, b) {
// 	console.log(a + b);
// }
// sum(12, 12);

// (function (a, b) {
// 	console.log(a + b);
// })(12, 12);

// res = (function sum(a, b) {
// 	return a + b;
// })(12, 12);
// console.log(res);

// HOISTING

sum();
function sum() {
	console.log(10 + 1);
}
sum();

function outer() {
	function inner() {
		console.log("Hello From inner");
	}
	return inner;
}
const greet = outer();
greet();
