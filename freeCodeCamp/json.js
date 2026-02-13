// json concept
// JSON stands for JavaScript Object Notation. It is a lightweight data-interchange format that is easy for humans to read and write, and easy for machines to parse and generate. JSON is often used to transmit data between a server and a web application as text.  
// JSON is based on a subset of the JavaScript programming language, and it uses a syntax that is similar to JavaScript objects. However, JSON has some restrictions compared to JavaScript objects. For example, JSON keys must be strings enclosed in double quotes, and JSON values can only be strings, numbers, booleans, null, arrays, or other JSON objects.

// Here's an example of a JSON object:  
const jsonData = {
  "name": "Alice",
  "age": 25,
    "isStudent": true,
    "hobbies": ["reading", "traveling", "coding"],
    "address": {
        "street": "123 Main St",
        "city": "Anytown",
        "country": "USA"
    }
};
console.log(jsonData.name); // Output: Alice
console.log(jsonData.age); // Output: 25
console.log(jsonData.isStudent); // Output: true
console.log(jsonData.hobbies);  // Output: ["reading", "traveling", "coding"]
console.log(jsonData.address.city); // Output: Anytown      
// JSON is commonly used in web development for data exchange between a client and a server. When a client makes a request to a server, the server can respond with JSON data, which the client can then parse and use to update the user interface or perform other actions. JSON is also widely used for configuration files, data storage, and APIs.

// ---------------------------------------------------------------------------

// How Do JSON.parse() and JSON.stringify() Work?
// JSON.parse() is a method that takes a JSON string and converts it into a JavaScript object. It parses the JSON string and creates a corresponding JavaScript object based on the structure of the JSON data. Here's an example:
const jsonString = '{"name": "Bob", "age": 30, "isStudent": false}';
const jsonObject = JSON.parse(jsonString);
console.log(jsonObject.name);   // Output: Bob
console.log(jsonObject.age);    // Output: 30           
console.log(jsonObject.isStudent); // Output: false
// JSON.stringify() is a method that takes a JavaScript object and converts it into a JSON string. It serializes the JavaScript object into a JSON format that can be easily transmitted or stored. Here's an example:
const jsObject = {
    name: "Charlie",
    age: 28,
    isStudent: true
};
const jsonStr = JSON.stringify(jsObject);
console.log(jsonStr); // Output: {"name":"Charlie","age":28,"isStudent":true}

// ----------------------------------------------------------------------
// Optional chaining in JSON
// Optional chaining is a feature in JavaScript that allows you to safely access nested properties of an object without having to check if each level of the object exists. It uses the ?. operator to prevent errors when trying to access properties that may be undefined or null. Here's an example:
const person = {    
    name: "Alice",
    age: 25,
    address: {
        street: "123 Main St",  
        city: "Anytown",
        country: "USA"
    }
};
console.log(person.address?.city); // Output: Anytown
console.log(person.contact?.email); // Output: undefined (instead of throwing an error)    

// object destructuring in JSON
// Object destructuring is a convenient way to extract values from objects and assign them to variables. It allows you to unpack properties from an object into distinct variables. Here's an example:
const user = {
    name: "Bob",
    age: 30,
    email: "bob@example.com"
};
const { name, age, email } = user;
console.log(name); // Output: Bob
console.log(age);  // Output: 30
console.log(email); // Output: bob@example.com

        