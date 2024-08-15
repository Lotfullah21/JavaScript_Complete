const ahmad = {
	name: "Ahmad",
	job: "Student",
};

function greet(age, city) {
	console.log(
		`Hello my name is ${this.name} and I am a ${this.job} I am ${age} years old and live in ${city}.`
	);
}

greet.apply(ahmad, [32, "Morocco"]);
greet.apply({ name: "ching", job: "Engineer" }, [43, "Japan"]);
