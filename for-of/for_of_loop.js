const lab = {
  name: "Hoshmand",
  courses: 4,
};

const myLab = Object.create(lab);
myLab.area = "Artificial intelligence";
console.log("Iterating over objects own property and its prototype");
function hello() {
  for (var prop in myLab) {
    console.log(prop);
  }
}

hello();

console.log("Only iterating over objects own property");
for (prop of Object.keys(myLab)) {
  console.log(prop);
}

// it is called literal string
let king = `HELLO LOTFULLAH
CAN YOU GO AND
CHECK YOUR LIMITS
WORK DAY AND NIGHT
FOR SOME PROJECT
WHICH YOU BELIEVE IN`;

console.log(king);
