// if we do not pass any arguments, the default parameter will take precedence, if argument passed the default parameter will be over written.
const afg = "Afghanistan";
const ind = "India";

function greeting(country = "Iran") {
  console.log(`Hello ${country}`);
}

const hello = (country) => console.log(`Hello ${country}`);

greeting("China");
hello(ind);

// Hoisting

function greeting(country = "Iran") {
  console.log(`Hello ${country}`);
}

const bonjur = (country) => console.log(`Hello ${country}`);

greeting("China");
bonjur(ind);
