const subjects = {
	name: "Artificial Intelligence",
	field: "Cognitive Science",
	subject: ["Machine learning", "Mathematics", "Deep learning"],
	subfields: {
		vision: "Computer vision",
		language: "Natural language processing",
	},
};

// from this object, I want these properties as my arguments
function get({ name, field, subject }) {
	console.log(name, field, subject);
}

get(subjects);

function getNew(courses) {
	const { name, field, subject } = courses;
	console.log(name, field, subject);
}
getNew(subjects);
