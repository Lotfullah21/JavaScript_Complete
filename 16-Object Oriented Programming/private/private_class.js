/*
class fields are public by default, but by adding a # before the neme of the field, we can make them private.
those fields cannot be accessed outside of the class, if asked, a ReferenceError will be thrown.

SYNTAX

class Home{
    #classfield
    #classfieldwithinitializer=32
}

the identifier must be unique

*/

class Circle {
  #radius = 43;
  #PI;

  constructor(radius, pi) {
    this.#radius = radius;
    this.#PI = pi;
  }
}

console.log(Circle.radius);
