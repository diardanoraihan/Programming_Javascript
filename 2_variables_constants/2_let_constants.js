/* =================================== Let and Constants =========================================
Variables always have scope that we should always be careful.

1. Let
- ES6 has "let" that works in contrast with variable.
- "let" lets a variable to work within a particular block (ex. { ... }). 
*/


function sayHi(){
    var shouldSayHi = false;
    let myOtherName;
    // You will have access to "myOtherName" to the entire function block
    if (shouldSayHi == true){
        let myName = "Bob";
        // You will not have access to "myName" outside of this if block
        console.log(myName); // This will not return error
    }
    // console.log(myName) // This will return error
    else{
        myOtherName = "Charlie";
        console.log(myOtherName);
    }
}

sayHi()

/*
2. const
- const works pretty similar to let.
- the major difference is that const cannot be reassigned. 
- Although you cannot reassign it to the entire different value, 
  you still can mutate the original data
- perfect for specific data like string or number that you do not want to modify / reassign.
- usually the name following a const is in CAPITAL letters.
*/

const MYNAME = "Chris"
// MYNAME = "Diar" // This will return error!!

const MYARRAY = [1,2,3];
console.log(MYARRAY);
MYARRAY.push(4);
// pushing a new element to a const
// Remember, you do not reassign it with the entire new data, just modify what has been assigned
console.log(MYARRAY);

// The concept also works on an object
const MYOBJECT = {name: "Diar"};
console.log(MYOBJECT);
MYOBJECT.name = "Bob";
console.log(MYOBJECT);

function sayHii(){
    const myName = "Dianne";
    if (true){
        const myName = "Jim";
        console.log(myName); // This will not return "Jim".
    }
    console.log(myName); // This will return "Dianne"
};

sayHii();

/*
Conclusion:
- Whatever you can, use "const" if you know the data is never going to change.
- Use "let" if:
    1. you have value subjected to change later on;
    2. you are not sure you will need;
    3. you just want to initialize something, even if it's undefined.
- In general, you can avoid "var" for the most part.
*/
