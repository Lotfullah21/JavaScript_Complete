const ahmad = {
  name: "Ahmad",
  age: 34,
  //   cannot use variables types inside object (let,const)
  greeting: function sayHi() {
    //   here this refers to what ever object calling this function or the parent.
    console.log(this);
    console.log(`Hello, I am ${this.name} and I am ${this.age} years old`);
  },
};

const jacob = {
  name: "Jacob",
  age: 14,

  greeting: () => {
    //   here this refers to the surrounding block which is window object.
    console.log(this);
    console.log(`Hello, I am ${this.name} and I am ${this.age} years old`);
  },
};

// ahmad.greeting();
// jacob.greeting();

const ayaan = {
  name: "Ayaan",
  age: 33,
  greeting: function sayHi() {
    console.log(this);
    console.log(`Hello, I am ${this.name} and I am ${this.age} years old`);
    //   one solution to use const and refer to the crnt env
    const self = this;
    setTimeout(function () {
      // since the time out fn is a global object and regular fns refer to parent, here it will refer to the global scope.
      console.log(this);
      console.log("self", self);
      console.log(`Hello, I am ${this.name} and I am ${this.age} years old`);
      console.log(`Hello, I am ${self.name} and I am ${self.age} years old`);
    }, 5000);
  },
};

// ayaan.greeting();

const ali = {
  name: "ALi",
  age: 33,
  greeting: function sayHi() {
    console.log(this);
    console.log(`Hello, I am ${this.name} and I am ${this.age} years old`);

    setTimeout(() => {
      // arrow fns refers to its current surrounding scope,here the surrounding scope is the object
      console.log(this);

      console.log(`Hello, I am ${this.name} and I am ${this.age} years old`);
    }, 5000);
  },
};

ali.greeting();
