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


// For example 1 //

for (let hp = 1; hp <= 5; hp++) {
    console.log("HP " + hp);
}


// While example 1 //

let lives = 3;

while (lives > 0) {
    console.log("You have " + lives + " lives. Keep playing!!")
    lives--;
}

console.log("GG");

// Break example 1 //

let compteur = 1

while (true) {
    console.log("Your number " + compteur);

    if (compteur === 10){
        console.log("STOP");
        break;
    }

    compteur ++;
}

// forEach example 1 //

let friends = ["Yasuo", "Garen", "Miss Fortune", "Nami", "Nocturne"];

friends.forEach(function(nom) {
    console.log("Welcome to Summoner's Rift " + nom +"!");
});

// Exercises (french) //

for (let vienoiserie = 1; vienoiserie <= 10; vienoiserie++) {
    console.log("Vienoiserie numero " + vienoiserie);
}

let croissants = 10;
while (croissants > 0) {
    console.log("Tu as toujours " + croissants + ", continues à manger!")
    croissants --;
}

let vienoiseries = ["Pain aux chocolat", "Croissant", "Chausson aux pommes", "Brioche"];

vienoiseries.forEach(function(nom) {
    console.log("Aujourd'hui on a : " + nom +".");
});

// Game exercise //

alert("You start your training!")

for (let train = 1; train <= 10; train++) {
    console.log("Training number " + train);
}

alert("Training completed!")

alert("In front of you there are enemies. Your combat begins!")

let stamina = 10;
while (stamina > 0) {
    alert("You are attacking...");
    console.log("Ther are still " + stamina + " enemy(ies)");
    stamina --;
}

alert("You defeated all enemies!")

alert("You found a tressure!")

let items = ["Frostmourne", "Ashbringer", "Tyrael's Might"];
items.forEach (function(name) {
    alert("Congratulations! You've found " + name +"!")
});

alert("You've run out of stamina, you need to rest")