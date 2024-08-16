/*
A setter is used when we want to change the property of an object


it must have exactly one parameter
*/

const course = {
  name: "Python",
  set name(subject) {
    this.log.push(subject);
  },
  log: [],
};

course.name = "ML ";
console.log(course.log);
// console.log(course.canTeach("Artificial Intelligence"));

class Lab {
  msg =
    "You can achieve anything in this world if you put the will and the HardWork";
  name = "Lotfullah";

  get message() {
    return this.msg;
  }
  set message(name) {
    this.msg =
      this.name +
      " You can achieve anything in this world if you put the will and the HardWork";
  }
}

const HoshmandLab = new Lab();
console.log(HoshmandLab.msg);
HoshmandLab.message = "Lotfullah";
console.log(HoshmandLab.msg);
