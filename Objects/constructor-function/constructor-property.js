// All objects have access to their constructor,which can be accessed using constructor property.

function GiveInfo(name, region) {
  // properties
  this.name = name;
  this.region = region;
  // methods
  this.info = function () {
    return `${this.name} is located in  ${this.region}`;
  };
}
console.log(GiveInfo.constructor);
const usa = new GiveInfo("United State of America", "North America");
console.log(usa.constructor);
console.log(usa.info());

const ahmad = {};
console.log(ahmad.constructor);

const subjects = [];
console.log(subjects.constructor);

// we can use other object constructor to build a new object(do not forget new keyword)
const arg = new usa.constructor("Argentina", "South America");
console.log(arg.info());
