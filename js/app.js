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




// #1
var dude = {
    firstName: "John",
    lastName: "Doe",
    age: 36,
    street: "1234 Park st."
}

// #2
dude.street = "1234 Park ln."

// #3
let people = [
    {
        firstName: "Moe",
        lastName: "Doe",
        age: 31,
        street: "1234 Park st.",
        socialSecurityNumber: "123-45-6789"
    },
    {
        firstName: "larry",
        lastName: "Doe",
        age: 36,
        street: "1234 Spark st."
    },
    {
        firstName: "Mary",
        lastName: "Doe",
        age: 31,
        street: "1231 Park st."
    }
]

var darcy = {
    firstName: "Mary",
    lastName: "Doe",
    age: 31,
    street: "1231 Park st."
}
people.push(darcy)


peopleDictionary = {
    person1: {
        
    }
}

// this is elanor... for now until the array changes
let seventhPerson = people[6];

// #4
delete people[2].street;

let myObjArr = {
    firstName: ["moe", "larry", "mary"],
    age: [31, 32, 33],
    street: ["declined to provide address", "1266 street", "99 street"]
}

console.log(myObjArr.street)


//DRY
// DONT REPEAT YOURSELF