const cats = ["Pete", "Biggles", "Jasmine"];
let myFavoriteCats = "My cats are called ";

for (cat of cats) {
	myFavoriteCats += `${cat}, `;
}
console.log(myFavoriteCats); // "My cats are called Pete, Biggles, Jasmine, "
