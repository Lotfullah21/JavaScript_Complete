/* using call method,we can define a function and apply that fucntion on every object.
 parameters: first parameter: the this object(the object we are going to apply the function)
 second-parameter: list of items.
 using apply: the only difference here is we pass the arguments as array items.
*/
const ahmad = {
  name: "Ahmad",
  job: "Student",
};
const jacob = {
  name: "Jcob",
  job: "Football player",
};
const bob = {
  name: "bob",
  job: "Nurse",
};

function greet(age, city) {
  console.log(
    `Hello my name is ${this.name} and I am a ${this.job} I am ${age} years old and live in ${city}.`
  );
}
// we can call  greet function on every object and it will run instantly, the parameter is the object we are applying or calling the funcion on.
console.log("\nUSING CALL METHOD\n");
greet.call(ahmad, 32, "Morroco");
greet.call(jacob, 23, "the USA");
greet.call(bob, 21, "the Netherlands");
greet.call({ name: "ching", job: "Engineer" }, 43, "Japan");
console.log("\nUSING APPLY METHOD\n");
greet.apply(ahmad, [32, "Morroco"]);
greet.apply(jacob, [23, "the USA"]);
greet.apply(bob, [21, "the Netherlands"]);
greet.apply({ name: "ching", job: "Engineer" }, [43, "Japan"]);
console.log("\nUSING APPLY METHOD\n");
const jacobgreet = greet.bind(jacob, 23, "the USA");
const bobgreet = greet.bind(bob, 21, "the Netherlands");
greet.bind({ name: "ching", job: "Engineer" }, 43, "Japan");
jacobgreet();
bobgreet();
