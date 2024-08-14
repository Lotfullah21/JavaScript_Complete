/*
in fact prototypes are the mechanism by which javascript objects inherits property from each other
*/

function University(name, location, students) {
  this.name = name;
  this.location = location;
  this.students = students;
}
University.prototype.region = "Nroth America";
University.prototype.numStudent = function (num_student) {
  this.students = this.students + num_student;
  return `${this.name} have ${this.students} students`;
};
const CMU = new University("Carnegie Mellon", "Pitsburgh USA", 13961);
const MIT = new University(
  "Masachuset Institute of technology",
  "Boston USA",
  11376
);
// methods and properties of arrays or objects are stored in their prototype, not in the instances.
console.log({});
console.log([]);

console.log(Object.getPrototypeOf(MIT));
// Object.getPrototypeOf it is the end of prototype chain where there is no method and the value is null
const myObjec = {
  field: "technology",
  goal: function () {
    console.log("we are working in the field of science and technology");
  },
};
console.log(Object.getPrototypeOf(myObjec));
