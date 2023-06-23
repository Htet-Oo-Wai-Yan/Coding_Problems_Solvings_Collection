// Your task is to write function factorial.

// https://en.wikipedia.org/wiki/Factorial

let num1 = 0;
let num2 = 1;
let num3 = 4;
let num4 = 7;
let num5 = 17;


function factorial(n){
    return (n == 0 || n == 1) ? 1 :
            n * factorial(n - 1);
}

console.log(factorial(num1));//1
console.log(factorial(num2));//1
console.log(factorial(num3));//24
console.log(factorial(num4));//5040
console.log(factorial(num5));//355687428096000

