class Country {
  constructor(name, population) {
    this.name = name;
    this.prevPopulation = population;
  }
  // similar to prototype,but on the instance only
  place = "on Earth";
  totalHumans(currrntPopulation) {
    this.prevPopulation += currrntPopulation;
    return this.prevPopulation;
  }
}

const Afg = new Country("Afghanistan", 30);
console.log(Afg.name, Afg.prevPopulation, Afg.place);
Afg.totalHumans(10);
console.log(Afg.name, Afg.prevPopulation);
