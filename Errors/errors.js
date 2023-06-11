// // try {
// //   console.log(a + b);
// // } catch (err) {
// //   console.log("Lets check if you made a mistake");
// //   console.log(err);
// // }

// // try {
// //   throw new ReferenceError();
// // } catch (err) {
// //   console.log("Reference error has been thrown up\n CATCH IT IF YOU CAN!");
// //   console.log("HERE IS THE ERROR", err);
// // }

// // function addTwoNums(a, b) {
// //   try {
// //     console.log(a + b);
// //   } catch (err) {
// //     console.log(err);
// //   }
// // }

// // addTwoNums(2, 3);

// function addTwoNums(a, b) {
//   try {
//     if (typeof a != typeof b) {
//       throw new TypeError();
//     } else {
//       console.log(a + b);
//     }
//   } catch (err) {
//     console.log(err);
//   }
// }

// addTwoNums(2, 3);

// // function addTwoNums(a, b) {
// //   try {
// //     if (typeof a != "number") {
// //       throw new TypeError("tye of 'a' does not match to type of b");
// //     } else if (typeof b != "number") {
// //       throw new TypeError("type of 'b' does not match to type of a");
// //     } else {
// //       console.log("Addition:", a + b);
// //     }
// //   } catch (err) {
// //     console.log("ERROR HAS BEEN TROWN");
// //     console.log(err);
// //   }
// // }

// // addTwoNums("2", 3);

// function letterFinder(word, match) {
//   var condition1 = typeof word == "string" && word.length >= 2; //if the word is a string and the length is greater than or equal to 2
//   var condition2 = typeof match == "string" && match.length == 1; //if the match is a string and the length is equal to 1
//   if (condition1 && condition2) {
//     //if both condition matches
//     for (var i = 0; i < word.length; i++) {
//       if (word[i] == match) {
//         //check if the character at this i position in the word is equal to the match
//         console.log("Found the", match, "at", i);
//       } else {
//         console.log("---No match found at", i);
//       }
//     }
//   } else {
//     //if the requirements don't match
//     console.log("Please pass correct arguments to the function");
//   }
// }
// letterFinder([], []);
// const ans = letterFinder("cat", "c");
// console.log(ans);

// function letterFinder(word, match) {
//   var condition1 = typeof word == "string" && word.length >= 2;
//   var condition2 = typeof match == "string" && match.lenght == 1;

//   if (condition1 == true && condition2 == true) {
//     try {
//       for (i = 0; i < word.length; i++) {
//         if (word[i] == match) {
//           //if the current character at position i in the word is equal to the match
//           console.log("Found the", match, "at", i);
//         } else {
//           console.log("---No match found at", i);
//         }
//       }
//     } catch (err) {
//       console.log(err);
//     }
//   }
// }

// const answer = letterFinder("cat", "c");
// console.log(answer);

try {
  Number(5).toPrecision(300);
} catch (e) {
  console.log("There was an error");
}

var str = "Hello";
str.match("jello");
