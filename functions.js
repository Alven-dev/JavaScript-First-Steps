function CheckAge(age) {
    if ( age < 18) {
        console.log("You can't enter!")
        return
    }
    
    console.log("you can enter")
}

function NumberCheck(number) {
    if (number % 2 === 0) {
        console.log("The " + number + " is pair");
    } else if (number % 2 === 1) {
        console.log("The " + number + " is impair");
    } else {
        console.log("Error")
    }
}


function repeatMsg(message, quantity) {
    for (let i = 0; i < quantity; i++) {
        console.log(message)
    }
}

function counter(x) {
    for (i = 0; i <= x; i++) {
        console.log(i);
    }
}
