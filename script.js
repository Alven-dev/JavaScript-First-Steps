// alert("Hello!");

// Example 1 //

let age = 18;
let identityCard = true;

if (age >= 18 && identityCard === true) {
    console.log("You can enter to the movie theater!");
} else {
    console.log ("I'm sorry, you can't enter.");
}

// true && true = true
// true && false = false
// false && true = false
// false && false = false

// Example 2 //

let cardVIP = false;
let ticket = true;

if (cardVIP === true || ticket === true) {
    console.log("Welcome to the concert!");
} else {
    console.log("I'm sorry, you can't enter.")
}

// true || true = true
// true || false = true
// false || true = true
// false || false = false


// Exercise 1 //

// Student passes his exam if :
// He has note superior than 10.
// OR he has done a bonus project.


let note = 9;
let bonusProject = true;

if (note >= 10 === true || bonusProject === true) {
    console.log("You pass!");
} else {
    console.log("I'm sorry you didn't make it.");
}