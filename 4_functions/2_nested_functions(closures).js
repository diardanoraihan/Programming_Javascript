// Nested Functions
/*
- A function can be nested inside another function. And that creates what's called a closure.
- A closure basically is an expression that can makes together free variables and something
  that binds them, in this case, something that closes the expression. 

Notes:
- Nested functions are useful if you only want to use a specific function inside a function, 
  not globally or frequently outside that function container. 
*/

// ========================== Example 1 ============================
function squareAndMultiply(num1, num2){
    
    let testLet = "I am a test";

    // Create a private function that you cannot access it outside this scope. 
    function squarer(x){
        console.log(testLet);
        return x*x;
    }

    function multiplyBy10(y){
        return y*10;
    }

    return squarer(num1) * multiplyBy10(num2);

}

console.log(squareAndMultiply(4, 4)); // 640
