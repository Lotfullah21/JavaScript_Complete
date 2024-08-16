// it turns array-like objects into array. (set,nodeList,string)

const name = "Hello";
console.log(Array.from(name));

// here we can have second a argument as well, that would be the map function

x = "12234578910";
console.log(
	Array.from(x, (z) => {
		console.log(z * 2);
		return z * 2;
	})
);

const lab = "HooshmndLab";
console.log(Array.from(lab));
