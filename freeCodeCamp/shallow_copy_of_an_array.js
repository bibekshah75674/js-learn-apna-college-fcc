// concat() method
const originalArray = [1, 2, 3];
const copyArray = [].concat(originalArray);
console.log(copyArray); // [1, 2, 3]

console.log(originalArray === copyArray); // false - they are different arrays in memory

//slice() method
const anotherCopyArray = originalArray.slice();
console.log(anotherCopyArray); // [1, 2, 3]
console.log(originalArray === anotherCopyArray); // false - they are different arrays in memory 

// Using the spread operator
const spreadCopyArray = [...originalArray];
console.log(spreadCopyArray);     // [1, 2, 3]
console.log(originalArray === spreadCopyArray); // false - they are different arrays in memory