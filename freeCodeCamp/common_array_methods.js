console.log("Hello world");
// Common Array Methods
// indexOf() - returns the first index at which a given element can be found in the array, or -1 if it is not present.
let fruits = ["apple", "banana", "orange"];
console.log(fruits.indexOf("banana"));

// if the element is not found, it returns -1
console.log(fruits.indexOf("grape"));

// specifying a starting index
console.log(fruits.indexOf("banana", 2)); // starts searching from index 2

// splice() - changes the contents of an array by removing or replacing existing elements and/or adding new elements in place.
let numbers = [1, 2, 3, 4, 5];          
numbers.splice(2, 1); // removes 1 element at index 2
console.log(numbers); // [1, 2, 4, 5]           

// basic syntax: array.splice(start, deleteCount, item1, item2, ...)
// start: The index at which to start changing the array.
// deleteCount: The number of elements to remove from the array starting from the index specified in start.
// item1, item2, ... (optional): The elements to add to the array, starting from the index specified in start. If not provided, splice will only remove elements.

// if deleteCount is omitted, all elements from start to the end of the array will be removed
let letters = ["a", "b", "c", "d", "e"];
letters.splice(2); // removes all elements from index 2 to the end including index 2
console.log(letters); // ["a", "b"]

// adding elements without removing any
let colors = ["red", "green", "blue"];
colors.splice(1,0,"yellow","purple"); // adds "yellow" and "purple" at index 1 without removing any elements
console.log(colors); // ["red", "yellow", "purple", "green", "blue"]

// if you want to keep the original array unchanged, you can use the slice() method instead of splice(). The slice() method returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included) where start and end represent the index of items in that array. The original array will not be modified.
let originalArray = [1, 2, 3, 4, 5];
let newArray = originalArray.slice(1, 4);       

console.log(newArray); // [2, 3, 4]
console.log(originalArray); // [1, 2, 3, 4, 5] - original array remains unchanged

// anothey way ... using the spread operator to create a new array with the desired elements
let anotherNewArray = [...originalArray.slice(1, 4)];
console.log(anotherNewArray); // [2, 3, 4]

// Also
let copy = [...originalArray];
console.log(copy); // [1, 2, 3, 4, 5]

console.log(copy.slice(1,4));
console.log(copy); // [1, 2, 3, 4, 5] - original array remains unchanged

//includes() - determines whether an array includes a certain value among its entries, returning true or false as appropriate.
let animals = ["cat", "dog", "rabbit"];
console.log(animals.includes("dog"));   // true 

// case-sensitive search
console.log(animals.includes("Dog"));   // false      

//optional second parameter for starting index
console.log(animals.includes("cat", 1)); // false - starts searching from index 1, so it doesn't find "cat" at index 0              

//It's worth noting that includes() uses the strict equality comparison (===), which means it can distinguish between different types. For example:

let mixedArray = [1, "2", 3, "4", 5];
console.log(mixedArray.includes(2));  // false
console.log(mixedArray.includes("2")); // true