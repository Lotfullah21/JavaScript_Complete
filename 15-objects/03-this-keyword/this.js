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

console.log(afg.fullInfo());

console.log(ind.fullInfo());
