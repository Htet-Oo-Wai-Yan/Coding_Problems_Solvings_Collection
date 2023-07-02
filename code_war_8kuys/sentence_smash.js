// Sentence Smash
// Write a function that takes an array of words and smashes them together into a sentence and returns the sentence. You can ignore any need to sanitize words or add punctuation, but you should add spaces between each word. Be careful, there shouldn't be a space at the beginning or the end of the sentence!

// Example
// ['hello', 'world', 'this', 'is', 'great']  =>  'hello world this is great'

let arr1 = ['hello','world'];
let arr2 = ['hello','amazing','world'];
let arr3 = ["this", "is", "a", "really", "long", "sentence"];

function smash (words) {
    return words.join(' ');
 };

 console.log(smash(arr1));
 console.log(smash(arr2));
 console.log(smash(arr3));