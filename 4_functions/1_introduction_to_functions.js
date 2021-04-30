// Functions
/* 
" A function is a Javascript procedure - a set of statements that
  performs a task or calculates a value. [ ... ]"
  -Mozilla Developer Network
*/
// ========================== Example 1 ============================
const myName = "Diar";
const age = 26;

// Define the functions
function sayHi(){
    console.log("Hi " + myName);
}

function sayHi2(userName){
  console.log("Hi" + " " + userName);
}

function sayHi3(firstName, lastName){
  console.log("Hi" + " " + firstName + " "+ lastName)
}

function sayHi4(name, age){
  console.log("Hi" + " " + name + "." + " You are" + " " + age)
}

// Call the functions
sayHi();
sayHi2("Billy");
sayHi3("Diardano", "Raihan");
sayHi4(myName, age);

// ========================== Example 2 ============================
const numTwoDoubled = numberDoubler(2);
const numFiveDoubled = numberDoubler(5);

function numberDoubler(num){
  const doubledValue = num*2;
  return doubledValue;
}

function numberAdder(num1, num2){
  return num1 + num2;
}

console.log(numberAdder(numTwoDoubled, numFiveDoubled));

// ================= Example 3: Function Expression ================
// sayHi5("Toni"); this will return error because of hoisting

const sayHi5 = function(myName) {
  console.log("Hi "+ myName);
}

sayHi5("Toni");
console.log(3**3);
