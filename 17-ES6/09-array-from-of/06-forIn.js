// Mainly used to iterate over objects

const subs = {
	age: 2,
	field: "technology",
};

for (pro in subs) {
	console.log(pro);
	console.log(`${pro}:${subs.pro}`);
	console.log(`${pro}:${subs[pro]}`);
}

// It returns an array.
console.log(Object.keys(subs));
console.log(Object.values(subs));

const result = Object.entries(subs);
console.log(result);

// Using map and destructuring
const newResult = result.map(function (item) {
	const [first, second] = item;
	console.log(first, second);
	return first;
});

for (const item of result) {
	const [first, second] = item;
	console.log(first, second);
}
