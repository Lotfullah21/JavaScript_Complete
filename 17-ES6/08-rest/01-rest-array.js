const countries = ["India", "Iraq", "Iran", "'Belgium", "Germany", "Ireland"];
// Give me the first two countries and gather the rest in somemore variable
const [india, iraq, ...somemore] = countries;
console.log(india, iraq, somemore);

const string = "9121212121";
const newString = ([first, ...moreString] = string);
console.log("first", first);
console.log("moreString", moreString);

console.log("rest", somemore);
