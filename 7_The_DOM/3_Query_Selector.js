// ------------------------------ document.querySelector() ----------------------------
// You can use document.querySelector to grab any CSS selector as you would, say in style tag.
// But, it only applies the style to the first matched div in the document. 
const myDiv = document.querySelector("div");

console.log(myDiv); // the result will be the same as getElementById

myDiv.style.color = "green"; // you will overwrite the red color from CSS style via inline CSS style
myDiv.style.fontSize = "100px";

// ------------------------------ document.querySelectorAll() ----------------------------

const dummyDivs = document.querySelectorAll(".dummy");

for (let prop of dummyDivs){
    prop.style.color = "purple";
}

const dummySpan = document.querySelectorAll(".dummy span");

for (let prop of dummySpan){
    prop.style.fontSize = "100px"
}


