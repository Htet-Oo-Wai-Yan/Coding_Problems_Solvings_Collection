// DESCRIPTION:
// Your boss decided to save money by purchasing some cut-rate optical character recognition software for scanning in the text of old novels to your database. At first it seems to capture words okay, but you quickly notice that it throws in a lot of numbers at random places in the text.

// Examples (input -> output)
// '! !'                 -> '! !'
// '123456789'           -> ''
// 'This looks5 grea8t!' -> 'This looks great!'
// Your harried co-workers are looking to you for a solution to take this garbled text and remove all of the numbers. Your program will take in a string and clean out all numeric characters, and return a string with spacing and special characters ~#$%^&!@*():;"'.,? all intact.


let str1 = 'This looks5 great8!';
let str2 = 'wHat tHe7 He4ll is8 That!'

function stringClean(s){
    let cleanS = s.replace(/\d/gm, '');
    return cleanS;
}

console.log(stringClean(str1));//This looks great!
console.log(stringClean(str2));//wHat tHe Hell is That!

