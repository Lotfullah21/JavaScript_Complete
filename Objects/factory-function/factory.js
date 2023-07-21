// factory function returns an object,create all functinality in one place and create from that template object as many as you want

function givInfo(name, region) {
  const country = {
    name: name,
    region: region,
    fullIfo: function info() {
      return `${this.name} is located in ${this.region}`;
    },
  };
  return country;
}

const afg = givInfo("Afghanistan", "Asia");
const ind = givInfo("India", "South Asia");
const usa = givInfo("United State of America", "North America");

console.log(afg.fullIfo());
console.log(ind.fullIfo());
console.log(usa.fullIfo());

// const afg = {
//   name: "Afghanistan",
//   region: "Asia",
//   fullInfo: function () {
//     return `${this.name} is located in ${this.region}`;
//   },
// };
// const ind = {
//   name: "India",
//   region: "Asia",
//   fullInfo: function () {
//     return `${this.name} is located in ${this.region}`;
//   },
// };
// const USA = {
//   name: "United State of America",
//   region: "North America",
//   fullInfo: function () {
//     return `${this.name} is located in ${this.region}`;
//   },
// };

// console.log(afg.fullInfo());

// console.log(ind.fullInfo());

// console.log(USA.fullInfo());
