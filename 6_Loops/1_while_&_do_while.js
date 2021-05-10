/*
Loops   : Quixk and easy way to do something repeatedly

Many types of loops but all do basically the same thing:
repeat something (i.e. an action) a set number of times 
(could even be 0).
*/

// While Loops
/*
    while (condition){
        statement
    }
*/


let numberOfLoops = 0;

const loopDeLoop = () => {
    console.log("I'm Looping");
}

while (numberOfLoops<3){
    loopDeLoop();
    numberOfLoops += 1;
}

const names = ["Chris", "Bob", "Joe"];

const nameLooper = function(arr, userName){
    let index = 0;
    while (index < arr.length){
        if (arr[index] === userName){
            console.log(arr[index]);
            break;
        }
        index++;
    }
    console.log(index)
}

nameLooper(names, "Bob");

// do . . . while Loops
/*
    do {
        statement
    } while (condition)
*/

// do {
//     console.log("Looping");
// } while(false)

let totalMoney = 500;

do {
    checkIfCanPurchase();
} while(totalMoney > 500)

function checkIfCanPurchase(){
    if (totalMoney > 500){
        console.log("Can Purchase :)");
    }
    else {
        console.log("Cannot Purchase :(");
    }
}
