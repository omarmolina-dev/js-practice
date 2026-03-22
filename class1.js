// VARIABLES AND TYPES
const name = "Omar"; // Stores a string value (name)
const age = 22; // Stores a number (age)
const isDeveloper = true; // Stores a boolean value

console.log(typeof name); // Logs the type of 'name' (string)
console.log(typeof age); // Logs the type of 'age' (number)
console.log(typeof isDeveloper); // Logs the type of 'isDeveloper' (boolean)

// TEMPLATE LITERALS
console.log(`Hi, my name is ${name} and I am ${age} years old.`); // Creates a string using variables

// FUNCTIONS
function greet(name) {
    return `Hello, ${name}!`; // Returns a greeting message
}

function multiply(a, b) {
    return a * b; // Returns the product of two numbers
}

// COUNTERS
let counter = 0; // Initializes a counter variable
counter++; // Increments counter by 1
counter++; // Increments counter by 1
counter++; // Increments counter by 1
console.log(counter); // Logs the final counter value

// ARRAYS
const fruits = ["apple", "orange", "grape", "mango"]; // Creates an array of fruits

console.log(fruits); // Logs the full array
console.log(fruits[0]); // Logs the first element
console.log(fruits[2]); // Logs the third element
console.log(fruits.length); // Logs the number of elements

fruits.push("watermelon"); // Adds an element to the end
console.log(fruits); // Logs updated array

fruits.pop(); // Removes the last element
console.log(fruits); // Logs updated array

const uppercase = fruits.map(function(fruit) {
    return fruit.toUpperCase(); // Converts each element to uppercase
});
console.log(uppercase); // Logs new transformed array

// CONDITIONALS
const userAge = 20; // Stores user age

if (userAge >= 18) {
    console.log("You are an adult"); // Runs if age is 18 or older
} else {
    console.log("You are a minor"); // Runs if age is under 18
}

// == VS ===
console.log(5 == "5"); // Compares values (loose equality, ignores type)
console.log(5 === "5"); // Compares value and type (strict equality)

// LOOPS
for (let i = 0; i < fruits.length; i++) {
    console.log(i, fruits[i]); // Iterates using index
}

fruits.forEach(function(fruit) {
    console.log(fruit); // Iterates through each element
});

// COMBINING EVERYTHING
const names = ["Omar", "Sofia", "Yahir", "Luis", "Oskar"]; // Array of names

names.forEach(function(name) {
    console.log(`Hello, ${name}!`); // Greets each name
});


const person = {
    name: "Omar", // Person's name
    age: 22, // Person's age
    city: "Hermosillo", // Person's city
    isDeveloper: true // Person's profession
}
person.email = "omar03molina@gmail.com";

console.log(person);
console.log(person.name);
console.log(person.age);
console.log(person.email); // Logs the email (property now exists)

person.greet = function() {
    return `Hi, I'm ${this.name} from ${this.city}.`; // Method to greet using object properties
}

console.log(person.greet()); // Calls the greet method

const students = [
    { name: "Omar", grade: 85, age: 22, city: "Hermosillo" },
    { name: "Sofia", grade: 92, age: 24, city: "Hermosillo" },
    { name: "Yahir", grade: 78, age: 23, city: "Monterrey" },
    { name: "Luis", grade: 95, age: 21, city: "Cancún" },
    { name: "Oskar", grade: 88, age: 25, city: "México" }
];

console.log(students[0]);
console.log(students[0].name);
console.log(students.length);

students.forEach(function(student) {
    console.log(`${student.name} is ${student.age} years old and lives in ${student.city}.`); // Logs each student's name, age, and city
});

