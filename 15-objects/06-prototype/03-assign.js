// it is a prototype which later can be assigned or copied to another object
const personPrototype = {
	greet() {
		console.log(`hello, I am ${this.name}!`);
	},
};

function Person(name) {
	this.name = name;
}
Object.assign(Person.prototype, personPrototype);
const ahmad = new Person("Ahmad");
ahmad.greet();
