
let a = 2000
let b = 100


// Function expression called divide
const divide = function(a, b) {
  return a / b;
};
console.log(divide(a, b));

// Arrow function called square (one parameter, multiplies it by itself)
let x = 2
const square = x => x * x;
console.log(square(x));

// Arrow function called add (two parameters, adds them together)
let c = 3
let d = 4
const add = (a, b) => a + b;
console.log(add(c, d));

// Export if needed (for Node.js testing)
module.exports = { divide, square, add };