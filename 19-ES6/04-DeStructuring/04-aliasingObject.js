// aliasing
const subjects = {
	name: "Artificial Intelligence",
	field: "Cognitive Science",
	subject: ["ML", "Maths", "SQL"],
	subfields: {
		vision: "Computer vision",
		language: "Natural language processing",
	},
};

// Aliasing
const {
	name: Artificial,
	field: area,
	subject: subjectsName,
	subfields: { vision, language: NLP },
	HELLO,
} = subjects;

console.log(Artificial, area, subjectsName, HELLO, vision, NLP);
