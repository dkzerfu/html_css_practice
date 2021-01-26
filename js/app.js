console.log('hi');
// This is a comment
// console.log("this wont run")

/**
 * This 
 * is
 * A multiline
 * Comment
 */

// Numbers
// Integers
console.log(1 + 2);
// Floats:
console.log(2.718)
console.log(0.1 * 0.2);
console.log((2 + 2) * 3);
 
//  Strings
console.log("john")
console.log("jane")

// Type Inferencing / Coercsion 
console.log("1" + 1)

// Boolean
// true or false

// Modulus
console.log(131313131 % 2);
console.log(131313132 % 2);

// Math.pow
console.log(Math.pow(3, 2))
// Math.sqrt
console.log(Math.sqrt(4))

// Gives a random float between [0-1]
console.log("Random num 0-1: " + Math.random())
// Give a Number between [0-10]
console.log("Random num 0-10: " + Math.floor(Math.random() * 10));

// Variables
// Note the naming convention is camelCase
var myNumber = 1;
let myString = "hey yall";

// function doStuff() {
//     let thisDoesntExistOutsideTheFunc = 10;
// }

// console.log(thisDoesntExistOutsideTheFunc)

// converting a number type to a string type
var anotherNumber = 1;
var anotherString = anotherNumber.toString();

console.log(typeof anotherString);

// Const Variables
// const x = 10;
// x = 11;

// console.log(x);

// String myString2 = "asdf";
// int myInt2 = 123;


// Common String / Number methods
console.log(parseInt("123"))
console.log(parseFloat("3.14") + parseFloat("3.14"))
// 3.143.14

let stringToBeSplit = "123,456";
console.log(stringToBeSplit.split(','));

let alphabet = "abcdef";
console.log(alphabet.indexOf('b'));

let uppercaseAlphabet = alphabet.toUpperCase();
console.log(uppercaseAlphabet)
console.log(uppercaseAlphabet.toLowerCase());

let stringReplace = "old person";
let newString = stringReplace.replace('old', 'new');

console.log(stringReplace)
console.log(newString)