// *** No Loops Allowed ***

// You will be given an array a and a value x. All you need to do is check whether the provided array contains the value, without using a loop.

// Array can contain numbers or strings. x can be either. Return true if the array contains the value, false if not. With strings you will need to account for case.

// Looking for more, loop-restrained fun? Check out the other kata in the series:

let arr1 = [66,100];
let num1 = 66;

let arr2 = [6,1000,88,900];
let num2 = 2;

function check(a,x){
    return a.includes(x);
};

console.log(check(arr1,num1));//true
console.log(check(arr2,num2));//false
