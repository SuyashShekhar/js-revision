// primitive datatypes 
// they are  callbyvalue
// 7 types: String, Number, boolean , null, undefined, symbol, BigInt

// JavaScript is a dynamically typed language, which means that data types of variables are 
// determined by the value they hold at runtime and can change throughout the program as we assign different values to them.
// means we don't need to tell variable which type of value it is going to store we simply give value ex - let num = 100 js automayically recognize num as number


const id = Symbol('123');
const id2 = Symbol('123');

console.log(id === id2); // false because we give same value but symbol returns unique value so both have diff value


// reference (Non primitive) datatypes
// Array, Objects, Functions

const heros = ["Shaktimaan","Krrish"]  // array
let obj = {
    name: "Suyash",
    age: 22,
}

function fun(){
    console.log("welcome");
}

fun();

console.log(typeof fun); // function or function object
console.log(typeof obj);  // object
console.log(typeof heros);  // object because arrays are objects only in js