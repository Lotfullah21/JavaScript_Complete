const Lab = {
  name: "HoshmandLab",
  area: "Technology",
  numSubjects: 3,
};

const keys = Object.keys(Lab);
const values = Object.values(Lab);
const keyValue = Object.entries(Lab);
console.log("Keys", keys);
console.log("Values", values);
console.log("Key-Value", keyValue);

for (key of Object.keys(Lab)) {
  console.log(key);
}

for (value of Object.values(Lab)) {
  console.log(value);
}

console.log(Object.entries(Lab));
