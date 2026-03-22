const multiply = (a, b) => a * b; // Arrow function to multiply two numbers
const greet = (name) => `Hello, ${name}!`; // Arrow function to greet by name
const double = n => n * 2; // Arrow function to double a number

console.log(multiply(3, 4)); // Logs the product of 3 and 4
console.log(greet("Omar")); // Logs a greeting for "Omar"
console.log(double(5)); // Logs the result of doubling 5

const numbers = [1, 2, 3, 4, 5]; // Array of numbers

const doubled =numbers.map(n => n * 2); // Creates a new array with each number doubled
const evens = numbers.filter(n => n % 2 === 0); // Creates a new array with only even numbers
const total = numbers.reduce((sum, n) => sum + n, 0); // Sums all numbers in the array

console.log(doubled); // Logs the array of doubled numbers
console.log(evens); // Logs the array of even numbers
console.log(total); // Logs the total sum of the numbers

const age = 22; // Variable to store age
const status = age >= 18 ? "adult" : "minor"; // Uses ternary operator to determine status just like if else
console.log(status); // Logs whether the person is an adult or minor

const username = null; // Simulating a null value for username
const displayName = username || "Anonymous"; // Uses logical OR to provide a default value
console.log(displayName); // Logs "Anonymous" since username is null