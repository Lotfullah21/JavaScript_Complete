let x1 = "orange";
let x2 = 100;

console.log("x1 =", x1, "x2 =", x2);

let temp = x1;
x1 = x2;
x2 = temp;
console.log("x1 =", x1, "x2 =", x2);

// through destructuring
[x2, x1] = [x1, x2];
console.log("x1 =", x1, "x2 =", x2);
