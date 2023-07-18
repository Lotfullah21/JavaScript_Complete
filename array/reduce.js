/*
iterates over a call back function.
reduces to a single value,which can be a single value,array,object.
it takes two parameters
1- first is one:('accumulator') accumulator ==> total of all calculations.
2- second one is:('current_iteration') current value/iteration, or the once we are interested in, o it is iterator which iterates over every item in our array.

put a default or starter value at the end of the function. 
object.reduce(function(acc,currentIteration){
    // logic
    return acc},0)
0 is default or starter value which we are adding the iterator value in.
and also make sure to return the first parameter.
*/

const geography = [
  {
    name: "Afghanistan",
    population: 42.2 + "Million",
    location: "South Asia",
    age: 90,
  },
  {
    name: "India",
    population: 1.435 + " Billion",
    location: "South Asia",
    age: 43,
  },
  {
    name: "Iran",
    population: 87.9 + " Million",
    location: "West Asia",
    age: 40,
  },
];

const totalAge = geography.reduce(function (accumulator, currentIteration) {
  console.log(`total age  ${accumulator}`);
  console.log(`current iteration ${currentIteration.age}`);
  accumulator = accumulator + currentIteration.age;
  console.log("total age: ", accumulator);
  return accumulator;
}, 0);

console.log(totalAge);
