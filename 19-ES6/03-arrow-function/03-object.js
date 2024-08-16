// For returning an object use {} inside ()
const object = () => ({
	name: "Apple",
	year: 1983,
});
console.log(object);
console.log("object =", object.name);
console.log(object().name);
console.log(object().year);
