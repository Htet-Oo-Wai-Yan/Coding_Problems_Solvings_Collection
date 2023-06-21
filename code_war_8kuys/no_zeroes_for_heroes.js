// Numbers ending with zeros are boring.

// They might be fun in your world, but not here.

// Get rid of them. Only the ending ones.

// 1450 -> 145
// 960000 -> 96
// 1050 -> 105
// -1050 -> -105
// Zero alone is fine, don't worry about it. Poor guy anyway

let num1 = 1450;
let num2 = 96000000;
let num3 = 1050;
let num4 = -1050;


function noBoringZeros(n) {
    while((Math.abs(n) > 9) && (Math.abs(n) % 10 == 0)){
      n /= 10;
    }
    return n;
  }

console.log(noBoringZeros(num1));
console.log(noBoringZeros(num2));
console.log(noBoringZeros(num3));
console.log(noBoringZeros(num4));
