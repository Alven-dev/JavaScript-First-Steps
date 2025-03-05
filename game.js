alert("Wild Pikachu appears!")

let trainer = prompt("How much HP does your pokemon have?")

if (trainer > 50) {
    alert("Critical Hit!");
} else if (trainer > 20 && trainer < 50) {
    alert("It's not very effective...");
} else {
    alert("You run away!");
}