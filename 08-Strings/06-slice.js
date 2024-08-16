const message = "Hello people";
// slice(): creates a substring.
console.log(message.slice(0, 2));
// everything starting from here
console.log(message.slice(1));

let house = "abcdefghijklmnopqr";
console.log("SLICING STARTED FROM HERE");
console.log(house.slice(0, 10)); // slice the string starting from 0th index and remove 10 elements
console.log(house.slice(7)); // slice the string starting from 7th index and grab it.
console.log(house.slice(0, 10)); // slice the string starting from 0th index and remove 10 elements
console.log(house.slice(-5)); // take from last indice
