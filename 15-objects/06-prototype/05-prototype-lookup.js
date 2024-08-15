// methods and properties of arrays or objects are stored in their prototype, not in the instances.
console.log({});
console.log([]);

// Gets Array.prototype
const arrayPrototype = Object.getPrototypeOf([]);
console.log(Object.getOwnPropertyNames(arrayPrototype));
