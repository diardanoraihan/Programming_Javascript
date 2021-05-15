// You can traverse the DOM to its parent or children element.
const spanDiv = document.querySelector(".dummy span");

console.log(spanDiv.parentNode); // div dummy
console.log(spanDiv.parentNode.parentNode) // body

// Give some styling on parent element
spanDiv.parentNode.style.backgroundColor = "teal";

const testDiv = document.getElementById("test");
console.log(testDiv.childNodes); // NodeList(3) [text, span, text]
console.log(testDiv.childNodes[0]); // "This is my first"
console.log(testDiv.childNodes[1]); // <span>dummy</span>