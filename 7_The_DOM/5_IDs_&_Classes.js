// We can grab the actual id using .id attribute and even replace its name with something else

const element = document.getElementById("footer");
const elID = element.id;
console.log(elID);

const replacementID = "bottom";
element.id = replacementID;
console.log(element);

// Apply an id to a tag
const el = document.getElementsByTagName("div");
const headerDiv = el[0];
headerDiv.id = "header";

// Do something similar to a class
const spanDiv = document.querySelector(".dummy span");

console.log(spanDiv.className);

const purpleDivs = document.querySelectorAll(".purple");
// purpleDiv.style.backgroundColor = "purple";
// purpleDiv.style.width = "100px";
// purpleDiv.style.height = "100px";

// Add the "foo" class name.
for (let prop of purpleDivs){
    // prop.className += " foo";
    prop.classList.add("foo");
}

// setTimeout: It will not get executed until 1 second passes to remove the "foo" class name.
setTimeout(() => {
    for (let prop of purpleDivs){
        prop.classList.remove("foo");
    }
}, 1000)

// setInterval: it runs every interval you set.
setInterval(() => {
    for (let prop of purpleDivs){
        prop.classList.toggle("foo");
        // toggle will check whether or not it has the class we want it.
        // if yes, then remove it. if no, add it. 
        // So, just toggling it on and off.
    }
}, 3000)