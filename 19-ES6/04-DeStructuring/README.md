# Destructure

- an easier way to access to the values inside an array or an object
- an easier way to unpack the values from arrays and objects

Need for destructing

```js
const subjects = [
	"Artificial Intelligence",
	"Deep Learning",
	"Machine Learning",
	"Python",
];

// accessing the values through indexing
const sub1 = subjects[0];
const sub2 = subjects[1];
const sub3 = subjects[2];
const sub4 = subjects[3];
console.log(sub1, sub2, sub3, sub4);
```

## 1. Arrays

- for array destructuring we use []
- only accessible inside that function
- like let and const inside a function

```js
const subjects = [
	"Artificial Intelligence",
	"Deep Learning",
	"Machine Learning",
	"Python",
];

const [su1, su2, su3, su4, su5] = subjects;
console.log(su1, su2, su3, su4, su5, su6);
// Artificial Intelligence Deep Learning Machine Learning Python undefined undefined
```

If we are adding the indices which there is no value for in the array, the return value for that index will `undefined`.

```js
const [su1, su2, su3, su4, su5, sub6] = subjects;
```

## 2. Objects

- for array destructuring we use []
- property name and variable name should match
- for changing the variable name, we can use aliasing
- {field:area} here the 'field' is property name and area is aliasing to that
- to access to the field,we cannot use field, we have to use the aliasing part.

```js
const subjects = {
	name: "Artificial Intelligence",
	field: "Cognitive Science",
	subject: ["Machine learning", "Mathematics", "Deep learning"],
	subfields: {
		vision: "Computer vision",
		language: "Natural language processing",
	},
};
```

While destructuring, names should match, if not, it will return `undefined`

```js
const { name, field, subject } = subjects;
// Artificial Intelligence Cognitive Science [ 'Machine learning', 'Mathematics', 'Deep learning' ]
console.log(name, field, subject);
```

```js
const { w, field, subject } = subjects;
// undefined Cognitive Science [ 'Machine learning', 'Mathematics', 'Deep learning' ]
console.log(w, field, subject);
```

## Aliasing

Refer the property by the its aliasing name

```js
const {original property name:Aliasing name}
```

```js
const subjects = {
	name: "Artificial Intelligence",
	field: "Cognitive Science",
	subject: ["Machine learning", "Mathematics", "Deep learning"],
	subfields: {
		vision: "Computer vision",
		language: "Natural language processing",
	},
};

// Aliasing
const {
	name: Artificial,
	field: area,
	subject: subjectsName,
	subfields: { vision, language: NLP },
	HELLO,
} = subjects;

console.log(Artificial, area, subjectsName, HELLO, vision, NLP);
```

## 3. Function

```js
const subjects = {
	name: "Artificial Intelligence",
	field: "Cognitive Science",
	subject: ["Machine learning", "Mathematics", "Deep learning"],
	subfields: {
		vision: "Computer vision",
		language: "Natural language processing",
	},
};

// from this object, I want these properties as my arguments
function get({ name, field, subject }) {
	console.log(name, field, subject);
}

get(subjects);

function getNew(courses) {
	const { name, field, subject } = courses;
	console.log(name, field, subject);
}
getNew(subjects);
```

## for of

- loops through values of iterable objects
- we can use break and continue here unlike forEach loop
