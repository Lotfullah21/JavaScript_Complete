// left of the dot should be an object so that this can point to that.
const afg = {
  name: "Afghanistan",
  region: "Asia",
  fullInfo: function () {
    return `${this.name} is located in ${this.region}`;
  },
};
const ind = {
  name: "India",
  region: "Asia",
  fullInfo: function () {
    return `${this.name} is located in ${this.region}`;
  },
};
const USA = {
  name: "United State of America",
  region: "North America",
  fullInfo: function () {
    return `${this.name} is located in ${this.region}`;
  },
};

console.log(afg.fullInfo());

console.log(ind.fullInfo());

console.log(USA.fullInfo());
