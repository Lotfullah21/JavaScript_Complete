/*

an object is collection of related data and functionalities


*/

const { ConnectionStates } = require("mongoose");

let lab = {
  name: ["HoshmandLab"],
  courses: ["Python", "Machine Learning", "Deep Learning"],
  field: "Technology and Artificial Intelligence",
  numCourses: () => {
    return lab.courses.length;
  },
  purpose: () => {
    console.log("To Help girls and boys in Afghanitan to code");
    return "To Help girls and boys in Afghanitan to code";
  },
};

/*in the above object name,course,field,purpose are known as memebers and "HoshmandLab" or ["Python"] are
known as values.
if member has only data, then that is a property
if memeber is a function, that is called a method, or in general a function inside an object is known as method
MEMBER NAME: MEMBER VALUE

const objectName = {
  member1Name: member1Value,
  member2Name: member2Value,
  member3Name: member3Value,
};

*/
console.log("Name: ", lab.name);
console.log("courses: ", lab.courses);
console.log("field: ", lab.field);
console.log("Number of courses we offer: ", lab.numCourses());
console.log("Our Foudation: ", lab.purpose());

let Lab = {
  name: ["HoshmandLab"],
  courses: [
    "Python",
    "Machine Learning",
    "Deep Learning",
    "Artificial Intelligence",
    "Html",
    "CSS",
    "JavaScript",
  ],
  field: "Artificial Intelligence and web development",
  numCourses() {
    return Lab.courses.length;
  },
  purpose() {
    return "To Educate girls and boys in Afghanitan to code";
  },
  info() {
    return `${this.name} has ${this.numCourses()} course including ${
      this.courses
    } we are working in ${this.field}
        ${this.purpose()}`;
  },
};

console.log("Name: ", Lab.name);
console.log("courses: ", Lab.courses);
console.log("field: ", Lab.field);
console.log("Number of courses we offer: ", Lab.numCourses());
console.log("Our Foudation: ", Lab.purpose());
console.log("about us: ", Lab.info());

/* in the above code we have literally created the object and added its memebers
 it is efficient if we send some structured data out using this notation,like sending a request, we can identify the properties by their name

we can have an object inside another object or in another words a members itself can be an object
 */

const Lab_course = {
  courses: {
    AI: ["machine learning", "Deep learning"],
    WEB: ["HTML", "CSS"],
    Language: {
      webLanguage: ["JavaScript"],
      mlLanguage: ["Python"],
    },
  },
};

console.log(Lab_course.courses.AI);
console.log(Lab_course.courses.WEB);
console.log(Lab_course.courses.Language.webLanguage);
console.log(Lab_course["courses"]["AI"]);
console.log(Lab_course["courses"]["AI"][0]);

// Setting Object members

const myLab = {
  name: "HoshmandLab",
  purpose() {
    return "Te empower others";
  },
};

myLab.courses = ["Artifical Intelligence", "Machine Learning", "Python"];
myLab.courses.age = 332;
console.log(myLab.purpose());
myLab.lunchDate = function () {
  return "It will be lunched on June 30th";
};
myLab["Foundation"] = "HElPING MY SOCIETY";
console.log(myLab.courses.age);
console.log(myLab);
console.log(myLab.lunchDate());
