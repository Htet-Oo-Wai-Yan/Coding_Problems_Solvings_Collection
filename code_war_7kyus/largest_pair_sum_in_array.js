// Given a sequence of numbers, find the largest pair sum in the sequence.

// For example

// [10, 14, 2, 23, 19] -->  42 (= 23 + 19)
// [99, 2, 2, 23, 19]  --> 122 (= 99 + 23)
// Input sequence contains minimum two elements and every element is an integer.

let arr1 = [10,14,2,23,19];
let arr2 = [-10, -8, -16, -18, -19];


function largestPairSum (numbers) {
    let numArr = numbers.sort((a,b) => a - b);
    let num1 = '';
    let num2 = '';
    for(let i = 0; i < numArr.length; i++){
      num1 = numArr[numArr.length-1];
      num2 = numArr[numArr.length-2];
      
    }
    return num2 + num1;  
  }

console.log(largestPairSum(arr1));//42
console.log(largestPairSum(arr2));//-18
