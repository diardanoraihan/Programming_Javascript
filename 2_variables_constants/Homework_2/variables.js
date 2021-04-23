/* 
Title   : Homework Assignment #2 - Variables and Constants
Author  : Diardano Raihan
Task    : Describe the difference between let, const, and var.

Explanation:
1. var
- In general, "var" is a variable definition that works as a placeholder to store some information
  (data). 
- "var" has 2 types of scope: global and local. When "var" works as a global variable, it can be 
  accessed throughout the program. On the other hand, for local variable, it is only accessible 
  within a defined function.
- The use "var" keyword can be troublesome if we deal with function that has the same variable name 
  but different scope. 
- Hence, the use of "var" can be replaced by "let" and "constant". We can avoid "var" for the most part.

2. "let"
- "let" works in contrast with variable.
- "let" has block-level scope allowing a variable to work within a particular block (ex. { ... }). 
- Commonly, we use "let" if:
  1. we have value subjected to change later on;
  2. we are not sure we will need it;
  3. we just want to initialize something, even if it's undefined.

3. "const"
- "const" works pretty similar to let.
- The major difference is that "const" cannot be reassigned with a whole new value. 
- Although we cannot reassign it to the entire different value, 
  we still can mutate the original data.
- "const" is perfect for specific data like string or number that you do not want 
  to modify / reassign completely.
- Typically, the variable name following a const is in CAPITAL letters.

4. Extra Credit: Hoisting in Javascript
- Hoisting is when variable and function declarations are processed before any code is executed.
  The word "hoist" simply means we "lift" the variable declaration on top before program execution. 
- To make things easier to read, we should declare all the variables at the top of our function scope
  so it's clear which scope the variables are coming from. 
- Tips:
  a. define (assign value) the variables before we need to use them;
  b. define the function at the bottom of our scope to keep them out of the way. 
*/

// ========================================== Hoisting illustration ====================================

// Note: the following code WILL NOT return error.
console.log(dog); // return: undefined
var dog = "Buck";
/*
Javascript is aware of "dog" variable, but not knowing that this variable has been initialized / 
assigned a value. This is similar to (and recommended to do as follows):
$ var dog;
$ console.log(dog);
$ dog = "Buck";
*/

// Note: the following code WILL return error.
// console.log(color);
// console.log(COLOR_CODE);
// let color = "purple"; // return error
// const COLOR_CODE = "FFFF" // return error
/* 
Instead of returning "undefined", the code above will return error.
Although "let" and "const" are hoisted (declared) by default, the definitions are not, and they are
not set to undefined like variable declaration with the "var" keyword. 
*/

// ================================================ "var" example ==========================================
var rate = 0.05; // global scope

function getRate(){
  if (!rate){
    var rate = 0.1; // local scope
  }
  console.log(rate);
}

getRate(); // return: 0.1
/*
Instead of returning 0.05, the function return 0.1. This is because the second rate variable
was hoisted and set to "undefined", leading to "false", hence "true" in the conditional if clause. 
This can be fixed by introducing "let" or "const".
*/

// ================================================ "let" example ==========================================
let rate2 = 0.05; // global scope

function getRate2(){
  if (!rate2){
    let rate2 = 0.1; // if-block scope
    console.log(rate2);
  }
  else{
    console.log(rate2);
  }
}

getRate2(); // return: 0.05
/*
Here, rate2 in line 90 works only in the if-block scope. Hence, the rate2 still maintains the original
value in line 86 that has a full-block scope. 
*/

// ================================================ "const" example ==========================================
let rate3;
const RATES = [0.05, 0.1, 0.2]

function getRate3(){
  if(rate3){
    rate3 = RATES;
    console.log(rate3);
  }
  else{
    RATES.push(0.4);
    rate3 = RATES;
    console.log(rate3)
  }
}

getRate3(); // return: [ 0.05, 0.1, 0.2, 0.4 ]


