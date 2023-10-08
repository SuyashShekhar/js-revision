
// comparison of different datatypes

console.log("2" > 1); // true string converted to number
console.log("02" > 3);  // false


console.log(null > 0);  // false  null converted to 0
console.log(null >= 0); // true  null converted to 0
console.log(null == 0); // false  null acts as empty value

// equality chech '==' and comparisons '>, <, >=, <= work differently
// comparisons convert null to a number, treating it as 0
// that's why null >= 0 is true  ans nul > 0 is false
// null == 0 '==' is equlaity check it do not convert null into 0 so null is empty value so it gives false


console.log(undefined == 0); // false
console.log(undefined > 0);  // false 
// comparison with undefined always gives false

// "===" it checks value as well as datatype

console.log("2" == 2); // true
console.log("2" === 2); // false  === do not convert


