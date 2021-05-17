// Give all of the rectangles the same class and id
const hexCodes = document.getElementsByTagName("span");
let boxes = document.getElementsByTagName("div");
for (let i=0; i< boxes.length ; i++){
 boxes[i].classList.add("box");
}

// Give the boxes and hex codes the same class name to be wrapped
for (const prop of hexCodes){
    prop.className = "wrapped";
}

for (const prop of boxes){
    prop.classList.add("wrapped");
}

// Wrap all of the rectangles in an containing element ( a <div> ) 
// and give that element the id "rectangleWrapper"
const toBeWrapped = document.querySelectorAll(".wrapped");
const wrapper = document.createElement("div");

toBeWrapped.forEach((prop) => {
    wrapper.appendChild(prop);
})
wrapper.id = "rectangleWrapper";
document.body.append(wrapper);

const rectangleWrapper = document.getElementById("rectangleWrapper");
rectangleWrapper.style.paddingTop = "50px";
rectangleWrapper.style.paddingLeft = "50px";
rectangleWrapper.style.paddingRight = "50px";
rectangleWrapper.style.paddingBottom = "0px";

console.log("Here are the ractangle IDs");
boxes = document.querySelectorAll(".box");
for (let i=0 ; i<boxes.length ; i++){
    setTimeout(() => {
        console.log(boxes[i].id);
    }, i*500)
}



