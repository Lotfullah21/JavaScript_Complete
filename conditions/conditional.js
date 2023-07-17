// the code block is depends on the conditin, if the condition is true, the code will be exectuted.
//  syntax: if (condition){
// codeblock;
// }

if (true) {
  console.log("the value is true");
}

const value1 = 1 < 2;
if (value1) {
  console.log("Hello");
}

let hardWork = true;
let jobDone;
let jobNotDone;
if (hardWork == true) {
  jobDone = "HoshmandLab can be brought to reality";
  console.log(jobDone);
} else {
  jobNotDone = "it will burried in the grave yards";
  console.log(jobNotDone);
}

function canBeDone(a) {
  if (a == true) {
    jobDone = "HoshmandLab can be brought to reality by hardwork";
    console.log(jobDone);
  } else {
    jobNotDone = "it will burried in the grave yards due to procastination";
    console.log(jobNotDone);
  }
}

canBeDone(true);

let cheese = "Cheddar";

if (cheese) {
  console.log("Yay! Cheese available for making cheese on toast.");
} else {
  console.log("No cheese on toast for you today.");
}

let shoppingDone = false;
let childsAllowance;

// We don't need to explicitly specify 'shoppingDone === true'
if (shoppingDone) {
  childsAllowance = 10;
} else {
  childsAllowance = 5;
}

console.log(childsAllowance);

x = 43;

if (x === "number") {
  if (x < 20) {
    console.log("number less than 20");
  } else if (x > 40) {
    console.log("number less than 50");
  } else {
    console.log("None of the above");
  }
}
console.log("ALL GOOD");

function trinary(x) {
  return x > 0 ? "hee" : "no";
}

console.log(trinary(-1));
