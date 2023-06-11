function square() {
  for (var i = 1; i < 10; i++) {
    var result = i + "x" + `${i}` + "=" + i * i;
    console.log(result);
  }
  return NaN;
}

console.log(square());

const cats = ["Pete", "Biggles", "Jasmine"];

let myFavoriteCats = "My cats are called ";

for (const cat of cats) {
  myFavoriteCats += `${cat}, `;
}

console.log(myFavoriteCats); // "My cats are called Pete, Biggles, Jasmine, "
