function cuirePizza(temps, callback) {
    console.log("La pizza est cuite");
    setTimeout(callback, temps)
}

function sonnerMinuteur() {
    console.log("Ding pizza is good!");
}





let tableau = ["", "", "", "", ""];

for (i = 0; i < tableau.length; i++) {
    console.log("case : " + i)
}

let letters = ["A", "B", "C", "D", "E"];
let index = 0;

while (index < tableau.length) {
    tableau[index] = letters[index];
    index++;
}

tableau.forEach(function(value) {
    console.log("case " + value);
});


// TIMEOUT //

function sayHello(name, time, callback) {
    console.log("Hello " + name + "!");
    setTimeout(callback, time);
}


function sayBye() {
    console.log("Bye Bye!")
}

sayHello("Niko", 2000, sayBye)


function salute() {
    console.log("Hello!");
}

function gratitude() {
    console.log("Thank you!");
}


function process() {
    console.log("Process beginning...");
    setTimeout(salute, 1000);
    setTimeout(gratitude, 3000);
    setTimeout(function () {
        console.log("Process ending...");
    }, 4000);
}



