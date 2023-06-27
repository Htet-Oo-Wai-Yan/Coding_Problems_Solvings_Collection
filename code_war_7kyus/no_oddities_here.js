// Write a small function that returns the values of an array that are not odd.

// All values in the array will be integers. Return the good values in the order they are given.

let val1 = [0,1];
let val2 = [0,1,2,3];

function noOdds( values ){
    return values.filter(num => num % 2 === 0);
}

console.log(noOdds(val1));
console.log(noOdds(val2));
