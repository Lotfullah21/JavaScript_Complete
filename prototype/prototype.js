/*
in fact prototypes are the mechanism by which javascript objects inherits property from each other
*/

function University(name, location, students) {
  this.name = name;
  this.location = location;
  this.students = students;
  /*
  this.student = function (student) {
  this.students = this.students + student;
  return `${this.name} have ${this.students} students`;}; 
  */
}

/* we are adding this property to the University to avoid adding this every time as a parameter and hard coding inside the constructor
we are using it in every instance, so we can add it as a prototype.
 this is shared among all instaces of University object. */

University.prototype.region = "Nroth America";
University.prototype.numStudent = function (num_student) {
  this.students = this.students + num_student;
  return `${this.name} have ${this.students} students`;
};
const MIT = new University(
  "Masachuset Institute of technology",
  "Boston USA",
  11376
);

console.log(MIT);
console.log(MIT.numStudent(21));
const CMU = new University("Carnegie Mellon", "Pitsburgh USA", 13961);
console.log(CMU);
console.log(CMU.numStudent(21));
console.log(MIT.region);
console.log(Object.getPrototypeOf(MIT));
// Object.getPrototypeOf it is the end of prototype chain where there is no method and the value is null
const myObjec = {
  field: "technology",
  goal: function () {
    console.log("we are working in the field of science and technology");
  },
};
console.log(Object.getPrototypeOf(myObjec));

// it is a prototype which later can be assigned or coppied to another object
const personPrototype = {
  greet() {
    console.log(`hello, I am ${this.name}!`);
  },
};

function Person(name) {
  this.name = name;
}

Object.assign(Person.prototype, personPrototype);

const me = new Person("Ahmed");
me.greet();

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

Object.assign(Lab.prototype, myLabProperty);

const HoshmandLab = new Lab(["AI", "Python", "machine learning"], "Aghanistan");
HoshmandLab.purpose();
console.log(HoshmandLab.foundation());
console.log(HoshmandLab.courses);
