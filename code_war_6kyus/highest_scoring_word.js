// Given a string of words, you need to find the highest scoring word.

// Each letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3 etc.

// For example, the score of abad is 8 (1 + 2 + 1 + 4).

// You need to return the highest scoring word as a string.

// If two words score the same, return the word that appears earliest in the original string.

// All letters will be lowercase and all inputs will be valid.


let phase1 = 'take me to semynak';
let phase2 = 'aa b';
let phase3 = 'baa';
let phase4 = 'd bb';
let phase5 = 'aaa b';


function high(s){
    let word = s.split(' ');
    let counter = word.map(word => [...word].reduce((a,b) => a+b.charCodeAt(0) - 96 , 0));
    let final = s.split(' ')[counter.indexOf(Math.max(...counter))];

    return final;
}


console.log(high(phase1));
console.log(high(phase2));
console.log(high(phase3));
console.log(high(phase4));
console.log(high(phase5));


