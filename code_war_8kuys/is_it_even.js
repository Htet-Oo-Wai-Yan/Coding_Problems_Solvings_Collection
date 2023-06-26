// In this Kata we are passing a number (n) into a function.

// Your code will determine if the number passed is even (or not).

// The function needs to return either a true or false.

// Numbers may be positive or negative, integers or floats.

// Floats with decimal part non equal to zero are considered UNeven for this kata.

let num1 = 4;
let num2 = 11;
let num3 = 3;

function testEven(n) {
    return n % 2 == 0;
}

console.log(testEven(num1));
console.log(testEven(num2));
console.log(testEven(num3));
