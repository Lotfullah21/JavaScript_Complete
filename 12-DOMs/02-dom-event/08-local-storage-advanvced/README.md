## JSON.stringify() and JSON.parse()

are methods used to convert JavaScript objects to strings and back to objects. Here's how they work:

## JSON.stringify():

Converts a JavaScript object, array, or other value into a JSON string.
This is useful for storing data in a format that can be easily transmitted or stored, like in localStorage, which can only store strings.

```js
const subjects = ["AI", "ML", "Python"];
const jsonString = JSON.stringify(subjects); // Converts the array into a string: '["AI","ML","Python"]'
localStorage.setItem("subject", jsonString); // Stores the string in localStorage
```

## JSON.parse():

Converts a JSON string back into a JavaScript object, array, or value.
This is useful for retrieving and using data that was previously stored as a JSON string.

```js
const jsonString = localStorage.getItem("subject"); // Retrieves the string from localStorage
const subject = JSON.parse(jsonString); // Converts the string back into an array: ["AI", "ML", "Python"]
console.log(subject[0]); // Outputs: "AI"
```
