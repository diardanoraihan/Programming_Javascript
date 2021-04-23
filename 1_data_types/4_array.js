// ========================================= Arrays ====================================
// Array is a collection of data
// This is a special type of object

var myArray = [1,2,3, "adkaoskd", "dhabhvba", true]
console.log(myArray);
console.log(myArray[5]);
console.log(myArray.length);

var myNamesArray = new Array();
myNamesArray[0] = 'Chris';
myNamesArray[1] = 'Evan';
myNamesArray[3] = 'Diar';

// Add new content inside the array
myNamesArray.push('Raihan', 'Jessica');
myNamesArray.push(['Raihan', 'Jessica']);
console.log(myNamesArray);
// Access the content via indexing
console.log(myNamesArray[6][0]);

// Discard the last content
var lastName = myNamesArray.pop();
console.log(lastName);

// Sort Array
var myOtherNames = ["Chris", "Jessica", "John", "Jane"];
var sortedNames = myOtherNames.sort();
console.log(sortedNames);

// Concat Array
var concattedNames = myNamesArray.concat(myOtherNames);
console.log(concattedNames);

// Slice Array
var slicedArray = concattedNames.slice(5,9); 
// retrieve the content from index 5 to 9-1=8
console.log(slicedArray);

// Join Array
var joinedNames = myOtherNames.join(" ");
console.log(joinedNames);

console.log(myNamesArray);


















