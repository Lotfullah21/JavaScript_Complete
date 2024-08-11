const country = {
  name: "Iraq",
  kurds: true,
  population: 43.5,
};

let Iraq = { ...country };
console.log(Iraq);
// add a property
Iraq = { ...country, region: "Arab world" };
console.log(Iraq);
// over-write a property
Iraq = { ...country, population: 44, arabs: true };
console.log(Iraq);
