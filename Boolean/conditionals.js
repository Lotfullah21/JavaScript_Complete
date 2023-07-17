// Logical operations.
// (|| OR),(&& AND),(! NOT)

var age = 25;

if (age >= 30) {
  console.log("Hello, Welcome to your 30's");
} else if (age >= 20) {
  console.log("You have to work Hard in your 20's");
} else {
  console.log("Dude you are sick");
}

/*
switch statement

switch (condition){
  logic
}

*/
var day = "Monday";

switch (day) {
  case "Saturday":
    console.log("only Project");
    break;
  case "Monday":
    console.log("Python,Teaching,Reviewing");
    break;
  case "Tuesday":
    console.log("you have to do Statistics only");
    break;
  case "Wednesday":
    console.log("You have to do probability only");
    break;
  case "Thursday":
    console.log("Only JavaScript");
    break;

  case "Friday":
    console.log("Only JavaScript");
    break;
  case "Sunday":
    console.log("Only Python");
    break;
  default:
    console.log("Have nothing to do");
}

const country = "Afg";
const state = 21;

if (age > 18 && country === "Afg") {
  console.log("OKAY");
} else {
  console.log("change your country");
}

// Dice game with if else

const diceValue = 1;
if (diceValue === 1) {
  console.log("Congratulations!!!! YOU WIN!!!!!!!");
} else if (diceValue === 2) {
  console.log("You lost");
} else if (diceValue === 3) {
  console.log("You lost");
} else if (diceValue === 4) {
  console.log("You lost");
} else if (diceValue < 1 || diceValue > 6) {
} else if (diceValue === 5) {
  console.log("You lost");
} else if (diceValue === 6) {
  console.log("You lost");
} else if (diceValue < 1 || diceValue > 6) {
  console.log("Enter a valid value");
}

// Dice game
const dice = 5;

switch (dice) {
  case 1:
    console.log("You lost");
    break;
  case 2:
    console.log("You lost");
    break;
  case 3:
    console.log("You lost");
    break;
  case 4:
    console.log("You lost");
    break;
  case 5:
    console.log("Congratulations: You WON!!!!!!!!");
    break;
  case 6:
    console.log("You lost");
    break;
  default:
    console.log("Try next time, Best LUCK!");
}
