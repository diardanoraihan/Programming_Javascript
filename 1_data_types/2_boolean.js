// ========================================= Booleans =========================================
// Evaluate to be either True or False regarding something

// console.log(true);
// console.log(false);
var shouldBeTrue = true;
var shouldBeNull = null; // assigning non value 
// console.log(shouldBeTrue);
// console.log(shouldBeTrue === false);


// if (shouldBeNull === true){
//   console.log("this var is true");
// }
// else {
//   console.log("This var is not true");
// }

// The following evaluates to true
var hasContent = "fabvdaibvaarega";
var myArray = ["1", "2","3"];
var myArray2 = [];
console.log(Boolean(hasContent)); //true
if (myArray2){
  console.log("has truthy values");
}
else{
  console.log("has falsey values");
}

// The following evaluates to false
var doesNotHaveContent = "";
var isZero = 0;
var nonAssignedVariable; // undefined
var isFalse = false;
var isNotANumber = NaN;

console.log(Boolean(doesNotHaveContent)); //false
console.log(Boolean(isNotANumber)); //false
console.log(nonAssignedVariable); //undefined
if (doesNotHaveContent){
  console.log("has truthy values");
}
else{
  console.log("has falsey values");
}

// Note:
// - "null" and "undefined" are not the same thing.
// - "null" when you deliberately do not assign any kind of value.
// - "undefined" means currently undefined but might be expecting a value later on.








