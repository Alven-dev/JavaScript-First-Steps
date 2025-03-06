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

let playerPokemon = {
    name: starters[choice],
    health: 20,
    level: 5,
    experience: 0,
    attack: function() {
        if (this.name === "Charmander") {
            return Math.floor(Math.random() * 6) + 2;
        } else if (this.name === "Bulbasaur") {
            return Math.floor(Math.random() * 5) + 2; 
        } else if (this.name === "Squirtle") {
            return Math.floor(Math.random() * 5) + 2;
        }
    }
};

let pikachu = {
    name: "Pikachu",
    health: 20,
    level: 5,
    experience: 0,
    attack: function() {
        return Math.floor(Math.random() * 4) + 2;
    }
};

alert("Let's test your new Pokemon in a battle!");

alert("A wild Pikachu appeared!")


function battle() {
    let turn = 0;
    while (playerPokemon.health > 0 && pikachu.health > 0) {
        if (turn === 0) {
            let damage = playerPokemon.attack();
            pikachu.health -= damage;
            alert(playerPokemon.name + " used Tackle! It dealt " + damage + " damage to Pikachu!");
        } else {
            let damage = pikachu.attack();
            playerPokemon.health -= damage;
            alert("Pikachu used Tackle! It dealt " + damage + " damage to " + playerPokemon.name + "!");
        }
        
        if (playerPokemon <= 0) {
            alert(playerPokemon.name + " has fainted! Pikachu wins the battle!");
            break;
        } else if (pikachu.health <= 0) {
            alert("Pikachu has fainted! " + playerPokemon.name + " wins the battle!");
            break;
        }
        turn = 1 - turn;
    }
    if (playerPokemon.health > 0) {
        playerPokemon.experience += 23;
        alert(playerPokemon.name + " gained 23 experience points!");
    }

    
    if (playerPokemon.experience >= 15) {
        playerPokemon.level = 6;
        alert(playerPokemon.name + " leveled up to level 6!");
    }
}

battle();