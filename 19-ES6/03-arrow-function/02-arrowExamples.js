// regular function
function greeting() {
	console.log("Hello");
}

greeting();
// arrow function, no name
const sayHi = () => {
	console.log("Hello");
};
sayHi();

const mul = (a) => {
	return a * 10;
};
console.log(mul(10));

// If multiple lines of code, explicitly use return
const sub = (x, y) => {
	result = x - y;
	return result;
};
const res = sub(10, 9);
console.log(res);

const numbers = [1, 2, 12, 10, 120, 200];
// more line of codes
const number = numbers.filter((num, index) => {
	console.log(index + 1, index);
	return num > 10;
});
