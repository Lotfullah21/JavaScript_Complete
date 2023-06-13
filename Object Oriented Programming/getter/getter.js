/*
A getter is a function that bind an object property to a function, when we need that function,we can call that getter

a getter should not have a parameter
*/

const Human = {
  name: "King",
  get getName() {
    return this.name;
  },
};

console.log(Human.name);

class Lab {
  msg = "You can do anything if you put will and hardwork in it";
  get labMsg() {
    return this.msg;
  }
}

const myLab = new Lab();
console.log(myLab.labMsg);
