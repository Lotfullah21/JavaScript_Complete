## JSON (JavaScript Object Notation)

### What is JSON?

**JSON (JavaScript Object Notation)** is a lightweight data-interchange format. It is easy for humans to read and write, and easy for machines to parse and generate. JSON is based on a subset of the JavaScript programming language, but it is language-independent, making it widely used for exchanging data between servers and web clients.

### JSON Syntax

JSON data is written as key-value pairs and can include the following types:

- **Objects**: Represented by `{}` and consist of key-value pairs.
- **Arrays**: Represented by `[]` and consist of ordered values.
- **Values**: Can be strings, numbers, booleans, arrays, objects, or `null`.

#### Example of JSON Data:

```json
{
	"name": "Ahmad",
	"age": 26,
	"isStudent": false,
	"courses": ["AI", "PYTHON", "ML"],
	"address": {
		"city": "Kabul",
		"zipcode": "1001"
	}
}
```

## Working with JSON in JavaScript

Use the JSON.parse() method to convert a JSON string into a JavaScript object:x

### 1. JSON to JavaScript Object:

```js
const jsonString = '{"name": "John", "age": 30}';
const jsonObject = JSON.parse(jsonString);
console.log(jsonObject.name); // Output: John
```

### 2. JavaScript Object to JSON:

Use the JSON.stringify() method to convert a JavaScript object into a JSON string:

```js
const person = {
	name: "John",
	age: 30,
	city: "New York",
};
const jsonString = JSON.stringify(person);
console.log(jsonString); // Output: {"name":"John","age":30,"city":"New York"}
```

## JSON in Web APIs

JSON is extensively used in web APIs to exchange data between the client and server. For example, when making an API request, you might receive or send data in JSON format.

```js
fetch("https://jsonplaceholder.typicode.com/posts/1")
	.then((response) => response.json())
	.then((data) => console.log(data))
	.catch((error) => console.error("Error:", error));
```

## Benefits of JSON

` Lightweight`: Minimal syntax leads to smaller data sizes and faster transmission.
`Easy to Read and Write`: Human-readable format that is easy to understand and generate.
`Cross-Language Support`: Supported by many programming languages, making it a universal data format.

# Difference between JSON and Javascript objects

## 1. JSON (JavaScript Object Notation)

JSON (JavaScript Object Notation) is a lightweight data format used to exchange data between servers and clients. It is essentially a string representation of data and is limited to key-value pairs where keys must be strings, and values must be strings, numbers, arrays, booleans, or null. It cannot contain functions or methods.

- In JSON, data is stored as plain text and can only represent data (no methods or functions).
- JSON is primarily used for data transfer over the web and is often used with APIs.

## 2. JavaScript object

A **JavaScript object** is a collection of key-value pairs, where the keys are strings (or symbols), and the values can be any data type (e.g., strings, numbers, booleans, arrays, functions, or even other objects). JavaScript objects are used to store data in a structured way within a program.

#### Example of a JavaScript Object:

```js
const person = {
	name: "John",
	age: 30,
	isStudent: false,
	greet: function () {
		return "Hello!";
	},
};
```

- The object person has properties like name, age, and isStudent, and it even contains a method greet.
- JavaScript objects can have functions as values (methods).
- They are a core part of JavaScript and used in programming logic.

| **Feature**              | **JavaScript Object**                                                   | **JSON**                                                                                        |
| ------------------------ | ----------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- |
| **Type**                 | JavaScript object (native to JS).                                       | A string format used for data interchange.                                                      |
| **Usage**                | Used for manipulating data within JavaScript code.                      | Used for transmitting data between client and server.                                           |
| **Data Types Supported** | Can include strings, numbers, booleans, arrays, objects, and functions. | Can include strings, numbers, booleans, arrays, objects, and `null`. Functions are not allowed. |
| **Keys**                 | Keys can be strings or symbols.                                         | Keys must be strings (enclosed in double quotes).                                               |
| **Values**               | Can be any valid JavaScript data type.                                  | Values can only be strings, numbers, booleans, arrays, objects, or `null`.                      |
| **Format**               | Object literal syntax (not a string).                                   | A string representation of data (requires double-quoted keys).                                  |
| **Convertibility**       | Native to JavaScript, no conversion needed.                             | Needs to be parsed to be used in JavaScript (`JSON.parse()`).                                   |
| **Methods**              | Can contain methods (functions).                                        | Cannot contain functions or methods.                                                            |

JavaScript objects are dynamic and used within the language to manipulate data, whereas JSON is a structured text format for data interchange, primarily used to transmit data across systems.
