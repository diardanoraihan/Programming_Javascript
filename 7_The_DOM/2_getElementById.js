// -------------------------------------- Problem ----------------------------------
// getElementsByTagName can be very useful, but it's not always the best solution.
const allSpans = document.getElementsByTagName("span");

// See what allSpans contains
console.log(allSpans)

// for (const prop of allSpans){
//     console.log(prop.innerHTML);
// }

for (const prop of allSpans){
    prop.innerHTML = "Somebody";
}

// As you can see, you can get a content based on a tag. But, you will get all the corresponding 
// tags without being able to do a specific task to a specific tag.

// -------------------------------------- Solution ----------------------------------
// That's where get an element by ID comes in handy.

const ID = document.getElementById("identifier");

// See what ID contains
console.log(ID);
ID.innerHTML = "<h1>We all</h1>";

// -------------------------------------- Sub Query ----------------------------------
// Get the element from the tag "span" after the id="app" 
const myAppDiv = document.getElementById('app');
const specialWords = myAppDiv.getElementsByTagName("span");

for (const prop of specialWords){
    prop.innerHTML = "<b>Test!!!</b>";
}

// -------------------------- Another Example of changing the content ----------------
const totalWordsChanged = document.getElementById("total");
totalWordsChanged.innerHTML = specialWords.length

const membersUl = document.getElementById("members");
const allMembersName = membersUl.getElementsByTagName("li");

// allMembersName[3].innerHTML = "Not Bob";
for (let prop of allMembersName){
    if (prop.innerText === "Bob"){
        prop.innerHTML = "<h3>Not Bob</h3>";
    }
}

