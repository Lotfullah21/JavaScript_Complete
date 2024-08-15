const ahmad = {
	name: "Ahmad",
	job: "Student",
};

function greet(age, city) {
	console.log(
		`Hello my name is ${this.name} and I am a ${this.job} I am ${age} years old and I live in ${city}.`
	);
}
// we can call  greet function on every object and it will run instantly
greet.call(ahmad, 32, "Morocco");
greet.call({ name: "ching", job: "Engineer" }, 43, "Japan");
