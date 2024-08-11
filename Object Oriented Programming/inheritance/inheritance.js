/*
Inheritanc is everywhere, and programming is no exception.

we use the "extends" keyword to create a class from another class

class CHILDCLASS extends PARENTCLASS

means a child class that inherits some property from parent  class

we have another keyword "super" which helps us to get access to the parent class property or invoke the parent class
constructor, so that we do not need initialize the common property between parent and child class again.
*/

class King {
  constructor(name) {
    this.name = name;
  }
  lastKing() {
    return this.name + "was the last king of Afghanistan";
  }
}

class Prince extends King {
  constructor(name) {
    super(name);
  }
  princeName() {
    return this.name + " was son of the king";
  }
}

const shah = new King("Zahir Shah");
const prince = new Prince("Sardar");

console.log(shah.name);
console.log(shah.lastKing());
console.log(prince.name);
console.log(prince.princeName());
