// For . . . in loop
/*
Loop through an object's properties in arbitrary order.
Although you can use it for something like Array, but
mostly you will use it for object. 

Note: used for looping over object properties
*/

const users = {
    1: "Sally",
    2: "Billy",
    3: "Ashley",
    4: "Timmy"
};

for (let id in users){
    if (users[id] === "Ashley"){
        break;
    }
    console.log(users[id]);
}

console.log("-----------------------");

// Array.forEach()
/*
Performs the specified action for each element in an array.

Advantages:
- Use this if order is important for you.
- Now, you can apply this on an array also.

Disadvantages:
- You cannot use this on an object.
- You cannot use "break" or "continue" in the middle of the loop
*/
const drinks = ["coffee", "sprite", "tea", "coke", "pepsi"];

drinks.forEach((d) => {
    console.log(d);
});

console.log("-----------------------");

// For . . . Of
/*
New loop in ES6 used to loop over iterable objects
i.e. arrays, strings, maps, sets, etc. 

Note: 
- used for looping over the data - like values - in an array
- you cannot use it for an object.
*/

const originalArray = ["chris", "chris", "jane", "sally", "billy", "billy", "bob"];
const uniqueNameSet = new Set(originalArray)
for (let name of uniqueNameSet){
    console.log(name);
}

console.log("-----------------------");

// Catch the difference between for in and for of below:
for (let d of drinks){
    console.log(d)
}

for (let d in drinks){
    console.log(d)
}


