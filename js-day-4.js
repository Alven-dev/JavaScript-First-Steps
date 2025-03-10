let title = document.querySelector("h1");

title.style.color = "yellow";
title.style.fontSize = "50px";

let paragraphe = document.querySelector("p");
paragraphe.innerText = "Hello it's me Mario!";

paragraphe.innerHTML = "<h2>Hello World!</h2>"

title.classList.add("hello");
title.classList.remove("hello");

if (title.classList.contains("hello")) {
    console.log("It's here!");
} else {
    console.log("It's not here!");
}

// click listener //

let button = document.querySelector("button");

button.addEventListener("click", function() {
    alert("Button clicked!");
});