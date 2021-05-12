/*
Homework Assignment #6: Loops
Name: Diardano Raihan

Details:
- Write a program that prints the numbers from 1 to 100.
- But for multiples of three print "Fizz" instead of the number 
  and for the multiples of five print "Buzz".
- For numbers which are multiples of both three and five print "FizzBuzz".
*/

const Prime = [];
const Fizz = [];
const Buzz = [];
const FizzBuzz = [];

const homeWork = () => {
    for (let i = 1 ; i <= 100 ; i++){
        if ((i === 2) || (i === 3) || (i === 5) || (i === 7)){
            console.log("Prime");
            Prime.push(i);
        }
        else if ((i % 2 !== 0) && (i % 3 !== 0) && (i % 5 !== 0) && (i % 7 !== 0) && (i!==1)) {
            console.log("Prime");
            Prime.push(i);
        }
        else if (i % 15 === 0){
            console.log("FizzBuzz");
            FizzBuzz.push(i);
        }
        else if (i % 3 === 0){
            console.log("Fizz");
            Fizz.push(i);
        }
        else if (i % 5 === 0){
            console.log("Buzz");
            Buzz.push(i);
        }
        else {
            console.log(i);
        }
    }
}

homeWork();

// For debugging purpose
console.log(Prime);
console.log(Fizz);
console.log(Buzz);
console.log(FizzBuzz);