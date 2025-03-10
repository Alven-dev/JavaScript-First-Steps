let title = document.querySelector("h1");

title.style.fontWeight = "bolder";
title.style.fontSize = "50px";
title.style.textAlign = "center";



let paragraphe = document.querySelector("p");
let button = document.getElementById("btnToggle");

button.addEventListener("click", function(){
    if (!paragraphe.classList.contains("text")) {
        paragraphe.classList.add("text");
        button.innerText = ("Activate");
    } else {
        paragraphe.classList.remove("text");
        button.innerText = ("Desactivate");
    }
});


// let one = document.getElementById("one");
// let two = document.getElementById("two");

// one.addEventListener("click", function() {
//     if (one.style.backgroundColor !== "green") {
//         one.style.backgroundColor = "green";
//         two.style.backgroundColor = "green";
//     } else {
//         one.style.backgroundColor = "red";
//         two.style.backgroundColor = "red";
//         two.style.borderRadius = "0";
//     }
// });

// two.addEventListener("click", function() {
//     if (two.style.backgroundColor === "red") {
//         two.style.backgroundColor = "blue";
//         two.style.borderRadius = "50%";
//     } else {
//         two.style.backgroundColor = "red";
//         two.style.borderRadius = "0";
//     }
// });


let one = document.getElementById("one");
let two = document.getElementById("two");
let three = document.getElementById("three");

one.addEventListener("click", function() {
    if (!one.classList.contains("fill")) {
        one.classList.add("fill");
        two.classList.remove("fill");
        three.classList.remove("fill");
    } else {
        one.classList.remove("fill");
    }
});

two.addEventListener("click", function() {
    if (!two.classList.contains("fill")) {
        two.classList.add("fill");
        one.classList.remove("fill");
        three.classList.remove("fill");
    } else {
        two.classList.remove("fill");
    }
});

three.addEventListener("click", function() {
    if (!three.classList.contains("fill")) {
        three.classList.add("fill");
        one.classList.remove("fill");
        two.classList.remove("fill");
    } else {
        three.classList.remove("fill");
    }
});