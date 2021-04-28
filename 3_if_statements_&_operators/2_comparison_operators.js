// ===================== Part 2: Comparison Operators =========================

// Equality operator: ==
// It will check for the equality after conversion

// Identity operator: ===
// It does not do any type conversion. Hence, just check if the two values have 
// the same type, if so, do they have the same value?

// Recommend: Always use the === (triple equal signs) sign whenever do the comparison.

const numberFive = 5; 
const stringFive = "5";
const stringConversion = parseInt(stringFive);
console.log(numberFive === stringFive); // false
console.log(numberFive == stringFive); // true
console.log(numberFive + stringFive); // "55"
console.log(numberFive + stringConversion); // 10

const myObject = {name: "Diar"};
const otherObject = {name: "Diar"};
console.log(myObject === otherObject); // false
console.log(myObject.name === otherObject.name); // true

const bankAccountBalance = 123;
const costOfItem = 120;
const tax = 0.50;

if (bankAccountBalance >= costOfItem + tax){
    console.log("You can purchase this item!")
}
else if (bankAccountBalance < costOfItem + tax){
    console.log("You cannot purchase this item!")
}

console.log(bankAccountBalance !== costOfItem); // true

