console.log("Hello, World!");

// objects are collections of key-value pairs. They are used to store and organize data in JavaScript.

const person = {
  name: "John",
  age: 30,
  city: "New York",
};

// You can access the properties of an object using dot notation or bracket notation.

console.log(person.name);
console.log(person["age"]);

// You can also add new properties to an object or modify existing ones.
person.job = "Developer";
person.age = 31;
console.log(person);

// Objects can also contain methods, which are functions that are properties of an object.

person.greet = function () {
  console.log("Hello, my name is " + this.name);
};

person.greet(); // Output: Hello, my name is John

// ways to rempve a property from an object
delete person.city;
console.log(person);

// Another way to remove properties is by using destructuring assignment with rest parameters.
const persons = {
  name: "Bob",
  age: 25,
  job: "Designer",
  city: "New York",
};

const { job, city, ...remainingProperties } = persons;

// { name: "Bob", age: 25 }
console.log(remainingProperties);

// How to Check If an Object Has a Property?
console.log(person.hasOwnProperty("name")); // true
console.log(person.hasOwnProperty("city")); // false

// Another way to check if an object has a property is by using the in operator.
console.log("name" in person); // true
console.log("city" in person); // false

// The third method involves checking if a property is undefined. This approach can be useful, but it has some limitations. Here's an example:

const car = {
  brand: "Toyota",
  model: "Corolla",
  year: 2020,
};

console.log(car.brand !== undefined); // true
console.log(car.color !== undefined); // false

//  Accessing Properties from Nested Objects and Arrays in Objects?
const student = {
  name: "Alice",
  age: 22,
  courses: ["Math", "Science", "History"],
  address: {
    street: "123 Main St",
    city: "Anytown",
    country: "USA",
  },
};
console.log(student.courses[0]); // Output: Math
console.log(student.address.city); // Output: Anytown

// Object constructors and the new keyword
function Person_(name, age) {
  this.name = name;
  this.age = age;
}   
const person1 = new Person_("Charlie", 28);
console.log(person1.name); // Output: Charlie
console.log(person1.age); // Output: 28

