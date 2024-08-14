/*

constructor is a special method of a class for creating and initializing and creating an object instance of that class

in a class, there can be only one method with the name of constructor

A constructor can use the super keyword to call the constructor of the super class.


a constructor will:

1. Create a new object
2. bind this to the new object
3. run the code in the constructor
4. return the new object

in fact a constructor will generate a special initialization.

*/

// class Circle {
//   constructor(radius, pi) {
//     this.radius = radius;
//     this.pi = pi;
//   }
// }

// Methods are defined on the prototype of each class and shared by all instances

class Circle {
  constructor(radius, pi) {
    this.radius = radius;
    this.pi = pi;
  }

  getArea() {
    return this.Area();
  }

  Area() {
    return this.pi * this.radius ** 2;
  }

  *getSides() {
    yield this.radius;
    yield this.pi;
  }
}

const smallCircle = new Circle(5, 3.14);
console.log(smallCircle.Area());
console.log(smallCircle.getArea());
console.log([...smallCircle.getSides()]);
