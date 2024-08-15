const afg = {
	name: "Afghanistan",
	population: 34 + "millions",
	cities: ["Kabul", "Baghlan", "Herat", "Balkh"],
	greeting: function sayHello() {
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
console.log(afg.greeting());
console.log(afg.cities[1]);
