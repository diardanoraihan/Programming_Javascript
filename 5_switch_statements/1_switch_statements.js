// Switch statements
/*
    switch (statement){
        case value1:
            statement to be executed when result of espression 
            matches value1
            break;
        case value2:
            ...
            break;
        case value3:
            ...
            break;
        default:
            break;
    }
*/

// ================================= Example 1: Normal Case ===========================
const myFruit = (fruit) => {
    switch (fruit){
        case "apple":
            console.log("Awesome! I love apples.")
            break;
        case "oranges":
            console.log("Oranges are cool :D");
            break;
        case "banana":
            console.log("Bananas are cool too.");
            break;
        default:
            console.log("I didn't understand that but sure :D");
            break;
    }
}

myFruit("apple");
myFruit("banana");
myFruit("pear");

// ================================= Example 2: Stacked Case ===========================
const myAllFruit = (fruit) => {
    switch (fruit){
        case "apple":
        case "oranges":
        case "banana":
            console.log("Great! I love fruit.");
            break;
        default:
            console.log("I didn't understand that but sure :D");
            break;
    }
}

myAllFruit("banana");
myAllFruit("oranges");
myAllFruit("pear");

// ================================= Example 3: Number Checker ===========================

const numChecker = (num) => {
    let value;
    switch (num) {
        case 0:
        case 1:
        case 2:
            value = "Low range";
            break;
        case 3:
        case 4:
        case 5:
            value = "Mid range";
            break;
        case 6:
        case 7:
        case 8:
            value = "High range";
            break;
        default:
            value = "Input number between 0-8";
            console.log(value);
            break;
    }
    console.log("The value is " + value);
}

numChecker(9);
numChecker(0);

// ================================= Example 4: Donut Picker ===========================

const donutPicker = (flav) => {
    switch (flav){
        case 's':
            return "sprinkles";
        case 'c':
            return 'chocolate glazed';
        case 'b':
            return 'bear claw';
        default:
            return null;
    }
}

const donuts = (selection) =>{
    const selectedDonuts = donutPicker(selection);
    if (!selectedDonuts){
        console.log("Incorrect selection.")
    }
    else{
        console.log("You have selected " + selectedDonuts);
    }
}

donuts('s');
donuts('c');
donuts('j');