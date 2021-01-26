let myArr = [];
let myObj = {};

// Key-Value pairs
// Object literal syntax
var friend = {
    firstName: "Jane",
    lastName: "Doe"
}

// myArr[index]
// Accessing w/ the dot notation
console.log(friend.firstName);
// Accessing w/ the bracket notation
console.log(friend["firstName"]);

friend.middleName = "Jersey";

// Directly change the value of a key-value pair
friend.middleName = "Sung";

// Delete a key-value pair by the key
delete friend.middleName;


// Different ways to declare a function
// Standard function declaration
function sayHello() {
    console.log("hello!");
}

// Anonymous function assigned to a variable
var sayHelloAgain = function() {
    console.log("hello!");
}

// Arrow functions
var sayHelloForAThirdTime = () => {
    console.log("hello!");
}


friend = {
    firstName: "Henry",
    lastName: "Hong",
    sayHello: function() {
        console.log("Hi!");
    }
}

// THIS keyword
var firstProgrammer = {
    name: "Ada Lovelace",
    rank: "First!",
    brag: function() {
        console.log(`I'm ${this.name} and I'm ${this.rank}`);
    }
}

// Looping over objects
var car = {
    wheels: 4,
    doors: 2,
    seats: 5
}

// For in loops are great for iterating over objects
for (let key in car) {
    console.log(`My car has ${car[key]} ${key}`);
}
