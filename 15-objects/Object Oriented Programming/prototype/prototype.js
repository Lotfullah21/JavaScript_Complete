/*
every build in object in javaScript has a property called "Prototype".
the Prototype itself is an object, so it creates a chain of Prototype.
in fact prototypes are the mechanism by which javascript objects inherits property from each other

*/

const myObjec = {
  field: "technology",
  goal: function () {
    console.log("we are working in the field of science and technology");
  },
};
// Object.getPrototypeOf it is the end of prototype chain where there is no method and the value is null

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
