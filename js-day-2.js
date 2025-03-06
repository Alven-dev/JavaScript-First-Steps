let animalpark = [
    { name: "Syberian Tiger", family: "Felidae", Age: 3, enclosure: "Subarctic Zone", food: "meat" },
    { name: "Cheetah", family: "Felidae", Age: 2, enclosure: "Savannah Zone", food: "meat" },
    { name: "Mackenzie River Wolf", family: "Canidae", Age: 5, enclosure: "Subarctic Zone", food: "meat" },
    { name: "Polar Bear", family: "Ursus", Age: 10, enclosure: "Arctic Zone", food: "meat" },
    { name: "Black Bear", family: "Ursus", Age: 12, enclosure: "Mountain Zone", food: "meat" },
];

// 1.
console.log(animalPark);

// 2.
for (let i = 0; i < animalPark.length; i++) {
    let animal = animalPark[i];
    if (animal.food === "meat") {
        console.log("Here are carnivore animals : " + animalPark[i].name);
    }
}

// 3.
for (let i = 0; i < animalPark.length; i++) {
    let animal = animalPark[i];
    if (animal.Age >= 10) {
        console.log("Here are old animals : " + animalPark[i].name);
    }
}

// 4.
    let enclosureDescriptions = {
        "Arctic Zone": "The coldest zone for arctic animals.",
        "Savannah Zone": "A vast open space for roaming.",
        "Subarctic Zone": "Zone for animals who like harsh envoirement",
        "Mountain Zone": "Rocky zone with high grounds"
    };

    for (let i = 0; i < animalPark.length; i++) {
         let animal = animalPark[i];
         let description = enclosureDescriptions[animal.enclosure] || "an unknown enclosure.";
         console.log(animal.name + " is in the " + animal.enclosure + ". " + description);
    }


// 5.
for (let i = 0; i < animalPark.length; i++) {
    let animal = animalPark[i];
    if (animal.family === "Canidae") {
        console.log(animalPark[i].name + " Endangered animal warning!")
    }
}


// EXERCISE 2 //


let bakery = [
    { name: "Bread", price: 1.99, stock: 25 },
    { name: "Croissant", price: 1.50, stock: 120 },
    { name: "Chocolatine", price: 1.50, stock: 100 },
];

console.log(bakery);



// EXERCISE BONUS //

let animalPark = [
    { name: "Syberian Tiger", family: "Felidae", Age: 3, enclosure: "Subarctic Zone", food: "meat" },
    { name: "Cheetah", family: "Felidae", Age: 2, enclosure: "Savannah Zone", food: "meat" },
    { name: "Mackenzie River Wolf", family: "Canidae", Age: 5, enclosure: "Subarctic Zone", food: "meat" },
    { name: "Polar Bear", family: "Ursus", Age: 10, enclosure: "Arctic Zone", food: "meat" },
    { name: "Black Bear", family: "Ursus", Age: 12, enclosure: "Mountain Zone", food: "meat" },
];

let newName = prompt("Enter the animal's name:");
let newFamily = prompt("Enter the animal's family:");
let newAge = prompt("Enter the animal's age:");
let newEnclosure = prompt("Enter the animal's enclosure:");
let newFood = prompt("Enter the animal's food type preference:");

let newAnimal = {
    name: newName,
    family: newFamily,
    Age: newAge,
    enclosure: newEnclosure,
    food: newFood
};

animalPark.push(newAnimal);

console.log(animalPark);