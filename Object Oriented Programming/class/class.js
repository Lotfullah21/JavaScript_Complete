/*
create a class using "class" keyword, in fact here we are packing data and functionality inside a class.

we use conctructor to initialize the properties,we can have only one constructors per class

we use "extends" keyword to create a child class from another class(Parent class)

we use "super()" method to inherit the properties and methods of parent class inside child class

by convention, class names starts by capital letter.

create an instance of this class using "instance_name = new className"

*/

class Lab {
  constructor(name) {
    this.name = name;
  }

  numCourses() {
    return "As of now 4 courses";
  }

  launchDate() {
    console.log("This month 29th June");
  }
}

// create an instance of the Lab object
const hoshmandLab = new Lab("HoshmandLab");

console.log(hoshmandLab.name);
console.log(hoshmandLab.numCourses());

class TechLab extends Lab {
  codeAcademy;
  #Profit;
  constructor(name, courses, area = null, revenue) {
    super(name);
    this.courses = courses;
    this.codeAcademy = "Artificial Intelligence";
    this.#Profit = revenue;
  }
  netValue() {
    return `${this.name} has ${this.#Profit} revenue`;
  }
}

const myLab = new TechLab(
  "HoshmandLab",
  ["Python", "Machine Learning", "Deep Learning"],
  "$0",
  "$0"
);

console.log(myLab);
console.log(myLab.courses);
console.log(myLab.netValue());
