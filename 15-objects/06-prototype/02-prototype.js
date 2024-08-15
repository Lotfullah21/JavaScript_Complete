function Country(name, population) {
	this.name = name;
	this.currentCounts = population;
}
// Adding prototype
Country.prototype.place = "on Earth";
Country.prototype.population = function countHumans(totalHumans) {
	this.present = this.currentCounts + totalHumans;
	return `${this.name} have ${this.present} humans in it.`;
};

const afg = new Country("Afghanistan", 12000);
console.log("Afg object =", afg);
console.log("Total Population =", afg.population(120));
console.log("Object Prototype =", Country.prototype);
console.log("Prototype for an instance =", Object.getPrototypeOf(afg));
