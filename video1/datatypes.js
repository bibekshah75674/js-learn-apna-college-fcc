// Data Types in JS
// 1.Primitive Data Types(7)
// Number,String,Boolean,Undefined,Null,BigInt,Symbol
let age = 24;
console.log(typeof(age));

let pi = 3.14;
console.log(typeof(pi));

let _name = "Bibek";
console.log(_name);

let is_Follow = true;
console.log(typeof(is_Follow))

let x;
console.log(typeof(x));

let y = null;
console.log(typeof(y));

let z = 123344444444444444444444442n;
console.log(typeof(z));

let w = Symbol("hello!");
console.log(typeof(w));

// Non-primitive datatypes
// 1.Objects->collection of key-value pairs 
// sub-category
// Arrays
// Functions

// object example
const student = {
    fullName : "Bibek", //key:value 
    age : 22,
    marks : 45,
    isPass : true
};

console.log(student);

console.log(student["fullName"]); 
console.log(student["age"]);
//or 
console.log(student.fullName);
console.log(student.age);

// typeof student
console.log(typeof(student)); //object

// update object key
student["age"] = student["age"] + 1
console.log(student.age);

// Practise question
const _product = {
    productName : "pen",
    rating : 4,
    offer : 5,
    price : 270
};
console.log(_product);

// 
const profile = {
    username : "Bibek",
    isFollow : true,
    followers : 0,
    following : 13
};
console.log(profile);
console.log(typeof(profile)); //object
console.log(typeof(profile["username"])); //string
console.log(typeof(profile.followers)); //number
