// Your task is to sum the differences between consecutive pairs in the array in descending order.

// Example
// [2, 1, 10]  -->  9
// In descending order: [10, 2, 1]

// Sum: (10 - 2) + (2 - 1) = 8 + 1 = 9

let arr1 = [1, 2, 10];
let arr2 = [-3, -2, -1];

function sumOfDifferences(arr) {
    return arr.length <= 1 ? 0 : Math.max(...arr) - Math.min(...arr);
}

console.log(sumOfDifferences(arr1));//9
console.log(sumOfDifferences(arr2));//2
