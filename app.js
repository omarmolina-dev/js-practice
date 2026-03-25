import { add, multiply } from "./math.js";

console.log(add(5, 3));
console.log(multiply(4, 6));

import calculator from "./math.js";

console.log(calculator(10, "+", 5));
console.log(calculator(10, "*", 3));