function outer() {
  let hello = "hello";
  function inner() {
    console.log(`${hello}`);
  }
  // we can return functions in js
  return inner;
}

outer()();

const inv = outer();
console.log(inv);

function population(name, population) {
  let humans = population;
  function showPopulation() {
    console.log(`${name} has ${humans} millions  of human beings in it`);
  }
  return showPopulation;
}

// population("India", 1350)();
// const afg = population("Afghanistan", 44);
// const iran = population("Iran", 70);
// const japan = population("Japan", 120);
// afg();
// iran();
// japan();

function population(name, population) {
  // this variable is only accessible by the closures or the inner function we have, not outside of the outer functino
  let humans = population;
  function showPopulation() {
    console.log(`${name} has ${humans} millions  of human beings in it`);
  }
  function addHumans(human) {
    humans += human;
    showPopulation();
  }
  function remove(human) {
    if (human > humans) {
      console.log(`You cannot surpess the whole generation ${name}`);
      // if the condition is false, go to the next line or do not do any operation
      return;
    }
    humans -= human;
    showPopulation();
  }
  // we can return an object assign the function to a method and still that will be a closure.(very important,earlier,just we return one fn,now we can return as many methods as we want)
  return {
    countHumans: showPopulation,
    addPopulation: addHumans,
    removePopulation: remove,
  };
}

const afg = population("Afghanistan", 44);
const iran = population("Iran", 70);
const japan = population("Japan", 120);

afg.countHumans();
afg.addPopulation(100);
iran.countHumans();
japan.countHumans();
japan.removePopulation(1212);
