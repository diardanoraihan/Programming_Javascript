// ========================================= Objects =========================================
// Think of them as collections of name-value pairs
// In Python, it is similar to dictionaries -> {"your content here"}

// The following definitions are pretty much equivalent of empty objects
var myObject = new Object();
var myOtherObject = {};

// Definition
var myName = {1: "Chris"};
console.log(myName);

// Assign a new key
myObject['1'] = "Chris";
myObject['2'] = "Diar";
console.log(myObject)

// Each key should be unique
var myOtherObject = {
  1: "Chris",
  2: "Evan",
  3: "Hartanto"
}

myOtherObject['unique value'] = "Unique"
console.log(myOtherObject)

// Object inside an object
var anotherObject ={
  firstName : "Chris",
  lastName : "Smith",
  age: 50,
  numbers: {
    mobile: "555-1234",
    home: "555-5555",
  },
  address: "123 Fakse St."
}

console.log(anotherObject.numbers.home);

// Function inside an object
var testObject = {
  type: "donut",
  sayHi: function() {
    console.log("Hi");
  }
}

testObject.sayHi();

var testObject = {
  type: "donut",
  sayType: function() {
    console.log("Type: "+ this.type);
  }
}

testObject.sayType()

// Costructor pattern for creating objects
// It is similar to class in Python
function Donut(type, glazed, sweetness, hasChocolate){
  this.type = type;
  this.glazed = glazed;
  this.sweetness = sweetness;
  this.hasChocolate = hasChocolate;
  this.sayType = function(){
    console.log("Type: "+ this.type);
  };
  this.showSweetness = function(){
    console.log("Sweetness: "+this.sweetness +"/10");
  };
}

var coconutDonut = new Donut("coconut", false, 8, true);
var vanillaDonut = new Donut("vanilla", true, 10, false);
coconutDonut.tasteGood  = true;
console.log(coconutDonut);









