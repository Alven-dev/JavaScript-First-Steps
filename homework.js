
let nameOne = prompt("What is the first name?");
let nameTwo = prompt("What is the second name?");
let nameThree = prompt("What is the third name?");
let nameFour = prompt("What is the fourth name?");
let nameFive = prompt("What is the fifth name?");
let nameSix = prompt("What is the sixth name?");
let nameSeven = prompt("What is the seventh name?");
let nameEight = prompt("What is the eighth name?");
let nameNine = prompt("What is the nineth name?");

let table = [
    [nameOne, nameTwo, nameThree],
    [nameFour, nameFive, nameSix],
    [nameSeven, nameEight, nameNine]
];

console.table(table);