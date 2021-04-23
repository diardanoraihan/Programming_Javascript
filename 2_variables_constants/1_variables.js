/* ========================================= Variables =========================================
Variables are placeholders that store some data or information.
They are Case Sensitive.
*/

// a string variable
var myName = "Bob";
// console.log(myName);
// console.log(typeof myName);

// a number variable
var myFavNum = 24;
// console.log(myFavNum);
// console.log(typeof myFavNum);

// an array variable
var myArray = [1,2,3,4,5, "Bob", "Jane"];
// console.log(myArray);
// console.log(typeof myArray);

// an object variable
var myObject ={name: "Diar", age:27};
// console.log(myObject);
// console.log(typeof myObject);

// a boolean variable
var amHuman = true;

// a null variable (non existent)
var amINull = null;
// console.log(amINull);
// console.log(typeof amINull);


/*
Variables can have different kind of scope
*/
var myName = "Bob"; // the global variable
var anotherName = myName;
var yetAnotherName = anotherName;

function sayName(){
    var myName = "Diar"; // the local variable
    console.log(myName);
} 

sayName(); // "Diar"
console.log(myName); // "Bob"
console.log(anotherName);
console.log(yetAnotherName);


