console.log("Hello world!");

//Topic:Variables in JS
// Variables are containers for data
fullName = "Bibek shah";
age = 22;
pi = 3.14;
x = null;
y = undefined;
isFollow = false;

console.log(fullName);
console.log(age);
console.log("The value of pi is",pi);
console.log(x);
console.log(y);
console.log(isFollow);

// Variable Rules
// Variable names are case sensitive: "a" & "A" is different.
// Only letters,digits,underscore(_) and $ is allowed.(not even space)
// Only a letter,underscore(_) or $ should be 1st character
// Reserved words cannot be variable names

// isName => Camel Case(Recommended)

// Topic:let,const & var
// var:Variable can be re-declared & updated.A global scope variable.(use never)
// let:Variable cannot be re-declared but can be updated.A block scope variable.
// const:Variable cannot be re-declared or updated.A block scope variable.

let _name = "Bibek";
let _age = 22;
console.log(_name);
console.log(_age);


 
