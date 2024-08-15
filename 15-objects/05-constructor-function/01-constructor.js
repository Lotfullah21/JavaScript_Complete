function GiveInfo(name, region) {
	// properties
	this.name = name;
	this.region = region;
	// methods
	this.info = function () {
		return `${this.name} is located in  ${this.region}`;
	};
	console.log("points to particular this object", this);
}

const afg = new GiveInfo("Afghanistan", "central Asia");
const usa = new GiveInfo("United State of America", "North America");
