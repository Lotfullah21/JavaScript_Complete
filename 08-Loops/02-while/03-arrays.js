let cities = ["Kabul", "Herat", "Baghlan"];

let afgProvinces = "Afghanistan's famous cities are ";

let c = 0;

while (c < cities.length) {
	if (c === cities.length - 1) {
		afgProvinces = afgProvinces + "and " + cities[c];
		console.log(afgProvinces);
	} else {
		afgProvinces = afgProvinces + cities[c] + ", ";
		console.log(afgProvinces);
	}
	c++;
}
