// Debug   function getSumOfDigits that takes positive integer to calculate sum of its digits. Assume that argument is an integer.

// Example
// 123  => 6
// 223  => 7
// 1337 => 14


// this is the original conditional the author provided 
// function getSumOfDigits(integer) {
//   var sum = null;
//   var digits =  Math.floor(integer).toString();
//   for(var ix = 1; ix < digits.length; ix = sum + 1) {
//     sum =+ digits[ix + 1]);
//   }
//   console.log(sum);
// }

let num1 = 123;
let num2 = 223;
let num3 = 0;

function getSumOfDigits(intergers){
    let num = intergers.toString().split('');
    
    let sum = num.reduce((acc,dig) => acc + Number(dig), 0);
    return sum;
  }

console.log(getSumOfDigits(num1));//6
console.log(getSumOfDigits(num2));//7
console.log(getSumOfDigits(num3));//0


