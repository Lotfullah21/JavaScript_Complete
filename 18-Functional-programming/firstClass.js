// by first class we mean a function is just a value which we can pass as argument, return from other functions
// and save it into a variable

function talk(a, b) {
  console.log(a, b);
}

function greeting(a) {
  return "Hello " + a;
}

function goodBye(b) {
  return "Take care " + b;
}
var tell;
var stay = true;
if (stay) {
  tell = greeting;
} else {
  tell = goodBye("Lotfullah");
}

// tell("Lotfullah")
talk(tell, tell);

// Higher order functions has one or both of this specification,

// it accepts other functions as arguments, and returns function when invoked

function say(a, b) {
  console.log(a + b);
}

say(tell("Lotfullah"), tell("Lotfullah"));

/* 3 --- Pure Functions --- it returns the exact same value as long as it has been given the same input.
A pure function should not have side effects which means
1- does not change the variable values outside of tis scope
2- calling a browsable API
3- calling math function

*/
