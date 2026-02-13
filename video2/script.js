console.log("Hello world!");

// Operators in JS
// Used to perform some operation on data

// Arithmetic Operators
// +,-,*,/
let a = 5;
let b = 5;
console.log(a+b);
console.log(a-b);
console.log(a*b);
console.log(a/b);

// Modulus
console.log(5%2);

// Exponentiation(**)
console.log(3**2); //3^2

// Increment (++) a++  a = a + 1
// Decrement (--) a--  a = a - 1
a++;
console.log(a);

b--;
console.log(b);

let c = 4;
let d = 4;
++c;
--d;
console.log(c);
console.log(d);

// Assignment Operators
// = += -= *= %= **=

// Comparison Operators
// Equal to ==
// Equal to & type ===
// Not equal to != 
// Not equal to & type !==

// >,>=,<,<=

// Logical Operators
// Logical AND &&
// Logical OR ||
// Logical NOT !

// Conditional Statements
// To implement some conditions in the code
// if-else,else-if statement

let age = 25;
if(age >= 18){
    console.log("You can vote.");
} else{
    console.log("You cannot vote.");
}

// Ternary operator
// condition?true output:false output
let result = age >= 18 ? "adult" : "not adult";
console.log(result);

// switch statement

// alert -> one time popup
// prompt

// Question 1: Get user to input a number using prompt("Enter a number:").check if the number is a multiple of 5 or not.

let num = prompt("Enter a number:");
if(num%5 === 0){
    console.log("The number is multiple of 5");
} else{
    console.log("The number is not multiple of 5");
}

let exampleVariable = null;
console.log(typeof(exampleVariable));


