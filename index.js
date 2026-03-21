// VARIABLES AND TYPES
// In JavaScript, variables can contain different primitive types.
// This section establishes a few simple typed values for later use.
const name = "Omar";    // string value (text), immutable because const cannot be reassigned
const age = 22;          // number value (numeric literal)
const isDeveloper = true; // boolean value (true/false)

// 'typeof' is an operator that returns the JavaScript type of its operand.
console.log(typeof name); // expected output: "string"
console.log(typeof age);  // expected output: "number"
console.log(typeof isDeveloper); // expected output: "boolean"

// TEMPLATE LITERALS
// Template literals use backticks (`) and allow embedded expressions with ${}.
// This makes constructing dynamic strings easier and more readable than concatenation.
console.log(`Hi, my name is ${name} and I am ${age} years old.`);

// FUNCTIONS
// A function is a reusable block of code that can take inputs and optionally return a value.
function greet(name) {
    // parameter 'name' is a local variable inside this function.
    return `Hello, ${name}!`; // returns a personalized greeting string
}

function multiply(a, b) {
    // parameters 'a' and 'b' are numbers to multiply.
    return a * b; // returns the arithmetic product
}

// Example usage (not required by the code flow):
// console.log(greet("Ana")); // "Hello, Ana!"
// console.log(multiply(3, 4)); // 12

// COUNTERS
// A mutable variable can be updated repeatedly (let allows reassigning values).
let counter = 0; // start at zero
counter++;      // increment operator adds 1 (counter becomes 1)
counter++;      // becomes 2
counter++;      // becomes 3
console.log(counter); // logs the final counter value: 3

// ARRAYS
// An array stores an ordered list of elements (here, strings).
const fruits = ["apple", "orange", "grape", "mango"];

console.log(fruits);        // prints the whole array
console.log(fruits[0]);     // array indexing (first element: "apple")
console.log(fruits[2]);     // third element: "grape"
console.log(fruits.length); // number of items in the array (4)

// Mutating arrays:
fruits.push("watermelon"); // append an item at the end
console.log(fruits);        // now includes "watermelon"

fruits.pop();               // remove and return the last item ("watermelon")
console.log(fruits);        // back to original list

// Higher-order array method map() creates a new array by applying callback to each element.
const uppercase = fruits.map(function(fruit) {
    // callback receives each fruit; return its uppercase version.
    return fruit.toUpperCase();
});
console.log(uppercase); // ["APPLE", "ORANGE", "GRAPE", "MANGO"]

// CONDITIONALS
// Branching logic based on a condition.
const userAge = 20;
if (userAge >= 18) {
    // block executes if the condition evaluates to true.
    console.log("You are an adult");
} else {
    // block executes when the condition is false.
    console.log("You are a minor");
}

// == VS ===
// == does type coercion before comparison, so 5 == "5" is true.
// === checks both value and type, so 5 === "5" is false.
console.log(5 == "5");  // true (loose equality)
console.log(5 === "5"); // false (strict equality)

// LOOPS
// Classic for-loop iterates by index from 0 to length - 1.
for (let i = 0; i < fruits.length; i++) {
    console.log(i, fruits[i]); // each pass prints index and fruit
}

// forEach executes callback for each array element; simpler than manual index loop.
fruits.forEach(function(fruit) {
    console.log(fruit); // prints every fruit string
});

// COMBINING EVERYTHING
// Another array and an operation that uses template strings inside forEach.
const names = ["Omar", "Sofia", "Yahir", "Luis", "Oskar"];

names.forEach(function(name) {
    // greet each person with a dynamically constructed message.
    console.log(`Hello, ${name}!`);
});