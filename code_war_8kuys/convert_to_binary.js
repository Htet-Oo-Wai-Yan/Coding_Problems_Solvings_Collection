// DESCRIPTION:
// Task Overview
// Given a non-negative integer n, write a function to_binary/ToBinary which returns that number in a binary format.

// to_binary(1)  /* should return 1 */
// to_binary(5)  /* should return 101 */
// to_binary(11) /* should return 1011 */
// Example:

// toBinary(1)  /* should return 1 */
// toBinary(5)  /* should return 101 */
// toBinary(11) /* should return 1011 */

let num1 = 1;
let num2 = 5;
let num3 = 11;
let num4 = 50;

function toBinary(n){
    let bNum = Number(n.toString(2));
    return bNum;
}

console.log(toBinary(num1));//1
console.log(toBinary(num2));//101
console.log(toBinary(num3));//1011
console.log(toBinary(num4));//110010


