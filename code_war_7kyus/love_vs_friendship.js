// f　a = 1, b = 2, c = 3 ... z = 26

// Then l + o + v + e = 54

// and f + r + i + e + n + d + s + h + i + p = 108

// So friendship is twice as strong as love :-)

// Your task is to write a function which calculates the value of a word based off the sum of the alphabet positions of its characters.

// The input will always be made of only lowercase letters and will never be empty.

let str1 = "attitude";
let str2 = 'friends';
let str3 = 'family';
let str4 = 'selfness';
let str5 = 'knowkedge';


function wordsToMarks(string){
    let char = string.split('');
    let sum = char.reduce((a,b) => a+b.charCodeAt(0) - 96, 0);
    return sum;
  };

console.log(wordsToMarks(str1));//100
console.log(wordsToMarks(str2));//75
console.log(wordsToMarks(str3));//66
console.log(wordsToMarks(str4));//99
console.log(wordsToMarks(str5));//95