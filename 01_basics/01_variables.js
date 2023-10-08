const accountId = 144553
let accountEmail = "abc@gmail.com"
var accountPass = "12345"
accountCity = "Jaipur" // we can also declare var like this it acts as var

let accountState;
console.log(accountState); //if we don't initialize then it gives undefined value

// accountId = 2  we can't change const not allowed
 accountEmail = "xyz@gmail.com"
 accountPass = "23467"
console.log(accountEmail);

/*
prefer not to use var 
because of issue in block scope and functional scope
*/
console.table([accountEmail,accountId,accountPass,accountCity]);

