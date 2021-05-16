// ------------------------- Create a new DOM Element using Javascript ----------------- 

const creationDiv = document.getElementById("created");

// create a new element using document.createElement()
const newElement = document.createElement("p");
// Put content inside the new element
newElement.innerText = "I was created using Javascript";
// Put the new element as a child inside another element
creationDiv.appendChild(newElement);

newElement.classList.add("purple", "foo");

/*
This opens up a lot of possibilities for us.
Ex:
* We have data stored somewhere that we can access using JS. 
* We store that data in array. We want to create some kind
* of list, but only as many list items as there are entries
* in the array. 
*/

const myFaveIceCreams = ["vanilla", "rocky", "strawberry", "chocolate"];

const newElement2 = document.createElement("div");

const newUL = document.createElement("ul");

for (let prop of myFaveIceCreams){
    const newLI = document.createElement("li");
    newLI.innerText = prop;
    newUL.appendChild(newLI);
}

newElement2.appendChild(newUL);
creationDiv.appendChild(newElement2);

function removeIceCream(name){
    for (const prop of newUL.childNodes){
        if(prop.innerText === name){
            newUL.removeChild(prop);
        }
    }
}

setTimeout(() => {
    removeIceCream("vanilla");
}, 1000)

setTimeout(() => {
    removeIceCream("chocolate");
}, 2000)