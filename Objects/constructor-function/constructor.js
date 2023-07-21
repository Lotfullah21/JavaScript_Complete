function GiveInfo(name, region) {
  // properties
  this.name = name;
  this.region = region;
  // methods
  this.info = function () {
    return `${this.name} is located in  ${this.region}`;
  };
  console.log("points to particular object", this);
}
// new keyword creates a new object, points this new object to the blue print and omits the return(no need to write explicitly return)
const afg = new GiveInfo("Afghanistan", "central Asia");
const ind = new GiveInfo("India", "South Asia");
const usa = new GiveInfo("United State of America", "North America");

console.log("\nAfghanistan\n");
console.log(afg.name);
console.log(afg.region);
console.log(afg.info());
console.log("\nUSA\n");
console.log(usa.name);
console.log(usa.region);
console.log(usa.info());
console.log("\nIndia\n");
console.log(ind.name);
console.log(ind.region);
console.log(ind.info());
