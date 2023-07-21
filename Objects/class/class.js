class University {
  // constructor,properties
  constructor(name, location, students) {
    this.name = name;
    this.location = location;
    this.totalStudents = students;
  }
  region = "North America";
  // method
  numStudents(student) {
    this.totalStudents = this.totalStudents + student;
    console.log(
      `${this.name} which is in ${this.location} have ${this.totalStudents} students`
    );
  }
}
// note one thing in above, we do not use keywords infront of methods or properties. we use new keyword while instantiating.
const MIT = new University(
  "Masachuset Institute of technology",
  "Boston, USA",
  11376
);
console.log(MIT.name);
console.log(MIT.location);
MIT.numStudents(100);
console.log(MIT);
