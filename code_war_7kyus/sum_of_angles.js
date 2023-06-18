// DESCRIPTION:
// Find the total sum of internal angles (in degrees) in an n-sided simple polygon. N will be greater than 2.

let angle1 = 3;
let angle2 = 7;
let angle3 = 96;

function angle(n){
    let totalSum = (n - 2) * 180;//cause n is always greater than 2!As the description says...
    return totalSum;
}

console.log(angle(angle1));
console.log(angle(angle2));
console.log(angle(angle3));
