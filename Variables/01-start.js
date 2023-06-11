console.log("Hello world");
/*jfklds
fjasklfd
fjdklafd */

var person = "king";
console.log("Hello", person);
console.log("Helll", person);
console.log(4 > 3);
console.log(4 > 3 && 5 > 0);
console.log(4 == 5 || 4 == 0);
console.log(4 < 3 && 0 == 0);

var Time = 5;
console.log(Time < 10 && Time > 3);

var petHungry = true;
petHungry = !petHungry;

console.log(petHungry);

var hello = "king " + "me";
console.log(hello);

var conc = 1 + "1";
console.log(conc);

/* The process of this "under-the-hood" conversion of values in JavaScript is referred to as "coercion". 
JavaScript coerces a number value to a string value - so that it can run the + operator on disparate data types.*/

var str = "king" + 123;
console.log(str);

var num1 = 2;
var num2 = 5;
var test1 = num1 % 2;
var test2 = num2 % 2;
var result1 = test1 == 0;
var result2 = test2 == 0;
console.log("Is", num1, "an even number?", result1);
console.log("Is", num2, "an odd even number?", result2);

var now = "Now in ";
var three = 3;
var d = "D!";
console.log(now + three + d);

let number = 100;
console.log(typeof number);

let stri = "Hello world";
console.log(typeof str);

const name = "Lotfullah";
let myAge = 89;
myAge = 25;

console.log("My name is", name, "and I am", myAge, "years old");
