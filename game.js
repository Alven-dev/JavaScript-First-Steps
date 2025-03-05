alert("Young trainer! Welcome to pokemon adventure simulation!");
alert("First you'll need a pokemon!");

let starters = ["Placeholder", "Bulbasaur", "Charmander", "Squirtle"];

alert("If you want to start a game with " + starters[1] + " type 1.");
alert("If you want to start a game with " + starters[2] + " type 2.");
alert("If you want to start a game with " + starters[3] + " type 3.");

let choice = prompt("Which starter would you like to start with?");

choice = parseInt(choice);

if (choice >= 1 && choice <= 3) {
    alert("Great choice! You selected " + starters[choice] + " as your starter Pokémon!");
} else {
    alert("Invalid choice! Please refresh and try again.");
}

let playerPokemon {
    name: starters[choice],
    health: 20,
    level: 5,
    experience: 0,
    attack: function() {
        if (this.name === "Charmander") {
            return Math.floor
        }
    }
}

alert("Let's test your new Pokemon in a battle!");

alert("A wild Pikachu appeared!")



let trainer = prompt("How much HP does your pokemon have?");



if (trainer > 50) {
    alert("Critical Hit!");
} else if (trainer > 20 && trainer < 50) {
    alert("It's not very effective...");
} else {
    alert("You run away!");
}