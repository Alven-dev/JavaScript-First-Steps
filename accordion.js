let one = document.getElementById("one");
let two = document.getElementById("two");
let three = document.getElementById("three");
let triggerOne = document.getElementById("triggerOne");
let triggerTwo = document.getElementById("triggerTwo");
let triggerThree = document.getElementById("triggerThree");


function accordion(trigger) {
    if (trigger.classList.contains("active")) {
        trigger.classList.remove("active");
        trigger.style.maxHeight = null;
    } else {
        trigger.classList.add("active");
        trigger.style.maxHeight = trigger.scrollHeight + "px";
    }
}

one.addEventListener("click", function() {
    accordion(triggerOne);
});

two.addEventListener("click", function() {
    accordion(triggerTwo);
});

three.addEventListener("click", function() {
    accordion(triggerThree);
});