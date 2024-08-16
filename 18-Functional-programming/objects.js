var HoshmandLab = {};

// creating objects using do notation
HoshmandLab.name = "Hoshmand Lab";
HoshmandLab.courses = "Artificial Intelligence, Python, Machine Learning";
HoshmandLab.purpose = "Provide Free and best courses about Computer Science";
HoshmandLab.age = 1;

console.log(HoshmandLab);
console.log(HoshmandLab["name"]);
console.log(HoshmandLab.purpose);

// creating objects using comma
var myLab = {
  name: HoshmandLab,
  courses: "Python, Machine Learning, Deep Learning",
  purpose: "Opening the education gate for Afghan girls",
  age: 1,
};

console.log(myLab);

// add property using do notation
myLab.location = "Ïndia";

console.log(myLab);

// Using bracket notation
var house2 = {};
house2["rooms"] = 4;
house2["color"] = "pink";
house2["priceUSD"] = 12345;
console.log(house2); // {rooms: 4, color: 'pink', priceUSD: 12345}

// Math objects

var num = 1.5;
console.log("Ceil", Math.ceil(num));
console.log("round", Math.round(num));
console.log("Floor", Math.floor(num));
console.log("only int", Math.trunc(num));
console.log(num);
console.log(Math.PI);
console.log("Logarith", Math.LN2);
console.log("Euler number", Math.E);
var num = Math.random() * 10;
var whole = Math.ceil(num);
console.log(num);
console.log("int", whole);
