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


////////////////  memory in js //////////

// Stack(Primitive), Heap(Non-primitive)

let myName = "Suyash"

let anotherName = myName  // we get copy of myName which is stored in anotherName so if we change value of anotherName then it will not change the original value stored in myName
anotherName = "Rishabh"

console.log(anotherName); // Rishabh
console.log(myName);  // Suyash
// They are primitive datatypes so if we change value of anotherName  then value of anotherName change only not myName

let userOne = {
    email: "user@gmail.com",
    upi: "user@sbi"
}

let userTwo = userOne // userTwo refer to userOne so if we make changes in any of one then it will show changes in both objects because address is same

userTwo.email = "usertwo@gmail.com";

console.log(userOne.email); // usertwo@gmail.com
console.log(userTwo.email);  // usertwo@gmail.com

// Reference datatypes use heap so both refer to same address so changes will occur in both objects