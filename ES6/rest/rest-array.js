const countries = ["India", "Iraq", "Iran", "'Belgium", "Germany", "Ireland"];
const [india, iraq, ...somemore] = countries;
const string = "9121212121";
const newString = ([first, ...moreString] = string);
console.log("first", first);
console.log("moreString", moreString);
console.log(countries);
console.log("rest", somemore);
