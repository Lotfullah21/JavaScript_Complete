// objects in javascript are collection of properties.
// they are key-value pairs

const afg = {
  name: "Afghanistan",
  populationn: 34 + "millions",
  cities: ["kabul", "baghlan", "herat", "mazar"],
  gretting: function sayHello() {
    return `Hello Folks`;
  },
  in_europe: false,
};
// we can access the elements using their property name or dot method.
console.log(afg);
console.log(afg.name);
const fam_cities = afg.cities;
console.log(fam_cities);
console.log(afg["name"]);
console.log(afg.gretting());
// console.log(afg[1]);
