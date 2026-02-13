// Let's explore each of these steps using the split(), reverse(), and join() methods.
// Here's an example of using the split method to create an array of characters:

// The split() method divides a string into an array of substrings and specifies where each split should happen based on a given separator.
// An empty string (""), which splits the string into individual characters.
// A single space (" "), which splits the string wherever spaces occur.
// A dash ("-"), which splits the string at each dash.

let str = "hello";
let charArray = str.split("");
console.log(charArray);

charArray.reverse();
console.log(charArray);

let reversedString = charArray.join("");
console.log(reversedString);