// left of the dot should be an object so that this can point to that object.
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

date = new Date();
let year = date.getFullYear();
const subjects = {
  name: "Artificial Intelligence",
  CVField: {
    name: "Convolutional ",
    area: "Image Segmentation",
  },
  age: year - 1955,
  fullInfo: function () {
    return `${this.name} which has ${this.CVField.area} and ${this.CVField.name} field invented around ${this.age} years back.`;
  },
};

console.log(subjects.fullInfo());

console.log(afg.fullInfo());

console.log(ind.fullInfo());

console.log(USA.fullInfo());
