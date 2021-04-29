/*
Homework 3: Statements and Operators
Name: Diardano Raihan

Details:
Let's look at a popular logical argument (a syllogism)

All men are mortal
Socrates is a man.
Therefore, socrates is mortal.

Using "if statements" and any other logical operators and data-types you see fit, 
recreate this logical argument. Your code should make clear that "socrates" is part 
of a collection of items referred to as "men", and that all members of this collection 
are mortal. You should also then demonstrate that since Socrates is part of this collection, 
it follows that he is mortal as well.
*/

const men = ["Socrates", "Leonardo", "Messi", "Ronaldo"];
const figure = "Socrates";
let isMortal = true;

if (isMortal && men){
    console.log("All men are mortal.");
    if (men.includes(figure)){
        console.log(figure + " is a man.");
        console.log("Therefore, " + figure + " is mortal.")
    }
    else{
        console.log(figure + " is not a man");
        console.log("Therefore, " + figure + " is not mortal.")
    }
}

/*
Extra Credit:

Got the hang of creating a logical argument? Want to try another one? Try this one as well:

This cake is either vanilla or chocolate.
This cake is not chocolate.
Therefore, this cake is vanilla.
*/

let isVanilla = true;
let isChocolate = false;

if (isVanilla || isChocolate){
    console.log("This cake is either vanilla or chocolate.")
    if (!isVanilla){
        console.log("This cake is not vanilla.")
        console.log("Therefore, this cake is chocolate.")
    }
    else if (!isChocolate){
        console.log("This cake is not chocolate.")
        console.log("Therefore, this cake is vanilla.")
    }
}




