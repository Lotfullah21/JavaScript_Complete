let firstName;
firstName = "John";
console.log(firstName);

function say() {
	console.log(firstName);
	firstName = "Obama";
	console.log(firstName);
	function hello() {
		firstName = "hello I am from inner function";
		console.log(firstName);
	}
	hello();
}
say();
firstName = "Charles";
console.log(firstName);
