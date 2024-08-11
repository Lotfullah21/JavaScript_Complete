/*
we have two kind of web storage API which is provided by browser
session storage, local storage
 */

sessionStorage.setItem("name", "ahmad");
localStorage.setItem("name", "lotfullah");
localStorage.setItem("location", "Nepal");

// get the item
const name = localStorage.getItem("name");
console.log(name);

// Remove a key
localStorage.removeItem("job");
// After removing
console.log(localStorage.getItem("job"));

// clear whole local storage
localStorage.clear();
