const person = {name: "Omar", age: 22, city: "Hermosillo"}; // Object representing a person


const{ name, age, city } = person; // Destructuring the object to extract properties into variables
console.log(name); 
console.log(age);

const fruits = ["apple", "banana", "cherry"]; // Array of fruits
const [first, second] = fruits; // Destructuring the array to extract elements into variables
console.log(first);
console.log(second);

const numbers = [1, 2, 3]; // Array of numbers
const moreNumbers = [...numbers, 4, 5,6]; // Using spread operator to create a new array with additional elements
console.log(moreNumbers); // Logs the new array with numbers 1 to 6

const personCopy = {...person, email: "omar03molina@gmail.com"}; // Using spread operator to create a copy of the person object with an additional email property
console.log(personCopy); // Logs the copied object with the new email property  