// Write Number in Expanded Form
// You will be given a number and you will need to return it as a string in Expanded Form. For example:

// expandedForm(12); // Should return '10 + 2'
// expandedForm(42); // Should return '40 + 2'
// expandedForm(70304); // Should return '70000 + 300 + 4'
// NOTE: All numbers will be whole numbers greater than 0.

// If you liked this kata, check out part 2!!

let num1 = 12;
let num2 = 42;
let num3 = 70304;

function expandedNum(num){
    let numStr = num.toString().split('').reverse();
    let expNum = numStr.map((a,i) => a * Math.pow(10,i));
    let filtNum = expNum.filter(a => a > 0);
    let finalNum = filtNum.reverse().join(' + ');
    return finalNum;
}

console.log(expandedNum(num1));
console.log(expandedNum(num2));
console.log(expandedNum(num3));

