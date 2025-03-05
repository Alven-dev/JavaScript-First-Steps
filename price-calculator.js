let price = prompt("What is the price of an article?");
let reduction = prompt("What reduction percentage do you have?");

if (price <= 0) {
    alert("Sorry, there was a problem with intial price.");
}

let reductionValue = (price * reduction) / 100;
let finalPrice = price - reductionValue;
console.log("After a reduction of " + reduction + "%, the final price is " + finalPrice + " euros.");