let score = "abc";
console.log(typeof score);  // string
let num = Number(score)  // conversion or typecasting
console.log(num);  // NaN because 33abc is not a number but when we 
// convert js don't give error and it converts string into number but the value stored inside num is NaN
console.log(typeof num);  // number 


let score2 = null;
console.log(typeof score2); // object

let num2 = Number(score2); // conversion
console.log(typeof num2); // number
console.log(num2); // value of num2 = 0


// conversion in number
// "33" => 33
// "33abc" => NaN
// true => 1, false => 0

let score3 = undefined;
console.log(typeof score3);

let num3 = Number(score3); // conversion
console.log(typeof num3); // number
console.log(num3);  // NaN

//conversion in boolean
// 1 => true; 0 => false
// "" => false  // empty string when converted to boolean becomes false
// "hello" => true  // any string non empty converted to boolean becomes true

let isLoggedIn = "";
let bool1 = Boolean(isLoggedIn);
console.log(typeof bool1);  // boolean
console.log(bool1);   // false

let isLoggedIn1 = "abs";
let bool2 = Boolean(isLoggedIn1);
console.log(typeof bool2);  // boolean
console.log(bool2);  // true



////////////////////////////////  operations ////////////////////////////////////

 console.log("1" + 2); //12
 console.log(1 + "2");  //12
 console.log("1" + 2 + 2);  //122 if string first then everything converted to string
 console.log(1 + 2 + "2");  // 32  if if string at last then other operations will performed first then converted to string in this case first addition then concatenation
 