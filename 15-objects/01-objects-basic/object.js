// we can access the values using dot notation and brackets as well.
// if more number of properties, remember the layer names or property names.

const num_subs = 6;
let random = "random-value";
random = "subjects";
const hoshmand = {
  name: "HoshmandLab",
  total_subs: num_subs,
  area: "Computer Science and technology",
  subjects: [
    "Artificial intelligence",
    "Python",
    "Java Script",
    "Java",
    "Deep learning",
  ],
  purpose: function sayPurpose() {
    return "We rise from ashed and change the face of Afghanistan";
  },
  age: "One years",
  hoshmandLab: {
    name: "HoshmandLba",
    info: {
      address: "on the cloud",
      founder: "Lotfullah Andishmand",
    },
  },
  "random-value": "random",
};

console.log(hoshmand);
console.log(hoshmand.name);
console.log(hoshmand.area);
console.log(hoshmand.subjects);
console.log(hoshmand.purpose());
console.log(hoshmand);

/* 
console.log(hoshmand.num_employees);
console.log(hoshmand.king.info);
delete the property
 */

delete hoshmand.age;
console.log(hoshmand);
console.log(hoshmand["random-value"]);
console.log(hoshmand[random]);
console.log(hoshmand.hoshmandLab.info.address);
console.log(hoshmand["hoshmandLab"]["info"]["address"]);
