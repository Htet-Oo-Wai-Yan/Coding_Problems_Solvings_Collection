// Complete the method which accepts an array of integers, and returns one of the following:

// "yes, ascending" - if the numbers in the array are sorted in an ascending order
// "yes, descending" - if the numbers in the array are sorted in a descending order
// "no" - otherwise
// You can assume the array will always be valid, and there will always be one correct answer.

let arr1 = [1, 2];
let arr2 = [3,2,1];
let arr3 = [];

function isSortedAndHow(array) {
    let ascArr = array.concat().sort((a,b) => a - b).toString();
    let decArr = array.concat().sort((a,b) => b - a).toString();
    
    return ascArr == array ? "yes, ascending":
           decArr == array ? "yes, descending":
           'no';
  }

console.log(isSortedAndHow(arr1));
console.log(isSortedAndHow(arr2));
console.log(isSortedAndHow(arr3));
