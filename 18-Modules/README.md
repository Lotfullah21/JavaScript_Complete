## Modules

A module in JavaScript is a reusable piece of code that is encapsulated in its own file. It allows you to group related variables, functions, objects, or classes together. Modules make code easier to maintain, understand, and reuse across different parts of an application by splitting it into smaller, self-contained files.x

Modules are a way to organize and encapsulate code. They enable you to split code into separate files, making it more manageable, maintainable, and reusable. Modules help in structuring code, avoiding conflicts, and sharing logic between files in a clean way.

## Key Characteristics of a Module:

- Encapsulation: Code inside a module is isolated and doesn’t pollute the global scope.
- Reusability: A module can be imported and used in multiple parts of the application or even across different projects.
- Maintainability: By organizing code into modules, it's easier to update and manage as the application grows.

## Exporting

We can export variables, functions, classes, or objects from a module using the export keyword.

There are two main ways to export.

#### 1. Named export:

- We can export multiple variables, functions, or classes from a module.
- Each named export must be imported with the exact name.

We can export as many functions or data as we want.

```js
export const subjects = [
	{
		name: "Artificial intelligence",
		year: 1957,
	},
	{
		name: "Machine learning",
		year: 2012,
	},
	{
		name: "Deep learning",
		year: 1998,
	},
	{
		name: "Python",
		year: 1991,
	},
	{
		name: "Javascript",
		year: 1995,
	},
];
```

#### 2. Default export:

- There can only be one default export per module.
- This is typically used for the main functionality of the module, and it can be imported using any name.

```js
// module.js
export default function main() {
	console.log("This is the default export!");
}
```

We can export only once, this one can be the main functionality or usage of our module.

<code><script type="module" src="main.js"></script></code> add type = module script.

## Importing from modules

we can use import statement to get the modules from exported modules and use {} for named exports where the names should match and for default export we have the freedom of what ever name we choose, but the paths should be correct.

#### 1. Importing Named Exports:

- You need to use the exact name of the exported variable, function, or class.
- You use curly braces {} to import specific named exports, it has to be inside {}.

```js
import { subjects } from "./module.js";

console.log(foo); // Output: Hello
greet(); // Output: Greetings!
```

#### 2. Importing Default Exports:

You can name the import whatever you like when dealing with default exports.

```js
import mainFunction from "./module.js";

mainFunction(); // Output: This is the default export!
```

#### 3. Combining Named and Default Imports:

You can also import both named and default exports from a single module in one statement:

```js
import mainFunction, { subjects } from "./module.js";
```

## Adding Modules in HTML

To include a JavaScript module in HTML, we need to use the type="module" attribute in the <script> `tag`. This tells the browser to treat the script as a module, which supports features like import and export.

```js
<script type="module" src="./main.js"></script>
```

- type="module": Specifies that the script should be treated as an ES6 module.
- Modules: Use import and export statements, and are subject to CORS policies.
- Asynchronous Loading: Modules are loaded asynchronously, meaning they don’t block the rendering of the page.

Using modules helps in organizing code better and keeping HTML clean, as the JavaScript logic is separated into its own files.
