/*
Loops   : Quixk and easy way to do something repeatedly

Many types of loops but all do basically the same thing:
repeat something (i.e. an action) a set number of times 
(could even be 0).
*/

// For Loops
// Repeat until a specified conditions evaluates to false.
/*
    for (initial expression ; condition ; increment expression){
        statement
    }
*/

// Example-1: Simple Case
for (var i = 0 ; i<10 ; i++){
    console.log("Hello", i)
}

// Example-2: With function 
const iceCreams = ["vanilla", "chocolate", "strawberry"]

const iceCreamLooper = (arr) => {
    for (var i = 0 ; i < arr.length ; i++){
        console.log(arr[i]);
    }
}

iceCreamLooper(iceCreams);

// Example-3: More Complex Case
for ( let i = 1 ; i <= 100 ; i++){
    if (i%15 === 0){
        console.log("I am being skipped :(")
        continue;
    }
    else if (i%3 === 0){
        console.log("Fizz");
    }
    else if (i%5 === 0){
        console.log("Buzz");
    }
    else {
        console.log(i);
    }
}

// Example-4: Label and Nested Loop
/*
The labeled statement can be used with "break" or "continue" statements. 
It is prefixing a statement with an identifier which you can refer to.

Syntax
    label :
        statement
*/

outerLoop:
for (let i = 0 ; i < 10 ; i++){
    console.log("Loop #", i);
    innerLoop:
    for (let a = 0 ; a < 5 ; a++){
        console.log("Inner loop #" + a);
        if (a === 3){
            break innerLoop;
        }
        if (i === 5){
            break outerLoop;
        }
    }
}

// Example-5: Capture a value and Callback on that value
for (let i = 0 ;  i<10 ; i++){
    setTimeout(() => {
        console.log(i);
    }, i * 500)
}