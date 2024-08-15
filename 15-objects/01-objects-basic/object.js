let numSubjects = 6;
const hooshmandlab = {
	name: "Hooshmandlab",
	total_subs: numSubjects,
	area: "Computer Science and technology",
	subjects: [
		"Artificial intelligence",
		"Python",
		"Java Script",
		"Java",
		"Deep learning",
	],
	purpose: function sayPurpose() {
		return "We rise from ashes and change the face of Afghanistan";
	},
	"random-value": "random",
};

console.log(hooshmandlab.name);
console.log(hooshmandlab.area);
console.log(hooshmandlab.subjects);
console.log(hooshmandlab.purpose());

// We can delete a property using . method.

console.log("random value =", hooshmandlab["random-value"]);
