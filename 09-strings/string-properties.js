

let str = "Hello"; // primitive string value
let strObject = new String(str); // String wrapper object
console.log(str);
console.log(strObject);

let home = "love Afghanistan and kabul";
let upperCase = home.toUpperCase();
console.log(home);
console.log(upperCase);
console.log(home.toLowerCase());

/*
*/

console.log(upperCase.charAt(0));
console.log(home.charAt(home.length - 1));
console.log(home.indexOf("a"));
console.log(home.indexOf("y")); // returns -1 if not present
console.log(home.trim()); // trim the wide space from the end and begining of a string
console.log(home.startsWith("love"));
console.log(home.trim().toUpperCase().startsWith("LOVE"));
console.log(home.includes("kab"));





