// in prototype, usually we add common methods for objects and inside the constructor we add the data property

const myLabProperty = {
	purpose() {
		console.log(`We teach, ${this.courses} to left up the students`);
	},
	foundation() {
		return `we want to be in the service of future generation of ${this.country}`;
	},
};

function Lab(courses, country) {
	this.courses = courses;
	this.country = country;
}

// Assigning an external properties to the current object constructor.
Object.assign(Lab.prototype, myLabProperty);

const HooshmandLab = new Lab(
	["AI", "Python", "machine learning"],
	"Afghanistan"
);

HooshmandLab.purpose();
console.log(HooshmandLab.foundation());
console.log(HooshmandLab.courses);
