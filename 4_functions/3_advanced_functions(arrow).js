// Advanced Functions
// This is how we normally declare a function

var sayHi = function(){
    console.log("Hi");
}

sayHi();

// ================================== Arrow Function ===================================
// Now, ES6 brings somekind of arrow notation to declare a function.
// This has been one of the most user favorite things from ES6.
// Arrow function is the more concise way to write function.

var sayHi2 = () => {
    console.log("Hi, I am using an arrow function")
}
// notice, we use "=>" instead of the keyword "function"

sayHi2();

// ====================================== Example 1 ===================================
const multiplier = (num1, num2) => {
    return num1 * num2;
}

console.log(multiplier(5, 10));

// ========================== Example 2: Map Built-in Function ========================
// The map() method creates a new array populated with the results 
// of calling a provided function on every element in the calling array

// An array with several objects inside
const users = [
    {name: "Diar", age: "26"},
    {name: "Andy", age: "25"},
    {name: "Noya", age: "28"}
];

// Calling user names
const mapUserNames = (myArr) => {
    const userNameList = myArr.map((user) => {
        return user.name
    });

    return userNameList;
}

console.log(mapUserNames(users));

// calling user ages (notice we can simplify the function above)
const mapUserAges = (myArr) => 
    myArr.map((user) => user.age);

console.log(mapUserAges(users));

// ============================ Example 3: Filter Built-in Function ===================
// The filter() method Returns the elements of an array that meet 
// the condition specified in a callback function.

const numbers = [1,2,3,4,5,6,7,8,9,10];

/*
const filteredNumbers = numbers.filter((num) => {
    return num % 2 === 0;
})
*/

const filteredNumbers = numbers.filter((num) => num % 2 === 0);

console.log(filteredNumbers);

// =========================== Example 4: forEach Built-in Function ===================
// The forEach() method doesn’t actually return anything (undefined). 
// It simply calls a provided function on each element in your array. 

const moreNums = [5, 10, 15]

const numberDoubler = (num) => {
    const numberContainer = [];
    num.forEach((n) => {
        const doubled = n*2;
        numberContainer.push(doubled);
    });
    return numberContainer;
}

console.log(numberDoubler(moreNums));

// ========================== Example 5: Function Default Value ====================
const numberMultiplier = (x=5, y=10) => {
    return x*y;
}

console.log(numberMultiplier()); // 50
console.log(numberMultiplier(2)); // 20
console.log(numberMultiplier(10, 20)); // 200

const bankAccount = {
    canSpendMoney: true,
    hasCreditCard: true,
    balance: 100
}

const purchaseItem = (price, acct = bankAccount) => {
    if (acct.canSpendMoney) {
        acct.balance -= price;
        if (acct.balance <= 0){
            acct.canSpendMoney = false
        }
        return true;
    } 
    else {
        return false;
    }
}

console.log(purchaseItem(100));
console.log(bankAccount);

// ========================== Example 6: Returns the arguments ====================
// const logAllArguments = (x,y) => {
//     console.log(arguments);
// }

// console.log(logAllArguments(5,6));

// ============================= Example 7: Rest Parameters =======================
/*
The rest parameter syntax allows a function to accept an indefinite number of 
arguments as an array, providing a way to represent variadic functions in JavaScript.

The rest of the parameters can be included in the function definition by using 
three dots ... followed by the name of the array that will contain them. 

The dots literally mean “gather the remaining parameters into an array”.
*/ 

// Illustration 1
const squarer = (...numbers) => {
    return numbers.map((n) => {
        return n*n;
    })
}

console.log(squarer(1,2,3,4,5)); // [ 1, 4, 9, 16, 25 ]

// Illustration 2
const multiply = (multiplier, ...nums) => {
    return nums.map((n) => {
        return multiplier*n;
    })
}

console.log(multiply(10, 1,2,3,4,5,6,7,8,9)); // [10, 20, 30, 40, 50, 60, 70, 80, 90]


// ============================= Example 8: "This" context =======================
// Arrow function can inherit the contxt of "this" based on the enclosing context.

// The enclosing context starts from the outer function Dog
function Dog(years, breed){
    this.age = years;
    this.type = breed;
    setInterval( () => {
        // "this" inside the setInterval() will grab 
        // "this from the enclosing context, thanks to
        // the arrow function.
        this.age += 1;
        console.log(this);
    }, 5000)
}

const spike = new Dog(3, "Poodle");