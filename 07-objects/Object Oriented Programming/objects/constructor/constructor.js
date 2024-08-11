function lab(name) {
  const obj = {};
  obj.name = name;
  obj.courses = ["AI", "Python"];
  obj.purpose = function () {
    console.log("TO help Afghan girls code");
  };
  return obj;
}

// const myLab = lab("HoshmandLab");
// console.log(myLab.name);
// console.log(myLab.courses);
// console.log(myLab.purpose());

/* initializing a new object using function is a bit long, 
instead we can use something called a constructor.
a constructor is just a function called with "new" keyword before the name of the constructor
when a constructor is called:

1. a new object will be created.
2. will bind the "this" keyword to the object.
3. code inside the constructor will be runned
4. a new object will be returned

 */

function Lab(name) {
  this.name = name;
  this.courses = ["Deep Learning", "Python", "Machine Learning"];
  this.foundation = function () {
    return `at ${this.name} we create values by teaching ${this.courses[0]}, ${this.courses[1]},and ${this.courses[2]}`;
  };
}

const myLab = new Lab("HoshmandLab");
console.log(myLab.name);
console.log(myLab.courses);
console.log(myLab.foundation());
