const courses = {
	name: "Artificial Intelligence",
	field: "Cognitive Science",
	subject: ["Machine learning", "Deep learning"],
};

const x = courses.name;
const y = courses.field;
const z = courses.subject;

console.log(x, y, z);

// accessing through destructuring

const subjects = {
	name: "Artificial Intelligence",
	field: "Cognitive Science",
	subject: ["Machine learning", "Mathematics", "Deep learning"],
	subfields: {
		vision: "Computer vision",
		language: "Natural language processing",
	},
};

const { name, field, subject } = subjects;
console.log(name, field, subject);
