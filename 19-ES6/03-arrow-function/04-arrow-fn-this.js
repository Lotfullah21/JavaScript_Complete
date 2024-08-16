const ahmad = {
	//   cannot use variables types inside object (let,const) like const name:"ahmad"
	name: "Ahmad",
	age: 34,
	greeting: function sayHi() {
		//  here this refers to what ever object calling this function or the parent.
		console.log(this);
		console.log(`Hello, I am ${this.name} and I am ${this.age} years old`);
	},
};

const jacob = {
	name: "Jacob",
	age: 14,
	greeting: () => {
		// here this refers to the surrounding block which is window object and consoles the window
		console.log(this);
		// We will get undefined
		console.log(`Hello, I am ${this.name} and I am ${this.age} years old`);
	},
};

ahmad.greeting();
jacob.greeting();

const john = {
	name: "Ahmad",
	age: 34,
	greeting: function sayHi() {
		setTimeout(() => {
			// !important Since its called within another function and its global parent is the object itself.
			console.log(this);
			console.log(`Hello, I am ${this.name} and I am ${this.age} years old`);
		}, 2000);
	},
};

john.greeting();
