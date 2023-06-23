// My grandfather always predicted how old people would get, and right before he passed away he revealed his secret!

// In honor of my grandfather's memory we will write a function using his formula!

// Take a list of ages when each of your great-grandparent died.
// Multiply each number by itself.
// Add them all together.
// Take the square root of the result.
// Divide by two.
// Example
// predictAge(65, 60, 75, 55, 60, 63, 64, 45) === 86
// Note: the result should be rounded down to the nearest integer.

// Some random tests might fail due to a bug in the JavaScript implementation. Simply resubmit if that happens to you.
// 65,60,75,55,60,63,64,45

let age1 = 65;
let age2 = 60;
let age3 = 75;
let age4 = 55;
let age5 = 60;
let age6 = 63;
let age7 = 64;
let age8 = 45;

function predictAge(age1,age2,age3,age4,age5,age6,age7,age8){
    let ageList = [(age1 * age1),(age2 * age2),(age3 * age3),(age4 * age4),(age5 * age5),(age6 * age6),(age7 * age7),(age8 * age8)];
    let totalAge = [...ageList].reduce((a,b) => a+b);
    let squareAge = Math.sqrt(totalAge);
    let finalAge = Math.floor(squareAge / 2);
  
    return finalAge;
  }

  console.log(predictAge(age1,age2,age3,age4,age5,age6,age7,age8));//86