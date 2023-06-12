/* 1:  set the initial condition outside the while loop clearly 
   2: set the condition to be evaluated inside the while looop parenthesis
   3: set the increment/or decrement value at the end of the code so that you can exit the loop at the right time */

/* initializer
while (condition) {
  // code to run

  final - expression;
}
*/

var i = 10;
while (i > 5) {
  console.log("hello", i, (i -= 1));
  // i -= 1
  // i--
  i = i - 1;
}

var i = 2018;

while (i <= 2022) {
  console.log(i);
  i += 1;
}

const cities = ["Kabul", "Herat", "Baghlan"];

let afgProvinces = "Afghanistan's famous cities are ";

let c = 0;

while (c < cities.length + 1) {
  if (c === cities.length - 1) {
    afgProvinces = afgProvinces + "and " + cities[c];
  } else {
    afgProvinces = afgProvinces + cities[c] + ", ";
    console.log(afgProvinces);
  }
  c++;
  // return 0;
}
