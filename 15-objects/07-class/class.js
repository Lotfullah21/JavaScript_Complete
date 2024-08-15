class Country {
	constructor(name, population) {
		// set the properties
		this.name = name;
		this.totalCount = population;
	}
	// similar to prototype, but on the instance only
	place = "on Earth";
	totalPopulation(currentCount) {
		this.totalCount += currentCount;
		return this.totalCount;
	}
}

const Afg = new Country("Afghanistan", 30);
console.log(Afg.name, Afg.totalCount, Afg.place);
Afg.totalPopulation(10);
console.log(Afg.name, Afg.totalCount);
