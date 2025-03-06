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
let itemsList = items.join(", ");
alert("Congratulations! You've found " + itemsList +"!");

alert("You've run out of stamina, you need to rest")