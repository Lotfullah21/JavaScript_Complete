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
const ind = givInfo("USA", "North America");

console.log(afg.fullIfo());
console.log(ind.fullIfo());
