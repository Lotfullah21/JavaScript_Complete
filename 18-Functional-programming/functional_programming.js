// in this paradigm we keep data and functionality seperate.

const { ConnectionStates } = require("mongoose");

function addTwo(a, b) {
  return a + b;
}

var a = "Hoshmand";
var b = "Lab";
var lab = addTwo(a, b);
console.log(lab);
