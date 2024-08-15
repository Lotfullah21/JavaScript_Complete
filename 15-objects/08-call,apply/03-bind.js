const ahmad = {
	name: "Ahmad",
	job: "Student",
};

function greet(age, city) {
	console.log(
		`Hello my name is ${this.name} and I am a ${this.job} I am ${age} years old and I live in ${city}.`
	);
}
const bobGreet = greet.bind(ahmad, 21, "the Netherlands");

jacobGreet();
bobGreet();
