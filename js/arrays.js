let myVar = 'anything';
let friends = ['Moe', 'Larry', 'Curly'];



console.log(friends[0])
console.log(friends[1])
console.log(friends[2])
// String Concatenation
console.log("There are " + friends.length + " friends in my array");
// String Template Literal
console.log(`There are ${friends.length} friends in my array`);

let favorites = "noodles,bread,cheese,filet mignon";
let favoritesArr = favorites.split(',');


// Lets count from 0 to 4
// for (iterator variable ; conditional ; increment) {
for (let index = 1; index <= 10; index++) {
    // console.log(`index is: ${index}`);
}


let subTotals = [2.99, 3.00, 2.75, 14.99];

// This variable is where we add all the subtotals into
// let total = 0;
// for (let i = 0; i < subTotals.length; i++) {
//     total = total + subTotals[i]
// }

// console.log(`The total is: ${total}`);

let a3 = [12, 28, 92, 23, 94, 23, 99, 99, 99, 92];
let total = 0;

for(let i = 0; i < a3.length; i++) {
    total += a3[i];
    // total = total + a3[i]; 
}
let average = total / a3.length;

console.log(average);

// Array Methods
// .push(), .pop() - add/remove items from the end of the array
// .shift(), .unshift() - add/remove items from the beginning of 
//                        the array


let myArr = [];
myArr.push('macaroni');
myArr.push('spaghetti');
myArr.push('Pizza');
myArr.push('Meatballs');
// Note that push adds items to the end of the array.
console.log(myArr)

// pop removes at item from the end of the array.
console.log(`The item that is popped: ${myArr.pop()}`)
console.log(myArr);

// unshift adds an item to the beginning of the array
myArr.unshift(2);

let myArr2 = [1,2].concat([3,4]); // [1,2,3,4]

console.log(myArr.join(' '));