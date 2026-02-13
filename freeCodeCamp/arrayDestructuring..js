let fruits = ["Apple", "Mango", "Banana"];
let [first, second, third] = fruits;

console.log(first);
console.log(second);
console.log(third);

//         Here is what it would look like if you accessed each of those elements by their index instead of using array destructuring:

// const fruits = ["apple", "banana", "orange"];

// const first = fruits[0];
// const second = fruits[1];
// const third = fruits[2];

// console.log(first); // "apple"
// console.log(second); // "banana"
// console.log(third); // "orange"

// -------------------------------------------------------
// Array destructuring also allows you to skip elements you're not interested in by using commas. For instance:

// let colors = ["red", "green", "blue", "yellow"];
// let [firstColor, , thirdColor] = colors;

// console.log(firstColor); // "red"
// console.log(thirdColor); // "blue"

// ------------------------------------------------------
// Another powerful feature of array destructuring is the ability to use default values. If the array has fewer elements than the variables you're trying to assign, you can provide default values:

// let numbers = [1, 2];
// let [a, b, c = 3] = numbers;

// console.log(a); // 1
// console.log(b); // 2
// console.log(c); // 3
// ----------------------------------------------------------------
// Now, let's discuss the rest syntax, denoted by three dots (...). It allows you to capture the remaining elements of an array that haven’t been destructured into a new array. Here's how it works:

// let fruits = ["apple", "banana", "orange", "mango", "kiwi"];
// let [first, second, ...rest] = fruits;

// console.log(first);  // "apple"
// console.log(second); // "banana"
// console.log(rest);   // ["orange", "mango", "kiwi"]
