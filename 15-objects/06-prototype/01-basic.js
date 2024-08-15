function University(name, location, students) {
	this.name = name;
	this.location = location;
	this.students = students;
}

University.prototype.region = "North America";
const MIT = new University(
	"Massachuset Institute of technology",
	"Boston USA",
	11376
);

console.log(MIT);
console.log("region =", MIT.region);
console.log("MIT Prototype =", Object.getPrototypeOf(MIT));
// Prototype can be a function
University.prototype.numStudent = function (num_student) {
	this.students = this.students + num_student;
	return `${this.name} have ${this.students} students`;
};
console.log(MIT.numStudent(12000));
console.log("\n");

const CMU = new University("Carnegie Mellon", "Pittsburgh USA", 13961);
console.log("CMU =", CMU);
console.log("region =", CMU.region);
console.log("CMT Prototype =", Object.getPrototypeOf(MIT));
