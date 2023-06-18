const Lab = {
  name: "HoshmandLab",
  area: "Technology",
  numSubjects: 3,
};

for (key of Object.keys(Lab)) {
  console.log(key, " : ", Lab[key]);
}

for (value of Object.values(Lab)) {
  console.log(value);
}

console.log(Object.entries(Lab));
