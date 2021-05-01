/*
Homework 4: Functions
Name: Diardano Raihan
Details:

Let's go back to your syllogism (logical argument) examples from Homework #3. 
Now it's time to turn those loose bits of logic into functions. 
Rather than having procedure that demonstrates that Socrates is mortal, 
you should create a function that accepts a name and returns a boolean 
(True or False) representing whether that name identifies a man who is mortal or not. 

Your function to gracefully handle unexpected inputs 
(such as an unrecognized name or a name that is a not a string at all) without 
throwing an exception.

*/

// Array definition
const men = ["Socrates", "Leonardo", "Messi", "Ronaldo"];

// Function declaration
const isMan = (name) => {
    if (men.includes(name)){
        console.log(name + " is a man and mortal.")
        return true;
    }
    else if ((typeof name) === "string"){
        console.log(name + " is not a man and not mortal.");
        return false;
    }
    else{
        console.log(name + " is not a name at all.");
        return false;
    }
}
console.log(isMan("Socrates")); // true
console.log(isMan("table")); // false
console.log(isMan(2)); // false

/*
Extra Credit:
If you did the extra credit on Homework #3, let's turn that example into a function as well. 
It should accept in 2 arguments:

1. An array of all cake possibilities (vanilla or chocolate)

2. A boolean representing whether or not the cake is chocolate.

It should return a string indicating the actual flavor of the cake.
*/

const cakes = ['vanilla', 'chocolate'];

const typeOfCake = (arrayCake, isChocolate = true) => {
    if (isChocolate){
        console.log("The cake is a "+ arrayCake[1] + " cake.")
    }
    else{
        console.log("The cake is a "+ arrayCake[0] + " cake.")
    }
}

typeOfCake(cakes); // chocolate cake
typeOfCake(cakes, true); // chocolate cake
typeOfCake(cakes, false); // vanilla cake
