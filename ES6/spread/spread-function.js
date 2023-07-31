const names = ["Ahmad", "IRAN", "mahmoodi"];

function sayHi(fName, lName) {
  console.log("Hello", fName, lName);
}

const noraml = sayHi(names[0], names[2]);
const spread = sayHi(...names);
